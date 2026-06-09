/* EduBridge Türkiye — Mentor page FULL i18n */
(function(){
  "use strict";

  const dict = {
    kz: {
      lang:"Тіл", home:"Басты бет", universities:"Университеттер", logout:"Шығу",
      mentorCabinet:"Ментор кабинеті", dashboard:"Бақылау панелі", students:"Студенттерім",
      consultations:"Консультациялар", profile:"Профилім",
      dashTitle:"📊 Бақылау панелі",
      dashSub:"Менің студенттерім мен консультациялар шолуы.",
      student:"Студент", pending:"Күтілуде", approved:"Расталды", uploadedFile:"Жүктелген файл",
      studentsTitle:"👥 Менің студенттерім",
      studentsSub:"Сізге тағайындалған студенттердің прогресі мен деректері.",
      consultTitle:"📅 Консультациялар", refresh:"🔄 Жаңарту",
      consultSub:"Студент өтініштері. Уақыт пен сілтеме қосып растаңыз.",
      profileTitle:"👤 Профилім", profileSub:"Өзіңіздің аккаунт деректеріңіз.",
      specialty:"Мамандық", role:"Рөл", mentorRole:"👨‍🏫 Ментор",
      studentCount:"Студент саны", contact:"Байланыс",
      noStudents:"Сізге студент тағайындалмаған.",
      assignedAdmin:"Admin бетінен тағайындалады.",
      recent:"Соңғы белсенділік",
      full:"📂 Толық →", checklist:"Чек-лист", files:"Жүктелген файлдар",
      file:"файл", request:"сұраным", confirmed:"расталды", approvedSmall:"мақұлданды",
      noConsult:"Сізге тағайындалған консультация жоқ.",
      rejected:"Қабылданбады", completed:"Өтілді",
      paidWait:"💳 Төленді · Бекіту күтілуде",
      dateTime:"📅 Кездесу күні/уақыты",
      link:"🔗 Zoom / Meet сілтемесі",
      msg:"Студентке хабарлама (міндетті емес)",
      approveTime:"✅ Уақыт бекіту", reject:"❌ Қабылдамау",
      time:"📅 Уақыт:", meetLink:"🔗 Сілтеме:",
      markComplete:"✔️ Өтілді деп белгілеу",
      close:"✕ Жабу", open:"👁️ Ашу", noData:"Деректер жоқ",
      noUploaded:"Жүктелген файл жоқ",
      noConsultReq:"Консультация сұранымы жоқ",
      aiOnline:"Онлайн · Жауап береді",
      aiHello:"Сәлем! Мен EduBridge AI кеңесшісімін. Түркия университеттері туралы кез-келген сұрақты қой 👋",
      aiPlaceholder:"Сұрағыңды жаз...",
      aiTitle:"AI Кеңесші"
    },
    ru: {
      lang:"Язык", home:"Главная", universities:"Университеты", logout:"Выйти",
      mentorCabinet:"Кабинет ментора", dashboard:"Панель управления", students:"Мои студенты",
      consultations:"Консультации", profile:"Мой профиль",
      dashTitle:"📊 Панель управления",
      dashSub:"Обзор моих студентов и консультаций.",
      student:"Студент", pending:"В ожидании", approved:"Подтверждено", uploadedFile:"Загруженный файл",
      studentsTitle:"👥 Мои студенты",
      studentsSub:"Прогресс и данные студентов, назначенных вам.",
      consultTitle:"📅 Консультации", refresh:"🔄 Обновить",
      consultSub:"Заявки студентов. Подтвердите, добавив время и ссылку.",
      profileTitle:"👤 Мой профиль", profileSub:"Данные вашего аккаунта.",
      specialty:"Специальность", role:"Роль", mentorRole:"👨‍🏫 Ментор",
      studentCount:"Количество студентов", contact:"Контакты",
      noStudents:"Вам пока не назначены студенты.",
      assignedAdmin:"Назначается через страницу Admin.",
      recent:"Последняя активность",
      full:"📂 Подробнее →", checklist:"Чек-лист", files:"Загруженные файлы",
      file:"файл", request:"заявка", confirmed:"подтверждено", approvedSmall:"одобрено",
      noConsult:"Вам не назначены консультации.",
      rejected:"Отклонено", completed:"Проведено",
      paidWait:"💳 Оплачено · Ожидает подтверждения",
      dateTime:"📅 Дата/время встречи",
      link:"🔗 Ссылка Zoom / Meet",
      msg:"Сообщение студенту (необязательно)",
      approveTime:"✅ Подтвердить время", reject:"❌ Отклонить",
      time:"📅 Время:", meetLink:"🔗 Ссылка:",
      markComplete:"✔️ Отметить как проведено",
      close:"✕ Закрыть", open:"👁️ Открыть", noData:"Нет данных",
      noUploaded:"Загруженных файлов нет",
      noConsultReq:"Заявок на консультацию нет",
      aiOnline:"Онлайн · Отвечает",
      aiHello:"Здравствуйте! Я AI-консультант EduBridge. Задайте любой вопрос об университетах Турции 👋",
      aiPlaceholder:"Напишите вопрос...",
      aiTitle:"AI Консультант"
    },
    en: {
      lang:"Language", home:"Home", universities:"Universities", logout:"Log out",
      mentorCabinet:"Mentor dashboard", dashboard:"Dashboard", students:"My students",
      consultations:"Consultations", profile:"My profile",
      dashTitle:"📊 Dashboard",
      dashSub:"Overview of my students and consultations.",
      student:"Student", pending:"Pending", approved:"Approved", uploadedFile:"Uploaded file",
      studentsTitle:"👥 My students",
      studentsSub:"Progress and details of the students assigned to you.",
      consultTitle:"📅 Consultations", refresh:"🔄 Refresh",
      consultSub:"Student requests. Confirm them by adding a time and link.",
      profileTitle:"👤 My profile", profileSub:"Your account details.",
      specialty:"Specialty", role:"Role", mentorRole:"👨‍🏫 Mentor",
      studentCount:"Number of students", contact:"Contact",
      noStudents:"No students have been assigned to you.",
      assignedAdmin:"Assigned from the Admin page.",
      recent:"Recent activity",
      full:"📂 Full details →", checklist:"Checklist", files:"Uploaded files",
      file:"file", request:"request", confirmed:"confirmed", approvedSmall:"approved",
      noConsult:"No consultations have been assigned to you.",
      rejected:"Rejected", completed:"Completed",
      paidWait:"💳 Paid · Waiting for confirmation",
      dateTime:"📅 Meeting date/time",
      link:"🔗 Zoom / Meet link",
      msg:"Message to the student (optional)",
      approveTime:"✅ Confirm time", reject:"❌ Reject",
      time:"📅 Time:", meetLink:"🔗 Link:",
      markComplete:"✔️ Mark as completed",
      close:"✕ Close", open:"👁️ Open", noData:"No data",
      noUploaded:"No uploaded files",
      noConsultReq:"No consultation requests",
      aiOnline:"Online · Replies",
      aiHello:"Hi! I am the EduBridge AI advisor. Ask me any question about universities in Türkiye 👋",
      aiPlaceholder:"Write your question...",
      aiTitle:"AI Advisor"
    },
    tr: {
      lang:"Dil", home:"Ana sayfa", universities:"Üniversiteler", logout:"Çıkış",
      mentorCabinet:"Mentor paneli", dashboard:"Kontrol paneli", students:"Öğrencilerim",
      consultations:"Danışmanlıklar", profile:"Profilim",
      dashTitle:"📊 Kontrol paneli",
      dashSub:"Öğrencilerim ve danışmanlıklarımın özeti.",
      student:"Öğrenci", pending:"Beklemede", approved:"Onaylandı", uploadedFile:"Yüklenen dosya",
      studentsTitle:"👥 Öğrencilerim",
      studentsSub:"Size atanan öğrencilerin ilerlemesi ve bilgileri.",
      consultTitle:"📅 Danışmanlıklar", refresh:"🔄 Yenile",
      consultSub:"Öğrenci talepleri. Saat ve bağlantı ekleyerek onaylayın.",
      profileTitle:"👤 Profilim", profileSub:"Hesap bilgileriniz.",
      specialty:"Uzmanlık", role:"Rol", mentorRole:"👨‍🏫 Mentor",
      studentCount:"Öğrenci sayısı", contact:"İletişim",
      noStudents:"Size henüz öğrenci atanmadı.",
      assignedAdmin:"Admin sayfasından atanır.",
      recent:"Son etkinlik",
      full:"📂 Detaylar →", checklist:"Kontrol listesi", files:"Yüklenen dosyalar",
      file:"dosya", request:"talep", confirmed:"onaylandı", approvedSmall:"onaylandı",
      noConsult:"Size atanmış danışmanlık yok.",
      rejected:"Reddedildi", completed:"Tamamlandı",
      paidWait:"💳 Ödendi · Onay bekliyor",
      dateTime:"📅 Görüşme tarihi/saati",
      link:"🔗 Zoom / Meet bağlantısı",
      msg:"Öğrenciye mesaj (isteğe bağlı)",
      approveTime:"✅ Saati onayla", reject:"❌ Reddet",
      time:"📅 Saat:", meetLink:"🔗 Bağlantı:",
      markComplete:"✔️ Tamamlandı olarak işaretle",
      close:"✕ Kapat", open:"👁️ Aç", noData:"Veri yok",
      noUploaded:"Yüklenen dosya yok",
      noConsultReq:"Danışmanlık talebi yok",
      aiOnline:"Çevrimiçi · Yanıtlar",
      aiHello:"Merhaba! Ben EduBridge AI danışmanıyım. Türkiye üniversiteleri hakkında istediğin soruyu sor 👋",
      aiPlaceholder:"Sorunu yaz...",
      aiTitle:"AI Danışmanı"
    }
  };

  const map = {
    "Тіл":"lang","Басты бет":"home","Университеттер":"universities","Шығу":"logout",
    "Ментор кабинеті":"mentorCabinet","Бақылау панелі":"dashboard","Студенттерім":"students",
    "Консультациялар":"consultations","Профилім":"profile",
    "📊 Бақылау панелі":"dashTitle",
    "Менің студенттерім мен консультациялар шолуы.":"dashSub",
    "Студент":"student","Күтілуде":"pending","Расталды":"approved","Жүктелген файл":"uploadedFile",
    "👥 Менің студенттерім":"studentsTitle",
    "Сізге тағайындалған студенттердің прогресі мен деректері.":"studentsSub",
    "📅 Консультациялар":"consultTitle","🔄 Жаңарту":"refresh",
    "Студент өтініштері. Уақыт пен сілтеме қосып растаңыз.":"consultSub",
    "👤 Профилім":"profileTitle","Өзіңіздің аккаунт деректеріңіз.":"profileSub",
    "Мамандық":"specialty","Рөл":"role","👨‍🏫 Ментор":"mentorRole",
    "Студент саны":"studentCount","Байланыс":"contact",
    "Сізге студент тағайындалмаған.":"noStudents",
    "Admin бетінен тағайындалады.":"assignedAdmin",
    "Соңғы белсенділік":"recent",
    "📂 Толық →":"full","Чек-лист":"checklist","Жүктелген файлдар":"files",
    "файл":"file","сұраным":"request","расталды":"confirmed","мақұлданды":"approvedSmall",
    "Сізге тағайындалған консультация жоқ.":"noConsult",
    "Қабылданбады":"rejected","Өтілді":"completed",
    "💳 Төленді · Бекіту күтілуде":"paidWait",
    "📅 Кездесу күні/уақыты":"dateTime",
    "🔗 Zoom / Meet сілтемесі":"link",
    "Студентке хабарлама (міндетті емес)":"msg",
    "✅ Уақыт бекіту":"approveTime","❌ Қабылдамау":"reject",
    "📅 Уақыт:":"time","🔗 Сілтеме:":"meetLink",
    "✔️ Өтілді деп белгілеу":"markComplete",
    "✕ Жабу":"close","👁️ Ашу":"open","Деректер жоқ":"noData",
    "Жүктелген файл жоқ":"noUploaded",
    "Консультация сұранымы жоқ":"noConsultReq",
    "Онлайн · Жауап береді":"aiOnline",
    "Сәлем! Мен EduBridge AI кеңесшісімін. Түркия университеттері туралы кез-келген сұрақты қой 👋":"aiHello"
  };

  function getLang(){
    return localStorage.getItem("lang") || "kz";
  }

  function tr(key){
    const l = getLang();
    return dict[l]?.[key] || dict.kz[key] || key;
  }

  function translateTextNodes(root){
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while(node = walker.nextNode()){
      const text = node.nodeValue.trim();
      if(map[text]){
        node.nodeValue = node.nodeValue.replace(text, tr(map[text]));
      }
    }
  }

  function applyMentorI18n(){
    document.documentElement.lang = getLang() === "kz" ? "kk" : getLang();

    const langLabel = document.getElementById("mentorLangLabel");
    if(langLabel) langLabel.textContent = tr("lang");

    const aiInput = document.getElementById("aiBubbleInput");
    if(aiInput) aiInput.placeholder = tr("aiPlaceholder");

    const aiBtn = document.getElementById("aiBubbleBtn");
    if(aiBtn) aiBtn.title = tr("aiTitle");

    document.querySelectorAll("input").forEach(input => {
      if(input.placeholder === "Студентке хабарлама (міндетті емес)") {
        input.placeholder = tr("msg");
      }
    });

    translateTextNodes(document.body);
  }

  window.mentorSetLang = function(lang){
    localStorage.setItem("lang", lang);
    applyMentorI18n();

    if(typeof applyTranslations === "function"){
      applyTranslations(lang);
    }
  };

  document.addEventListener("DOMContentLoaded", function(){
    // Бір рет қана аударамыз. Бұрын MutationObserver characterData-ны бақылап,
    // applyMentorI18n() мәтінді өзгерткен сайын қайта-қайта іске қосылып,
    // mentor.html қатып қалатын. Сондықтан observer алынды.
    applyMentorI18n();
  });

  window.applyMentorI18n = applyMentorI18n;
})();