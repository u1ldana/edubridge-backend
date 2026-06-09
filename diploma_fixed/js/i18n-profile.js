
(function () {
  "use strict";
 
  // ════════════════════════════════════════════════════════════════
  // HELPERS
  // ════════════════════════════════════════════════════════════════
  function lang() {
    const l = (localStorage.getItem("lang") || "kz").toLowerCase();
    return l === "kk" ? "kz" : ["kz", "ru", "en", "tr"].includes(l) ? l : "kz";
  }
 
  function t(key) {
    return D[lang()]?.[key] || D.kz[key] || key;
  }
 
  // profile-backend.js үшін де жұмыс істейтін helper
  window.pLang = function () { return lang(); };
  window.pT = function (obj) { return obj?.[lang()] || obj?.kz || ""; };
 
  // ════════════════════════════════════════════════════════════════
  // TRANSLATIONS
  // ════════════════════════════════════════════════════════════════
  const D = {
    kz: {
      // Nav
      "nav-home": "Басты бет", "nav-specialties": "Мамандықтар",
      "nav-universities": "Университеттер", "nav-preparation": "Дайындық",
      "nav-feed": "Лента", "nav-language": "Тіл",
      "nav-profile": "Профиль", "nav-logout": "Шығу",
      "header-login": "Кіру",
      "✅ Төлем қабылданды! Консультация сұранымы жіберілді.": "toast-payment-ok",
      "✅ Оплата принята! Запрос на консультацию отправлен.": "toast-payment-ok",
      "✅ Payment accepted! Consultation request sent.": "toast-payment-ok",
      "✅ Ödeme kabul edildi! Danışmanlık talebi gönderildi.": "toast-payment-ok",
      "✅ Stripe арқылы төлем өтті! Консультация жіберілді.": "toast-payment-ok",
      "✅ Дедлайн қосылды және email-ға жіберілді": "toast-deadline-ok",
      "✅ Дедлайн добавлен и отправлен на email": "toast-deadline-ok",
      "✅ Deadline added and sent to email": "toast-deadline-ok",
      "✅ Son tarih eklendi ve e-posta gönderildi": "toast-deadline-ok",
      "⚠️ Алдымен сұрағыңды жаз!": "toast-warn-question",
      "⚠️ Сначала напишите вопрос!": "toast-warn-question",
      "⚠️ Please write your question first!": "toast-warn-question",
      "⚠️ Önce sorunuzu yazın!": "toast-warn-question",
      "⚠️ Өткен күнді таңдауға болмайды!": "toast-warn-date",
      "⚠️ Нельзя выбрать прошедшую дату!": "toast-warn-date",
      "⚠️ You cannot select a past date!": "toast-warn-date",
      "⚠️ Geçmiş bir tarih seçilemez!": "toast-warn-date",
      "⚠️ Белсенді консультация бар. Алдыңғысы аяқталсын.": "toast-warn-active",
      "⚠️ У вас уже есть активная консультация. Дождитесь завершения предыдущей.": "toast-warn-active",
      "⚠️ You already have an active consultation. Please wait until the previous one is completed.": "toast-warn-active",
      "⚠️ Aktif bir danışmanlığınız var. Önceki danışmanlığın tamamlanmasını bekleyin.": "toast-warn-active",
    
      // Sidebar menu
      "pro-menu-overview": "Шолу", "pro-menu-edit": "Профильді өзгерту",
      "pro-menu-consult": "Консультациялар", "pro-menu-docs": "Құжаттар",
      "pro-menu-unis": "Таңдаулы университеттер",
      "pro-menu-tasks": "✅ Тапсырмалар",
      "pro-menu-notifications": "🔔 Ескертулер",
      "pro-menu-deadlines": "Дедлайндар", "pro-menu-notes": "Жазбалар",
 
      // Account
      "pro-acc-status": "Аккаунт статусы", "pro-acc-active": "Белсенді",
      "pro-acc-plan": "Жоспар", "pro-acc-plan-val": "Студент кабинеті",
 
      // Overview
      "pro-dashboard": "Басқару панелі",
      "pro-welcome": "Қош келдің,", "pro-welcome-student": "студент",
      "pro-welcome-desc": "Мұнда сенің таңдаулы университеттерің, құжаттарың, дедлайндарың, консультацияларың және дайындық прогресің бір жерде сақталады.",
 
      // Stats
      "pro-stat-unis": "Таңдаулы университет",
      "pro-stat-docs": "Құжат прогресі",
      "pro-stat-consult": "Консультация",
      "pro-stat-progress": "Жалпы прогресс",
 
      // Preparation
      "pro-prep-progress": "📋 Дайындық прогресі",
      "pro-prep-link": "Дайындыққа өту →",
      "pro-prep-nav": "Дайындық",
      "prep-checklist": "Чек-лист",
      "prep-uploaded": "Жүктелген файлдар",
      "prep-approved": "Админ қабылдады",
      "prep-checklist-pct": "Чек-лист прогресі",
      "prep-uploaded-pct": "Файл прогресі",
      "prep-page-link": "Дайындық беті",
      "prep-go-hint": "💡 Дайындық бетіне өтіп файлдарыңызды жүктеңіз.",
 
      // Edit profile
      "pro-edit-title": "Профиль ақпаратын өзгерту",
      "pro-editable": "Өзгертуге болады",
      "pro-field-name": "Атыңыз", "pro-field-city": "Қала",
      "pro-field-major": "Қызығатын бағыт", "pro-field-goal": "Мақсат",
      "pro-phone": "📱 Телефон", "pro-country": "🌍 Ел",
      "pro-english": "🗣️ Ағылшын деңгейі",
      "pro-budget": "💰 Жылдық бюджет ($)",
      "pro-choose": "Таңдаңыз",
      "level-a1": "A1 — Бастауыш", "level-a2": "A2 — Элементарлы",
      "level-b1": "B1 — Орташа", "level-b2": "B2 — Орташадан жоғары",
      "level-c1": "C1 — Жетілдірілген", "level-c2": "C2 — Кәсіби",
      "pro-save-btn": "💾 Сақтау",
      "pro-fill-example": "Мысалмен толтыру",
      "pro-clear-btn": "Тазалау",
      "pro-reset-full": "Профильді тазалау",
 
      // Password
      "pass-title": "🔐 Парольді өзгерту",
      "pass-old": "Ескі пароль", "pass-new": "Жаңа пароль",
      "pass-confirm": "Растау", "pass-btn": "🔐 Парольді өзгерту",
 
      // Consultations
      "pro-consult-title": "Консультациялар",
      "consult-request": "📅 Консультация сұрату",
      "consult-price": "💳 5 000 ₸ / сессия",
      "consult-topic": "Тақырып", "consult-date": "Ыңғайлы күн",
      "consult-question": "Сұрағыңды жаз",
      "topic-uni": "Университет таңдау",
      "topic-grant": "Грант стратегиясы",
      "topic-docs": "Құжат тексеру",
      "topic-interview": "Сұхбатқа дайындық",
      "topic-motivation": "Мотивациялық хат",
      "topic-visa": "Виза мәселесі",
      "topic-other": "Басқа сұрақ",
      "consult-pay-btn": "💳 Төлеп консультация сұрату — 5 000 ₸",
      "pay-title": "💳 Консультацияға төлем",
      "pay-desc": "Stripe арқылы қауіпсіз төлем. Төлем өткеннен кейін өтінімің менторға жіберіледі.",
      "pay-session": "Консультация сессиясы",
      "pay-fee": "Комиссия", "pay-total": "Жалпы",
      "pay-card": "Карта деректері",
      "pay-btn": "✅ 5 000 ₸ Төлеу",
      "pay-processing": "⏳ Өңделуде...",
      "pro-payment-cancel": "Болдырмау",
      "pay-secure": "🔒 Stripe арқылы қорғалған төлем",
 
      // Consult statuses
      "consult-paid-pending": "Төленді · Ментор тексеруде",
      "consult-assigned": "Ментор тағайындалды",
      "consult-approved": "Бекітілді ✓",
      "consult-rejected": "Қабылданбады",
      "consult-pending": "Күтуде",
      "consult-meeting-time": "Кездесу уақыты",
      "consult-meeting-link": "Сілтеме",
      "consult-mentor-msg": "Ментор хабарламасы",
 
      // Deadlines
      "pro-deadlines-title": "Дедлайндар",
      "deadline-title": "Атауы", "deadline-date": "Күні",
      "deadline-note": "Ескерту",
      "pro-deadline-add": "Дедлайн қосу",
 
      // Progress
      "pro-app-progress": "Өтінім прогресі",
      "progress-profile": "Профиль толтыру",
      "progress-docs": "Құжаттар дайын",
      "progress-uni": "Университет таңдау",
      "progress-deadline": "Дедлайн бақылау",
      "progress-tasks": "Тапсырмалар орындалуы",
 
      // Documents
      "pro-docs-title": "Құжаттар", "reset": "Қалпына келтіру",
      "doc-pending": "Күтуде", "doc-approved": "Қабылданды",
      "doc-rejected": "Қабылданбады", "doc-uploaded": "Жүктелді",
      "doc-passport": "Паспорт",
      "doc-passport-desc": "Жарамды паспорт көшірмесі",
      "doc-attestat": "Аттестат",
      "doc-attestat-desc": "Мектеп бітіргенін растайтын құжат",
      "doc-transcript": "Бағалар тізімі",
      "doc-transcript-desc": "Transcript немесе бағалар тізімі",
      "doc-motivation": "Мотивациялық хат",
      "doc-motivation-desc": "Стипендия/университет үшін мотивациялық хат",
      "doc-recommendation": "Ұсыныс хат",
      "doc-recommendation-desc": "Мұғалім немесе ментор ұсынысы",
      "doc-cv": "CV / Резюме",
      "doc-cv-desc": "Жетістік, тіл, тәжірибе, жобалар",
 
      // Notes
      "pro-notes-title": "Жеке жазбалар",
      "note-title": "Тақырып", "note-category": "Категория",
      "note-text": "Мәтін", "note-save": "Жазба сақтау",
      "cat-doc": "Құжат", "cat-uni": "Университет",
      "cat-grant": "Грант", "prep-interview": "Сұхбат",
 
      // Universities
      "pro-unis-title": "Таңдаулы университеттер",
      "add-more": "Тағы қосу",
      "uni-label": "Университет", "uni-note": "Ескерту",
      "uni-add": "Университет қосу",
      "uni-delete": "Өшіру", "uni-city-label": "Қала",
 
      // Tasks
      "tasks-title": "✅ Тапсырмалар (Next Steps)",
      "task-label": "Тапсырма", "task-date": "Мерзімі",
      "task-priority": "Маңыздылық",
      "priority-high": "🔴 Жоғары",
      "priority-normal": "🟡 Орта",
      "priority-low": "🟢 Төмен",
      "task-add": "Тапсырма қосу",
 
      // Notifications
      "notif-title": "🔔 Ескертулер",
      "admin-refresh-btn": "Жаңарту",
 
      // Empty states
      "no-consult": "Консультация сұранымы жоқ. Жоғарыдан сұратыңыз.",
      "no-deadline": "Әзірге дедлайн жоқ.",
      "no-note": "Әзірге жазба жоқ.",
      "no-task": "Тапсырмалар жоқ. Жаңа тапсырма қос.",
      "no-notif": "Ескертулер жоқ.",
 
      // Quick actions
      "pro-quick-actions": "Жылдам әрекеттер",
      "qa-unis": "Университеттер", "qa-prep": "Дайындық",
      "qa-career": "Career Test", "qa-feed": "Лента",
 
      // Footer
      "footer-text": "© 2026 EduBridge Türkiye. Барлық құқықтар қорғалған.",
      "footer-contact": "Байланыс",
 
      // Toast
      "toast-saved": "Сақталды",
 
      // AI
      "ai-online": "Онлайн · Жауап береді",
      "ai-hello": "Сәлем! Мен EduBridge AI кеңесшісімін. Түркия университеттері туралы кез-келген сұрақты қой 👋",
      "ai-placeholder": "Сұрағыңды жаз...",
      "ai-title": "AI Кеңесші",
 
      // Career test
      "career-result": "🧠 Career Test нәтижесі:",
 
      // Placeholders
      "ph-goal": "Мысалы: Түркияда грантқа түсу, жақсы университет таңдау...",
      "ph-country": "Қазақстан",
      "ph-pass-new": "Кем дегенде 6 символ",
      "ph-pass-confirm": "Қайталаңыз",
      "ph-consult": "Мысалы: Sabancı University-ге құжаттарды қалай дайындаймын?",
      "ph-deadline-note": "Қандай құжат керек?",
      "ph-note": "Жазба...",
      "ph-uni-note": "Engineering мықты, English program бар...",
      "ph-task": "Мысалы: IELTS тапсыру",
 
      // Toast messages
      "toast-payment-ok": "✅ Төлем қабылданды! Консультация сұранымы жіберілді.",
      "toast-deadline-ok": "✅ Дедлайн қосылды және email-ға жіберілді",
      "toast-deadline-err": "❌ Дедлайн email жіберілмеді",
      "toast-warn-question": "⚠️ Алдымен сұрағыңды жаз!",
      "toast-warn-date": "⚠️ Өткен күнді таңдауға болмайды!",
      "toast-warn-active": "⚠️ Белсенді консультация бар. Алдыңғысы аяқталсын.",
      "email-sent-label": "Email жіберілді",
    },
 
    ru: {
      "nav-home": "Главная", "nav-specialties": "Специальности",
      "nav-universities": "Университеты", "nav-preparation": "Подготовка",
      "nav-feed": "Лента", "nav-language": "Язык",
      "nav-profile": "Профиль", "nav-logout": "Выйти",
      "header-login": "Войти",
 
      "pro-menu-overview": "Обзор", "pro-menu-edit": "Редактировать профиль",
      "pro-menu-consult": "Консультации", "pro-menu-docs": "Документы",
      "pro-menu-unis": "Избранные университеты",
      "pro-menu-tasks": "✅ Задачи",
      "pro-menu-notifications": "🔔 Уведомления",
      "pro-menu-deadlines": "Дедлайны", "pro-menu-notes": "Заметки",
 
      "pro-acc-status": "Статус аккаунта", "pro-acc-active": "Активен",
      "pro-acc-plan": "План", "pro-acc-plan-val": "Кабинет студента",
 
      "pro-dashboard": "Панель управления",
      "pro-welcome": "Добро пожаловать,", "pro-welcome-student": "студент",
      "pro-welcome-desc": "Здесь в одном месте хранятся избранные университеты, документы, дедлайны, консультации и прогресс подготовки.",
 
      "pro-stat-unis": "Избранный университет",
      "pro-stat-docs": "Прогресс документов",
      "pro-stat-consult": "Консультация",
      "pro-stat-progress": "Общий прогресс",
 
      "pro-prep-progress": "📋 Прогресс подготовки",
      "pro-prep-link": "Перейти к подготовке →",
      "pro-prep-nav": "Подготовка",
      "prep-checklist": "Чек-лист",
      "prep-uploaded": "Загруженные файлы",
      "prep-approved": "Одобрено администратором",
      "prep-checklist-pct": "Прогресс чек-листа",
      "prep-uploaded-pct": "Прогресс файлов",
      "prep-page-link": "Страница подготовки",
      "prep-go-hint": "💡 Перейдите на страницу подготовки и загрузите файлы.",
 
      "pro-edit-title": "Редактировать информацию профиля",
      "pro-editable": "Редактируемо",
      "pro-field-name": "Ваше имя", "pro-field-city": "Город",
      "pro-field-major": "Интересующее направление", "pro-field-goal": "Цель",
      "pro-phone": "📱 Телефон", "pro-country": "🌍 Страна",
      "pro-english": "🗣️ Уровень английского",
      "pro-budget": "💰 Годовой бюджет ($)",
      "pro-choose": "Выберите",
      "level-a1": "A1 — Начальный", "level-a2": "A2 — Элементарный",
      "level-b1": "B1 — Средний", "level-b2": "B2 — Выше среднего",
      "level-c1": "C1 — Продвинутый", "level-c2": "C2 — Профессиональный",
      "pro-save-btn": "💾 Сохранить",
      "pro-fill-example": "Заполнить примером",
      "pro-clear-btn": "Очистить",
      "pro-reset-full": "Очистить профиль",
 
      "pass-title": "🔐 Изменить пароль",
      "pass-old": "Старый пароль", "pass-new": "Новый пароль",
      "pass-confirm": "Подтверждение", "pass-btn": "🔐 Изменить пароль",
 
      "pro-consult-title": "Консультации",
      "consult-request": "📅 Запросить консультацию",
      "consult-price": "💳 5 000 ₸ / сессия",
      "consult-topic": "Тема", "consult-date": "Удобный день",
      "consult-question": "Напишите вопрос",
      "topic-uni": "Выбор университета",
      "topic-grant": "Грантовая стратегия",
      "topic-docs": "Проверка документов",
      "topic-interview": "Подготовка к интервью",
      "topic-motivation": "Мотивационное письмо",
      "topic-visa": "Визовый вопрос",
      "topic-other": "Другой вопрос",
      "consult-pay-btn": "💳 Оплатить и запросить консультацию — 5 000 ₸",
      "pay-title": "💳 Оплата консультации",
      "pay-desc": "Безопасная оплата через Stripe. После оплаты заявка будет отправлена ментору.",
      "pay-session": "Сессия консультации",
      "pay-fee": "Комиссия", "pay-total": "Итого",
      "pay-card": "Данные карты",
      "pay-btn": "✅ Оплатить 5 000 ₸",
      "pay-processing": "⏳ Обработка...",
      "pro-payment-cancel": "Отмена",
      "pay-secure": "🔒 Платеж защищен Stripe",
 
      "consult-paid-pending": "Оплачено · Ментор проверяет",
      "consult-assigned": "Ментор назначен",
      "consult-approved": "Подтверждено ✓",
      "consult-rejected": "Отклонено",
      "consult-pending": "Ожидает",
      "consult-meeting-time": "Время встречи",
      "consult-meeting-link": "Ссылка",
      "consult-mentor-msg": "Сообщение ментора",
 
      "pro-deadlines-title": "Дедлайны",
      "deadline-title": "Название", "deadline-date": "Дата",
      "deadline-note": "Примечание",
      "pro-deadline-add": "Добавить дедлайн",
 
      "pro-app-progress": "Прогресс заявки",
      "progress-profile": "Заполнение профиля",
      "progress-docs": "Документы готовы",
      "progress-uni": "Выбор университета",
      "progress-deadline": "Отслеживание дедлайнов",
      "progress-tasks": "Выполнение задач",
 
      "pro-docs-title": "Документы", "reset": "Сбросить",
      "doc-pending": "Ожидает", "doc-approved": "Одобрено",
      "doc-rejected": "Отклонено", "doc-uploaded": "Загружено",
      "doc-passport": "Паспорт",
      "doc-passport-desc": "Копия действующего паспорта",
      "doc-attestat": "Аттестат",
      "doc-attestat-desc": "Документ об окончании школы",
      "doc-transcript": "Список оценок",
      "doc-transcript-desc": "Транскрипт или список оценок",
      "doc-motivation": "Мотивационное письмо",
      "doc-motivation-desc": "Мотивационное письмо для стипендии/университета",
      "doc-recommendation": "Рекомендательное письмо",
      "doc-recommendation-desc": "Рекомендация учителя или ментора",
      "doc-cv": "CV / Резюме",
      "doc-cv-desc": "Достижения, языки, опыт, проекты",
 
      "pro-notes-title": "Личные заметки",
      "note-title": "Тема", "note-category": "Категория",
      "note-text": "Текст", "note-save": "Сохранить заметку",
      "cat-doc": "Документ", "cat-uni": "Университет",
      "cat-grant": "Грант", "prep-interview": "Интервью",
 
      "pro-unis-title": "Избранные университеты",
      "add-more": "Добавить ещё",
      "uni-label": "Университет", "uni-note": "Примечание",
      "uni-add": "Добавить университет",
      "uni-delete": "Удалить", "uni-city-label": "Город",
 
      "tasks-title": "✅ Задачи (Next Steps)",
      "task-label": "Задача", "task-date": "Срок",
      "task-priority": "Важность",
      "priority-high": "🔴 Высокая",
      "priority-normal": "🟡 Средняя",
      "priority-low": "🟢 Низкая",
      "task-add": "Добавить задачу",
 
      "notif-title": "🔔 Уведомления",
      "admin-refresh-btn": "Обновить",
 
      "no-consult": "Нет запросов консультации. Отправьте запрос выше.",
      "no-deadline": "Дедлайнов пока нет.",
      "no-note": "Заметок пока нет.",
      "no-task": "Задач нет. Добавьте новую задачу.",
      "no-notif": "Уведомлений нет.",
 
      "pro-quick-actions": "Быстрые действия",
      "qa-unis": "Университеты", "qa-prep": "Подготовка",
      "qa-career": "Career Test", "qa-feed": "Лента",
 
      "footer-text": "© 2026 EduBridge Türkiye. Все права защищены.",
      "footer-contact": "Контакты",
      "toast-saved": "Сохранено",
 
      "ai-online": "Онлайн · Отвечает",
      "ai-hello": "Здравствуйте! Я AI-консультант EduBridge. Задайте любой вопрос об университетах Турции 👋",
      "ai-placeholder": "Напишите вопрос...",
      "ai-title": "AI Консультант",
 
      "career-result": "🧠 Результат Career Test:",
 
      "ph-goal": "Например: поступить на грант в Турции, выбрать хороший университет...",
      "ph-country": "Казахстан",
      "ph-pass-new": "Минимум 6 символов",
      "ph-pass-confirm": "Повторите пароль",
      "ph-consult": "Например: как подготовить документы в Sabancı University?",
      "ph-deadline-note": "Какие документы нужны?",
      "ph-note": "Заметка...",
      "ph-uni-note": "Сильная инженерия, есть программа на английском...",
      "ph-task": "Например: сдать IELTS",
 
      "toast-payment-ok": "✅ Оплата принята! Запрос на консультацию отправлен.",
      "toast-deadline-ok": "✅ Дедлайн добавлен и отправлен на email",
      "toast-deadline-err": "❌ Email по дедлайну не отправлен",
      "toast-warn-question": "⚠️ Сначала напишите вопрос!",
      "toast-warn-date": "⚠️ Нельзя выбрать прошедшую дату!",
      "toast-warn-active": "⚠️ У вас уже есть активная консультация. Дождитесь завершения предыдущей.",
      "email-sent-label": "Email отправлен",
    },
 
    en: {
      "nav-home": "Home", "nav-specialties": "Specialties",
      "nav-universities": "Universities", "nav-preparation": "Preparation",
      "nav-feed": "Feed", "nav-language": "Language",
      "nav-profile": "Profile", "nav-logout": "Log out",
      "header-login": "Login",
 
      "pro-menu-overview": "Overview", "pro-menu-edit": "Edit profile",
      "pro-menu-consult": "Consultations", "pro-menu-docs": "Documents",
      "pro-menu-unis": "Saved universities",
      "pro-menu-tasks": "✅ Tasks",
      "pro-menu-notifications": "🔔 Notifications",
      "pro-menu-deadlines": "Deadlines", "pro-menu-notes": "Notes",
 
      "pro-acc-status": "Account status", "pro-acc-active": "Active",
      "pro-acc-plan": "Plan", "pro-acc-plan-val": "Student Dashboard",
 
      "pro-dashboard": "Dashboard",
      "pro-welcome": "Welcome,", "pro-welcome-student": "student",
      "pro-welcome-desc": "Your saved universities, documents, deadlines, consultations, and preparation progress are stored here in one place.",
 
      "pro-stat-unis": "Saved university",
      "pro-stat-docs": "Document progress",
      "pro-stat-consult": "Consultation",
      "pro-stat-progress": "Overall progress",
 
      "pro-prep-progress": "📋 Preparation progress",
      "pro-prep-link": "Go to preparation →",
      "pro-prep-nav": "Preparation",
      "prep-checklist": "Checklist",
      "prep-uploaded": "Uploaded files",
      "prep-approved": "Admin approved",
      "prep-checklist-pct": "Checklist progress",
      "prep-uploaded-pct": "Uploaded files progress",
      "prep-page-link": "Preparation page",
      "prep-go-hint": "💡 Go to the Preparation page and upload your files.",
 
      "pro-edit-title": "Edit profile information",
      "pro-editable": "Editable",
      "pro-field-name": "Your name", "pro-field-city": "City",
      "pro-field-major": "Field of interest", "pro-field-goal": "Goal",
      "pro-phone": "📱 Phone", "pro-country": "🌍 Country",
      "pro-english": "🗣️ English level",
      "pro-budget": "💰 Annual budget ($)",
      "pro-choose": "Choose",
      "level-a1": "A1 — Beginner", "level-a2": "A2 — Elementary",
      "level-b1": "B1 — Intermediate", "level-b2": "B2 — Upper-intermediate",
      "level-c1": "C1 — Advanced", "level-c2": "C2 — Professional",
      "pro-save-btn": "💾 Save",
      "pro-fill-example": "Fill with example",
      "pro-clear-btn": "Clear",
      "pro-reset-full": "Clear profile",
 
      "pass-title": "🔐 Change password",
      "pass-old": "Old password", "pass-new": "New password",
      "pass-confirm": "Confirm", "pass-btn": "🔐 Change password",
 
      "pro-consult-title": "Consultations",
      "consult-request": "📅 Request a consultation",
      "consult-price": "💳 5,000 ₸ / session",
      "consult-topic": "Topic", "consult-date": "Preferred date",
      "consult-question": "Write your question",
      "topic-uni": "University selection",
      "topic-grant": "Scholarship strategy",
      "topic-docs": "Document review",
      "topic-interview": "Interview preparation",
      "topic-motivation": "Motivation letter",
      "topic-visa": "Visa issue",
      "topic-other": "Other question",
      "consult-pay-btn": "💳 Pay and request consultation — 5,000 ₸",
      "pay-title": "💳 Consultation payment",
      "pay-desc": "Secure payment via Stripe. After payment, your request will be sent to the mentor.",
      "pay-session": "Consultation session",
      "pay-fee": "Fee", "pay-total": "Total",
      "pay-card": "Card details",
      "pay-btn": "✅ Pay 5,000 ₸",
      "pay-processing": "⏳ Processing...",
      "pro-payment-cancel": "Cancel",
      "pay-secure": "🔒 Payment protected by Stripe",
 
      "consult-paid-pending": "Paid · Mentor reviewing",
      "consult-assigned": "Mentor assigned",
      "consult-approved": "Approved ✓",
      "consult-rejected": "Rejected",
      "consult-pending": "Pending",
      "consult-meeting-time": "Meeting time",
      "consult-meeting-link": "Link",
      "consult-mentor-msg": "Mentor message",
 
      "pro-deadlines-title": "Deadlines",
      "deadline-title": "Title", "deadline-date": "Date",
      "deadline-note": "Note",
      "pro-deadline-add": "Add deadline",
 
      "pro-app-progress": "Application Progress",
      "progress-profile": "Profile completion",
      "progress-docs": "Documents ready",
      "progress-uni": "University selection",
      "progress-deadline": "Deadline tracking",
      "progress-tasks": "Tasks completion",
 
      "pro-docs-title": "Documents", "reset": "Reset",
      "doc-pending": "Pending", "doc-approved": "Approved",
      "doc-rejected": "Rejected", "doc-uploaded": "Uploaded",
      "doc-passport": "Passport",
      "doc-passport-desc": "Valid passport copy",
      "doc-attestat": "School Certificate",
      "doc-attestat-desc": "School graduation document",
      "doc-transcript": "Transcript",
      "doc-transcript-desc": "Transcript or grade list",
      "doc-motivation": "Motivation letter",
      "doc-motivation-desc": "Motivation letter for scholarship/university",
      "doc-recommendation": "Recommendation letter",
      "doc-recommendation-desc": "Teacher or mentor recommendation",
      "doc-cv": "CV / Resume",
      "doc-cv-desc": "Achievements, languages, experience, projects",
 
      "pro-notes-title": "Personal notes",
      "note-title": "Title", "note-category": "Category",
      "note-text": "Text", "note-save": "Save note",
      "cat-doc": "Document", "cat-uni": "University",
      "cat-grant": "Scholarship", "prep-interview": "Interview",
 
      "pro-unis-title": "Saved universities",
      "add-more": "Add more",
      "uni-label": "University", "uni-note": "Note",
      "uni-add": "Add university",
      "uni-delete": "Delete", "uni-city-label": "City",
 
      "tasks-title": "✅ Tasks (Next Steps)",
      "task-label": "Task", "task-date": "Due date",
      "task-priority": "Priority",
      "priority-high": "🔴 High",
      "priority-normal": "🟡 Normal",
      "priority-low": "🟢 Low",
      "task-add": "Add task",
 
      "notif-title": "🔔 Notifications",
      "admin-refresh-btn": "Refresh",
 
      "no-consult": "No consultation requests. Submit one above.",
      "no-deadline": "No deadlines yet.",
      "no-note": "No notes yet.",
      "no-task": "No tasks yet. Add a new task.",
      "no-notif": "No notifications.",
 
      "pro-quick-actions": "Quick Actions",
      "qa-unis": "Universities", "qa-prep": "Preparation",
      "qa-career": "Career Test", "qa-feed": "Feed",
 
      "footer-text": "© 2026 EduBridge Türkiye. All rights reserved.",
      "footer-contact": "Contact",
      "toast-saved": "Saved",
 
      "ai-online": "Online · Replies",
      "ai-hello": "Hi! I am the EduBridge AI advisor. Ask me any question about universities in Türkiye 👋",
      "ai-placeholder": "Write your question...",
      "ai-title": "AI Advisor",
 
      "career-result": "🧠 Career Test result:",
 
      "ph-goal": "For example: get a scholarship in Türkiye, choose a good university...",
      "ph-country": "Kazakhstan",
      "ph-pass-new": "At least 6 characters",
      "ph-pass-confirm": "Repeat password",
      "ph-consult": "For example: how should I prepare documents for Sabancı University?",
      "ph-deadline-note": "Which document is needed?",
      "ph-note": "Note...",
      "ph-uni-note": "Strong engineering, English program available...",
      "ph-task": "For example: take IELTS",
 
      "toast-payment-ok": "✅ Payment accepted! Consultation request sent.",
      "toast-deadline-ok": "✅ Deadline added and sent to email",
      "toast-deadline-err": "❌ Deadline email was not sent",
      "toast-warn-question": "⚠️ Please write your question first!",
      "toast-warn-date": "⚠️ You cannot select a past date!",
      "toast-warn-active": "⚠️ You already have an active consultation. Please wait until the previous one is completed.",
      "email-sent-label": "Email sent",
    },
 
    tr: {
      "nav-home": "Ana sayfa", "nav-specialties": "Bölümler",
      "nav-universities": "Üniversiteler", "nav-preparation": "Hazırlık",
      "nav-feed": "Akış", "nav-language": "Dil",
      "nav-profile": "Profil", "nav-logout": "Çıkış",
      "header-login": "Giriş",
 
      "pro-menu-overview": "Genel bakış", "pro-menu-edit": "Profili düzenle",
      "pro-menu-consult": "Danışmanlıklar", "pro-menu-docs": "Belgeler",
      "pro-menu-unis": "Favori üniversiteler",
      "pro-menu-tasks": "✅ Görevler",
      "pro-menu-notifications": "🔔 Bildirimler",
      "pro-menu-deadlines": "Son tarihler", "pro-menu-notes": "Notlar",
 
      "pro-acc-status": "Hesap durumu", "pro-acc-active": "Aktif",
      "pro-acc-plan": "Plan", "pro-acc-plan-val": "Öğrenci paneli",
 
      "pro-dashboard": "Kontrol paneli",
      "pro-welcome": "Hoş geldin,", "pro-welcome-student": "öğrenci",
      "pro-welcome-desc": "Favori üniversitelerin, belgelerin, son tarihlerin, danışmanlıkların ve hazırlık ilerlemen burada tek yerde saklanır.",
 
      "pro-stat-unis": "Favori üniversite",
      "pro-stat-docs": "Belge ilerlemesi",
      "pro-stat-consult": "Danışmanlık",
      "pro-stat-progress": "Genel ilerleme",
 
      "pro-prep-progress": "📋 Hazırlık ilerlemesi",
      "pro-prep-link": "Hazırlığa git →",
      "pro-prep-nav": "Hazırlık",
      "prep-checklist": "Kontrol listesi",
      "prep-uploaded": "Yüklenen dosyalar",
      "prep-approved": "Yönetici onayladı",
      "prep-checklist-pct": "Kontrol listesi ilerlemesi",
      "prep-uploaded-pct": "Yüklenen dosyalar ilerlemesi",
      "prep-page-link": "Hazırlık sayfası",
      "prep-go-hint": "💡 Hazırlık sayfasına gidip dosyalarınızı yükleyin.",
 
      "pro-edit-title": "Profil bilgilerini düzenle",
      "pro-editable": "Düzenlenebilir",
      "pro-field-name": "Adınız", "pro-field-city": "Şehir",
      "pro-field-major": "İlgilendiğiniz alan", "pro-field-goal": "Hedef",
      "pro-phone": "📱 Telefon", "pro-country": "🌍 Ülke",
      "pro-english": "🗣️ İngilizce seviyesi",
      "pro-budget": "💰 Yıllık bütçe ($)",
      "pro-choose": "Seçiniz",
      "level-a1": "A1 — Başlangıç", "level-a2": "A2 — Temel",
      "level-b1": "B1 — Orta", "level-b2": "B2 — Orta üstü",
      "level-c1": "C1 — İleri", "level-c2": "C2 — Profesyonel",
      "pro-save-btn": "💾 Kaydet",
      "pro-fill-example": "Örnekle doldur",
      "pro-clear-btn": "Temizle",
      "pro-reset-full": "Profili temizle",
 
      "pass-title": "🔐 Şifreyi değiştir",
      "pass-old": "Eski şifre", "pass-new": "Yeni şifre",
      "pass-confirm": "Onayla", "pass-btn": "🔐 Şifreyi değiştir",
 
      "pro-consult-title": "Danışmanlıklar",
      "consult-request": "📅 Danışmanlık talep et",
      "consult-price": "💳 5.000 ₸ / oturum",
      "consult-topic": "Konu", "consult-date": "Uygun gün",
      "consult-question": "Sorunu yaz",
      "topic-uni": "Üniversite seçimi",
      "topic-grant": "Burs stratejisi",
      "topic-docs": "Belge kontrolü",
      "topic-interview": "Mülakat hazırlığı",
      "topic-motivation": "Motivasyon mektubu",
      "topic-visa": "Vize konusu",
      "topic-other": "Diğer soru",
      "consult-pay-btn": "💳 Öde ve danışmanlık talep et — 5.000 ₸",
      "pay-title": "💳 Danışmanlık ödemesi",
      "pay-desc": "Stripe ile güvenli ödeme. Ödeme tamamlandıktan sonra talebin mentora gönderilir.",
      "pay-session": "Danışmanlık oturumu",
      "pay-fee": "Komisyon", "pay-total": "Toplam",
      "pay-card": "Kart bilgileri",
      "pay-btn": "✅ 5.000 ₸ Öde",
      "pay-processing": "⏳ İşleniyor...",
      "pro-payment-cancel": "İptal",
      "pay-secure": "🔒 Stripe ile korunan ödeme",
 
      "consult-paid-pending": "Ödendi · Mentor inceliyor",
      "consult-assigned": "Mentor atandı",
      "consult-approved": "Onaylandı ✓",
      "consult-rejected": "Reddedildi",
      "consult-pending": "Beklemede",
      "consult-meeting-time": "Toplantı saati",
      "consult-meeting-link": "Bağlantı",
      "consult-mentor-msg": "Mentor mesajı",
 
      "pro-deadlines-title": "Son tarihler",
      "deadline-title": "Başlık", "deadline-date": "Tarih",
      "deadline-note": "Not",
      "pro-deadline-add": "Son tarih ekle",
 
      "pro-app-progress": "Başvuru ilerlemesi",
      "progress-profile": "Profil tamamlama",
      "progress-docs": "Belgeler hazır",
      "progress-uni": "Üniversite seçimi",
      "progress-deadline": "Son tarih takibi",
      "progress-tasks": "Görev tamamlama",
 
      "pro-docs-title": "Belgeler", "reset": "Sıfırla",
      "doc-pending": "Beklemede", "doc-approved": "Onaylandı",
      "doc-rejected": "Reddedildi", "doc-uploaded": "Yüklendi",
      "doc-passport": "Pasaport",
      "doc-passport-desc": "Geçerli pasaport kopyası",
      "doc-attestat": "Lise diploması",
      "doc-attestat-desc": "Okul mezuniyet belgesi",
      "doc-transcript": "Not dökümü",
      "doc-transcript-desc": "Transkript veya not listesi",
      "doc-motivation": "Motivasyon mektubu",
      "doc-motivation-desc": "Burs/üniversite için motivasyon mektubu",
      "doc-recommendation": "Referans mektubu",
      "doc-recommendation-desc": "Öğretmen veya mentor referansı",
      "doc-cv": "CV / Özgeçmiş",
      "doc-cv-desc": "Başarılar, diller, deneyim, projeler",
 
      "pro-notes-title": "Kişisel notlar",
      "note-title": "Konu", "note-category": "Kategori",
      "note-text": "Metin", "note-save": "Notu kaydet",
      "cat-doc": "Belge", "cat-uni": "Üniversite",
      "cat-grant": "Burs", "prep-interview": "Mülakat",
 
      "pro-unis-title": "Favori üniversiteler",
      "add-more": "Daha fazla ekle",
      "uni-label": "Üniversite", "uni-note": "Not",
      "uni-add": "Üniversite ekle",
      "uni-delete": "Sil", "uni-city-label": "Şehir",
 
      "tasks-title": "✅ Görevler (Next Steps)",
      "task-label": "Görev", "task-date": "Son tarih",
      "task-priority": "Önem",
      "priority-high": "🔴 Yüksek",
      "priority-normal": "🟡 Orta",
      "priority-low": "🟢 Düşük",
      "task-add": "Görev ekle",
 
      "notif-title": "🔔 Bildirimler",
      "admin-refresh-btn": "Yenile",
 
      "no-consult": "Danışmanlık talebi yok. Yukarıdan talep gönderin.",
      "no-deadline": "Henüz son tarih yok.",
      "no-note": "Henüz not yok.",
      "no-task": "Görev yok. Yeni görev ekle.",
      "no-notif": "Bildirim yok.",
 
      "pro-quick-actions": "Hızlı işlemler",
      "qa-unis": "Üniversiteler", "qa-prep": "Hazırlık",
      "qa-career": "Career Test", "qa-feed": "Akış",
 
      "footer-text": "© 2026 EduBridge Türkiye. Tüm hakları saklıdır.",
      "footer-contact": "İletişim",
      "toast-saved": "Kaydedildi",
 
      "ai-online": "Çevrimiçi · Yanıtlar",
      "ai-hello": "Merhaba! Ben EduBridge AI danışmanıyım. Türkiye üniversiteleri hakkında istediğin soruyu sor 👋",
      "ai-placeholder": "Sorunu yaz...",
      "ai-title": "AI Danışmanı",
 
      "career-result": "🧠 Career Test sonucu:",
 
      "ph-goal": "Örneğin: Türkiye'de burs kazanmak, iyi bir üniversite seçmek...",
      "ph-country": "Kazakistan",
      "ph-pass-new": "En az 6 karakter",
      "ph-pass-confirm": "Tekrar yazın",
      "ph-consult": "Örneğin: Sabancı University için belgeleri nasıl hazırlamalıyım?",
      "ph-deadline-note": "Hangi belge gerekli?",
      "ph-note": "Not...",
      "ph-uni-note": "Mühendisliği güçlü, İngilizce program var...",
      "ph-task": "Örneğin: IELTS sınavına girmek",
 
      "toast-payment-ok": "✅ Ödeme kabul edildi! Danışmanlık talebi gönderildi.",
      "toast-deadline-ok": "✅ Son tarih eklendi ve e-posta gönderildi",
      "toast-deadline-err": "❌ Son tarih e-postası gönderilemedi",
      "toast-warn-question": "⚠️ Önce sorunuzu yazın!",
      "toast-warn-date": "⚠️ Geçmiş bir tarih seçilemez!",
      "toast-warn-active": "⚠️ Aktif bir danışmanlığınız var. Önceki danışmanlığın tamamlanmasını bekleyin.",
      "email-sent-label": "E-posta gönderildi",
    // kz:

    },
    
  };
 
  // ════════════════════════════════════════════════════════════════
  // profile-backend.js үшін P_TEXTS (global)
  // ════════════════════════════════════════════════════════════════
  window.P_TEXTS = {
    noConsult: { kz: "Консультация сұранымы жоқ. Жоғарыдан сұратыңыз.", ru: "Нет запросов консультации. Отправьте запрос выше.", en: "No consultation requests. Submit one above.", tr: "Danışmanlık talebi yok. Yukarıdan talep gönderin." },
    noDeadline: { kz: "Әзірге дедлайн жоқ.", ru: "Дедлайнов пока нет.", en: "No deadlines yet.", tr: "Henüz son tarih yok." },
    noNote: { kz: "Әзірге жазба жоқ.", ru: "Заметок пока нет.", en: "No notes yet.", tr: "Henüz not yok." },
    noTask: { kz: "Тапсырмалар жоқ. Жаңа тапсырма қос.", ru: "Задач нет. Добавьте новую задачу.", en: "No tasks yet. Add a new task.", tr: "Görev yok. Yeni görev ekle." },
    noNotif: { kz: "Ескертулер жоқ.", ru: "Уведомлений нет.", en: "No notifications.", tr: "Bildirim yok." },
    delete: { kz: "Өшіру", ru: "Удалить", en: "Delete", tr: "Sil" },
    pending: { kz: "Күтуде", ru: "Ожидает", en: "Pending", tr: "Beklemede" },
    approved: { kz: "Қабылданды", ru: "Одобрено", en: "Approved", tr: "Onaylandı" },
    rejected: { kz: "Қабылданбады", ru: "Отклонено", en: "Rejected", tr: "Reddedildi" },
    uploaded: { kz: "Жүктелді", ru: "Загружено", en: "Uploaded", tr: "Yüklendi" },
    emailSent: { kz: "Email жіберілді", ru: "Email отправлен", en: "Email sent", tr: "E-posta gönderildi" },
    toastPaymentOk: { kz: "✅ Төлем қабылданды! Консультация сұранымы жіберілді.", ru: "✅ Оплата принята! Запрос на консультацию отправлен.", en: "✅ Payment accepted! Consultation request sent.", tr: "✅ Ödeme kabul edildi! Danışmanlık talebi gönderildi." },
    toastDeadlineOk: { kz: "✅ Дедлайн қосылды және email-ға жіберілді", ru: "✅ Дедлайн добавлен и отправлен на email", en: "✅ Deadline added and sent to email", tr: "✅ Son tarih eklendi ve e-posta gönderildi" },
    toastDeadlineErr: { kz: "❌ Дедлайн email жіберілмеді", ru: "❌ Email по дедлайну не отправлен", en: "❌ Deadline email was not sent", tr: "❌ Son tarih e-postası gönderilemedi" },
    toastWarnQuestion: { kz: "⚠️ Алдымен сұрағыңды жаз!", ru: "⚠️ Сначала напишите вопрос!", en: "⚠️ Please write your question first!", tr: "⚠️ Önce sorunuzu yazın!" },
    toastWarnDate: { kz: "⚠️ Өткен күнді таңдауға болмайды!", ru: "⚠️ Нельзя выбрать прошедшую дату!", en: "⚠️ You cannot select a past date!", tr: "⚠️ Geçmiş bir tarih seçilemez!" },
    toastWarnActive: { kz: "⚠️ Белсенді консультация бар. Алдыңғысы аяқталсын.", ru: "⚠️ У вас уже есть активная консультация. Дождитесь завершения предыдущей.", en: "⚠️ You already have an active consultation. Please wait until the previous one is completed.", tr: "⚠️ Aktif bir danışmanlığınız var. Önceki danışmanlığın tamamlanmasını bekleyin." },
    docs: {
      passport: { kz: "Паспорт", ru: "Паспорт", en: "Passport", tr: "Pasaport" },
      passportDesc: { kz: "Жарамды паспорт көшірмесі", ru: "Копия действующего паспорта", en: "Valid passport copy", tr: "Geçerli pasaport kopyası" },
      attestat: { kz: "Аттестат", ru: "Аттестат", en: "School Certificate", tr: "Lise diploması" },
      attestatDesc: { kz: "Мектеп бітіргенін растайтын құжат", ru: "Документ об окончании школы", en: "School graduation document", tr: "Okul mezuniyet belgesi" },
      transcript: { kz: "Бағалар тізімі", ru: "Список оценок", en: "Transcript", tr: "Not dökümü" },
      transcriptDesc: { kz: "Transcript немесе бағалар тізімі", ru: "Транскрипт или список оценок", en: "Transcript or grade list", tr: "Transkript veya not listesi" },
      motivation: { kz: "Мотивациялық хат", ru: "Мотивационное письмо", en: "Motivation letter", tr: "Motivasyon mektubu" },
      motivationDesc: { kz: "Стипендия/университет үшін мотивациялық хат", ru: "Мотивационное письмо для стипендии/университета", en: "Motivation letter for scholarship/university", tr: "Burs/üniversite için motivasyon mektubu" },
      recommendation: { kz: "Ұсыныс хат", ru: "Рекомендательное письмо", en: "Recommendation letter", tr: "Referans mektubu" },
      recommendationDesc: { kz: "Мұғалім немесе ментор ұсынысы", ru: "Рекомендация учителя или ментора", en: "Teacher or mentor recommendation", tr: "Öğretmen veya mentor referansı" },
      cv: { kz: "CV / Резюме", ru: "CV / Резюме", en: "CV / Resume", tr: "CV / Özgeçmiş" },
      cvDesc: { kz: "Жетістік, тіл, тәжірибе, жобалар", ru: "Достижения, языки, опыт, проекты", en: "Achievements, languages, experience, projects", tr: "Başarılar, diller, deneyim, projeler" },
    "ph-city": "Алматы / Стамбул",

// ru:
"ph-city": "Алматы / Стамбул",

// en:
"ph-city": "Almaty / Istanbul",

// tr:
"ph-city": "Almatı / İstanbul",
    },
  };
 
  // ════════════════════════════════════════════════════════════════
  // APPLY FUNCTIONS
  // ════════════════════════════════════════════════════════════════
 
  function translateDataI18n() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (val && val !== key) el.textContent = val;
    });
  }
 
  function translatePlaceholders() {
    const map = {
      "profileGoalInput": "ph-goal",
      "profileCountry": "ph-country",
      "newPassword": "ph-pass-new",
      "confirmPassword": "ph-pass-confirm",
      "cReqQuestion": "ph-consult",
      "profileDeadlineNote": "ph-deadline-note",
      "profileNoteText": "ph-note",
      "uniNoteInput": "ph-uni-note",
      "taskTitleInput": "ph-task",
      "aiBubbleInput": "ai-placeholder",
    };
    Object.entries(map).forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el) el.placeholder = t(key);
    });
  }
 
  function translateSelectOptions() {
    // English level
    const english = document.getElementById("profileEnglish");
    if (english) {
      const keys = ["pro-choose", "level-a1", "level-a2", "level-b1", "level-b2", "level-c1", "level-c2"];
      [...english.options].forEach((opt, i) => { if (keys[i]) opt.textContent = t(keys[i]); });
    }
 
    // Consultation topic
    const topic = document.getElementById("cReqTopic");
    if (topic) {
      const keys = ["topic-uni", "topic-grant", "topic-docs", "topic-interview", "topic-motivation", "topic-visa", "topic-other"];
      [...topic.options].forEach((opt, i) => { if (keys[i]) opt.textContent = t(keys[i]); });
    }
 
    // Note category
    const noteCat = document.getElementById("profileNoteCategory");
    if (noteCat) {
      const keys = ["cat-doc", "cat-uni", "cat-grant", "prep-interview"];
      [...noteCat.options].forEach((opt, i) => { if (keys[i]) opt.textContent = t(keys[i]); });
    }
 
    // Task priority
    const priority = document.getElementById("taskPriorityInput");
    if (priority) {
      const keys = ["priority-high", "priority-normal", "priority-low"];
      [...priority.options].forEach((opt, i) => { if (keys[i]) opt.textContent = t(keys[i]); });
    }
  }
 
  function translateFixedElements() {
    document.documentElement.lang = lang() === "kz" ? "kk" : lang();
 
    // Account status
    const status = document.getElementById("profileStatusText");
    if (status) status.textContent = t("pro-acc-active");
 
    // AI button title
    const aiBtn = document.getElementById("aiBubbleBtn");
    if (aiBtn) aiBtn.title = t("ai-title");
 
    // Toast default text
    const toast = document.getElementById("profileToast");
    if (toast) toast.textContent = t("toast-saved");
 
    // Pay button (if not processing)
    const payBtn = document.getElementById("payBtn");
    if (payBtn && !payBtn.disabled) payBtn.textContent = t("pay-btn");
 
    // Welcome heading
    const welcome = document.querySelector("#overview h1");
    if (welcome) {
      const nameSpan = document.getElementById("profileWelcomeName");
      const name = nameSpan ? nameSpan.textContent.trim() : t("pro-welcome-student");
      welcome.innerHTML = `${t("pro-welcome")} <span id="profileWelcomeName">${name}</span>`;
    }
 
    // Sidebar menu items without data-i18n
    const menu = document.querySelector(".profile-menu");
    if (menu) {
      const tasks = menu.querySelector('a[href="#tasks"]');
      const notif = menu.querySelector('a[href="#notifications"]');
      if (tasks) tasks.textContent = t("pro-menu-tasks");
      if (notif) notif.textContent = t("pro-menu-notifications");
    }
 
    // Progress bar labels (hardcoded spans)
    const progressLabels = {
      "Profile completion": "progress-profile",
      "Documents ready": "progress-docs",
      "University selection": "progress-uni",
      "Deadline tracking": "progress-deadline",
      "Tasks completion": "progress-tasks",
      // already translated variants:
      "Profil tamamlama": "progress-profile",
      "Belgeler hazır": "progress-docs",
      "Üniversite seçimi": "progress-uni",
      "Son tarih takibi": "progress-deadline",
      "Görev tamamlama": "progress-tasks",
      "Профиль толтыру": "progress-profile",
      "Құжаттар дайын": "progress-docs",
      "Университет таңдау": "progress-uni",
      "Дедлайн бақылау": "progress-deadline",
      "Тапсырмалар орындалуы": "progress-tasks",
      "Заполнение профиля": "progress-profile",
      "Документы готовы": "progress-docs",
      "Выбор университета": "progress-uni",
      "Отслеживание дедлайнов": "progress-deadline",
      "Выполнение задач": "progress-tasks",
    };
    document.querySelectorAll(".progress-line-top span").forEach(el => {
      const txt = el.textContent.trim();
      if (progressLabels[txt]) el.textContent = t(progressLabels[txt]);
    });
 
    // Password section labels
    const passLabels = document.querySelectorAll(
      '#editProfile label[style*="font-size:12px"]'
    );
    if (passLabels.length >= 3) {
      passLabels[0].textContent = t("pass-old");
      passLabels[1].textContent = t("pass-new");
      passLabels[2].textContent = t("pass-confirm");
    }
 
    // Password change button
    const passBtn = document.querySelector(
      '#editProfile button[onclick="changePassword()"]'
    );
    if (passBtn) passBtn.textContent = t("pass-btn");
 
    // Payment modal texts
    const payTitle = document.querySelector("#paymentModal h3");
    if (payTitle) payTitle.textContent = t("pay-title");
    const payDesc = document.querySelector("#paymentModal p");
    if (payDesc && payDesc.textContent.includes("Stripe") && !payDesc.id)
      payDesc.textContent = t("pay-desc");
 
    // Quick actions
    const quick = document.querySelectorAll(".quick-action-box strong");
    if (quick[0]) quick[0].textContent = t("qa-unis");
    if (quick[1]) quick[1].textContent = t("qa-prep");
    if (quick[2]) quick[2].textContent = t("qa-career");
    if (quick[3]) quick[3].textContent = t("qa-feed");
 
    // Career test result label
    const careerLabel = document.querySelector("#careerTestResult strong");
    if (careerLabel) careerLabel.textContent = t("career-result");
 
    // AI chat header
    const aiOnline = document.querySelector("#aiChatWindow .header-actions + div div:last-child, #aiChatWindow div[style*='font-size:11px']");
    if (aiOnline) aiOnline.textContent = t("ai-online");
 
    // Reset docs button
    const resetBtn = document.querySelector('#documents button[onclick="resetProfileDocuments()"]');
    if (resetBtn) resetBtn.textContent = t("reset");
  }
 
  function translateDynamicTexts() {
    // Empty state messages
    const emptyMap = {
      "Консультация сұранымы жоқ. Жоғарыдан сұратыңыз.": "no-consult",
      "No consultation requests. Submit one above.": "no-consult",
      "Нет запросов консультации. Отправьте запрос выше.": "no-consult",
      "Danışmanlık talebi yok. Yukarıdan talep gönderin.": "no-consult",
      "Әзірге дедлайн жоқ.": "no-deadline",
      "No deadlines yet.": "no-deadline",
      "Дедлайнов пока нет.": "no-deadline",
      "Henüz son tarih yok.": "no-deadline",
      "Әзірге жазба жоқ.": "no-note",
      "No notes yet.": "no-note",
      "Заметок пока нет.": "no-note",
      "Henüz not yok.": "no-note",
      "Тапсырмалар жоқ. Жаңа тапсырма қос.": "no-task",
      "No tasks yet. Add a new task.": "no-task",
      "Задач нет. Добавьте новую задачу.": "no-task",
      "Görev yok. Yeni görev ekle.": "no-task",
      "Ескертулер жоқ.": "no-notif",
      "No notifications.": "no-notif",
      "Уведомлений нет.": "no-notif",
      "Bildirim yok.": "no-notif",
    };
 
    document.querySelectorAll(
      ".profile-empty, #consultationList p, #profileDeadlinesList p, " +
      "#profileNotesList p, #tasksListContainer p, #notificationsList p"
    ).forEach(el => {
      const txt = el.textContent.trim();
      if (emptyMap[txt]) el.textContent = t(emptyMap[txt]);
    });
 
    // Document statuses
    const statusMap = {
      "Күтуде": "doc-pending", "Pending": "doc-pending",
      "Ожидает": "doc-pending", "Beklemede": "doc-pending",
      "Қабылданды": "doc-approved", "Approved": "doc-approved",
      "Одобрено": "doc-approved", "Onaylandı": "doc-approved",
      "Қабылданбады": "doc-rejected", "Rejected": "doc-rejected",
      "Отклонено": "doc-rejected", "Reddedildi": "doc-rejected",
      "Жүктелді": "doc-uploaded", "Uploaded": "doc-uploaded",
      "Загружено": "doc-uploaded", "Yüklendi": "doc-uploaded",
    };
    document.querySelectorAll(
      "#profileDocumentsList .badge, #profileDocumentsList [class*='status'], " +
      "#profileDocumentsList span"
    ).forEach(el => {
      const txt = el.textContent.trim();
      if (statusMap[txt]) el.textContent = t(statusMap[txt]);
    });
 
    // Delete buttons in university grid
    document.querySelectorAll(
      "#savedUniversitiesContainer button, .saved-university-grid button"
    ).forEach(btn => {
      const txt = btn.textContent.trim();
      if (["Өшіру", "Delete", "Удалить", "Sil"].includes(txt)) {
        btn.textContent = t("uni-delete");
      }
    });
 
    // Email sent labels in deadlines
    const emailLabels = ["Email жіберілді", "Email sent", "Email отправлен", "E-posta gönderildi"];
    document.querySelectorAll("#profileDeadlinesList span").forEach(el => {
      if (emailLabels.includes(el.textContent.trim())) {
        el.textContent = t("email-sent-label");
      }
    });
 
    // Preparation progress widget
    const prepBox = document.getElementById("profilePrepProgressBox");
    if (prepBox) {
      const labelMap = {
        "Checklist": "prep-checklist", "Чек-лист": "prep-checklist",
        "Контrol listesi": "prep-checklist", "Kontrol listesi": "prep-checklist",
        "Kontrol Listesi": "prep-checklist",
        "Uploaded files": "prep-uploaded", "Жүктелген файлдар": "prep-uploaded",
        "Yüklenen dosyalar": "prep-uploaded", "Загруженные файлы": "prep-uploaded",
        "Admin approved": "prep-approved", "Қабылданды": "prep-approved",
        "Onaylandı": "prep-approved", "Одобрено": "prep-approved",
        "Checklist progress": "prep-checklist-pct",
        "Чек-лист прогресі": "prep-checklist-pct",
        "Uploaded files progress": "prep-uploaded-pct",
        "Preparation page": "prep-page-link",
        "Дайындық беті": "prep-page-link",
        "Hazırlık sayfası": "prep-page-link",
        "Страница подготовки": "prep-page-link",
      };
      prepBox.querySelectorAll("span, p, a, div").forEach(el => {
        if (el.children.length > 0) return;
        const txt = el.textContent.trim();
        if (labelMap[txt]) el.textContent = t(labelMap[txt]);
      });
    }
  }
 
  function applyProfileI18n() {
    translateDataI18n();
    translatePlaceholders();
    translateSelectOptions();
    translateFixedElements();
    translateDynamicTexts();
  }
 
  // ════════════════════════════════════════════════════════════════
  // setLang override
  // ════════════════════════════════════════════════════════════════
  window.setLang = function (newLang) {
    localStorage.setItem("lang", newLang);
    applyProfileI18n();
    if (typeof window.applyTranslations === "function") {
      window.applyTranslations(newLang);
    }
  };
 
  // ════════════════════════════════════════════════════════════════
  // showToast override — барлық toast хабарламаларын аудару
  // ════════════════════════════════════════════════════════════════
  const _oldShowToast = window.showToast;
  window.showToast = function (msg) {
    const toastKeyMap = {
      "✅ Төлем қабылданды! Консультация сұранымы жіберілді.": "toast-payment-ok",
      "✅ Оплата принята! Запрос на консультацию отправлен.": "toast-payment-ok",
      "✅ Payment accepted! Consultation request sent.": "toast-payment-ok",
      "✅ Ödeme kabul edildi! Danışmanlık talebi gönderildi.": "toast-payment-ok",
      "✅ Stripe арқылы төлем өтті! Консультация жіберілді.": "toast-payment-ok",
      "✅ Дедлайн қосылды және email-ға жіберілді": "toast-deadline-ok",
      "✅ Дедлайн добавлен и отправлен на email": "toast-deadline-ok",
      "✅ Deadline added and sent to email": "toast-deadline-ok",
      "✅ Son tarih eklendi ve e-posta gönderildi": "toast-deadline-ok",
      "⚠️ Алдымен сұрағыңды жаз!": "toast-warn-question",
      "⚠️ Сначала напишите вопрос!": "toast-warn-question",
      "⚠️ Please write your question first!": "toast-warn-question",
      "⚠️ Önce sorunuzu yazın!": "toast-warn-question",
      "⚠️ Өткен күнді таңдауға болмайды!": "toast-warn-date",
      "⚠️ Нельзя выбрать прошедшую дату!": "toast-warn-date",
      "⚠️ You cannot select a past date!": "toast-warn-date",
      "⚠️ Geçmiş bir tarih seçilemez!": "toast-warn-date",
      "⚠️ Белсенді консультация бар. Алдыңғысы аяқталсын.": "toast-warn-active",
      "⚠️ У вас уже есть активная консультация. Дождитесь завершения предыдущей.": "toast-warn-active",
      "⚠️ You already have an active consultation. Please wait until the previous one is completed.": "toast-warn-active",
      "⚠️ Aktif bir danışmanlığınız var. Önceki danışmanlığın tamamlanmasını bekleyin.": "toast-warn-active",
    };
 
    const key = toastKeyMap[msg];
    const translated = key ? t(key) : msg;
 
    if (typeof _oldShowToast === "function") return _oldShowToast(translated);
 
    const toast = document.getElementById("profileToast");
    if (toast) {
      toast.textContent = translated;
      toast.style.display = "block";
      setTimeout(() => toast.style.display = "none", 2500);
    }
  };
 
  // ════════════════════════════════════════════════════════════════
  // INIT
  // ════════════════════════════════════════════════════════════════
  document.addEventListener("DOMContentLoaded", function () {
    applyProfileI18n();
 
    // MutationObserver — динамикалық контент үшін
    const observer = new MutationObserver(function () {
      clearTimeout(window.__profileI18nTimer);
      window.__profileI18nTimer = setTimeout(applyProfileI18n, 80);
    });
    observer.observe(document.body, {
      childList: true, subtree: true, characterData: false,
    });
  });
 
})();