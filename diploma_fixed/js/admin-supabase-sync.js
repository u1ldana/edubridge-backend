(function(){
    'use strict';
   
    const API = window.BACKEND_URL || 'http://localhost:3000';
   
    async function apiFetch(path, options){
      try {
        const res = await fetch(API + path, {
          headers: { 'Content-Type': 'application/json' },
          ...options,
          body: options?.body ? JSON.stringify(options.body) : undefined
        });
        const data = await res.json().catch(() => ({ ok: false, message: 'JSON parse error' }));
        return data;
      } catch(e) {
        return { ok: false, message: 'Backend offline: ' + e.message, offline: true };
      }
    }
   
    /* ── Студенттерді Supabase-тен жүктеу ── */
    async function loadStudentsFromSupabase(){
      const data = await apiFetch('/api/students');
      if (!data.ok || data.offline) return;
   
      const students = (data.students || []).map(s => ({
        id: s.id,
        name: s.fullname || s.name || 'Student',
        email: s.email,
        major: s.specialty_interest || 'Белгісіз',
        city: s.city || 'Қала жоқ',
        status: s.status || 'Active',
        source: 'supabase',
        mentorEmail: s.mentor_email || '',
        mentorId: s.mentor_id || '',
        createdAt: s.created_at
      }));
   
      // Adminде mentor-ларды сақтау
      const currentStudents = JSON.parse(localStorage.getItem('adminStudents') || '[]');
      // Тек source=admin немесе source=supabase-дегілерді сақта, mentor-ларды жоқ
      const adminAdded = currentStudents.filter(s => s.source === 'admin');
   
      // Merge: Supabase + admin-added
      const merged = [...students];
      adminAdded.forEach(a => {
        if (!merged.find(m => (m.email||'').toLowerCase() === (a.email||'').toLowerCase())) {
          merged.push(a);
        }
      });
   
      localStorage.setItem('adminStudents', JSON.stringify(merged));
   
      // edu_users-ті де жаңарт (тек user role)
      const eduUsers = JSON.parse(localStorage.getItem('edu_users') || '[]');
      const nonStudents = eduUsers.filter(u => u.role === 'mentor');
      students.forEach(s => {
        if (!nonStudents.find(u => (u.email||'').toLowerCase() === (s.email||'').toLowerCase())) {
          nonStudents.push({ name: s.name, email: s.email, role: 'user', mentorId: s.mentorId, mentorEmail: s.mentorEmail });
        }
      });
      localStorage.setItem('edu_users', JSON.stringify(nonStudents));
   
      if (typeof window.renderStudents === 'function') window.renderStudents();
      if (typeof window.renderDashboard === 'function') window.renderDashboard();
    }
   
    /* ── Менторларды Supabase-тен жүктеу ── */
    async function loadMentorsFromSupabase(){
      const data = await apiFetch('/api/mentors');
      if (!data.ok || data.offline) return;
   
      const mentors = (data.mentors || []).map(m => ({
        id: m.id,
        name: m.name || m.fullname || 'Mentor',
        email: m.email,
        spec: m.spec || m.speciality || '',
        phone: m.phone || '',
        password: m.password || '',
        createdAt: m.created_at
      }));
   
      localStorage.setItem('edu_mentors', JSON.stringify(mentors));
   
      // edu_users-ке де жаз (role=mentor)
      const eduUsers = JSON.parse(localStorage.getItem('edu_users') || '[]');
      const nonMentors = eduUsers.filter(u => u.role !== 'mentor');
      mentors.forEach(m => {
        if (!nonMentors.find(u => (u.email||'').toLowerCase() === (m.email||'').toLowerCase())) {
          nonMentors.push({ name: m.name, email: m.email, role: 'mentor', mentorId: m.id, password: m.password });
        }
      });
      localStorage.setItem('edu_users', JSON.stringify(nonMentors));
   
      if (typeof window.renderMentors === 'function') window.renderMentors();
    }
   
    /* ── Студентті Supabase-тен өшіру ── */
    window.deleteStudentSupabase = async function(id, email){
      if (!confirm('Студентті өшіресіз бе? Supabase-тен де жойылады.')) return;
   
      // 1. adminStudents-тен өшір
      let list = JSON.parse(localStorage.getItem('adminStudents') || '[]');
      list = list.filter(s => String(s.id) !== String(id) && (s.email||'').toLowerCase() !== (email||'').toLowerCase());
      localStorage.setItem('adminStudents', JSON.stringify(list));
   
      // 2. edu_users-тен өшір
      let users = JSON.parse(localStorage.getItem('edu_users') || '[]');
      users = users.filter(u => (u.email||'').toLowerCase() !== (email||'').toLowerCase());
      localStorage.setItem('edu_users', JSON.stringify(users));
   
      // 3. Supabase-тен өшір
      if (email) {
        const data = await apiFetch('/api/students/' + encodeURIComponent(email), { method: 'DELETE' });
        if (data.ok) {
          showAdminToast('✅ Supabase-тен өшірілді: ' + email);
        } else if (data.offline) {
          showAdminToast('⚠️ Backend offline — тек localStorage-тен өшірілді');
        } else {
          showAdminToast('⚠️ Supabase қатесі: ' + (data.message || 'белгісіз'));
        }
      }
   
      if (typeof window.renderStudents === 'function') window.renderStudents();
      if (typeof window.renderDashboard === 'function') window.renderDashboard();
    };
   
    /* ── Ментор қосу (Supabase + localStorage) ── */
    window.addMentorSupabase = async function(){
      const name  = document.getElementById('mentorName')?.value.trim();
      const email = document.getElementById('mentorEmail')?.value.trim().toLowerCase();
      const pass  = document.getElementById('mentorPassword')?.value.trim();
      const spec  = document.getElementById('mentorSpec')?.value.trim();
      const phone = document.getElementById('mentorPhone')?.value.trim();
   
      if (!name || !email || !pass) { showAdminToast('Аты, email және пароль міндетті!'); return; }
   
      // Backend арқылы Supabase-ке жаз
      const data = await apiFetch('/api/mentors', {
        method: 'POST',
        body: { name, email, password: pass, spec, phone }
      });
   
      if (data.ok) {
        showAdminToast('✅ Ментор Supabase-ке қосылды!');
        ['mentorName','mentorEmail','mentorPassword','mentorSpec','mentorPhone'].forEach(id => {
          const el = document.getElementById(id); if (el) el.value = '';
        });
        await loadMentorsFromSupabase();
        await loadStudentsFromSupabase();
      } else if (data.offline) {
        // Backend offline — localStorage-ке ғана қос
        const mentors = JSON.parse(localStorage.getItem('edu_mentors') || '[]');
        if (mentors.find(m => m.email === email)) { showAdminToast('❌ Бұл email менторда бар!'); return; }
        const mentor = { id: 'm_' + Date.now(), name, email, password: pass, spec, phone, createdAt: new Date().toISOString() };
        mentors.push(mentor);
        localStorage.setItem('edu_mentors', JSON.stringify(mentors));
        const users = JSON.parse(localStorage.getItem('edu_users') || '[]');
        users.push({ name, email, password: pass, role: 'mentor', mentorId: mentor.id });
        localStorage.setItem('edu_users', JSON.stringify(users));
        showAdminToast('⚠️ Backend offline — тек localStorage-ке қосылды');
        ['mentorName','mentorEmail','mentorPassword','mentorSpec','mentorPhone'].forEach(id => {
          const el = document.getElementById(id); if (el) el.value = '';
        });
        if (typeof window.renderMentors === 'function') window.renderMentors();
      } else {
        showAdminToast('❌ Қате: ' + (data.message || 'белгісіз'));
      }
    };
   
    /* ── Ментор өшіру (Supabase + localStorage) ── */
    window.deleteMentorSupabase = async function(mentorId, mentorEmail){
      if (!confirm('Бұл менторды жою керек пе?')) return;
   
      // localStorage-тен өшір
      let mentors = JSON.parse(localStorage.getItem('edu_mentors') || '[]');
      mentors = mentors.filter(m => m.id !== mentorId && m.email !== mentorEmail);
      localStorage.setItem('edu_mentors', JSON.stringify(mentors));
   
      let users = JSON.parse(localStorage.getItem('edu_users') || '[]');
      users = users.filter(u => u.email !== mentorEmail && u.mentorId !== mentorId);
      localStorage.setItem('edu_users', JSON.stringify(users));
   
      // Backend: ментор өшіру endpoint жоқ болса, /api/students/:email-ді пайдалану
      // TODO: backend-ке /api/mentors/:email DELETE қосу керек
      showAdminToast('Ментор жойылды (localStorage)');
      if (typeof window.renderMentors === 'function') window.renderMentors();
    };
   
    /* ── Студентті менторға тағайындау (Supabase + localStorage) ── */
    window.assignStudentSupabase = async function(){
      const stuEmail  = document.getElementById('assignStudent')?.value;
      const mentorId  = document.getElementById('assignMentor')?.value;
      if (!stuEmail || !mentorId) { showAdminToast('Студент пен менторды таңда!'); return; }
   
      const mentors = JSON.parse(localStorage.getItem('edu_mentors') || '[]');
      const mentor = mentors.find(m => m.id === mentorId);
      if (!mentor) { showAdminToast('Ментор табылмады!'); return; }
   
      // Backend арқылы Supabase-ке жаз
      const data = await apiFetch('/api/assign-mentor', {
        method: 'POST',
        body: { studentEmail: stuEmail, mentorId: mentor.id, mentorEmail: mentor.email }
      });
   
      // localStorage-ті де жаңарт
      const users = JSON.parse(localStorage.getItem('edu_users') || '[]');
      const idx = users.findIndex(u => u.email === stuEmail);
      if (idx !== -1) {
        users[idx].mentorId = mentor.id;
        users[idx].mentorEmail = mentor.email;
        users[idx].mentorName = mentor.name;
        localStorage.setItem('edu_users', JSON.stringify(users));
      }
   
      if (data.ok) {
        showAdminToast('✅ Supabase-те де тағайындалды: ' + mentor.name);
      } else if (data.offline) {
        showAdminToast('⚠️ Backend offline — тек localStorage-те тағайындалды');
      } else {
        showAdminToast('⚠️ ' + (data.message || 'Қате'));
      }
   
      if (typeof window.renderMentors === 'function') window.renderMentors();
    };
   
    /* ── Бастапқы жүктеу ── */
    async function init(){
      await loadStudentsFromSupabase();
      await loadMentorsFromSupabase();
   
      // Әр 30 секунд сайын автоматты sync
      setInterval(async function(){
        await loadStudentsFromSupabase();
        await loadMentorsFromSupabase();
      }, 30000);
    }
   
    // DOMContentLoaded-тан кейін іске қос
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function(){
        setTimeout(init, 1500); // admin-session.js-тен кейін
      });
    } else {
      setTimeout(init, 1500);
    }
   
    // Сыртқа шығар
    window.AdminSync = {
      loadStudents: loadStudentsFromSupabase,
      loadMentors: loadMentorsFromSupabase
    };
   
  })();