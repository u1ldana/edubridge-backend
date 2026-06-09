/**
 * EduBridge Database Layer
 * Supabase (PostgreSQL) + localStorage fallback
 * 
 * ДИПЛОМКАДА ТҮСІНДІРУ:
 * Бұл файл "Repository Pattern" архитектурасын қолданады.
 * Барлық CRUD операциялары осы жерден өтеді.
 * Supabase қосылған болса — PostgreSQL, қосылмаса — localStorage.
 */

// ═══════════════════════════════════════════
// SUPABASE CONFIGURATION
// Supabase жобасын https://supabase.com сайтынан жасаңыз
// Project Settings → API → URL және anon key алыңыз
// ═══════════════════════════════════════════
// ⚠️ SUPABASE CREDENTIALS - скриншоттан алынған URL
// Anon key-ді Supabase → Settings → API → anon public key-ден алыңыз
const SUPABASE_URL    = "https://dfntzlhxyrfvrayfzlcz.supabase.co";
const SUPABASE_ANON   = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmbnR6bGh4eXJmdnJheWZ6bGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NTcwMTMsImV4cCI6MjA5NTAzMzAxM30.vt_cQhx2zi6GKDG1I-5DZGFpwyqvgekMFSDhGCkWH-8";

// Supabase клиентін жасау
let sb = null;

function initSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON) {
        return;
  }
  // Try to use globally loaded supabase
  const supabaseLib = window.supabase || window.supabaseClient;
  if (supabaseLib && supabaseLib.createClient) {
    try {
      sb = supabaseLib.createClient(SUPABASE_URL, SUPABASE_ANON);
          } catch(e) {
      console.warn("⚠️ Supabase init failed, using localStorage:", e.message);
    }
  } else {
      }
}

// Also check localStorage for credentials saved via setup.html
if (!SUPABASE_ANON) {
  const savedKey = localStorage.getItem("sb_key");
  const savedUrl = localStorage.getItem("sb_url");
  if (savedKey && savedUrl) {
    // Use dynamically saved credentials
    Object.assign(arguments, []);
    // Re-initialize with saved credentials
    window._sbUrl = savedUrl;
    window._sbKey = savedKey;
  }
}

// Initialize
initSupabase();

// If no credentials in file but saved in localStorage, try with those
if (!sb && window._sbUrl && window._sbKey) {
  try {
    const supabaseLib = window.supabase || window.supabaseClient;
    if (supabaseLib && supabaseLib.createClient) {
      sb = supabaseLib.createClient(window._sbUrl, window._sbKey);
          }
  } catch(e) {}
}

const USE_SUPABASE = !!sb;
window.USE_SUPABASE = USE_SUPABASE;

if (USE_SUPABASE) {
  document.addEventListener("DOMContentLoaded", function() {
    // Show connection status in admin
    const statusEl = document.getElementById("dbStatus");
    if (statusEl) {
      statusEl.textContent = "✅ PostgreSQL (Supabase)";
      statusEl.style.color = "#34d399";
    }
  });
}

// ═══════════════════════════════════════════
// LOCAL STORAGE HELPERS
// ═══════════════════════════════════════════
const LS = {
  get: (key, fallback = null) => {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch(e) { return fallback; }
  },
  set: (key, val) => {
    try { localStorage.setItem(key, JSON.stringify(val)); return true; }
    catch(e) { return false; }
  }
};

