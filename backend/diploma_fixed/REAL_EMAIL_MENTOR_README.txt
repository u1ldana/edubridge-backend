REAL MODE CHECKLIST

1) Supabase SQL Editor ашып REAL_REGISTRATION_SETUP.sql файлын Run жасаңыз.
2) email-setup.html ашып EmailJS Public Key, Service ID, Template ID сақтаңыз.
3) EmailJS template айнымалылары міндетті:
   {{to_email}}, {{subject}}, {{message}}, {{code}}, {{name}}
4) Student register:
   - код email-ға барады
   - код дұрыс болса ғана students table-ға сақталады
   - Supabase қате болса localStorage-only тіркеу жасалмайды
5) Admin mentor add:
   - ментор email-ына логин/пароль барады
   - email жіберілсе ғана mentors table-ға сақталады
   - mentor login үшін local cache те жаңартылады
