import { useState } from "react"

export const textos = {
  es: {
    // Hero
    saludo: "Hola, soy",
    disponible: "Disponible para proyectos",
    subtitulo: [
      "Desarrollador Web Full-Stack",
      "Especialista en Portales de Noticias",
      "Integrador de IA en proyectos web",
    ],
    descripcion: "Creo portales de noticias, tiendas online y plataformas digitales para radios, canales de TV y negocios que quieren crecer en internet.",
    verProyectos: "Ver proyectos",
    contactame: "Contactame",

    // Servicios
    servicios: "Lo que hago",
    serviciosTitulo: "Servicios",
    serviciosDesc: "Desarrollo soluciones digitales completas — desde el diseño hasta el deploy.",
    servicio1Titulo: "Portales de Noticias",
    servicio1Desc: "Portales completos para radios, canales de TV y medios digitales. Con player de streaming, grilla de programación, reels y banners publicitarios.",
    servicio2Titulo: "Tiendas Online",
    servicio2Desc: "E-commerce completos con carrito de compras, pagos online y panel de administración para que el cliente gestione sus productos.",
    servicio3Titulo: "Plataformas Digitales",
    servicio3Desc: "Aplicaciones web a medida para negocios que necesitan más que una página estática. Sistemas con usuarios, paneles y datos en tiempo real.",
    servicio4Titulo: "Sitios Web Corporativos",
    servicio4Desc: "Presencia digital profesional para empresas y emprendimientos. Diseño moderno, rápido y optimizado para Google.",

    // Proyectos
    miTrabajo: "Mi trabajo",
    proyectosTitulo: "Proyectos",
    proyectosDesc: "Proyectos reales que muestran lo que puedo construir.",
    destacado: "Proyecto destacado",
    proyecto1Titulo: "Portal de Noticias",
    proyecto1Sub: "Para radios, canales de TV y streaming",
    proyecto1Desc: "Portal completo con player de streaming en vivo, grilla de programación administrable, sección de reels de Instagram, banners publicitarios y sistema de widgets. Desarrollado como producto vendible para medios de comunicación.",
    proyecto2Sub: "Plataforma de música digital",
    proyecto2Desc: "Plataforma de streaming de música con reproductor, catálogo de artistas y álbumes, sistema de usuarios y panel de administración. Desarrollado como proyecto final del curso con mejoras propias posteriores.",
    demoProximo: "Demo próximamente",
    verDemo: "Ver demo",

    // Habilidades
    stack: "Stack",
    habilidadesTitulo: "Habilidades",
    habilidadesDesc: "Tecnologías con las que construyo proyectos reales.",
    baseDatos: "Bases de datos",
    herramientas: "Herramientas",
    inteligenciaArtificial: "Inteligencia Artificial",
    promptingAvanzado: "Prompting avanzado",
    integracionIA: "Integración de APIs de IA",
    automatizacionIA: "Automatización con IA",
    cmsPlataformas: "CMS y Plataformas",
    temasAMedida: "Temas a medida",
    pluginsPersonalizados: "Plugins personalizados",

    // Sobre mí
    quienSoy: "Quién soy",
    sobreMiTitulo: "Sobre mí",
    sobreMiP1: "Soy Franco Quinteros, desarrollador web Full-Stack de Tucumán, Argentina. Me formé en Rolling Code School donde aprendí desde HTML hasta arquitecturas completas con React y Node.js.",
    sobreMiP2: "Me especializo en portales de noticias para radios y canales de TV — es un producto que armé porque vi que los medios locales necesitaban presencia digital más profesional y completa. También desarrollo tiendas online, plataformas de streaming y aplicaciones web a medida. Si un negocio necesita crecer en internet, puedo construirlo.",
    sobreMiP3: "Trabajo con inteligencia artificial — uso Claude AI para potenciar mis proyectos y ayudar a mis clientes a automatizar procesos y sacarle más valor a sus plataformas digitales.",
    proyectosCompletados: "Proyectos completados",
    anio: "año",
    formacionIntensiva: "Formación intensiva",
    frontendBackend: "Frontend y Backend",
    portalesNoticias: "Portales de noticias",
    portalesNoticiasDesc: "Desarrollé un producto completo para medios de comunicación — portales profesionales listos para vender a radios y canales de TV.",
    iaDesarrollo: "IA aplicada al desarrollo",
    iaDesarrolloDesc: "Integro inteligencia artificial en mis flujos de trabajo y proyectos, usando Claude AI para potenciar resultados y automatizar procesos.",
    disponibleProyectos: "Disponible para proyectos",
    disponibleProyectosDesc: "Abierto a proyectos freelance, colaboraciones y oportunidades de trabajo remoto desde Tucumán.",

    // Contacto
    hablemos: "Hablemos",
    contactoTitulo: "Contacto",
    contactoDesc: "Tenés un proyecto en mente o querés saber más sobre los portales de noticias. Escribime y te respondo.",
    enviameUnMensaje: "Enviame un mensaje",
    nombre: "Nombre",
    tuNombre: "Tu nombre",
    mensaje: "Mensaje",
    contameProyecto: "Contame sobre tu proyecto...",
    enviarMensaje: "Enviar mensaje",
    respondo: "Respondo en menos de 24hs",

    // Footer
    footerCTA: "Tenés un proyecto?",
    footerCTATitulo: "Hablemos y lo construimos.",
    footerDerechos: "Todos los derechos reservados",
  },

  en: {
    // Hero
    saludo: "Hi, I'm",
    disponible: "Available for projects",
    subtitulo: [
      "Full-Stack Web Developer",
      "News Portal Specialist",
      "AI Integration Developer",
    ],
    descripcion: "I build news portals, online stores and digital platforms for radio stations, TV channels and businesses that want to grow online.",
    verProyectos: "View projects",
    contactame: "Contact me",

    // Servicios
    servicios: "What I do",
    serviciosTitulo: "Services",
    serviciosDesc: "Full digital solutions — from design to deployment.",
    servicio1Titulo: "News Portals",
    servicio1Desc: "Complete portals for radio stations, TV channels and digital media. With live streaming player, programming grid, reels and advertising banners.",
    servicio2Titulo: "Online Stores",
    servicio2Desc: "Full e-commerce with shopping cart, online payments and admin panel for the client to manage their products.",
    servicio3Titulo: "Digital Platforms",
    servicio3Desc: "Custom web applications for businesses that need more than a static page. Systems with users, panels and real-time data.",
    servicio4Titulo: "Corporate Websites",
    servicio4Desc: "Professional digital presence for companies and startups. Modern, fast and Google-optimized design.",

    // Proyectos
    miTrabajo: "My work",
    proyectosTitulo: "Projects",
    proyectosDesc: "Real projects that show what I can build.",
    destacado: "Featured project",
    proyecto1Titulo: "News Portal",
    proyecto1Sub: "For radio stations, TV channels and streaming",
    proyecto1Desc: "Complete portal with live streaming player, manageable programming grid, Instagram reels section, advertising banners and widget system. Developed as a sellable product for media companies.",
    proyecto2Sub: "Digital music platform",
    proyecto2Desc: "Music streaming platform with player, artist and album catalog, user system and admin panel. Developed as a final course project with subsequent personal improvements.",
    demoProximo: "Demo coming soon",
    verDemo: "View demo",

    // Habilidades
    stack: "Stack",
    habilidadesTitulo: "Skills",
    habilidadesDesc: "Technologies I use to build real projects.",
    baseDatos: "Databases",
    herramientas: "Tools",
    inteligenciaArtificial: "Artificial Intelligence",
    promptingAvanzado: "Advanced Prompting",
    integracionIA: "AI API Integration",
    automatizacionIA: "AI Automation",
    cmsPlataformas: "CMS & Platforms",
    temasAMedida: "Custom themes",
    pluginsPersonalizados: "Custom plugins",

    // Sobre mí
    quienSoy: "Who I am",
    sobreMiTitulo: "About me",
    sobreMiP1: "I'm Franco Quinteros, a Full-Stack web developer from Tucumán, Argentina. I trained at Rolling Code School where I learned everything from HTML to complete architectures with React and Node.js.",
    sobreMiP2: "I specialize in news portals for radio stations and TV channels — a product I built because I saw that local media needed a more professional and complete digital presence. I also develop online stores, streaming platforms and custom web applications. If a business needs to grow online, I can build it.",
    sobreMiP3: "I work with artificial intelligence — I use Claude AI to enhance my projects and help my clients automate processes and get more value from their digital platforms.",
    proyectosCompletados: "Completed projects",
    anio: "year",
    formacionIntensiva: "Intensive training",
    frontendBackend: "Frontend & Backend",
    portalesNoticias: "News portals",
    portalesNoticiasDesc: "I developed a complete product for media companies — professional portals ready to sell to radio stations and TV channels.",
    iaDesarrollo: "AI applied to development",
    iaDesarrolloDesc: "I integrate artificial intelligence into my workflows and projects, using Claude AI to enhance results and automate processes.",
    disponibleProyectos: "Available for projects",
    disponibleProyectosDesc: "Open to freelance projects, collaborations and remote work opportunities from Tucumán.",

    // Contacto
    hablemos: "Let's talk",
    contactoTitulo: "Contact",
    contactoDesc: "Have a project in mind or want to know more about the news portals? Write to me and I'll get back to you.",
    enviameUnMensaje: "Send me a message",
    nombre: "Name",
    tuNombre: "Your name",
    mensaje: "Message",
    contameProyecto: "Tell me about your project...",
    enviarMensaje: "Send message",
    respondo: "I respond within 24 hours",

    // Footer
    footerCTA: "Have a project?",
    footerCTATitulo: "Let's talk and build it.",
    footerDerechos: "All rights reserved",
  }
}

export function useLang() {
  const [lang, setLang] = useState("es")
  const toggle = () => setLang(prev => prev === "es" ? "en" : "es")
  return { lang, toggle, t: textos[lang] }
}