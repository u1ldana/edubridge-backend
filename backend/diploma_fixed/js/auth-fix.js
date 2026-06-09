/* auth-fix.js — STRONG LOGIN FIX */
(function () {
    "use strict";
  
    const ADMIN_EMAIL = "admin@edubridge.com";
    const ADMIN_PASSWORD = "admin123";
  
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
  
    function mentorPass(email) {
      const map = read("edu_mentor_passwords", {});
      return map[norm(email)] || "";
    }
  
    function cleanSession() {
      [
        "role", "userRole", "edu_user_role", "username", "userDisplayName",
        "currentUserEmail", "currentUser", "edu_current_user", "edu_auth",
        "isLoggedIn", "isAdmin", "user"
      ].forEach(k => localStorage.removeItem(k));
    }
  
    function saveSession(user) {
      const role = (user.role === "student" ? "user" : (user.role || "user"));
      const fixed = {
        ...user,
        name: user.name || user.fullname || user.email,
        fullname: user.fullname || user.name || user.email,
        role
      };
  
      localStorage.setItem("role", role);
      localStorage.setItem("userRole", role);
      localStorage.setItem("edu_user_role", role);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUserEmail", fixed.email);
      localStorage.setItem("username", fixed.name);
      localStorage.setItem("userDisplayName", fixed.name);
  
      write("currentUser", fixed);
      write("edu_current_user", fixed);
      write("user", fixed);
      write("edu_auth", { loggedIn: true, email: fixed.email, role });
    }
  
    function redirect(role) {
      if (role === "admin") location.href = "admin.html";
      else if (role === "mentor") location.href = "mentor.html";
      else location.href = "profile.html";
    }
  
    function getAllUsersForLogin() {
      const users = read("edu_users", []);
      const deleted = read("edu_deleted_mentors", []);
  
      const mentors = read("edu_mentors", [])
        .filter(m => !deleted.includes(norm(m.email)))
        .map(m => {
          const p = mentorPass(m.email) || m.plainPassword || m.password || "";
          return {
            ...m,
            name: m.name || m.fullname || "Mentor",
            fullname: m.fullname || m.name || "Mentor",
            password: p,
            plainPassword: p,
            role: "mentor"
          };
        });
  
      const map = new Map();
      users.concat(mentors).forEach(u => {
        if (u.email) map.set(norm(u.email), u);
      });
      return Array.from(map.values());
    }
  
    function setupLogin() {
      const form = document.getElementById("loginForm");
      if (!form) return;
  
      form.onsubmit = function (e) {
        e.preventDefault();
  
        const email = document.getElementById("loginEmail")?.value.trim();
        const password = document.getElementById("loginPassword")?.value.trim();
        const msg = document.getElementById("loginMessage");
  
        if (!email || !password) {
          if (msg) {
            msg.textContent = "Email және пароль жазыңыз";
            msg.style.color = "tomato";
          }
          return;
        }
  
        cleanSession();
  
        if (norm(email) === norm(ADMIN_EMAIL) && password === ADMIN_PASSWORD) {
          saveSession({ id: "admin", name: "Admin", email: ADMIN_EMAIL, password: ADMIN_PASSWORD, role: "admin" });
          redirect("admin");
          return;
        }
  
        const users = getAllUsersForLogin();
        const found = users.find(u => {
          const userEmail = norm(u.email);
          const userPass = String(mentorPass(u.email) || u.plainPassword || u.password || "");
          return userEmail === norm(email) && userPass === String(password);
        });
  
        if (!found) {
          if (msg) {
            msg.textContent = "Логин немесе пароль қате";
            msg.style.color = "tomato";
          }
          return;
        }
  
        if (found.role === "mentor") {
          const p = mentorPass(found.email) || found.plainPassword || found.password || "";
          found.password = p;
          found.plainPassword = p;
        }
  
        saveSession(found);
        redirect(found.role || "user");
      };
    }
  
    function protectPages() {
      const page = location.pathname.toLowerCase();
      const user = read("edu_current_user", null) || read("currentUser", null) || read("user", null);
      const auth = read("edu_auth", null);
      const role = localStorage.getItem("role") || user?.role || auth?.role || "";
  
      if (page.includes("admin.html") && role !== "admin") {
        location.replace("login.html");
        return;
      }
  
      if (page.includes("mentor.html") && role !== "mentor") {
        location.replace("login.html");
        return;
      }
  
      if (page.includes("profile.html") && !["user", "student"].includes(role)) {
        location.replace("login.html");
        return;
      }
    }
  
    window.logout = function () {
      cleanSession();
      location.href = "login.html";
    };
  
    document.addEventListener("DOMContentLoaded", function () {
      setupLogin();
      protectPages();
    });
  })();
  