/**
 * V57: Universities merge + pagination (3 бет)
 * Іске қосылу: window.onload — барлық script.js дайын болғаннан кейін
 */
// Статикалық карточкалар DOMContentLoaded-та бірден шығады
document.addEventListener('DOMContentLoaded', function() {
  var grid = document.getElementById('universitiesGrid');
  if (!grid || !window.STATIC_UNIVERSITIES) return;
  var statics = window.STATIC_UNIVERSITIES;
  // Skeleton-ды алып тастап статикалық карточкаларды қояды
  function uniEscEarly(s){ return String(s||'').replace(/[&<>"']/g,function(m){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];}); }
  grid.innerHTML = statics.slice(0,9).map(function(u){
    return '<article class="university-card">' +
      '<div class="university-card-image">' +
        (u.image ? '<img src="'+uniEscEarly(u.image)+'" alt="'+uniEscEarly(u.name)+'">' : '<div style="height:100%;display:flex;align-items:center;justify-content:center;font-size:50px">🏛</div>') +
      '</div>' +
      '<div class="university-card-content">' +
        '<div class="university-tags"><span>'+uniEscEarly(u.type)+'</span><span>'+uniEscEarly(u.city)+'</span></div>' +
        '<h3>'+uniEscEarly(u.name)+'</h3>' +
        '<p>'+uniEscEarly(u.description)+'</p>' +
        '<div class="university-meta">' +
          '<div><strong>Оқыту тілі:</strong> '+uniEscEarly(u.language)+'</div>' +
          '<div><strong>Бағдарламалар:</strong> '+uniEscEarly(u.programs)+'</div>' +
          (u.tuition?'<div><strong>Оқу ақысы:</strong> '+uniEscEarly(u.tuition)+'</div>':'') +
          (u.rating?'<div><strong>Рейтинг:</strong> '+uniEscEarly(u.rating)+'</div>':'') +
        '</div>' +
        '<a href="'+u.href+'" class="btn btn-secondary full-width">Толық ақпарат</a>' +
      '</div></article>';
  }).join('');
});

window.addEventListener('load', function() {

  /* ══════════════════════════════════════════
     1. UNIVERSITIES.HTML
  ══════════════════════════════════════════ */
  var grid = document.getElementById('universitiesGrid');
  if (grid) {
    var API = window.BACKEND_URL || 'http://localhost:3000';
    var PER_UNI = 9;
    var uniPage = 1;
    var uniQuery = '';
    var allUnis = [];

    function uniEsc(s) {
      return String(s || '').replace(/[&<>"']/g, function(m) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];
      });
    }

    function uniCard(u) {
      return '<article class="university-card">' +
        '<div class="university-card-image">' +
          (u.image
            ? '<img src="' + uniEsc(u.image) + '" alt="' + uniEsc(u.name) + '" onerror="this.style.display=\'none\'">'
            : '<div style="height:100%;display:flex;align-items:center;justify-content:center;font-size:50px;background:rgba(255,255,255,.06)">🏛</div>'
          ) +
        '</div>' +
        '<div class="university-card-content">' +
          '<div class="university-tags"><span>' + uniEsc(u.type || 'University') + '</span><span>' + uniEsc(u.city) + '</span></div>' +
          '<h3>' + uniEsc(u.name) + '</h3>' +
          '<p>' + uniEsc(u.description) + '</p>' +
          '<div class="university-meta">' +
            '<div><strong>Оқыту тілі:</strong> ' + uniEsc(u.language || '—') + '</div>' +
            '<div><strong>Бағдарламалар:</strong> ' + uniEsc(u.programs || '—') + '</div>' +
            (u.tuition ? '<div><strong>Оқу ақысы:</strong> ' + uniEsc(u.tuition) + '</div>' : '') +
            (u.rating ? '<div><strong>Рейтинг:</strong> ' + uniEsc(u.rating) + '</div>' : '') +
          '</div>' +
          '<a href="' + u.href + '" class="btn btn-secondary full-width">Толық ақпарат</a>' +
        '</div>' +
      '</article>';
    }

    function uniRender() {
      var filtered = allUnis.filter(function(u) {
        if (!uniQuery) return true;
        return [u.name, u.city, u.type, u.language, u.programs, u.description].join(' ').toLowerCase().indexOf(uniQuery) !== -1;
      });

      var empty = document.getElementById('emptyState');
      var pg = document.getElementById('uniPagination');
      if (!pg) {
        pg = document.createElement('div');
        pg.id = 'uniPagination';
        pg.style.cssText = 'display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:32px 0 16px';
        grid.parentNode.insertBefore(pg, grid.nextSibling);
      }

      if (!filtered.length) {
        grid.innerHTML = '';
        if (empty) empty.style.display = 'block';
        pg.innerHTML = '';
        return;
      }
      if (empty) empty.style.display = 'none';

      var total = Math.max(1, Math.ceil(filtered.length / PER_UNI));
      if (uniPage > total) uniPage = total;

      var slice = filtered.slice((uniPage - 1) * PER_UNI, uniPage * PER_UNI);
      grid.innerHTML = slice.map(uniCard).join('');

      if (total > 1) {
        pg.innerHTML = '';
        for (var i = 1; i <= total; i++) {
          (function(p) {
            var btn = document.createElement('button');
            btn.textContent = p;
            btn.style.cssText = 'padding:10px 16px;border-radius:12px;border:1px solid rgba(255,255,255,.18);background:' + (p === uniPage ? '#b3123c' : 'rgba(255,255,255,.08)') + ';color:white;font-weight:800;cursor:pointer;font-family:inherit;font-size:14px';
            btn.onclick = function() { uniPage = p; uniRender(); window.scrollTo({top:0,behavior:'smooth'}); };
            pg.appendChild(btn);
          })(i);
        }
      } else {
        pg.innerHTML = '';
      }
    }

    function uniLoad() {
      var statics = window.STATIC_UNIVERSITIES || [];
      var staticSlugs = {};
      statics.forEach(function(u) { staticSlugs[u.slug] = true; });

      var cache = [];
      try { cache = JSON.parse(localStorage.getItem('publicUniversities') || '[]') || []; } catch(e) {}

      // Cache-тен dynamic универтер қос
      var dynamic = cache.filter(function(u) { return u && u.name && !staticSlugs[u.slug || '']; });

      allUnis = statics.concat(dynamic.map(function(u) {
        return {
          slug: u.slug || String(u.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          name: u.name || '',
          city: u.city || '',
          type: u.type || '',
          language: u.language || '',
          programs: u.programs || '',
          description: u.description || '',
          image: u.image_url || u.image || '',
          href: 'uni/dynamic-university.html?slug=' + encodeURIComponent(u.slug || String(u.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'))
        };
      }));

      uniRender();

      // Backend-тен жаңарт
      fetch(API + '/api/universities')
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (d.ok && d.universities) {
            localStorage.setItem('publicUniversities', JSON.stringify(d.universities));
            localStorage.setItem('adminUniversities', JSON.stringify(d.universities));
            var dynamicNew = d.universities.filter(function(u) { return u && u.name && !staticSlugs[u.slug || '']; });
            allUnis = statics.concat(dynamicNew.map(function(u) {
              return {
                slug: u.slug || String(u.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                name: u.name || '',
                city: u.city || '',
                type: u.type || '',
                language: u.language || '',
                programs: u.programs || '',
                description: u.description || '',
                image: u.image_url || u.image || '',
                href: 'uni/dynamic-university.html?slug=' + encodeURIComponent(u.slug || String(u.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'))
              };
            }));
            uniRender();
          }
        })
        .catch(function() {});

      // v55 бөлек секцияны жою
      var old = document.getElementById('v55AdminUniSection');
      if (old) old.remove();

      // Іздеу
      var inp = document.getElementById('universitySearch');
      var btn = document.getElementById('searchBtn');
      if (inp) {
        inp.oninput = function() { uniQuery = inp.value.toLowerCase().trim(); uniPage = 1; uniRender(); };
        inp.onkeyup = function(e) { if (e.key === 'Enter') { uniQuery = inp.value.toLowerCase().trim(); uniPage = 1; uniRender(); } };
      }
      if (btn) {
        btn.onclick = function() { uniQuery = (inp ? inp.value : '').toLowerCase().trim(); uniPage = 1; uniRender(); };
      }
    }

    uniLoad();
  }


  /* ══════════════════════════════════════════
     2. FEED.HTML
  ══════════════════════════════════════════ */
  var postsGrid = document.getElementById('postsGrid');
  if (postsGrid) {
    var PER_FEED = 9;
    var feedPage = 1;
    var feedFilter = 'all';

    function feedPaginationEl() {
      var pg = document.getElementById('feedPagination');
      if (!pg) {
        pg = document.createElement('div');
        pg.id = 'feedPagination';
        pg.style.cssText = 'display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:24px 0 8px;grid-column:1/-1';
        postsGrid.appendChild(pg);
      }
      return pg;
    }

    function feedApply() {
      var all = Array.from(postsGrid.querySelectorAll('.post-card'));
      if (!all.length) return;

      var visible = all.filter(function(c) {
        return feedFilter === 'all' || c.dataset.category === feedFilter;
      });

      all.forEach(function(c) { c.style.display = 'none'; });

      var total = Math.max(1, Math.ceil(visible.length / PER_FEED));
      if (feedPage > total) feedPage = total;
      visible.slice((feedPage - 1) * PER_FEED, feedPage * PER_FEED).forEach(function(c) { c.style.display = ''; });

      var pg = feedPaginationEl();
      if (total > 1) {
        pg.innerHTML = '';
        for (var i = 1; i <= total; i++) {
          (function(p) {
            var btn = document.createElement('button');
            btn.textContent = p;
            btn.style.cssText = 'padding:10px 16px;border-radius:12px;border:1px solid rgba(255,255,255,.18);background:' + (p === feedPage ? '#b3123c' : 'rgba(255,255,255,.08)') + ';color:white;font-weight:800;cursor:pointer;font-family:inherit;font-size:14px';
            btn.onclick = function() { feedPage = p; feedApply(); };
            pg.appendChild(btn);
          })(i);
        }
      } else {
        pg.innerHTML = '';
      }
    }

    // filterPosts-ты override жасаймыз
    var origFilterPosts = window.filterPosts;
    window.filterPosts = function(category, tab) {
      feedFilter = category;
      feedPage = 1;
      if (origFilterPosts) origFilterPosts(category, tab);
      setTimeout(feedApply, 50);
    };

    // renderFeedPosts-ты override
    var origRenderFeed = window.renderFeedPosts;
    if (origRenderFeed) {
      window.renderFeedPosts = function() {
        origRenderFeed();
        setTimeout(feedApply, 80);
      };
    }

    setTimeout(feedApply, 300);
  }


  /* ══════════════════════════════════════════
     3. SPECIALTIES.HTML
  ══════════════════════════════════════════ */
  var specGrid = document.getElementById('specialtiesGrid');
  if (specGrid) {
    var PER_SPEC = 9;
    var specPage = 1;

    function specPaginationEl() {
      var pg = document.getElementById('specPagination');
      if (!pg) {
        pg = document.createElement('div');
        pg.id = 'specPagination';
        pg.style.cssText = 'display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:32px 0 16px';
        specGrid.parentNode.insertBefore(pg, specGrid.nextSibling);
      }
      return pg;
    }

    function specApply() {
      // Filter жасырғандарды алып тастаймыз
      var all = Array.from(specGrid.querySelectorAll('.specialty-card'));
      all.forEach(function(c) {
        if (c.dataset.v57hidden) { c.style.display = 'flex'; delete c.dataset.v57hidden; }
      });

      var visible = all.filter(function(c) { return c.style.display !== 'none'; });

      var total = Math.max(1, Math.ceil(visible.length / PER_SPEC));
      if (specPage > total) specPage = total;

      visible.forEach(function(c, i) {
        if (i < (specPage - 1) * PER_SPEC || i >= specPage * PER_SPEC) {
          c.style.display = 'none';
          c.dataset.v57hidden = '1';
        }
      });

      var pg = specPaginationEl();
      if (total > 1) {
        pg.innerHTML = '';
        for (var i = 1; i <= total; i++) {
          (function(p) {
            var btn = document.createElement('button');
            btn.textContent = p;
            btn.style.cssText = 'padding:10px 16px;border-radius:12px;border:1px solid rgba(255,255,255,.18);background:' + (p === specPage ? '#b3123c' : 'rgba(255,255,255,.08)') + ';color:white;font-weight:800;cursor:pointer;font-family:inherit;font-size:14px';
            btn.onclick = function() { specPage = p; specApply(); window.scrollTo({top:0,behavior:'smooth'}); };
            pg.appendChild(btn);
          })(i);
        }
      } else {
        pg.innerHTML = '';
      }
    }

    // filterSpecialties override
    var origFilterSpec = window.filterSpecialties;
    if (origFilterSpec) {
      window.filterSpecialties = function() {
        // v57 hidden-ları ашамыз
        specGrid.querySelectorAll('.specialty-card[data-v57hidden]').forEach(function(c) {
          c.style.display = 'flex'; delete c.dataset.v57hidden;
        });
        origFilterSpec.apply(this, arguments);
        specPage = 1;
        setTimeout(specApply, 50);
      };
    }

    // setupSpecialtyFilters ертерек іске қосылған болуы мүмкін, override
    var catSel = document.getElementById('categoryFilter');
    var langSel = document.getElementById('languageFilter');
    var specInp = document.getElementById('specialtySearch');
    var specBtn = document.getElementById('specialtySearchBtn');
    if (catSel) { var origCat = catSel.onchange; catSel.onchange = function() { specPage = 1; if(origCat) origCat(); setTimeout(specApply,50); }; }
    if (langSel) { var origLang = langSel.onchange; langSel.onchange = function() { specPage = 1; if(origLang) origLang(); setTimeout(specApply,50); }; }

    setTimeout(specApply, 300);
  }

});
