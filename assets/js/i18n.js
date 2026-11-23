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
    "case.kicker": { en: "Case study" },
    "case.problem": { en: "Problem" },
    "case.role": { en: "Role" },
    "case.tech": { en: "Tech" },
    "case.result": { en: "Outcome" },
    "case.back": { en: "Back to portfolio" },
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
      en: "Certifications, published apps and academic mobility — what carries weight for hiring."
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
    "recog.archive": { en: "Earlier contests (2018–2020)" },
    "portfolio.case": { en: "Case study" }
  };

  const translations = {
    "Início": "Home",
    "Sobre": "About",
    "Currículo": "Resume",
    "Portfólio": "Portfolio",
    "Contacto": "Contact",
    "Contactos": "Contacts",
    "Serviços": "Services",
    "Detalhes": "Details",
    "Página do curso": "Course page",
    "Página do Projeto": "Project Page",
    "Todos": "All",
    "Projetos web": "Web projects",
    "Destaques": "Featured",
    "Aplicações móveis": "Mobile apps",
    "Outros": "Other",
    "Descarregar CV": "Download CV",
    "Descarregar CV (PDF)": "Download CV (PDF)",
    "Ver projetos": "View projects",
    "Aplicações Móveis": "Mobile Apps",
    "Jogo": "Game",
    "Aplicações Desktop": "Desktop Apps",
    "Outros Projetos": "Other Projects",
    "Filtros:": "Filters:",
    "Ver projeto": "View project",
    "Ver Projetos": "View Projects",
    "Ver CV": "View CV",
    "Explorar": "Explore",
    "Contactar": "Contact",
    "Enviar Email": "Send Email",
    "Scroll para ver mais": "Scroll to see more",
    "Sou": "I'm",
    "Explorar o Meu Portfólio": "Explore My Portfolio",
    "Navegue pelas diferentes secções para conhecer melhor o meu trabalho e experiência": "Browse the different sections to learn more about my work and experience",
    "Sobre Mim": "About Me",
    "Conheça a minha história, competências e paixão pelo desenvolvimento de software.": "Learn about my story, skills and passion for software development.",
    "Consulte a minha formação académica, experiência profissional e competências técnicas.": "Explore my education, professional experience and technical skills.",
    "Descubra os projetos nos quais trabalhei, desde aplicações web a mobile e desktop.": "Discover the projects I have worked on, from web apps to mobile and desktop solutions.",
    "Entre em contacto comigo para discutir oportunidades ou colaborações futuras.": "Get in touch with me to discuss opportunities or future collaborations.",

    "Sobre - Gonçalo Garrido": "About - Gonçalo Garrido",
    "Currículo - Gonçalo Garrido": "Resume - Gonçalo Garrido",
    "Portfólio - Gonçalo Garrido": "Portfolio - Gonçalo Garrido",
    "Contactos - Gonçalo Garrido": "Contact - Gonçalo Garrido",
    "Gonçalo Garrido — Desenvolvedor de software": "Gonçalo Garrido — Software developer",
    "Sobre — Gonçalo Garrido": "About — Gonçalo Garrido",
    "Currículo — Gonçalo Garrido": "Resume — Gonçalo Garrido",
    "Portfólio — Gonçalo Garrido": "Portfolio — Gonçalo Garrido",
    "Detalhes do Serviço - Gonçalo Garrido": "Service Details - Gonçalo Garrido",
    "Desenvolvedor de software — backend, mobile e integração de sistemas · Porto. Currículo e portefólio de Gonçalo Garrido.": "Software developer — backend, mobile and systems integration · Porto. Resume and portfolio of Gonçalo Garrido.",
    "Sobre Gonçalo Garrido, desenvolvedor de software — backend, mobile e integração de sistemas · Porto.": "About Gonçalo Garrido, software developer — backend, mobile and systems integration · Porto.",
    "Currículo de Gonçalo Garrido, desenvolvedor de software — backend, mobile e integração de sistemas · Porto.": "Resume of Gonçalo Garrido, software developer — backend, mobile and systems integration · Porto.",
    "Contactos de Gonçalo Garrido, desenvolvedor de software — backend, mobile e integração de sistemas · Porto.": "Contact details for Gonçalo Garrido, software developer — backend, mobile and systems integration · Porto.",
    "Gonçalo Garrido, Desenvolvedor, Portfólio, Currículo, Projetos": "Gonçalo Garrido, Developer, Portfolio, Resume, Projects",
    "Sobre, Gonçalo Garrido, Desenvolvedor, Analista de Sistemas, Currículo, Portfólio": "About, Gonçalo Garrido, Developer, Systems Analyst, Resume, Portfolio",
    "Currículo, Gonçalo Garrido, Desenvolvedor, Analista de Sistemas": "Resume, Gonçalo Garrido, Developer, Systems Analyst",
    "Gonçalo Garrido, Desenvolvedor, Programador, Contactos": "Gonçalo Garrido, Developer, Programmer, Contacts",

    "Desenvolvedor de software — backend, mobile e integração de sistemas · Porto.": "Software developer — backend, mobile and systems integration · Porto.",
    "Desenvolvedor de software": "Software developer",
    "Backend, mobile e integração de sistemas — com apps publicadas na Play Store e experiência em software de negócio.": "Backend, mobile and systems integration — with apps published on the Play Store and experience in business software.",
    "Data de Nascimento:": "Date of Birth:",
    "31 Janeiro 2002": "31 January 2002",
    "Email:": "Email:",
    "Cidade:": "City:",
    "Idade:": "Age:",
    "Formação:": "Education:",
    "Licenciatura em TI": "Degree in IT",
    "Freelancer:": "Freelancer:",
    "Disponível": "Available",
    "Ao longo do percurso, trabalhei sobretudo com C#, Kotlin e SQL em backends, apps Android e integração de sistemas — incluindo o ecossistema InspGest para inspeção automóvel e projetos freelance de websites.": "Throughout my career I have mainly worked with C#, Kotlin and SQL on backends, Android apps and systems integration — including the InspGest ecosystem for vehicle inspection and freelance website projects.",
    "Habilitações": "Skills",
    "As minhas": "My",
    "Competências": "Skills",
    "Linguagens de Programação": "Programming Languages",
    "Ferramentas de Programação": "Programming Tools",
    "Outras Ferramentas de Desenvolvimento": "Other Development Tools",
    "Sistemas Operativos para os Quais Desenvolvi Software": "Operating Systems I Have Developed Software For",
    "Reconhecimentos": "Recognitions",
    "Algumas conquistas e certificações que marcaram a minha trajetória.": "Some achievements and certifications that marked my journey.",
    "Gestão e Programação de Sistemas Informáticos": "IT Systems Management and Programming",
    "Desenvolvimento de aplicações desktop e web, bases de dados e projetos técnicos com integração prática através de estágios profissionais.": "Development of desktop and web applications, databases and technical projects with practical integration through professional internships.",
    "Participação no concurso de programação Topas edição de 2018, realizado pela Faculdade de Ciências do Porto.": "Participation in the 2018 Topas programming contest, held by the Faculty of Sciences of Porto.",
    "Participação no concurso de programação Topas edição de 2019, realizado pela Faculdade de Ciências do Porto.": "Participation in the 2019 Topas programming contest, held by the Faculty of Sciences of Porto.",
    "Participação no concurso de programação Tecla edição de 2019, realizado pela ESTGA.": "Participation in the 2019 Tecla programming contest, held by ESTGA.",
    "Participação no concurso de programação Tecla edição de 2020, realizado pela ESTGA.": "Participation in the 2020 Tecla programming contest, held by ESTGA.",
    "Certificação C# com Microsoft": "C# Certification with Microsoft",
    "Este certificado atesta que": "This certificate confirms that",
    "completou com sucesso a Certificação de Fundamentos de C# com a Microsoft a 17 de janeiro de 2024.": "successfully completed the Foundational C# Certification with Microsoft on January 17, 2024.",
    "Verifique esta certificação em:": "Verify this certification at:",
    "Continue a Explorar": "Keep Exploring",
    "Agora que conhece um pouco sobre mim e as minhas competências, descubra a minha formação e experiência profissional.": "Now that you know a little about me and my skills, discover my education and professional experience.",
    "Próxima secção": "Next section",
    "Próxima Secção": "Next Section",
    "Explore o meu percurso académico e profissional": "Explore my academic and professional path",
    "1 de 4 - Sobre": "1 of 4 - About",

    "Formação e experiência profissional como desenvolvedor de software — backend, mobile e integração de sistemas.": "Education and professional experience as a software developer — backend, mobile and systems integration.",
    "Formação Académica": "Education",
    "Licenciatura em Tecnologias de Informação, Web e Multimédia": "Degree in Information Technologies, Web and Multimedia",
    "2022 - Setembro 2025": "2022 - September 2025",
    "Curso centrado no desenvolvimento de soluções tecnológicas e gestão de sistemas, com foco em desenvolvimento backend e integração de sistemas.": "Course focused on technological solutions and systems management, with an emphasis on backend development and system integration.",
    "Bacharelado em Ciência da Computação (mobilidade)": "Bachelor's in Computer Science (exchange)",
    "Agosto 2023 - Dezembro 2023": "August 2023 - December 2023",
    "Participação em programa de mobilidade, com foco no desenvolvimento de soluções em TI e integração de sistemas.": "Participation in an exchange program focused on IT solutions and system integration.",
    "CTeSP em Tecnologias e Programação de Sistemas de Informação": "Higher Professional Technical Course in Information Systems Technologies and Programming",
    "Curso técnico especializado em programação e gestão de sistemas, com estágios práticos de 6 meses.": "Specialized technical course in programming and systems management, with six-month practical internships.",
    "Curso Técnico de Gestão e Programação de Sistemas Informáticos": "Technical Course in IT Systems Management and Programming",
    "Média: 17": "Final grade: 17",
    "Experiência Profissional": "Professional Experience",
    "Desenvolvedor de Software": "Software Developer",
    "Agosto 2025 - Presente": "August 2025 - Present",
    "Desenvolvimento no ecossistema InspGest para centros de inspeção automóvel em Portugal, com ligações a Brasil e Angola.": "Development in the InspGest ecosystem for vehicle inspection centres in Portugal, with links to Brazil and Angola.",
    "Stack principal: C#, VB.NET, Kotlin e SQL — desktop, mobile e serviços.": "Main stack: C#, VB.NET, Kotlin and SQL — desktop, mobile and services.",
    "Integração com equipamentos de oficina e fluxos operacionais da linha de inspeção.": "Integration with workshop equipment and inspection-line operational flows.",
    "WorkInNet — InspGest (inspeção automóvel)": "WorkInNet — InspGest (vehicle inspection)",
    "Desenvolvedor Full Stack": "Full Stack Developer",
    "Março 2025 - Agosto 2025": "March 2025 - August 2025",
    "Desenvolvimento de aplicações e APIs com Kotlin e Node.js.": "Development of applications and APIs with Kotlin and Node.js.",
    "Integração de sistemas com WordPress.": "Systems integration with WordPress.",
    "Desenvolvedor de Aplicações Desktop": "Desktop Application Developer",
    "Março 2024 - Junho 2024": "March 2024 - June 2024",
    "Aplicações desktop com Visual Basic e SQL, e componentes web com Laravel.": "Desktop applications with Visual Basic and SQL, plus web components with Laravel.",
    "Soluções à medida para eficiência operacional dos clientes.": "Custom solutions for clients' operational efficiency.",
    "Desenvolvedor de websites (freelance)": "Website developer (freelance)",
    "Fevereiro 2023 - Junho 2024": "February 2023 - June 2024",
    "Conta própria": "Self-employed",
    "Lojas virtuais e aplicações web para clientes (e-commerce e sites institucionais).": "Online stores and web apps for clients (e-commerce and institutional sites).",
    "HTML, CSS, JavaScript, PHP e SQL.": "HTML, CSS, JavaScript, PHP and SQL.",
    "Desenvolvedor de Aplicações Web e Mobile": "Web and Mobile Application Developer",
    "Setembro 2022 - Agosto 2023": "September 2022 - August 2023",
    "Aplicações em C#, PHP e Xamarin.": "Applications in C#, PHP and Xamarin.",
    "Integração com sistemas de gestão empresarial.": "Integration with business management systems.",
    "Estágio como Desenvolvedor": "Developer Internship",
    "Dezembro 2020 - Fevereiro 2021": "December 2020 - February 2021",
    "Aplicações web e desktop em C# e SQL.": "Web and desktop applications in C# and SQL.",
    "Utilização de frameworks modernos como MAUI e Xamarin.": "Use of modern frameworks such as MAUI and Xamarin.",
    "Continue a Jornada": "Continue the Journey",
    "Após conhecer a minha formação e experiência, explore os projetos que desenvolvi e as soluções que criei.": "After learning about my background and experience, explore the projects I developed and the solutions I created.",
    "Descubra os meus projetos e trabalhos desenvolvidos": "Discover my projects and completed work",
    "2 de 4 - Currículo": "2 of 4 - Resume",

    "Projetos em destaque com prova pública (Play Store, demos e documentação). O trabalho actual na WorkInNet/InspGest está detalhado no currículo.": "Featured projects with public proof (Play Store, demos and docs). Current WorkInNet/InspGest work is detailed on the resume.",
    "App para pessoas com intolerância ao glúten: mapa de locais, informação de produtos e interface multilíngue (17 idiomas). Mantida na Play Store.": "App for people with gluten intolerance: venue map, product info and a multilingual UI (17 languages). Maintained on the Play Store.",
    "Launcher Android minimalista para reduzir distrações: modos de foco, automações e ecrãs configuráveis. Publicado e mantido na Play Store.": "Minimalist Android launcher to reduce distractions: focus modes, automations and configurable screens. Published and maintained on the Play Store.",
    "Gestor digital de cartões, cupões e bilhetes com QR e códigos de barras sempre à mão. App Android publicada na Play Store.": "Digital manager for cards, coupons and tickets with QR codes and barcodes always at hand. Android app published on the Play Store.",
    "Aplicacao Android para gestao de inventario de medicamentos e calculo personalizado de dosagens.": "Android app for medicine inventory management and personalized dosage calculation.",
    "Testa os teus reflexos num jogo simples e desafiante onde tens de alinhar pecas de sushi e construir a torre perfeita sem deixar cair nada.": "Test your reflexes in a simple, challenging game where you align sushi pieces and build the perfect tower without dropping anything.",
    "Plataforma web e Android de gestão para papelarias (material e livros escolares). Projeto de licenciatura no IPMAIA com documentação pública.": "Web and Android management platform for stationery shops (school materials and books). IPMAIA degree project with public documentation.",
    "Plataforma para compra de artigos de papelaria.": "Platform for buying stationery products.",
    "Aplicação para reconhecer objetos usando OCR.": "App for recognizing objects using OCR.",
    "Loja virtual focada na venda de produtos agrícolas.": "Online store focused on selling agricultural products.",
    "App para gestão de vendas e clientes.": "App for sales and customer management.",
    "Relatório": "Report",
    "Projeto de site para um ginásio, desenvolvido em JavaScript.": "Gym website project developed in JavaScript.",
    "Website para visualização e pesquisa de veículos.": "Website for viewing and searching vehicles.",
    "Aplicação web para edição de fotos e vídeos.": "Web application for editing photos and videos.",
    "Website sobre notícias com informações atualizadas.": "News website with up-to-date information.",
    "Plataforma para visualizar e comparar veículos à venda.": "Platform for viewing and comparing vehicles for sale.",
    "Website informativo para um zoológico.": "Informational website for a zoo.",
    "Gestão de Farmácia": "Pharmacy Management",
    "Gestão de produtos, funcionários e receitas (projeto académico).": "Management of products, employees and prescriptions (academic project).",
    "Quase no final": "Almost there",
    "Depois de explorar os meus projetos e competências, está na altura de entrarmos em contacto para futuros projetos.": "After exploring my projects and skills, it is time to get in touch for future projects.",
    "Entre em contacto comigo para colaborações": "Get in touch with me for collaborations",
    "3 de 4 - Portfólio": "3 of 4 - Portfolio",

    "Entre em contacto comigo para mais informações sobre o meu trabalho e portfólio.": "Get in touch for more information about my work and portfolio.",
    "Localização": "Location",
    "Disponível para trabalho remoto e presencial na região do Porto": "Available for remote and on-site work in the Porto area",
    "Resposta garantida em 24 horas": "Reply guaranteed within 24 hours",
    "Redes Sociais": "Social Networks",
    "Siga-me para acompanhar os meus projetos": "Follow me to keep up with my projects",
    "Disponibilidade": "Availability",
    "Disponível para novos projetos": "Available for new projects",
    "Freelancer • Full-time • Part-time": "Freelancer • Full-time • Part-time",
    "Atualmente disponível": "Currently available",
    "Vamos Trabalhar Juntos?": "Shall We Work Together?",
    "Tenho sempre interesse em discutir novos projetos e oportunidades interessantes.": "I am always interested in discussing new projects and interesting opportunities.",
    "Fim da Jornada": "End of the Journey",
    "Obrigado por explorar o meu portfólio! Espero que tenha encontrado o que procurava. Volte sempre que quiser.": "Thank you for exploring my portfolio! I hope you found what you were looking for. Come back anytime.",
    "Recomeçar": "Start Again",
    "Volte ao início para rever tudo novamente": "Return to the start to review everything again",
    "4 de 4 - Contactos": "4 of 4 - Contacts",

    "Detalhes do Serviço": "Service Details",
    "Explore os serviços oferecidos por Gonçalo Garrido, desde desenvolvimento de websites até aplicações móveis personalizadas e soluções empresariais.": "Explore the services offered by Gonçalo Garrido, from website development to custom mobile apps and business solutions.",
    "Desenvolvimento Web": "Web Development",
    "Aplicações Móveis": "Mobile Apps",
    "Design Gráfico": "Graphic Design",
    "Gestão de Projetos": "Project Management",
    "Consultoria em TI": "IT Consulting",
    "Experiência Comprovada": "Proven Experience",
    "Com vasta experiência em desenvolvimento de software, ofereço soluções completas e adaptadas às necessidades de cada cliente.": "With extensive experience in software development, I offer complete solutions tailored to each client's needs.",
    "Soluções Inovadoras e Personalizadas": "Innovative and Custom Solutions",
    "Combinando criatividade e tecnologia, desenvolvo projetos desde websites corporativos até aplicações móveis inovadoras e robustas.": "Combining creativity and technology, I develop projects from corporate websites to innovative and robust mobile applications.",
    "Desenvolvimento Backend com integração de sistemas ERP.": "Backend development with ERP system integration.",
    "Aplicações Mobile e Desktop adaptadas às suas necessidades.": "Mobile and desktop applications adapted to your needs.",
    "Soluções escaláveis para crescimento sustentável.": "Scalable solutions for sustainable growth.",
    "Seja um projeto simples ou uma solução empresarial complexa, estou comprometido em entregar resultados de alta qualidade que superem as expectativas.": "Whether it is a simple project or a complex business solution, I am committed to delivering high-quality results that exceed expectations.",

    "Obrigado por visitar o meu portfólio! Se tiver alguma questão ou estiver interessado em colaborar, não hesite em entrar em contacto comigo.": "Thank you for visiting my portfolio! If you have any questions or are interested in collaborating, do not hesitate to contact me.",
    "Se tiver alguma questão ou estiver interessado em colaborar, não hesite em entrar em contacto comigo.": "If you have any questions or are interested in collaborating, do not hesitate to contact me.",
    "Obrigado por visitar. Caso precise de apoio nos seus projetos, não hesite em entrar em contacto!": "Thank you for visiting. If you need support with your projects, do not hesitate to get in touch!",
    "Todos os Direitos Reservados": "All Rights Reserved",

    "Jogo diário de palavras em português europeu (estilo Wordle), com cinco modos e funcionamento offline. Desenvolvi a app Android e a versão web.": "Daily word game in European Portuguese (Wordle-style), with five modes and offline play. I built the Android app and the web version.",
    "Tech: Android / web · dicionário PT-PT.": "Tech: Android / web · PT-PT dictionary.",
    "Tech: Android · produtividade.": "Tech: Android · productivity.",
    "Tech: Android · mapas.": "Tech: Android · maps.",
    "Tech: Laravel · Kotlin.": "Tech: Laravel · Kotlin.",
    "Tech: Jetpack Compose.": "Tech: Jetpack Compose.",
    "Jogo Android de empilhar sushi com Google Play Games. Publicado na Play Store.": "Android sushi-stacking game with Google Play Games. Published on the Play Store.",
    "E-commerce de papelaria (freelance). Site actualmente offline — cópia no Internet Archive.": "Stationery e-commerce (freelance). Site currently offline — copy on the Internet Archive.",
    "Aplicação desktop associada ao e-commerce Smile (gestão de vendas e clientes). Relatório do projeto.": "Desktop app linked to the Smile e-commerce (sales and customer management). Project report.",
    "Smile — gestão de vendas": "Smile — sales management",
    "Loja virtual de produtos agrícolas (freelance). Disponibilidade do site pode variar.": "Online store for agricultural products (freelance). Site availability may vary.",
    "Website para visualização e pesquisa de veículos. Arquivado.": "Website for viewing and searching vehicles. Archived.",
    "Experiência académica de reconhecimento de texto/objectos com OCR.": "Academic experiment in text/object recognition with OCR.",
    "Projeto académico de site para um ginásio, em JavaScript.": "Academic gym website project in JavaScript.",
    "Site Ginásio": "Gym website",
    "Website académico de notícias.": "Academic news website.",
    "Website informativo académico para um zoológico.": "Academic informational zoo website.",
    "Projeto antigo de edição de fotos e vídeos (blog).": "Older photo and video editing project (blog).",
    "Depois de explorar os meus projetos, está na altura de entrarmos em contacto.": "After exploring my projects, it is time to get in touch.",


    "Stacks": "Stacks",
    "núcleo": "core",
    "Foco actual no trabalho e nos projetos publicados:": "Current focus in work and published projects:",
    "Foco atual no trabalho e nos projetos publicados:": "Current focus in work and published projects:",
    "C# / .NET": "C# / .NET",
    "Backend, desktop e integrações (também VB.NET no ecossistema InspGest).": "Backend, desktop and integrations (also VB.NET in the InspGest ecosystem).",
    "Kotlin / Android": "Kotlin / Android",
    "Apps móveis publicadas na Play Store e clientes Android de negócio.": "Mobile apps published on the Play Store and Android business clients.",
    "SQL Server": "SQL Server",
    "Modelação, consultas e scripts/migrações em software de inspeção e negócio.": "Modelling, queries and scripts/migrations in inspection and business software.",
    "Node.js": "Node.js",
    "APIs e integração de sistemas (ex.: ParadigmaXis); também PHP/Laravel em projetos web.": "APIs and systems integration (e.g. ParadigmaXis); also PHP/Laravel on web projects.",
    "Também usei": "Also used",
    "Ferramentas e linguagens secundárias — contacto pontual, não o foco principal:": "Secondary tools and languages — occasional use, not the main focus:",
    "Vamos trabalhar juntos?": "Shall we work together?",
    "Fim da jornada": "End of the journey",
    "Continue a explorar": "Keep exploring",
    "Continue a jornada": "Continue the journey",
    "Seletor de idioma": "Language selector",

    "Todos os direitos reservados": "All rights reserved"
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
      spec.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((part) => part.trim());
        if (!attr || !key) return;
        const originalKey = `i18nOriginalAttr_${attr}`;
        if (!element.dataset[originalKey]) {
          element.dataset[originalKey] = element.getAttribute(attr) || "";
        }
        if (language === "pt") {
          element.setAttribute(attr, element.dataset[originalKey]);
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
    if (!translateDocumentMetadata.originalTitle) {
      translateDocumentMetadata.originalTitle = document.title;
    }

    const originalTitle = translateDocumentMetadata.originalTitle;
    document.title = language === "pt" ? originalTitle : (translations[originalTitle] || originalTitle);

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
      document.body.appendChild(createLanguageSwitcher("mobile-language-switcher"));
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