// ═══════════════════════════════════════════
// DATABASE API — unified interface
// ═══════════════════════════════════════════
const DB = {

  // ── STUDENTS (edu_users) ──────────────────
  students: {
    async getAll() {
      if (USE_SUPABASE) {
        const { data, error } = await sb.from("students").select("*");
        if (error) throw error;
        return data;
      }
      return LS.get("edu_users", []).filter(u => !u.role || u.role === "user" || u.role === "student");
    },

    async getByEmail(email) {
      if (USE_SUPABASE) {
        const { data } = await sb.from("students").select("*").eq("email", email).single();
        return data;
      }
      const users = LS.get("edu_users", []);
      return users.find(u => u.email === email) || null;
    },

    async create(student) {
      if (USE_SUPABASE) {
        const { data, error } = await sb.from("students").insert([student]).select().single();
        if (error) throw error;
        return data;
      }
      const users = LS.get("edu_users", []);
      const newUser = { ...student, id: "u_" + Date.now(), role: "user", createdAt: new Date().toISOString() };
      users.push(newUser);
      LS.set("edu_users", users);
      return newUser;
    },

    async update(email, updates) {
      if (USE_SUPABASE) {
        const { data, error } = await sb.from("students").update(updates).eq("email", email).select().single();
        if (error) throw error;
        return data;
      }
      const users = LS.get("edu_users", []);
      const idx = users.findIndex(u => u.email === email);
      if (idx !== -1) { Object.assign(users[idx], updates); LS.set("edu_users", users); return users[idx]; }
      return null;
    },

    async delete(email) {
      if (USE_SUPABASE) {
        const { error } = await sb.from("students").delete().eq("email", email);
        if (error) throw error;
        return true;
      }
      const users = LS.get("edu_users", []);
      LS.set("edu_users", users.filter(u => u.email !== email));
      return true;
    },

    async authenticate(email, password) {
      if (USE_SUPABASE) {
        const { data } = await sb.from("students").select("*").eq("email", email).eq("password", password).single();
        return data;
      }
      const users = LS.get("edu_users", []);
      return users.find(u => u.email === email && u.password === password) || null;
    }
  },

  // ── MENTORS ───────────────────────────────
  mentors: {
    async getAll() {
      if (USE_SUPABASE) {
        const { data } = await sb.from("mentors").select("*");
        return data || [];
      }
      return LS.get("edu_mentors", []);
    },

    async getByEmail(email) {
      if (USE_SUPABASE) {
        const { data } = await sb.from("mentors").select("*").eq("email", email).single();
        return data;
      }
      return LS.get("edu_mentors", []).find(m => m.email === email) || null;
    },

    async create(mentor) {
      if (USE_SUPABASE) {
        const { data, error } = await sb.from("mentors").insert([mentor]).select().single();
        if (error) throw error;
        return data;
      }
      const mentors = LS.get("edu_mentors", []);
      const newMentor = { ...mentor, id: "m_" + Date.now(), createdAt: new Date().toISOString() };
      mentors.push(newMentor);
      LS.set("edu_mentors", mentors);
      return newMentor;
    },

    async delete(id) {
      if (USE_SUPABASE) {
        const { error } = await sb.from("mentors").delete().eq("id", id);
        if (error) throw error;
        return true;
      }
      LS.set("edu_mentors", LS.get("edu_mentors", []).filter(m => m.id !== id));
      return true;
    },

    async assignStudent(studentEmail, mentorId, mentorEmail, mentorName) {
      return DB.students.update(studentEmail, { mentorId, mentorEmail, mentorName });
    }
  },

  // ── UNIVERSITIES ─────────────────────────
  universities: {
    async getAll() {
      if (USE_SUPABASE) {
        const { data } = await sb.from("universities").select("*").order("ranking");
        return data || [];
      }
      return LS.get("adminUniversities", []);
    },

    async update(id, updates) {
      if (USE_SUPABASE) {
        const { data, error } = await sb.from("universities").update(updates).eq("id", id).select().single();
        if (error) throw error;
        return data;
      }
      const unis = LS.get("adminUniversities", []);
      const idx = unis.findIndex(u => u.id === id);
      if (idx !== -1) { Object.assign(unis[idx], updates); LS.set("adminUniversities", unis); return unis[idx]; }
      return null;
    }
  },

  // ── APPLICATIONS ─────────────────────────
  applications: {
    async getAll() {
      if (USE_SUPABASE) {
        const { data } = await sb.from("applications").select("*, students(fullname, email)").order("created_at", { ascending: false });
        return data || [];
      }
      return LS.get("adminApplications", []);
    },

    async create(app) {
      if (USE_SUPABASE) {
        const { data, error } = await sb.from("applications").insert([app]).select().single();
        if (error) throw error;
        return data;
      }
      const apps = LS.get("adminApplications", []);
      const newApp = { ...app, id: Date.now(), createdAt: new Date().toISOString() };
      apps.push(newApp);
      LS.set("adminApplications", apps);
      return newApp;
    },

    async updateStatus(id, status) {
      if (USE_SUPABASE) {
        const { data, error } = await sb.from("applications").update({ status }).eq("id", id).select().single();
        if (error) throw error;
        return data;
      }
      const apps = LS.get("adminApplications", []);
      const idx = apps.findIndex(a => a.id === id);
      if (idx !== -1) { apps[idx].status = status; LS.set("adminApplications", apps); return apps[idx]; }
      return null;
    }
  },

  // ── CONSULTATIONS ────────────────────────
  consultations: {
    async getByStudent(email) {
      if (USE_SUPABASE) {
        const { data } = await sb.from("consultations").select("*").eq("student_email", email).order("created_at", { ascending: false });
        return data || [];
      }
      try {
        const raw = localStorage.getItem("u_" + email + "_consult_requests");
        return raw ? JSON.parse(raw) : [];
      } catch(e) { return []; }
    },

    async create(email, request) {
      const req = { ...request, id: "cr_" + Date.now(), createdAt: new Date().toISOString(), status: "pending" };
      if (USE_SUPABASE) {
        const { data, error } = await sb.from("consultations").insert([{ ...req, student_email: email }]).select().single();
        if (error) throw error;
        return data;
      }
      const key = "u_" + email + "_consult_requests";
      const list = JSON.parse(localStorage.getItem(key) || "[]");
      list.unshift(req);
      localStorage.setItem(key, JSON.stringify(list));
      return req;
    },

    async approve(studentEmail, consultId, meetingTime, meetingLink, mentorMessage) {
      const updates = { status: "approved", meetingTime, meetingLink, mentorMessage, approvedAt: new Date().toISOString() };
      if (USE_SUPABASE) {
        const { data, error } = await sb.from("consultations").update(updates).eq("id", consultId).select().single();
        if (error) throw error;
        return data;
      }
      const key = "u_" + studentEmail + "_consult_requests";
      const list = JSON.parse(localStorage.getItem(key) || "[]");
      const idx = list.findIndex(r => r.id === consultId);
      if (idx !== -1) { Object.assign(list[idx], updates); localStorage.setItem(key, JSON.stringify(list)); }
      return list[idx];
    }
  },

  // ── DOCUMENTS ─────────────────────────────
  documents: {
    async getByStudent(email) {
      if (USE_SUPABASE) {
        const { data } = await sb.from("documents").select("*").eq("student_email", email);
        return data || [];
      }
      try {
        const raw = localStorage.getItem("u_" + email + "_prep_uploads");
        return raw ? JSON.parse(raw) : {};
      } catch(e) { return {}; }
    },

    async updateStatus(studentEmail, docId, status, mentorComment) {
      if (USE_SUPABASE) {
        const { data, error } = await sb.from("documents").update({ status, mentor_comment: mentorComment }).eq("student_email", studentEmail).eq("doc_id", docId).select().single();
        if (error) throw error;
        return data;
      }
      // Update in adminUserDocs
      const adminDocs = JSON.parse(localStorage.getItem("adminUserDocs") || "{}");
      if (!adminDocs[studentEmail]) adminDocs[studentEmail] = {};
      if (adminDocs[studentEmail][docId]) {
        adminDocs[studentEmail][docId].status = status;
        adminDocs[studentEmail][docId].mentorComment = mentorComment;
        localStorage.setItem("adminUserDocs", JSON.stringify(adminDocs));
      }
      // Update student's prep_uploads
      const uKey = "u_" + studentEmail + "_prep_uploads";
      const uploads = JSON.parse(localStorage.getItem(uKey) || "{}");
      if (uploads[docId]) { uploads[docId].adminStatus = status; localStorage.setItem(uKey, JSON.stringify(uploads)); }
      return { status, mentorComment };
    }
  },

  // ── POSTS (Feed) ─────────────────────────
  posts: {
    async getAll() {
      if (USE_SUPABASE) {
        const { data } = await sb.from("posts").select("*").order("created_at", { ascending: false });
        return data || [];
      }
      return JSON.parse(localStorage.getItem("adminFeedPosts") || "[]");
    },

    async create(post) {
      if (USE_SUPABASE) {
        const { data, error } = await sb.from("posts").insert([post]).select().single();
        if (error) throw error;
        return data;
      }
      const posts = JSON.parse(localStorage.getItem("adminFeedPosts") || "[]");
      const newPost = { ...post, id: "p_" + Date.now(), createdAt: new Date().toISOString(), views: 0 };
      posts.unshift(newPost);
      localStorage.setItem("adminFeedPosts", JSON.stringify(posts));
      return newPost;
    },

    async delete(id) {
      if (USE_SUPABASE) {
        await sb.from("posts").delete().eq("id", id);
        return true;
      }
      const posts = JSON.parse(localStorage.getItem("adminFeedPosts") || "[]");
      localStorage.setItem("adminFeedPosts", JSON.stringify(posts.filter(p => String(p.id) !== String(id))));
      return true;
    },

    async incrementViews(id) {
      if (USE_SUPABASE) {
        await sb.rpc("increment_views", { post_id: id });
        return;
      }
      const posts = JSON.parse(localStorage.getItem("adminFeedPosts") || "[]");
      const idx = posts.findIndex(p => String(p.id) === String(id));
      if (idx !== -1) { posts[idx].views = (posts[idx].views || 0) + 1; localStorage.setItem("adminFeedPosts", JSON.stringify(posts)); }
    }
  },

  // ── ANALYTICS ────────────────────────────
  analytics: {
    async getSummary() {
      if (USE_SUPABASE) {
        const [students, mentors, consultations, applications, posts] = await Promise.all([
          sb.from("students").select("id", { count: "exact" }),
          sb.from("mentors").select("id", { count: "exact" }),
          sb.from("consultations").select("id", { count: "exact" }),
          sb.from("applications").select("id", { count: "exact" }),
          sb.from("posts").select("id, views"),
        ]);
        return {
          studentCount: students.count || 0,
          mentorCount: mentors.count || 0,
          consultCount: consultations.count || 0,
          appCount: applications.count || 0,
          totalViews: (posts.data || []).reduce((s, p) => s + (p.views || 0), 0)
        };
      }
      const users = LS.get("edu_users", []);
      const posts = JSON.parse(localStorage.getItem("adminFeedPosts") || "[]");
      return {
        studentCount: users.filter(u => !u.role || u.role === "user").length,
        mentorCount: LS.get("edu_mentors", []).length,
        consultCount: 0,
        appCount: LS.get("adminApplications", []).length,
        totalViews: posts.reduce((s,p) => s + (p.views||0), 0)
      };
    }
  }
};

