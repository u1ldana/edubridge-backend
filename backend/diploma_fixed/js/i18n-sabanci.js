(function(){
    const D = {
   
      // ── NAV ────────────────────────────────────────────────────────
      "nav-home":         {kz:"Басты бет",      ru:"Главная",       en:"Home",          tr:"Ana sayfa"},
      "nav-specialties":  {kz:"Мамандықтар",    ru:"Специальности", en:"Specialties",   tr:"Bölümler"},
      "nav-universities": {kz:"Университеттер", ru:"Университеты",  en:"Universities",  tr:"Üniversiteler"},
      "nav-preparation":  {kz:"Дайындық",       ru:"Подготовка",    en:"Preparation",   tr:"Hazırlık"},
      "nav-feed":         {kz:"Лента",          ru:"Лента",         en:"Feed",          tr:"Akış"},
      "nav-language":     {kz:"Тіл",            ru:"Язык",          en:"Language",      tr:"Dil"},
      "nav-profile":      {kz:"Профиль",        ru:"Профиль",       en:"Profile",       tr:"Profil"},
   
      // ── FOOTER ─────────────────────────────────────────────────────
      "footer-contact": {kz:"Байланыс", ru:"Контакты", en:"Contact", tr:"İletişim"},
      "© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.": {
        kz:"© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.",
        ru:"© 2026 EduBridge Türkiye. Все права защищены.",
        en:"© 2026 EduBridge Türkiye. All rights reserved.",
        tr:"© 2026 EduBridge Türkiye. Tüm hakları saklıdır."
      },
   
      // ── HERO BUTTONS ───────────────────────────────────────────────
      "back-btn": {
        kz:"← Университеттерге қайту",
        ru:"← Назад к университетам",
        en:"← Back to universities",
        tr:"← Üniversitelere dön"
      },
      "apply-btn": {
        kz:"Профиль / Apply",
        ru:"Профиль / Подать заявку",
        en:"Profile / Apply",
        tr:"Profil / Başvur"
      },
      "back-btn-alt": {
        kz:"Артқа қайту",
        ru:"Назад",
        en:"Go back",
        tr:"Geri dön"
      },
      "save-university-btn": {
        kz:"Таңдаулыға сақтау",
        ru:"Сохранить в избранное",
        en:"Save to favourites",
        tr:"Favorilere ekle"
      },
      "all-universities-btn": {
        kz:"Барлық университеттер",
        ru:"Все университеты",
        en:"All universities",
        tr:"Tüm üniversiteler"
      },
   
      // ── HERO SUBTITLE & DESCRIPTION ────────────────────────────────
      "Istanbul, Türkiye · Private University · English medium programs": {
        kz:"Istanbul, Türkiye · Жеке университет · Ағылшын тілінде",
        ru:"Стамбул, Турция · Частный университет · Обучение на английском",
        en:"Istanbul, Türkiye · Private University · English medium programs",
        tr:"İstanbul, Türkiye · Özel üniversite · İngilizce programlar"
      },
      "Sabancı University — Стамбұлдағы заманауи және беделді университеттердің бірі. Университет interdisciplinary білім беру моделін ұсынады және Engineering, Arts and Social Sciences, Business бағыттарымен танымал.": {
        kz:"Sabancı University — Стамбұлдағы заманауи және беделді университеттердің бірі. Университет interdisciplinary білім беру моделін ұсынады және Engineering, Arts and Social Sciences, Business бағыттарымен танымал.",
        ru:"Sabancı University — один из современных и престижных университетов Стамбула. Университет предлагает междисциплинарную модель образования и известен направлениями Engineering, Arts and Social Sciences и Business.",
        en:"Sabancı University is one of the modern and prestigious universities in Istanbul. The university offers an interdisciplinary education model and is known for Engineering, Arts and Social Sciences, and Business programs.",
        tr:"Sabancı University, İstanbul'un modern ve prestijli üniversitelerinden biridir. Üniversite disiplinlerarası eğitim modeli sunmakta olup Mühendislik, Sanat ve Sosyal Bilimler ile İşletme alanlarıyla tanınmaktadır."
      },
   
      // ── INFO CARDS ─────────────────────────────────────────────────
      "info-location-title": {kz:"Орналасуы",   ru:"Расположение",  en:"Location",   tr:"Konum"},
      "info-type-title":     {kz:"Түрі",        ru:"Тип",           en:"Type",       tr:"Tür"},
      "info-language-title": {kz:"Оқыту тілі",  ru:"Язык обучения", en:"Language",   tr:"Öğretim dili"},
      "info-levels-title":   {kz:"Деңгейлер",   ru:"Уровни",        en:"Levels",     tr:"Seviyeler"},
      "Деңгейлер":           {kz:"Деңгейлер",   ru:"Уровни",        en:"Levels",     tr:"Seviyeler"},
      "Bachelor, Master, PhD": {
        kz:"Бакалавр, Магистр, PhD",
        ru:"Бакалавриат, Магистратура, Докторантура",
        en:"Bachelor, Master, PhD",
        tr:"Lisans, Yüksek Lisans, Doktora"
      },
      "Private Foundation University": {
        kz:"Жеке қор университеті",
        ru:"Частный фондовый университет",
        en:"Private Foundation University",
        tr:"Özel Vakıf Üniversitesi"
      },
      "English": {kz:"Ағылшын", ru:"Английский", en:"English", tr:"İngilizce"},
      "Istanbul, Tuzla": {
        kz:"Стамбул, Tuzla",
        ru:"Стамбул, Тузла",
        en:"Istanbul, Tuzla",
        tr:"İstanbul, Tuzla"
      },
   
      // ── SECTION HEADINGS (data-i18n) ───────────────────────────────
      "why-title": {
        kz:"Неге осы университет?",
        ru:"Почему этот университет?",
        en:"Why this university?",
        tr:"Neden bu üniversite?"
      },
      "Неге осы университет?": {
        kz:"Неге осы университет?",
        ru:"Почему этот университет?",
        en:"Why this university?",
        tr:"Neden bu üniversite?"
      },
      "req-title": {
        kz:"Қабылдау талаптары",
        ru:"Требования к поступлению",
        en:"Admission requirements",
        tr:"Kabul şartları"
      },
      "Admission requirements": {
        kz:"Қабылдау талаптары",
        ru:"Требования к поступлению",
        en:"Admission requirements",
        tr:"Kabul şartları"
      },
      "majors-title": {
        kz:"Мамандықтар",
        ru:"Специальности",
        en:"Programs",
        tr:"Bölümler"
      },
      "Мамандықтар": {
        kz:"Мамандықтар",
        ru:"Специальности",
        en:"Programs",
        tr:"Bölümler"
      },
      "scholarship-title": {
        kz:"Стипендиялар",
        ru:"Стипендии",
        en:"Scholarships",
        tr:"Burslar"
      },
      "Scholarships": {
        kz:"Стипендиялар",
        ru:"Стипендии",
        en:"Scholarships",
        tr:"Burslar"
      },
      "accommodation-title": {
        kz:"Тұрғын үй",
        ru:"Общежитие",
        en:"Accommodation",
        tr:"Konaklama"
      },
      "Accommodation": {
        kz:"Тұрғын үй",
        ru:"Общежитие",
        en:"Accommodation",
        tr:"Konaklama"
      },
      "quick-info-title": {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",  tr:"Hızlı bilgi"},
      "Қысқаша ақпарат":  {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",  tr:"Hızlı bilgi"},
      "Әрекеттер":        {kz:"Әрекеттер",        ru:"Действия",          en:"Actions",     tr:"İşlemler"},
   
      // ── WHY THIS UNIVERSITY — LIST ─────────────────────────────────
      "Interdisciplinary academic model": {
        kz:"Пәнаралық академиялық модель",
        ru:"Междисциплинарная академическая модель",
        en:"Interdisciplinary academic model",
        tr:"Disiplinlerarası akademik model"
      },
      "Strong engineering and business programs": {
        kz:"Күшті инженерия және бизнес бағдарламалары",
        ru:"Сильные инженерные и бизнес-программы",
        en:"Strong engineering and business programs",
        tr:"Güçlü mühendislik ve işletme programları"
      },
      "International student admissions support": {
        kz:"Халықаралық студенттерге қабылдау қолдауы",
        ru:"Поддержка при поступлении для иностранных студентов",
        en:"International student admissions support",
        tr:"Uluslararası öğrenci başvuru desteği"
      },
      "Scholarship opportunities for international applicants": {
        kz:"Халықаралық үміткерлерге стипендия мүмкіндіктері",
        ru:"Возможности стипендий для иностранных абитуриентов",
        en:"Scholarship opportunities for international applicants",
        tr:"Uluslararası başvurucular için burs imkânları"
      },
      "Modern campus and active student life": {
        kz:"Заманауи кампус және белсенді студенттік өмір",
        ru:"Современный кампус и активная студенческая жизнь",
        en:"Modern campus and active student life",
        tr:"Modern kampüs ve aktif öğrenci yaşamı"
      },
   
      // ── ADMISSION REQUIREMENTS — LIST ──────────────────────────────
      "Passport copy": {
        kz:"Паспорт көшірмесі",
        ru:"Копия паспорта",
        en:"Passport copy",
        tr:"Pasaport kopyası"
      },
      "High school diploma / certificate": {
        kz:"Орта мектеп дипломы / аттестат",
        ru:"Диплом / аттестат средней школы",
        en:"High school diploma / certificate",
        tr:"Lise diploması / mezuniyet belgesi"
      },
      "Transcript": {
        kz:"Транскрипт",
        ru:"Транскрипт",
        en:"Transcript",
        tr:"Transkript"
      },
      "Accepted exam or diploma results if required": {
        kz:"Қажет болса, танылған емтихан немесе диплом нәтижелері",
        ru:"Результаты признанного экзамена или диплома (при необходимости)",
        en:"Accepted exam or diploma results if required",
        tr:"Gerekirse kabul edilen sınav veya diploma sonuçları"
      },
      "English proficiency document or university language exam": {
        kz:"Ағылшын тілін меңгергені туралы құжат немесе университет тіл емтиханы",
        ru:"Документ о владении английским или вузовский языковой экзамен",
        en:"English proficiency document or university language exam",
        tr:"İngilizce yeterlilik belgesi veya üniversite dil sınavı"
      },
      "Online application form": {
        kz:"Онлайн өтінім форма",
        ru:"Онлайн форма заявки",
        en:"Online application form",
        tr:"Çevrimiçi başvuru formu"
      },
   
      // ── FACULTY SUBHEADINGS ────────────────────────────────────────
      "Faculty of Engineering and Natural Sciences": {
        kz:"Инженерия және жаратылыстану ғылымдары факультеті",
        ru:"Факультет инженерии и естественных наук",
        en:"Faculty of Engineering and Natural Sciences",
        tr:"Mühendislik ve Doğa Bilimleri Fakültesi"
      },
      "Faculty of Arts and Social Sciences": {
        kz:"Өнер және әлеуметтік ғылымдар факультеті",
        ru:"Факультет искусств и социальных наук",
        en:"Faculty of Arts and Social Sciences",
        tr:"Sanat ve Sosyal Bilimler Fakültesi"
      },
      "Sabancı Business School": {
        kz:"Sabancı Бизнес мектебі",
        ru:"Бизнес-школа Sabancı",
        en:"Sabancı Business School",
        tr:"Sabancı İşletme Okulu"
      },
   
      // ── ENGINEERING PROGRAMS ───────────────────────────────────────
      "Computer Science and Engineering": {
        kz:"Компьютерлік ғылым және инженерия",
        ru:"Компьютерные науки и инженерия",
        en:"Computer Science and Engineering",
        tr:"Bilgisayar Bilimi ve Mühendisliği"
      },
      "Data Science and Analytics": {
        kz:"Деректер ғылымы және аналитика",
        ru:"Наука о данных и аналитика",
        en:"Data Science and Analytics",
        tr:"Veri Bilimi ve Analitiği"
      },
      "Electronics Engineering": {
        kz:"Электроника инженериясы",
        ru:"Инженерия электроники",
        en:"Electronics Engineering",
        tr:"Elektronik Mühendisliği"
      },
      "Industrial Engineering": {
        kz:"Өнеркәсіптік инженерия",
        ru:"Промышленная инженерия",
        en:"Industrial Engineering",
        tr:"Endüstri Mühendisliği"
      },
      "Materials Science and Nano Engineering": {
        kz:"Материалтану және нано-инженерия",
        ru:"Материаловедение и нано-инженерия",
        en:"Materials Science and Nano Engineering",
        tr:"Malzeme Bilimi ve Nano Mühendisliği"
      },
      "Mechatronics Engineering": {
        kz:"Мехатроника инженериясы",
        ru:"Мехатронная инженерия",
        en:"Mechatronics Engineering",
        tr:"Mekatronik Mühendisliği"
      },
      "Molecular Biology, Genetics and Bioengineering": {
        kz:"Молекулалық биология, генетика және биоинженерия",
        ru:"Молекулярная биология, генетика и биоинженерия",
        en:"Molecular Biology, Genetics and Bioengineering",
        tr:"Moleküler Biyoloji, Genetik ve Biyomühendislik"
      },
   
      // ── ARTS & SOCIAL SCIENCES PROGRAMS ───────────────────────────
      "Economics": {
        kz:"Экономика",
        ru:"Экономика",
        en:"Economics",
        tr:"Ekonomi"
      },
      "Psychology": {
        kz:"Психология",
        ru:"Психология",
        en:"Psychology",
        tr:"Psikoloji"
      },
      "Political Science and International Relations": {
        kz:"Саяси ғылымдар және халықаралық қатынастар",
        ru:"Политология и международные отношения",
        en:"Political Science and International Relations",
        tr:"Siyaset Bilimi ve Uluslararası İlişkiler"
      },
      "Visual Arts and Visual Communication Design": {
        kz:"Бейнелеу өнері және визуалды коммуникация дизайны",
        ru:"Изобразительное искусство и дизайн визуальных коммуникаций",
        en:"Visual Arts and Visual Communication Design",
        tr:"Görsel Sanatlar ve Görsel İletişim Tasarımı"
      },
   
      // ── BUSINESS SCHOOL ────────────────────────────────────────────
      "Management": {
        kz:"Менеджмент",
        ru:"Менеджмент",
        en:"Management",
        tr:"Yönetim"
      },
   
      // ── SCHOLARSHIPS PARAGRAPH ─────────────────────────────────────
      "International applicants may be automatically considered for admission scholarships. Scholarship competition is limited and highly competitive.": {
        kz:"Халықаралық үміткерлер қабылдау кезінде автоматты түрде стипендияға ұсынылуы мүмкін. Стипендия конкурсы шектеулі және өте бәсекелі.",
        ru:"Иностранные абитуриенты могут автоматически рассматриваться для получения стипендий при поступлении. Конкурс на стипендию ограничен и крайне высок.",
        en:"International applicants may be automatically considered for admission scholarships. Scholarship competition is limited and highly competitive.",
        tr:"Uluslararası başvurucular kabul sürecinde otomatik olarak burs değerlendirmesine alınabilir. Burs rekabeti sınırlı ve son derece yüksektir."
      },
   
      // ── ACCOMMODATION PARAGRAPH ────────────────────────────────────
      "On-campus accommodation options are available. Students may also choose private housing in Istanbul.": {
        kz:"Кампуста тұрғын үй мүмкіндіктері бар. Студенттер сонымен қатар Стамбұлдағы жеке тұрғынды таңдай алады.",
        ru:"Доступны варианты проживания на кампусе. Студенты также могут выбрать частное жильё в Стамбуле.",
        en:"On-campus accommodation options are available. Students may also choose private housing in Istanbul.",
        tr:"Kampüste konaklama seçenekleri mevcuttur. Öğrenciler ayrıca İstanbul'da özel konut tercih edebilir."
      },
   
      // ── SIDEBAR QUICK INFO LABELS ──────────────────────────────────
      "Қала:":         {kz:"Қала:",         ru:"Город:",         en:"City:",          tr:"Şehir:"},
      "Түрі:":         {kz:"Түрі:",         ru:"Тип:",           en:"Type:",          tr:"Tür:"},
      "Тілі:":         {kz:"Тілі:",         ru:"Язык:",          en:"Language:",      tr:"Dil:"},
      "Оқу форматы:":  {kz:"Оқу форматы:",  ru:"Формат обучения:",en:"Study format:", tr:"Eğitim formatı:"},
   
      // Sidebar values
      "Istanbul": {kz:"Стамбул",    ru:"Стамбул",     en:"Istanbul",  tr:"İstanbul"},
      "Private":  {kz:"Жеке",       ru:"Частный",     en:"Private",   tr:"Özel"},
      "Full-time":{kz:"Күндізгі",   ru:"Очный",       en:"Full-time", tr:"Tam zamanlı"},
   
      // ── AI CHAT BUBBLE ─────────────────────────────────────────────
      "EduBridge AI": {kz:"EduBridge AI", ru:"EduBridge AI", en:"EduBridge AI", tr:"EduBridge AI"},
      "Онлайн · Жауап береді": {
        kz:"Онлайн · Жауап береді",
        ru:"Онлайн · Отвечает",
        en:"Online · Responding",
        tr:"Çevrimiçi · Yanıtlıyor"
      },
      "Сәлем! Мен EduBridge AI кеңесшісімін. Түркия университеттері туралы кез-келген сұрақты қой 👋": {
        kz:"Сәлем! Мен EduBridge AI кеңесшісімін. Түркия университеттері туралы кез-келген сұрақты қой 👋",
        ru:"Привет! Я AI-консультант EduBridge. Задай любой вопрос об университетах Турции 👋",
        en:"Hello! I'm EduBridge AI advisor. Ask me anything about Turkish universities 👋",
        tr:"Merhaba! Ben EduBridge AI danışmanıyım. Türk üniversiteleri hakkında her şeyi sorabilirsiniz 👋"
      },
      "Сұрағыңды жаз...": {
        kz:"Сұрағыңды жаз...",
        ru:"Напишите вопрос...",
        en:"Type your question...",
        tr:"Sorunuzu yazın..."
      },
      "AI Кеңесші": {
        kz:"AI Кеңесші",
        ru:"AI Советник",
        en:"AI Advisor",
        tr:"AI Danışman"
      },
    };
   
    function trText(key, lang){
      return D[key] && D[key][lang] ? D[key][lang] : key;
    }
   
    function norm(s){
      return (s || "").trim().replace(/\s+/g, " ");
    }
   
    function applyText(lang){
      // 1. data-i18n attributes
      document.querySelectorAll("[data-i18n]").forEach(function(el){
        var key = el.getAttribute("data-i18n");
        if(D[key]) el.textContent = trText(key, lang);
      });
   
      // 2. placeholder attributes
      document.querySelectorAll("[placeholder]").forEach(function(el){
        var key = el.getAttribute("placeholder");
        if(D[key]) el.setAttribute("placeholder", trText(key, lang));
      });
   
      // 3. title attributes
      document.querySelectorAll("[title]").forEach(function(el){
        var key = el.getAttribute("title");
        if(D[key]) el.setAttribute("title", trText(key, lang));
      });
   
      // 4. Inline text nodes in leaf elements
      document.querySelectorAll("h1,h2,h3,h4,p,span,a,button,li,strong,small,label,div").forEach(function(el){
        if(el.children.length > 0) return;
        var key = norm(el.textContent);
        if(D[key]) el.textContent = trText(key, lang);
      });
    }
   
    EduI18n.registerPage("sabanci", D, function(lang){
      applyText(lang);
    });
  })()