/* FAST FIX: universities render instantly, backend loads in background */
(function () {
  "use strict";

  const API = window.BACKEND_URL || "http://localhost:3000";
  const PER = 9;
  const BACKEND_TIMEOUT = 1200;

  let page = 1;
  let cache = [];
  let loadingBackend = false;

  const J = (k, f) => {
    try {
      const raw = localStorage.getItem(k);
      return raw ? JSON.parse(raw) : f;
    } catch (e) {
      return f;
    }
  };

  const S = (k, v) => {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {}
  };

  const getLang = () => localStorage.getItem("lang") || localStorage.getItem("language") || "kz";

  const labels = {
    lang: { kz: "Оқыту тілі:", ru: "Язык обучения:", en: "Language:", tr: "Öğretim dili:" },
    programs: { kz: "Бағдарламалар:", ru: "Программы:", en: "Programs:", tr: "Programlar:" },
    tuition: { kz: "Оқу ақысы:", ru: "Стоимость:", en: "Tuition:", tr: "Ücret:" },
    rating: { kz: "Рейтинг:", ru: "Рейтинг:", en: "Rating:", tr: "Sıralama:" },
    details: { kz: "Толық ақпарат", ru: "Подробнее", en: "Details", tr: "Detaylar" },
    typeDefault: { kz: "Университет", ru: "Университет", en: "University", tr: "Üniversite" },
    empty: { kz: "Ештеңе табылмады.", ru: "Ничего не найдено.", en: "Nothing found.", tr: "Sonuç bulunamadı." }
  };

  function L(key) {
    const lang = getLang();
    return labels[key]?.[lang] || labels[key]?.kz || "";
  }

  function T(value) {
    if (!value) return "";
    const lang = getLang();
    if (typeof value === "object") {
      return value[lang] || value.kz || value.ru || value.en || value.tr || "";
    }
    if (typeof window.univT === "function") return window.univT(value);
    return value;
  }

  function makeSlug(name) {
    return String(name || "uni")
      .toLowerCase()
      .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
      .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
      .replace(/[^a-z0-9а-яёәғқңөұүһі]+/gi, "-")
      .replace(/^-+|-+$/g, "") || ("uni-" + Date.now());
  }

  function normalize(u) {
    const slug = u.slug || makeSlug(u.name);
    return {
      id: u.id || slug,
      name: u.name || "",
      slug,
      city: u.city || "",
      country: u.country || "Türkiye",
      type: u.type || "",
      language: u.language || "",
      programs: u.programs || "",
      description: u.description || "",
      image_url: u.image_url || u.image || "",
      href: u.href || `uni/dynamic-university.html?slug=${encodeURIComponent(slug)}`,
      tuition: u.tuition || "",
      rating: u.rating || "",
      accreditation: u.accreditation || "",
      advantages: u.advantages || "",
      campuses: u.campuses || "",
      exchange_programs: u.exchange_programs || "",
      website: u.website || "",
      levels: u.levels || "",
      why_choose: u.why_choose || "",
      admission_requirements: u.admission_requirements || "",
      majors: u.majors || "",
      scholarships: u.scholarships || "",
      accommodation: u.accommodation || "",
      education_format: u.education_format || ""
    };
  }

  function mergeLists(staticList, adminList) {
    const map = new Map();
    staticList.forEach((u) => map.set(u.slug, u));
    adminList.forEach((u) => map.set(u.slug, u));
    return Array.from(map.values());
  }

  function loadLocal() {
    const staticList = Array.isArray(window.STATIC_UNIVERSITIES)
      ? window.STATIC_UNIVERSITIES.map(normalize)
      : [];

    const adminList = J("publicUniversities", J("adminUniversities", []))
      .filter(Boolean)
      .map(normalize);

    cache = mergeLists(staticList, adminList);
    return cache;
  }

  async function fetchWithTimeout(url, options = {}, timeout = BACKEND_TIMEOUT) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    try {
      return await fetch(url, { ...options, signal: controller.signal });
    } finally {
      clearTimeout(timer);
    }
  }

  async function refreshFromBackend() {
    if (loadingBackend) return;
    loadingBackend = true;

    try {
      const res = await fetchWithTimeout(API + "/api/universities");
      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || data.ok === false) throw new Error(data.message || "Backend unavailable");

      const adminList = (data.universities || []).map(normalize);
      S("publicUniversities", adminList);
      S("adminUniversities", adminList);

      const staticList = Array.isArray(window.STATIC_UNIVERSITIES)
        ? window.STATIC_UNIVERSITIES.map(normalize)
        : [];
      cache = mergeLists(staticList, adminList);
    } catch (e) {
      console.warn("Universities backend skipped:", e.message || e);
    } finally {
      loadingBackend = false;
    }
  }

  function cardHTML(u) {
    const href = u.href || `uni/dynamic-university.html?slug=${encodeURIComponent(u.slug)}`;
    return `
      <article class="university-card">
        ${u.image_url
          ? `<img class="university-card-image" src="${u.image_url}" loading="lazy" onerror="this.style.display='none'">`
          : `<div class="university-card-image" style="display:flex;align-items:center;justify-content:center;font-size:46px;background:rgba(255,255,255,.05)">🏛</div>`}
        <div class="university-card-content">
          <div class="university-card-tags">
            <span>${T(u.type) || L("typeDefault")}</span>
            <span>${T(u.city) || "—"}</span>
          </div>
          <h3>${T(u.name)}</h3>
          <p>${T(u.description) || ""}</p>
          <p><b>${L("lang")}</b> ${T(u.language) || "—"}</p>
          <p><b>${L("programs")}</b> ${T(u.programs) || "—"}</p>
          ${u.tuition ? `<p><b>${L("tuition")}</b> ${T(u.tuition)}</p>` : ""}
          ${u.rating ? `<p><b>${L("rating")}</b> ${T(u.rating)}</p>` : ""}
          <a href="${href}" class="details-btn" 
          onpointerdown="window.location.href=this.href;return false;">
          ${L("details")}
</a>
        </div>
      </article>`;
  }

  function render() {
    const grid = document.getElementById("universitiesGrid");
    const pagination = document.getElementById("uniPagination");
    const empty = document.getElementById("emptyState");
    const search = document.getElementById("universitySearch");
    if (!grid) return;

    if (!cache.length) loadLocal();

    const q = (search?.value || "").toLowerCase().trim();
    let all = cache.filter((u) => {
      const text = [T(u.name), T(u.city), T(u.type), T(u.language), T(u.programs), T(u.description), T(u.tuition), T(u.rating)]
        .join(" ")
        .toLowerCase();
      return !q || text.includes(q);
    });

    if (!all.length) {
      grid.innerHTML = "";
      if (pagination) pagination.innerHTML = "";
      if (empty) { empty.textContent = L("empty"); empty.style.display = "block"; }
      return;
    }

    if (empty) empty.style.display = "none";
    const total = Math.max(1, Math.ceil(all.length / PER));
    if (page > total) page = total;
    const items = all.slice((page - 1) * PER, page * PER);
    grid.innerHTML = items.map(cardHTML).join("");

    if (pagination) {
      pagination.innerHTML = total > 1
        ? Array.from({ length: total }, (_, i) => i + 1).map((p) => `
            <button type="button" data-page="${p}" class="${p === page ? "active-page" : ""}"
              style="padding:10px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.14);background:${p === page ? "#b3123c" : "rgba(255,255,255,.08)"};color:white;font-weight:800;cursor:pointer;">
              ${p}
            </button>`).join("")
        : "";

        
    }
  }

  function injectStyles() {
    if (document.getElementById("publicUniFastStyles")) return;
    const style = document.createElement("style");
    style.id = "publicUniFastStyles";
    style.innerHTML = `
      .university-card-tags{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;}
      .university-card-tags span{padding:7px 12px;border-radius:20px;background:rgba(255,255,255,.08);color:#fff;font-size:13px;line-height:1.2;}
      .details-btn{display:block;width:100%;margin-top:16px;padding:14px;text-align:center;border-radius:14px;text-decoration:none;color:#fff;font-weight:800;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);transition:.2s;box-sizing:border-box;}
      .details-btn:hover{background:#b3123c;transform:translateY(-2px);}
      #uniPagination button:hover{background:#b3123c!important;}
    `;
    document.head.appendChild(style);
  }

  window.changePublicUniPage = function(p) {
    page = Number(p);
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
  };
    window.renderUniversities = render;

  document.addEventListener("DOMContentLoaded", function () {
    injectStyles();
    loadLocal();
    render();

    const search = document.getElementById("universitySearch");
    const btn = document.getElementById("searchBtn");

    const pagination = document.getElementById("uniPagination");

if (pagination) {
  pagination.addEventListener("click", function(e) {
    const btn = e.target.closest("button[data-page]");
    if (!btn) return;

    e.preventDefault();
    page = Number(btn.dataset.page);

    render();
    window.scrollTo(0, 0);
  });
}
    if (search) search.addEventListener("input", () => { page = 1; render(); });

    setTimeout(function(){
      refreshFromBackend().then(render);
    }, 1500);
  });

  window.addEventListener("languageChanged", render);
  window.addEventListener("storage", () => { loadLocal(); render(); refreshFromBackend().then(render); });
})();
