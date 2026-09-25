import { property, southLocation } from "../property";
import type { Dict } from "./en";

// Spanish copy (neutral Latin American Spanish, formal "usted"). Same shape as en.ts.
export const es: Dict = {
  htmlLang: "es",
  ogLocale: "es_US",
  // Toggle shown on Spanish pages points to English.
  toggle: { label: "English", aria: "View this site in English", hrefLang: "en" },
  skip: "Saltar al contenido",

  meta: {
    defaultTitle: "Estudios que aceptan mascotas en Clarkston, MI | Olde Mill Inn North",
    titleTemplate: "%s | Olde Mill Inn North",
    description:
      "Estudios que aceptan mascotas en The Olde Mill Inn of Clarkston North, 6853 Dixie Hwy, a 1 milla de The Village y a 5 millas de Pine Knob. Reserve por noche en línea; llame para estadías prolongadas.",
    ogDescription: "Estudios que aceptan mascotas a 1 milla de The Village y a 5 millas de Pine Knob. Reserve en línea o llame para estadías prolongadas.",
    twitterDescription: "Su hogar lejos de casa en Clarkston, Michigan.",
    rooms: {
      title: "Estudios",
      description:
        "Cuatro estudios que aceptan mascotas en The Olde Mill Inn of Clarkston North, cada uno con Wi-Fi, cocineta con microondas y cafetera, y estacionamiento gratuito. Reserve en línea.",
    },
    gallery: {
      title: "Galería de fotos",
      description: "Fotos de los estudios, el vestíbulo y los exteriores de The Olde Mill Inn of Clarkston North.",
    },
    extendedStay: {
      title: "Estadía prolongada en Clarkston, MI",
      description:
        "Estadías prolongadas en The Olde Mill Inn of Clarkston North: estudios que aceptan mascotas con Wi-Fi, cocineta y estacionamiento gratuito. Llame para consultar precios.",
    },
    thingsToDo: {
      title: "Qué hacer cerca de Clarkston, MI",
      description:
        "El pueblo de Clarkston a 1 milla, Pine Knob a 5 millas, Deer Lake Beach, Independence Oaks y más cerca de Olde Mill Inn North.",
    },
    contact: {
      title: "Contacto y cómo llegar",
      description:
        "Comuníquese con The Olde Mill Inn of Clarkston North, 6853 Dixie Hwy, para reservas, precios de estadías prolongadas e indicaciones.",
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
      { label: "Estudios", href: "/rooms" },
      { label: "Estadía prolongada", href: "/extended-stay" },
      { label: "Galería", href: "/gallery" },
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
    bookOnline: "Reservar en línea",
    viewStudios: "Ver estudios",
    callToBook: "Llame para reservar",
    call: "Llamar",
    callNumber: `Llame al ${property.phone.display}`,
    sendInquiry: "Enviar una consulta",
    getDirections: "Cómo llegar",
    callForPricing: "Llame para precios",
    directions: "Cómo llegar",
  },

  mobileBar: { aria: "Acciones rápidas", call: "Llamar", directions: "Ubicación", book: "Reservar" },

  footer: {
    tagline: "Estudios independientes que aceptan mascotas en Dixie Highway, en Clarkston, Michigan.",
    explore: "Explorar",
    contact: "Contacto",
    plan: "Planifique",
    southLink: `Frente al lago: ${southLocation.short}`,
    credit: "Sitio web desarrollado por nuestro socio tecnológico,",
  },

  amenities: {
    ac: "Aire acondicionado central",
    heating: "Calefacción central",
    wifi: "Wi-Fi",
    smartTv: "Smart TV",
    coffeeMaker: "Cafetera",
    microwave: "Microondas",
    refrigerator: "Refrigerador",
    toaster: "Tostador",
    kitchenette: "Cocineta (sin estufa ni horno)",
    cookingBasics: "Utensilios básicos de cocina",
    dishware: "Vajilla y cubiertos",
    shower: "Ducha",
    toiletries: "Artículos de aseo de cortesía",
    shampoo: "Champú",
    hairDryer: "Secadora de cabello",
    towels: "Toallas incluidas",
    linens: "Ropa de cama incluida",
    hangers: "Ganchos para ropa",
    iron: "Plancha y tabla de planchar",
    trashBags: "Bolsas de basura y toallas de papel",
    books: "Libros",
    patio: "Patio",
    privateEntrance: "Entrada privada",
    parking: "Estacionamiento gratuito en el lugar",
    stepFree: "Acceso sin escalones",
    pets: "Se aceptan mascotas (con cargo)",
    nonSmoking: "No fumar",
    children: "Apto para niños",
    elderly: "Apto para personas mayores",
    smokeDetector: "Detector de humo",
    coDetector: "Detector de monóxido de carbono",
    fireExtinguisher: "Extintor",
    firstAid: "Botiquín de primeros auxilios",
  },
  amenityGroups: { room: "En el estudio", property: "Propiedad y seguridad" },

  rooms: {
    "studio-1": {
      name: "Estudio clásico",
      tagline: "Sofá, área de estar y cocineta",
      description:
        "Un estudio luminoso con una cama cómoda, sofá y mesa de centro, Smart TV y una cocineta con fregadero, microondas y cafetera. Afuera lo espera el porche techado de la entrada.",
    },
    "studio-3": {
      name: "Estudio rústico",
      tagline: "Paredes de madera y cama de troncos",
      description:
        "Paredes revestidas de madera, una cama de troncos, ventilador de techo y un sillón acogedor le dan a este estudio un ambiente cálido, como de cabaña, con Smart TV para sus noches de película. La cocineta tiene microondas, cafetera y tostador.",
    },
    "studio-4": {
      name: "Estudio con escritorio",
      tagline: "Escritorio, refrigerador y patio privado",
      description:
        "Un estudio limpio y moderno con escritorio y silla de oficina, Smart TV de pared, refrigerador, microondas y utensilios básicos de cocina, además de su propio patio.",
    },
    "studio-8": {
      name: "Estudio con dos camas",
      tagline: "Dos camas y Smart TV",
      description:
        "Dos camas, Smart TV y una cocineta con microondas, tostador y una cafetera Keurig con café de cortesía: ideal para dos viajeros que prefieren no compartir cama.",
    },
  },

  roomFacts: {
    unit: (n: number) => `Unidad ${n}`,
    sleeps: (n: number) => `Hasta ${n} huéspedes`,
    beds: (n: number) => (n === 1 ? "1 cama" : `${n} camas`),
    baths: (n: number) => (n === 1 ? "1 baño" : `${n} baños`),
    sqft: (n: number) => `${n} pies²`,
    miles: (n: number) => `≈${n} mi`,
    photoAlt: (name: string) => `${name} en The Olde Mill Inn of Clarkston North`,
  },

  home: {
    eyebrow: "Estudios que aceptan mascotas en Clarkston, Michigan",
    heroTitle: "Su hogar lejos de casa en Clarkston",
    heroText:
      "Estudios cómodos a 1 milla de The Village y a 5 millas de Pine Knob. Reserve su estadía por noche en línea o llámenos para estadías prolongadas.",
    heroAlt: "Estudio rústico con paredes de madera y cama de troncos en The Olde Mill Inn of Clarkston North",
    glanceAria: "De un vistazo",
    trust: [
      { icon: "event_available", label: "Reserve en línea" },
      { icon: "pets", label: "Se aceptan mascotas" },
      { icon: "local_parking", label: "Estacionamiento gratuito" },
      { icon: "accessible", label: "Acceso sin escalones" },
      { icon: "storefront", label: "1 mi de The Village" },
      { icon: "music_note", label: "5 mi de Pine Knob" },
    ],
    introTitle: "Todo lo que necesita, cerca de todo",
    introText:
      "The Olde Mill Inn of Clarkston North es un hotel independiente en Dixie Highway con cuatro estudios de entrada privada. Cada uno tiene Wi-Fi, Smart TV, aire acondicionado y calefacción, cocineta con microondas y cafetera, y estacionamiento gratuito justo frente a su puerta, ya sea que venga a un concierto en Pine Knob, a pasar un fin de semana en The Village o por una estadía más larga.",
    studiosTitle: "Nuestros estudios",
    studiosText: "Cuatro estudios para hasta dos huéspedes. Elija uno y resérvelo en línea.",
    amenitiesTitle: "Incluido en cada estadía",
    extTitle: "¿Planea una estadía prolongada?",
    extText: "Las tarifas dependen de la duración de su estadía. Llámenos y encontraremos la mejor opción para usted.",
    howItWorks: "Cómo funciona",
    callToBookYourStay: "Llame para estadías prolongadas",
    reviewsTitle: "Lo que dicen nuestros huéspedes",
    reviewsNote: "Reseñas publicadas en su idioma original (inglés).",
    locationsTitle: "Dos ubicaciones en Clarkston",
    youAreHere: "Usted está aquí",
    northName: "Clarkston North",
    northText: "Estudios que aceptan mascotas con reservas en línea. Estadías prolongadas por teléfono.",
    lakefront: "Frente al lago",
    southText: "Habitaciones junto al lago Van Norman con reservas en línea.",
    visitSouth: "Visitar Clarkston South",
    exploreTitle: "Explore la zona",
    seeThingsToDo: "Ver qué hacer",
    finalTitle: "Lo esperamos cuando esté listo",
  },

  roomsPage: {
    eyebrow: "Estudios",
    title: "Elija su estudio",
    subtitle: "Cuatro estudios de entrada privada para hasta dos huéspedes. Reserve por noche en línea; llámenos para estadías prolongadas.",
    heroAlt: "Estudio con dos camas y una pared de color naranja",
    viewStudio: "Ver estudio",
    goodToKnowTitle: "Información útil",
    goodToKnow: [
      { icon: "login", label: "Llegada", value: `Después de las ${property.checkIn} en la recepción` },
      { icon: "logout", label: "Salida", value: `Antes de las ${property.checkOut}; devuelva su llave en la recepción` },
      { icon: "pets", label: "Mascotas", value: `Bienvenidas, ${property.petFee} por estadía` },
      { icon: "local_parking", label: "Estacionamiento", value: `Gratuito, ${property.parkingSpaces} vehículos frente a su estudio` },
      { icon: "smoke_free", label: "Fumar", value: "Prohibido fumar; no se permiten eventos ni fiestas" },
      { icon: "local_laundry_service", label: "Lavandería", value: "No hay lavandería en el lugar" },
    ],
  },

  roomPage: {
    bookTitle: "Reserve este estudio",
    bookText: "Consulte disponibilidad y tarifas en tiempo real y reserve de forma segura en línea a través de Vacasa, nuestro socio de reservas.",
    extendedNote: "¿Se queda más tiempo? Llámenos para precios de estadías prolongadas.",
    photosTitle: "Fotos",
    otherStudios: "Otros estudios",
    policiesLink: "Llegada, mascotas y reglas de la casa",
  },

  gallery: {
    eyebrow: "Galería de fotos",
    title: "Conozca el hotel",
    heroAlt: "Fachada de The Olde Mill Inn of Clarkston North",
    categories: {
      exterior: "Exterior",
      lobby: "Vestíbulo",
    },
    ui: {
      all: "Todas",
      filterAria: "Filtrar fotos",
      viewLarger: "ver en grande",
      viewerAria: "Visor de fotos",
      close: "Cerrar visor de fotos",
      prev: "Foto anterior",
      next: "Foto siguiente",
    },
    exteriorAlt: "Exterior de The Olde Mill Inn of Clarkston North",
    lobbyAlt: "Vestíbulo y recepción de The Olde Mill Inn of Clarkston North",
  },

  extendedStay: {
    eyebrow: "Estadía prolongada",
    title: "Quédese un tiempo",
    subtitle: "Estudios cómodos y atención personalizada para huéspedes que necesitan más de una o dos noches.",
    heroAlt: "Porche de la entrada con el letrero de Olde Mill Inn",
    whoTitle: "Para quién es",
    whoFor: [
      { icon: "work", title: "Asignaciones de trabajo", text: "Contratistas, cuadrillas y profesionales en un proyecto local." },
      { icon: "local_shipping", title: "Mudanzas", text: "Una base cómoda mientras encuentra su próximo hogar en la zona." },
      { icon: "home", title: "Entre viviendas", text: "Un lugar estable durante una mudanza, una remodelación o un cambio de vida." },
    ],
    includedTitle: "Qué incluye",
    howTitle: "Cómo reservar una estadía prolongada",
    steps: [
      { title: "Llame o envíe una consulta", text: `Comuníquese al ${property.phone.display} o a través del formulario de contacto.` },
      { title: "Reciba su tarifa", text: "El precio depende de la duración de su estadía. Le daremos una cotización." },
      { title: "Instálese", text: "Recoja su llave en la recepción y siéntase como en casa." },
    ],
    faqTitle: "Preguntas frecuentes",
  },

  faqs: [
    {
      q: "¿Cómo reservo una estadía por noche?",
      a: "Elija un estudio en nuestra página de Estudios y resérvelo en línea a través de Vacasa, nuestro socio de reservas. Las estadías son a partir de una noche.",
    },
    {
      q: "¿Cómo funcionan las estadías prolongadas?",
      a: `Las estadías prolongadas se reservan por teléfono. Llámenos al ${property.phone.display} para conocer los precios; las tarifas dependen de la duración de su estadía.`,
    },
    {
      q: "¿A qué hora son la llegada y la salida?",
      a: `La llegada es después de las ${property.checkIn} en la recepción, donde recibirá su llave. La salida es antes de las ${property.checkOut}; por favor devuelva su llave en la recepción.`,
    },
    {
      q: "¿Se aceptan mascotas?",
      a: `Sí. Las mascotas son bienvenidas con un cargo de ${property.petFee} por estadía.`,
    },
    {
      q: "¿Hay cocina?",
      a: "Cada estudio tiene una cocineta con microondas y cafetera. No hay estufa ni horno. Algunos estudios también tienen refrigerador, tostador o utensilios básicos de cocina; consulte los detalles de cada estudio.",
    },
    {
      q: "¿Hay lavandería en el lugar?",
      a: "No, esta ubicación no cuenta con lavandería.",
    },
    {
      q: "¿Dónde me estaciono?",
      a: `El estacionamiento es gratuito, con espacio para ${property.parkingSpaces} vehículos frente a su estudio en el estacionamiento común.`,
    },
    {
      q: "¿La propiedad es accesible?",
      a: "Los estudios están en una sola planta y tienen entrada sin escalones.",
    },
    {
      q: "¿Se permite fumar?",
      a: "No. Todos los estudios son para no fumadores, y no se permiten eventos, fiestas ni reuniones grandes.",
    },
  ],

  thingsToDo: {
    eyebrow: "Explore la zona",
    title: "Qué hacer",
    subtitle: "The Village está a una milla y Pine Knob a unas cinco. Las distancias son aproximadas.",
    heroAlt: "The Olde Mill Inn of Clarkston North desde el estacionamiento",
    sections: {
      local: "The Village y lo esencial",
      concerts: "Conciertos y entretenimiento",
      skiing: "Esquí y actividades de invierno",
      outdoors: "Parques, playas y golf",
      shopping: "Compras",
      travel: "Cómo llegar",
    },
  },

  attractions: [
    {
      name: "The Village of Clarkston",
      category: "local",
      approxMiles: 1,
      description: "Un centro histórico para recorrer a pie, con restaurantes muy bien valorados, terrazas y tiendas.",
    },
    {
      name: "Neiman's Family Market",
      category: "local",
      approxMiles: 0.3,
      description: "Un supermercado local muy cerca, práctico para estadías largas.",
    },
    {
      name: "Pine Knob Music Theatre",
      category: "concerts",
      approxMiles: 5,
      address: "33 Bob Seger Drive, Clarkston, MI 48348",
      description: "El emblemático anfiteatro al aire libre de Michigan. Calcule tiempo extra por el tráfico en noches de concierto.",
    },
    {
      name: "Pine Knob Ski and Snowboard Resort",
      category: "skiing",
      approxMiles: 5,
      description: "Esquí, snowboard y tubing.",
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
      name: "Deer Lake Beach",
      category: "outdoors",
      approxMiles: 0.8,
      description: "Una playa de barrio en Deer Lake, a menos de una milla.",
    },
    {
      name: "Shepherd's Hollow Golf Club",
      category: "outdoors",
      approxMiles: 3,
      description: "Un club de golf a pocos minutos en auto.",
    },
    {
      name: "Independence Oaks County Park",
      category: "outdoors",
      approxMiles: 6,
      description: "Un amplio parque del condado con senderos y un lago para caminar y hacer pícnics.",
    },
    {
      name: "Great Lakes Crossing Outlets",
      category: "shopping",
      approxMiles: 9,
      address: "4000 Baldwin Road, Auburn Hills, MI 48326",
      description: "El centro comercial outlet cubierto más grande de Michigan, con tiendas, restaurantes y entretenimiento.",
    },
    {
      name: "Bishop International Airport",
      category: "travel",
      approxMiles: 25,
      description: "El aeropuerto comercial más cercano, en Flint.",
    },
  ],

  contact: {
    eyebrow: "Estamos para ayudarle",
    title: "Contacte a Olde Mill Inn North",
    heroAlt: "Fachada de The Olde Mill Inn of Clarkston North con el vestíbulo al centro",
    reachUs: "Comuníquese con nosotros",
    directionsText: "Estamos en Dixie Highway, en Clarkston, a una milla de The Village. Registre su llegada en la recepción, al centro del edificio. Toque “Cómo llegar” para obtener indicaciones paso a paso.",
    southPrefix: "¿Busca una estadía frente al lago? Visite nuestro hotel hermano,",
    formTitle: "Enviar una consulta",
  },

  form: {
    intro:
      "¿Planea una estadía prolongada o tiene alguna pregunta? Cuéntenos qué necesita y nos comunicaremos con usted. Enviar este formulario no confirma una reservación.",
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
        ps: [
          "Las reservas en línea se completan en Vacasa, nuestro socio de reservas; los datos que ingrese allí se rigen por sus términos y prácticas de privacidad. Los enlaces de mapas e indicaciones abren Google Maps. Los enlaces a nuestro hotel hermano abren su propio sitio web, que tiene sus propias prácticas de privacidad.",
        ],
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
    propertyText: "Los estudios están en una sola planta y tienen entrada sin escalones. Las reservas en línea se completan en el sistema de nuestro socio de reservas, que se administra por separado. Si tiene preguntas sobre las características de accesibilidad de los estudios, comuníquese directamente con nosotros para ayudarle.",
    tellTitle: "Háganos saber",
    tellPrefix: "Si tiene alguna dificultad para usar este sitio, escríbanos a",
    or: "o llame al",
    tellSuffix: "y haremos lo posible por ayudarle y corregir el problema.",
  },
};
