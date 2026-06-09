(function () {
  "use strict";
 
  const API = window.BACKEND_URL || "http://localhost:3000";
  const $ = (s, r = document) => r.querySelector(s);
 
  // ── Helpers ──────────────────────────────────────────────────
  function currentEmail() {
    return (localStorage.getItem("currentUserEmail") || "").trim().toLowerCase();
  }
  function currentName() {
    return (
      localStorage.getItem("username") ||
      (JSON.parse(localStorage.getItem("u_" + currentEmail() + "_profileData") || "{}").name) ||
      "Student"
    );
  }
 
  // i18n-profile.js-тен келетін глобал функциялар
  // Егер жүктелмесе — fallback
  function pl() {
    if (typeof window.pLang === "function") return window.pLang();
    const l = (localStorage.getItem("lang") || "kz").toLowerCase();
    return l === "kk" ? "kz" : ["kz", "ru", "en", "tr"].includes(l) ? l : "kz";
  }
  function pt(obj) {
    if (typeof window.pT === "function") return window.pT(obj);
    return obj?.[pl()] || obj?.kz || "";
  }
  function getPT(key) {
    const P = window.P_TEXTS;
    if (!P || !P[key]) return key;
    return pt(P[key]);
  }
 
  function toast(msg) {
    if (typeof showToast === "function") showToast(msg);
    else if (typeof showProfileToast === "function") showProfileToast(msg);
    else alert(msg);
  }
 
  async function apiPost(path, body) {
    const res = await fetch(API + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({ ok: false, message: "Backend response error" }));
    if (!res.ok || data.ok === false) throw new Error(data.message || "HTTP " + res.status);
    return data;
  }
 
  function prGetFix(key, fallback = []) {
    const email = currentEmail() || "guest";
    try {
      return JSON.parse(
        localStorage.getItem("u_" + email + "_" + key) ||
        localStorage.getItem(key) ||
        JSON.stringify(fallback)
      );
    } catch (e) {
      return fallback;
    }
  }
  function prSetFix(key, value) {
    const email = currentEmail() || "guest";
    localStorage.setItem("u_" + email + "_" + key, JSON.stringify(value));
    localStorage.setItem(key, JSON.stringify(value));
  }
 
  // ════════════════════════════════════════════════════════════
  // DOCUMENTS — profileDocuments массивін i18n-пен алмастыру
  // ════════════════════════════════════════════════════════════
  function getProfileDocuments() {
    const P = window.P_TEXTS;
    if (P && P.docs) {
      return [
        ["passport",       pt(P.docs.passport),       pt(P.docs.passportDesc)],
        ["diploma",        pt(P.docs.attestat),        pt(P.docs.attestatDesc)],
        ["transcript",     pt(P.docs.transcript),      pt(P.docs.transcriptDesc)],
        ["motivation",     pt(P.docs.motivation),      pt(P.docs.motivationDesc)],
        ["recommendation", pt(P.docs.recommendation),  pt(P.docs.recommendationDesc)],
        ["cv",             pt(P.docs.cv),               pt(P.docs.cvDesc)],
      ];
    }
    // Fallback
    return [
      ["passport",       "Passport",             "Valid passport copy"],
      ["diploma",        "School Certificate",   "School graduation document"],
      ["transcript",     "Transcript",           "Transcript or grade list"],
      ["motivation",     "Motivation letter",    "Motivation letter for scholarship/university"],
      ["recommendation", "Recommendation letter","Teacher or mentor recommendation"],
      ["cv",             "CV / Resume",          "Achievements, languages, experience, projects"],
    ];
  }
 
  // profileDocuments жаңартуы — script.js оны тікелей қолданады
  function refreshProfileDocuments() {
    if (typeof window.profileDocuments !== "undefined") {
      window.profileDocuments = getProfileDocuments();
    }
  }
 
  // ════════════════════════════════════════════════════════════
  // STATUS LABELS
  // ════════════════════════════════════════════════════════════
  function getStatusLabel(status) {
    const P = window.P_TEXTS;
    if (!P) return status;
    const map = {
      pending:  pt(P.pending),
      approved: pt(P.approved),
      rejected: pt(P.rejected),
      uploaded: pt(P.uploaded),
    };
    return map[status] || status;
  }
 
  function getConsultStatusBadge(r) {
    const P = window.P_TEXTS;
    const l = {
      approved:    P ? pt(P.consultApproved    || { kz: "Бекітілді ✓",           ru: "Подтверждено ✓",         en: "Approved ✓",       tr: "Onaylandı ✓" }) : "Approved",
      completed:   { kz: "✔️ Өтілді",           ru: "✔️ Выполнено",              en: "✔️ Completed",           tr: "✔️ Tamamlandı" },
      rejected:    P ? pt(P.consultRejected    || { kz: "Қабылданбады",           ru: "Отклонено",              en: "Rejected",         tr: "Reddedildi" }) : "Rejected",
      cancelled:   { kz: "🚫 Бас тартылды",    ru: "🚫 Отменено",               en: "🚫 Cancelled",           tr: "🚫 İptal edildi" },
      assigned:    P ? pt(P.consultAssigned    || { kz: "Ментор тағайындалды",    ru: "Ментор назначен",        en: "Mentor assigned",  tr: "Mentor atandı" }) : "Assigned",
      paid_pending:P ? pt(P.consultPaidPending || { kz: "💳 Төленді · Күтілуде", ru: "💳 Оплачено · Ожидает", en: "💳 Paid · Pending", tr: "💳 Ödendi · Beklemede" }) : "Paid",
      pending:     { kz: "⏳ Күтілуде",         ru: "⏳ Ожидает",                en: "⏳ Pending",              tr: "⏳ Beklemede" },
    };
    const colors = {
      approved:    { bg: "rgba(5,150,105,.2)",   color: "#34d399" },
      completed:   { bg: "rgba(139,92,246,.2)",  color: "#c4b5fd" },
      rejected:    { bg: "rgba(239,68,68,.2)",   color: "#f87171" },
      cancelled:   { bg: "rgba(156,163,175,.15)",color: "#9ca3af" },
      assigned:    { bg: "rgba(37,99,235,.2)",   color: "#93c5fd" },
      paid_pending:{ bg: "rgba(59,130,246,.2)",  color: "#93c5fd" },
      pending:     { bg: "rgba(251,191,36,.15)", color: "#fbbf24" },
    };
    const key = r.status || "pending";
    const text = typeof l[key] === "object" && l[key].kz ? pt(l[key]) : (l[key] || key);
    const c = colors[key] || colors.pending;
    return `<span style="background:${c.bg};color:${c.color};padding:4px 11px;border-radius:10px;font-size:11px;font-weight:700;">${text}</span>`;
  }
 
  // ════════════════════════════════════════════════════════════
  // RENDER — renderProfileDocuments (i18n қолдауымен)
  // ════════════════════════════════════════════════════════════
  const _oldRenderDocs = window.renderProfileDocuments;
  window.renderProfileDocuments = function () {
    const box = document.getElementById("profileDocumentsList");
    if (!box) return;
 
    refreshProfileDocuments();
    const docs = getProfileDocuments();
    const saved = prGetFix("profileDocs", {});
    const uploads = prGetFix("prepUploads", {});
 
    const doneLabel   = { kz: "✓ Дайын",    ru: "✓ Готово",    en: "✓ Ready",    tr: "✓ Hazır" };
    const waitLabel   = { kz: "Күтілуде",   ru: "Ожидает",     en: "Pending",    tr: "Beklemede" };
    const confirmLabel = { kz: "Растала",   ru: "Подтвердить", en: "Confirm",    tr: "Onayla" };
 
    box.innerHTML = docs.map(([id, title, desc]) => {
      const checked  = saved[id];
      const uploaded = uploads[id];
      const badgeText = uploaded
        ? "📎 " + uploaded.name.substring(0, 20) + (uploaded.name.length > 20 ? "..." : "")
        : checked
        ? pt(doneLabel)
        : pt(waitLabel);
      const badgeClass = (uploaded || checked) ? "success" : "warning";
 
      return `
        <div class="profile-check-row" style="${uploaded ? "border-left:3px solid #059669" : ""}">
          <div class="profile-check-left">
            <input type="checkbox" id="doc-${id}" ${(checked || uploaded) ? "checked" : ""}
              onchange="toggleProfileDocument('${id}', this.checked)" />
            <label for="doc-${id}">
              <strong>${title}</strong>
              <p>${desc}</p>
            </label>
          </div>
          <span class="badge ${badgeClass}">${badgeText}</span>
        </div>`;
    }).join("");
 
    if (typeof updateProfileDashboard === "function") updateProfileDashboard();
  };
 
  // ════════════════════════════════════════════════════════════
  // RENDER — renderConsultationHistory (i18n қолдауымен)
  // ════════════════════════════════════════════════════════════
  window.renderConsultationHistory = function () {
    const box = document.getElementById("consultationList");
    if (!box) return;
 
    const email = currentEmail();
    const list  = JSON.parse(localStorage.getItem("u_" + email + "_consult_requests") || "[]");
 
    if (!list.length) {
      box.innerHTML = `<div class="profile-empty">${getPT("noConsult")}</div>`;
      if (typeof updateProfileDashboard === "function") updateProfileDashboard();
      return;
    }
 
    const cancelTxt   = { kz: "🚫 Бас тарту",       ru: "🚫 Отменить",      en: "🚫 Cancel",        tr: "🚫 İptal et" };
    const joinTxt     = { kz: "Кездесуге қосылу →",  ru: "Присоединиться →", en: "Join meeting →",  tr: "Toplantıya katıl →" };
    const timeTxt     = { kz: "📅 Уақыт:",            ru: "📅 Время:",        en: "📅 Time:",         tr: "📅 Saat:" };
    const linkTxt     = { kz: "🔗 Сілтеме:",          ru: "🔗 Ссылка:",       en: "🔗 Link:",         tr: "🔗 Bağlantı:" };
    const paidTxt     = { kz: "төленді",              ru: "оплачено",         en: "paid",             tr: "ödendi" };
    const cancelledBy = { kz: "Admin бас тартты",     ru: "Отменено администратором", en: "Cancelled by admin", tr: "Admin tarafından iptal edildi" };
    const cancelledU  = { kz: "Бас тартылды",         ru: "Отменено",         en: "Cancelled",        tr: "İptal edildi" };
    const reasonTxt   = { kz: "Себеп",                ru: "Причина",          en: "Reason",           tr: "Neden" };
    const newReqTxt   = { kz: "Жаңа консультация сұрата аласыз", ru: "Можете подать новый запрос", en: "You can submit a new request", tr: "Yeni bir talep gönderebilirsiniz" };
 
    box.innerHTML = list.map(r => {
      const badge = getConsultStatusBadge(r);
      const isApproved   = r.status === "approved";
      const isCompleted  = r.status === "completed";
      const isRejected   = r.status === "rejected";
      const isCancelled  = r.status === "cancelled";
      const canCancel    = r.status === "paid_pending" || r.status === "pending" || !r.status;
 
      const borderColor = isApproved  ? "border-left:3px solid #34d399"
        : isCompleted ? "border-left:3px solid #a78bfa"
        : isCancelled ? "border-left:3px solid #6b7280"
        : isRejected  ? "border-left:3px solid #f87171" : "";
 
      const meetBlock = (isApproved || isCompleted) ? `
        <div style="margin-top:10px;padding:13px;background:${isCompleted ? "rgba(139,92,246,.08)" : "rgba(5,150,105,.1)"};border:1px solid ${isCompleted ? "rgba(139,92,246,.25)" : "rgba(5,150,105,.25)"};border-radius:13px;">
          <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:6px;">
            <div><span style="font-size:11px;color:var(--muted);">${pt(timeTxt)}</span><br>
              <strong style="font-size:13px;">${r.meetingTime ? new Date(r.meetingTime).toLocaleString("kk-KZ") : "—"}</strong></div>
            <div><span style="font-size:11px;color:var(--muted);">${pt(linkTxt)}</span><br>
              <a href="${r.meetingLink || "#"}" target="_blank"
                style="font-size:13px;font-weight:800;color:${isCompleted ? "#a78bfa" : "#34d399"};text-decoration:none;">
                ${r.meetingLink ? pt(joinTxt) : "—"}
              </a>
            </div>
          </div>
          ${r.mentorMessage ? `<p style="font-size:12px;color:rgba(255,255,255,.6);margin-top:4px;">💬 ${r.mentorMessage}</p>` : ""}
        </div>` : "";
 
      const cancelBlock = canCancel ? `
        <div style="margin-top:10px;">
          <button onclick="cancelConsultation('${r.id}')"
            style="padding:7px 14px;border:1px solid rgba(239,68,68,.35);border-radius:9px;background:rgba(239,68,68,.08);color:#f87171;font-size:12px;font-weight:700;font-family:inherit;cursor:pointer;">
            ${pt(cancelTxt)}
          </button>
        </div>` : "";
 
      const cancelledBlock = isCancelled ? `
        <div style="margin-top:10px;padding:10px 14px;background:rgba(107,114,128,.08);border:1px solid rgba(107,114,128,.2);border-radius:10px;">
          <p style="font-size:12px;color:#9ca3af;margin:0;">
            🚫 ${r.cancelledBy === "admin" ? pt(cancelledBy) : pt(cancelledU)}
            ${r.cancelReason ? " · " + pt(reasonTxt) + ": " + r.cancelReason : ""}
          </p>
          <p style="font-size:11px;color:rgba(156,163,175,.6);margin:4px 0 0;">${pt(newReqTxt)}</p>
        </div>` : "";
 
      const rejectedBlock = isRejected ? `
        <div style="margin-top:10px;padding:10px 14px;background:rgba(239,68,68,.06);border:1px solid rgba(239,68,68,.15);border-radius:10px;">
          <p style="font-size:12px;color:#f87171;margin:0;">❌ ${getConsultStatusBadge({ status: "rejected" }).replace(/<[^>]+>/g, "")}</p>
          <p style="font-size:11px;color:rgba(239,68,68,.6);margin:4px 0 0;">${pt(newReqTxt)}</p>
        </div>` : "";
 
      const paidHtml = r.paid ? `
        <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(5,150,105,.12);border:1px solid rgba(5,150,105,.2);border-radius:8px;padding:4px 11px;font-size:11px;font-weight:700;color:#34d399;margin-top:4px;">
          💳 ${r.amount ? r.amount.toLocaleString() : "5 000"} ₸ ${pt(paidTxt)} · ${r.cardLast4 || ""}
        </div>` : "";
 
      return `
        <div style="padding:14px 16px;border-radius:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);margin-bottom:8px;${borderColor}">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;margin-bottom:6px;">
            <div>
              <strong style="font-size:13px;display:block;margin-bottom:3px;">📌 ${r.topic}</strong>
              <span style="font-size:11px;color:var(--muted);">${new Date(r.createdAt).toLocaleDateString("kk-KZ")}${r.preferredDate ? " · 🗓 " + r.preferredDate : ""}</span>
            </div>
            ${badge}
          </div>
          ${r.question ? `<p style="font-size:13px;color:rgba(255,255,255,.7);line-height:1.6;margin-bottom:4px;">${r.question}</p>` : ""}
          ${paidHtml}
          ${meetBlock}
          ${cancelledBlock}
          ${rejectedBlock}
          ${cancelBlock}
        </div>`;
    }).join("");
 
    if (typeof updateProfileDashboard === "function") updateProfileDashboard();
  };
 
  // ════════════════════════════════════════════════════════════
  // RENDER — renderProfileDeadlines (i18n қолдауымен)
  // ════════════════════════════════════════════════════════════
  window.renderProfileDeadlines = function () {
    const box = document.getElementById("profileDeadlinesList");
    if (!box) return;
 
    const list = prGetFix("profileDeadlines", []);
    const deleteTxt = { kz: "Өшіру", ru: "Удалить", en: "Delete", tr: "Sil" };
    const emailSentTxt = window.P_TEXTS ? pt(window.P_TEXTS.emailSent) : "Email sent";
 
    if (!list.length) {
      box.innerHTML = `<div class="profile-empty">${getPT("noDeadline")}</div>`;
    } else {
      box.innerHTML = list.map(item => `
        <div class="dashboard-row-card">
          <div>
            <strong>${item.title}</strong>
            <p>${item.date}${item.note ? " · " + item.note : ""}${item.emailed ? ' · <span style="color:#34d399;font-weight:800;">' + emailSentTxt + "</span>" : ""}</p>
          </div>
          <button class="profile-mini-btn danger" onclick="deleteProfileDeadline(${item.id})">${pt(deleteTxt)}</button>
        </div>`).join("");
    }
 
    if (typeof updateProfileDashboard === "function") updateProfileDashboard();
  };
 
  // ════════════════════════════════════════════════════════════
  // RENDER — renderProfileNotes (i18n қолдауымен)
  // ════════════════════════════════════════════════════════════
  window.renderProfileNotes = function () {
    const box = document.getElementById("profileNotesList");
    if (!box) return;
 
    const list = prGetFix("profileNotes", []);
    const deleteTxt = { kz: "Өшіру", ru: "Удалить", en: "Delete", tr: "Sil" };
 
    if (!list.length) {
      box.innerHTML = `<div class="profile-empty">${getPT("noNote")}</div>`;
    } else {
      box.innerHTML = list.map(item => `
        <div class="dashboard-row-card">
          <div>
            <strong>${item.title} · ${item.category}</strong>
            <p>${item.text}</p>
          </div>
          <button class="profile-mini-btn danger" onclick="deleteProfileNote(${item.id})">${pt(deleteTxt)}</button>
        </div>`).join("");
    };
 
    if (typeof updateProfileDashboard === "function") updateProfileDashboard();
  };
 
  // ════════════════════════════════════════════════════════════
  // RENDER — renderProfileUniversities (i18n қолдауымен)
  // ════════════════════════════════════════════════════════════
  window.renderProfileUniversities = function () {
    const box = document.getElementById("savedUniversitiesContainer");
    if (!box) return;
 
    // FIX: saved universities can be stored by university detail pages in different keys.
    // Read all possible keys and merge them for the current student.
    const email = currentEmail() || "guest";
    const readArr = function(k){
      try { const v = JSON.parse(localStorage.getItem(k) || "[]"); return Array.isArray(v) ? v : []; }
      catch(e){ return []; }
    };
    const normalizeUni = function(item){
      if(!item) return null;
      if(typeof item === "string") return { id:item, name:item, city:"Türkiye", note:"Таңдаулыға сақталған", link:"uni/"+item+".html" };
      return {
        id: item.id || item.slug || item.name || Date.now(),
        name: item.name || item.title || "University",
        city: item.city || item.location || "Türkiye",
        note: item.note || "Таңдаулыға сақталған",
        link: item.link || item.href || item.url || (item.slug ? "uni/"+item.slug+".html" : "universities.html")
      };
    };
    const merged = [];
    [
      ...readArr("u_" + email + "_favoriteUniversities")
    ].map(normalizeUni).filter(Boolean).forEach(function(u){
      if(!merged.some(x => String(x.id) === String(u.id) || x.name === u.name)) merged.push(u);
    });
    const list = merged;
    const deleteTxt = { kz: "Өшіру",           ru: "Удалить",     en: "Delete",    tr: "Sil" };
    const noCity    = { kz: "Қала көрсетілмеген", ru: "Город не указан", en: "City not specified", tr: "Şehir belirtilmemiş" };
    const emptyUni  = { kz: "Әзірге университет сақталмаған.", ru: "Университетов пока нет.", en: "No universities saved yet.", tr: "Henüz üniversite kaydedilmedi." };
 
    if (!list.length) {
      box.innerHTML = `<div class="profile-empty">${pt(emptyUni)}</div>`;
    } else {
      box.innerHTML = list.map(item => `
        <div class="dashboard-row-card">
          <div>
            <strong>${item.name}</strong>
            <p>${item.city || pt(noCity)}${item.note ? " · " + item.note : ""}</p>
          </div>
<button class="profile-mini-btn danger" onclick="deleteProfileUniversity('${item.id}')">${pt(deleteTxt)}</button>
</div>`).join("");
    if (typeof updateProfileDashboard === "function") updateProfileDashboard();
  };
 
  // ════════════════════════════════════════════════════════════
  // RENDER — Tasks (i18n қолдауымен)
  // ════════════════════════════════════════════════════════════
  const _oldRenderTasks = window.renderTasksSection;
  window.renderTasksSection = function () {
    const box = document.getElementById("tasksListContainer");
    if (!box) {
      if (typeof _oldRenderTasks === "function") _oldRenderTasks();
      return;
    }
 
    const tasks = typeof getTasks === "function" ? getTasks() : [];
    const deleteTxt  = { kz: "Өшіру",   ru: "Удалить",    en: "Delete",    tr: "Sil" };
    const doneTxt    = { kz: "Орындалды", ru: "Выполнено",  en: "Done",      tr: "Tamamlandı" };
    const highTxt    = { kz: "🔴 Жоғары", ru: "🔴 Высокая", en: "🔴 High",   tr: "🔴 Yüksek" };
    const normalTxt  = { kz: "🟡 Орта",   ru: "🟡 Средняя", en: "🟡 Normal", tr: "🟡 Orta" };
    const lowTxt     = { kz: "🟢 Төмен",  ru: "🟢 Низкая",  en: "🟢 Low",    tr: "🟢 Düşük" };
 
    if (!tasks.length) {
      box.innerHTML = `<p class="profile-empty">${getPT("noTask")}</p>`;
      return;
    }
 
    const prioMap = { high: pt(highTxt), normal: pt(normalTxt), low: pt(lowTxt) };
 
    box.innerHTML = tasks.map(task => `
      <div class="dashboard-row-card" style="${task.status === "done" ? "opacity:.6" : ""}">
        <div>
          <strong style="${task.status === "done" ? "text-decoration:line-through" : ""}">${task.title}</strong>
          <p>${task.dueDate || ""}${task.priority ? " · " + (prioMap[task.priority] || task.priority) : ""}</p>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <button class="profile-mini-btn secondary" onclick="toggleTaskDone('${task.id}')">${task.status === "done" ? "↩" : pt(doneTxt)}</button>
          <button class="profile-mini-btn danger" onclick="deleteTask('${task.id}')">${pt(deleteTxt)}</button>
        </div>
      </div>`).join("");
  };
 
  // ════════════════════════════════════════════════════════════
  // RENDER — Notifications (i18n қолдауымен)
  // ════════════════════════════════════════════════════════════
  const _oldRenderNotif = window.renderNotificationsPanel;
  window.renderNotificationsPanel = function () {
    if (typeof _oldRenderNotif === "function") _oldRenderNotif();
 
    const box = document.getElementById("notificationsList");
    if (!box) return;
    if (!box.children.length || (box.children.length === 1 && box.firstElementChild?.tagName === "P")) {
      box.innerHTML = `<p class="profile-empty">${getPT("noNotif")}</p>`;
    }
  };
 
  // ════════════════════════════════════════════════════════════
  // DEADLINE — email арқылы жіберу
  // ════════════════════════════════════════════════════════════
  window.addProfileDeadline = async function () {
    const title = $("#profileDeadlineTitle")?.value.trim();
    const date  = $("#profileDeadlineDate")?.value;
    const note  = $("#profileDeadlineNote")?.value.trim();
    const email = currentEmail();
 
    const fillMsg  = { kz: "Атауы мен күнін толтыр", ru: "Заполните название и дату", en: "Fill in title and date", tr: "Başlık ve tarihi doldurun" };
    const emailMsg = { kz: "Email табылмады. Қайта кіріп көр.", ru: "Email не найден. Войдите снова.", en: "Email not found. Please log in again.", tr: "E-posta bulunamadı. Tekrar giriş yapın." };
 
    if (!title || !date) return toast(pt(fillMsg));
    if (!email) return toast(pt(emailMsg));
 
    const btn = document.querySelector('button[onclick="addProfileDeadline()"]');
    const sendingTxt = { kz: "Email жіберілуде...", ru: "Отправка email...", en: "Sending email...", tr: "E-posta gönderiliyor..." };
    const origText = btn ? btn.textContent : "";
    if (btn) { btn.textContent = pt(sendingTxt); btn.disabled = true; }
 
    try {
      const data = await apiPost("/api/deadlines", { email, name: currentName(), title, date, note });
      const list = prGetFix("profileDeadlines", []);
      list.unshift({ id: Date.now(), title, date, note, emailed: true, backend: data.deadline || null });
      prSetFix("profileDeadlines", list);
      ["profileDeadlineTitle", "profileDeadlineDate", "profileDeadlineNote"].forEach(id => {
        const el = $("#" + id); if (el) el.value = "";
      });
      window.renderProfileDeadlines();
      toast(window.P_TEXTS ? pt(window.P_TEXTS.toastDeadlineOk) : "✅ Deadline added!");
    } catch (err) {
      // Email жіберілмесе де локальға сақта
      const list = prGetFix("profileDeadlines", []);
      list.unshift({ id: Date.now(), title, date, note, emailed: false });
      prSetFix("profileDeadlines", list);
      ["profileDeadlineTitle", "profileDeadlineDate", "profileDeadlineNote"].forEach(id => {
        const el = $("#" + id); if (el) el.value = "";
      });
      window.renderProfileDeadlines();
      toast((window.P_TEXTS ? pt(window.P_TEXTS.toastDeadlineErr) : "❌") + ": " + err.message);
    } finally {
      if (btn) { btn.textContent = origText || getPT("pro-deadline-add") || "Add deadline"; btn.disabled = false; }
    }
  };
 
  // ════════════════════════════════════════════════════════════
  // CONSULTATION — openPaymentModal (i18n қолдауымен)
  // ════════════════════════════════════════════════════════════
  window.openPaymentModal = function () {
    const question = ($("#cReqQuestion")?.value || "").trim();
    const date     = $("#cReqDate")?.value;
 
    if (!question) {
      toast(window.P_TEXTS ? pt(window.P_TEXTS.toastWarnQuestion) : "⚠️ Write your question first!");
      return;
    }
    if (date) {
      const chosen = new Date(date), today = new Date();
      today.setHours(0, 0, 0, 0);
      if (chosen < today) {
        toast(window.P_TEXTS ? pt(window.P_TEXTS.toastWarnDate) : "⚠️ Cannot select a past date!");
        return;
      }
    }
    const modal = document.getElementById("paymentModal");
    if (modal) modal.style.display = "flex";
    if (typeof initStripe === "function") setTimeout(initStripe, 150);
  };
 
  // ════════════════════════════════════════════════════════════
  // CONSULTATION — processPayment (i18n қолдауымен)
  // ════════════════════════════════════════════════════════════
  window.processPayment = async function () {
    const errEl  = $("#payError");
    const email  = currentEmail();
    const topic  = $("#cReqTopic")?.value || "Consultation";
    const date   = $("#cReqDate")?.value  || "";
    const question = ($("#cReqQuestion")?.value || "").trim();
 
    if (!question) {
      toast(window.P_TEXTS ? pt(window.P_TEXTS.toastWarnQuestion) : "⚠️ Write your question first!");
      return;
    }
    if (!email) return;
 
    const key = "u_" + email + "_consult_requests";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    const hasActive = existing.some(r =>
      r.status === "paid_pending" || r.status === "pending" || r.status === "assigned"
    );
    if (hasActive) {
      if (typeof closePaymentModal === "function") closePaymentModal();
      toast(window.P_TEXTS ? pt(window.P_TEXTS.toastWarnActive) : "⚠️ Active consultation exists.");
      return;
    }
 
    const btn = $("#payBtn");
    const oldBtnText = btn ? btn.textContent : "";
    const processingTxt = { kz: "⏳ Өңделуде...", ru: "⏳ Обработка...", en: "⏳ Processing...", tr: "⏳ İşleniyor..." };
    if (btn) { btn.textContent = pt(processingTxt); btn.disabled = true; }
    if (errEl) errEl.style.display = "none";
 
    // Stripe жүктелген болса — Stripe арқылы
    if (window._stripe && window._stripeCard) {
      try {
        const resp = await apiPost("/api/stripe/create-payment-intent", {
          amount: 5000, currency: "kzt", topic, email,
        });
        if (!resp.ok || !resp.clientSecret) throw new Error(resp.message || "Payment intent error");
 
        const result = await window._stripe.confirmCardPayment(resp.clientSecret, {
          payment_method: { card: window._stripeCard, billing_details: { email } },
        });
        if (result.error) {
          if (errEl) { errEl.textContent = "❌ " + result.error.message; errEl.style.display = "block"; }
          if (btn) { btn.textContent = oldBtnText; btn.disabled = false; }
          return;
        }
        const newReq = {
          id: "cr_" + Date.now(), topic, question, preferredDate: date,
          status: "paid_pending", paid: true, amount: 5000,
          stripePaymentId: result.paymentIntent.id,
          cardLast4: "****Stripe", createdAt: new Date().toISOString(),
        };
        existing.unshift(newReq);
        localStorage.setItem(key, JSON.stringify(existing));
      } catch (err) {
        if (errEl) { errEl.textContent = "❌ " + err.message; errEl.style.display = "block"; }
        if (btn) { btn.textContent = oldBtnText; btn.disabled = false; }
        return;
      }
    } else {
      // Mock payment (Stripe жоқ болса)
      const newReq = {
        id: "cr_" + Date.now(), topic, question, preferredDate: date,
        status: "paid_pending", paid: true, amount: 5000,
        cardLast4: "****mock", createdAt: new Date().toISOString(),
      };
      existing.unshift(newReq);
      localStorage.setItem(key, JSON.stringify(existing));
 
      // Backend-ке жіберуге тырыс
      try {
        await apiPost("/api/consultations", {
          email, name: currentName(), topic, preferredDate: date, question, paid: true, amount: 5000,
        });
      } catch (_) { /* backend жоқ болса да жүреді */ }
    }
 
    if (typeof closePaymentModal === "function") closePaymentModal();
    const qEl = $("#cReqQuestion"); if (qEl) qEl.value = "";
    const dEl = $("#cReqDate");     if (dEl) dEl.value = "";
    window.renderConsultationHistory();
    if (btn) { btn.textContent = oldBtnText; btn.disabled = false; }
    toast(window.P_TEXTS ? pt(window.P_TEXTS.toastPaymentOk) : "✅ Payment accepted!");
  };
 
  // ════════════════════════════════════════════════════════════
  // cancelConsultation (i18n қолдауымен)
  // ════════════════════════════════════════════════════════════
  window.cancelConsultation = function (reqId) {
    const confirmTxt = { kz: "Консультациядан бас тартасыз ба?", ru: "Вы хотите отменить консультацию?", en: "Do you want to cancel the consultation?", tr: "Danışmanlığı iptal etmek istiyor musunuz?" };
    const cancelledToast = { kz: "🚫 Консультациядан бас тартылды.", ru: "🚫 Консультация отменена.", en: "🚫 Consultation cancelled.", tr: "🚫 Danışmanlık iptal edildi." };
 
    if (!confirm(pt(confirmTxt))) return;
    const email = currentEmail();
    const key   = "u_" + email + "_consult_requests";
    const list  = JSON.parse(localStorage.getItem(key) || "[]");
    const idx   = list.findIndex(r => r.id === reqId);
    if (idx !== -1) {
      list[idx].status = "cancelled";
      list[idx].cancelledAt = new Date().toISOString();
      localStorage.setItem(key, JSON.stringify(list));
    }
    window.renderConsultationHistory();
    toast(pt(cancelledToast));
  };
 
  // ════════════════════════════════════════════════════════════
  // showProfileToast override (i18n қолдауымен)
  // ════════════════════════════════════════════════════════════
  window.showProfileToast = function (message) {
    // Toast хабарламаларын аудару
    const toastMap = {
      "Профиль сақталды":      { kz: "✅ Профиль сақталды",        ru: "✅ Профиль сохранён",         en: "✅ Profile saved",           tr: "✅ Profil kaydedildi" },
      "Профиль тазаланды":     { kz: "Профиль тазаланды",          ru: "Профиль очищен",              en: "Profile cleared",           tr: "Profil temizlendi" },
      "Профиль reset жасалды": { kz: "Профиль тазаланды",          ru: "Профиль сброшен",             en: "Profile reset",             tr: "Profil sıfırlandı" },
      "Университет қосылды":   { kz: "Университет қосылды",        ru: "Университет добавлен",        en: "University added",          tr: "Üniversite eklendi" },
      "Университет өшірілді":  { kz: "Университет өшірілді",       ru: "Университет удалён",          en: "University deleted",        tr: "Üniversite silindi" },
      "Университет атауын жаз":{ kz: "Университет атауын жаз",     ru: "Введите название университета",en: "Enter university name",    tr: "Üniversite adını girin" },
      "Дедлайн қосылды":       { kz: "Дедлайн қосылды",           ru: "Дедлайн добавлен",            en: "Deadline added",            tr: "Son tarih eklendi" },
      "Атауы мен күнін толтыр":{ kz: "Атауы мен күнін толтыр",   ru: "Заполните название и дату",   en: "Fill in title and date",    tr: "Başlık ve tarihi doldurun" },
      "Консультация сақталды": { kz: "Консультация сақталды",      ru: "Консультация сохранена",      en: "Consultation saved",        tr: "Danışmanlık kaydedildi" },
      "Жазба сақталды":        { kz: "Жазба сақталды",            ru: "Заметка сохранена",           en: "Note saved",                tr: "Not kaydedildi" },
      "Тақырып пен мәтінді толтыр":{ kz: "Тақырып пен мәтінді толтыр", ru: "Заполните тему и текст", en: "Fill in title and text",  tr: "Başlık ve metni doldurun" },
      "Тапсырма қосылды":      { kz: "Тапсырма қосылды",          ru: "Задача добавлена",            en: "Task added",                tr: "Görev eklendi" },
      "Тапсырма атауын жаз":   { kz: "Тапсырма атауын жаз",       ru: "Введите название задачи",     en: "Enter task title",          tr: "Görev başlığını girin" },
      "Құжат дайын деп белгіленді":{ kz: "Құжат дайын деп белгіленді", ru: "Документ отмечен как готовый", en: "Document marked as ready", tr: "Belge hazır olarak işaretlendi" },
      "Белгі алынды":          { kz: "Белгі алынды",               ru: "Отметка снята",               en: "Mark removed",              tr: "İşaret kaldırıldı" },
      "Күні мен сұрағыңды толтыр":{ kz: "Күні мен сұрағыңды толтыр", ru: "Заполните дату и вопрос", en: "Fill in date and question",  tr: "Tarih ve soruyu doldurun" },
    };
 
    const obj = toastMap[message];
    const translated = obj ? pt(obj) : message;
 
    const toastEl = document.getElementById("profileToast");
    if (toastEl) {
      toastEl.innerText = translated;
      toastEl.style.display = "block";
      clearTimeout(window.profileToastTimer);
      window.profileToastTimer = setTimeout(() => { toastEl.style.display = "none"; }, 2200);
    }
  };
 
  // ════════════════════════════════════════════════════════════
  // INIT — тіл ауысқанда қайта рендер
  // ════════════════════════════════════════════════════════════
  const _origSetLang = window.setLang;
  window.setLang = function (newLang) {
    localStorage.setItem("lang", newLang);
    if (typeof _origSetLang === "function") _origSetLang(newLang);
 
    // Рендер функцияларын қайтадан шақыр
    if (document.body?.dataset?.page === "profile") {
      setTimeout(function () {
        refreshProfileDocuments();
        window.renderProfileDocuments();
        window.renderConsultationHistory();
        window.renderProfileDeadlines();
        window.renderProfileNotes();
        window.renderProfileUniversities();
        if (typeof renderTasksSection === "function") renderTasksSection();
        if (typeof renderNotificationsPanel === "function") renderNotificationsPanel();
      }, 50);
    }
  };
  }
})();