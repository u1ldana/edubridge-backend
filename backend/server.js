require('dotenv').config();
const express      = require('express');
const cors         = require('cors');
const path         = require('path');
const bcrypt       = require('bcryptjs');
const rateLimit    = require('express-rate-limit');
const helmet       = require('helmet');
const { createClient } = require('@supabase/supabase-js');
const Stripe       = require('stripe');
 
// ── Stripe (тек env-тен, кодта жазылмайды) ───────────────
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('⚠️  STRIPE_SECRET_KEY env-те жоқ! backend/.env-ге қосыңыз.');
}
const stripe = Stripe(process.env.STRIPE_SECRET_KEY || '');
 
const app  = express();
const PORT = Number(process.env.PORT || 3000);
 
// ── Helmet (HTTP security headers) ───────────────────────
app.use(helmet({
  contentSecurityPolicy: false, // frontend CDN ресурстары үшін өшірілді
  crossOriginEmbedderPolicy: false,
}));
 
// ── CORS (тек белгілі origin-дерге) ──────────────────────
const allowedOrigins = (process.env.FRONTEND_ORIGIN || '*')
  .split(',').map(s => s.trim());
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
      cb(null, true);
    } else {
      cb(new Error('CORS: рұқсат жоқ: ' + origin));
    }
  },
  credentials: true
}));
 
app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, '..', 'diploma_fixed')));
 
// ── Rate Limiting ─────────────────────────────────────────
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 20,
  message: { ok: false, message: 'Тым көп сұраныс. 15 минуттан кейін қайталаңыз.' },
  standardHeaders: true, legacyHeaders: false,
});
const generalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  message: { ok: false, message: 'Тым көп сұраныс.' },
  standardHeaders: true, legacyHeaders: false,
});
app.use('/api/login', authLimiter);
app.use('/api/register', authLimiter);
app.use('/api/', generalLimiter);
 
// ── Supabase ──────────────────────────────────────────────
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  console.warn('⚠️  SUPABASE_URL немесе SUPABASE_KEY env-те жоқ!');
}
const supabase = createClient(
  process.env.SUPABASE_URL  || '',
  process.env.SUPABASE_KEY  || '',
  { auth: { persistSession: false } }
);
 
// ── pendingCodes (auto-cleanup TTL) ───────────────────────
const pendingCodes = new Map();
const CODE_TTL = 10 * 60 * 1000;
// Мерзімі өткен кодтарды тазалау (жад ағуына жол бермеу)
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of pendingCodes.entries()) {
    if (now > val.expires) pendingCodes.delete(key);
  }
}, 5 * 60 * 1000);
 
// ── Helpers ───────────────────────────────────────────────
function code6()       { return String(Math.floor(100000 + Math.random() * 900000)); }
function normEmail(e)  { return String(e || '').trim().toLowerCase(); }
function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function safeStr(v, max=500) { return String(v || '').trim().slice(0, max); }
 
// ── Email (Resend) ────────────────────────────────────────
async function sendEmail({ to, name, subject, code, message }) {
  if (!process.env.RESEND_API_KEY) throw new Error('RESEND_API_KEY env-те жоқ.');
  const html = `
    <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;
      background:#f9f0f2;border-radius:16px;">
      <h1 style="color:#a60f2d;font-size:24px;margin:0 0 16px;">EduBridge Türkiye</h1>
      <p style="color:#333;font-size:15px;">Сәлем, <strong>${safeStr(name)}</strong>!</p>
      <p style="color:#333;font-size:15px;">${message}</p>
      ${code ? `<div style="text-align:center;margin:28px 0;">
        <div style="display:inline-block;font-size:42px;font-weight:900;letter-spacing:10px;
          color:#a60f2d;background:#fff;padding:20px 32px;border-radius:14px;
          border:2px solid #a60f2d;">${code}</div>
        <p style="color:#888;font-size:13px;margin-top:12px;">⏱ Код 10 минут ішінде жарамды</p>
      </div>` : ''}
      <hr style="border:none;border-top:1px solid #e8d5d8;margin:20px 0;">
      <p style="color:#aaa;font-size:12px;">EduBridge Türkiye · edubridge.kz</p>
    </div>`;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({ from: 'EduBridge <onboarding@resend.dev>', to: [to], subject, html }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || JSON.stringify(data));
  return data;
}
 
// ── Health ────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});
 
