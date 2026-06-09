/* local-mentor-fix.js — STRONG FIX */
(function () {
    "use strict";
  
    const LS_MENTORS = "edu_mentors";
    const LS_USERS = "edu_users";
    const LS_PASS = "edu_mentor_passwords";
    const LS_DELETED = "edu_deleted_mentors";
    const API = window.BACKEND_URL || "http://localhost:3000";
  
    function read(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch {
        return fallback;
      }
    }
  
    function write(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    function norm(email) {
      return String(email || "").trim().toLowerCase();
    }
  
    function toast(message) {
      if (typeof window.showAdminToast === "function") window.showAdminToast(message);
      else alert(message);
    }
  
    function deletedList() {
      return read(LS_DELETED, []);
    }
  
    function markDeleted(email) {
      const e = norm(email);
      if (!e) return;
      const list = deletedList();
      if (!list.includes(e)) list.push(e);
      write(LS_DELETED, list);
    }
  
    function unmarkDeleted(email) {
      const e = norm(email);
      write(LS_DELETED, deletedList().filter(x => x !== e));
    }
  
    function passMap() {
      return read(LS_PASS, {});
    }
  
    function savePass(email, password) {
      const e = norm(email);
      if (!e || !password) return;
      const map = passMap();
      map[e] = String(password);
      write(LS_PASS, map);
    }
  
    function getPass(email, fallback) {
      const e = norm(email);
      const map = passMap();
      let p = map[e] || fallback || "";
      if (String(p).startsWith("$2a$") || String(p).startsWith("$2b$") || String(p).startsWith("$2y$")) {
        p = map[e] || "";
      }
      return p;
    }
  
    function removePass(email) {
      const map = passMap();
      delete map[norm(email)];
      write(LS_PASS, map);
    }
  
    function cleanMentors() {
      const deleted = deletedList();
      let mentors = read(LS_MENTORS, []);
      let users = read(LS_USERS, []);
      const unique = new Map();
  
      mentors.forEach(m => {
        if (!m || !m.email) return;
        const e = norm(m.email);
        if (deleted.includes(e)) return;
  
        const plain = getPass(e, m.plainPassword || m.password || "");
        const fixed = {
          ...m,
          id: m.id || ("mentor_" + e),
          name: m.name || m.fullname || "Mentor",
          fullname: m.fullname || m.name || "Mentor",
          email: m.email,
          password: plain || m.password || "",
          plainPassword: plain || m.plainPassword || "",
          role: "mentor",
          spec: m.spec || m.speciality || "",
          speciality: m.speciality || m.spec || "",
          phone: m.phone || ""
        };
        unique.set(e, fixed);
      });
  
      mentors = Array.from(unique.values());
  
      users = users
        .filter(u => !deleted.includes(norm(u.email)))
        .map(u => {
          if (deleted.includes(norm(u.mentorEmail))) {
            delete u.mentorId;
            delete u.mentorEmail;
            delete u.mentorName;
          }
          return u;
        });
  
      write(LS_MENTORS, mentors);
      write(LS_USERS, users);
      return mentors;
    }
  
    async function deleteBackendMentor(email) {
      const e = encodeURIComponent(email);
      const urls = [
        API + "/api/mentors/" + e,
        API + "/api/mentor/" + e,
        API + "/api/mentors/delete/" + e
      ];
      for (const url of urls) {
        try { await fetch(url, { method: "DELETE" }); } catch {}
      }
    }
  
    window.addMentor = async function () {
      const name = document.getElementById("mentorName")?.value.trim();
      const email = document.getElementById("mentorEmail")?.value.trim();
      const password = document.getElementById("mentorPassword")?.value.trim();
      const spec = document.getElementById("mentorSpec")?.value.trim();
      const phone = document.getElementById("mentorPhone")?.value.trim();
  
      if (!name || !email || !password) {
        toast("Аты, email және пароль міндетті!");
        return;
      }
  
      unmarkDeleted(email);
  
      let mentors = read(LS_MENTORS, []).filter(m => norm(m.email) !== norm(email));
      let users = read(LS_USERS, []).filter(u => norm(u.email) !== norm(email));
  
      const mentor = {
        id: "mentor_" + Date.now(),
        name,
        fullname: name,
        email,
        password,
        plainPassword: password,
        role: "mentor",
        spec,
        speciality: spec,
        phone,
        createdAt: new Date().toISOString()
      };
  
      mentors.push(mentor);
      users.push(mentor);
      savePass(email, password);
  
      write(LS_MENTORS, mentors);
      write(LS_USERS, users);
  
      try {
        await fetch(API + "/api/mentors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullname: name, name, email, password, speciality: spec, spec, phone })
        });
      } catch {}
  
      ["mentorName", "mentorEmail", "mentorPassword", "mentorSpec", "mentorPhone"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
      });
  
      cleanMentors();
      renderMentors();
      fillMentorSelects();
      toast("✅ Ментор сақталды");
    };
  
    window.renderMentors = function () {
      const box = document.getElementById("mentorsList");
      if (!box) return;
  
      const mentors = cleanMentors();
  
      if (!mentors.length) {
        box.innerHTML = `
          <div style="padding:24px;border:1px dashed rgba(255,255,255,.16);border-radius:18px;color:rgba(255,255,255,.55);text-align:center;">
            👨‍🏫 Ментор жоқ. Жоғарыдан қосыңыз.
          </div>`;
        return;
      }
  
      box.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;">
          ${mentors.map(m => {
            const pass = getPass(m.email, m.plainPassword || m.password || "") || "-";
            return `
              <div style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:22px;padding:20px;">
                <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start;">
                  <div>
                    <div style="font-size:20px;font-weight:900;">${m.name || m.fullname || "Mentor"}</div>
                    <div style="font-size:13px;color:rgba(255,255,255,.65);">${m.email}</div>
                  </div>
                  <span style="background:rgba(179,18,60,.25);color:#ffd6de;padding:6px 12px;border-radius:999px;font-size:12px;font-weight:800;">Mentor</span>
                </div>
                <div style="margin-top:16px;display:grid;gap:9px;font-size:14px;color:rgba(255,255,255,.82);">
                  <div>🔐 <b>Пароль:</b> ${pass}</div>
                  <div>🎓 <b>Бағыт:</b> ${m.spec || m.speciality || "-"}</div>
                  <div>📞 <b>Тел:</b> ${m.phone || "-"}</div>
                </div>
                <div style="display:flex;gap:10px;margin-top:18px;">
                  <button onclick="copyMentorCreds('${m.email}','${pass}')" style="flex:1;padding:10px;border:none;border-radius:13px;background:rgba(255,255,255,.12);color:white;font-weight:900;cursor:pointer;">📋 Көшіру</button>
                  <button onclick="deleteMentor('${m.email}')" style="flex:1;padding:10px;border:none;border-radius:13px;background:rgba(239,68,68,.22);color:#f87171;font-weight:900;cursor:pointer;">🗑 Өшіру</button>
                </div>
              </div>`;
          }).join("")}
        </div>`;
    };
  
    window.deleteMentor = async function (email) {
      if (!confirm("Бұл менторды өшіресіз бе?")) return;
  
      const e = norm(email);
      markDeleted(e);
      removePass(e);
  
      let mentors = read(LS_MENTORS, []).filter(m => norm(m.email) !== e);
      let users = read(LS_USERS, [])
        .filter(u => norm(u.email) !== e)
        .map(u => {
          if (norm(u.mentorEmail) === e) {
            delete u.mentorId;
            delete u.mentorEmail;
            delete u.mentorName;
          }
          return u;
        });
  
      write(LS_MENTORS, mentors);
      write(LS_USERS, users);
  
      await deleteBackendMentor(e);
  
      cleanMentors();
      renderMentors();
      fillMentorSelects();
      toast("✅ Ментор өшірілді");
    };
  
    window.copyMentorCreds = function (email, pass) {
      const text = "Логин: " + email + "\nПароль: " + pass;
      navigator.clipboard?.writeText(text).then(
        () => toast("📋 Көшірілді"),
        () => prompt("Ментор деректері:", text)
      );
    };
  
    window.fillMentorSelects = function () {
      const mentors = cleanMentors();
      const users = read(LS_USERS, []).filter(u => u.role !== "mentor");
  
      const mentorSelect = document.getElementById("assignMentor");
      const studentSelect = document.getElementById("assignStudent");
  
      if (mentorSelect) {
        mentorSelect.innerHTML =
          `<option value="">Ментор таңдаңыз</option>` +
          mentors.map(m => `<option value="${m.id}">${m.name || m.email}</option>`).join("");
      }
  
      if (studentSelect) {
        studentSelect.innerHTML =
          `<option value="">Студент таңдаңыз</option>` +
          users.map(u => `<option value="${u.email}">${u.name || u.email}</option>`).join("");
      }
    };
  
    window.assignStudentToMentor = function () {
      const stuEmail = document.getElementById("assignStudent")?.value;
      const mentorId = document.getElementById("assignMentor")?.value;
  
      if (!stuEmail || !mentorId) {
        toast("Студент пен менторды таңдаңыз");
        return;
      }
  
      const mentors = cleanMentors();
      const mentor = mentors.find(m => String(m.id) === String(mentorId));
      if (!mentor) {
        toast("Ментор табылмады");
        return;
      }
  
      const users = read(LS_USERS, []).map(u => {
        if (norm(u.email) === norm(stuEmail)) {
          u.mentorId = mentor.id;
          u.mentorEmail = mentor.email;
          u.mentorName = mentor.name || mentor.fullname;
        }
        return u;
      });
  
      write(LS_USERS, users);
      renderMentors();
      fillMentorSelects();
      toast("✅ Студент менторға тағайындалды");
    };
  
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(() => {
        cleanMentors();
        renderMentors();
        fillMentorSelects();
      }, 800);
    });
  
    setTimeout(() => {
      cleanMentors();
      renderMentors();
      fillMentorSelects();
    }, 1500);
  })();