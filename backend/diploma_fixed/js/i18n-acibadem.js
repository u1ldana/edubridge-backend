/* i18n-acibadem.js */
(function () {
    const D = {
      "Acıbadem University": {
        kz: "Acıbadem University",
        ru: "Университет Acıbadem",
        en: "Acıbadem University",
        tr: "Acıbadem Üniversitesi"
      },
  
      "Istanbul, Türkiye · Private Medical University · English / Turkish programs": {
        kz: "Istanbul, Türkiye · Жеке медициналық университет · Ағылшын / Түрік бағдарламалары",
        ru: "Стамбул, Турция · Частный медицинский университет · Программы на английском / турецком языках",
        en: "Istanbul, Türkiye · Private Medical University · English / Turkish programs",
        tr: "İstanbul, Türkiye · Özel Tıp Üniversitesi · İngilizce / Türkçe programlar"
      },
  
      "Acıbadem University — медицина, фармацевтика, денсаулық сақтау ғылымдары және биомедициналық бағыттарға маманданған Түркиядағы жетекші жеке медициналық университеттердің бірі.": {
        kz: "Acıbadem University — медицина, фармацевтика, денсаулық сақтау ғылымдары және биомедициналық бағыттарға маманданған Түркиядағы жетекші жеке медициналық университеттердің бірі.",
        ru: "Acıbadem University — один из ведущих частных медицинских университетов Турции, специализирующийся на медицине, фармацевтике, науках о здоровье и биомедицинских направлениях.",
        en: "Acıbadem University is one of Türkiye’s leading private medical universities specializing in medicine, pharmacy, health sciences and biomedical fields.",
        tr: "Acıbadem Üniversitesi; tıp, eczacılık, sağlık bilimleri ve biyomedikal alanlarda uzmanlaşmış Türkiye’nin önde gelen özel tıp üniversitelerinden biridir."
      },
  
      "Istanbul, Türkiye": {
        kz: "Istanbul, Türkiye",
        ru: "Стамбул, Турция",
        en: "Istanbul, Türkiye",
        tr: "İstanbul, Türkiye"
      },
  
      "Private Medical University": {
        kz: "Жеке медициналық университет",
        ru: "Частный медицинский университет",
        en: "Private Medical University",
        tr: "Özel Tıp Üniversitesi"
      },
  
      "English / Turkish": {
        kz: "Ағылшын / Түрік",
        ru: "Английский / Турецкий",
        en: "English / Turkish",
        tr: "İngilizce / Türkçe"
      },
  
      "Бағыты": {
        kz: "Бағыты",
        ru: "Направление",
        en: "Field",
        tr: "Alan"
      },
  
      "Medicine & Health Sciences": {
        kz: "Медицина және денсаулық сақтау ғылымдары",
        ru: "Медицина и науки о здоровье",
        en: "Medicine & Health Sciences",
        tr: "Tıp ve Sağlık Bilimleri"
      },
  
      "Acıbadem — медицинадағы инновация және сапа": {
        kz: "Acıbadem — медицинадағы инновация және сапа",
        ru: "Acıbadem — инновации и качество в медицине",
        en: "Acıbadem — innovation and quality in medicine",
        tr: "Acıbadem — tıpta inovasyon ve kalite"
      },
  
      "Acıbadem Üniversitesi — 2007 жылы Acıbadem денсаулық сақтау және білім беру қоры тарапынан құрылған жеке медициналық университет. Университет медициналық білім беру, клиникалық тәжірибе, зерттеу және заманауи симуляциялық оқыту бағыттарымен ерекшеленеді.": {
        kz: "Acıbadem Üniversitesi — 2007 жылы Acıbadem денсаулық сақтау және білім беру қоры тарапынан құрылған жеке медициналық университет. Университет медициналық білім беру, клиникалық тәжірибе, зерттеу және заманауи симуляциялық оқыту бағыттарымен ерекшеленеді.",
        ru: "Acıbadem Üniversitesi — частный медицинский университет, основанный в 2007 году Фондом здравоохранения и образования Acıbadem. Университет выделяется медицинским образованием, клинической практикой, исследованиями и современным симуляционным обучением.",
        en: "Acıbadem University is a private medical university founded in 2007 by the Acıbadem Health and Education Foundation. The university stands out for medical education, clinical practice, research and modern simulation-based learning.",
        tr: "Acıbadem Üniversitesi, 2007 yılında Acıbadem Sağlık ve Eğitim Vakfı tarafından kurulan özel bir tıp üniversitesidir. Üniversite tıp eğitimi, klinik uygulama, araştırma ve modern simülasyon temelli eğitim alanlarıyla öne çıkar."
      },
  
      "Университет құрамында 4 факультет, 2 кәсіби мектеп, 5 зерттеу орталығы және әлемдік деңгейдегі медициналық симуляция орталығы — CASE бар.": {
        kz: "Университет құрамында 4 факультет, 2 кәсіби мектеп, 5 зерттеу орталығы және әлемдік деңгейдегі медициналық симуляция орталығы — CASE бар.",
        ru: "В составе университета есть 4 факультета, 2 профессиональные школы, 5 исследовательских центров и медицинский симуляционный центр мирового уровня — CASE.",
        en: "The university includes 4 faculties, 2 vocational schools, 5 research centers and a world-class medical simulation center — CASE.",
        tr: "Üniversitede 4 fakülte, 2 meslek yüksekokulu, 5 araştırma merkezi ve dünya standartlarında bir tıbbi simülasyon merkezi — CASE bulunmaktadır."
      },
  
      "Acıbadem кімдерге қолайлы?": {
        kz: "Acıbadem кімдерге қолайлы?",
        ru: "Кому подходит Acıbadem?",
        en: "Who is Acıbadem suitable for?",
        tr: "Acıbadem kimler için uygundur?"
      },
  
      "Медицина саласында сапалы әрі практикалық білім алғысы келетін студенттерге": {
        kz: "Медицина саласында сапалы әрі практикалық білім алғысы келетін студенттерге",
        ru: "Студентам, которые хотят получить качественное и практическое медицинское образование",
        en: "For students who want high-quality and practical medical education",
        tr: "Kaliteli ve uygulamalı tıp eğitimi almak isteyen öğrenciler için"
      },
  
      "Ағылшын тілінде беделді медициналық университетте оқығысы келетіндерге": {
        kz: "Ағылшын тілінде беделді медициналық университетте оқығысы келетіндерге",
        ru: "Тем, кто хочет учиться на английском языке в престижном медицинском университете",
        en: "For those who want to study in English at a prestigious medical university",
        tr: "Prestijli bir tıp üniversitesinde İngilizce eğitim almak isteyenler için"
      },
  
      "Клиникада тәжірибе және стажировка мүмкіндігін іздейтіндерге": {
        kz: "Клиникада тәжірибе және стажировка мүмкіндігін іздейтіндерге",
        ru: "Тем, кто ищет клиническую практику и стажировки",
        en: "For those seeking clinical practice and internship opportunities",
        tr: "Klinik deneyim ve staj fırsatları arayanlar için"
      },
  
      "Заманауи технологиялармен оқуды қалайтын студенттерге": {
        kz: "Заманауи технологиялармен оқуды қалайтын студенттерге",
        ru: "Студентам, которые хотят учиться с современными технологиями",
        en: "For students who want to study with modern technologies",
        tr: "Modern teknolojilerle eğitim almak isteyen öğrenciler için"
      },
  
      "Оқу кезінде жайлы кампус және жатақхана жағдайын қалайтындарға": {
        kz: "Оқу кезінде жайлы кампус және жатақхана жағдайын қалайтындарға",
        ru: "Тем, кому важны комфортный кампус и условия общежития",
        en: "For those who want a comfortable campus and dormitory conditions",
        tr: "Rahat kampüs ve yurt imkânları isteyenler için"
      },
  
      "Неге Acıbadem University?": {
        kz: "Неге Acıbadem University?",
        ru: "Почему Acıbadem University?",
        en: "Why Acıbadem University?",
        tr: "Neden Acıbadem Üniversitesi?"
      },
  
      "Түркиядағы мықты медициналық университеттердің бірі": {
        kz: "Түркиядағы мықты медициналық университеттердің бірі",
        ru: "Один из сильнейших медицинских университетов Турции",
        en: "One of the strongest medical universities in Türkiye",
        tr: "Türkiye’nin güçlü tıp üniversitelerinden biri"
      },
  
      "Acıbadem Healthcare Group клиникаларымен байланыс": {
        kz: "Acıbadem Healthcare Group клиникаларымен байланыс",
        ru: "Связь с клиниками Acıbadem Healthcare Group",
        en: "Connection with Acıbadem Healthcare Group hospitals",
        tr: "Acıbadem Sağlık Grubu hastaneleriyle bağlantı"
      },
  
      "Заманауи медициналық симуляция орталығы — CASE": {
        kz: "Заманауи медициналық симуляция орталығы — CASE",
        ru: "Современный медицинский симуляционный центр — CASE",
        en: "Modern medical simulation center — CASE",
        tr: "Modern tıbbi simülasyon merkezi — CASE"
      },
  
      "Клиникалық тәжірибе және internship мүмкіндіктері": {
        kz: "Клиникалық тәжірибе және internship мүмкіндіктері",
        ru: "Клиническая практика и возможности стажировки",
        en: "Clinical practice and internship opportunities",
        tr: "Klinik uygulama ve staj imkânları"
      },
  
      "Медицина, фармация, инженерия және health sciences бағыттары": {
        kz: "Медицина, фармация, инженерия және health sciences бағыттары",
        ru: "Направления медицины, фармации, инженерии и наук о здоровье",
        en: "Medicine, pharmacy, engineering and health sciences fields",
        tr: "Tıp, eczacılık, mühendislik ve sağlık bilimleri alanları"
      },
  
      "Халықаралық студенттерге қолайлы академиялық орта": {
        kz: "Халықаралық студенттерге қолайлы академиялық орта",
        ru: "Удобная академическая среда для иностранных студентов",
        en: "A supportive academic environment for international students",
        tr: "Uluslararası öğrenciler için uygun akademik ortam"
      },
  
      "Founder: Mehmet Ali Aydınlar": {
        kz: "Негізін қалаушы: Mehmet Ali Aydınlar",
        ru: "Основатель: Mehmet Ali Aydınlar",
        en: "Founder: Mehmet Ali Aydınlar",
        tr: "Kurucu: Mehmet Ali Aydınlar"
      },
  
      "Acıbadem Healthcare Group негізін қалаған Mehmet Ali Aydınlar шағын жеке клиниканы халықаралық медициналық желіге айналдырды. Бүгінде Acıbadem Healthcare Group құрамында 24 аурухана және 16 медициналық орталық бар.": {
        kz: "Acıbadem Healthcare Group негізін қалаған Mehmet Ali Aydınlar шағын жеке клиниканы халықаралық медициналық желіге айналдырды. Бүгінде Acıbadem Healthcare Group құрамында 24 аурухана және 16 медициналық орталық бар.",
        ru: "Основатель Acıbadem Healthcare Group Mehmet Ali Aydınlar превратил небольшую частную клинику в международную медицинскую сеть. Сегодня в составе Acıbadem Healthcare Group 24 больницы и 16 медицинских центров.",
        en: "Mehmet Ali Aydınlar, founder of Acıbadem Healthcare Group, transformed a small private clinic into an international healthcare network. Today, Acıbadem Healthcare Group includes 24 hospitals and 16 medical centers.",
        tr: "Acıbadem Sağlık Grubu’nun kurucusu Mehmet Ali Aydınlar, küçük bir özel kliniği uluslararası bir sağlık ağına dönüştürdü. Bugün Acıbadem Sağlık Grubu bünyesinde 24 hastane ve 16 tıp merkezi bulunmaktadır."
      },
  
      "Медициналық кадрларды сапалы дайындау қажеттілігін түсініп, ол 2007 жылы Acıbadem University негізін қалады. Университет бүгінде медициналық инновация, клиникалық тәжірибе және сапалы білім беру орталығы ретінде дамып келеді.": {
        kz: "Медициналық кадрларды сапалы дайындау қажеттілігін түсініп, ол 2007 жылы Acıbadem University негізін қалады. Университет бүгінде медициналық инновация, клиникалық тәжірибе және сапалы білім беру орталығы ретінде дамып келеді.",
        ru: "Понимая необходимость качественной подготовки медицинских кадров, он основал Acıbadem University в 2007 году. Сегодня университет развивается как центр медицинских инноваций, клинической практики и качественного образования.",
        en: "Understanding the need for high-quality training of medical professionals, he founded Acıbadem University in 2007. Today, the university is developing as a center of medical innovation, clinical practice and quality education.",
        tr: "Nitelikli sağlık profesyonelleri yetiştirme ihtiyacını gören Mehmet Ali Aydınlar, 2007 yılında Acıbadem Üniversitesini kurdu. Üniversite bugün tıbbi inovasyon, klinik uygulama ve kaliteli eğitimin merkezi olarak gelişmektedir."
    },

    "Аккредитациялар": {
        kz: "Аккредитациялар",
        ru: "Аккредитации",
        en: "Accreditations",
        tr: "Akreditasyonlar"
    },

    "CASE Simulation Center — NASCE тарапынан танылған медициналық симуляция орталығы.": {
        kz: "CASE Simulation Center — NASCE тарапынан танылған медициналық симуляция орталығы.",
        ru: "CASE Simulation Center — медицинский симуляционный центр, признанный NASCE.",
        en: "CASE Simulation Center is a medical simulation center recognized by NASCE.",
        tr: "CASE Simülasyon Merkezi, NASCE tarafından tanınan bir tıbbi simülasyon merkezidir."
    },
  
    "EAQUALS — ағылшын дайындық бағдарламасының сапасын көрсететін халықаралық аккредитация.": {
        kz: "EAQUALS — ағылшын дайындық бағдарламасының сапасын көрсететін халықаралық аккредитация.",
        ru: "EAQUALS — международная аккредитация, подтверждающая качество программы английской подготовки.",
        en: "EAQUALS is an international accreditation showing the quality of the English preparatory program.",
        tr: "EAQUALS, İngilizce hazırlık programının kalitesini gösteren uluslararası bir akreditasyondur."
    },

    "TEPDAD & UTEAK — медицина факультетінің білім беру сапасын растайтын аккредитациялар.": {
        kz: "TEPDAD & UTEAK — медицина факультетінің білім беру сапасын растайтын аккредитациялар.",
        ru: "TEPDAD & UTEAK — аккредитации, подтверждающие качество образования медицинского факультета.",
        en: "TEPDAD & UTEAK are accreditations confirming the educational quality of the Faculty of Medicine.",
        tr: "TEPDAD ve UTEAK, Tıp Fakültesinin eğitim kalitesini doğrulayan akreditasyonlardır."
      },
  
      "Acıbadem Healthcare Group": {
        kz: "Acıbadem Healthcare Group",
        ru: "Acıbadem Healthcare Group",
        en: "Acıbadem Healthcare Group",
        tr: "Acıbadem Sağlık Grubu"
      },
  
      "Acıbadem Healthcare Group — Түркиядағы және халықаралық деңгейдегі ірі медициналық желілердің бірі. Университет студенттері үшін бұл үлкен клиникалық база және тәжірибе мүмкіндігі болып саналады.": {
        kz: "Acıbadem Healthcare Group — Түркиядағы және халықаралық деңгейдегі ірі медициналық желілердің бірі. Университет студенттері үшін бұл үлкен клиникалық база және тәжірибе мүмкіндігі болып саналады.",
        ru: "Acıbadem Healthcare Group — одна из крупнейших медицинских сетей Турции и международного уровня. Для студентов университета это большая клиническая база и возможность получить практический опыт.",
        en: "Acıbadem Healthcare Group is one of the largest healthcare networks in Türkiye and internationally. For university students, it serves as a major clinical base and practical training opportunity.",
        tr: "Acıbadem Sağlık Grubu, Türkiye’de ve uluslararası düzeyde en büyük sağlık ağlarından biridir. Üniversite öğrencileri için büyük bir klinik altyapı ve uygulama imkânı sunar."
      },
  
      "Exchange Programs": {
        kz: "Алмасу бағдарламалары",
        ru: "Программы обмена",
        en: "Exchange Programs",
        tr: "Değişim Programları"
      },
  
      "Erasmus+ partner universities": {
        kz: "Erasmus+ серіктес университеттері",
        ru: "Партнёрские университеты Erasmus+",
        en: "Erasmus+ partner universities",
        tr: "Erasmus+ partner üniversiteleri"
      },
  
      "Global Exchange countries": {
        kz: "Global Exchange елдері",
        ru: "Страны Global Exchange",
        en: "Global Exchange countries",
        tr: "Global Exchange ülkeleri"
      },
  
      "Жатақхана": {
        kz: "Жатақхана",
        ru: "Общежитие",
        en: "Accommodation",
        tr: "Yurt"
      },
  
      "Acıbadem University студенттерге жайлы жатақхана ұсынады. Бөлмелердің бірнеше түрі бар: бір орындық, екі орындық және төрт орындық бөлмелер.": {
        kz: "Acıbadem University студенттерге жайлы жатақхана ұсынады. Бөлмелердің бірнеше түрі бар: бір орындық, екі орындық және төрт орындық бөлмелер.",
        ru: "Acıbadem University предлагает студентам комфортное общежитие. Доступны разные типы комнат: одноместные, двухместные и четырёхместные.",
        en: "Acıbadem University offers comfortable accommodation for students. Several room types are available: single, double and four-person rooms.",
        tr: "Acıbadem Üniversitesi öğrencilere konforlu yurt imkânı sunar. Tek kişilik, iki kişilik ve dört kişilik oda seçenekleri bulunmaktadır."
      },
  
      "Бір орындық бөлме: $7,300–$9,000 / 9 ай": {
        kz: "Бір орындық бөлме: $7,300–$9,000 / 9 ай",
        ru: "Одноместная комната: $7,300–$9,000 / 9 месяцев",
        en: "Single room: $7,300–$9,000 / 9 months",
        tr: "Tek kişilik oda: $7,300–$9,000 / 9 ay"
      },
  
      "Екі орындық бөлме: $5,600–$6,700 / 9 ай": {
        kz: "Екі орындық бөлме: $5,600–$6,700 / 9 ай",
        ru: "Двухместная комната: $5,600–$6,700 / 9 месяцев",
        en: "Double room: $5,600–$6,700 / 9 months",
        tr: "İki kişilik oda: $5,600–$6,700 / 9 ay"
      },
  
      "Төрт орындық бөлме: $5,000 / 9 ай": {
        kz: "Төрт орындық бөлме: $5,000 / 9 ай",
        ru: "Четырёхместная комната: $5,000 / 9 месяцев",
        en: "Four-person room: $5,000 / 9 months",
        tr: "Dört kişilik oda: $5,000 / 9 ay"
      },
  
      "Депозит: $420": {
        kz: "Депозит: $420",
        ru: "Депозит: $420",
        en: "Deposit: $420",
        tr: "Depozito: $420"
      },
  
      "Жатақхана қызметтері": {
        kz: "Жатақхана қызметтері",
        ru: "Услуги общежития",
        en: "Dormitory services",
        tr: "Yurt hizmetleri"
      },
  
      "Қысқаша ақпарат": {
        kz: "Қысқаша ақпарат",
        ru: "Краткая информация",
        en: "Quick information",
        tr: "Kısa bilgi"
      },
  
      "Қала:": {
        kz: "Қала:",
        ru: "Город:",
        en: "City:",
        tr: "Şehir:"
      },
  
      "Түрі:": {
        kz: "Түрі:",
        ru: "Тип:",
        en: "Type:",
        tr: "Tür:"
      },
  
      "Тілі:": {
        kz: "Тілі:",
        ru: "Язык:",
        en: "Language:",
        tr: "Dil:"
      },
  
      "Негізгі бағыт:": {
        kz: "Негізгі бағыт:",
        ru: "Основное направление:",
        en: "Main field:",
        tr: "Ana alan:"
      },
  
      "Medicine": {
        kz: "Медицина",
        ru: "Медицина",
        en: "Medicine",
        tr: "Tıp"
      },
  
      "Негізгі артықшылықтар": {
        kz: "Негізгі артықшылықтар",
        ru: "Основные преимущества",
        en: "Key advantages",
        tr: "Temel avantajlar"
      },
  
      "Clinical practice": {
        kz: "Клиникалық тәжірибе",
        ru: "Клиническая практика",
        en: "Clinical practice",
        tr: "Klinik uygulama"
      },
  
      "Medical innovation": {
        kz: "Медициналық инновация",
        ru: "Медицинские инновации",
        en: "Medical innovation",
        tr: "Tıbbi inovasyon"
      },
  
      "International exchange": {
        kz: "Халықаралық алмасу",
        ru: "Международный обмен",
        en: "International exchange",
        tr: "Uluslararası değişim"
      },
  
      "Әрекеттер": {
        kz: "Әрекеттер",
        ru: "Действия",
        en: "Actions",
        tr: "İşlemler"
      },
  
      "© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.": {
        kz: "© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.",
        ru: "© 2026 EduBridge Türkiye. Все права защищены.",
        en: "© 2026 EduBridge Türkiye. All rights reserved.",
        tr: "© 2026 EduBridge Türkiye. Tüm hakları saklıdır."
      }
    };
  
    function lang() {
      return localStorage.getItem("lang") || "kz";
    }
  
    function norm(s) {
      return String(s || "").trim().replace(/\s+/g, " ");
    }
  
    function translate(key) {
      const l = lang();
      return D[key]?.[l] || key;
    }
  
    function applyAcibademI18n() {
      const l = lang();
      document.documentElement.lang = l;
      document.title = translate("Acıbadem University") + " | EduBridge Türkiye";
  
      document.querySelectorAll("h1,h2,h3,p,li,span,strong,a,button,div").forEach((el) => {
        if (el.children.length > 0) return;
  
        const key = norm(el.textContent);
        if (D[key]) el.textContent = translate(key);
      });
  
      document.querySelectorAll("[title]").forEach((el) => {
        const key = norm(el.getAttribute("title"));
        if (D[key]) el.setAttribute("title", translate(key));
      });
  
      document.querySelectorAll("[placeholder]").forEach((el) => {
        const key = norm(el.getAttribute("placeholder"));
        if (D[key]) el.setAttribute("placeholder", translate(key));
      });
    }
  
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(applyAcibademI18n, 100);
    });
  
    window.addEventListener("languageChanged", applyAcibademI18n);
  
    const oldSetLang = window.setLang;
    window.setLang = function (l) {
      localStorage.setItem("lang", l);
  
      if (typeof oldSetLang === "function") {
        oldSetLang(l);
      }
  
      setTimeout(applyAcibademI18n, 80);
      window.dispatchEvent(new Event("languageChanged"));
    };
  })();