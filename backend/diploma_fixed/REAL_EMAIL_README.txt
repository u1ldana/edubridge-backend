EduBridge REAL EMAIL SETUP

Бұл версияда demo код жоқ. Тіркелу үшін код студенттің нақты email-ына жіберіледі.

1) https://www.emailjs.com/ сайтына кіріңіз
2) Email Services -> Gmail қосыңыз
3) Email Templates -> New Template жасаңыз
4) Template variables:
   To Email: {{to_email}}
   Subject: {{subject}}
   Message: {{message}}
   Code: {{code}}
5) Account -> Public Key көшіріңіз
6) Service ID және Template ID көшіріңіз
7) Сайтта email-setup.html ашыңыз
8) Public Key, Service ID, Template ID қойып Save басыңыз
9) Test email жіберіп тексеріңіз
10) Сосын register.html арқылы тіркеліңіз

Егер local file:// режимінде email бармаса, папканы VS Code Live Server арқылы ашыңыз.
