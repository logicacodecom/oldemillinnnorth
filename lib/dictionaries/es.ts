import { property, southLocation } from "../property";
import type { Dict } from "./en";

// Spanish copy (neutral Latin American Spanish). Same shape as en.ts.
export const es: Dict = {
  htmlLang: "es",
  ogLocale: "es_US",
  // Toggle shown on Spanish pages points to English.
  toggle: { label: "English", aria: "View this site in English", hrefLang: "en" },
  skip: "Saltar al contenido",

  meta: {
    defaultTitle: "Hotel de estadía prolongada en Clarkston, MI | Olde Mill Inn North",
    titleTemplate: "%s | Olde Mill Inn North",
    description:
      "Estadías prolongadas en The Olde Mill Inn of Clarkston North, 6853 Dixie Hwy. Wi-Fi, Smart TV, cocina básica y lavandería en el lugar. Llame para reservar.",
    ogDescription: "Estadías prolongadas cómodas en Dixie Highway, en Clarkston, Michigan. Llame para reservar.",
    twitterDescription: "Su hogar lejos de casa en Clarkston, Michigan.",
    extendedStay: {
      title: "Estadía prolongada en Clarkston, MI",
      description:
        "Alojamiento para estadías prolongadas en The Olde Mill Inn of Clarkston North. Wi-Fi, Smart TV, refrigerador, microondas y lavandería en el lugar. Llame para consultar precios.",
    },
    room: {
      title: "La habitación",
      description:
        "Habitaciones amplias para estadías prolongadas en The Olde Mill Inn of Clarkston North con Wi-Fi, Smart TV, refrigerador, microondas, cafetera y aire acondicionado.",
    },
    thingsToDo: {
      title: "Qué hacer cerca de Clarkston, MI",
      description:
        "Conciertos en Pine Knob, esquí, compras en Great Lakes Crossing y el centro de Clarkston, todo a poca distancia en auto de Olde Mill Inn North.",
    },
    contact: {
      title: "Contacto y cómo llegar",
      description:
        "Comuníquese con The Olde Mill Inn of Clarkston North, 6853 Dixie Hwy, para precios, disponibilidad e indicaciones para estadías prolongadas.",
    },
    privacy: {
      title: "Privacidad",
      description: "Cómo Olde Mill Inn of Clarkston North maneja la información recopilada a través de este sitio web.",
    },
    accessibility: {
      title: "Accesibilidad",
      description: "El compromiso de Olde Mill Inn of Clarkston North con un sitio web accesible.",
    },
  },

  nav: {
    main: [
      { label: "Estadía prolongada", href: "/extended-stay" },
      { label: "La habitación", href: "/room" },
      { label: "Qué hacer", href: "/things-to-do" },
      { label: "Contacto", href: "/contact" },
    ],
    legal: [
      { label: "Privacidad", href: "/privacy" },
      { label: "Accesibilidad", href: "/accessibility" },
    ],
    primaryAria: "Principal",
    mobileAria: "Móvil",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    homeAria: `${property.name} — inicio`,
  },

  common: {
    callToBook: "Llame para reservar",
    call: "Llamar",
    callNumber: `Llame al ${property.phone.display}`,
    sendInquiry: "Enviar una consulta",
    getDirections: "Cómo llegar",
    callForPricing: "Llame para precios",
    directions: "Cómo llegar",
    roomAlt: "Habitación de The Olde Mill Inn of Clarkston North con cama, sofá y mesa de centro",
  },

  mobileBar: { aria: "Acciones rápidas", call: "Llamar", directions: "Ubicación", inquire: "Consultar" },

  footer: {
    tagline: "Alojamiento independiente y familiar para estadías prolongadas en Dixie Highway, en Clarkston, Michigan.",
    explore: "Explorar",
    contact: "Contacto",
    plan: "Planifique",
    nightly: `Estadías por noche: ${southLocation.short}`,
    credit: "Sitio web desarrollado por nuestro socio tecnológico,",
  },

  amenities: [
    { icon: "wifi", label: "Internet inalámbrico (Wi-Fi)" },
    { icon: "lan", label: "Internet por cable (LAN)" },
    { icon: "tv", label: "Smart TV" },
    { icon: "live_tv", label: "Televisión por cable" },
    { icon: "kitchen", label: "Refrigerador" },
    { icon: "microwave", label: "Microondas" },
    { icon: "coffee_maker", label: "Cafetera" },
    { icon: "ac_unit", label: "Aire acondicionado" },
    { icon: "local_laundry_service", label: "Lavandería en el lugar" },
  ],

  home: {
    eyebrow: "Estadías prolongadas en Clarkston, Michigan",
    heroTitle: "Su hogar lejos de casa en Clarkston",
    heroText:
      "Habitaciones cómodas y atención personalizada para huéspedes que necesitan quedarse por un tiempo, con Wi-Fi, Smart TV, cocina básica y lavandería en el lugar.",
    glanceAria: "De un vistazo",
    trust: [
      { icon: "calendar_month", label: "Estadías prolongadas" },
      { icon: "wifi", label: "Wi-Fi e internet por cable" },
      { icon: "tv", label: "Smart TV y cable" },
      { icon: "kitchen", label: "Refrigerador y microondas" },
      { icon: "local_laundry_service", label: "Lavandería en el lugar" },
      { icon: "call", label: "Llame para reservar" },
    ],
    introTitle: "Todo lo que necesita para una estadía larga",
    introText:
      "The Olde Mill Inn of Clarkston North es un hotel independiente en Dixie Highway, cerca del pueblo de Clarkston. Ya sea que esté aquí por trabajo, se esté mudando o esté entre viviendas, le ofrecemos alojamiento cómodo, tarifas competitivas y un equipo que hará todo lo posible para que su estadía sea fácil.",
    roomEyebrow: "La habitación",
    roomTitle: "Espacio para instalarse",
    roomText:
      "Habitaciones amplias con una cama cómoda, un área de estar y las comodidades prácticas que hacen que una estadía larga se sienta como en casa.",
    seeRoom: "Ver la habitación",
    amenitiesTitle: "Comodidades",
    extTitle: "¿Planea una estadía prolongada?",
    extText: "Las tarifas dependen de la duración de su estadía. Llámenos y encontraremos la mejor opción para usted.",
    howItWorks: "Cómo funciona",
    callToBookYourStay: "Llame para reservar su estadía",
    reviewsTitle: "Lo que dicen nuestros huéspedes",
    reviewsNote: "Reseñas publicadas en su idioma original (inglés).",
    locationsTitle: "Dos ubicaciones en Clarkston",
    youAreHere: "Usted está aquí",
    northName: "Clarkston North",
    northText: "Estadías prolongadas. Llame para reservar.",
    lakefront: "Frente al lago",
    southText: "Estadías por noche junto al lago Van Norman, con reservas en línea.",
    visitSouth: "Visitar Clarkston South",
    exploreTitle: "Explore la zona",
    seeThingsToDo: "Ver qué hacer",
    finalTitle: "Lo esperamos cuando esté listo",
  },

  extendedStay: {
    eyebrow: "Estadía prolongada",
    title: "Quédese un tiempo",
    subtitle: "Alojamiento cómodo y atención personalizada para huéspedes que necesitan más de una o dos noches.",
    whoTitle: "Para quién es",
    whoFor: [
      { icon: "work", title: "Asignaciones de trabajo", text: "Contratistas, cuadrillas y profesionales en un proyecto local." },
      { icon: "local_shipping", title: "Mudanzas", text: "Una base cómoda mientras encuentra su próximo hogar en la zona." },
      { icon: "home", title: "Entre viviendas", text: "Un lugar estable durante una mudanza, una remodelación o un cambio de vida." },
    ],
    includedTitle: "Qué incluye",
    howTitle: "Cómo reservar",
    steps: [
      { title: "Llame o envíe una consulta", text: `Comuníquese al ${property.phone.display} o a través del formulario de contacto.` },
      { title: "Reciba su tarifa", text: "El precio depende de la duración de su estadía. Le daremos una cotización." },
      { title: "Instálese", text: "Acomódese y siéntase como en casa." },
    ],
    faqTitle: "Preguntas frecuentes",
  },

  faqs: [
    {
      q: "¿Cuánto cuesta una estadía prolongada?",
      a: `Las tarifas dependen de la duración de su estadía. Llámenos al ${property.phone.display} para conocer los precios actuales.`,
    },
    {
      q: "¿Cómo reservo?",
      a: `Las estadías prolongadas se reservan directamente con nosotros por teléfono al ${property.phone.display}. También puede enviar una consulta a través de nuestro formulario de contacto y nos comunicaremos con usted. Esta ubicación no tiene reservas en línea.`,
    },
    {
      q: "¿Qué incluye la habitación?",
      a: "Las habitaciones incluyen Wi-Fi e internet por cable, Smart TV con cable, refrigerador, microondas, cafetera y aire acondicionado.",
    },
    {
      q: "¿Hay lavandería en el lugar?",
      a: "Sí. Los huéspedes tienen a su disposición una lavandería en el lugar.",
    },
    {
      q: "Solo necesito una o dos noches. ¿Puedo quedarme aquí?",
      a: `Para estadías por noche, reserve en nuestro hotel hermano, ${southLocation.name}, en ${southLocation.address}. Cuenta con reservas en línea y está frente al lago.`,
    },
  ],

  room: {
    badge: "Estadía prolongada",
    title: "La habitación",
    text: "Nuestras habitaciones son amplias y cómodas, con un área de estar y todo lo que necesita para el día a día durante una estadía larga.",
    featuresTitle: "Características de la habitación",
    railTitle: "¿Listo para hospedarse?",
    railText: "Llámenos para consultar precios y disponibilidad, o envíe una consulta y nos comunicaremos con usted.",
  },

  thingsToDo: {
    eyebrow: "Explore la zona",
    title: "Qué hacer",
    subtitle: "Desde conciertos y esquí hasta compras y restaurantes locales, lo mejor de Clarkston está a poca distancia en auto.",
    sections: {
      concerts: "Conciertos y entretenimiento",
      skiing: "Esquí y actividades de invierno",
      shopping: "Compras",
      local: "Restaurantes locales y Clarkston",
    },
  },

  attractions: [
    {
      name: "Pine Knob Music Theatre",
      category: "concerts",
      address: "33 Bob Seger Drive, Clarkston, MI 48348",
      description: "El emblemático anfiteatro al aire libre de Michigan. A poca distancia en auto en noches de concierto.",
    },
    {
      name: "Pine Knob Ski and Snowboard Resort",
      category: "skiing",
      description: "Esquí, snowboard y tubing a solo minutos del hotel.",
    },
    {
      name: "Alpine Valley Ski Resort",
      category: "skiing",
      description: "Otra área de esquí cercana con pistas para distintos niveles.",
    },
    {
      name: "Mt. Holly Ski and Snowboard Resort",
      category: "skiing",
      description: "Pistas familiares a poca distancia hacia el norte.",
    },
    {
      name: "Great Lakes Crossing Outlets",
      category: "shopping",
      address: "4000 Baldwin Road, Auburn Hills, MI 48326",
      description: "El centro comercial outlet cubierto más grande de Michigan, con tiendas, restaurantes y entretenimiento.",
    },
    {
      name: "Centro de Clarkston",
      category: "local",
      description: "Un centro histórico para recorrer a pie, con restaurantes, tiendas y eventos comunitarios.",
    },
  ],

  contact: {
    eyebrow: "Estamos para ayudarle",
    title: "Contacte a Olde Mill Inn North",
    reachUs: "Comuníquese con nosotros",
    directionsText: "Estamos en Dixie Highway, en Clarkston. Toque “Cómo llegar” para obtener indicaciones paso a paso.",
    southPrefix: "¿Solo necesita una o dos noches? Reserve en línea en nuestra ubicación frente al lago,",
    formTitle: "Enviar una consulta",
  },

  form: {
    intro:
      "Cuéntenos qué tipo de estadía necesita y le responderemos con disponibilidad y precios. Enviar este formulario no confirma una reservación.",
    name: "Nombre",
    email: "Correo electrónico",
    phone: "Teléfono (opcional)",
    moveIn: "Fecha de llegada (opcional)",
    moveOut: "Fecha de salida (opcional)",
    message: "Mensaje",
    consent: "Al enviar, acepta que usemos los datos anteriores para responder a su consulta. No vendemos su información.",
    errorPrefix: "Lo sentimos, no pudimos enviar su mensaje en este momento. Por favor llame al",
    sending: "Enviando…",
    submit: "Enviar mensaje",
    successTitle: "Gracias, su mensaje fue enviado.",
    successPrefix: "Le responderemos lo antes posible. Para algo urgente, llame al",
  },

  privacy: {
    title: "Privacidad",
    note: "Esta declaración describe cómo este sitio web maneja la información personal. Se ofrece por transparencia y debe ser revisada y aprobada por la propiedad antes de su publicación.",
    blocks: [
      {
        h: "Información que recopilamos",
        ps: [
          "Si usa nuestro formulario de contacto, recopilamos los datos que nos proporciona, como su nombre, correo electrónico, teléfono (opcional), fechas de llegada y salida (opcionales) y su mensaje, para poder responder a su consulta.",
          "Como la mayoría de los sitios web, podemos recopilar información técnica y de uso limitada (como las páginas visitadas) para entender cómo se usa el sitio y mejorarlo. Esto solo está activo si se ha configurado un servicio de analítica.",
        ],
      },
      {
        h: "Cómo usamos la información",
        ps: ["Usamos la información que nos envía para responder a sus preguntas y ayudarle a organizar su estadía. No vendemos su información personal."],
      },
      {
        h: "Servicios de terceros",
        ps: ["Los enlaces de mapas e indicaciones abren Google Maps. Los enlaces a nuestro hotel hermano abren su propio sitio web, que tiene sus propias prácticas de privacidad."],
      },
    ],
    contactTitle: "Contacto",
    contactPrefix: "¿Preguntas sobre esta declaración? Escríbanos a",
    or: "o llame al",
  },

  accessibility: {
    title: "Accesibilidad",
    intro: "Queremos que este sitio web pueda ser usado por la mayor cantidad de personas posible y buscamos cumplir con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.2, nivel AA.",
    doneTitle: "Lo que hemos hecho",
    done: [
      "Estructura semántica con encabezados y regiones claras",
      "Navegación con teclado y estilos de foco visibles",
      "Texto alternativo descriptivo para las imágenes",
      "Contraste de color verificado con la paleta del diseño",
      "Compatibilidad con la preferencia de movimiento reducido",
      "Etiquetas y mensajes de error claros en el formulario de contacto",
      "Todo el sitio está disponible en inglés y en español",
    ],
    propertyTitle: "La propiedad",
    propertyText: "Si tiene preguntas sobre las características de accesibilidad de las habitaciones o de la propiedad, comuníquese directamente con nosotros para ayudarle.",
    tellTitle: "Háganos saber",
    tellPrefix: "Si tiene alguna dificultad para usar este sitio, escríbanos a",
    or: "o llame al",
    tellSuffix: "y haremos lo posible por ayudarle y corregir el problema.",
  },
};
