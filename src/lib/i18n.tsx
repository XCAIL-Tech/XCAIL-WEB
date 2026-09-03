import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Language = "es" | "en";

const es = {
  navbar: {
    inicio: "Inicio",
    productos: "Productos",
    premios: "Premios",
    nosotros: "Nosotros",
    contacto: "Contacto",
  },
  hero: {
    badge: "Startup SaaS · IA para neurodesarrollo y accesibilidad",
    h1_line1: "XCAIL",
    h1_line2: "Technologies",
    creators: "Creadores de AsisTEA e INCLUXIA.",
    headline: "Inteligencia artificial aplicada a la accesibilidad, el neurodesarrollo y la inclusión.",
    subheadline: "Inteligencia artificial aplicada a la accesibilidad, el neurodesarrollo y la inclusión.",
    cta_primary: "Explorar productos",
    cta_secondary: "Agendar una llamada",
    anti_title: "Productos tecnológicos propios diseñados para escalar.",
    anti_body:
      "En XCAIL desarrollamos plataformas digitales impulsadas por inteligencia artificial e infraestructura cloud, enfocadas en neurodesarrollo, accesibilidad y autonomía. Nuestro enfoque está centrado exclusivamente en productos SaaS propios y tecnología aplicada de impacto real.",
    badge_asistea: "AsisTEA — Beta",
    badge_ohm: "INCLUXIA Connect — Disponible",
    highlights: [
      { title: "Neurodesarrollo", body: "Herramientas digitales para acompañamiento estructurado y autonomía." },
      { title: "Inteligencia Artificial", body: "Asistencia contextual impulsada por modelos de IA." },
      { title: "Accesibilidad", body: "Tecnología diseñada para ampliar comunicación e inclusión." },
      { title: "Cloud Native", body: "Infraestructura escalable preparada para crecimiento." },
    ],
    product_card_badge: "IA Generativa",
    product_card_features: [
      "Agendas visuales adaptadas por IA",
      "Seguimiento conductual en tiempo real",
      "Coordinación familiar y profesional",
      "Reportes de evolución integrados",
    ],
  },
  products: {
    title: "Nuestros Productos",
    subtitle:
      "Creamos herramientas tecnológicas enfocadas en neurodesarrollo, accesibilidad y comunicación asistida impulsadas por inteligencia artificial.",
    asistea: {
      badge: "Beta Activa",
      title: "AsisTEA",
      subtitle: "Acompañamiento inteligente para familias, cuidadores y profesionales.",
      description: [
        "AsisTEA es la infraestructura digital de XCAIL Technologies para el neurodesarrollo y la neurodiversidad. No es una herramienta clínica: es un espacio de apoyo, planificación y seguimiento que baja la carga cognitiva de quienes acompañan a una persona autista.",
        "En un mismo lugar, familias, adultos en autogestión, profesionales de la salud y aliados organizan rutinas, generan guías personalizadas y registran la evolución del día a día — con reportes que se comparten con todo el equipo de acompañamiento.",
      ],
      how_it_works_title: "Cómo funciona AsisTEA",
      how_it_works: [
        { step: "01", title: "Creá el perfil", desc: "Configurá las necesidades, preferencias de comunicación y objetivos diarios del usuario." },
        { step: "02", title: "La IA arma las rutinas", desc: "La plataforma genera agendas visuales y actividades estructuradas adaptadas al usuario." },
        { step: "03", title: "Registro diario", desc: "Registrá conductas, observaciones y evolución en tiempo real desde cualquier dispositivo." },
        { step: "04", title: "Reportes y equipo", desc: "Accedé a datos de evolución y compartí reportes con familia, terapeutas y educadores." },
      ],
      features: [
        { title: "Agendas visuales y rutinas", desc: "Organización estructurada adaptada al día a día." },
        { title: "Guías impulsadas por IA", desc: "Recomendaciones contextuales personalizadas." },
        { title: "Seguimiento diario", desc: "Registro de evolución y observaciones." },
        { title: "Coordinación familiar-profesional", desc: "Un espacio compartido para acompañamiento integral." },
        { title: "Reportes y evolución", desc: "Historial centralizado del progreso." },
        { title: "Personalización adaptativa", desc: "Herramientas ajustadas a diferentes necesidades." },
      ],
      cta: "Probar AsisTEA Beta",
      screenshots: [
        { src: "/media/productos/asistea/00_AsisTEA_Portada.webp", label: "Portada" },
        { src: "/media/productos/asistea/01_AsisTEA_Panel_Familiar.webp", label: "Panel familiar" },
        { src: "/media/productos/asistea/02_AsisTEA_Acompanamiento_Personalizado_IA.webp", label: "Acompañamiento personalizado con IA" },
        { src: "/media/productos/asistea/03_AsisTEA_Espacio_de_Aprendizaje.webp", label: "Espacio de aprendizaje" },
        { src: "/media/productos/asistea/04_AsisTEA_Espacio_Sensorial.webp", label: "Espacio sensorial" },
        { src: "/media/productos/asistea/05_AsisTEA_Agenda_y_Organizacion.webp", label: "Agenda y organización" },
      ],
    },
    ohm: {
      badge: "Disponible",
      title: "INCLUXIA Connect",
      subtitle: "Comunicador aumentativo y alternativo impulsado por barrido automático.",
      description: [
        "INCLUXIA Connect le devuelve la voz a personas con discapacidad motora y del habla — ELA, parálisis cerebral, lesión medular, secuelas de ACV, enfermedades neuromusculares. Todo se opera con un único movimiento voluntario: el sistema recorre solo el teclado (barrido) y la persona confirma en el momento justo.",
        "La confirmación se hace con un switch/pulsador o con un guiño detectado por la cámara, que se procesa en el propio dispositivo — el video nunca se transmite ni se guarda. Las funciones esenciales trabajan sin conexión.",
      ],
      features: [
        { title: "Barrido inteligente", desc: "Un solo movimiento controla todo el teclado." },
        { title: "Predicción de palabras offline", desc: "Anticipa palabras en español, sin conexión." },
        { title: "Guiño por cámara", desc: "Detección de parpadeo procesada en el propio dispositivo, nunca se transmite." },
        { title: "Texto a voz", desc: "Convierte cada mensaje en voz al instante." },
        { title: "Offline-first", desc: "Las funciones esenciales funcionan sin conexión a internet." },
        { title: "Se instala como app", desc: "Se instala desde el navegador como PWA, sin tiendas de apps. Pensada para notebook, tablet o PC." },
      ],
      cta: "Conocer INCLUXIA Connect",
      screenshots: [
        { src: "/media/productos/incluxia-connect/00-INCLUXIA_CONNECT_PORTADA.webp", label: "Portada" },
        { src: "/media/productos/incluxia-connect/01-INCLUXIA-CONNECT-Plataforma-Web.webp", label: "Plataforma web" },
        { src: "/media/productos/incluxia-connect/02-INCLUXIA-CONNECT-Comunicacion-Accesible.webp", label: "Comunicación accesible" },
        { src: "/media/productos/incluxia-connect/03-INCLUXIA-CONNECT-Alerta-SOS.webp", label: "Alerta SOS" },
        { src: "/media/productos/incluxia-connect/04-INCLUXIA-CONNECT-Notas-Expresion-Personal.webp", label: "Notas y expresión personal" },
        { src: "/media/productos/incluxia-connect/05-INCLUXIA-CONNECT-Mensajeria-Red-de-Apoyo.webp", label: "Mensajería con la red de apoyo" },
      ],
    },
    stroke: {
      badge: "En desarrollo",
      title: "INCLUXIA Stroke",
      subtitle: "Reconocimiento temprano de señales de ACV.",
      description: [
        "INCLUXIA Stroke acompaña el tramo más crítico y menos cubierto de un ACV: los minutos previos a llegar al hospital. Guía a reconocer las señales de alerta con el protocolo internacional FAST/BE-FAST —una pregunta por pantalla, con pictogramas— y las traduce en un semáforo de riesgo y un cronómetro anclado a la hora del primer síntoma.",
        "Con riesgo alto, un solo toque llama a emergencias, comparte la ubicación y el perfil médico precargado —medicación, alergias, antecedentes— y avisa a la red de apoyo. Nunca diagnostica: orienta y ayuda a actuar dentro de la ventana de 4,5 horas en la que el tratamiento es efectivo.",
      ],
      features: [
        { title: "Reconocimiento FAST/BE-FAST", desc: "Guía a evaluar señales de alerta paso a paso." },
        { title: "Semáforo de riesgo", desc: "Traduce la evaluación en un nivel de riesgo claro." },
        { title: "Cronómetro de activación", desc: "Acompaña desde el primer síntoma detectado." },
        { title: "Perfil de emergencia", desc: "Contactos, medicación, alergias y antecedentes cargados en calma, listos para compartir." },
        { title: "Activación en un toque", desc: "Llama a emergencias, comparte tu ubicación y avisa a tus contactos, todo a la vez." },
        { title: "Alerta a la red de apoyo", desc: "Notifica en simultáneo a familiares y cuidadores con el resumen de la situación." },
      ],
      cta: "Conocer INCLUXIA Stroke",
      screenshots: [
        { src: "/media/productos/incluxia-stroke/00-INCLUXIA-STROKE-Reconocimiento-y-Respuesta.webp", label: "Reconocimiento y respuesta" },
      ],
    },
  },
  pricing: {
    title: "Planes y Acceso",
    subtitle: "Soluciones pensadas para cada contexto, desde familias hasta instituciones y tecnología de vanguardia.",
    familiar: {
      badge: "Beta Activa",
      title: "AsisTEA Familiar",
      subtitle: "Para familias y cuidadores",
      price: "Gratis",
      price_note: "Con funciones ampliadas disponibles",
      features: [
        "Organización diaria asistida por IA",
        "Generación de guías personalizadas",
        "Registro de evolución",
        "Acompañamiento conectado",
        "Funciones avanzadas (Plus)",
      ],
      cta: "Probar AsisTEA Beta",
    },
    institutional: {
      badge: "Pilotos Institucionales",
      title: "AsisTEA Institucional",
      subtitle: "Para salud, educación y centros de apoyo",
      price: "Licenciamiento",
      price_note: "Cotización personalizada",
      features: [
        "Centralización de información",
        "Trabajo interdisciplinario",
        "Seguimiento estructurado",
        "Paneles multiusuario",
        "Infraestructura cloud escalable",
      ],
      cta: "Solicitar Piloto",
    },
    ohm: {
      badge: "Disponible",
      title: "INCLUXIA Connect",
      subtitle: "Para personas con discapacidad motora y del habla",
      price: "Gratis",
      price_note: "Plan Esencial gratuito — Plan Pleno próximamente",
      features: [
        "Barrido con un solo movimiento",
        "Predicción de palabras offline",
        "Guiño por cámara, procesado en el dispositivo",
        "Texto a voz",
        "Funciona sin conexión a internet",
      ],
      cta: "Crear cuenta gratis",
    },
  },
  awards: {
    title: "Premios y Reconocimientos",
    subtitle:
      "Validaciones institucionales que respaldan nuestra innovación tecnológica e impacto social.",
    britcham_title: "Cámara de Comercio Argentino-Británica (BritCham)",
    britcham_badge: "Mención Especial — Diversidad, Equidad e Inclusión (DEI) · 2025",
    britcham_body:
      "BritCham Argentina distingue iniciativas con impacto verificable y proyección institucional. XCAIL Technologies recibió una Mención Especial en la categoría Diversidad, Equidad e Inclusión (DEI) por el desarrollo de AsisTEA, validando su enfoque tecnológico, impacto social y potencial de escalabilidad.",
    britcham_cert_caption: "Certificado oficial — Mención Especial en Diversidad, Equidad e Inclusión (DEI).",
    britcham_ceremony_caption: "Ceremonia BritCham Argentina 2025 — Embajada Británica.",
    britcham_award_caption: "Momento de entrega del reconocimiento en la Embajada Británica.",
    sadosky_title: "Premios Sadosky — Cámara de la Industria Argentina del Software (CESSI)",
    sadosky_badge: "Finalista en dos categorías · 2025",
    sadosky_body:
      "Los Premios Sadosky constituyen el reconocimiento más relevante del sector tecnológico argentino. En su 21° edición, XCAIL fue finalista en dos categorías simultáneas — Innovación Transformadora e Impacto Digital — destacándose por su enfoque tecnológico, impacto verificable y potencial de innovación y escalabilidad.",
    premiosverdes_title: "Premios Verdes — Ranking 500 Mejores Proyectos de Iberoamérica",
    premiosverdes_badge: "Top 500 Proyectos Socioambientales · 2026",
    premiosverdes_body:
      "AsisTEA fue seleccionado entre los 500 mejores proyectos de impacto de América Latina y el Caribe en el marco de Premios Verdes 2026, reconocimiento que distingue iniciativas con alto potencial para contribuir al desarrollo sostenible mediante soluciones innovadoras de impacto social y ambiental.",
    premiosverdes_cert_caption: "Certificado oficial de participación en Premios Verdes 2026.",
    premiosverdes_gif_caption: "AsisTEA en el ranking de los 500 mejores proyectos socioambientales de Iberoamérica.",
    premiosverdes_cta: "Ver proyecto en Premios Verdes",
  },
  about: {
    title: "Nosotros",
    subtitle: "Tecnología aplicada para ampliar autonomía, accesibilidad y acompañamiento.",
    company_section_title: "Sobre XCAIL Technologies",
    company_p1: "XCAIL Technologies es una startup argentina de base tecnológica especializada en inteligencia artificial aplicada a la accesibilidad, el neurodesarrollo y la inclusión.",
    company_p2: "Empezamos por el neurodesarrollo con AsisTEA, y por la discapacidad motora, del habla y las señales de ACV con INCLUXIA. Hay un espacio mucho más grande al que todavía no llega suficiente tecnología de calidad — parálisis cerebral, síndrome de Down, Parkinson, sordera, y otras condiciones — y nuestro objetivo es seguir ampliando hacia ahí.",
    company_p3: "Construimos plataformas tecnológicas propias, diseñadas para resolver desafíos reales de personas, familias, profesionales e instituciones — nunca desarrollos a medida para terceros.",
    company_p4: "Hoy, el ecosistema de productos propios de XCAIL incluye:",
    asistea_mini_title: "AsisTEA",
    asistea_mini_desc: "Plataforma de acompañamiento inteligente orientada al neurodesarrollo, organización, seguimiento y coordinación entre familias, cuidadores y profesionales.",
    ohm_mini_title: "INCLUXIA Connect",
    ohm_mini_desc: "Comunicador (AAC) por barrido automático, disponible hoy para personas con discapacidad motora y del habla.",
    stroke_mini_title: "INCLUXIA Stroke",
    stroke_mini_desc: "Reconocimiento temprano de señales de ACV (FAST/BE-FAST), en desarrollo hacia su lanzamiento público.",
    company_closing: "Construida sobre inteligencia artificial generativa e infraestructura cloud, XCAIL desarrolla productos SaaS preparados para escalar y ampliar el acceso a tecnologías de apoyo de alto impacto en mercados de habla hispana.",
    vision_title: "Nuestra visión",
    vision_p1: "Creemos que la inteligencia artificial puede convertirse en una herramienta concreta para ampliar autonomía, accesibilidad y oportunidades, acercando tecnologías de apoyo avanzadas a más personas, familias e instituciones.",
    vision_p2: "Nuestra visión es construir un ecosistema tecnológico donde el neurodesarrollo y la accesibilidad sean potenciados mediante productos digitales inteligentes, escalables y centrados en las necesidades reales de las personas.",
    builds_title: "Qué construimos",
    builds_asistea_subtitle: "Acompañamiento inteligente para neurodesarrollo",
    builds_asistea_desc: "Herramientas impulsadas por inteligencia artificial para organización diaria, seguimiento, generación de guías y acompañamiento conectado entre familias y profesionales.",
    builds_asistea_status: "Beta activa",
    builds_ohm_subtitle: "Comunicador AAC por barrido automático",
    builds_ohm_desc: "Comunicador aumentativo y alternativo para personas con discapacidad motora y del habla, con predicción de palabras offline y texto a voz.",
    builds_ohm_status: "Disponible",
    builds_stroke_subtitle: "Reconocimiento temprano de señales de ACV",
    builds_stroke_desc: "Guía a reconocer señales de alerta mediante el protocolo FAST/BE-FAST, con semáforo de riesgo y cronómetro de activación.",
    builds_stroke_status: "En desarrollo",
    status_label: "Estado:",
    leadership_title: "Liderazgo",
    founder_name: "Carlos Ezequiel Leiva",
    founder_role: "Founder & CEO de",
    founder_org: "XCAIL Technologies",
    founder_bio: [
      "Carlos Ezequiel Leiva es fundador y CEO de XCAIL Technologies, una empresa tecnológica enfocada en el desarrollo de soluciones de inteligencia artificial aplicadas al neurodesarrollo, la accesibilidad y las tecnologías de apoyo.",
      "Con experiencia en electrónica, ciencia de datos e inteligencia artificial, lidera el diseño y desarrollo de productos tecnológicos orientados a ampliar la autonomía, la organización y la comunicación de personas neurodivergentes y personas con barreras de acceso, así como de sus familias, profesionales e instituciones.",
      "Su trabajo integra inteligencia artificial generativa, analítica de datos, automatización y arquitectura cloud para transformar necesidades concretas en soluciones tecnológicas escalables y de impacto.",
      "Actualmente lidera el desarrollo de AsisTEA, una plataforma de acompañamiento digital para el neurodesarrollo, e INCLUXIA, la plataforma de tecnología accesible de XCAIL que integra Connect, un comunicador de CAA, y Stroke, una solución orientada a la identificación y actuación temprana ante posibles señales de ACV.",
      "Su enfoque combina el desarrollo tecnológico con el diseño centrado en las personas: las soluciones de XCAIL se construyen y validan junto a usuarios, familias y profesionales, integrando sus necesidades desde el diseño hasta la evolución del producto y con una visión de alcance regional.",
    ],
    linkedin_btn: "Ver LinkedIn",
    founder_specializations_title: "Áreas de especialización",
    founder_specializations: [
      "Inteligencia Artificial",
      "Ciencia de Datos",
      "Desarrollo Tecnológico",
      "Electrónica",
      "Accesibilidad Digital",
      "Tecnologías de Apoyo",
    ],
    stats: [
      { value: "2", label: "Productos en desarrollo" },
      { value: "2025", label: "Año de fundación" },
      { value: "15+", label: "Tecnologías integradas" },
      { value: "2", label: "Verticales de impacto" },
    ],
    timeline_title: "Nuestra historia",
    timeline: [
      { year: "2025", badge: "Fundación", desc: "XCAIL Technologies SAS se constituye en Buenos Aires con foco en inteligencia artificial aplicada al neurodesarrollo y accesibilidad." },
      { year: "2025", badge: "AsisTEA Beta", desc: "Lanzamiento de la Beta de AsisTEA: plataforma de acompañamiento inteligente para familias y profesionales que trabajan con personas con TEA." },
      { year: "2026", badge: "INCLUXIA Connect", desc: "Inicio del desarrollo de INCLUXIA Connect: comunicador AAC por barrido automático para personas con discapacidad motora y del habla." },
      { year: "2026", badge: "INCLUXIA Stroke", desc: "Desarrollo de INCLUXIA Stroke: reconocimiento temprano de señales de ACV, segunda línea de la plataforma INCLUXIA." },
    ],
  },
  contact: {
    title: "Contacto",
    subtitle: "Conectemos para alianzas, instituciones, pilotos o consultas.",
    form_title: "Envianos tu consulta",
    form_subtitle:
      "¿Te interesa AsisTEA, INCLUXIA, una alianza institucional o conocer nuestro trabajo? Escribinos y te responderemos a la brevedad.",
    name: "Nombre completo",
    name_placeholder: "Tu nombre",
    email_label: "Correo electrónico",
    email_placeholder: "tu@email.com",
    institution: "Institución / Organización",
    institution_placeholder: "Nombre de la institución (opcional)",
    subject: "Asunto",
    subject_placeholder: "Selecciona un asunto",
    subjects: [
      "Conocer AsisTEA",
      "Conocer INCLUXIA",
      "Alianza institucional",
      "Piloto o adopción",
      "Prensa o reconocimientos",
      "Consulta general",
      "Otro",
    ],
    message: "Mensaje",
    message_placeholder: "Describe brevemente el motivo de tu contacto...",
    submit: "Enviar mensaje",
    sending: "Enviando...",
    success: "Mensaje enviado correctamente. Nos comunicaremos pronto.",
    error: "Hubo un error al enviar. Intenta nuevamente o escribinos a contacto@xcail.com",
    info_title: "Información corporativa",
    email_info: "Email corporativo",
    address_info: "Domicilio legal",
    address: "Nicaragua 4817, CABA, Argentina",
    legal_name: "XCAIL Technologies SAS",
    cuit_label: "CUIT",
    cuit: "30-71921679-6",
  },
  faq: {
    title: "Preguntas frecuentes",
    subtitle: "Todo lo que necesitás saber sobre XCAIL Technologies, AsisTEA e INCLUXIA.",
    still_have_questions: "¿Todavía tenés dudas?",
    write_us: "Escribinos a contacto@xcail.com",
    items: [
      {
        question: "¿Qué es XCAIL Technologies?",
        answer:
          "XCAIL Technologies es una startup argentina de base tecnológica especializada en inteligencia artificial aplicada a la accesibilidad, el neurodesarrollo y la inclusión. Construimos productos propios de software: AsisTEA e INCLUXIA.",
      },
      {
        question: "¿Qué diferencia hay entre AsisTEA e INCLUXIA?",
        answer:
          "AsisTEA está enfocada en el neurodesarrollo — acompaña a familias, cuidadores y profesionales que trabajan con personas neurodivergentes. INCLUXIA está enfocada en accesibilidad motora, del habla y salud, e incluye dos líneas: INCLUXIA Connect (comunicador AAC) e INCLUXIA Stroke (reconocimiento de señales de ACV).",
      },
      {
        question: "¿En qué países están disponibles los productos de XCAIL?",
        answer:
          "AsisTEA e INCLUXIA están disponibles en los países de habla hispana, y seguimos ampliando su alcance.",
      },
      {
        question: "¿Quién fundó XCAIL Technologies?",
        answer:
          "XCAIL Technologies fue fundada por Carlos Ezequiel Leiva (Founder & CEO), en Buenos Aires, Argentina, en 2025.",
      },
      {
        question: "¿XCAIL tiene reconocimientos?",
        answer:
          "Sí. XCAIL fue finalista en dos categorías de los Premios Sadosky 2025 (CESSI) y recibió una Mención Especial en Diversidad, Equidad e Inclusión de BritCham Argentina 2025, ambos por el desarrollo de AsisTEA.",
      },
      {
        question: "¿Cómo puedo contactar a XCAIL para una alianza institucional?",
        answer:
          "Escribinos a contacto@xcail.com, o agendá una llamada desde la sección de Contacto de este sitio.",
      },
      {
        question: "¿XCAIL va a lanzar más productos?",
        answer:
          "Sí. Además de AsisTEA e INCLUXIA, seguimos ampliando la misma tecnología hacia nuevas áreas donde la autonomía de las personas todavía depende de soluciones que no existen.",
      },
    ],
  },
  footer: {
    tagline: "Tecnología con Propósito",
    privacy: "Política de Privacidad",
    terms: "Términos y Condiciones",
    aviso_legal: "Aviso Legal",
    linkedin: "LinkedIn",
    rights: "Todos los derechos reservados",
    products_title: "Productos",
    faq: "Preguntas frecuentes",
    company_title: "Empresa",
    legal_title: "Legal",
    about_link: "Quiénes somos",
    location: "CABA, Argentina",
  },
};