// ── REGISTER Step 1 ───────────────────────────────────────
app.post('/api/register/start', async (req, res) => {
  try {
    const name     = safeStr(req.body.name, 100);
    const email    = normEmail(req.body.email);
    const password = safeStr(req.body.password, 200);
 
    if (!name || !email || !password)
      return res.status(400).json({ ok:false, message:'Аты-жөні, email, құпиясөз керек.' });
    if (!validEmail(email))
      return res.status(400).json({ ok:false, message:'Email форматы дұрыс емес.' });
    if (password.length < 6)
      return res.status(400).json({ ok:false, message:'Құпиясөз кемінде 6 таңба болуы керек.' });
 
    const { data: existing } = await supabase
      .from('students').select('id').eq('email', email).maybeSingle();
    if (existing)
      return res.status(409).json({ ok:false, message:'Бұл email бұрын тіркелген.' });
 
    // Паролді хэштеу (bcrypt)
    const hashedPassword = await bcrypt.hash(password, 10);
    const code = code6();
    pendingCodes.set(email, { code, name, email, hashedPassword, expires: Date.now() + CODE_TTL });
 
    await sendEmail({
      to: email, name,
      subject: 'EduBridge — Тіркелу коды',
      code,
      message: 'Тіркелуді аяқтау үшін төмендегі 6 таңбалы кодты енгізіңіз:'
    });
    res.json({ ok:true, message:'Код email-ға жіберілді.' });
  } catch (err) {
    console.error('register/start error:', err.message);
    res.status(500).json({ ok:false, message:'Email жіберілмеді: ' + err.message });
  }
});
 
// ── REGISTER Step 2 ───────────────────────────────────────
app.post('/api/register/verify', async (req, res) => {
  try {
    const email = normEmail(req.body.email);
    const code  = safeStr(req.body.code, 10);
    const item  = pendingCodes.get(email);
 
    if (!item)
      return res.status(400).json({ ok:false, message:'Код табылмады. Қайта бастаңыз.' });
    if (Date.now() > item.expires) {
      pendingCodes.delete(email);
      return res.status(400).json({ ok:false, message:'Код уақыты бітті.' });
    }
    if (item.code !== code)
      return res.status(400).json({ ok:false, message:'Код қате.' });
 
    const { data, error } = await supabase.from('students').insert([{
      fullname: item.name,
      email:    item.email,
      password: item.hashedPassword, // хэшталған пароль
      role:     'user',
      status:   'Active',
      country:  'Қазақстан',
    }]).select().single();
 
    if (error) throw error;
    pendingCodes.delete(email);
 
    // Паролді клиентке қайтармаймыз
    const { password: _pw, ...safeUser } = data;
    res.json({ ok:true, message:'Тіркелу сәтті!', user: safeUser });
  } catch (err) {
    console.error('register/verify error:', err.message);
    res.status(500).json({ ok:false, message:err.message });
  }
});
 
// ── LOGIN ─────────────────────────────────────────────────
app.post('/api/login', async (req, res) => {
  try {
    const email    = normEmail(req.body.email);
    const password = safeStr(req.body.password, 200);
 
    if (!email || !password)
      return res.status(400).json({ ok:false, message:'Email және пароль керек.' });
 
    // Admin: env-тен оқу (кодта hardcode жоқ)
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@edubridge.com';
    const adminPass  = process.env.ADMIN_PASSWORD || '';
    if (email === adminEmail && adminPass && password === adminPass) {
      return res.json({
        ok: true, role: 'admin',
        user: { id:'admin-local', fullname:'Admin', name:'Admin', email, role:'admin' }
      });
    }
 
    // ── Mentor login БІРІНШІ тексеріледі ──────────────────
    // Себебі: кейбір менторлар students кестесіне де қосылған болуы мүмкін.
    // Mentor болса — mentor.html-ге, болмаса ғана student тексеру.
    const { data: mentor } = await supabase
      .from('mentors').select('*').eq('email', email).maybeSingle();
    if (mentor) {
      let passwordMatch = false;
      if (mentor.password && mentor.password.startsWith('$2')) {
        passwordMatch = await bcrypt.compare(password, mentor.password);
      } else {
        passwordMatch = String(mentor.password || '') === password;
        if (passwordMatch) {
          const hashed = await bcrypt.hash(password, 10);
          await supabase.from('mentors').update({ password: hashed }).eq('email', email);
        }
      }
      if (passwordMatch) {
        const { password: _pw, ...safeMentor } = mentor;
        return res.json({
          ok: true, role: 'mentor',
          user: { ...safeMentor, name: safeMentor.name || safeMentor.fullname || 'Mentor', spec: safeMentor.spec || safeMentor.speciality || '' }
        });
      }
    }
 
    // ── Student login (mentor емес болса ғана) ─────────────
    const { data: student } = await supabase
      .from('students').select('*').eq('email', email).maybeSingle();
    if (student) {
      let passwordMatch = false;
      if (student.password && student.password.startsWith('$2')) {
        passwordMatch = await bcrypt.compare(password, student.password);
      } else {
        passwordMatch = String(student.password || '') === password;
        if (passwordMatch) {
          const hashed = await bcrypt.hash(password, 10);
          await supabase.from('students').update({ password: hashed }).eq('email', email);
        }
      }
      if (passwordMatch) {
        const { password: _pw, ...safeUser } = student;
        return res.json({ ok:true, role:'user', user: safeUser });
      }
    }
 
    res.status(401).json({ ok:false, message:'Email немесе құпиясөз қате.' });
  } catch (err) {
    res.status(500).json({ ok:false, message:err.message });
  }
});
 
