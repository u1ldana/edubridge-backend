(function(){
  const API = window.BACKEND_URL || 'http://localhost:3000';
  const $ = (s,r=document)=>r.querySelector(s);
  const LS = {
    get(k,f){ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):f; }catch(e){ return f; } },
    set(k,v){ localStorage.setItem(k, JSON.stringify(v)); }
  };
  function say(out,msg,color='tomato'){ if(out){out.textContent=msg; out.style.color=color;} else alert(msg); }
  async function api(path, options={}){
    const res = await fetch(API + path, {
      headers: {'Content-Type':'application/json'},
      ...options,
      body: options.body ? JSON.stringify(options.body) : undefined
    });
    const data = await res.json().catch(()=>({ok:false,message:'Backend response error'}));
    if(!res.ok || data.ok === false) throw new Error(data.message || ('HTTP '+res.status));
    return data;
  }
 
  function patchRegisterBackend(){
    const form = $('#registerForm');
    if(!form || form.dataset.backendV40 === '1') return;
    const fresh = form.cloneNode(true);
    fresh.dataset.backendV40 = '1';
    form.parentNode.replaceChild(fresh, form);
 
    fresh.addEventListener('submit', async function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      const name = $('#regName')?.value.trim();
      const email = $('#regEmail')?.value.trim().toLowerCase();
      const password = $('#regPassword')?.value.trim();
      const out = $('#registerMessage');
      if(!name || !email || !password) return say(out,'Барлық өрістерді толтырыңыз.');
      if(password.length < 6) return say(out,'Құпиясөз кемінде 6 таңба болуы керек.');
      try{
        say(out,'Backend email code жіберіп жатыр...','#fbbf24');
        await api('/api/register/start', {method:'POST', body:{name,email,password}});
        const code = prompt('Код email-ға жіберілді. 6 таңбалы кодты енгізіңіз:');
        if(!code) return say(out,'Код енгізілмеді.');
        const data = await api('/api/register/verify', {method:'POST', body:{email,code}});
        const user = data.user || {fullname:name,email,password,role:'user'};
        localStorage.setItem('currentUserEmail', email);
        localStorage.setItem('username', user.fullname || name);
        localStorage.setItem('role', 'user');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('u_'+email+'_profileData', JSON.stringify({name:user.fullname||name,email,city:user.city||'',major:user.specialty_interest||'',goal:''}));
        const users = LS.get('edu_users',[]).filter(u=>(u.email||'').toLowerCase()!==email);
        users.push({name:user.fullname||name, fullname:user.fullname||name, email, password, role:'user', verified:true, createdAt:new Date().toISOString()});
        LS.set('edu_users', users);
        say(out,'✅ Email расталды. Backend арқылы Supabase-қа сақталды.','lightgreen');
        setTimeout(()=>location.href='profile.html',900);
      }catch(err){
        console.error(err);
        say(out,'Backend қатесі: '+err.message+' | backend іске қосылғанын тексер: npm start');
      }
    }, true);
  }
 
  async function loadStudentsBackend(){
    if(!location.pathname.toLowerCase().includes('admin')) return;
    try{
      const data = await api('/api/students');
      const students = (data.students||[]).map(s=>({
        id:s.id,
        name:s.fullname || s.name || 'Student',
        fullname:s.fullname || s.name || 'Student',
        email:s.email,
        password:s.password || '',
        role:'user',
        status:s.status || 'Active',
        city:s.city || 'Қала жоқ',
        specialty_interest:s.specialty_interest || s.speciality || 'Белгісіз',
        createdAt:s.created_at
      }));
 
      // Ағымдағы сессия пайдаланушысын сақтап қал (admin, mentor шығарып жіберілмесін)
      const currentEmail = (localStorage.getItem('currentUserEmail') || '').toLowerCase();
      const currentRole  = localStorage.getItem('role') || '';
      const existing     = LS.get('edu_users', []);
 
      // Студент емес (admin/mentor) пайдаланушыларды сақта
      const nonStudents = existing.filter(u =>
        (u.role === 'admin' || u.role === 'mentor') &&
        (u.email || '').toLowerCase() !== currentEmail
      );
 
      // Ағымдағы пайдаланушы студент емес болса — қайта қос
      const currentUser = existing.find(u => (u.email||'').toLowerCase() === currentEmail);
      const mergedUsers = [...students];
      nonStudents.forEach(u => {
        if (!mergedUsers.find(x => (x.email||'').toLowerCase() === (u.email||'').toLowerCase())) {
          mergedUsers.push(u);
        }
      });
      if (currentUser && currentRole !== 'user' && !mergedUsers.find(x => (x.email||'').toLowerCase() === currentEmail)) {
        mergedUsers.push(currentUser);
      }
 
      LS.set('edu_users', mergedUsers);
      if(typeof window.renderStudents === 'function') window.renderStudents();
    }catch(e){ console.warn('Backend students load failed:', e.message); }
  }
 
  async function loadMentorsBackend(){
    if(!location.pathname.toLowerCase().includes('admin')) return;
    try{
      const data = await api('/api/mentors');
      const mentors = (data.mentors||[]).map(m=>({
        id:m.id, name:m.name||m.fullname||'Mentor', fullname:m.name||m.fullname||'Mentor',
        email:m.email, password:m.password||'', spec:m.spec||m.speciality||'', phone:m.phone||'', createdAt:m.created_at
      }));
      LS.set('edu_mentors', mentors);
 
      const currentEmail = (localStorage.getItem('currentUserEmail') || '').toLowerCase();
 
      // Mentor емес пайдаланушыларды сақта (admin сессиясы жоғалмасын)
      const allUsers = LS.get('edu_users', []);
      const nonMentorUsers = allUsers.filter(u => (u.role||'user') !== 'mentor');
 
      // Менторларды user ретінде қос
      mentors.forEach(m => {
        const exists = nonMentorUsers.find(u => (u.email||'').toLowerCase() === (m.email||'').toLowerCase());
        if (!exists) {
          nonMentorUsers.push({name:m.name, fullname:m.name, email:m.email, password:m.password, role:'mentor', mentorId:m.id, createdAt:m.createdAt});
        }
      });
 
      LS.set('edu_users', nonMentorUsers);
      if(typeof window.renderMentors === 'function') window.renderMentors();
    }catch(e){ console.warn('Backend mentors load failed:', e.message); }
  }
 
  window.addMentor = async function(){
    const name = $('#mentorName')?.value.trim();
    const email = $('#mentorEmail')?.value.trim().toLowerCase();
    const password = $('#mentorPassword')?.value.trim();
    const spec = $('#mentorSpec')?.value.trim();
    const phone = $('#mentorPhone')?.value.trim();
    if(!name || !email || !password) return alert('Аты, email және пароль міндетті.');
    try{
      await api('/api/mentors', {method:'POST', body:{name,email,password,spec,phone}});
      ['mentorName','mentorEmail','mentorPassword','mentorSpec','mentorPhone'].forEach(id=>{ const el=$('#'+id); if(el) el.value=''; });
      await loadMentorsBackend();
      alert('✅ Ментор backend арқылы қосылды, email жіберілді.');
    }catch(err){
      alert('Ментор қосылмады: '+err.message+'\nBackend іске қосылғанын және Resend API key және backend дұрыс екенін тексер.');
    }
  };
 
  window.deleteStudentBackend = async function(email){
    if(!confirm(email+' студентін өшіру керек пе?')) return;
    try{
      const res = await fetch(API + '/api/students/'+encodeURIComponent(email), {method:'DELETE'});
      const data = await res.json().catch(()=>({}));
      if(data.ok){
        await loadStudentsBackend();
        alert('✅ Студент Supabase database-тан өшірілді: ' + email);
      } else {
        // Нақты қатені көрсет
        const msg = data.message || 'Белгісіз қате';
        const hint = data.hint || '';
        alert('❌ Өшірілмеді!\nҚате: ' + msg + (hint ? '\n💡 ' + hint : ''));
      }
    }catch(err){ alert('Өшірілмеді (network қатесі): '+err.message); }
  };
 
  function patchDeleteButtons(){
    if(!location.pathname.toLowerCase().includes('admin')) return;
    document.addEventListener('click', function(e){
      const btn = e.target.closest('button');
      if(!btn) return;
      const txt = (btn.textContent||'').trim().toLowerCase();
      if(txt.includes('өшіру') || txt.includes('delete')){
        const card = btn.closest('[data-email], .student-card, .admin-card, .glass, li, tr');
        const emailText = card?.textContent?.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];
        if(emailText && card?.textContent?.toLowerCase().includes('active')){
          e.preventDefault(); e.stopPropagation();
          window.deleteStudentBackend(emailText.toLowerCase());
        }
      }
    }, true);
  }
 
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(patchRegisterBackend, 1200);
    setTimeout(()=>{ loadStudentsBackend(); loadMentorsBackend(); patchDeleteButtons(); }, 1300);
    setInterval(()=>{ if(location.pathname.toLowerCase().includes('admin')) loadStudentsBackend(); }, 15000);
  });
})();