// ═══════════════════════════════════════════
// SQL SCHEMA (for Supabase setup)
// Run this in Supabase SQL Editor to create tables
// ═══════════════════════════════════════════
/*
-- STUDENTS table
CREATE TABLE students (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  fullname    TEXT NOT NULL,
  email       TEXT UNIQUE NOT NULL,
  password    TEXT NOT NULL,
  phone       TEXT,
  country     TEXT DEFAULT 'Қазақстан',
  specialty_interest TEXT,
  english_level TEXT,
  budget      INTEGER,
  mentor_id   UUID REFERENCES mentors(id),
  mentor_email TEXT,
  status      TEXT DEFAULT 'active',
  blocked     BOOLEAN DEFAULT false,
  role        TEXT DEFAULT 'user',
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- MENTORS table
CREATE TABLE mentors (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  fullname    TEXT NOT NULL,
  email       TEXT UNIQUE NOT NULL,
  password    TEXT NOT NULL,
  speciality  TEXT,
  phone       TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- UNIVERSITIES table
CREATE TABLE universities (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  university_name TEXT NOT NULL,
  city        TEXT,
  tuition_fee INTEGER,
  language    TEXT DEFAULT 'English',
  ranking     INTEGER,
  deadline    DATE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- APPLICATIONS table
CREATE TABLE applications (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id      UUID REFERENCES students(id),
  university_id   UUID REFERENCES universities(id),
  status          TEXT DEFAULT 'pending',
  documents       JSONB,
  mentor_comment  TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- CONSULTATIONS table
CREATE TABLE consultations (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_email   TEXT REFERENCES students(email),
  topic           TEXT NOT NULL,
  question        TEXT,
  preferred_date  DATE,
  status          TEXT DEFAULT 'pending',
  paid            BOOLEAN DEFAULT false,
  amount          INTEGER DEFAULT 0,
  meeting_time    TIMESTAMPTZ,
  meeting_link    TEXT,
  mentor_message  TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- DOCUMENTS table
CREATE TABLE documents (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_email   TEXT REFERENCES students(email),
  doc_id          TEXT NOT NULL,
  doc_name        TEXT,
  doc_type        TEXT,
  status          TEXT DEFAULT 'pending',
  mentor_comment  TEXT,
  uploaded_at     TIMESTAMPTZ DEFAULT NOW()
);

-- POSTS table
CREATE TABLE posts (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title       TEXT NOT NULL,
  body        TEXT,
  category    TEXT DEFAULT 'News',
  image_url   TEXT,
  author      TEXT DEFAULT 'EduBridge',
  views       INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentors  ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts    ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read posts" ON posts FOR SELECT USING (true);
CREATE POLICY "Public read students" ON students FOR SELECT USING (true);
*/