// ── STUDENTS ──────────────────────────────────────────────
app.get('/api/students', async (req, res) => {
  const { data, error } = await supabase
    .from('students').select('id,fullname,email,phone,city,country,specialty_interest,english_level,budget,mentor_id,mentor_email,mentor_name,status,blocked,role,created_at')
    .order('created_at', { ascending:false });
  if (error) return res.status(500).json({ ok:false, message:error.message });
  res.json({ ok:true, students:(data||[]).map(s => ({...s, name: s.name || s.fullname || 'Student'})) });
});
 
app.delete('/api/students/:email', async (req, res) => {
  const emailToDelete = normEmail(req.params.email);
  console.log('🗑️  DELETE student:', emailToDelete);
  const { data, error } = await supabase.from('students').delete()
    .eq('email', emailToDelete)
    .select();
  if (error) {
    console.error('❌ DELETE error:', error.message, error.code, error.hint);
    return res.status(500).json({ ok:false, message: error.message, hint: 'Егер RLS қатесі болса — .env-тегі SUPABASE_KEY-ді service_role key-ге ауыстырыңыз (Supabase Dashboard → Settings → API).' });
  }
  console.log('✅ Deleted rows:', data?.length ?? 'unknown');
  res.json({ ok:true, deleted: data?.length ?? 1 });
});
 
// ── MENTORS ───────────────────────────────────────────────
app.get('/api/mentors', async (req, res) => {
  const { data, error } = await supabase
    .from('mentors').select('id,fullname,email,phone,speciality,status,created_at')
    .order('created_at', { ascending:false });
  if (error) return res.status(500).json({ ok:false, message:error.message });
  res.json({ ok:true, mentors:(data||[]).map(m => ({...m, name: m.name || m.fullname || 'Mentor', spec: m.spec || m.speciality || ''})) });
});
 
app.post('/api/mentors', async (req, res) => {
  try {
    const name     = safeStr(req.body.name || req.body.fullname, 100);
    const email    = normEmail(req.body.email);
    const password = safeStr(req.body.password, 200);
    const spec     = safeStr(req.body.spec || req.body.speciality, 200);
    const phone    = safeStr(req.body.phone, 30);
 
    if (!name || !email || !password)
      return res.status(400).json({ ok:false, message:'Аты, email, пароль міндетті.' });
 
    const { data:ex1 } = await supabase.from('mentors').select('id').eq('email',email).maybeSingle();
    const { data:ex2 } = await supabase.from('students').select('id').eq('email',email).maybeSingle();
    if (ex1 || ex2)
      return res.status(409).json({ ok:false, message:'Бұл email бұрын тіркелген.' });
 
    const hashedPassword = await bcrypt.hash(password, 10);
    const { data, error } = await supabase.from('mentors')
      .insert([{ fullname:name, email, password:hashedPassword, speciality:spec, phone, status:'Active' }])
      .select('id,fullname,email,phone,speciality,status,created_at').single();
    if (error) throw error;
 
    let emailSent = true, emailWarning = null;
    try {
      await sendEmail({ to:email, name, subject:'EduBridge — Ментор аккаунты', code:password,
        message:`Сізге EduBridge платформасында ментор аккаунты ашылды. Login: ${email}` });
    } catch(e) { emailSent = false; emailWarning = e.message; }
 
    res.json({ ok:true, message: emailSent ? 'Ментор қосылды, email жіберілді.' : 'Ментор қосылды (email жіберілмеді: Resend domain verify жасаңыз).', mentor:data, emailSent, emailWarning });
  } catch (err) {
    res.status(500).json({ ok:false, message:err.message });
  }
});
 
