(function() {
  "use strict";

  const STORAGE_KEY = "goncalo-site-language";
  const DEFAULT_LANGUAGE = "pt";
  const SUPPORTED_LANGUAGES = new Set(["pt", "en"]);

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
    "Projetos Web": "Web Projects",
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
    "Gonçalo Garrido - Portfólio": "Gonçalo Garrido - Portfolio",
    "Detalhes do Serviço - Gonçalo Garrido": "Service Details - Gonçalo Garrido",
    "Currículo e Portfólio de Gonçalo Garrido, Desenvolvedor e Analista de Sistemas.": "Resume and portfolio of Gonçalo Garrido, software developer and systems analyst.",
    "Página sobre Gonçalo Garrido, Desenvolvedor e Analista de Sistemas.": "About Gonçalo Garrido, software developer and systems analyst.",
    "Página de currículo de Gonçalo Garrido, Desenvolvedor e Analista de Sistemas.": "Resume page of Gonçalo Garrido, software developer and systems analyst.",
    "Contactos de Gonçalo Garrido, desenvolvedor backend e analista de sistemas.": "Contact details for Gonçalo Garrido, backend developer and systems analyst.",
    "Gonçalo Garrido, Desenvolvedor, Portfólio, Currículo, Projetos": "Gonçalo Garrido, Developer, Portfolio, Resume, Projects",
    "Sobre, Gonçalo Garrido, Desenvolvedor, Analista de Sistemas, Currículo, Portfólio": "About, Gonçalo Garrido, Developer, Systems Analyst, Resume, Portfolio",
    "Currículo, Gonçalo Garrido, Desenvolvedor, Analista de Sistemas": "Resume, Gonçalo Garrido, Developer, Systems Analyst",
    "Gonçalo Garrido, Desenvolvedor, Programador, Contactos": "Gonçalo Garrido, Developer, Programmer, Contacts",

    "Sendo Analista de Sistemas Informáticos, concentro-me na programação Backend. Possuo experiência em desenvolvimento de software e manutenção de hardware.": "As an Information Systems Analyst, I focus on backend programming. I have experience in software development and hardware maintenance.",
    "Analista de Sistemas & Desenvolvedor de Software": "Systems Analyst & Software Developer",
    "Desenvolvedor de software com experiência em backend, integração de sistemas e desenvolvimento de soluções personalizadas.": "Software developer with experience in backend development, system integration and custom solutions.",
    "Data de Nascimento:": "Date of Birth:",
    "31 Janeiro 2002": "31 January 2002",
    "Email:": "Email:",
    "Cidade:": "City:",
    "Idade:": "Age:",
    "Formação:": "Education:",
    "Licenciatura em TI": "Degree in IT",
    "Freelancer:": "Freelancer:",
    "Disponível": "Available",
    "Durante minha carreira, adquiri habilidades em programação C#, SQL e integração de sistemas, trabalhando em projetos que conectam soluções personalizadas e os seus clientes.": "Throughout my career, I have built skills in C#, SQL and system integration, working on projects that connect custom solutions with their clients.",
    "Habilitações": "Skills",
    "As minhas": "My",
    "Competências": "Skills",
    "Linguagens de Programação": "Programming Languages",
    "Ferramentas de Programação": "Programming Tools",
    "Outras Ferramentas de Desenvolvimento": "Other Development Tools",
    "Sistemas Operativos para os Quais Desenvolvi Software": "Operating Systems I Have Developed Software For",
    "Reconhecimentos": "Recognitions",
    "Algumas conquistas e certificações que marcaram minha trajetória.": "Some achievements and certifications that marked my journey.",
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
    "Próxima Secção": "Next Section",
    "Explore o meu percurso académico e profissional": "Explore my academic and professional path",
    "1 de 4 - Sobre": "1 of 4 - About",

    "Resumo da minha formação académica e experiência profissional como Analista de Sistemas e Desenvolvedor.": "Summary of my academic background and professional experience as a Systems Analyst and Developer.",
    "Formação Académica": "Education",
    "Licenciatura em Tecnologias de Informação, Web e Multimédia": "Degree in Information Technologies, Web and Multimedia",
    "2022 - Setembro 2025": "2022 - September 2025",
    "Curso centrado no desenvolvimento de soluções tecnológicas e gestão de sistemas, com foco em desenvolvimento backend e integração de sistemas.": "Course focused on technological solutions and systems management, with an emphasis on backend development and system integration.",
    "Bacharelado em Ciência da Computação (Mobilidade)": "Bachelor's in Computer Science (Exchange)",
    "Agosto 2023 - Dezembro 2023": "August 2023 - December 2023",
    "Participação em programa de mobilidade, com foco no desenvolvimento de soluções em TI e integração de sistemas.": "Participation in an exchange program focused on IT solutions and system integration.",
    "CTeSP em Tecnologias e Programação de Sistemas de Informação": "Higher Professional Technical Course in Information Systems Technologies and Programming",
    "Curso técnico especializado em programação e gestão de sistemas, com estágios práticos de 6 meses.": "Specialized technical course in programming and systems management, with six-month practical internships.",
    "Curso Técnico de Gestão e Programação de Sistemas Informáticos": "Technical Course in IT Systems Management and Programming",
    "Média: 17": "Final grade: 17",
    "Experiência Profissional": "Professional Experience",
    "Desenvolvedor de Software": "Software Developer",
    "Agosto 2025 - Presente": "August 2025 - Present",
    "Desenvolvimento e manutencao de solucoes de software ajustadas as necessidades do cliente.": "Development and maintenance of software solutions tailored to client needs.",
    "Desenvolvedor Full Stack": "Full Stack Developer",
    "Março 2025 - Agosto 2025": "March 2025 - August 2025",
    "Desenvolvimento de aplicações e Api's utilizando Kotlin, NodeJs e integração de sistemas com wordpress.": "Development of applications and APIs using Kotlin, Node.js and system integration with WordPress.",
    "Desenvolvedor de Aplicações Desktop": "Desktop Application Developer",
    "Março 2024 - Junho 2024": "March 2024 - June 2024",
    "Desenvolvimento de aplicações desktop utilizando VisualBasic e SQL e laravel.": "Development of desktop applications using Visual Basic, SQL and Laravel.",
    "Criação de soluções personalizadas para melhorar a eficiência do cliente.": "Creation of custom solutions to improve client efficiency.",
    "Desenvolvedor de WebSites": "Website Developer",
    "Fevereiro 2023 - Junho 2024": "February 2023 - June 2024",
    "Conta Própria": "Self-employed",
    "Desenvolvimento de lojas virtuais e aplicações web.": "Development of online stores and web applications.",
    "Domínio de tecnologias como HTML, CSS, Javascript, PHP e SQL.": "Strong command of technologies such as HTML, CSS, JavaScript, PHP and SQL.",
    "Desenvolvedor de Aplicações Web e Mobile": "Web and Mobile Application Developer",
    "Setembro 2022 - Agosto 2023": "September 2022 - August 2023",
    "Desenvolvimento de aplicações em C#, PHP e Xamarin.": "Development of applications in C#, PHP and Xamarin.",
    "Integração com sistemas para gestão empresarial.": "Integration with business management systems.",
    "Estágio como Desenvolvedor": "Developer Internship",
    "Dezembro 2020 - Fevereiro 2021": "December 2020 - February 2021",
    "Desenvolvimento de aplicações web e desktop em C# e SQL.": "Development of web and desktop applications in C# and SQL.",
    "Utilização de frameworks modernas como Maui e Xamarin.": "Use of modern frameworks such as MAUI and Xamarin.",
    "Continue a Jornada": "Continue the Journey",
    "Após conhecer a minha formação e experiência, explore os projetos que desenvolvi e as soluções que criei.": "After learning about my background and experience, explore the projects I developed and the solutions I created.",
    "Descubra os meus projetos e trabalhos desenvolvidos": "Discover my projects and completed work",
    "2 de 4 - Currículo": "2 of 4 - Resume",

    "Bem-vindo ao meu portfólio! Aqui poderá explorar os projetos nos quais estive envolvido, desde desenvolvimento web a aplicações móveis e muito mais.": "Welcome to my portfolio! Here you can explore the projects I have been involved in, from web development to mobile apps and much more.",
    "Aplicação para identificar produtos sem glúten.": "App for identifying gluten-free products.",
    "Launcher Android focado em produtividade e concentracao.": "Android launcher focused on productivity and concentration.",
    "Guarda cartoes, cupoes e bilhetes numa app simples e rapida, com QR codes e codigos de barras sempre prontos a usar.": "Store cards, coupons and tickets in a simple, fast app, with QR codes and barcodes always ready to use.",
    "Aplicacao Android para gestao de inventario de medicamentos e calculo personalizado de dosagens.": "Android app for medicine inventory management and personalized dosage calculation.",
    "Testa os teus reflexos num jogo simples e desafiante onde tens de alinhar pecas de sushi e construir a torre perfeita sem deixar cair nada.": "Test your reflexes in a simple, challenging game where you align sushi pieces and build the perfect tower without dropping anything.",
    "Sistema de Organização de Material e Livros Escolares.": "System for organizing school materials and books.",
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
    "Gerenciamento de produtos, funcionários e receitas.": "Management of products, employees and prescriptions.",
    "Quase no Final": "Almost There",
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
    "Todos os direitos reservados": "All rights reserved"
  };

  const typedItemTranslations = {
    "Desenvolvedor": "Developer",
    "Analista de Sistemas Informáticos": "Information Systems Analyst",
    "Programador": "Programmer",
    "Freelancer": "Freelancer",
    "Especializado": "Specialized",
    "Dedicado": "Dedicated",
    "Proativo": "Proactive",
    "Criativo": "Creative",
    "Arquiteto de Soluções": "Solutions Architect",
    "Engenheiro de Sistemas": "Systems Engineer",
    "Desenvolvedor de Software": "Software Developer"
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
    return !parent.closest("script, style, noscript, code, pre, .language-switcher");
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
    switcher.setAttribute("aria-label", "Language selector");

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
