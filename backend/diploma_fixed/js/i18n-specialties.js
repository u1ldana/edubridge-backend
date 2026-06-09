(function(){
  const D = {
    "nav-home": {kz:"Басты бет", ru:"Главная", en:"Home", tr:"Ana sayfa"},
    "nav-specialties": {kz:"Мамандықтар", ru:"Специальности", en:"Specialties", tr:"Bölümler"},
    "nav-universities": {kz:"Университеттер", ru:"Университеты", en:"Universities", tr:"Üniversiteler"},
    "nav-preparation": {kz:"Дайындық", ru:"Подготовка", en:"Preparation", tr:"Hazırlık"},
    "nav-feed": {kz:"Лента", ru:"Лента", en:"Feed", tr:"Akış"},
    "nav-language": {kz:"Тіл", ru:"Язык", en:"Language", tr:"Dil"},
    "nav-profile": {kz:"Профиль", ru:"Профиль", en:"Profile", tr:"Profil"},
    "search-btn": {kz:"Іздеу", ru:"Поиск", en:"Search", tr:"Ara"},
    "footer-contact": {kz:"Байланыс", ru:"Контакты", en:"Contact", tr:"İletişim"},
    "footer-text": {kz:"© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.", ru:"© 2026 EduBridge Türkiye. Все права защищены.", en:"© 2026 EduBridge Türkiye. All rights reserved.", tr:"© 2026 EduBridge Türkiye. Tüm hakları saklıdır."},

    "Мамандықтар": {kz:"Мамандықтар", ru:"Специальности", en:"Specialties", tr:"Bölümler"},
    "Түркиядағы сұраныстағы мамандықтар": {kz:"Түркиядағы сұраныстағы мамандықтар", ru:"Востребованные специальности в Турции", en:"In-demand specialties in Türkiye", tr:"Türkiye’de talep gören bölümler"},
    "Қызықтырған мамандығыңызды таңдап, сол бағыт бойынша ақпаратты, болашақ профессияларды және бұл мамандық бар университеттерді көре аласыз.": {kz:"Қызықтырған мамандығыңызды таңдап, сол бағыт бойынша ақпаратты, болашақ профессияларды және бұл мамандық бар университеттерді көре аласыз.", ru:"Выберите интересующую специальность и посмотрите информацию по этому направлению, будущие профессии и университеты, где есть эта специальность.", en:"Choose the specialty you are interested in and explore information about the field, future careers and universities that offer this program.", tr:"İlgilendiğiniz bölümü seçerek bu alan hakkında bilgileri, gelecekteki meslekleri ve bu bölümün bulunduğu üniversiteleri görebilirsiniz."},
    "Мамандықты іздеу...": {kz:"Мамандықты іздеу...", ru:"Поиск специальности...", en:"Search specialty...", tr:"Bölüm ara..."},
    "Smart filter": {kz:"Smart filter", ru:"Умный фильтр", en:"Smart filter", tr:"Akıllı filtre"},
    "Өзіңе сай мамандықты таңда": {kz:"Өзіңе сай мамандықты таңда", ru:"Выбери подходящую специальность", en:"Choose a specialty that suits you", tr:"Sana uygun bölümü seç"},
    "Бұл бөлім дипломка үшін platform logic көрсетеді: search, category filter және recommendation жүйесі.": {kz:"Бұл бөлім дипломка үшін platform logic көрсетеді: search, category filter және recommendation жүйесі.", ru:"Этот раздел показывает логику платформы для дипломной работы: поиск, фильтр по категориям и систему рекомендаций.", en:"This section demonstrates platform logic for the diploma project: search, category filter and recommendation system.", tr:"Bu bölüm diploma projesi için platform mantığını gösterir: arama, kategori filtresi ve öneri sistemi."},

    "Барлық бағыттар": {kz:"Барлық бағыттар", ru:"Все направления", en:"All fields", tr:"Tüm alanlar"},
    "IT & Engineering": {kz:"IT және Инженерия", ru:"IT и Инженерия", en:"IT & Engineering", tr:"BT ve Mühendislik"},
    "Business": {kz:"Бизнес", ru:"Бизнес", en:"Business", tr:"İşletme"},
    "Medicine & Health": {kz:"Медицина және Денсаулық", ru:"Медицина и Здоровье", en:"Medicine & Health", tr:"Tıp ve Sağlık"},
    "Social Sciences": {kz:"Әлеуметтік ғылымдар", ru:"Социальные науки", en:"Social Sciences", tr:"Sosyal Bilimler"},
    "Architecture & Design": {kz:"Сәулет және Дизайн", ru:"Архитектура и Дизайн", en:"Architecture & Design", tr:"Mimarlık ve Tasarım"},
    "Барлық тілдер": {kz:"Барлық тілдер", ru:"Все языки", en:"All languages", tr:"Tüm diller"},
    "English": {kz:"Ағылшын", ru:"Английский", en:"English", tr:"İngilizce"},
    "Turkish": {kz:"Түрік тілі", ru:"Турецкий", en:"Turkish", tr:"Türkçe"},
    "English / Turkish": {kz:"Ағылшын / Түрік", ru:"Английский / Турецкий", en:"English / Turkish", tr:"İngilizce / Türkçe"},
    "Маған мамандық ұсын": {kz:"Маған мамандық ұсын", ru:"Подбери мне специальность", en:"Recommend a specialty for me", tr:"Bana bölüm öner"},

    "Бағыттар": {kz:"Бағыттар", ru:"Направления", en:"Fields", tr:"Alanlar"},
    "Ең танымал мамандықтар": {kz:"Ең танымал мамандықтар", ru:"Самые популярные специальности", en:"Most popular specialties", tr:"En popüler bölümler"},
    "Әр мамандықтың ішінде қысқаша сипаттама, career path және осы бағытқа сай университеттер көрсетіледі.": {kz:"Әр мамандықтың ішінде қысқаша сипаттама, career path және осы бағытқа сай университеттер көрсетіледі.", ru:"В каждой специальности показаны краткое описание, карьерный путь и подходящие университеты.", en:"Each specialty includes a short description, career path and universities suitable for this field.", tr:"Her bölümde kısa açıklama, kariyer yolu ve bu alana uygun üniversiteler gösterilir."},

    "Computer Science": {kz:"Computer Science", ru:"Компьютерные науки", en:"Computer Science", tr:"Bilgisayar Bilimi"},
    "Бағдарламалау, software development, algorithms, database, artificial intelligence және web technologies бағыттарын қамтиды.": {kz:"Бағдарламалау, software development, algorithms, database, artificial intelligence және web technologies бағыттарын қамтиды.", ru:"Охватывает программирование, разработку ПО, алгоритмы, базы данных, искусственный интеллект и веб-технологии.", en:"Covers programming, software development, algorithms, databases, artificial intelligence and web technologies.", tr:"Programlama, yazılım geliştirme, algoritmalar, veri tabanları, yapay zeka ve web teknolojilerini kapsar."},

    "Data Science": {kz:"Data Science", ru:"Наука о данных", en:"Data Science", tr:"Veri Bilimi"},
    "Data analysis, statistics, machine learning, business intelligence және decision-making бағыттарын біріктіреді.": {kz:"Data analysis, statistics, machine learning, business intelligence және decision-making бағыттарын біріктіреді.", ru:"Объединяет анализ данных, статистику, машинное обучение, бизнес-аналитику и принятие решений.", en:"Combines data analysis, statistics, machine learning, business intelligence and decision-making.", tr:"Veri analizi, istatistik, makine öğrenmesi, iş zekası ve karar verme alanlarını birleştirir."},

    "Business Administration": {kz:"Business Administration", ru:"Бизнес-администрирование", en:"Business Administration", tr:"İşletme Yönetimi"},
    "Management, marketing, finance, entrepreneurship және business strategy бағыттарын оқытады.": {kz:"Management, marketing, finance, entrepreneurship және business strategy бағыттарын оқытады.", ru:"Изучает менеджмент, маркетинг, финансы, предпринимательство и бизнес-стратегию.", en:"Focuses on management, marketing, finance, entrepreneurship and business strategy.", tr:"Yönetim, pazarlama, finans, girişimcilik ve iş stratejisi alanlarını öğretir."},

    "Economics": {kz:"Economics", ru:"Экономика", en:"Economics", tr:"Ekonomi"},
    "Экономикалық жүйелер, macro/microeconomics, finance, research және policy analysis бағыттарына негізделген.": {kz:"Экономикалық жүйелер, macro/microeconomics, finance, research және policy analysis бағыттарына негізделген.", ru:"Основана на экономических системах, макро- и микроэкономике, финансах, исследованиях и анализе политики.", en:"Based on economic systems, macro/microeconomics, finance, research and policy analysis.", tr:"Ekonomik sistemler, makro/mikro ekonomi, finans, araştırma ve politika analizi alanlarına dayanır."},

    "Medicine": {kz:"Medicine", ru:"Медицина", en:"Medicine", tr:"Tıp"},
    "Адам денсаулығы, clinical practice, diagnostics, treatment және medical research бағыттарын қамтиды.": {kz:"Адам денсаулығы, clinical practice, diagnostics, treatment және medical research бағыттарын қамтиды.", ru:"Охватывает здоровье человека, клиническую практику, диагностику, лечение и медицинские исследования.", en:"Covers human health, clinical practice, diagnostics, treatment and medical research.", tr:"İnsan sağlığı, klinik uygulama, tanı, tedavi ve tıbbi araştırmaları kapsar."},

    "Dentistry": {kz:"Dentistry", ru:"Стоматология", en:"Dentistry", tr:"Diş Hekimliği"},
    "Oral health, dental surgery, prosthetics және clinical dentistry бағыттарын оқытатын сұраныстағы мамандық.": {kz:"Oral health, dental surgery, prosthetics және clinical dentistry бағыттарын оқытатын сұраныстағы мамандық.", ru:"Востребованная специальность, изучающая здоровье полости рта, стоматологическую хирургию, протезирование и клиническую стоматологию.", en:"An in-demand specialty covering oral health, dental surgery, prosthetics and clinical dentistry.", tr:"Ağız sağlığı, diş cerrahisi, protez ve klinik diş hekimliği alanlarını kapsayan talep gören bir bölümdür."},

    "Psychology": {kz:"Psychology", ru:"Психология", en:"Psychology", tr:"Psikoloji"},
    "Адам психикасы, behavior, development, research methods, counseling және mental health негіздерін қамтиды.": {kz:"Адам психикасы, behavior, development, research methods, counseling және mental health негіздерін қамтиды.", ru:"Охватывает психику человека, поведение, развитие, методы исследования, консультирование и основы ментального здоровья.", en:"Covers the human mind, behavior, development, research methods, counseling and mental health basics.", tr:"İnsan psikolojisi, davranış, gelişim, araştırma yöntemleri, danışmanlık ve ruh sağlığı temellerini kapsar."},

    "International Relations": {kz:"International Relations", ru:"Международные отношения", en:"International Relations", tr:"Uluslararası İlişkiler"},
    "Дипломатия, international politics, foreign policy, global institutions және international law бағыттарын зерттейді.": {kz:"Дипломатия, international politics, foreign policy, global institutions және international law бағыттарын зерттейді.", ru:"Изучает дипломатию, международную политику, внешнюю политику, глобальные институты и международное право.", en:"Studies diplomacy, international politics, foreign policy, global institutions and international law.", tr:"Diplomasi, uluslararası politika, dış politika, küresel kurumlar ve uluslararası hukuku inceler."},

    "Architecture": {kz:"Architecture", ru:"Архитектура", en:"Architecture", tr:"Mimarlık"},
    "Ғимарат жобалау, urban design, interior architecture, creative thinking және technical drawing бағыттарын қамтиды.": {kz:"Ғимарат жобалау, urban design, interior architecture, creative thinking және technical drawing бағыттарын қамтиды.", ru:"Охватывает проектирование зданий, городской дизайн, интерьерную архитектуру, креативное мышление и технический чертёж.", en:"Covers building design, urban design, interior architecture, creative thinking and technical drawing.", tr:"Bina tasarımı, kentsel tasarım, iç mimarlık, yaratıcı düşünme ve teknik çizimi kapsar."},

    "Bachelor / Master": {kz:"Бакалавр / Магистр", ru:"Бакалавриат / Магистратура", en:"Bachelor / Master", tr:"Lisans / Yüksek lisans"},
    "Bachelor": {kz:"Бакалавр", ru:"Бакалавриат", en:"Bachelor", tr:"Lisans"},
    "English programs available": {kz:"Ағылшын тіліндегі бағдарламалар бар", ru:"Есть программы на английском языке", en:"English programs available", tr:"İngilizce programlar mevcut"},

    "Software Developer": {kz:"Software Developer", ru:"Разработчик ПО", en:"Software Developer", tr:"Yazılım Geliştirici"},
    "AI Engineer": {kz:"AI Engineer", ru:"AI-инженер", en:"AI Engineer", tr:"Yapay Zeka Mühendisi"},
    "Web Developer": {kz:"Web Developer", ru:"Веб-разработчик", en:"Web Developer", tr:"Web Geliştirici"},
    "Data Analyst": {kz:"Data Analyst", ru:"Аналитик данных", en:"Data Analyst", tr:"Veri Analisti"},
    "ML Engineer": {kz:"ML Engineer", ru:"ML-инженер", en:"ML Engineer", tr:"Makine Öğrenmesi Mühendisi"},
    "BI Specialist": {kz:"BI Specialist", ru:"BI-специалист", en:"BI Specialist", tr:"İş Zekası Uzmanı"},
    "Manager": {kz:"Менеджер", ru:"Менеджер", en:"Manager", tr:"Yönetici"},
    "Marketing Specialist": {kz:"Маркетинг маманы", ru:"Маркетолог", en:"Marketing Specialist", tr:"Pazarlama Uzmanı"},
    "Entrepreneur": {kz:"Кәсіпкер", ru:"Предприниматель", en:"Entrepreneur", tr:"Girişimci"},
    "Economist": {kz:"Экономист", ru:"Экономист", en:"Economist", tr:"Ekonomist"},
    "Financial Analyst": {kz:"Қаржы аналитигі", ru:"Финансовый аналитик", en:"Financial Analyst", tr:"Finans Analisti"},
    "Policy Analyst": {kz:"Саясат аналитигі", ru:"Аналитик политики", en:"Policy Analyst", tr:"Politika Analisti"},
    "Doctor": {kz:"Дәрігер", ru:"Врач", en:"Doctor", tr:"Doktor"},
    "Clinical Specialist": {kz:"Клиникалық маман", ru:"Клинический специалист", en:"Clinical Specialist", tr:"Klinik Uzmanı"},
    "Researcher": {kz:"Зерттеуші", ru:"Исследователь", en:"Researcher", tr:"Araştırmacı"},
    "Dentist": {kz:"Стоматолог", ru:"Стоматолог", en:"Dentist", tr:"Diş Hekimi"},
    "Orthodontist": {kz:"Ортодонт", ru:"Ортодонт", en:"Orthodontist", tr:"Ortodontist"},
    "Dental Surgeon": {kz:"Стоматологиялық хирург", ru:"Стоматолог-хирург", en:"Dental Surgeon", tr:"Diş Cerrahı"},
    "Psychologist": {kz:"Психолог", ru:"Психолог", en:"Psychologist", tr:"Psikolog"},
    "Counselor": {kz:"Кеңесші", ru:"Консультант", en:"Counselor", tr:"Danışman"},
    "HR Specialist": {kz:"HR маманы", ru:"HR-специалист", en:"HR Specialist", tr:"İK Uzmanı"},
    "Diplomat": {kz:"Дипломат", ru:"Дипломат", en:"Diplomat", tr:"Diplomat"},
    "Policy Expert": {kz:"Саясат сарапшысы", ru:"Эксперт по политике", en:"Policy Expert", tr:"Politika Uzmanı"},
    "NGO Specialist": {kz:"ҮЕҰ маманы", ru:"Специалист НПО", en:"NGO Specialist", tr:"STK Uzmanı"},
    "Architect": {kz:"Сәулетші", ru:"Архитектор", en:"Architect", tr:"Mimar"},
    "Interior Designer": {kz:"Интерьер дизайнері", ru:"Дизайнер интерьера", en:"Interior Designer", tr:"İç Mimar"},
    "Urban Planner": {kz:"Қала жоспарлаушы", ru:"Градостроитель", en:"Urban Planner", tr:"Şehir Plancısı"},

    "Ұсынылатын университеттер:": {kz:"Ұсынылатын университеттер:", ru:"Рекомендуемые университеты:", en:"Recommended universities:", tr:"Önerilen üniversiteler:"},
    "Толық ақпарат": {kz:"Толық ақпарат", ru:"Подробнее", en:"View details", tr:"Detaylı bilgi"},
    "Ештеңе табылмады.": {kz:"Ештеңе табылмады.", ru:"Ничего не найдено.", en:"Nothing found.", tr:"Sonuç bulunamadı."},

    "Қай мамандық саған сай екенін білмей тұрсың ба?": {kz:"Қай мамандық саған сай екенін білмей тұрсың ба?", ru:"Не знаешь, какая специальность тебе подходит?", en:"Not sure which specialty suits you?", tr:"Hangi bölümün sana uygun olduğunu bilmiyor musun?"},
    "Қызығушылығың, қалауың және оқу тілі бойынша платформа саған сәйкес бағыттарды ұсына алады.": {kz:"Қызығушылығың, қалауың және оқу тілі бойынша платформа саған сәйкес бағыттарды ұсына алады.", ru:"Платформа может предложить тебе подходящие направления по интересам, предпочтениям и языку обучения.", en:"The platform can recommend suitable fields based on your interests, preferences and study language.", tr:"Platform ilgi alanlarına, tercihlerine ve eğitim diline göre sana uygun alanlar önerebilir."},
    "Recommendation алу": {kz:"Recommendation алу", ru:"Получить рекомендацию", en:"Get recommendation", tr:"Öneri al"},

    "EduBridge AI": {kz:"EduBridge AI", ru:"EduBridge AI", en:"EduBridge AI", tr:"EduBridge AI"},
    "Онлайн · Жауап береді": {kz:"Онлайн · Жауап береді", ru:"Онлайн · Отвечает", en:"Online · Responds", tr:"Çevrimiçi · Yanıtlıyor"},
    "Сәлем! Мен EduBridge AI кеңесшісімін. Түркия университеттері туралы кез-келген сұрақты қой 👋": {kz:"Сәлем! Мен EduBridge AI кеңесшісімін. Түркия университеттері туралы кез-келген сұрақты қой 👋", ru:"Привет! Я AI-консультант EduBridge. Задай любой вопрос об университетах Турции 👋", en:"Hi! I am the EduBridge AI assistant. Ask me any question about universities in Türkiye 👋", tr:"Merhaba! Ben EduBridge AI danışmanıyım. Türkiye üniversiteleri hakkında istediğin soruyu sor 👋"},
    "Сұрағыңды жаз...": {kz:"Сұрағыңды жаз...", ru:"Напиши свой вопрос...", en:"Type your question...", tr:"Sorunu yaz..."},
    "AI Кеңесші": {kz:"AI Кеңесші", ru:"AI Консультант", en:"AI Assistant", tr:"AI Danışman"}
  };

  function t(key, lang){
    return D[key] && D[key][lang] ? D[key][lang] : key;
  }

  function applyText(lang){
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if(D[key]) el.textContent = t(key, lang);
    });

    document.querySelectorAll("[placeholder]").forEach(function(el){
      var key = el.getAttribute("placeholder");
      if(D[key]) el.setAttribute("placeholder", t(key, lang));
    });

    document.querySelectorAll("[title]").forEach(function(el){
      var key = el.getAttribute("title");
      if(D[key]) el.setAttribute("title", t(key, lang));
    });

    document.querySelectorAll("span,h1,h2,h3,p,strong,a,option,button,div").forEach(function(el){
      if(el.children.length > 0) return;
      var key = el.textContent.trim().replace(/\s+/g," ");
      if(D[key]) el.textContent = t(key, lang);
    });
  }

  EduI18n.registerPage("specialties", D, function(lang){
    applyText(lang);
  });
})();