// ── UNIVERSITIES ──────────────────────────────────────────
function slugifyUni(text){
  return String(text||'university').toLowerCase()
    .replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s').replace(/ı/g,'i').replace(/ö/g,'o').replace(/ç/g,'c')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || ('uni-'+Date.now());
}
 
app.get('/api/universities', async (req, res) => {
  try {
    const { data, error } = await supabase.from('universities').select('*').order('created_at',{ascending:false});
    if (error) throw error;
    res.json({ ok:true, universities:data||[] });
  } catch (err) { res.status(500).json({ ok:false, message:err.message }); }
});
 
app.post('/api/universities', async (req, res) => {
  try {
    const b = req.body || {};
    const name = safeStr(b.name, 200);
    const city = safeStr(b.city, 100);
    if (!name || !city) return res.status(400).json({ ok:false, message:'Атауы және қала керек.' });
    const payload = { name, slug:safeStr(b.slug||slugifyUni(name),100), city, country:safeStr(b.country||'Türkiye',100), type:safeStr(b.type,100), language:safeStr(b.language,200), programs:safeStr(b.programs,500), description:safeStr(b.description,2000), image_url:safeStr(b.image_url||b.image,500), tuition:safeStr(b.tuition,200), rating:safeStr(b.rating,50), accreditation:safeStr(b.accreditation,200), advantages:safeStr(b.advantages,1000), campuses:safeStr(b.campuses,300), exchange_programs:safeStr(b.exchange_programs,500), website:safeStr(b.website,300), levels:safeStr(b.levels,200), why_choose:safeStr(b.why_choose,1000), admission_requirements:safeStr(b.admission_requirements,1000), majors:safeStr(b.majors,500), scholarships:safeStr(b.scholarships,500), accommodation:safeStr(b.accommodation,500), education_format:safeStr(b.education_format,200), status:'active' };
    const { data, error } = await supabase.from('universities').insert([payload]).select().single();
    if (error) throw error;
    res.json({ ok:true, university:data });
  } catch (err) { res.status(500).json({ ok:false, message:err.message }); }
});
 
app.put('/api/universities/:id', async (req, res) => {
  try {
    const b = req.body || {};
    const name = safeStr(b.name, 200);
    const city = safeStr(b.city, 100);
    if (!name || !city) return res.status(400).json({ ok:false, message:'Атауы және қала керек.' });
    const payload = { name, slug:safeStr(b.slug||slugifyUni(name),100), city, country:safeStr(b.country||'Türkiye',100), type:safeStr(b.type,100), language:safeStr(b.language,200), programs:safeStr(b.programs,500), description:safeStr(b.description,2000), image_url:safeStr(b.image_url||b.image,500), tuition:safeStr(b.tuition,200), rating:safeStr(b.rating,50), accreditation:safeStr(b.accreditation,200), advantages:safeStr(b.advantages,1000), campuses:safeStr(b.campuses,300), exchange_programs:safeStr(b.exchange_programs,500), website:safeStr(b.website,300), levels:safeStr(b.levels,200), why_choose:safeStr(b.why_choose,1000), admission_requirements:safeStr(b.admission_requirements,1000), majors:safeStr(b.majors,500), scholarships:safeStr(b.scholarships,500), accommodation:safeStr(b.accommodation,500), education_format:safeStr(b.education_format,200), status:'active', updated_at:new Date().toISOString() };
    const { data, error } = await supabase.from('universities').update(payload).eq('id', req.params.id).select().single();
    if (error) throw error;
    res.json({ ok:true, university:data });
  } catch (err) { res.status(500).json({ ok:false, message:err.message }); }
});
 
app.delete('/api/universities/:id', async (req, res) => {
  try {
    const { error } = await supabase.from('universities').delete().eq('id', req.params.id);
    if (error) throw error;
    res.json({ ok:true });
  } catch (err) { res.status(500).json({ ok:false, message:err.message }); }
});
 