const en: typeof es = {
  navbar: {
    inicio: "Home",
    productos: "Products",
    premios: "Awards",
    nosotros: "About",
    contacto: "Contact",
  },
  hero: {
    badge: "SaaS Startup · AI for neurodevelopment & accessibility",
    h1_line1: "XCAIL",
    h1_line2: "Technologies",
    creators: "Creators of AsisTEA and INCLUXIA.",
    headline: "Artificial intelligence applied to accessibility, neurodevelopment, and inclusion.",
    subheadline: "Artificial intelligence applied to accessibility, neurodevelopment, and inclusion.",
    cta_primary: "Explore products",
    cta_secondary: "Book a call",
    anti_title: "Proprietary technology products built to scale.",
    anti_body:
      "At XCAIL we develop digital platforms powered by artificial intelligence and cloud infrastructure, focused on neurodevelopment, accessibility, and autonomy. Our focus is exclusively on proprietary SaaS products and real-impact applied technology.",
    badge_asistea: "AsisTEA — Beta",
    badge_ohm: "INCLUXIA Connect — Available",
    highlights: [
      { title: "Neurodevelopment", body: "Digital tools for structured support and autonomy." },
      { title: "Artificial Intelligence", body: "Contextual assistance powered by AI models." },
      { title: "Accessibility", body: "Technology designed to expand communication and inclusion." },
      { title: "Cloud Native", body: "Scalable infrastructure ready for growth." },
    ],
    product_card_badge: "Generative AI",
    product_card_features: [
      "AI-adapted visual schedules",
      "Real-time behavioral tracking",
      "Family and professional coordination",
      "Integrated progress reports",
    ],
  },
  products: {
    title: "Our Products",
    subtitle:
      "We create AI-powered technology tools focused on neurodevelopment, accessibility, and assisted communication.",
    asistea: {
      badge: "Active Beta",
      title: "AsisTEA",
      subtitle: "Intelligent support for families, caregivers, and professionals.",
      description: [
        "AsisTEA is XCAIL Technologies' digital infrastructure for neurodevelopment and neurodiversity. It is not a clinical tool: it is a space for support, planning, and tracking that lowers the cognitive load on those who care for an autistic person.",
        "In one place, families, self-managing adults, health professionals, and allies organize routines, generate personalized guides, and log day-to-day progress — with reports shared across the whole support team.",
      ],
      how_it_works_title: "How AsisTEA works",
      how_it_works: [
        { step: "01", title: "Create the profile", desc: "Set up the user's needs, communication preferences, and daily goals." },
        { step: "02", title: "AI builds the routines", desc: "The platform generates visual schedules and structured activities adapted to the user." },
        { step: "03", title: "Daily logging", desc: "Track behaviors, observations, and progress in real time from any device." },
        { step: "04", title: "Reports & team sync", desc: "Access evolution data and share structured reports with family, therapists, and educators." },
      ],
      features: [
        { title: "Visual schedules & routines", desc: "Structured organization adapted to daily life." },
        { title: "AI-powered guides", desc: "Personalized contextual recommendations." },
        { title: "Daily tracking", desc: "Progress record and observations." },
        { title: "Family-professional coordination", desc: "A shared space for comprehensive support." },
        { title: "Reports & evolution", desc: "Centralized progress history." },
        { title: "Adaptive personalization", desc: "Tools adjusted to different needs." },
      ],
      cta: "Try AsisTEA Beta",
      screenshots: [
        { src: "/media/productos/asistea/00_AsisTEA_Portada.webp", label: "Cover" },
        { src: "/media/productos/asistea/01_AsisTEA_Panel_Familiar.webp", label: "Family panel" },
        { src: "/media/productos/asistea/02_AsisTEA_Acompanamiento_Personalizado_IA.webp", label: "AI-personalized support" },
        { src: "/media/productos/asistea/03_AsisTEA_Espacio_de_Aprendizaje.webp", label: "Learning space" },
        { src: "/media/productos/asistea/04_AsisTEA_Espacio_Sensorial.webp", label: "Sensory space" },
        { src: "/media/productos/asistea/05_AsisTEA_Agenda_y_Organizacion.webp", label: "Schedule & organization" },
      ],
    },
    ohm: {
      badge: "Available",
      title: "INCLUXIA Connect",
      subtitle: "Augmentative and alternative communicator powered by automatic scanning.",
      description: [
        "INCLUXIA Connect gives a voice back to people with motor and speech disabilities — ALS, cerebral palsy, spinal cord injury, stroke after-effects, neuromuscular diseases. Everything is operated with a single voluntary movement: the system scans across the keyboard on its own and the person confirms at the right moment.",
        "Confirmation happens with a switch/button or with a blink detected by the camera, processed on the device itself — the video is never transmitted or stored. Core features work offline.",
      ],
      features: [
        { title: "Smart scanning", desc: "A single movement controls the entire keyboard." },
        { title: "Offline word prediction", desc: "Anticipates words in Spanish, no connection needed." },
        { title: "Camera-based blink access", desc: "Blink detection processed on-device, never transmitted." },
        { title: "Text to speech", desc: "Converts every message to voice instantly." },
        { title: "Offline-first", desc: "Core features work without an internet connection." },
        { title: "Installs as an app", desc: "Installs from the browser as a PWA, no app stores. Built for laptop, tablet, or PC." },
      ],
      cta: "Discover INCLUXIA Connect",
      screenshots: [
        { src: "/media/productos/incluxia-connect/00-INCLUXIA_CONNECT_PORTADA.webp", label: "Cover" },
        { src: "/media/productos/incluxia-connect/01-INCLUXIA-CONNECT-Plataforma-Web.webp", label: "Web platform" },
        { src: "/media/productos/incluxia-connect/02-INCLUXIA-CONNECT-Comunicacion-Accesible.webp", label: "Accessible communication" },
        { src: "/media/productos/incluxia-connect/03-INCLUXIA-CONNECT-Alerta-SOS.webp", label: "SOS alert" },
        { src: "/media/productos/incluxia-connect/04-INCLUXIA-CONNECT-Notas-Expresion-Personal.webp", label: "Notes & personal expression" },
        { src: "/media/productos/incluxia-connect/05-INCLUXIA-CONNECT-Mensajeria-Red-de-Apoyo.webp", label: "Support-network messaging" },
      ],
    },
    stroke: {
      badge: "In development",
      title: "INCLUXIA Stroke",
      subtitle: "Early recognition of stroke warning signs.",
      description: [
        "INCLUXIA Stroke covers the most critical and least-served stretch of a stroke: the minutes before reaching the hospital. It guides warning-sign recognition with the international FAST/BE-FAST protocol —one question per screen, with pictograms— and translates it into a risk level and a timer anchored to the time of the first symptom.",
        "At high risk, a single tap calls emergency services, shares the location and the pre-loaded medical profile —medication, allergies, history— and alerts the support network. It never diagnoses: it guides and helps act within the 4.5-hour window in which treatment is effective.",
      ],
      features: [
        { title: "FAST/BE-FAST recognition", desc: "Guides a step-by-step warning-sign assessment." },
        { title: "Risk level indicator", desc: "Translates the assessment into a clear risk level." },
        { title: "Activation timer", desc: "Tracks time from the first detected symptom." },
        { title: "Emergency profile", desc: "Contacts, medication, allergies, and history set up in calm, ready to share." },
        { title: "One-tap activation", desc: "Calls emergency services, shares your location, and alerts your contacts at once." },
        { title: "Support-network alert", desc: "Notifies family and caregivers simultaneously with a summary of the situation." },
      ],
      cta: "Discover INCLUXIA Stroke",
      screenshots: [
        { src: "/media/productos/incluxia-stroke/00-INCLUXIA-STROKE-Reconocimiento-y-Respuesta.webp", label: "Recognition and response" },
      ],
    },
  },
  pricing: {
    title: "Plans & Access",
    subtitle: "Solutions designed for every context, from families to institutions and cutting-edge technology.",
    familiar: {
      badge: "Active Beta",
      title: "AsisTEA Familiar",
      subtitle: "For families and caregivers",
      price: "Free",
      price_note: "With extended features available",
      features: [
        "AI-assisted daily organization",
        "AI-powered guide generation",
        "Progress tracking",
        "Connected support",
        "Advanced features (Plus)",
      ],
      cta: "Try AsisTEA Beta",
    },
    institutional: {
      badge: "Institutional Pilots",
      title: "AsisTEA Institutional",
      subtitle: "For health, education & support centers",
      price: "Institutional licensing",
      price_note: "Custom quote",
      features: [
        "Information centralization",
        "Interdisciplinary collaboration",
        "Structured tracking",
        "Multi-user dashboards",
        "Scalable cloud infrastructure",
      ],
      cta: "Request Pilot",
    },
    ohm: {
      badge: "Available",
      title: "INCLUXIA Connect",
      subtitle: "For people with motor and speech disabilities",
      price: "Free",
      price_note: "Free Essential Plan — Full Plan coming soon",
      features: [
        "Single-movement scanning",
        "Offline word prediction",
        "Camera blink access, on-device",
        "Text to speech",
        "Works without an internet connection",
      ],
      cta: "Create a free account",
    },
  },
  awards: {
    title: "Awards & Recognition",
    subtitle: "Institutional validations supporting our technological innovation and social impact.",
    britcham_title: "Argentine-British Chamber of Commerce (BritCham)",
    britcham_badge: "Special Mention — Diversity, Equity & Inclusion (DEI) · 2025",
    britcham_body:
      "BritCham Argentina recognizes initiatives with verifiable impact and institutional projection. XCAIL Technologies received a Special Mention in the DEI category for the development of AsisTEA, validating its technological approach, social impact, and scalability potential.",
    britcham_cert_caption: "Official certificate — Special Mention in Diversity, Equity & Inclusion (DEI).",
    britcham_ceremony_caption: "BritCham Argentina Ceremony 2025 — British Embassy.",
    britcham_award_caption: "Recognition award ceremony at the British Embassy.",
    sadosky_title: "Sadosky Awards — Argentine Software Industry Chamber (CESSI)",
    sadosky_badge: "Finalist in two categories · 2025",
    sadosky_body:
      "The Sadosky Awards are the most relevant recognition in the Argentine technology sector. In its 21st edition, XCAIL was a finalist in two simultaneous categories — Transformative Innovation and Digital Impact — standing out for its technological approach, verifiable impact, and innovation potential.",
    premiosverdes_title: "Premios Verdes — Top 500 Best Projects in Latin America & the Caribbean",
    premiosverdes_badge: "Top 500 Socio-Environmental Projects · 2026",
    premiosverdes_body:
      "AsisTEA was selected among the 500 best impact projects in Latin America and the Caribbean as part of Premios Verdes 2026, a recognition that distinguishes initiatives with high potential to contribute to sustainable development through innovative solutions with social and environmental impact.",
    premiosverdes_cert_caption: "Official certificate of participation in Premios Verdes 2026.",
    premiosverdes_gif_caption: "AsisTEA in the ranking of the 500 best socio-environmental projects in Latin America and the Caribbean.",
    premiosverdes_cta: "View project on Premios Verdes",
  },
  about: {
    title: "About Us",
    subtitle: "Applied technology to expand autonomy, accessibility, and support.",
    company_section_title: "About XCAIL Technologies",
    company_p1: "XCAIL Technologies is an Argentine deep-tech startup specialized in artificial intelligence applied to accessibility, neurodevelopment, and inclusion.",
    company_p2: "We started with neurodevelopment through AsisTEA, and with motor and speech disabilities and stroke warning signs through INCLUXIA. There's a much larger space technology still hasn't reached — cerebral palsy, Down syndrome, Parkinson's, deafness, and other conditions — and our goal is to keep expanding into it.",
    company_p3: "We build our own technology platforms, designed to solve real challenges for people, families, professionals, and institutions — never custom development for third parties.",
    company_p4: "Today, XCAIL's own product ecosystem includes:",
    asistea_mini_title: "AsisTEA",
    asistea_mini_desc: "An intelligent support platform focused on neurodevelopment, organization, tracking, and coordination between families, caregivers, and professionals.",
    ohm_mini_title: "INCLUXIA Connect",
    ohm_mini_desc: "AAC communicator powered by automatic scanning, available today for people with motor and speech disabilities.",
    stroke_mini_title: "INCLUXIA Stroke",
    stroke_mini_desc: "Early recognition of stroke warning signs (FAST/BE-FAST), in development toward public launch.",
    company_closing: "Built on generative artificial intelligence and cloud infrastructure, XCAIL develops SaaS products ready to scale and expand access to high-impact assistive technologies in Spanish-speaking markets.",
    vision_title: "Our vision",
    vision_p1: "We believe artificial intelligence can become a concrete tool to expand autonomy, accessibility, and opportunities — bringing advanced assistive technologies closer to more people, families, and institutions.",
    vision_p2: "Our vision is to build a technology ecosystem where neurodevelopment and accessibility are enhanced through intelligent, scalable digital products centered on the real needs of people.",
    builds_title: "What we build",
    builds_asistea_subtitle: "Intelligent support for neurodevelopment",
    builds_asistea_desc: "AI-powered tools for daily organization, tracking, guide generation, and connected support between families and professionals.",
    builds_asistea_status: "Active Beta",
    builds_ohm_subtitle: "AAC communicator powered by automatic scanning",
    builds_ohm_desc: "Augmentative and alternative communicator for people with motor and speech disabilities, with offline word prediction and text to speech.",
    builds_ohm_status: "Available",
    builds_stroke_subtitle: "Early recognition of stroke warning signs",
    builds_stroke_desc: "Guides users through recognizing warning signs via the FAST/BE-FAST protocol, with a risk level indicator and activation timer.",
    builds_stroke_status: "In development",
    status_label: "Status:",
    leadership_title: "Leadership",
    founder_name: "Carlos Ezequiel Leiva",
    founder_role: "Founder & CEO of",
    founder_org: "XCAIL Technologies",
    founder_bio: [
      "Carlos Ezequiel Leiva is the founder and CEO of XCAIL Technologies, a technology company focused on developing artificial intelligence solutions applied to neurodevelopment, accessibility, and assistive technologies.",
      "With a background in electronics, data science, and artificial intelligence, he leads the design and development of technology products aimed at expanding the autonomy, organization, and communication of neurodivergent people and people facing access barriers, along with their families, professionals, and institutions.",
      "His work integrates generative artificial intelligence, data analytics, automation, and cloud architecture to turn concrete needs into scalable, high-impact technology solutions.",
      "He currently leads the development of AsisTEA, a digital support platform for neurodevelopment, and INCLUXIA, XCAIL's accessible technology platform, which brings together Connect, an AAC communicator, and Stroke, a solution focused on early identification of and response to possible stroke warning signs.",
      "His approach combines technology development with people-centered design: XCAIL's solutions are built and validated together with users, families, and professionals, incorporating their needs from design through product evolution, with a regionally scoped vision.",
    ],
    linkedin_btn: "View LinkedIn",
    founder_specializations_title: "Areas of expertise",
    founder_specializations: [
      "Artificial Intelligence",
      "Data Science",
      "Technology Development",
      "Electronics",
      "Digital Accessibility",
      "Assistive Technologies",
    ],
    stats: [
      { value: "2", label: "Products in development" },
      { value: "2025", label: "Founded" },
      { value: "15+", label: "Integrated technologies" },
      { value: "2", label: "Impact verticals" },
    ],
    timeline_title: "Our story",
    timeline: [
      { year: "2025", badge: "Founded", desc: "XCAIL Technologies SAS established in Buenos Aires, focused on AI applied to neurodevelopment and accessibility." },
      { year: "2025", badge: "AsisTEA Beta", desc: "Launch of AsisTEA Beta: an intelligent support platform for families and professionals working with people with ASD." },
      { year: "2026", badge: "INCLUXIA Connect", desc: "Development of INCLUXIA Connect begins: an AAC communicator powered by automatic scanning for people with motor and speech disabilities." },
      { year: "2026", badge: "INCLUXIA Stroke", desc: "Development of INCLUXIA Stroke: early recognition of stroke warning signs, the second line within the INCLUXIA platform." },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Let's connect for partnerships, institutions, pilots, or inquiries.",
    form_title: "Send us a message",
    form_subtitle:
      "Interested in AsisTEA, INCLUXIA, an institutional partnership, or learning about our work? Write to us and we'll respond shortly.",
    name: "Full name",
    name_placeholder: "Your name",
    email_label: "Email address",
    email_placeholder: "you@email.com",
    institution: "Institution / Organization",
    institution_placeholder: "Institution name (optional)",
    subject: "Subject",
    subject_placeholder: "Select a subject",
    subjects: [
      "Learn about AsisTEA",
      "Learn about INCLUXIA",
      "Institutional partnership",
      "Pilot or adoption",
      "Press or recognition",
      "General inquiry",
      "Other",
    ],
    message: "Message",
    message_placeholder: "Briefly describe the reason for your contact...",
    submit: "Send message",
    sending: "Sending...",
    success: "Message sent successfully. We'll be in touch soon.",
    error: "There was an error sending. Try again or email us at contacto@xcail.com",
    info_title: "Corporate information",
    email_info: "Corporate email",
    address_info: "Registered address",
    address: "Nicaragua 4817, CABA, Argentina",
    legal_name: "XCAIL Technologies SAS",
    cuit_label: "Tax ID",
    cuit: "30-71921679-6",
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "Everything you need to know about XCAIL Technologies, AsisTEA and INCLUXIA.",
    still_have_questions: "Still have questions?",
    write_us: "Write to us at contacto@xcail.com",
    items: [
      {
        question: "What is XCAIL Technologies?",
        answer:
          "XCAIL Technologies is an Argentine technology-based startup specialized in artificial intelligence applied to accessibility, neurodevelopment, and inclusion. We build our own software products: AsisTEA and INCLUXIA.",
      },
      {
        question: "What's the difference between AsisTEA and INCLUXIA?",
        answer:
          "AsisTEA focuses on neurodevelopment — supporting families, caregivers, and professionals working with neurodivergent people. INCLUXIA focuses on motor, speech, and health accessibility, and includes two lines: INCLUXIA Connect (an AAC communicator) and INCLUXIA Stroke (early stroke sign recognition).",
      },
      {
        question: "Which countries are XCAIL's products available in?",
        answer:
          "AsisTEA and INCLUXIA are available in Spanish-speaking countries, and we keep expanding their reach.",
      },
      {
        question: "Who founded XCAIL Technologies?",
        answer:
          "XCAIL Technologies was founded by Carlos Ezequiel Leiva (Founder & CEO), in Buenos Aires, Argentina, in 2025.",
      },
      {
        question: "Does XCAIL have any recognitions?",
        answer:
          "Yes. XCAIL was a finalist in two categories of the 2025 Sadosky Awards (CESSI) and received a Special Mention in Diversity, Equity and Inclusion from BritCham Argentina 2025, both for AsisTEA.",
      },
      {
        question: "How can I contact XCAIL for an institutional partnership?",
        answer:
          "Write to us at contacto@xcail.com, or book a call from the Contact section of this site.",
      },
      {
        question: "Will XCAIL launch more products?",
        answer:
          "Yes. Beyond AsisTEA and INCLUXIA, we keep expanding the same technology into new areas where people's autonomy still depends on solutions that don't yet exist.",
      },
    ],
  },
  footer: {
    tagline: "Technology with Purpose",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    aviso_legal: "Legal Notice",
    linkedin: "LinkedIn",
    rights: "All rights reserved",
    products_title: "Products",
    faq: "FAQ",
    company_title: "Company",
    legal_title: "Legal",
    about_link: "About us",
    location: "Buenos Aires, Argentina",
  },
};

const translations = { es, en };

export type Translations = typeof es;

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  tr: Translations;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es");
  return (
    <I18nContext.Provider value={{ lang, setLang, tr: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
