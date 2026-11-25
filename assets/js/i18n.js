(function() {
  "use strict";

  const STORAGE_KEY = "goncalo-site-language";
  const DEFAULT_LANGUAGE = "pt";
  const SUPPORTED_LANGUAGES = new Set(["pt", "en"]);

  /** Key-based dictionary (preferred). PT is source text in the HTML. */
  const dictionary = {
    "nav.home": { en: "Home" },
    "nav.about": { en: "About" },
    "nav.resume": { en: "Resume" },
    "nav.portfolio": { en: "Portfolio" },
    "nav.contact": { en: "Contacts" },
    "footer.thanks": {
      en: "Thank you for visiting my portfolio! If you have any questions or are interested in collaborating, do not hesitate to contact me."
    },
    "hero.pitch": {
      en: "Software developer — backend, mobile and systems integration · Porto"
    },
    "hero.cta.projects": { en: "View projects" },
    "hero.cta.cv": { en: "Download CV" },
    "hero.scroll": { en: "Scroll to see more" },
    "hero.im": { en: "I'm" },
    "cta.cv.pdf": { en: "Download CV (PDF)" },
    "cta.view.project": { en: "View project" },
    "cta.course.page": { en: "Course page" },
    "cta.cert": { en: "View certificate" },
    "cta.dev.page": { en: "Developer page" },
    "cta.send.email": { en: "Send Email" },
    "cta.explore": { en: "Explore" },
    "cta.view.cv": { en: "View CV" },
    "cta.view.projects": { en: "View Projects" },
    "cta.contact": { en: "Contact" },

    "meta.home.title": { en: "Gonçalo Garrido — Software developer" },
    "meta.home.desc": {
      en: "Software developer — backend, mobile and systems integration · Porto. Resume and portfolio of Gonçalo Garrido."
    },
    "meta.about.title": { en: "About — Gonçalo Garrido" },
    "meta.about.desc": {
      en: "About Gonçalo Garrido, software developer — backend, mobile and systems integration · Porto."
    },
    "meta.resume.title": { en: "Resume — Gonçalo Garrido" },
    "meta.resume.desc": {
      en: "Resume of Gonçalo Garrido, software developer — backend, mobile and systems integration · Porto."
    },
    "meta.portfolio.title": { en: "Portfolio — Gonçalo Garrido" },
    "meta.portfolio.desc": {
      en: "Portfolio: Delty WebSites (2S, 504 Automóveis, São Tomé, Carpintaria CP), Bookly (Navalha Negra, Smile), WorkInNet/InspGest, Papos and Android apps."
    },
    "meta.contact.title": { en: "Contacts — Gonçalo Garrido" },
    "meta.contact.desc": {
      en: "Contact details for Gonçalo Garrido, software developer — backend, mobile and systems integration · Porto."
    },

    "page.about.title": { en: "About" },
    "page.about.lead": {
      en: "Software developer — backend, mobile and systems integration · Porto."
    },
    "page.resume.title": { en: "Resume" },
    "page.resume.lead": {
      en: "Education and professional experience as a software developer — backend, mobile and systems integration."
    },
    "page.portfolio.title": { en: "Portfolio" },
    "page.portfolio.lead": {
      en: "Featured: Delty, 2S, WorkInNet/InspGest and apps. Under Web: Delty/Bookly clients (504, Navalha Negra, Smile, São Tomé, Carpintaria CP, RENOVSTAR) and 4 Em Linha. Academic work under “Other”."
    },
    "page.contact.title": { en: "Contacts" },
    "page.contact.lead": {
      en: "Get in touch for more information about my work and portfolio."
    },

    "about.role": { en: "Software developer" },
    "about.tagline": {
      en: "Backend, mobile and systems integration — with apps published on the Play Store and experience in business software."
    },
    "about.label.email": { en: "Email:" },
    "about.label.city": { en: "City:" },
    "about.label.education": { en: "Education:" },
    "about.label.freelancer": { en: "Freelancer:" },
    "about.value.education": { en: "Degree in IT" },
    "about.value.available": { en: "Available" },
    "about.bio": {
      en: "Three anchors: WorkInNet/InspGest (C#, VB.NET, Kotlin, SQL), Android apps on the Play Store, and Delty WebSites (Next.js + Cloudflare) for local businesses — including the 2S Restaurant case."
    },
    "skills.title": { en: "Skills" },
    "skills.stacks": { en: "Stacks" },
    "skills.core": { en: "core" },
    "skills.intro": {
      en: "Hierarchy from current work, the Delty brand and published apps — with icons for the languages and tools I actually use."
    },
    "skills.langs.spoken": { en: "Languages" },
    "skills.langs.prog": { en: "Programming languages" },
    "skills.tools": { en: "Tools" },
    "skills.lang.pt": { en: "Portuguese" },
    "skills.lang.pt.level": { en: "native" },
    "skills.lang.en": { en: "English" },
    "skills.lang.en.level": { en: "work / bilingual site" },
    "resume.edu.badge.degree": { en: "Primary degree" },
    "resume.edu.badge.mobility": { en: "Exchange (not a standalone degree)" },
    "skills.csharp.body": {
      en: "WorkInNet / InspGest: desktop, services and inspection-line integrations (also .NET Core)."
    },
    "skills.kotlin.body": {
      en: "InspGest mobile clients and Play Store apps (Papos, Focus Launcher, GlutenFree, PocketCards)."
    },
    "skills.sql.body": {
      en: "Modelling, queries and T-SQL migrations in the inspection and business ecosystem."
    },
    "skills.web.body": {
      en: "Delty WebSites and the 2S case: commercial sites in Next.js with Cloudflare (DNS/CDN)."
    },
    "skills.node.body": {
      en: "APIs and systems integration (e.g. ParadigmaXis); also PHP/Laravel on web projects."
    },
    "skills.also": { en: "Also used" },
    "skills.also.intro": {
      en: "Secondary — project contact, IPMAIA coursework or occasional roles:"
    },

    "case.kicker": { en: "Case study" },
    "case.problem": { en: "Problem" },
    "case.role": { en: "Role" },
    "case.tech": { en: "Tech" },
    "case.result": { en: "Outcome" },
    "case.back": { en: "Back to portfolio" },
    "case.delty.title": { en: "Delty WebSites" },
    "case.delty.tagline": { en: "Websites with presence for local businesses" },
    "case.delty.problem": {
      en: "SMEs and local businesses need a clear web presence — from a simple site to a custom build — without generic templates or a freelancer with no brand."
    },
    "case.delty.role": {
      en: "I built the Delty brand (delty.party): positioning, pricing, demos and client sites on Next.js + Cloudflare; public case 2S Restaurant and others on *.delty.party / *.bookly.party."
    },
    "case.delty.tech": { en: "Next.js · Cloudflare · sector demos · client sites" },
    "case.delty.result": {
      en: "Live commercial frontpage, 2S case with a “Site by Delty” credit, and a public client portfolio (504 Automóveis, Navalha Negra, Smile, São Tomé, Carpintaria CP, among others)."
    },
    "hero.cta.contact": { en: "Contact" },
    "proj.meta.role": { en: "Role" },
    "proj.meta.problem": { en: "Context" },
    "case.papos.title": { en: "Papos" },
    "case.papos.tagline": { en: "Daily word game in European Portuguese" },
    "case.papos.problem": {
      en: "People who play Wordle in Portugal often hit Brazilian or English dictionaries and spelling. There was no daily game built for PT-PT, with varied modes and offline use."
    },
    "case.papos.role": {
      en: "I designed and built the Android app and the web version: PT-PT dictionary, five game modes, daily flow, and Play Store publication."
    },
    "case.papos.tech": { en: "Android · Web · PT-PT dictionary · offline" },
    "case.papos.result": {
      en: "Live product on the Play Store and at papos.delty.party, with Papos, Dupla, Roda, Tertúlia and Assembleia modes."
    },
    "case.focus-launcher.title": { en: "Focus Launcher" },
    "case.focus-launcher.tagline": { en: "Minimalist Android launcher to reduce distractions" },
    "case.focus-launcher.problem": {
      en: "Default launchers push notifications and dense grids. People who want focus need a calm home screen with focus modes and less friction."
    },
    "case.focus-launcher.role": {
      en: "I designed and published the launcher: focus modes, automations and configurable screens, with ongoing Play Store maintenance."
    },
    "case.focus-launcher.tech": { en: "Android · productivity · Play Store" },
    "case.focus-launcher.result": {
      en: "Published and updated app — public proof of mobile delivery beyond day-job work."
    },
    "case.bookly.title": { en: "Bookly" },
    "case.bookly.tagline": { en: "School materials and book management for stationery shops" },
    "case.bookly.problem": {
      en: "Stationery shops handle school lists, stock and orders with manual or fragmented processes. They needed a coherent web + Android platform."
    },
    "case.bookly.role": {
      en: "IPMAIA degree project: I contributed to the solution (Laravel for backend/web, Kotlin for Android) and to the public documentation."
    },
    "case.bookly.tech": { en: "Laravel · Kotlin · public docs" },
    "case.bookly.result": {
      en: "Complete academic product with public docs — a full-stack portfolio anchor."
    },

    "recog.title": { en: "Highlights" },
    "recog.intro": {
      en: "Certifications, published apps and academic mobility — what carries weight in recruiting."
    },
    "recog.csharp.title": { en: "C# certification with Microsoft" },
    "recog.csharp.body": {
      en: "Completed the Foundational C# Certification with Microsoft on 17 January 2024 (freeCodeCamp)."
    },
    "recog.apps.title": { en: "Apps on the Play Store" },
    "recog.apps.body": {
      en: "Published and maintained Android apps (Papos, Focus Launcher, GlutenFree, PocketCards, and others)."
    },
    "recog.mobility.title": { en: "Mobility at UDESC" },
    "recog.mobility.body": {
      en: "Computer Science exchange (August–December 2023) at CCT/UDESC, Brazil."
    },
    "recog.archive": { en: "Earlier contests and training (2017–2020)" },
    "recog.archive.topas": {
      en: "Topas 2018 and 2019 — participation (Faculty of Sciences of Porto)"
    },
    "recog.archive.tecla": {
      en: "Tecla 2019 and 2020 — participation (ESTGA)"
    },
    "recog.archive.esdas": {
      en: "Technical course in IT Systems Management and Programming (ESDAS)"
    },
    "portfolio.case": { en: "Case study" },
    "portfolio.filters": { en: "Filters:" },
    "portfolio.filter.featured": { en: "Featured" },
    "portfolio.filter.all": { en: "All" },
    "portfolio.filter.mobile": { en: "Mobile apps" },
    "portfolio.filter.web": { en: "Web projects" },
    "portfolio.filter.other": { en: "Other" },
    "portfolio.band.clients": { en: "Delty / Bookly clients · web projects" },


    "proj.delty.problem": { en: "Local businesses need a clear web presence — from a simple site to a custom build." },
    "proj.delty.role": { en: "I built the Delty brand: positioning, pricing, demos and client sites." },
    "proj.2s.problem": { en: "A restaurant in Paredes needed a multi-page site with a digital menu and bookings." },
    "proj.2s.role": { en: "Built and published via Delty; “Site by Delty” credit in the footer." },
    "proj.win.problem": { en: "Vehicle inspection centres (Portugal, with links to Brazil and Angola) need reliable desktop/mobile software." },
    "proj.win.role": { en: "Current role in the InspGest ecosystem: desktop, mobile and services." },
    "proj.papos.problem": { en: "There was no daily word game designed from the ground up for PT-PT." },
    "proj.papos.role": { en: "I designed and built the Android app and the web version (five modes, offline)." },
    "proj.focus.problem": { en: "Stock launchers push notifications and apps that distract." },
    "proj.focus.role": { en: "I build and maintain a minimalist launcher with focus modes and automations." },
    "proj.bookly.problem": { en: "Stationery shops need management for school materials and books (web + Android)." },
    "proj.bookly.role": { en: "IPMAIA degree project — distinct from client hosting on bookly.party." },
    "proj.gluten.problem": { en: "People avoiding gluten need reliable venues and products, in many languages." },
    "proj.gluten.role": { en: "I build and maintain the Android app (map, products, 17 languages)." },
    "proj.504.problem": { en: "A dealership in Vila do Conde / Rio Mau needed searchable stock online." },
    "proj.504.role": { en: "Delty client site: search by brand, model, price and mileage." },
    "proj.navalha.problem": { en: "A barbershop in Vila do Conde needed a digital brand and online bookings." },
    "proj.navalha.role": { en: "Bookly/Delty client site: bookings, shop and visual identity." },
    "proj.delty.tagline": {
      en: "Own brand of websites for SMEs"
    },
    "proj.delty.body": {
      en: "Websites with presence and excellence — from a simple site to a custom build, with shop bundles and QR menus. Own brand (Next.js + Cloudflare); public case: 2S Restaurant."
    },
    "proj.delty.tech": { en: "Next.js · Cloudflare · delty.party" },
    "proj.2s.body": {
      en: "Multi-page site for a restaurant in Paredes: story, gallery, digital menu (QR), wines, bookings and contacts. Published with a “Site by Delty” credit."
    },
    "proj.2s.tech": { en: "Next.js · Cloudflare · Delty client" },
    "proj.papos.body": {
      en: "Daily word game in European Portuguese (Wordle-style), with five modes and offline play. I built the Android app and the web version."
    },
    "proj.papos.tech": { en: "Android / web · PT-PT dictionary" },
    "proj.focus.body": {
      en: "Minimalist Android launcher to reduce distractions: focus modes, automations and configurable screens. Published and maintained on the Play Store."
    },
    "proj.focus.tech": { en: "Android · productivity" },
    "proj.gluten.body": {
      en: "App for people with gluten intolerance: venue map, product info and a multilingual UI (17 languages). Maintained on the Play Store."
    },
    "proj.gluten.tech": { en: "Android · maps" },
    "proj.bookly.body": {
      en: "Web and Android management platform for stationery shops (school materials and books). IPMAIA degree project — distinct from client hosting on bookly.party."
    },
    "proj.bookly.tech": { en: "Laravel · Kotlin · public docs" },
    "proj.pocket.body": {
      en: "Digital manager for cards, coupons and tickets with QR codes and barcodes always at hand. Android app published on the Play Store."
    },
    "proj.pocket.tech": { en: "Tech: Jetpack Compose." },
    "proj.sushi.body": {
      en: "Android sushi-stacking game with Google Play Games. Published on the Play Store."
    },
    "proj.win.body": {
      en: "Software for vehicle inspection centres (Portugal, with links to Brazil and Angola). Current role: desktop, mobile and services in the InspGest ecosystem."
    },
    "proj.win.tech": { en: "C# · VB.NET · Kotlin · SQL" },
    "proj.504.body": {
      en: "Car dealership and stock in Vila do Conde / Rio Mau: search by brand, model, price and mileage."
    },
    "proj.504.tech": { en: "Next.js · Cloudflare · Delty client" },
    "proj.navalha.body": {
      en: "Barbershop in Vila do Conde: online bookings, shop and a distinct digital brand."
    },
    "proj.navalha.tech": { en: "Next.js · Cloudflare · bookly.party" },
    "proj.smile.body": {
      en: "Online stationery and gifts shop in Vila do Conde: catalogue, campaigns and in-store pickup."
    },
    "proj.smile.tech": { en: "Tech: Next.js · Cloudflare · bookly.party" },
    "proj.smile.desktop.title": { en: "Smile — sales management" },
    "proj.smile.desktop.body": {
      en: "Desktop app linked to the Smile e-commerce (sales and customer management). Project report."
    },
    "proj.saotome.body": {
      en: "Tourism and mobility in São Tomé and Príncipe: local support to plan the stay and explore the islands."
    },
    "proj.saotome.tech": { en: "Tech: Next.js · Cloudflare · Delty client" },
    "proj.cp.body": {
      en: "Made-to-measure carpentry in Chaves: kitchens, wardrobes, doors, flooring and floating floors."
    },
    "proj.cp.tech": { en: "Tech: Next.js · Cloudflare · Delty client" },
    "proj.renovstar.body": {
      en: "Interior renovation: kitchens, bathrooms, rehabilitation and finishes. Note: the public site may still show staging “[TESTE]” labels."
    },
    "proj.renovstar.tech": { en: "Tech: Next.js · Cloudflare · Delty client" },
    "proj.4emlinha.body": {
      en: "Connect Four web game: vs computer, local 1v1 or online rooms — fast on desktop and mobile."
    },
    "proj.4emlinha.tech": { en: "Tech: Next.js · Cloudflare · delty.party" },
    "proj.agro.body": {
      en: "Online store for agricultural products (freelance). Site availability may vary."
    },
    "proj.diauto.body": {
      en: "Website for viewing and searching vehicles. Archived."
    },
    "proj.autodealer.body": {
      en: "Platform for viewing and comparing vehicles for sale."
    },
    "proj.ocr.body": {
      en: "Academic experiment in text/object recognition with OCR."
    },
    "proj.gym.title": { en: "Gym website" },
    "proj.gym.body": {
      en: "Academic gym website project in JavaScript."
    },
    "proj.news.body": { en: "Academic news website." },
    "proj.zoo.body": { en: "Academic informational zoo website." },
    "proj.edit.body": { en: "Older photo and video editing project (blog)." },
    "proj.pharmacy.title": { en: "Pharmacy Management" },
    "proj.pharmacy.body": {
      en: "Management of products, employees and prescriptions (academic project)."
    },
    "proj.report": { en: "Report" },

    "resume.edu.title": { en: "Education" },
    "resume.edu.lic.title": {
      en: "Degree in Information Technologies, Web and Multimedia"
    },
    "resume.edu.lic.dates": { en: "2022 - September 2025" },
    "resume.edu.lic.body": {
      en: "Course focused on technological solutions and systems management, with an emphasis on backend development and system integration."
    },
    "resume.edu.udesc.title": {
      en: "Bachelor's in Computer Science — exchange"
    },
    "resume.edu.udesc.dates": { en: "August 2023 - December 2023" },
    "resume.edu.udesc.body": {
      en: "Exchange during the IPMAIA degree (does not replace it): focus on software development and systems integration."
    },
    "resume.edu.ctesp.title": {
      en: "Higher Professional Technical Course in Information Systems Technologies and Programming"
    },
    "resume.edu.ctesp.body": {
      en: "Specialized technical course in programming and systems management, with six-month practical internships."
    },
    "resume.edu.sec.title": {
      en: "Technical Course in IT Systems Management and Programming"
    },
    "resume.edu.sec.body": {
      en: "Development of desktop and web applications, databases and technical projects with practical integration through professional internships."
    },
    "resume.edu.sec.grade": { en: "Final grade: 17" },
    "resume.exp.title": { en: "Professional Experience" },
    "resume.exp.win.title": { en: "Software Developer" },
    "resume.exp.win.dates": { en: "August 2025 – Present" },
    "resume.exp.win.org": { en: "WorkInNet — IT Consultancy · InspGest" },
    "resume.exp.win.b1": {
      en: "Development in the InspGest ecosystem for vehicle inspection centres in Portugal, with links to Brazil and Angola."
    },
    "resume.exp.win.b2": {
      en: "Stack: C#, VB.NET, Kotlin and SQL — desktop, mobile apps, APIs/services and database scripts."
    },
    "resume.exp.win.b3": {
      en: "Integration with workshop equipment (OBD, line, cameras) and inspection operational flows."
    },
    "resume.exp.px.title": { en: "Full Stack Developer" },
    "resume.exp.px.dates": { en: "March 2025 – August 2025" },
    "resume.exp.px.b1": {
      en: "Development of applications and APIs with Kotlin and Node.js."
    },
    "resume.exp.px.b2": { en: "Systems integration with WordPress." },
    "resume.exp.win2.title": { en: "Desktop Application Developer" },
    "resume.exp.win2.dates": { en: "March 2024 – June 2024" },
    "resume.exp.win2.b1": {
      en: "Desktop applications with Visual Basic and SQL, plus web components with Laravel."
    },
    "resume.exp.win2.b2": {
      en: "Evolution and maintenance of WorkInNet internal tools (desktop + SQL) for client operations."
    },
    "resume.exp.free.title": { en: "Delty WebSites — web development (self-employed)" },
    "resume.exp.free.dates": { en: "February 2023 – Present" },
    "resume.exp.free.org": { en: "Delty · delty.party" },
    "resume.exp.free.b1": {
      en: "Delty brand: custom websites for SMEs (Next.js + Cloudflare), with public pricing and demos."
    },
    "resume.exp.free.b2": {
      en: "2S Restaurant case (Paredes): full site with QR menu, menus and bookings."
    },
    "resume.exp.free.b3": {
      en: "Clients on *.delty.party / *.bookly.party — e.g. 504 Automóveis, Navalha Negra, Smile Papelaria, São Tomé Turismo, Carpintaria CP."
    },
    "resume.exp.core.title": { en: "Web and Mobile Application Developer" },
    "resume.exp.core.dates": { en: "September 2022 – August 2023" },
    "resume.exp.core.b1": { en: "Applications in C#, PHP and Xamarin." },
    "resume.exp.core.b2": {
      en: "Integration with business management systems."
    },
    "resume.exp.edi.title": { en: "Developer Internship" },
    "resume.exp.edi.dates": { en: "December 2020 – February 2021" },
    "resume.exp.edi.b1": {
      en: "Web and desktop applications in C# and SQL."
    },
    "resume.exp.edi.b2": {
      en: "Use of modern frameworks such as MAUI and Xamarin."
    },

    "contact.location": { en: "Location" },
    "contact.location.detail": {
      en: "Available for remote and on-site work in the Porto area"
    },
    "contact.email.detail": { en: "Preferred: email" },
    "contact.social": { en: "Social Networks" },
    "contact.social.detail": { en: "Follow me to keep up with my projects" },
    "contact.availability": { en: "Availability" },
    "contact.availability.body": { en: "Available for new projects" },
    "contact.availability.modes": { en: "Freelancer • Full-time • Part-time" },
    "contact.availability.status": { en: "Currently available" },
    "contact.cta.title": { en: "Shall we work together?" },
    "contact.cta.body": {
      en: "I am always interested in discussing new projects and interesting opportunities."
    },

    "navcard.section.title": { en: "Keep exploring" },
    "navcard.section.lead": {
      en: "Background, projects and contact — without the noise."
    },
    "navcard.about.title": { en: "About Me" },
    "navcard.about.body": {
      en: "Learn about my story, skills and passion for software development."
    },
    "navcard.resume.body": {
      en: "Explore my education, professional experience and technical skills."
    },
    "navcard.portfolio.body": {
      en: "Discover the projects I have worked on, from web apps to mobile and desktop solutions."
    },
    "navcard.contact.body": {
      en: "Get in touch with me to discuss opportunities or future collaborations."
    },

    "pagenav.about.title": { en: "Keep exploring" },
    "pagenav.about.body": {
      en: "Now that you know a little about me and my skills, discover my education and professional experience."
    },
    "pagenav.next": { en: "Next section" },
    "pagenav.about.next": { en: "Explore my academic and professional path" },
    "pagenav.about.progress": { en: "1 of 4 - About" },
    "pagenav.resume.title": { en: "Continue the journey" },
    "pagenav.resume.body": {
      en: "After learning about my background and experience, explore the projects I developed and the solutions I created."
    },
    "pagenav.resume.next": { en: "Discover my projects and completed work" },
    "pagenav.resume.progress": { en: "2 of 4 - Resume" },
    "pagenav.portfolio.title": { en: "Almost there" },
    "pagenav.portfolio.body": {
      en: "After exploring my projects, it is time to get in touch."
    },
    "pagenav.portfolio.next": { en: "Get in touch with me for collaborations" },
    "pagenav.portfolio.progress": { en: "3 of 4 - Portfolio" },
    "pagenav.contact.title": { en: "End of the journey" },
    "pagenav.contact.body": {
      en: "Thank you for exploring my portfolio! I hope you found what you were looking for. Come back anytime."
    },
    "pagenav.restart": { en: "Start Again" },
    "pagenav.restart.body": { en: "Return to the start to review everything again" },
    "pagenav.contact.progress": { en: "4 of 4 - Contacts" },

    "lang.switcher": { en: "Language selector" }
  };

  /** Legacy string-match fallback (titles/meta still translated when not keyed). */
  const translations = {
    "Contactos - Gonçalo Garrido": "Contacts — Gonçalo Garrido",
    "Contactos — Gonçalo Garrido": "Contacts — Gonçalo Garrido",
    "Sobre — Gonçalo Garrido": "About — Gonçalo Garrido",
    "Currículo — Gonçalo Garrido": "Resume — Gonçalo Garrido",
    "Portfólio — Gonçalo Garrido": "Portfolio — Gonçalo Garrido",
    "Gonçalo Garrido — Desenvolvedor de software": "Gonçalo Garrido — Software developer",
    "Desenvolvedor de software — backend, mobile e integração de sistemas · Porto. Currículo e portefólio de Gonçalo Garrido.": "Software developer — backend, mobile and systems integration · Porto. Resume and portfolio of Gonçalo Garrido.",
    "Sobre Gonçalo Garrido, desenvolvedor de software — backend, mobile e integração de sistemas · Porto.": "About Gonçalo Garrido, software developer — backend, mobile and systems integration · Porto.",
    "Currículo de Gonçalo Garrido, desenvolvedor de software — backend, mobile e integração de sistemas · Porto.": "Resume of Gonçalo Garrido, software developer — backend, mobile and systems integration · Porto.",
    "Contactos de Gonçalo Garrido, desenvolvedor de software — backend, mobile e integração de sistemas · Porto.": "Contact details for Gonçalo Garrido, software developer — backend, mobile and systems integration · Porto.",
    "Projetos em destaque com prova pública (Play Store, demos e documentação). O trabalho atual na WorkInNet/InspGest está detalhado no currículo.": "Featured projects with public proof (Play Store, demos and docs). Current WorkInNet/InspGest work is detailed on the resume.",
    "Gonçalo Garrido, Desenvolvedor de software, Backend, Mobile, Integração de sistemas, Porto, Portfólio, Currículo": "Gonçalo Garrido, Software developer, Backend, Mobile, Systems integration, Porto, Portfolio, Resume",
    "Sobre, Gonçalo Garrido, Desenvolvedor de software, Backend, Mobile, Porto, Currículo, Portfólio": "About, Gonçalo Garrido, Software developer, Backend, Mobile, Porto, Resume, Portfolio",
    "Currículo, Gonçalo Garrido, Desenvolvedor de software, Backend, Mobile, WorkInNet, Porto": "Resume, Gonçalo Garrido, Software developer, Backend, Mobile, WorkInNet, Porto",
    "Gonçalo Garrido, Desenvolvedor de software, Contactos, Porto": "Gonçalo Garrido, Software developer, Contacts, Porto",
    "Gonçalo Garrido, Desenvolvedor de software, Portfólio, Apps, Play Store, Porto": "Gonçalo Garrido, Software developer, Portfolio, Apps, Play Store, Porto",
    "Seletor de idioma": "Language selector"
  };

  const typedItemTranslations = {
    "desenvolvedor de software": "software developer",
    "programador backend": "backend developer",
    "desenvolvedor mobile": "mobile developer",
    "programador de integração de sistemas": "systems integration developer"
  };

  const textNodeOriginals = new WeakMap();
  const attributeOriginals = new WeakMap();

  function normalizeLanguage(language) {
    if (!language) return null;
    const normalized = language.toLowerCase().split("-")[0];
    return SUPPORTED_LANGUAGES.has(normalized) ? normalized : null;
  }

  function getInitialLanguage() {
    const urlLanguage = normalizeLanguage(new URLSearchParams(window.location.search).get("lang"));
    if (urlLanguage) return urlLanguage;

    try {
      const storedLanguage = normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
      if (storedLanguage) return storedLanguage;
    } catch (error) {
      return DEFAULT_LANGUAGE;
    }

    return DEFAULT_LANGUAGE;
  }

  function preserveSpacing(originalText, translatedText) {
    const leading = originalText.match(/^\s*/)[0];
    const trailing = originalText.match(/\s*$/)[0];
    return `${leading}${translatedText}${trailing}`;
  }

  function shouldTranslateTextNode(node) {
    if (!node.nodeValue.trim()) return false;
    const parent = node.parentElement;
    if (!parent) return false;
    if (parent.closest("[data-i18n]")) return false;
    return !parent.closest("script, style, noscript, code, pre, .language-switcher");
  }

  function translateByKeys(language) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (!key) return;

      if (!element.dataset.i18nOriginal) {
        element.dataset.i18nOriginal = element.textContent;
      }

      if (language === "pt") {
        element.textContent = element.dataset.i18nOriginal;
        return;
      }

      const entry = dictionary[key];
      if (entry && entry.en) {
        element.textContent = entry.en;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      const spec = element.getAttribute("data-i18n-attr");
      if (!spec) return;
      let originals = attributeOriginals.get(element);
      if (!originals) {
        originals = Object.create(null);
        attributeOriginals.set(element, originals);
      }
      spec.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((part) => part.trim());
        if (!attr || !key) return;
        if (!(attr in originals)) {
          originals[attr] = element.getAttribute(attr) || "";
        }
        if (language === "pt") {
          element.setAttribute(attr, originals[attr]);
          return;
        }
        const entry = dictionary[key];
        if (entry && entry.en) {
          element.setAttribute(attr, entry.en);
        }
      });
    });
  }

  function translateTextNodes(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return shouldTranslateTextNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      if (!textNodeOriginals.has(node)) {
        textNodeOriginals.set(node, node.nodeValue);
      }

      const original = textNodeOriginals.get(node);
      if (language === "pt") {
        node.nodeValue = original;
        return;
      }

      const key = original.trim();
      const translated = translations[key];
      if (translated) {
        node.nodeValue = preserveSpacing(original, translated);
      }
    });
  }

  function getOriginalAttribute(element, attribute) {
    if (!attributeOriginals.has(element)) {
      attributeOriginals.set(element, {});
    }

    const originals = attributeOriginals.get(element);
    if (!Object.prototype.hasOwnProperty.call(originals, attribute)) {
      originals[attribute] = element.getAttribute(attribute);
    }

    return originals[attribute];
  }

  function translateAttribute(element, attribute, language) {
    if (element.hasAttribute("data-i18n-attr") || element.hasAttribute("data-i18n")) return;

    const original = getOriginalAttribute(element, attribute);
    if (!original) return;

    if (language === "pt") {
      element.setAttribute(attribute, original);
      return;
    }

    const translated = translations[original.trim()];
    if (translated) {
      element.setAttribute(attribute, translated);
    }
  }

  function translateTypedItems(language) {
    document.querySelectorAll("[data-typed-items]").forEach((element) => {
      const original = getOriginalAttribute(element, "data-typed-items");
      if (!original) return;

      if (language === "pt") {
        element.setAttribute("data-typed-items", original);
        return;
      }

      const translatedItems = original.split(",").map((item) => {
        const trimmed = item.trim();
        return typedItemTranslations[trimmed] || trimmed;
      });

      element.setAttribute("data-typed-items", translatedItems.join(", "));
    });
  }

  function translateDocumentMetadata(language) {
    const titleEl = document.querySelector("title");
    if (titleEl && !titleEl.hasAttribute("data-i18n")) {
      if (!translateDocumentMetadata.originalTitle) {
        translateDocumentMetadata.originalTitle = document.title;
      }
      const originalTitle = translateDocumentMetadata.originalTitle;
      document.title = language === "pt" ? originalTitle : (translations[originalTitle] || originalTitle);
    }

    document.querySelectorAll("meta[name='description'], meta[name='keywords']").forEach((element) => {
      translateAttribute(element, "content", language);
    });
  }

  function syncInternalLinks(language) {
    document.querySelectorAll("a[href]").forEach((anchor) => {
      if (!anchor.dataset.i18nOriginalHref) {
        anchor.dataset.i18nOriginalHref = anchor.getAttribute("href");
      }

      const originalHref = anchor.dataset.i18nOriginalHref;
      if (
        !originalHref ||
        originalHref.startsWith("#") ||
        /^[a-z][a-z0-9+.-]*:/i.test(originalHref) ||
        !/\.html(?:[?#]|$)/i.test(originalHref)
      ) {
        return;
      }

      const [pathAndQuery, hash = ""] = originalHref.split("#");
      const [path, query = ""] = pathAndQuery.split("?");
      const params = new URLSearchParams(query);

      if (language === "en") {
        params.set("lang", "en");
      } else {
        params.delete("lang");
      }

      const queryString = params.toString();
      anchor.setAttribute("href", `${path}${queryString ? `?${queryString}` : ""}${hash ? `#${hash}` : ""}`);
    });
  }

  function createLanguageSwitcher(extraClass) {
    const switcher = document.createElement("div");
    switcher.className = `language-switcher${extraClass ? ` ${extraClass}` : ""}`;
    switcher.setAttribute("role", "group");
    switcher.setAttribute("aria-label", "Seletor de idioma");
    switcher.setAttribute("data-i18n-attr", "aria-label:lang.switcher");

    ["pt", "en"].forEach((language) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.language = language;
      button.textContent = language.toUpperCase();
      button.setAttribute("aria-label", language === "pt" ? "Português" : "English");
      button.addEventListener("click", () => setLanguage(language, true));
      switcher.appendChild(button);
    });

    return switcher;
  }

  function mountLanguageSwitchers() {
    const navList = document.querySelector("#navmenu > ul");
    if (navList && !navList.querySelector(".language-switcher")) {
      const navItem = document.createElement("li");
      navItem.className = "language-switcher-item";
      navItem.appendChild(createLanguageSwitcher());
      navList.appendChild(navItem);
    }

    if (!document.querySelector(".mobile-language-switcher")) {
      const header = document.querySelector("#header .container-fluid, #header .container-xl, #header");
      const switcher = createLanguageSwitcher("mobile-language-switcher");
      if (header && header.appendChild) {
        header.appendChild(switcher);
      } else {
        document.body.appendChild(switcher);
      }
    }
  }

  function updateLanguageButtons(language) {
    document.querySelectorAll(".language-switcher button").forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function updateCurrentUrl(language) {
    if (!window.history || !window.history.replaceState) return;

    const url = new URL(window.location.href);
    if (language === "en") {
      url.searchParams.set("lang", "en");
    } else {
      url.searchParams.delete("lang");
    }

    window.history.replaceState({}, "", url);
  }

  function persistLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      return;
    }
  }

  function setLanguage(language, updateUrl) {
    const normalized = normalizeLanguage(language) || DEFAULT_LANGUAGE;

    document.documentElement.lang = normalized === "en" ? "en" : "pt-PT";
    document.documentElement.dataset.language = normalized;

    translateDocumentMetadata(normalized);
    translateTypedItems(normalized);
    translateByKeys(normalized);
    translateTextNodes(normalized);
    syncInternalLinks(normalized);
    updateLanguageButtons(normalized);
    persistLanguage(normalized);

    if (updateUrl) updateCurrentUrl(normalized);

    window.dispatchEvent(new CustomEvent("portfolio:languageChanged", {
      detail: { language: normalized }
    }));

    if (window.portfolioRefreshTyped) {
      window.portfolioRefreshTyped();
    }
  }

  mountLanguageSwitchers();
  setLanguage(getInitialLanguage(), false);

  window.portfolioSetLanguage = setLanguage;
})();