// ── MENTOR ASSIGNMENTS ────────────────────────────────────
app.post('/api/assign-mentor', async (req, res) => {
  try {
    const studentEmail = normEmail(req.body.studentEmail);
    const mentorId = safeStr(req.body.mentorId, 100);
    const mentorEmail = normEmail(req.body.mentorEmail);
    if (!studentEmail) return res.status(400).json({ ok:false, message:'Студент email керек.' });
    let mentor = null;
    if (mentorId) { const r = await supabase.from('mentors').select('*').eq('id',mentorId).maybeSingle(); mentor=r.data; }
    if (!mentor && mentorEmail) { const r = await supabase.from('mentors').select('*').eq('email',mentorEmail).maybeSingle(); mentor=r.data; }
    if (!mentor) return res.status(404).json({ ok:false, message:'Ментор табылмады.' });
    const { data, error } = await supabase.from('students').update({ mentor_id:mentor.id, mentor_email:mentor.email, mentor_name:mentor.fullname||mentor.name||'Mentor' }).eq('email', studentEmail).select().single();
    if (error) throw error;
    res.json({ ok:true, message:'Студент менторға бекітілді.', student:data, mentor });
  } catch (err) { res.status(500).json({ ok:false, message:err.message }); }
});
 
app.get('/api/mentor/:email/students', async (req, res) => {
  try {
    const email = normEmail(req.params.email);
    const { data: mentor, error: mentorErr } = await supabase.from('mentors').select('*').eq('email',email).maybeSingle();
    if (mentorErr) throw mentorErr;
    if (!mentor) return res.json({ ok:true, mentor:null, students:[] });
    let students = [];
    const byEmail = await supabase.from('students').select('id,fullname,email,phone,city,specialty_interest,status,mentor_email,mentor_id,created_at').eq('mentor_email',email).order('created_at',{ascending:false});
    if (!byEmail.error && byEmail.data) students = byEmail.data;
    if (!students.length && mentor.id) {
      const byId = await supabase.from('students').select('id,fullname,email,phone,city,specialty_interest,status,mentor_email,mentor_id,created_at').eq('mentor_id',mentor.id).order('created_at',{ascending:false});
      if (!byId.error && byId.data) students = byId.data;
    }
    const { password:_pw, ...safeMentor } = mentor;
    res.json({ ok:true, mentor:{...safeMentor, name:mentor.name||mentor.fullname||'Mentor', spec:mentor.spec||mentor.speciality||''}, students });
  } catch (err) { res.status(500).json({ ok:false, message:err.message }); }
});
 
// ── DEADLINES ─────────────────────────────────────────────
app.post('/api/deadlines', async (req, res) => {
  try {
    const email = normEmail(req.body.email);
    const name  = safeStr(req.body.name||'Student', 100);
    const title = safeStr(req.body.title, 200);
    const date  = safeStr(req.body.date, 30);
    const note  = safeStr(req.body.note, 500);
    if (!email || !validEmail(email)) return res.status(400).json({ ok:false, message:'Студент email табылмады.' });
    if (!title || !date) return res.status(400).json({ ok:false, message:'Дедлайн атауы мен күні керек.' });
    await sendEmail({ to:email, name, subject:'EduBridge — Дедлайн ескертуі', message:`Жаңа дедлайн: <b>${title}</b><br>Күні: <b>${date}</b>${note ? '<br>Ескерту: '+note : ''}` });
    let saved = null;
    try { const {data,error}=await supabase.from('deadlines').insert([{student_email:email,title,deadline_date:date,note,status:'active'}]).select().single(); if(!error)saved=data; } catch(_){}
    res.json({ ok:true, message:'Дедлайн сақталды және email жіберілді.', deadline:saved||{id:Date.now(),title,date,note} });
  } catch (err) { res.status(500).json({ ok:false, message:'Дедлайн email жіберілмеді: '+err.message }); }
});
 
