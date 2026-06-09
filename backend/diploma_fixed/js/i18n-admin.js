(function () {
 
  /* ═══════════════════════════════════════════════
     D — аударма сөздігі  {қазақша: {ru:.., en:.., tr:..}}
  ═══════════════════════════════════════════════ */
  const D = {
 
    /* ── НАВИГАЦИЯ ── */
    "Басты бет":      { ru:"Главная",       en:"Home",          tr:"Ana Sayfa"      },
    "Мамандықтар":   { ru:"Специальности", en:"Specialties",   tr:"Uzmanlıklar"    },
    "Университеттер":{ ru:"Университеты",  en:"Universities",  tr:"Üniversiteler"  },
    "Дайындық":      { ru:"Подготовка",    en:"Preparation",   tr:"Hazırlık"       },
    "Лента":         { ru:"Лента",         en:"Feed",          tr:"Akış"           },
    "Профиль":       { ru:"Профиль",       en:"Profile",       tr:"Profil"         },
    "Шығу":          { ru:"Выйти",         en:"Logout",        tr:"Çıkış"          },
 
    /* ── SIDEBAR ── */
    "EduBridge Türkiye платформасын басқару орталығы.":
      { ru:"Центр управления платформой EduBridge Türkiye.",
        en:"Management center for the EduBridge Türkiye platform.",
        tr:"EduBridge Türkiye platformu yönetim merkezi." },
    "Dashboard":          { ru:"Дашборд",        en:"Dashboard",        tr:"Kontrol Paneli"   },
    "Студенттер":         { ru:"Студенты",        en:"Students",         tr:"Öğrenciler"       },
    "📁 Құжаттар":        { ru:"📁 Документы",    en:"📁 Documents",     tr:"📁 Belgeler"      },
    "👨‍🏫 Менторлар":      { ru:"👨‍🏫 Менторы",     en:"👨‍🏫 Mentors",       tr:"👨‍🏫 Danışmanlar"  },
    "Өтініштер":          { ru:"Заявки",          en:"Applications",     tr:"Başvurular"       },
    "Консультациялар":    { ru:"Консультации",    en:"Consultations",    tr:"Danışmanlıklar"   },
    "Лента контенті":     { ru:"Контент ленты",   en:"Feed Content",     tr:"Akış İçeriği"     },
    "Хабарламалар":       { ru:"Уведомления",     en:"Notifications",    tr:"Bildirimler"      },
    "📊 Аналитика":       { ru:"📊 Аналитика",    en:"📊 Analytics",     tr:"📊 Analitik"      },
 
    /* ── HERO ── */
    "Platform Management":
      { ru:"Управление платформой", en:"Platform Management", tr:"Platform Yönetimi" },
    "Админ басқару панелі":
      { ru:"Панель управления администратора", en:"Admin Control Panel", tr:"Yönetici Kontrol Paneli" },
    "Бұл жерде студенттер, өтініштер, консультациялар, университеттер, лента контенті және platform notifications басқарылады.":
      { ru:"Здесь управляются студенты, заявки, консультации, университеты, контент ленты и уведомления платформы.",
        en:"Here you manage students, applications, consultations, universities, feed content and platform notifications.",
        tr:"Burada öğrenciler, başvurular, danışmanlıklar, üniversiteler, akış içeriği ve platform bildirimleri yönetilir." },
 
    /* ── DASHBOARD ПАНЕЛИ ── */
    "Соңғы белсенділік":
      { ru:"Последняя активность",  en:"Recent Activity",   tr:"Son Aktivite"     },
    "Платформадағы соңғы әрекеттер.":
      { ru:"Последние действия на платформе.", en:"Latest actions on the platform.", tr:"Platformdaki son işlemler." },
    "Platform Health":
      { ru:"Состояние платформы",   en:"Platform Health",   tr:"Platform Durumu"  },
    "Жүйедегі негізгі көрсеткіштер.":
      { ru:"Основные показатели системы.", en:"Key system indicators.", tr:"Temel sistem göstergeleri." },
    "Document readiness":
      { ru:"Готовность документов", en:"Document readiness", tr:"Belge hazırlığı"  },
    "Студенттердің құжат дайындық орташа деңгейі":
      { ru:"Средний уровень готовности документов студентов",
        en:"Average document readiness level of students",
        tr:"Öğrencilerin belge hazırlık ortalama düzeyi" },
    "Interview readiness":
      { ru:"Готовность к интервью", en:"Interview readiness", tr:"Mülakat hazırlığı" },
    "Сұхбатқа дайындық status":
      { ru:"Статус готовности к интервью", en:"Interview readiness status", tr:"Mülakat hazırlık durumu" },
 
    /* ── DASHBOARD КАРТОЧКАЛАР ── */
    "Соңғы студент":      { ru:"Последний студент",      en:"Last student",        tr:"Son öğrenci"        },
    "Соңғы өтініш":       { ru:"Последняя заявка",       en:"Last application",    tr:"Son başvuru"        },
    "Соңғы консультация": { ru:"Последняя консультация", en:"Last consultation",   tr:"Son danışmanlık"    },
    "Әзірге студент жоқ": { ru:"Студентов пока нет",     en:"No students yet",     tr:"Henüz öğrenci yok" },
    "Әзірге өтініш жоқ":  { ru:"Заявок пока нет",        en:"No applications yet", tr:"Henüz başvuru yok" },
    "Әзірге консультация жоқ":
      { ru:"Консультаций пока нет", en:"No consultations yet", tr:"Henüz danışmanlık yok" },
    "Major көрсетілмеген":
      { ru:"Направление не указано", en:"Major not specified", tr:"Alan belirtilmemiş" },
 
    /* ── СТУДЕНТТЕР ── */
    "Студенттер тізімі":
      { ru:"Список студентов", en:"Students List", tr:"Öğrenci Listesi" },
    "Студенттерді қосу, status бақылау.":
      { ru:"Добавление студентов, отслеживание статуса.", en:"Add students, track status.", tr:"Öğrenci ekleme, durum takibi." },
    "Аты":               { ru:"Имя",        en:"Name",     tr:"İsim"    },
    "Email":             { ru:"Email",      en:"Email",    tr:"E-posta" },
    "Қызығатын бағыт":   { ru:"Направление интереса", en:"Area of Interest", tr:"İlgi Alanı" },
    "Студент қосу":      { ru:"Добавить студента",    en:"Add Student",      tr:"Öğrenci Ekle" },
    "Студент жоқ":       { ru:"Студентов нет",        en:"No students",      tr:"Öğrenci yok"  },
    "Профиль толтырылғанда немесе admin қосқанда осында шығады.":
      { ru:"Появится, когда профиль заполнен или добавлен администратором.",
        en:"Will appear when profile is filled or added by admin.",
        tr:"Profil doldurulduğunda veya admin eklediğinde burada görünür." },
    "Қала жоқ":          { ru:"Город не указан", en:"No city",   tr:"Şehir yok"  },
    "Қала көрсетілмеген":{ ru:"Город не указан", en:"No city",   tr:"Şehir yok"  },
 
    /* ── ӨТІНІШТЕР ── */
    "Application Tracking":
      { ru:"Отслеживание заявок", en:"Application Tracking", tr:"Başvuru Takibi" },
    "Студенттердің application status бақылау.":
      { ru:"Отслеживание статуса заявок студентов.", en:"Track student application statuses.", tr:"Öğrenci başvuru durumlarını takip edin." },
    "Студент":   { ru:"Студент",     en:"Student",    tr:"Öğrenci"    },
    "Университет":{ ru:"Университет", en:"University", tr:"Üniversite" },
    "Бағыт":     { ru:"Направление", en:"Field",      tr:"Alan"       },
    "Аяқталды":  { ru:"Завершено",   en:"Completed",  tr:"Tamamlandı" },
    "Өтініштер жоқ":
      { ru:"Заявок нет", en:"No applications", tr:"Başvuru yok" },
 
    /* ── КОНСУЛЬТАЦИЯЛАР ── */
    "📅 Консультация өтініштері":
      { ru:"📅 Запросы на консультацию", en:"📅 Consultation Requests", tr:"📅 Danışmanlık Talepleri" },
    "Студент өтініштерін растап, Zoom/Meet сілтемесі мен уақыт беріңіз.":
      { ru:"Подтвердите запросы студентов, укажите ссылку Zoom/Meet и время.",
        en:"Confirm student requests and provide a Zoom/Meet link and time.",
        tr:"Öğrenci taleplerini onaylayın, Zoom/Meet bağlantısı ve zaman girin." },
    "Консультация өтінімі жоқ.":
      { ru:"Запросов на консультацию нет.", en:"No consultation requests.", tr:"Danışmanlık talebi yok." },
    "Студенттер профиль бетінен консультация сұраған кезде осы жерде көрінеді.":
      { ru:"Появится, когда студенты запросят консультацию через страницу профиля.",
        en:"Will appear when students request a consultation from their profile page.",
        tr:"Öğrenciler profil sayfasından danışmanlık talep ettiğinde burada görünür." },
    "👇 Менторды таңдап тағайындаңыз — ментор уақыт пен сілтемені өзі бекітеді":
      { ru:"👇 Выберите и назначьте ментора — он сам подтвердит время и ссылку",
        en:"👇 Select and assign a mentor — they will confirm the time and link",
        tr:"👇 Danışman seçin ve atayın — zaman ve bağlantıyı kendisi onaylayacak" },
    "-- Ментор таңдаңыз --":
      { ru:"-- Выберите ментора --", en:"-- Select a Mentor --", tr:"-- Danışman Seçin --" },
    "👨‍🏫 Менторға жіберу":
      { ru:"👨‍🏫 Отправить ментору", en:"👨‍🏫 Send to Mentor", tr:"👨‍🏫 Danışmana Gönder" },
    "❌ Қабылдамау":  { ru:"❌ Отклонить", en:"❌ Reject",  tr:"❌ Reddet" },
    "🚫 Бас тарту":   { ru:"🚫 Отменить", en:"🚫 Cancel",  tr:"🚫 İptal"  },
    "✔️ Өтілді":     { ru:"✔️ Проведено", en:"✔️ Completed", tr:"✔️ Tamamlandı" },
    "✅ Расталды":    { ru:"✅ Подтверждено", en:"✅ Approved", tr:"✅ Onaylandı"  },
    "❌ Қабылданбады":{ ru:"❌ Отклонено",    en:"❌ Rejected", tr:"❌ Reddedildi" },
    "🚫 Бас тартылды":{ ru:"🚫 Отменено",    en:"🚫 Cancelled", tr:"🚫 İptal edildi" },
    "👨‍🏫 Менторға жіберілді":
      { ru:"👨‍🏫 Отправлено ментору", en:"👨‍🏫 Sent to Mentor", tr:"👨‍🏫 Danışmana Gönderildi" },
    "💳 Төленді · Ментор күтілуде":
      { ru:"💳 Оплачено · Ожидание ментора", en:"💳 Paid · Awaiting Mentor", tr:"💳 Ödendi · Danışman bekleniyor" },
    "⏳ Күтілуде (төленбеген)":
      { ru:"⏳ Ожидание (не оплачено)", en:"⏳ Pending (unpaid)", tr:"⏳ Beklemede (ödenmedi)" },
    "📅 Уақыт:":  { ru:"📅 Время:",   en:"📅 Time:",    tr:"📅 Zaman:"  },
    "🔗 Сілтеме:":{ ru:"🔗 Ссылка:", en:"🔗 Link:",    tr:"🔗 Bağlantı:" },
    "уақыт пен сілтемені бекітуде...":
      { ru:"подтверждает время и ссылку...", en:"confirming time and link...", tr:"zamanı ve bağlantıyı onaylıyor..." },
    "Консультация өтілді":
      { ru:"Консультация проведена", en:"Consultation completed", tr:"Danışmanlık tamamlandı" },
 
    /* ── УНИВЕРСИТЕТТЕР ── */
    "Университеттерді басқару":
      { ru:"Управление университетами", en:"Universities Management", tr:"Üniversite Yönetimi" },
    "Платформадағы университеттер тізімі.":
      { ru:"Список университетов на платформе.", en:"List of universities on the platform.", tr:"Platformdaki üniversiteler listesi." },
    "Университет атауы":
      { ru:"Название университета", en:"University Name", tr:"Üniversite Adı" },
    "Қала":    { ru:"Город",        en:"City",     tr:"Şehir"     },
    "Бағыттар":{ ru:"Направления",  en:"Programs", tr:"Programlar"},
    "Тип / оқу тілі":
      { ru:"Тип / язык обучения", en:"Type / language", tr:"Tür / öğretim dili" },
    "Университет қосу":
      { ru:"Добавить университет", en:"Add University", tr:"Üniversite Ekle" },
 
    /* ── ЛЕНТА / КОНТЕНТ ── */
    "📰 Лента — Контент басқару":
      { ru:"📰 Лента — Управление контентом", en:"📰 Feed — Content Management", tr:"📰 Akış — İçerik Yönetimi" },
    "Пост қосу, өзгерту, жою және қанша адам көргенін бақылау.":
      { ru:"Добавление, редактирование, удаление постов и отслеживание просмотров.",
        en:"Add, edit, delete posts and track views.",
        tr:"Gönderi ekleme, düzenleme, silme ve görüntülenme takibi." },
    "📰 Постар":  { ru:"📰 Посты",     en:"📰 Posts",    tr:"📰 Gönderiler" },
    "📱 Сторис":  { ru:"📱 Сторис",    en:"📱 Stories",  tr:"📱 Hikayeler"  },
    "➕ Жаңа пост қосу":
      { ru:"➕ Добавить новый пост", en:"➕ Add New Post", tr:"➕ Yeni Gönderi Ekle" },
    "✏️ Постты өзгерту":
      { ru:"✏️ Редактировать пост", en:"✏️ Edit Post", tr:"✏️ Gönderiyi Düzenle" },
    "Пост тақырыбы":
      { ru:"Заголовок поста", en:"Post Title", tr:"Gönderi Başlığı" },
    "Категория":  { ru:"Категория",   en:"Category", tr:"Kategori"  },
    "Мазмұны":    { ru:"Содержание",  en:"Content",  tr:"İçerik"    },
    "💾 Жариялау":{ ru:"💾 Опубликовать", en:"💾 Publish", tr:"💾 Yayınla" },
    "Болдырмау":  { ru:"Отмена",      en:"Cancel",   tr:"İptal"     },
    "Фото қосу (міндетті емес)":
      { ru:"Добавить фото (необязательно)", en:"Add photo (optional)", tr:"Fotoğraf ekle (isteğe bağlı)" },
    "🖼️ Фото таңдау":
      { ru:"🖼️ Выбрать фото", en:"🖼️ Pick Photo", tr:"🖼️ Fotoğraf Seç" },
    "Фото таңдалмаған":
      { ru:"Фото не выбрано", en:"No photo selected", tr:"Fotoğraf seçilmedi" },
    "Бар фото":   { ru:"Текущее фото", en:"Current photo", tr:"Mevcut fotoğraf" },
    "Пост жоқ. Жоғарыдан қосыңыз.":
      { ru:"Постов нет. Добавьте выше.", en:"No posts. Add one above.", tr:"Gönderi yok. Yukarıdan ekleyin." },
    "✏️ Өзгерту": { ru:"✏️ Редактировать", en:"✏️ Edit",   tr:"✏️ Düzenle" },
    "🗑️ Жою":     { ru:"🗑️ Удалить",       en:"🗑️ Delete", tr:"🗑️ Sil"     },
 
    /* ── СТОРИС ── */
    "➕ Жаңа сторис":
      { ru:"➕ Новый сторис", en:"➕ New Story", tr:"➕ Yeni Hikaye" },
    "Сторис тексті":
      { ru:"Текст сториса", en:"Story text", tr:"Hikaye metni" },
    "Түсі (gradient)":
      { ru:"Цвет (градиент)", en:"Color (gradient)", tr:"Renk (gradyan)" },
    "Қызыл":  { ru:"Красный",     en:"Red",    tr:"Kırmızı" },
    "Көк":    { ru:"Синий",       en:"Blue",   tr:"Mavi"    },
    "Жасыл":  { ru:"Зелёный",     en:"Green",  tr:"Yeşil"   },
    "Күлгін": { ru:"Фиолетовый",  en:"Purple", tr:"Mor"     },
    "Сары":   { ru:"Жёлтый",      en:"Yellow", tr:"Sarı"    },
    "Сторис фото (міндетті емес)":
      { ru:"Фото для сториса (необязательно)", en:"Story photo (optional)", tr:"Hikaye fotoğrafı (isteğe bağlı)" },
    "Таңдалмаған":
      { ru:"Не выбрано", en:"Not selected", tr:"Seçilmedi" },
    "📱 Сторис жариялау":
      { ru:"📱 Опубликовать сторис", en:"📱 Publish Story", tr:"📱 Hikayeyi Yayınla" },
    "Сторис жоқ":
      { ru:"Сторисов нет", en:"No stories", tr:"Hikaye yok" },
    "Өтті": { ru:"Истекло", en:"Expired", tr:"Süresi doldu" },
    "Сторис мәтінін жаз!":
      { ru:"Напиши текст сториса!", en:"Write story text!", tr:"Hikaye metnini yaz!" },
 
    /* ── МЕНТОРЛАР ── */
    "👨‍🏫 Менторлар":
      { ru:"👨‍🏫 Менторы", en:"👨‍🏫 Mentors", tr:"👨‍🏫 Danışmanlar" },
    "Ментор аккаунттарын басқару және студенттерге тағайындау.":
      { ru:"Управление аккаунтами менторов и назначение студентам.",
        en:"Manage mentor accounts and assign students.",
        tr:"Danışman hesaplarını yönetin ve öğrenci atayın." },
    "➕ Жаңа ментор қосу":
      { ru:"➕ Добавить нового ментора", en:"➕ Add New Mentor", tr:"➕ Yeni Danışman Ekle" },
    "Аты-жөні":         { ru:"ФИО",                  en:"Full Name",      tr:"Tam Adı"         },
    "Email (логин)":    { ru:"Email (логин)",         en:"Email (login)",  tr:"E-posta (giriş)" },
    "Пароль":           { ru:"Пароль",                en:"Password",       tr:"Şifre"           },
    "Мамандық / бағыт": { ru:"Специальность / направление", en:"Specialty / field", tr:"Uzmanlık / alan" },
    "Тел / байланыс":   { ru:"Тел / контакт",        en:"Phone / contact", tr:"Tel / iletişim"  },
    "👨‍🏫 Ментор қосу":
      { ru:"👨‍🏫 Добавить ментора", en:"👨‍🏫 Add Mentor", tr:"👨‍🏫 Danışman Ekle" },
    "Ментор жоқ. Жоғарыдан қосыңыз.":
      { ru:"Менторов нет. Добавьте выше.", en:"No mentors. Add one above.", tr:"Danışman yok. Yukarıdan ekleyin." },
    "👨‍🏫 Ментор":
      { ru:"👨‍🏫 Ментор", en:"👨‍🏫 Mentor", tr:"👨‍🏫 Danışman" },
    "студент":          { ru:"студент",     en:"student(s)", tr:"öğrenci"  },
    "📋 Деректер":      { ru:"📋 Данные",   en:"📋 Credentials", tr:"📋 Bilgiler" },
    "🔗 Студентті менторға тағайындау":
      { ru:"🔗 Назначить студента ментору", en:"🔗 Assign Student to Mentor", tr:"🔗 Öğrenciyi Danışmana Ata" },
    "Ментор":           { ru:"Ментор",      en:"Mentor",    tr:"Danışman" },
    "🔗 Тағайындау":    { ru:"🔗 Назначить", en:"🔗 Assign", tr:"🔗 Ata"   },
    "Студент жоқ":      { ru:"Студентов нет", en:"No students", tr:"Öğrenci yok"  },
    "Ментор жоқ":       { ru:"Менторов нет",  en:"No mentors",  tr:"Danışman yok" },
    "Ментор табылмады!":
      { ru:"Ментор не найден!", en:"Mentor not found!", tr:"Danışman bulunamadı!" },
    "Студент пен менторды таңда!":
      { ru:"Выбери студента и ментора!", en:"Select a student and mentor!", tr:"Öğrenci ve danışman seçin!" },
    "Аты, email және пароль міндетті!":
      { ru:"Имя, email и пароль обязательны!", en:"Name, email and password are required!", tr:"İsim, e-posta ve şifre zorunludur!" },
    "менторға тағайындалды":
      { ru:"назначен(а) ментору", en:"assigned to mentor", tr:"danışmana atandı" },
    "ментор ретінде қосылды":
      { ru:"добавлен(а) как ментор", en:"added as mentor", tr:"danışman olarak eklendi" },
    "Бұл менторды жою керек пе?":
      { ru:"Удалить этого ментора?", en:"Delete this mentor?", tr:"Bu danışmanı silmek istiyor musunuz?" },
    "Тағайындау алынды":
      { ru:"Назначение снято", en:"Assignment removed", tr:"Atama kaldırıldı" },
 
    /* ── ҚҰЖАТТАР ── */
    "📁 Студент құжаттары":
      { ru:"📁 Документы студентов", en:"📁 Student Documents", tr:"📁 Öğrenci Belgeleri" },
    "Студенттер жүктеген барлық файлдарды тексеру және растау.":
      { ru:"Проверка и подтверждение всех файлов, загруженных студентами.",
        en:"Review and confirm all files uploaded by students.",
        tr:"Öğrencilerin yüklediği tüm dosyaları inceleyin ve onaylayın." },
    "Жүктелген файлдар жоқ.":
      { ru:"Загруженных файлов нет.", en:"No uploaded files.", tr:"Yüklenen dosya yok." },
    "Студенттер Дайындық бетінен файл жүктегенде осы жерде автоматты түрде көрінеді.":
      { ru:"Появится автоматически, когда студенты загрузят файлы со страницы подготовки.",
        en:"Will appear automatically when students upload files from the preparation page.",
        tr:"Öğrenciler hazırlık sayfasından dosya yüklediğinde otomatik olarak görünür." },
    "файл":             { ru:"файл(ов)",     en:"file(s)",   tr:"dosya"    },
    "расталды":         { ru:"подтверждено", en:"confirmed", tr:"onaylandı"},
    "👁️ Ашу":           { ru:"👁️ Открыть",  en:"👁️ Open",   tr:"👁️ Aç"   },
    "⬇️ Жүктеу":        { ru:"⬇️ Скачать",  en:"⬇️ Download",tr:"⬇️ İndir"},
    "Деректер жоқ":     { ru:"Данных нет",   en:"No data",   tr:"Veri yok" },
    "Күтілуде":         { ru:"Ожидание",     en:"Pending",   tr:"Beklemede"},
    "Расталды":         { ru:"Подтверждено", en:"Confirmed", tr:"Onaylandı"},
    "Қабылданбады":     { ru:"Отклонено",    en:"Rejected",  tr:"Reddedildi"},
    "✓ Барлығын растау":
      { ru:"✓ Подтвердить все", en:"✓ Confirm All", tr:"✓ Tümünü Onayla" },
    "✗ Барлығын қабылдамау":
      { ru:"✗ Отклонить все", en:"✗ Reject All", tr:"✗ Tümünü Reddet" },
    "Барлық файлдарды қабылдамау?":
      { ru:"Отклонить все файлы?", en:"Reject all files?", tr:"Tüm dosyaları reddet?" },
 
    /* ── ХАБАРЛАМАЛАР ── */
    "Admin Notifications":
      { ru:"Уведомления Администратора", en:"Admin Notifications", tr:"Yönetici Bildirimleri" },
    "Студенттерге жіберілетін ескертулер.":
      { ru:"Уведомления, отправляемые студентам.", en:"Notifications sent to students.", tr:"Öğrencilere gönderilen bildirimler." },
    "Хабарлама тақырыбы":
      { ru:"Тема уведомления", en:"Notification Title", tr:"Bildirim Başlığı" },
    "Мәтін":            { ru:"Текст",             en:"Text",              tr:"Metin"          },
    "Хабарлама қосу":   { ru:"Добавить уведомление", en:"Add Notification", tr:"Bildirim Ekle" },
    "Хабарлама жоқ":    { ru:"Уведомлений нет",    en:"No notifications",  tr:"Bildirim yok"  },
    "Жаңа notification қос.":
      { ru:"Добавьте новое уведомление.", en:"Add a new notification.", tr:"Yeni bir bildirim ekleyin." },
    "Send":             { ru:"Отправить",          en:"Send",              tr:"Gönder"         },
    "Sent":             { ru:"Отправлено",          en:"Sent",              tr:"Gönderildi"     },
    "Draft":            { ru:"Черновик",            en:"Draft",             tr:"Taslak"         },
 
    /* ── АНАЛИТИКА ── */
    "Платформа статистикасы мен көрсеткіштері.":
      { ru:"Статистика и показатели платформы.", en:"Platform statistics and metrics.", tr:"Platform istatistikleri ve metrikleri." },
    "Барлық студент":   { ru:"Всего студентов",          en:"Total Students",    tr:"Toplam Öğrenci"      },
    "Менторлар":        { ru:"Менторы",                   en:"Mentors",           tr:"Danışmanlar"         },
    "Консультация":     { ru:"Консультации",              en:"Consultations",     tr:"Danışmanlıklar"      },
    "Төленген":         { ru:"Оплачено",                  en:"Paid",              tr:"Ödendi"              },
    "Жүктелген файл":   { ru:"Загруженных файлов",        en:"Uploaded Files",    tr:"Yüklenen Dosya"      },
    "Расталған файл":   { ru:"Подтверждённых файлов",     en:"Confirmed Files",   tr:"Onaylanan Dosya"     },
    "Жарияланған пост": { ru:"Опубликованных постов",     en:"Published Posts",   tr:"Yayınlanan Gönderi"  },
    "Жалпы көрілім":    { ru:"Всего просмотров",          en:"Total Views",       tr:"Toplam Görüntüleme"  },
    "🎓 Ең танымал мамандықтар":
      { ru:"🎓 Самые популярные специальности", en:"🎓 Most Popular Specialties", tr:"🎓 En Popüler Uzmanlıklar" },
    "Деректер жоқ":     { ru:"Данных нет",  en:"No data",  tr:"Veri yok"  },
    "студент":          { ru:"студент",     en:"student",  tr:"öğrenci"   },
 
    /* ── ЖАЛПЫ БАТОНДАР / TOAST ХАБАРЛАРЫ ── */
    "🔄 Жаңарту":       { ru:"🔄 Обновить",  en:"🔄 Refresh", tr:"🔄 Yenile"    },
    "Өшіру":            { ru:"Удалить",      en:"Delete",     tr:"Sil"          },
    "Сақталды":         { ru:"Сохранено",    en:"Saved",      tr:"Kaydedildi"   },
    "Жаңартылды":       { ru:"Обновлено",    en:"Updated",    tr:"Güncellendi"  },
    "Статус жаңартылды":{ ru:"Статус обновлён", en:"Status updated", tr:"Durum güncellendi" },
    "Студент қосылды":  { ru:"Студент добавлен",   en:"Student added",   tr:"Öğrenci eklendi"  },
    "Аты мен email толтыр":
      { ru:"Заполни имя и email", en:"Fill in name and email", tr:"İsim ve e-posta girin" },
    "Хабарлама жіберілді":
      { ru:"Уведомление отправлено", en:"Notification sent", tr:"Bildirim gönderildi" },
    "Хабарлама тақырыбы мен мәтінін толтыр":
      { ru:"Заполни тему и текст уведомления", en:"Fill in notification title and text", tr:"Bildirim başlığını ve metnini doldurun" },
    "Пост атауы мен мәтінді толтыр":
      { ru:"Заполни название и текст поста", en:"Fill in post title and text", tr:"Gönderi başlığını ve metnini doldurun" },
    "Тақырып пен мазмұнды толтыр!":
      { ru:"Заполни заголовок и содержание!", en:"Fill in title and content!", tr:"Başlık ve içeriği doldurun!" },
    "Пост жарияланды!": { ru:"Пост опубликован!",  en:"Post published!",  tr:"Gönderi yayınlandı!"  },
    "Пост жаңартылды":  { ru:"Пост обновлён",      en:"Post updated",     tr:"Gönderi güncellendi"  },
    "Пост жойылды":     { ru:"Пост удалён",         en:"Post deleted",     tr:"Gönderi silindi"      },
    "Бұл постты жоюды растайсыз ба?":
      { ru:"Подтвердите удаление поста?", en:"Confirm post deletion?", tr:"Gönderiyi silmeyi onaylıyor musunuz?" },
    "✅ Пост жарияланды!":
      { ru:"✅ Пост опубликован!", en:"✅ Post published!", tr:"✅ Gönderi yayınlandı!" },
    "✅ Сторис жарияланды!":
      { ru:"✅ Сторис опубликован!", en:"✅ Story published!", tr:"✅ Hikaye yayınlandı!" },
    "📋 Деректер көшірілді":
      { ru:"📋 Данные скопированы", en:"📋 Credentials copied", tr:"📋 Bilgiler kopyalandı" },
    "✓ Барлық файлдар расталды":
      { ru:"✓ Все файлы подтверждены", en:"✓ All files confirmed", tr:"✓ Tüm dosyalar onaylandı" },
    "Файлдар қабылданбады деп белгіленді":
      { ru:"Файлы помечены как отклонённые", en:"Files marked as rejected", tr:"Dosyalar reddedildi olarak işaretlendi" },
    "✓ Статус жаңартылды:":
      { ru:"✓ Статус обновлён:", en:"✓ Status updated:", tr:"✓ Durum güncellendi:" },
    "Өтінім қабылданбады деп белгіленді":
      { ru:"Запрос помечен как отклонённый", en:"Request marked as rejected", tr:"Talep reddedildi olarak işaretlendi" },
    "🚫 Консультация бас тартылды":
      { ru:"🚫 Консультация отменена", en:"🚫 Consultation cancelled", tr:"🚫 Danışmanlık iptal edildi" },
    "✅ Консультация расталды — студентке жіберілді!":
      { ru:"✅ Консультация подтверждена — отправлена студенту!",
        en:"✅ Consultation confirmed — sent to student!",
        tr:"✅ Danışmanlık onaylandı — öğrenciye gönderildi!" },
    "Бұл өтінімді қабылдамау керек пе?":
      { ru:"Отклонить этот запрос?", en:"Reject this request?", tr:"Bu talebi reddetmek istiyor musunuz?" },
    "Бас тарту себебін жазыңыз (міндетті емес):":
      { ru:"Укажите причину отмены (необязательно):", en:"Enter cancellation reason (optional):", tr:"İptal gerekçesini girin (isteğe bağlı):" },
    "⚠️ Ментор таңдаңыз!":
      { ru:"⚠️ Выберите ментора!", en:"⚠️ Select a mentor!", tr:"⚠️ Danışman seçin!" },
    "❌ Бұл email тіркелген!":
      { ru:"❌ Этот email уже зарегистрирован!", en:"❌ This email is already registered!", tr:"❌ Bu e-posta zaten kayıtlı!" },
    "❌ Бұл email менторда бар!":
      { ru:"❌ Этот email уже используется ментором!", en:"❌ This email is already used by a mentor!", tr:"❌ Bu e-posta zaten bir danışman tarafından kullanılıyor!" },
    "Ментор жойылды":
      { ru:"Ментор удалён", en:"Mentor deleted", tr:"Danışman silindi" },
    "🔒 Аккаунт блокталды":
      { ru:"🔒 Аккаунт заблокирован", en:"🔒 Account blocked", tr:"🔒 Hesap engellendi" },
    "🔓 Блок алынды":
      { ru:"🔓 Блокировка снята", en:"🔓 Block removed", tr:"🔓 Engel kaldırıldı" },
    "Рөл өзгертілді:":
      { ru:"Роль изменена:", en:"Role changed:", tr:"Rol değiştirildi:" },
    "❌ Файл деректері табылмады":
      { ru:"❌ Данные файла не найдены", en:"❌ File data not found", tr:"❌ Dosya verisi bulunamadı" },
    "Popup блокталды — браузер рұқсатын тексер":
      { ru:"Popup заблокирован — проверь разрешения браузера",
        en:"Popup blocked — check browser permissions",
        tr:"Popup engellendi — tarayıcı izinlerini kontrol edin" },
    "Фото 2MB-дан аз болу керек!":
      { ru:"Фото должно быть меньше 2MB!", en:"Photo must be less than 2MB!", tr:"Fotoğraf 2MB'dan küçük olmalı!" },
    "Фото 2MB аз болу керек!":
      { ru:"Фото должно быть меньше 2MB!", en:"Photo must be less than 2MB!", tr:"Fotoğraf 2MB'dan küçük olmalı!" },
    "Университет қосылды":
      { ru:"Университет добавлен", en:"University added", tr:"Üniversite eklendi" },
    "Аты мен күнін толтыр":
      { ru:"Заполни имя и дату", en:"Fill in name and date", tr:"İsim ve tarihi doldurun" },
    "Уақыт пен сілтемені толтыр!":
      { ru:"Заполни время и ссылку!", en:"Fill in time and link!", tr:"Zaman ve bağlantıyı doldurun!" },
    "Ментор жоқ. Жоғарыдан қосыңыз.":
      { ru:"Менторов нет. Добавьте выше.", en:"No mentors. Add one above.", tr:"Danışman yok. Yukarıdan ekleyin." },
 
    /* ── ANALYTICS — statCard labels ── */
    "👥 Барлық студент":
      { ru:"👥 Всего студентов", en:"👥 Total Students", tr:"👥 Toplam Öğrenci" },
    "Белгісіз":
      { ru:"Неизвестно", en:"Unknown", tr:"Bilinmiyor" },
 
    /* ── УНИВЕРСИТЕТ ФОРМАСЫ (admin-universities-full.js) ── */
    "Неге осы университет? (әр жол — бөлек пункт)":
      { ru:"Почему этот университет? (каждая строка — отдельный пункт)",
        en:"Why this university? (each line = separate point)",
        tr:"Neden bu üniversite? (her satır ayrı madde)" },
    "Admission requirements (әр жол — бөлек пункт)":
      { ru:"Требования к поступлению (каждая строка — отдельный пункт)",
        en:"Admission requirements (each line = separate point)",
        tr:"Kabul gereksinimleri (her satır ayrı madde)" },
    "Мамандықтар / faculties (әр жол — бөлек пункт)":
      { ru:"Специальности / факультеты (каждая строка — отдельный пункт)",
        en:"Specialties / faculties (each line = separate point)",
        tr:"Uzmanlıklar / fakülteler (her satır ayrı madde)" },
    "Барлығы:":
      { ru:"Всего:", en:"Total:", tr:"Toplam:" },
    "бет":
      { ru:"стр.", en:"page", tr:"sayfa" },
    "✏️ Өңдеу":
      { ru:"✏️ Редактировать", en:"✏️ Edit", tr:"✏️ Düzenle" },
    "Өшіру":
      { ru:"Удалить", en:"Delete", tr:"Sil" },
    /* ── Uni card dynamic texts ── */
    "Барлығы: ":
      { ru:"Всего: ", en:"Total: ", tr:"Toplam: " },
    "🏛 Толық университет қосу":
      { ru:"🏛 Добавить полный университет", en:"🏛 Add Full University", tr:"🏛 Tam Üniversite Ekle" },
    "Университет атауы *":
      { ru:"Название университета *", en:"University Name *", tr:"Üniversite Adı *" },
    "Қала *":    { ru:"Город *",    en:"City *",    tr:"Şehir *"    },
    "Ел":        { ru:"Страна",     en:"Country",   tr:"Ülke"       },
    "Түрі":      { ru:"Тип",        en:"Type",      tr:"Tür"        },
    "Оқыту тілі":{ ru:"Язык обучения", en:"Language of instruction", tr:"Öğretim dili" },
    "Деңгейлер": { ru:"Уровни",     en:"Levels",    tr:"Düzeyler"   },
    "Оқу форматы":{ ru:"Формат обучения", en:"Study format", tr:"Öğrenim formatı" },
    "Бағыттар / бағдарламалар":
      { ru:"Направления / программы", en:"Fields / programs", tr:"Alanlar / programlar" },
    "Фото жүктеу":
      { ru:"Загрузить фото", en:"Upload photo", tr:"Fotoğraf yükle" },
    "Компьютерден фото таңда. URL міндетті емес.":
      { ru:"Выбери фото с компьютера. URL необязателен.",
        en:"Choose photo from computer. URL is optional.",
        tr:"Bilgisayardan fotoğraf seçin. URL isteğe bağlıdır." },
    "Немесе Фото URL":
      { ru:"Или URL фото", en:"Or Photo URL", tr:"Veya Fotoğraf URL" },
    "Hero / қысқаша сипаттама":
      { ru:"Hero / краткое описание", en:"Hero / short description", tr:"Hero / kısa açıklama" },
    "Неге осы университет? (әр жол — бөлек пункт)":
      { ru:"Почему этот университет? (каждая строка — отдельный пункт)",
        en:"Why this university? (each line = separate point)",
        tr:"Neden bu üniversite? (her satır ayrı madde)" },
    "Admission requirements (әр жол — бөлек пункт)":
      { ru:"Требования к поступлению (каждая строка — отдельный пункт)",
        en:"Admission requirements (each line = separate point)",
        tr:"Kabul gereksinimleri (her satır ayrı madde)" },
    "Мамандықтар / faculties (әр жол — бөлек пункт)":
      { ru:"Специальности / факультеты (каждая строка — отдельный пункт)",
        en:"Specialties / faculties (each line = separate point)",
        tr:"Uzmanlıklar / fakülteler (her satır ayrı madde)" },
    "Scholarships":
      { ru:"Стипендии", en:"Scholarships", tr:"Burslar" },
    "Accommodation":
      { ru:"Проживание", en:"Accommodation", tr:"Konaklama" },
    "Öğrenim ücreti":
      { ru:"Стоимость обучения", en:"Tuition fee", tr:"Öğrenim ücreti" },
    "Рейтинг":   { ru:"Рейтинг",    en:"Rating",    tr:"Sıralama"   },
    "Аккредитациялар":
      { ru:"Аккредитации", en:"Accreditations", tr:"Akreditasyonlar" },
    "Артықшылықтар":
      { ru:"Преимущества", en:"Advantages", tr:"Avantajlar" },
    "Кампустар": { ru:"Кампусы",    en:"Campuses",  tr:"Kampüsler"  },
    "Exchange programs":
      { ru:"Программы обмена", en:"Exchange programs", tr:"Değişim programları" },
    "Website":   { ru:"Сайт",       en:"Website",   tr:"Web sitesi" },
    "🏛 Университет қосу":
      { ru:"🏛 Добавить университет", en:"🏛 Add University", tr:"🏛 Üniversite Ekle" },
    "Барлығы:":  { ru:"Всего:",     en:"Total:",    tr:"Toplam:"    },
    "бет":       { ru:"стр.",       en:"page",      tr:"sayfa"      },
    "✏️ Өңдеу":  { ru:"✏️ Редактировать", en:"✏️ Edit", tr:"✏️ Düzenle" },
    "Өшіру":     { ru:"Удалить",    en:"Delete",    tr:"Sil"        },
 
    /* ── HERO — көп жолды нұсқасы (normalize арқылы табылады) ── */
    "Бұл жерде студенттер, өтініштер, консультациялар, университеттер, лента контенті және platform notifications басқарылады.":
      { ru:"Здесь управляются студенты, заявки, консультации, университеты, контент ленты и уведомления платформы.",
        en:"Here you manage students, applications, consultations, universities, feed content and platform notifications.",
        tr:"Burada öğrenciler, başvurular, danışmanlıklar, üniversiteler, akış içeriği ve platform bildirimleri yönetilir." },
 
    /* ── ҚҰЖАТТАР — қосымша ── */
    "✓ Барлығын растау":
      { ru:"✓ Подтвердить все", en:"✓ Confirm All", tr:"✓ Tümünü Onayla" },
    "✗ Барлығын қабылдамау":
      { ru:"✗ Отклонить все", en:"✗ Reject All", tr:"✗ Tümünü Reddet" },
 
    /* ── ДИНАМИКАЛЫҚ JS МӘТІНДЕРІ ── */
 
    /* renderStudents */
    "Белгісіз":           { ru:"Неизвестно",         en:"Unknown",          tr:"Bilinmiyor"       },
    "Қала жоқ":           { ru:"Город не указан",    en:"No city",          tr:"Şehir yok"        },
    "Active":             { ru:"Активный",            en:"Active",           tr:"Aktif"            },
    "Студент жоқ":        { ru:"Студентов нет",       en:"No students",      tr:"Öğrenci yok"      },
    "Профиль толтырылғанда немесе admin қосқанда осында шығады.":
      { ru:"Появится когда профиль заполнен или добавлен администратором.",
        en:"Will appear when profile is filled or added by admin.",
        tr:"Profil doldurulduğunda veya admin eklediğinde görünür." },
 
    /* renderApplications — status мәтіндері */
    "Бастапқы кезең":     { ru:"Начальный этап",      en:"Initial stage",    tr:"Başlangıç aşaması"},
    "Дайындалуда":        { ru:"Готовится",           en:"In preparation",   tr:"Hazırlanıyor"     },
    "Құжат дайын":        { ru:"Документ готов",      en:"Document ready",   tr:"Belge hazır"      },
    "Өтініштер жоқ":      { ru:"Заявок нет",          en:"No applications",  tr:"Başvuru yok"      },
 
    /* renderAdminDocs — badge мәтіндері */
    "файл":               { ru:"файл(ов)",            en:"file(s)",          tr:"dosya"            },
    "расталды":           { ru:"подтверждено",        en:"confirmed",        tr:"onaylandı"        },
    "Деректер жоқ":       { ru:"Данных нет",          en:"No data",          tr:"Veri yok"         },
    "Күтілуде":           { ru:"Ожидание",            en:"Pending",          tr:"Beklemede"        },
    "Расталды":           { ru:"Подтверждено",        en:"Confirmed",        tr:"Onaylandı"        },
    "Қабылданбады":       { ru:"Отклонено",           en:"Rejected",         tr:"Reddedildi"       },
    "Жүктелген файлдар жоқ.":
      { ru:"Загруженных файлов нет.",
        en:"No uploaded files.",
        tr:"Yüklenen dosya yok." },
    "Студенттер Дайындық бетінен файл жүктегенде осы жерде автоматты түрде көрінеді.":
      { ru:"Появится автоматически когда студенты загрузят файлы.",
        en:"Will appear automatically when students upload files.",
        tr:"Öğrenciler dosya yüklediğinde otomatik görünür." },
 
    /* DOC_LABELS — құжат атаулары */
    "Паспорт":            { ru:"Паспорт",             en:"Passport",         tr:"Pasaport"         },
    "Диплом/Аттестат":    { ru:"Диплом/Аттестат",     en:"Diploma/Certificate", tr:"Diploma/Sertifika"},
    "Транскрипт":         { ru:"Транскрипт",          en:"Transcript",       tr:"Transkript"       },
    "Тіл сертификаты":    { ru:"Языковой сертификат", en:"Language certificate", tr:"Dil sertifikası"},
    "Мотивациялық хат":   { ru:"Мотивационное письмо",en:"Motivation letter", tr:"Motivasyon mektubu"},
    "Ұсыныс хаты":        { ru:"Рекомендательное письмо", en:"Recommendation letter", tr:"Referans mektubu"},
    "Фото":               { ru:"Фото",                en:"Photo",            tr:"Fotoğraf"         },
    "Банк выписке":       { ru:"Банковская выписка",  en:"Bank statement",   tr:"Banka ekstresi"   },
    "Сақтандыру полисі":  { ru:"Страховой полис",     en:"Insurance policy", tr:"Sigorta poliçesi" },
    "CV/Resume":          { ru:"CV/Резюме",           en:"CV/Resume",        tr:"CV/Özgeçmiş"      },
 
    /* renderAnalytics — statCard labels */
    "Барлық студент":     { ru:"Всего студентов",     en:"Total Students",   tr:"Toplam Öğrenci"   },
    "Менторлар":          { ru:"Менторы",             en:"Mentors",          tr:"Danışmanlar"      },
    "Консультация":       { ru:"Консультации",        en:"Consultations",    tr:"Danışmanlıklar"   },
    "Төленген":           { ru:"Оплачено",            en:"Paid",             tr:"Ödendi"           },
    "Жүктелген файл":     { ru:"Загруженных файлов",  en:"Uploaded Files",   tr:"Yüklenen Dosya"   },
    "Расталған файл":     { ru:"Подтверждённых файлов",en:"Confirmed Files", tr:"Onaylanan Dosya"  },
    "Жарияланған пост":   { ru:"Опубликованных постов",en:"Published Posts", tr:"Yayınlanan Gönderi"},
    "Жалпы көрілім":      { ru:"Всего просмотров",    en:"Total Views",      tr:"Toplam Görüntüleme"},
    "🎓 Ең танымал мамандықтар":
      { ru:"🎓 Самые популярные специальности",
        en:"🎓 Most Popular Specialties",
        tr:"🎓 En Popüler Uzmanlıklar" },
    "студент":            { ru:"студент",             en:"student",          tr:"öğrenci"          },
    "Деректер жоқ":       { ru:"Данных нет",          en:"No data",          tr:"Veri yok"         },
 
    /* renderMentors */
    "Ментор жоқ. Жоғарыдан қосыңыз.":
      { ru:"Менторов нет. Добавьте выше.",
        en:"No mentors. Add one above.",
        tr:"Danışman yok. Yukarıdan ekleyin." },
    "👨‍🏫 Ментор":          { ru:"👨‍🏫 Ментор",          en:"👨‍🏫 Mentor",         tr:"👨‍🏫 Danışman"       },
    "Студент жоқ":        { ru:"Студент жоқ",         en:"No students",      tr:"Öğrenci yok"      },
    "Ментор жоқ":         { ru:"Менторов нет",        en:"No mentors",       tr:"Danışman yok"     },
    "📋 Деректер":         { ru:"📋 Данные",            en:"📋 Credentials",   tr:"📋 Bilgiler"       },
 
    /* renderNotifications */
    "Хабарлама жоқ":      { ru:"Уведомлений нет",    en:"No notifications",  tr:"Bildirim yok"     },
    "Жаңа notification қос.":
      { ru:"Добавьте новое уведомление.",
        en:"Add a new notification.",
        tr:"Yeni bir bildirim ekleyin." },
    "Send":               { ru:"Отправить",           en:"Send",             tr:"Gönder"           },
    "Sent":               { ru:"Отправлено",          en:"Sent",             tr:"Gönderildi"       },
    "Draft":              { ru:"Черновик",            en:"Draft",            tr:"Taslak"           },
 
    /* renderFeedPosts */
    "Пост жоқ. Жоғарыдан қосыңыз.":
      { ru:"Постов нет. Добавьте выше.",
        en:"No posts. Add one above.",
        tr:"Gönderi yok. Yukarıdan ekleyin." },
    "✏️ Өзгерту":         { ru:"✏️ Редактировать",    en:"✏️ Edit",          tr:"✏️ Düzenle"        },
    "🗑️ Жою":             { ru:"🗑️ Удалить",          en:"🗑️ Delete",        tr:"🗑️ Sil"            },
 
    /* renderDashboard */
    "Соңғы студент":      { ru:"Последний студент",   en:"Last student",     tr:"Son öğrenci"      },
    "Соңғы өтініш":       { ru:"Последняя заявка",    en:"Last application", tr:"Son başvuru"      },
    "Соңғы консультация": { ru:"Последняя консультация", en:"Last consultation", tr:"Son danışmanlık"},
    "Әзірге студент жоқ": { ru:"Студентов пока нет",  en:"No students yet",  tr:"Henüz öğrenci yok"},
    "Әзірге өтініш жоқ":  { ru:"Заявок пока нет",     en:"No applications yet", tr:"Henüz başvuru yok"},
    "Әзірге консультация жоқ":
      { ru:"Консультаций пока нет",
        en:"No consultations yet",
        tr:"Henüz danışmanlık yok" },
    "Major көрсетілмеген":
      { ru:"Направление не указано", en:"Major not specified", tr:"Alan belirtilmemiş" },
  };
 
  /* ═══════════════════════════════════════════
     getLang — ағымдағы тіл
  ═══════════════════════════════════════════ */
  function getLang() {
    return localStorage.getItem("lang") || "kz";
  }
 
  /* ═══════════════════════════════════════════
     tr — JS ішінде аударма алу
     Мысалы: showAdminToast(tr("Сақталды"))
  ═══════════════════════════════════════════ */
  window.tr = function (kzText, lang) {
    lang = lang || getLang();
    if (lang === "kz") return kzText;
    const entry = D[kzText];
    if (!entry) return kzText;
    return entry[lang] !== undefined ? entry[lang] : kzText;
  };
 
  /* ═══════════════════════════════════════════
     applyAdminI18n — бүкіл DOM аудару
  ═══════════════════════════════════════════ */
  function applyAdminI18n(lang) {
    if (lang === "kz") return;
 
    const SKIP = new Set(["SCRIPT","STYLE","NOSCRIPT","CODE","PRE"]);
 
    // Whitespace-ті normalize ету: көп бос орын/жолды бір бос орынға айналдыру
    function normalize(str) {
      return str.replace(/\s+/g, " ").trim();
    }
 
    function walk(node) {
      if (!node) return;
 
      // Мәтін түйіні
      if (node.nodeType === 3) {
        const raw       = node.textContent;
        const trimmed   = raw.trim();
        if (!trimmed) return;
 
        // 1) Тікелей сәйкес
        let entry = D[trimmed];
        if (entry && entry[lang] !== undefined) {
          node.textContent = raw.replace(trimmed, entry[lang]);
          return;
        }
 
        // 2) Normalize еткеннен кейін сәйкес (көп жолды мәтін үшін)
        const norm = normalize(raw);
        entry = D[norm];
        if (entry && entry[lang] !== undefined) {
          node.textContent = entry[lang];
          return;
        }
        return;
      }
 
      if (node.nodeType !== 1) return;
      if (SKIP.has(node.tagName)) return;
 
      // Input / Textarea — placeholder
      if (node.tagName === "INPUT" || node.tagName === "TEXTAREA") {
        const ph = (node.getAttribute("placeholder") || "").trim();
        if (ph && D[ph] && D[ph][lang]) {
          node.setAttribute("placeholder", D[ph][lang]);
        }
        return;
      }
 
      // SELECT → option
      if (node.tagName === "SELECT") {
        node.querySelectorAll("option").forEach(opt => {
          const t = opt.textContent.trim();
          if (t && D[t] && D[t][lang]) opt.textContent = D[t][lang];
        });
        return;
      }
 
      // Label — тек бір text node болса (input label үшін)
      if (node.tagName === "LABEL") {
        const directText = Array.from(node.childNodes)
          .filter(n => n.nodeType === 3)
          .map(n => n.textContent.trim())
          .join(" ")
          .trim();
        if (directText && D[directText] && D[directText][lang]) {
          node.childNodes.forEach(n => {
            if (n.nodeType === 3 && n.textContent.trim()) {
              n.textContent = D[directText][lang];
            }
          });
          return;
        }
      }
 
      node.childNodes.forEach(walk);
    }
 
    walk(document.body);
  }
 
  /* ═══════════════════════════════════════════
     adminSetLang — тілді ауыстыру (dropdown)
     Бетті reload жасайды — ең сенімді жол
  ═══════════════════════════════════════════ */
  /* ═══════════════════════════════════════════
     patchUniversityForm
     admin-universities-full.js динамикалық label-дарын
     аударады — ол JS файлды өзгертпей-ақ
  ═══════════════════════════════════════════ */
  function patchUniversityForm(lang) {
    if (lang === "kz") return;
 
    // Label мәтіндері → аудармалары
    const LABEL_MAP = {
      "Неге осы университет? (әр жол — бөлек пункт)":
        { ru:"Почему этот университет? (каждая строка — отдельный пункт)",
          en:"Why this university? (each line = separate point)",
          tr:"Neden bu üniversite? (her satır ayrı madde)" },
      "Admission requirements (әр жол — бөлек пункт)":
        { ru:"Требования к поступлению (каждая строка — отдельный пункт)",
          en:"Admission requirements (each line = separate point)",
          tr:"Kabul gereksinimleri (her satır ayrı madde)" },
      "Мамандықтар / faculties (әр жол — бөлек пункт)":
        { ru:"Специальности / факультеты (каждая строка — отдельный пункт)",
          en:"Specialties / faculties (each line = separate point)",
          tr:"Uzmanlıklar / fakülteler (her satır ayrı madde)" },
      "Барлығы:":
        { ru:"Всего:", en:"Total:", tr:"Toplam:" },
      "бет":
        { ru:"стр.", en:"page", tr:"sayfa" },
      "✏️ Өңдеу":
        { ru:"✏️ Редактировать", en:"✏️ Edit", tr:"✏️ Düzenle" },
    };
 
    // Барлық label-дарды сканерлеу
    function scanAndTranslate() {
      document.querySelectorAll("label, h3, h4, th, button, span, p, strong").forEach(el => {
        if (el.children.length > 0) return; // тек таза text node
        const t = el.textContent.trim();
        if (LABEL_MAP[t] && LABEL_MAP[t][lang]) {
          el.textContent = LABEL_MAP[t][lang];
        }
      });
 
      // "Барлығы: N" + "N/N бет" паттерні — pagination span-дар
      document.querySelectorAll("span, div, p").forEach(el => {
        const t = el.textContent.trim();
        // "Барлығы: 1" немесе "Барлығы: 11"
        const m1 = t.match(/^Барлығы:\s*(\d+)$/);
        if (m1) {
          const w = LABEL_MAP["Барлығы:"] ? LABEL_MAP["Барлығы:"][lang] : "Барлығы:";
          el.textContent = w + " " + m1[1];
          return;
        }
        // "1/1 бет" немесе "11/2 бет"
        const m2 = t.match(/^(\d+\/\d+)\s*бет$/);
        if (m2) {
          const w = LABEL_MAP["бет"] ? LABEL_MAP["бет"][lang] : "бет";
          el.textContent = m2[1] + " " + w;
          return;
        }
        // "8 файл"
        const m3 = t.match(/^(\d+)\s*файл$/);
        if (m3) {
          const w = D["файл"] ? D["файл"][lang] || "файл" : "файл";
          el.textContent = m3[1] + " " + w;
          return;
        }
        // "N расталды"
        const m4 = t.match(/^(\d+)\s*расталды$/);
        if (m4) {
          const w = D["расталды"] ? D["расталды"][lang] || "расталды" : "расталды";
          el.textContent = m4[1] + " " + w;
          return;
        }
      });
    }
 
    // Бірден іске қос
    scanAndTranslate();
 
    // Universities section ашылғанда қайта іске қос
    const observer = new MutationObserver(() => {
      scanAndTranslate();
    });
    const target = document.getElementById("universitiesSection") || document.body;
    observer.observe(target, { childList: true, subtree: true });
  }
 
  window.adminSetLang = function (lang) {
    localStorage.setItem("lang", lang);
    const m = document.getElementById("adminLangMenu");
    if (m) m.style.display = "none";
    location.reload();
  };
 
  /* ═══════════════════════════════════════════
     AUTO-INIT
  ═══════════════════════════════════════════ */
  function init() {
    const lang = getLang();
    if (lang !== "kz") applyAdminI18n(lang);
    patchRenderFunctions(lang);
    patchUniversityForm(lang);
  }
 
  /* ═══════════════════════════════════════════
     translateText — жеке сөз/фраза аудару
     "· Белгісіз · Қала жоқ" аралас паттерн үшін
  ═══════════════════════════════════════════ */
  function translateText(text, lang) {
    if (lang === "kz" || !text) return text;
    const trimmed = text.trim();
 
    // Тікелей сәйкес
    if (D[trimmed] && D[trimmed][lang] !== undefined) {
      return text.replace(trimmed, D[trimmed][lang]);
    }
 
    // "Барлығы: 11/1 бет" паттерні → "Total: 11/1 page"
    const paginMatch = text.match(/^(Барлығы:\s*)(\d+\/\d+)\s*(бет)$/);
    if (paginMatch) {
      const prefix = D["Барлығы:"] ? D["Барлығы:"][lang] || "Барлығы:" : "Барлығы:";
      const suffix = D["бет"]      ? D["бет"][lang]      || "бет"      : "бет";
      return prefix + paginMatch[2] + " " + suffix;
    }
 
    // "· Белгісіз · Қала жоқ" паттерні — · бөлгіші
    if (text.includes("·")) {
      return text.replace(/([^\xB7\n]+)/g, (part) => {
        const t = part.trim();
        if (!t) return part;
        if (D[t] && D[t][lang] !== undefined) return part.replace(t, D[t][lang]);
        return part;
      });
    }
 
    // "X студент (Y%)" паттерні — analytics
    const studMatch = text.match(/^(.+?)\s*(\d+\s*студент\s*\(\d+%\))$/);
    if (studMatch) {
      const label = studMatch[1].trim();
      const count = studMatch[2].replace("студент", D["студент"] ? D["студент"][lang] || "студент" : "студент");
      return (D[label] ? D[label][lang] || label : label) + " " + count;
    }
 
    // "N студент" паттерні — mentor card
    const nStudMatch = text.match(/^(\d+)\s*(студент)$/);
    if (nStudMatch) {
      const word = D["студент"] ? D["студент"][lang] || "студент" : "студент";
      return nStudMatch[1] + " " + word;
    }
 
    return text;
  }
 
  /* ═══════════════════════════════════════════
     translateContainer — элемент ішін аудару
  ═══════════════════════════════════════════ */
  function translateContainer(root, lang) {
    if (!root || lang === "kz") return;
    const SKIP = new Set(["SCRIPT","STYLE","NOSCRIPT","INPUT","TEXTAREA"]);
 
    function walk(node) {
      if (!node) return;
      if (node.nodeType === 3) {
        const raw = node.textContent;
        if (!raw.trim()) return;
        const out = translateText(raw, lang);
        if (out !== raw) node.textContent = out;
        return;
      }
      if (node.nodeType !== 1) return;
      if (SKIP.has(node.tagName)) return;
      if (node.tagName === "SELECT") {
        node.querySelectorAll("option").forEach(opt => {
          const t = opt.textContent.trim();
          if (D[t] && D[t][lang]) opt.textContent = D[t][lang];
        });
        return;
      }
      node.childNodes.forEach(walk);
    }
    walk(root);
  }
 
  /* ═══════════════════════════════════════════
     patchRenderFunctions
     window.renderXxx функцияларын wrap жасайды:
     шақырылғаннан кейін контейнерді аударады
  ═══════════════════════════════════════════ */
  function patchRenderFunctions(lang) {
    if (lang === "kz") return;
 
    const FUNCS = [
      { fn: "renderStudents",           container: "studentsList"           },
      { fn: "renderApplications",       container: "applicationsTable"      },
      { fn: "renderAdminApplications",  container: "applicationsTable"      },
      { fn: "renderAdminDocs",          container: "adminDocsList"          },
      { fn: "renderAnalytics",          container: "analyticsBox"           },
      { fn: "renderMentors",            container: "mentorsList"            },
      { fn: "renderNotifications",      container: "notificationsList"      },
      { fn: "renderFeedPosts",          container: "feedPostsList"          },
      { fn: "renderStories",            container: "storiesList"            },
      { fn: "renderDashboard",          container: "recentActivity"         },
      { fn: "renderAdminConsultations", container: "adminConsultationsList" },
      { fn: "renderAdminUniversities",  container: "adminUniversitiesList"  },
    ];
 
    // Функциялар жүктелгенге дейін wrap жасай алмаймыз,
    // сондықтан DOMContentLoaded-тан кейін wrap жасаймыз
    function doWrap() {
      FUNCS.forEach(({ fn, container }) => {
        if (typeof window[fn] !== "function") return;
        if (window[fn].__i18nWrapped) return; // екі рет wrap болмасын
        const original = window[fn];
        window[fn] = function (...args) {
          original.apply(this, args);
          requestAnimationFrame(() => {
            const el = document.getElementById(container);
            if (el) translateContainer(el, lang);
          });
        };
        window[fn].__i18nWrapped = true;
      });
    }
 
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => { doWrap(); applyAdminI18n(lang); });
    } else {
      doWrap();
      // Бар контейнерлерді бірден аудар
      FUNCS.forEach(({ container }) => {
        const el = document.getElementById(container);
        if (el) translateContainer(el, lang);
      });
      applyAdminI18n(lang);
    }
  }
 
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
 
})();