// Export for use in other scripts
window.DB = DB;
window.USE_SUPABASE = USE_SUPABASE;


// ═══════════════════════════════════════════
// SYNC: localStorage → Supabase
// Бар localStorage деректерін Supabase-ке жіберу
// ═══════════════════════════════════════════
async function syncLocalToSupabase() {
  if (!USE_SUPABASE) return;
  
  try {
    // Sync students
    const localUsers = JSON.parse(localStorage.getItem("edu_users") || "[]");
    const students = localUsers.filter(u => !u.role || u.role === "user" || u.role === "student");
    
    for (const u of students) {
      try {
        await sb.from("students").upsert({
          fullname: u.name || u.fullname || "Студент",
          email: u.email,
          password: u.password || "",
          role: u.role || "user",
          country: u.country || "Қазақстан",
          mentor_email: u.mentorEmail || null,
          mentor_name: u.mentorName || null,
          english_level: u.english_level || null,
          budget: u.budget ? parseInt(u.budget) : null,
          created_at: u.createdAt || new Date().toISOString()
        }, { onConflict: "email", ignoreDuplicates: false });
      } catch(e) { /* skip duplicate */ }
    }
    
    // Sync mentors
    const localMentors = JSON.parse(localStorage.getItem("edu_mentors") || "[]");
    for (const m of localMentors) {
      try {
        await sb.from("mentors").upsert({
          fullname: m.name || m.fullname,
          email: m.email,
          password: m.password || "",
          speciality: m.spec || m.speciality || null,
          phone: m.phone || null,
          created_at: m.createdAt || new Date().toISOString()
        }, { onConflict: "email", ignoreDuplicates: false });
      } catch(e) {}
    }
    
      } catch(e) {
    console.warn("Sync failed:", e.message);
  }
}

