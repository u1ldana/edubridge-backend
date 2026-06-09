/* V51: mentor profile + assigned students from backend/Supabase */
(function(){
  const API = window.BACKEND_URL || "http://localhost:3000";
  const J = (k,f)=>{try{return JSON.parse(localStorage.getItem(k)||"")||f}catch(e){return f}};
  const S = (k,v)=>localStorage.setItem(k, JSON.stringify(v));
  function normalizeSession(){
    const u = J("edu_current_user", null) || J("currentUser", null);
    const auth = J("edu_auth", null);
    if(u && (u.role === "mentor" || u.email)){
      localStorage.setItem("role", u.role || "mentor");
      localStorage.setItem("currentUserEmail", u.email || "");
      localStorage.setItem("username", u.name || u.fullname || u.email || "Mentor");
      localStorage.setItem("isLoggedIn", "true");
      return u;
    }
    if(auth && auth.role === "mentor"){
      localStorage.setItem("role","mentor");
      localStorage.setItem("currentUserEmail", auth.email || "");
      localStorage.setItem("isLoggedIn","true");
      return {email:auth.email, role:"mentor"};
    }
    return null;
  }

  async function api(path){
    const res = await fetch(API + path);
    const data = await res.json().catch(()=>({ok:false,message:"Backend response error"}));
    if(!res.ok || data.ok === false) throw new Error(data.message || ("HTTP "+res.status));
    return data;
  }

  function applyMentorToUI(m){
    if(!m) return;
    const name = m.name || m.fullname || "Mentor";
    const email = m.email || "";
    const spec = m.spec || m.speciality || "—";
    const phone = m.phone || "—";
    const pairs = {
      mProfileName: name,
      mProfileEmail: email,
      mProfileSpec: spec,
      mProfilePhone: phone,
      mProfileAvatar: name.charAt(0).toUpperCase()
    };
    Object.entries(pairs).forEach(([id,val])=>{
      const el = document.getElementById(id);
      if(el) el.textContent = val;
    });
    const bigName = document.querySelector(".mentor-brand strong, .mentor-brand h3, .mentor-brand .name");
    if(bigName) bigName.textContent = name;
  }

  async function syncMentorData(){
    const sess = normalizeSession();
    const email = localStorage.getItem("currentUserEmail") || sess?.email || "";
    if(!email) return;

    try{
      const data = await api("/api/mentor/" + encodeURIComponent(email) + "/students");
      const mentor = data.mentor || sess;
      const students = (data.students || []).map(s => ({
        ...s,
        name: s.name || s.fullname || "Student",
        role: "user",
        mentorId: mentor?.id || s.mentor_id,
        mentorEmail: mentor?.email || email,
        mentorName: mentor?.name || mentor?.fullname || "Mentor"
      }));

      const users = J("edu_users", []);
      const filtered = users.filter(u => !students.some(s => s.email === u.email));
      S("edu_users", filtered.concat(students));

      const mentors = J("edu_mentors", []);
      const mObj = {
        ...(mentor || {}),
        id: mentor?.id,
        name: mentor?.name || mentor?.fullname || "Mentor",
        fullname: mentor?.fullname || mentor?.name || "Mentor",
        email: mentor?.email || email,
        spec: mentor?.spec || mentor?.speciality || "",
        phone: mentor?.phone || ""
      };
      S("edu_mentors", [mObj].concat(mentors.filter(m => m.email !== email)));

      const session = {...mObj, role:"mentor"};
      S("edu_current_user", session);
      S("currentUser", session);
      S("edu_auth", {loggedIn:true, role:"mentor", email});
      localStorage.setItem("role","mentor");
      localStorage.setItem("currentUserEmail", email);
      localStorage.setItem("username", mObj.name);

      applyMentorToUI(mObj);

      // Reload алып тасталды: mentor.html қатты қатып/қайта жүктеле бермеуі үшін.
      sessionStorage.setItem("v51MentorSynced","1");
    }catch(err){
      console.warn("mentor sync failed:", err.message);
    }
  }

  normalizeSession();
  document.addEventListener("DOMContentLoaded", () => {
    applyMentorToUI(J("edu_current_user", null) || J("currentUser", null));
    setTimeout(syncMentorData, 300);
  });
})();