// ── CONSULTATIONS ─────────────────────────────────────────
app.post('/api/consultations', async (req, res) => {
  try {
    const email = normEmail(req.body.email);
    const name  = safeStr(req.body.name||'Student', 100);
    const topic = safeStr(req.body.topic, 200);
    const preferredDate = safeStr(req.body.preferredDate||req.body.date, 30);
    const question = safeStr(req.body.question, 1000);
    const paid = !!req.body.paid;
    const amount = Number(req.body.amount || 0);
    if (!email || !validEmail(email)) return res.status(400).json({ ok:false, message:'Студент email табылмады.' });
    if (!topic || !question) return res.status(400).json({ ok:false, message:'Тақырып пен сұрақ керек.' });
    let saved = null;
    try { const {data,error}=await supabase.from('consultations').insert([{student_email:email,topic,preferred_date:preferredDate||null,question,status:paid?'paid_pending':'pending',paid,amount}]).select().single(); if(!error)saved=data; } catch(_){}
    await sendEmail({ to:email, name, subject:'EduBridge — Консультация қабылданды', message:`Тақырып: <b>${topic}</b>${preferredDate?'<br>Күн: <b>'+preferredDate+'</b>':''}<br>Статус: <b>${paid?'Төленді':'Күтілуде'}</b>` });
    res.json({ ok:true, message:'Консультация сақталды және email жіберілді.', consultation:saved||{id:'cr_'+Date.now(),topic,preferredDate,question,paid,amount,status:paid?'paid_pending':'pending'} });
  } catch (err) { res.status(500).json({ ok:false, message:'Консультация жіберілмеді: '+err.message }); }
});
 
// ── STRIPE Payment Intent ─────────────────────────────────
app.post('/api/stripe/create-payment-intent', async (req, res) => {
  try {
    if (!process.env.STRIPE_SECRET_KEY) return res.status(500).json({ ok:false, message:'STRIPE_SECRET_KEY env-те жоқ.' });
    const { amount=5000, currency='kzt', topic, email } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency,
      metadata: { topic: safeStr(topic,200)||'Консультация', email: safeStr(email,200)||'' },
      description: `EduBridge консультация: ${safeStr(topic,200)||'Консультация'}`,
    });
    res.json({ ok:true, clientSecret: paymentIntent.client_secret });
  } catch (err) { res.status(500).json({ ok:false, message:err.message }); }
});
 
 
// ── AI PROXY (GROQ) ───────────────────────────────────────
// Browser-дан API key көрінбесін деп server арқылы прокси
app.post('/api/ai/chat', async (req, res) => {
  try {
    const groqKey = process.env.GROQ_API_KEY || process.env.GROQ_KEY || '';
    if (!groqKey) return res.status(500).json({ ok:false, message:'GROQ_API_KEY env-те жоқ. .env файлына қосыңыз.' });
 
    const { messages, systemPrompt } = req.body;
    if (!messages || !Array.isArray(messages)) return res.status(400).json({ ok:false, message:'messages array керек.' });
 
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + groqKey },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: systemPrompt
          ? [{ role: 'system', content: systemPrompt }, ...messages]
          : messages,
        max_tokens: 500,
        temperature: 0.7
      })
    });
    const data = await groqRes.json();
    if (data.error) return res.status(500).json({ ok:false, message: data.error.message });
    const reply = data.choices?.[0]?.message?.content || 'Жауап алынбады.';
    res.json({ ok:true, reply });
  } catch (err) { res.status(500).json({ ok:false, message: err.message }); }
});
 
app.listen(PORT, () => {
  console.log(`\n✅ EduBridge backend: http://localhost:${PORT}`);
  console.log(`📧 Resend: ${process.env.RESEND_API_KEY ? '✅' : '❌ RESEND_API_KEY жоқ!'}`);
  console.log(`🗄️  Supabase: ${process.env.SUPABASE_URL ? '✅' : '❌ SUPABASE_URL жоқ!'}`);
  console.log(`💳 Stripe: ${process.env.STRIPE_SECRET_KEY ? '✅' : '❌ STRIPE_SECRET_KEY жоқ!'}`);
  console.log(`🔐 Admin: ${process.env.ADMIN_EMAIL||'admin@edubridge.com'} / ${process.env.ADMIN_PASSWORD ? '✅ env-тен' : '❌ ADMIN_PASSWORD жоқ!'}`);
  console.log(`\n📌 http://localhost:${PORT}/index.html\n`);
});



app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { topic, date, question, email } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "kzt",
            product_data: {
              name: "EduBridge Türkiye Consultation",
              description: `${topic} | ${date}`,
            },
            unit_amount: 500000,
          },
          quantity: 1,
        },
      ],
      metadata: {
        topic,
        date,
        question,
        email,
      },
      success_url: "http://localhost:3000/success.html",
      cancel_url: "http://localhost:3000/profile.html#consultations",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: err.message });
  }
});