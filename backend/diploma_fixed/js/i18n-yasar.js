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
      "Izmir, Türkiye · International University · English Education": {
        kz:"Izmir, Türkiye · Халықаралық университет · Ағылшын тілінде",
        ru:"Измир, Турция · Международный университет · Обучение на английском",
        en:"Izmir, Türkiye · International University · English Education",
        tr:"İzmir, Türkiye · Uluslararası üniversite · İngilizce eğitim"
      },
      "Yaşar University — Измирдегі international recognition алған private university. Университет English-medium education, Erasmus programs және strong industry connections арқылы танымал.": {
        kz:"Yaşar University — Измирдегі international recognition алған private university. Университет English-medium education, Erasmus programs және strong industry connections арқылы танымал.",
        ru:"Yaşar University — частный университет в Измире, получивший международное признание. Университет известен обучением на английском языке, программами Erasmus и сильными связями с индустрией.",
        en:"Yaşar University is an internationally recognised private university in Izmir. The university is known for English-medium education, Erasmus programs and strong industry connections.",
        tr:"Yaşar University, uluslararası tanınırlık kazanmış İzmir'deki bir özel üniversitedir. Üniversite; İngilizce eğitimi, Erasmus programları ve güçlü sektör bağlantılarıyla tanınmaktadır."
      },
   
      // ── INFO CARDS ─────────────────────────────────────────────────
      "info-location-title": {kz:"Орналасуы",   ru:"Расположение",  en:"Location",  tr:"Konum"},
      "info-type-title":     {kz:"Түрі",        ru:"Тип",           en:"Type",      tr:"Tür"},
      "info-language-title": {kz:"Оқыту тілі",  ru:"Язык обучения", en:"Language",  tr:"Öğretim dili"},
      "Exchange": {kz:"Алмасу", ru:"Обмен", en:"Exchange", tr:"Değişim"},
      "602 International Partners": {
        kz:"602 халықаралық серіктес",
        ru:"602 международных партнёра",
        en:"602 International Partners",
        tr:"602 Uluslararası Ortak"
      },
      "Private University": {kz:"Жеке университет", ru:"Частный университет", en:"Private University", tr:"Özel Üniversite"},
      "English": {kz:"Ағылшын", ru:"Английский", en:"English", tr:"İngilizce"},
      "Izmir, Bornova": {kz:"İzmir, Bornova", ru:"Измир, Борнова", en:"Izmir, Bornova", tr:"İzmir, Bornova"},
   
      // ── MAIN HEADINGS ──────────────────────────────────────────────
      "Yaşar University туралы": {
        kz:"Yaşar University туралы",
        ru:"О Yaşar University",
        en:"About Yaşar University",
        tr:"Yaşar University Hakkında"
      },
      "Кімдерге арналған?": {
        kz:"Кімдерге арналған?",
        ru:"Для кого подходит?",
        en:"Who is it for?",
        tr:"Kimler için uygundur?"
      },
      "Неге Yaşar University?": {
        kz:"Неге Yaşar University?",
        ru:"Почему Yaşar University?",
        en:"Why Yaşar University?",
        tr:"Neden Yaşar University?"
      },
      "Founder: Selçuk Yaşar": {
        kz:"Founder: Selçuk Yaşar",
        ru:"Основатель: Selçuk Yaşar",
        en:"Founder: Selçuk Yaşar",
        tr:"Kurucu: Selçuk Yaşar"
      },
      "Yaşar Holding Companies": {
        kz:"Yaşar Holding компаниялары",
        ru:"Компании Yaşar Holding",
        en:"Yaşar Holding Companies",
        tr:"Yaşar Holding Şirketleri"
      },
      "Аккредитациялар": {
        kz:"Аккредитациялар",
        ru:"Аккредитации",
        en:"Accreditations",
        tr:"Akreditasyonlar"
      },
      "Exchange Programs": {
        kz:"Алмасу бағдарламалары",
        ru:"Программы обмена",
        en:"Exchange Programs",
        tr:"Değişim Programları"
      },
      "Факультеттер": {
        kz:"Факультеттер",
        ru:"Факультеты",
        en:"Faculties",
        tr:"Fakülteler"
      },
      "Неге Izmir?": {
        kz:"Неге Izmir?",
        ru:"Почему Измир?",
        en:"Why Izmir?",
        tr:"Neden İzmir?"
      },
      "Campus Life": {
        kz:"Кампус өмірі",
        ru:"Жизнь в кампусе",
        en:"Campus Life",
        tr:"Kampüs Yaşamı"
      },
   
      // ── SUBHEADINGS ────────────────────────────────────────────────
      "Business": {
        kz:"Бизнес",
        ru:"Бизнес",
        en:"Business",
        tr:"İşletme"
      },
      "Engineering": {
        kz:"Инженерия",
        ru:"Инженерия",
        en:"Engineering",
        tr:"Mühendislik"
      },
      "Communication": {
        kz:"Коммуникация",
        ru:"Коммуникации",
        en:"Communication",
        tr:"İletişim"
      },
      "Architecture & Design": {
        kz:"Архитектура және Дизайн",
        ru:"Архитектура и Дизайн",
        en:"Architecture & Design",
        tr:"Mimarlık ve Tasarım"
      },
      "Social Sciences": {
        kz:"Әлеуметтік ғылымдар",
        ru:"Социальные науки",
        en:"Social Sciences",
        tr:"Sosyal Bilimler"
      },
   
      // ── ABOUT PARAGRAPHS ───────────────────────────────────────────
      "Yaşar University — İzmir қаласындағы modern private university.": {
        kz:"Yaşar University — İzmir қаласындағы modern private university.",
        ru:"Yaşar University — современный частный университет в городе Измир.",
        en:"Yaşar University is a modern private university in the city of Izmir.",
        tr:"Yaşar University, İzmir'de modern bir özel üniversitedir."
      },
      "Университет Yaşar Holding қолдауымен құрылған және business, engineering, design және communication бағыттарымен танымал.": {
        kz:"Университет Yaşar Holding қолдауымен құрылған және business, engineering, design және communication бағыттарымен танымал.",
        ru:"Университет основан при поддержке Yaşar Holding и известен направлениями бизнес, инженерия, дизайн и коммуникации.",
        en:"The university was founded with the support of Yaşar Holding and is known for business, engineering, design and communication programs.",
        tr:"Üniversite, Yaşar Holding desteğiyle kurulmuş olup işletme, mühendislik, tasarım ve iletişim alanlarıyla tanınmaktadır."
      },
   
      // ── WHO IS IT FOR — LIST ───────────────────────────────────────
      "Izmir-де оқығысы келетіндерге": {
        kz:"Izmir-де оқығысы келетіндерге",
        ru:"Желающим учиться в Измире",
        en:"Those who want to study in Izmir",
        tr:"İzmir'de okumak isteyen öğrencilere"
      },
      "English education іздейтіндерге": {
        kz:"Ағылшын тіліндегі білім іздейтіндерге",
        ru:"Ищущим образование на английском языке",
        en:"Those seeking English education",
        tr:"İngilizce eğitim arayanlar için"
      },
      "Erasmus exchange қалайтындарға": {
        kz:"Erasmus алмасуын қалайтындарға",
        ru:"Желающим участвовать в обмене Erasmus",
        en:"Those who want Erasmus exchange",
        tr:"Erasmus değişimi isteyenler için"
      },
      "International environment маңызды студенттерге": {
        kz:"Халықаралық орта маңызды студенттерге",
        ru:"Студентам, для которых важна международная среда",
        en:"Students for whom an international environment matters",
        tr:"Uluslararası ortamı önemseyen öğrencilere"
      },
      "Creative және business бағыт қызықтыратындарға": {
        kz:"Шығармашылық және бизнес бағыт қызықтыратындарға",
        ru:"Интересующимся творческими и бизнес-направлениями",
        en:"Those interested in creative and business fields",
        tr:"Yaratıcı ve işletme alanlarına ilgi duyanlar için"
      },
   
      // ── WHY YAŞAR — LIST ───────────────────────────────────────────
      "602 international partnerships": {
        kz:"602 халықаралық серіктестік",
        ru:"602 международных партнёрства",
        en:"602 international partnerships",
        tr:"602 uluslararası ortaklık"
      },
      "THE World Rankings listed university": {
        kz:"THE Әлемдік рейтингіне кіретін университет",
        ru:"Университет, включённый в рейтинг THE",
        en:"THE World Rankings listed university",
        tr:"THE Dünya Sıralaması'nda yer alan üniversite"
      },
      "Strong Erasmus opportunities": {
        kz:"Күшті Erasmus мүмкіндіктері",
        ru:"Широкие возможности Erasmus",
        en:"Strong Erasmus opportunities",
        tr:"Güçlü Erasmus imkânları"
      },
      "Modern campus infrastructure": {
        kz:"Заманауи кампус инфрақұрылымы",
        ru:"Современная инфраструктура кампуса",
        en:"Modern campus infrastructure",
        tr:"Modern kampüs altyapısı"
      },
      "47 student clubs": {
        kz:"47 студенттік клуб",
        ru:"47 студенческих клубов",
        en:"47 student clubs",
        tr:"47 öğrenci kulübü"
      },
      "Strong industry connections": {
        kz:"Күшті индустриялық байланыстар",
        ru:"Сильные связи с индустрией",
        en:"Strong industry connections",
        tr:"Güçlü sektör bağlantıları"
      },
      "Located in student-friendly Izmir": {
        kz:"Студентке қолайлы Izmir қаласында орналасқан",
        ru:"Расположен в студенческом Измире",
        en:"Located in student-friendly Izmir",
        tr:"Öğrenci dostu İzmir'de yer almaktadır"
      },
   
      // ── FOUNDER PARAGRAPHS ─────────────────────────────────────────
      "Selçuk Yaşar — Түркиядағы ең influential industrialists бірі және Yaşar Holding founder.": {
        kz:"Selçuk Yaşar — Түркиядағы ең influential industrialists бірі және Yaşar Holding founder.",
        ru:"Selçuk Yaşar — один из наиболее влиятельных промышленников Турции и основатель Yaşar Holding.",
        en:"Selçuk Yaşar is one of Türkiye's most influential industrialists and the founder of Yaşar Holding.",
        tr:"Selçuk Yaşar, Türkiye'nin en etkili sanayicilerinden biri ve Yaşar Holding'in kurucusudur."
      },
      "Оның компаниялары food industry, tourism, paint industry және energy sectors-те жұмыс істейді.": {
        kz:"Оның компаниялары food industry, tourism, paint industry және energy sectors-те жұмыс істейді.",
        ru:"Его компании работают в сфере пищевой промышленности, туризма, лакокрасочной промышленности и энергетики.",
        en:"His companies operate in food industry, tourism, paint industry and energy sectors.",
        tr:"Şirketleri gıda, turizm, boya ve enerji sektörlerinde faaliyet göstermektedir."
      },
   
      // ── YAŞAR HOLDING COMPANY PILLS ───────────────────────────────
      "Pınar":             {kz:"Pınar",            ru:"Pınar",           en:"Pınar",            tr:"Pınar"},
      "DYO":               {kz:"DYO",              ru:"DYO",             en:"DYO",              tr:"DYO"},
      "Viking Kağıt":      {kz:"Viking Kağıt",     ru:"Viking Kağıt",    en:"Viking Kağıt",     tr:"Viking Kağıt"},
      "Desa Enerji":       {kz:"Desa Enerji",       ru:"Desa Enerji",     en:"Desa Enerji",      tr:"Desa Enerji"},
      "Altın Yunus Resort":{kz:"Altın Yunus Resort",ru:"Altın Yunus Resort",en:"Altın Yunus Resort",tr:"Altın Yunus Resort"},
   
      // ── ACCREDITATION PILLS ────────────────────────────────────────
      "YÖK":         {kz:"YÖK",         ru:"YÖK",         en:"YÖK",         tr:"YÖK"},
      "CEA":         {kz:"CEA",         ru:"CEA",          en:"CEA",         tr:"CEA"},
      "THE Rankings":{kz:"THE рейтингі",ru:"THE Rankings", en:"THE Rankings",tr:"THE Sıralaması"},
      "Erasmus+":    {kz:"Erasmus+",    ru:"Erasmus+",     en:"Erasmus+",    tr:"Erasmus+"},
   
      // ── EXCHANGE PARTNER PILLS ─────────────────────────────────────
      "Global Exchange":              {kz:"Жаһандық алмасу",          ru:"Глобальный обмен",                  en:"Global Exchange",              tr:"Küresel Değişim"},
      "Florida International University":{kz:"Florida International University",ru:"Международный университет Флориды",en:"Florida International University",tr:"Florida Uluslararası Üniversitesi"},
      "Konkuk University":            {kz:"Konkuk университеті",       ru:"Университет Конкук",                en:"Konkuk University",            tr:"Konkuk Üniversitesi"},
      "University of Rome":           {kz:"Рим университеті",          ru:"Римский университет",              en:"University of Rome",           tr:"Roma Üniversitesi"},
      "Fontys University":            {kz:"Fontys университеті",       ru:"Университет Фонтис",               en:"Fontys University",            tr:"Fontys Üniversitesi"},
   
      // ── BUSINESS PROGRAMS ──────────────────────────────────────────
      "Business Administration": {kz:"Бизнесті басқару",    ru:"Управление бизнесом",    en:"Business Administration", tr:"İşletme Yönetimi"},
      "Economics":               {kz:"Экономика",            ru:"Экономика",              en:"Economics",               tr:"Ekonomi"},
      "International Trade":     {kz:"Халықаралық сауда",   ru:"Международная торговля", en:"International Trade",     tr:"Uluslararası Ticaret"},
      "Logistics Management":    {kz:"Логистикалық менеджмент", ru:"Управление логистикой", en:"Logistics Management",  tr:"Lojistik Yönetimi"},
   
      // ── ENGINEERING PROGRAMS ───────────────────────────────────────
      "Computer Engineering":   {kz:"Компьютерлік инженерия",    ru:"Компьютерная инженерия",  en:"Computer Engineering",   tr:"Bilgisayar Mühendisliği"},
      "Software Engineering":   {kz:"Бағдарламалық инженерия",   ru:"Программная инженерия",   en:"Software Engineering",   tr:"Yazılım Mühendisliği"},
      "Mechanical Engineering": {kz:"Механикалық инженерия",     ru:"Механическая инженерия",  en:"Mechanical Engineering", tr:"Makine Mühendisliği"},
      "Industrial Engineering": {kz:"Өнеркәсіптік инженерия",    ru:"Промышленная инженерия",  en:"Industrial Engineering", tr:"Endüstri Mühendisliği"},
      "Civil Engineering":      {kz:"Азаматтық инженерия",       ru:"Гражданское строительство",en:"Civil Engineering",     tr:"İnşaat Mühendisliği"},
   
      // ── COMMUNICATION PROGRAMS ─────────────────────────────────────
      "Radio & Television":   {kz:"Радио және теледидар",  ru:"Радио и телевидение",     en:"Radio & Television",   tr:"Radyo ve Televizyon"},
      "New Media":            {kz:"Жаңа медиа",            ru:"Новые медиа",             en:"New Media",            tr:"Yeni Medya"},
      "Public Relations":     {kz:"Қоғаммен байланыс",     ru:"Связи с общественностью", en:"Public Relations",     tr:"Halkla İlişkiler"},
      "Communication Design": {kz:"Коммуникация дизайны",  ru:"Дизайн коммуникаций",     en:"Communication Design", tr:"İletişim Tasarımı"},
   
      // ── ARCHITECTURE & DESIGN ──────────────────────────────────────
      "Architecture":         {kz:"Архитектура",          ru:"Архитектура",             en:"Architecture",          tr:"Mimarlık"},
      "Interior Architecture":{kz:"Интерьер дизайны",     ru:"Интерьерная архитектура", en:"Interior Architecture", tr:"İç Mimarlık"},
      "Industrial Design":    {kz:"Өнеркәсіптік дизайн",  ru:"Промышленный дизайн",    en:"Industrial Design",     tr:"Endüstriyel Tasarım"},
      "Animation":            {kz:"Анимация",             ru:"Анимация",                en:"Animation",             tr:"Animasyon"},
   
      // ── SOCIAL SCIENCES ────────────────────────────────────────────
      "Psychology":           {kz:"Психология",            ru:"Психология",              en:"Psychology",            tr:"Psikoloji"},
      "International Relations":{kz:"Халықаралық қатынастар",ru:"Международные отношения",en:"International Relations",tr:"Uluslararası İlişkiler"},
      "English Literature":   {kz:"Ағылшын әдебиеті",     ru:"Английская литература",   en:"English Literature",    tr:"İngiliz Dili ve Edebiyatı"},
      "Translation Studies":  {kz:"Аударма зерттеулері",   ru:"Переводоведение",         en:"Translation Studies",   tr:"Mütercim-Tercümanlık"},
   
      // ── WHY IZMIR — LIST ───────────────────────────────────────────
      "Comfortable student city": {
        kz:"Ыңғайлы студенттік қала",
        ru:"Комфортный студенческий город",
        en:"Comfortable student city",
        tr:"Konforlu öğrenci şehri"
      },
      "Sea & modern lifestyle": {
        kz:"Теңіз және заманауи өмір салты",
        ru:"Море и современный образ жизни",
        en:"Sea & modern lifestyle",
        tr:"Deniz ve modern yaşam tarzı"
      },
      "Strong transportation system": {
        kz:"Күшті көлік жүйесі",
        ru:"Развитая транспортная система",
        en:"Strong transportation system",
        tr:"Güçlü ulaşım sistemi"
      },
      "Multicultural atmosphere": {
        kz:"Мультикультуралды атмосфера",
        ru:"Мультикультурная атмосфера",
        en:"Multicultural atmosphere",
        tr:"Çok kültürlü atmosfer"
      },
      "Affordable student life": {
        kz:"Қолжетімді студенттік өмір",
        ru:"Доступная студенческая жизнь",
        en:"Affordable student life",
        tr:"Uygun fiyatlı öğrenci yaşamı"
      },
   
      // ── CAMPUS LIFE ────────────────────────────────────────────────
      "Yaşar University campus Bornova student district ортасында орналасқан.": {
        kz:"Yaşar University campus Bornova student district ортасында орналасқан.",
        ru:"Кампус Yaşar University расположен в центре студенческого района Борнова.",
        en:"Yaşar University campus is located in the heart of the Bornova student district.",
        tr:"Yaşar University kampüsü, Bornova öğrenci bölgesinin tam merkezinde yer almaktadır."
      },
      "Modern Labs":     {kz:"Заманауи зертханалар",    ru:"Современные лаборатории", en:"Modern Labs",     tr:"Modern Laboratuvarlar"},
      "Library":         {kz:"Кітапхана",               ru:"Библиотека",              en:"Library",         tr:"Kütüphane"},
      "Sports Areas":    {kz:"Спорт алаңдары",          ru:"Спортивные площадки",     en:"Sports Areas",    tr:"Spor Alanları"},
      "47 Student Clubs":{kz:"47 студенттік клуб",       ru:"47 студенческих клубов",  en:"47 Student Clubs",tr:"47 Öğrenci Kulübü"},
      "Study Areas":     {kz:"Оқу аймақтары",           ru:"Учебные зоны",            en:"Study Areas",     tr:"Çalışma Alanları"},
      "Dormitory Nearby":{kz:"Жатақхана жақын",         ru:"Общежитие рядом",         en:"Dormitory Nearby",tr:"Yakın Yurt"},
   
      // ── SIDEBAR ────────────────────────────────────────────────────
      "quick-info-title": {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",   tr:"Hızlı bilgi"},
      "Қысқаша ақпарат":  {kz:"Қысқаша ақпарат", ru:"Краткая информация", en:"Quick info",   tr:"Hızlı bilgi"},
      "Артықшылықтар":    {kz:"Артықшылықтар",   ru:"Преимущества",       en:"Advantages",  tr:"Avantajlar"},
      "Әрекеттер":        {kz:"Әрекеттер",        ru:"Действия",           en:"Actions",     tr:"İşlemler"},
   
      // Sidebar quick info labels
      "Қала:":     {kz:"Қала:",     ru:"Город:",    en:"City:",      tr:"Şehir:"},
      "Түрі:":     {kz:"Түрі:",     ru:"Тип:",      en:"Type:",      tr:"Tür:"},
      "Тілі:":     {kz:"Тілі:",     ru:"Язык:",     en:"Language:",  tr:"Dil:"},
      "Partners:": {kz:"Partners:", ru:"Партнёры:", en:"Partners:",  tr:"Ortaklar:"},
   
      // Sidebar values
      "Izmir":           {kz:"İzmir",                  ru:"Измир",                        en:"Izmir",           tr:"İzmir"},
      "Private":         {kz:"Жеке",                   ru:"Частный",                      en:"Private",         tr:"Özel"},
      "English":         {kz:"Ағылшын",                ru:"Английский",                   en:"English",         tr:"İngilizce"},
      "602 Universities":{kz:"602 университет",        ru:"602 университета",             en:"602 universities",tr:"602 üniversite"},
   
      // Sidebar advantages
      "THE Rankings":         {kz:"THE рейтингі",              ru:"Рейтинг THE",                 en:"THE Rankings",          tr:"THE Sıralaması"},
      "Erasmus Exchange":     {kz:"Erasmus алмасуы",           ru:"Обмен Erasmus",               en:"Erasmus Exchange",       tr:"Erasmus Değişimi"},
      "International Education":{kz:"Халықаралық білім",      ru:"Международное образование",   en:"International Education",tr:"Uluslararası Eğitim"},
      "Modern Campus":        {kz:"Заманауи кампус",           ru:"Современный кампус",          en:"Modern Campus",          tr:"Modern Kampüs"},
      "Izmir Student Life":   {kz:"İzmir студенттік өмірі",    ru:"Студенческая жизнь в Измире", en:"Izmir Student Life",     tr:"İzmir Öğrenci Yaşamı"},
   
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
   
    EduI18n.registerPage("yasar", D, function(lang){
      applyText(lang);
    });
  })();