// Auto-sync on load (only once)
if (USE_SUPABASE) {
  document.addEventListener("DOMContentLoaded", function() {
    const lastSync = localStorage.getItem("_lastSync");
    const now = Date.now();
    if (!lastSync || now - parseInt(lastSync) > 60000) { // sync every 60s max
      syncLocalToSupabase();
      localStorage.setItem("_lastSync", String(now));
    }
  });
}

window.syncLocalToSupabase = syncLocalToSupabase;

// ═══════════════════════════════════════════
// SYNC DOWN: Supabase → localStorage
// Supabase-тен жаңа деректерді жергілікті жадқа жіберу
// ═══════════════════════════════════════════
async function syncSupabaseToLocal() {
  if (!USE_SUPABASE) return;
  try {
    // Sync students
    const { data: students } = await sb.from("students").select("*");
    if (students) {
      const mapped = students.map(function(s) {
        return {
          name: s.fullname, email: s.email, password: s.password,
          role: s.role || "user", country: s.country,
          mentorEmail: s.mentor_email, mentorName: s.mentor_name,
          english_level: s.english_level, budget: s.budget,
          blocked: s.blocked, createdAt: s.created_at
        };
      });
      // Merge with existing (keep mentor-specific entries)
      localStorage.setItem("edu_users", JSON.stringify(mapped));
    }
    
    // Sync posts
    const { data: posts } = await sb.from("posts").select("*").order("created_at", {ascending: false});
    if (posts) {
      const mapped = posts.map(function(p) {
        return { id: p.id, title: p.title, body: p.body, category: p.category,
                 image: p.image_url, author: p.author, views: p.views || 0,
                 date: new Date(p.created_at).toLocaleDateString("kk-KZ") };
      });
      localStorage.setItem("adminFeedPosts", JSON.stringify(mapped));
    }
    
      } catch(e) {
    console.warn("Sync down failed:", e.message);
  }
}
window.syncSupabaseToLocal = syncSupabaseToLocal;
