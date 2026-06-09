(function(){
  const D = {
 
    // ── NAV ────────────────────────────────────────────────────────
    "nav-home":         {kz:"Басты бет",      ru:"Главная",       en:"Home",          tr:"Ana sayfa"},
    "nav-specialties":  {kz:"Мамандықтар",    ru:"Специальности", en:"Specialties",   tr:"Bölümler"},
    "nav-universities": {kz:"Университеттер", ru:"Университеты",  en:"Universities",  tr:"Üniversiteler"},
    "nav-preparation":  {kz:"Дайындық",       ru:"Подготовка",    en:"Preparation",   tr:"Hazırlık"},
    "nav-feed":         {kz:"Лента",          ru:"Лента",         en:"Feed",          tr:"Akış"},
    "nav-language":     {kz:"Тіл",            ru:"Язык",          en:"Language",      tr:"Dil"},
    "nav-login":        {kz:"Кіру",           ru:"Войти",         en:"Login",         tr:"Giriş yap"},
 
    // ── FOOTER ─────────────────────────────────────────────────────
    "footer-contact": {kz:"Байланыс",   ru:"Контакты",  en:"Contact",   tr:"İletişim"},
    "footer-text":    {
      kz:"© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.",
      ru:"© 2026 EduBridge Türkiye. Все права защищены.",
      en:"© 2026 EduBridge Türkiye. All rights reserved.",
      tr:"© 2026 EduBridge Türkiye. Tüm hakları saklıdır."
    },
 
    // ── HERO SECTION ───────────────────────────────────────────────
    "uni-label": {
      kz:"Университеттер",
      ru:"Университеты",
      en:"Universities",
      tr:"Üniversiteler"
    },
    "Түркия университеттері": {
      kz:"Түркия университеттері",
      ru:"Университеты Турции",
      en:"Universities of Türkiye",
      tr:"Türkiye Üniversiteleri"
    },
    "uni-desc": {
      kz:"Университетті атауы, қала немесе оқу бағыты бойынша ізде.",
      ru:"Найди университет по названию, городу или направлению обучения.",
      en:"Search for a university by name, city or field of study.",
      tr:"Üniversiteyi adına, şehrine veya eğitim alanına göre ara."
    },
    "uni-search-placeholder": {
      kz:"Университетті іздеу...",
      ru:"Поиск университета...",
      en:"Search university...",
      tr:"Üniversite ara..."
    },
    "uni-search-btn": {
      kz:"Іздеу",
      ru:"Найти",
      en:"Search",
      tr:"Ara"
    },
    "search-btn": {
      kz:"Іздеу",
      ru:"Найти",
      en:"Search",
      tr:"Ara"
    },
    "Іздеу": {
      kz:"Іздеу",
      ru:"Найти",
      en:"Search",
      tr:"Ara"
    },
 
    // ── EMPTY STATE ────────────────────────────────────────────────
    "Ештеңе табылмады.": {
      kz:"Ештеңе табылмады.",
      ru:"Ничего не найдено.",
      en:"Nothing found.",
      tr:"Hiçbir şey bulunamadı."
    },
 
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
 
    // ── UNIVERSITY CARD LABELS (rendered by JS) ────────────────────
    "Жеке университет": {
      kz:"Жеке университет",
      ru:"Частный университет",
      en:"Private university",
      tr:"Özel üniversite"
    },
    "Мемлекеттік университет": {
      kz:"Мемлекеттік университет",
      ru:"Государственный университет",
      en:"Public university",
      tr:"Devlet üniversitesi"
    },
    "Түркия TOP-5":   {kz:"Түркия TOP-5",   ru:"Турция TOP-5",   en:"Türkiye TOP-5",   tr:"Türkiye TOP-5"},
    "Türkiye TOP-5":  {kz:"Түркия TOP-5",   ru:"Турция TOP-5",   en:"Türkiye TOP-5",   tr:"Türkiye TOP-5"},
    "Türkiye TOP-10": {kz:"Түркия TOP-10",  ru:"Турция TOP-10",  en:"Türkiye TOP-10",  tr:"Türkiye TOP-10"},
    "Türkiye TOP-15": {kz:"Түркия TOP-15",  ru:"Турция TOP-15",  en:"Türkiye TOP-15",  tr:"Türkiye TOP-15"},
    "Медицина TOP-3": {kz:"Медицина TOP-3", ru:"Медицина TOP-3", en:"Medicine TOP-3",  tr:"Tıp TOP-3"},
    "Izmir TOP-3":    {kz:"İzmir TOP-3",    ru:"İzmir TOP-3",    en:"İzmir TOP-3",     tr:"İzmir TOP-3"},
    "Ankara TOP-5":   {kz:"Ankara TOP-5",   ru:"Ankara TOP-5",   en:"Ankara TOP-5",    tr:"Ankara TOP-5"},
    "Istanbul TOP-10":{kz:"Istanbul TOP-10",ru:"İstanbul TOP-10",en:"Istanbul TOP-10", tr:"İstanbul TOP-10"},
    "Психология TOP-2":{kz:"Психология TOP-2",ru:"Психология TOP-2",en:"Psychology TOP-2",tr:"Psikoloji TOP-2"},
    "Antalya TOP-1":  {kz:"Antalya TOP-1",  ru:"Antalya TOP-1",  en:"Antalya TOP-1",   tr:"Antalya TOP-1"},
 
    // ── UNIVERSITY CARD BUTTON / LINKS ─────────────────────────────
    "Толығырақ": {
      kz:"Толығырақ",
      ru:"Подробнее",
      en:"Learn more",
      tr:"Daha fazla"
    },
    "Подробнее": {
      kz:"Толығырақ",
      ru:"Подробнее",
      en:"Learn more",
      tr:"Daha fazla"
    },
 
    // ── UNIVERSITY CARD META LABELS ────────────────────────────────
    "Қала:":        {kz:"Қала:",        ru:"Город:",       en:"City:",        tr:"Şehir:"},
    "Тіл:":         {kz:"Тіл:",         ru:"Язык:",        en:"Language:",    tr:"Dil:"},
    "Бағдарлама:":  {kz:"Бағдарлама:", ru:"Программы:",   en:"Programs:",    tr:"Programlar:"},
    "Оқу ақысы:":   {kz:"Оқу ақысы:",  ru:"Стоимость:",   en:"Tuition:",     tr:"Ücret:"},
 
    // ── UNIVERSITY TYPES ───────────────────────────────────────────
    "English":          {kz:"Ағылшын",          ru:"Английский",       en:"English",        tr:"İngilizce"},
    "English / Turkish":{kz:"Ағылшын / Түрік",  ru:"Английский / Турецкий", en:"English / Turkish", tr:"İngilizce / Türkçe"},
    "Turkish / English":{kz:"Түрік / Ағылшын",  ru:"Турецкий / Английский", en:"Turkish / English", tr:"Türkçe / İngilizce"},
 
    // ── UNIVERSITY DESCRIPTIONS ────────────────────────────────────
    "Стамбұлдың Tuzla кампусында орналасқан топ-университет. Interdisciplinary білім моделімен, CO-OP бағдарламасымен және 100+ халықаралық серіктестігімен ерекшеленеді.": {
      kz:"Стамбұлдың Tuzla кампусында орналасқан топ-университет. Interdisciplinary білім моделімен, CO-OP бағдарламасымен және 100+ халықаралық серіктестігімен ерекшеленеді.",
      ru:"Ведущий университет в кампусе Tuzla в Стамбуле. Отличается междисциплинарной моделью обучения, программой CO-OP и 100+ международными партнёрствами.",
      en:"A top university located in Tuzla campus, Istanbul. Known for its interdisciplinary education model, CO-OP program and 100+ international partnerships.",
      tr:"İstanbul'un Tuzla kampüsünde yer alan önde gelen üniversite. Disiplinlerarası eğitim modeli, CO-OP programı ve 100+ uluslararası ortaklığıyla öne çıkar."
    },
    "Стамбұл орталығындағы танымал университет. Берлин, Вашингтон, Батуми кампустары бар. Халықаралық студенттерге арналған scholarship бағдарламалары жұмыс істейді.": {
      kz:"Стамбұл орталығындағы танымал университет. Берлин, Вашингтон, Батуми кампустары бар. Халықаралық студенттерге арналған scholarship бағдарламалары жұмыс істейді.",
      ru:"Популярный университет в центре Стамбула. Имеет кампусы в Берлине, Вашингтоне и Батуми. Действуют стипендиальные программы для иностранных студентов.",
      en:"A popular university in central Istanbul. Has campuses in Berlin, Washington and Batumi. Scholarship programs for international students are available.",
      tr:"Stanbul merkezinde popüler bir üniversite. Berlin, Washington ve Batum kampüsleri mevcuttur. Uluslararası öğrenciler için burs programları uygulanmaktadır."
    },
    "Заманауи кампусы мен күшті industry байланысы бар университет. Aviation менеджменті, Engineering және Culinary Arts бағыттарымен Türkiye-де бірегей.": {
      kz:"Заманауи кампусы мен күшті industry байланысы бар университет. Aviation менеджменті, Engineering және Culinary Arts бағыттарымен Türkiye-де бірегей.",
      ru:"Университет с современным кампусом и сильными связями с индустрией. Уникален в Турции по направлениям авиационного менеджмента, инженерии и кулинарного искусства.",
      en:"A university with a modern campus and strong industry connections. Unique in Türkiye for Aviation Management, Engineering and Culinary Arts programs.",
      tr:"Modern kampüsü ve güçlü sektör bağlantılarıyla öne çıkan üniversite. Türkiye'de Havacılık Yönetimi, Mühendislik ve Gastronomi alanlarında eşsizdir."
    },
    "Türkiye-дің үздік медицина университеттерінің бірі. Acıbadem Hospital желісімен тікелей байланыста — студенттер нақты клиникалық тәжірибе алады.": {
      kz:"Türkiye-дің үздік медицина университеттерінің бірі. Acıbadem Hospital желісімен тікелей байланыста — студенттер нақты клиникалық тәжірибе алады.",
      ru:"Один из лучших медицинских университетов Турции. Напрямую связан с сетью больниц Acıbadem — студенты получают реальный клинический опыт.",
      en:"One of Türkiye's top medical universities. Directly connected to the Acıbadem Hospital network — students gain real clinical experience.",
      tr:"Türkiye'nin önde gelen tıp üniversitelerinden biri. Acıbadem Hastane ağıyla doğrudan bağlantılıdır — öğrenciler gerçek klinik deneyim kazanır."
    },
    "Измирдегі Aegean жағалауындағы сапалы университет. Erasmus+ бағдарламасы арқылы Еуропа университеттерімен студент алмасуы жүреді.": {
      kz:"Измирдегі Aegean жағалауындағы сапалы университет. Erasmus+ бағдарламасы арқылы Еуропа университеттерімен студент алмасуы жүреді.",
      ru:"Качественный университет на берегу Эгейского моря в Измире. Проводится обмен студентами с европейскими университетами по программе Erasmus+.",
      en:"A quality university on the Aegean coast in Izmir. Student exchange with European universities via the Erasmus+ program.",
      tr:"İzmir'de Ege kıyısında kaliteli bir üniversite. Erasmus+ programı aracılığıyla Avrupa üniversiteleriyle öğrenci değişimi yapılmaktadır."
    },
    "TED қоры негізіндегі Анкарадағы беделді университет. Сапалы гуманитарлық және инженерлік білім. Мемлекеттік мекемелермен тығыз байланыс.": {
      kz:"TED қоры негізіндегі Анкарадағы беделді университет. Сапалы гуманитарлық және инженерлік білім. Мемлекеттік мекемелермен тығыз байланыс.",
      ru:"Престижный университет в Анкаре, основанный фондом TED. Качественное гуманитарное и инженерное образование. Тесные связи с государственными учреждениями.",
      en:"A prestigious university in Ankara founded by the TED Foundation. Quality humanities and engineering education. Close ties with government institutions.",
      tr:"TED Vakfı tarafından kurulan Ankara'daki prestijli üniversite. Kaliteli beşeri bilimler ve mühendislik eğitimi. Devlet kurumlarıyla yakın iş birliği."
    },
    "Стамбұл тарихи орталығындағы заманауи университет. Game Design, Film, Communication бағыттарымен Türkiye-де атақты. Галата мұнарасына жақын орналасқан.": {
      kz:"Стамбұл тарихи орталығындағы заманауи университет. Game Design, Film, Communication бағыттарымен Türkiye-де атақты. Галата мұнарасына жақын орналасқан.",
      ru:"Современный университет в историческом центре Стамбула. Известен в Турции направлениями Game Design, Film и Communication. Расположен рядом с башней Галата.",
      en:"A modern university in Istanbul's historic center. Renowned in Türkiye for Game Design, Film and Communication programs. Located near the Galata Tower.",
      tr:"İstanbul'un tarihi merkezindeki modern üniversite. Türkiye'de Oyun Tasarımı, Film ve İletişim alanlarıyla tanınmaktadır. Galata Kulesi'ne yakın konumdadır."
    },
    "Психология және нейробиология бағыттарында Türkiye-де жетекші университет. Босфор жағасындағы кампусы. Humanistic психология мектебімен танымал.": {
      kz:"Психология және нейробиология бағыттарында Türkiye-де жетекші университет. Босфор жағасындағы кампусы. Humanistic психология мектебімен танымал.",
      ru:"Ведущий университет Турции по психологии и нейробиологии. Кампус на берегу Босфора. Известен школой гуманистической психологии.",
      en:"Türkiye's leading university in Psychology and Neuroscience. Campus on the Bosphorus shore. Known for its Humanistic Psychology school.",
      tr:"Psikoloji ve Nörobiyoloji alanlarında Türkiye'nin önde gelen üniversitesi. Boğaz kıyısında kampüs. İnsancıl psikoloji okulu ile tanınmaktadır."
    },
    "Халықаралық студенттер арасында ең танымал университеттердің бірі. 100-ден астам бағдарламасы, үлкен кампусы және scholarship мүмкіндіктері бар.": {
      kz:"Халықаралық студенттер арасында ең танымал университеттердің бірі. 100-ден астам бағдарламасы, үлкен кампусы және scholarship мүмкіндіктері бар.",
      ru:"Один из самых популярных университетов среди иностранных студентов. Более 100 программ, большой кампус и возможности для получения стипендии.",
      en:"One of the most popular universities among international students. Over 100 programs, a large campus and scholarship opportunities.",
      tr:"Uluslararası öğrenciler arasında en popüler üniversitelerden biri. 100'den fazla program, geniş kampüs ve burs imkânları mevcuttur."
    },
    "Жерорта теңізі жағалауындағы халықаралық бағыттағы университет. Туризм, Авиация және Engineering бағыттарымен өсіп келе жатқан университет.": {
      kz:"Жерорта теңізі жағалауындағы халықаралық бағыттағы университет. Туризм, Авиация және Engineering бағыттарымен өсіп келе жатқан университет.",
      ru:"Международно ориентированный университет на берегу Средиземного моря. Растущий университет с направлениями Туризм, Авиация и Инженерия.",
      en:"An internationally oriented university on the Mediterranean coast. A growing university with Tourism, Aviation and Engineering programs.",
      tr:"Akdeniz kıyısında uluslararası odaklı bir üniversite. Turizm, Havacılık ve Mühendislik alanlarıyla büyüyen bir üniversite."
    },
 
    // ── TUITION STRINGS ────────────────────────────────────────────
    "~$8,000–12,000/жыл":  {kz:"~$8,000–12,000/жыл",  ru:"~$8,000–12,000/год",  en:"~$8,000–12,000/year",  tr:"~$8,000–12,000/yıl"},
    "~$6,000–10,000/жыл":  {kz:"~$6,000–10,000/жыл",  ru:"~$6,000–10,000/год",  en:"~$6,000–10,000/year",  tr:"~$6,000–10,000/yıl"},
    "~$7,000–11,000/жыл":  {kz:"~$7,000–11,000/жыл",  ru:"~$7,000–11,000/год",  en:"~$7,000–11,000/year",  tr:"~$7,000–11,000/yıl"},
    "~$10,000–18,000/жыл": {kz:"~$10,000–18,000/жыл", ru:"~$10,000–18,000/год", en:"~$10,000–18,000/year", tr:"~$10,000–18,000/yıl"},
    "~$5,000–8,000/жыл":   {kz:"~$5,000–8,000/жыл",   ru:"~$5,000–8,000/год",   en:"~$5,000–8,000/year",   tr:"~$5,000–8,000/yıl"},
    "~$5,500–9,000/жыл":   {kz:"~$5,500–9,000/жыл",   ru:"~$5,500–9,000/год",   en:"~$5,500–9,000/year",   tr:"~$5,500–9,000/yıl"},
    "~$5,000–8,500/жыл":   {kz:"~$5,000–8,500/жыл",   ru:"~$5,000–8,500/год",   en:"~$5,000–8,500/year",   tr:"~$5,000–8,500/yıl"},
    "~$5,000–9,000/жыл":   {kz:"~$5,000–9,000/жыл",   ru:"~$5,000–9,000/год",   en:"~$5,000–9,000/year",   tr:"~$5,000–9,000/yıl"},
    "~$4,500–10,000/жыл":  {kz:"~$4,500–10,000/жыл",  ru:"~$4,500–10,000/год",  en:"~$4,500–10,000/year",  tr:"~$4,500–10,000/yıl"},
    "~$4,000–7,000/жыл":   {kz:"~$4,000–7,000/жыл",   ru:"~$4,000–7,000/год",   en:"~$4,000–7,000/year",   tr:"~$4,000–7,000/yıl"},
 
    // ── PAGINATION ─────────────────────────────────────────────────
    "Алдыңғы": {kz:"Алдыңғы", ru:"Назад",   en:"Previous", tr:"Önceki"},
    "Келесі":  {kz:"Келесі",  ru:"Вперёд",  en:"Next",     tr:"Sonraki"},
 
    // ── STATIC_UNIVERSITIES — city names (used in card rendering) ──
    "Tuzla, Istanbul":         {kz:"Tuzla, İstanbul",     ru:"Тузла, Стамбул",      en:"Tuzla, Istanbul",      tr:"Tuzla, İstanbul"},
    "Beşiktaş, Istanbul":      {kz:"Beşiktaş, İstanbul",  ru:"Бешикташ, Стамбул",   en:"Beşiktaş, Istanbul",   tr:"Beşiktaş, İstanbul"},
    "Çekmeköy, Istanbul":      {kz:"Çekmeköy, İstanbul",  ru:"Чекмекёй, Стамбул",   en:"Çekmeköy, Istanbul",   tr:"Çekmeköy, İstanbul"},
    "Ataşehir, Istanbul":      {kz:"Ataşehir, İstanbul",  ru:"Аташехир, Стамбул",   en:"Ataşehir, Istanbul",   tr:"Ataşehir, İstanbul"},
    "Bornova, Izmir":          {kz:"Bornova, İzmir",      ru:"Борнова, Измир",       en:"Bornova, Izmir",       tr:"Bornova, İzmir"},
    "Çankaya, Ankara":         {kz:"Çankaya, Ankara",     ru:"Чанкая, Анкара",      en:"Çankaya, Ankara",      tr:"Çankaya, Ankara"},
    "Cibali, Istanbul":        {kz:"Cibali, İstanbul",    ru:"Джибали, Стамбул",    en:"Cibali, Istanbul",     tr:"Cibali, İstanbul"},
    "Üsküdar, Istanbul":       {kz:"Üsküdar, İstanbul",   ru:"Ускюдар, Стамбул",    en:"Üsküdar, Istanbul",    tr:"Üsküdar, İstanbul"},
    "Küçükçekmece, Istanbul":  {kz:"Küçükçekmece, İstanbul", ru:"Кючюкчекмедже, Стамбул", en:"Küçükçekmece, Istanbul", tr:"Küçükçekmece, İstanbul"},
    "Döşemealtı, Antalya":     {kz:"Döşemealtı, Antalya", ru:"Дёшемеалты, Анталья", en:"Döşemealtı, Antalya",  tr:"Döşemealtı, Antalya"},
 
    // ── PROGRAMS (shown on cards) ──────────────────────────────────
    "Engineering, Business, Arts & Social Sciences, Law": {
      kz:"Инженерия, Бизнес, Өнер және әлеуметтік ғылымдар, Заң",
      ru:"Инженерия, Бизнес, Искусства и социальные науки, Право",
      en:"Engineering, Business, Arts & Social Sciences, Law",
      tr:"Mühendislik, İşletme, Sanat ve Sosyal Bilimler, Hukuk"
    },
    "Medicine, Engineering, Business, Architecture, Communication": {
      kz:"Медицина, Инженерия, Бизнес, Архитектура, Коммуникация",
      ru:"Медицина, Инженерия, Бизнес, Архитектура, Коммуникации",
      en:"Medicine, Engineering, Business, Architecture, Communication",
      tr:"Tıp, Mühendislik, İşletme, Mimarlık, İletişim"
    },
    "Aviation, Engineering, Business, Architecture, Culinary Arts": {
      kz:"Авиация, Инженерия, Бизнес, Архитектура, Аспаздық өнер",
      ru:"Авиация, Инженерия, Бизнес, Архитектура, Кулинарное искусство",
      en:"Aviation, Engineering, Business, Architecture, Culinary Arts",
      tr:"Havacılık, Mühendislik, İşletme, Mimarlık, Gastronomi"
    },
    "Medicine, Dentistry, Pharmacy, Nursing, Health Sciences": {
      kz:"Медицина, Стоматология, Фармация, Мейірбикелік, Денсаулық",
      ru:"Медицина, Стоматология, Фармация, Сестринское дело, Науки о здоровье",
      en:"Medicine, Dentistry, Pharmacy, Nursing, Health Sciences",
      tr:"Tıp, Diş Hekimliği, Eczacılık, Hemşirelik, Sağlık Bilimleri"
    },
    "Engineering, Business, Communication, Architecture, Psychology": {
      kz:"Инженерия, Бизнес, Коммуникация, Архитектура, Психология",
      ru:"Инженерия, Бизнес, Коммуникации, Архитектура, Психология",
      en:"Engineering, Business, Communication, Architecture, Psychology",
      tr:"Mühendislik, İşletme, İletişim, Mimarlık, Psikoloji"
    },
    "Education, Engineering, Architecture, Economics, Law": {
      kz:"Білім, Инженерия, Архитектура, Экономика, Заң",
      ru:"Педагогика, Инженерия, Архитектура, Экономика, Право",
      en:"Education, Engineering, Architecture, Economics, Law",
      tr:"Eğitim, Mühendislik, Mimarlık, Ekonomi, Hukuk"
    },
    "Communication, Law, Engineering, Business, Game Design": {
      kz:"Коммуникация, Заң, Инженерия, Бизнес, Ойын дизайны",
      ru:"Коммуникации, Право, Инженерия, Бизнес, Game Design",
      en:"Communication, Law, Engineering, Business, Game Design",
      tr:"İletişim, Hukuk, Mühendislik, İşletme, Oyun Tasarımı"
    },
    "Psychology, Medicine, Health Sciences, Communication, Neuroscience": {
      kz:"Психология, Медицина, Денсаулық, Коммуникация, Нейробиология",
      ru:"Психология, Медицина, Науки о здоровье, Коммуникации, Нейронауки",
      en:"Psychology, Medicine, Health Sciences, Communication, Neuroscience",
      tr:"Psikoloji, Tıp, Sağlık Bilimleri, İletişim, Nörobiyoloji"
    },
    "Medicine, Dentistry, Engineering, Business, Architecture": {
      kz:"Медицина, Стоматология, Инженерия, Бизнес, Архитектура",
      ru:"Медицина, Стоматология, Инженерия, Бизнес, Архитектура",
      en:"Medicine, Dentistry, Engineering, Business, Architecture",
      tr:"Tıp, Diş Hekimliği, Mühendislik, İşletme, Mimarlık"
    },
    "Engineering, Tourism, Architecture, Business, Aviation": {
      kz:"Инженерия, Туризм, Архитектура, Бизнес, Авиация",
      ru:"Инженерия, Туризм, Архитектура, Бизнес, Авиация",
      en:"Engineering, Tourism, Architecture, Business, Aviation",
      tr:"Mühendislik, Turizm, Mimarlık, İşletme, Havacılık"
    },
  };
 
  // ── Translation helpers ────────────────────────────────────────
 
  function trText(key, lang){
    return D[key] && D[key][lang] ? D[key][lang] : key;
  }
 
  function norm(s){
    return (s || "").trim().replace(/\s+/g, " ");
  }
 
  // Global t() for JS-rendered cards
  window.t = window.t || function(key, lang){
    var l = lang || localStorage.getItem("lang") || "kz";
    return trText(key, l);
  };
 
  function applyText(lang){
    // 1. data-i18n attributes
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if(D[key]) el.textContent = trText(key, lang);
    });
 
    // 2. placeholder via data-placeholder-i18n
    document.querySelectorAll("[data-placeholder-i18n]").forEach(function(el){
      var key = el.getAttribute("data-placeholder-i18n");
      if(D[key]) el.setAttribute("placeholder", trText(key, lang));
    });
 
    // 3. Regular placeholder attributes
    document.querySelectorAll("[placeholder]").forEach(function(el){
      var key = el.getAttribute("placeholder");
      if(D[key]) el.setAttribute("placeholder", trText(key, lang));
    });
 
    // 4. title attributes
    document.querySelectorAll("[title]").forEach(function(el){
      var key = el.getAttribute("title");
      if(D[key]) el.setAttribute("title", trText(key, lang));
    });
 
    // 5. Inline text nodes in leaf elements
    document.querySelectorAll("span,h1,h2,h3,p,strong,small,a,button,label,option,div").forEach(function(el){
      if(el.children.length > 0) return;
      var key = norm(el.textContent);
      if(D[key]) el.textContent = trText(key, lang);
    });
 
    // 6. Re-render university cards with translated content
    if(typeof window.renderUniversities === "function"){
      window.renderUniversities(lang);
    }
  }
 
  // Expose D for use in public-universities.js card rendering
  window.UNIV_I18N = D;
  window.univT = function(key){
    var l = localStorage.getItem("lang") || "kz";
    return trText(key, l);
  };
 
  EduI18n.registerPage("universities", D, function(lang){
    applyText(lang);
  });
})();