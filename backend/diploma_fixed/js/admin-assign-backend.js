/* V51: persist student-mentor assignment to backend too */
(function(){
  const API = window.BACKEND_URL || "http://localhost:3000";
  const J = (k,f)=>{try{return JSON.parse(localStorage.getItem(k)||"")||f}catch(e){return f}};
  const S = (k,v)=>localStorage.setItem(k, JSON.stringify(v));

  async function api(path, options={}){
    const res = await fetch(API + path, {
      headers: {"Content-Type":"application/json"},
      ...options,
      body: options.body ? JSON.stringify(options.body) : undefined
    });
    const data = await res.json().catch(()=>({ok:false,message:"Backend response error"}));
    if(!res.ok || data.ok === false) throw new Error(data.message || ("HTTP " + res.status));
    return data;
  }

  async function assignStudentToMentorV51(){
    const stuEmail = document.getElementById("assignStudent")?.value;
    const mentorId = document.getElementById("assignMentor")?.value;
    const mentors = J("edu_mentors", []);
    const users = J("edu_users", []);
    const mentor = mentors.find(m => String(m.id) === String(mentorId));
    if(!stuEmail || !mentor) { alert("Студент пен менторды таңда!"); return; }

    try{
      await api("/api/assign-mentor", {method:"POST", body:{
        studentEmail: stuEmail,
        mentorId: mentor.id,
        mentorEmail: mentor.email,
        mentorName: mentor.name || mentor.fullname
      }});
    }catch(err){
      console.warn("Backend assignment failed, local fallback:", err.message);
      alert("Backend assignment warning: " + err.message + "\nLocal түрде сақтаймын, бірақ Supabase үшін V51 SQL керек.");
    }

    const idx = users.findIndex(u => u.email === stuEmail);
    if(idx !== -1){
      users[idx].mentorId = mentor.id;
      users[idx].mentorEmail = mentor.email;
      users[idx].mentorName = mentor.name || mentor.fullname;
      S("edu_users", users);
    }
    if(typeof renderMentors === "function") renderMentors();
    alert("✅ Студент менторға бекітілді.");
  }

  function patch(){
    if(!location.pathname.toLowerCase().includes("admin")) return;
    window.assignStudentToMentor = assignStudentToMentorV51;
    [...document.querySelectorAll("button")].forEach(btn=>{
      if((btn.textContent||"").includes("Тағайындау")){
        btn.removeAttribute("onclick");
        if(btn.dataset.v51Assign !== "1"){
          btn.dataset.v51Assign = "1";
          btn.addEventListener("click", e => {
            e.preventDefault(); e.stopImmediatePropagation(); assignStudentToMentorV51();
          }, true);
        }
      }
    });
  }
  document.addEventListener("DOMContentLoaded", () => { patch(); setTimeout(patch,500); setTimeout(patch,1500); });
})();
