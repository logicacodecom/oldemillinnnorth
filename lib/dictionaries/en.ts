import { property, southLocation } from "../property";
import type { AmenityKey, Room } from "../rooms";

// All English copy. es.ts must match this shape (typed as Dict).
// Facts come from the owner's Evolve listings sheet (source of truth).
export const en = {
  htmlLang: "en",
  ogLocale: "en_US",
  // Toggle shown on English pages points to Spanish.
  toggle: { label: "Español", aria: "Ver este sitio en español", hrefLang: "es" },
  skip: "Skip to content",

  meta: {
    defaultTitle: "Pet-Friendly Studios in Clarkston, MI | Olde Mill Inn North",
    titleTemplate: "%s | Olde Mill Inn North",
    description:
      "Pet-friendly studios at The Olde Mill Inn of Clarkston North, 6853 Dixie Hwy — 1 mile from The Village and 5 miles from Pine Knob. Book nightly stays online; call for extended stays.",
    ogDescription: "Pet-friendly studios 1 mile from The Village and 5 miles from Pine Knob. Book online or call for extended stays.",
    twitterDescription: "Your home away from home in Clarkston, Michigan.",
    rooms: {
      title: "Studios",
      description:
        "Four pet-friendly studios at The Olde Mill Inn of Clarkston North, each with Wi-Fi, a kitchenette with microwave and coffee maker, and free parking. Book online.",
    },
    gallery: {
      title: "Photo Gallery",
      description: "Photos of the studios, lobby and grounds at The Olde Mill Inn of Clarkston North.",
    },
    extendedStay: {
      title: "Extended Stay in Clarkston, MI",
      description:
        "Extended stays at The Olde Mill Inn of Clarkston North: pet-friendly studios with Wi-Fi, kitchenette and free parking. Call for pricing.",
    },
    thingsToDo: {
      title: "Things to Do Near Clarkston, MI",
      description:
        "The Village of Clarkston 1 mile away, Pine Knob 5 miles, Deer Lake Beach, Independence Oaks and more near Olde Mill Inn North.",
    },
    contact: {
      title: "Contact & Directions",
      description:
        "Contact The Olde Mill Inn of Clarkston North at 6853 Dixie Hwy for bookings, extended-stay pricing and directions.",
    },
    privacy: {
      title: "Privacy",
      description: "How Olde Mill Inn of Clarkston North handles information collected through this website.",
    },
    accessibility: {
      title: "Accessibility",
      description: "Olde Mill Inn of Clarkston North's commitment to an accessible website.",
    },
  },

  nav: {
    main: [
      { label: "Studios", href: "/rooms" },
      { label: "Extended Stay", href: "/extended-stay" },
      { label: "Gallery", href: "/gallery" },
      { label: "Things to Do", href: "/things-to-do" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Accessibility", href: "/accessibility" },
    ],
    primaryAria: "Primary",
    mobileAria: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeAria: `${property.name} — home`,
  },

  common: {
    bookOnline: "Book Online",
    viewStudios: "View Studios",
    callToBook: "Call to Book",
    call: "Call",
    callNumber: `Call ${property.phone.display}`,
    sendInquiry: "Send an Inquiry",
    getDirections: "Get Directions",
    callForPricing: "Call for Pricing",
    directions: "Directions",
  },

  mobileBar: { aria: "Quick actions", call: "Call", directions: "Directions", book: "Book" },

  footer: {
    tagline: "Independent, pet-friendly studios on Dixie Highway in Clarkston, Michigan.",
    explore: "Explore",
    contact: "Contact",
    plan: "Plan",
    southLink: `Lakefront stays: ${southLocation.short}`,
    credit: "Website delivered by our technology partner,",
  },

  amenities: {
    ac: "Air conditioning",
    heating: "Heating",
    wifi: "Wi-Fi",
    smartTv: "Smart TV",
    coffeeMaker: "Coffee maker",
    microwave: "Microwave",
    refrigerator: "Refrigerator",
    toaster: "Toaster",
    kitchenette: "Kitchenette (no stove or oven)",
    cookingBasics: "Cooking basics",
    dishware: "Dishware & flatware",
    shower: "Shower",
    toiletries: "Complimentary toiletries",
    shampoo: "Shampoo",
    hairDryer: "Hair dryer",
    towels: "Towels provided",
    linens: "Linens provided",
    hangers: "Hangers",
    iron: "Iron & ironing board",
    trashBags: "Trash bags & paper towels",
    books: "Books",
    patio: "Patio",
    privateEntrance: "Private entrance",
    parking: "Free parking lot",
    stepFree: "Step-free access",
    pets: "Pets allowed (fee)",
    nonSmoking: "Non-smoking",
    children: "Suitable for children",
    elderly: "Suitable for older guests",
    smokeDetector: "Smoke detector",
    coDetector: "Carbon monoxide detector",
    fireExtinguisher: "Fire extinguisher",
    firstAid: "First aid kit",
  } satisfies Record<AmenityKey, string>,
  amenityGroups: { room: "In the studio", property: "Property & safety" },

  rooms: {
    "studio-1": {
      name: "Classic Studio",
      tagline: "Sofa, sitting area and kitchenette",
      description:
        "A bright studio with a comfortable bed, a sofa and coffee table, a Smart TV and a kitchenette with sink, microwave and coffee maker. Step outside to the covered front porch.",
    },
    "studio-3": {
      name: "Rustic Studio",
      tagline: "Wood-panel walls and a log-frame bed",
      description:
        "Wood-panel walls, a log-frame bed, a ceiling fan and a cozy armchair give this studio a warm, cabin-like feel, with a Smart TV for movie nights. The kitchenette has a microwave, coffee maker and toaster.",
    },
    "studio-4": {
      name: "Workspace Studio",
      tagline: "Work desk, refrigerator and private patio",
      description:
        "A clean, modern studio with a work desk and office chair, a wall-mounted Smart TV, a refrigerator, microwave and cooking basics — plus its own patio.",
    },
    "studio-8": {
      name: "Two-Bed Studio",
      tagline: "Two beds and a Smart TV",
      description:
        "Two beds, a Smart TV and a kitchenette with microwave, toaster and a Keurig with complimentary coffee — a good fit for two travelers who'd rather not share a bed.",
    },
  } satisfies Record<Room["slug"], { name: string; tagline: string; description: string }>,

  roomFacts: {
    unit: (n: number) => `Unit ${n}`,
    sleeps: (n: number) => `Sleeps ${n}`,
    beds: (n: number) => (n === 1 ? "1 bed" : `${n} beds`),
    baths: (n: number) => (n === 1 ? "1 bathroom" : `${n} bathrooms`),
    sqft: (n: number) => `${n} sq ft`,
    miles: (n: number) => `≈${n} mi`,
    photoAlt: (name: string) => `${name} at The Olde Mill Inn of Clarkston North`,
  },

  home: {
    eyebrow: "Pet-friendly studios in Clarkston, Michigan",
    heroTitle: "Your Home Away From Home in Clarkston",
    heroText:
      "Comfortable studios 1 mile from The Village and 5 miles from Pine Knob. Book a nightly stay online, or call us for extended stays.",
    heroAlt: "Rustic studio with wood-panel walls and a log-frame bed at The Olde Mill Inn of Clarkston North",
    glanceAria: "At a glance",
    trust: [
      { icon: "event_available", label: "Book Online" },
      { icon: "pets", label: "Pet-Friendly" },
      { icon: "local_parking", label: "Free Parking Lot" },
      { icon: "accessible", label: "Step-Free Access" },
      { icon: "storefront", label: "1 Mi to The Village" },
      { icon: "music_note", label: "5 Mi to Pine Knob" },
    ],
    introTitle: "Everything You Need, Close to Everything",
    introText:
      "The Olde Mill Inn of Clarkston North is an independent inn on Dixie Highway with four private-entrance studios. Each has Wi-Fi, a Smart TV, air conditioning and heating, a kitchenette with microwave and coffee maker, and a free parking lot right outside your door — whether you're here for a concert at Pine Knob, a weekend in The Village or a longer stay.",
    studiosTitle: "Our Studios",
    studiosText: "Four studios for up to two guests. Pick one and book it online.",
    amenitiesTitle: "Included With Every Stay",
    extTitle: "Planning an Extended Stay?",
    extText: "Rates depend on how long you're staying. Give us a call and we'll find the right option for you.",
    howItWorks: "How it works",
    callToBookYourStay: "Call for extended stays",
    reviewsTitle: "What Our Guests Say",
    reviewsNote: "",
    locationsTitle: "Two Locations in Clarkston",
    youAreHere: "You are here",
    northName: "Clarkston North",
    northText: "Pet-friendly studios with online booking. Extended stays by phone.",
    lakefront: "Lakefront",
    southText: "Rooms on Van Norman Lake with online booking.",
    visitSouth: "Visit Clarkston South",
    exploreTitle: "Explore the Area",
    seeThingsToDo: "See things to do",
    finalTitle: "Ready When You Are",
  },

  roomsPage: {
    eyebrow: "Studios",
    title: "Choose Your Studio",
    subtitle: "Four private-entrance studios for up to two guests. Book nightly stays online; call us for extended stays.",
    heroAlt: "Two-bed studio with an orange accent wall",
    viewStudio: "View studio",
    goodToKnowTitle: "Good to know",
    goodToKnow: [
      { icon: "login", label: "Check-in", value: `After ${property.checkIn} at the front desk` },
      { icon: "logout", label: "Check-out", value: `By ${property.checkOut} — return your key to the front desk` },
      { icon: "pets", label: "Pets", value: `Welcome, ${property.petFee} per stay` },
      { icon: "local_parking", label: "Parking", value: `Free, ${property.parkingSpaces} vehicles in front of your studio` },
      { icon: "smoke_free", label: "Smoking", value: "Non-smoking; no events or parties" },
      { icon: "local_laundry_service", label: "Laundry", value: "No on-site laundry" },
    ],
  },

  roomPage: {
    bookTitle: "Book this studio",
    bookText: "Check live availability and rates and book securely online through Vacasa, our booking partner.",
    extendedNote: "Staying longer? Call us for extended-stay pricing.",
    photosTitle: "Photos",
    otherStudios: "Other studios",
    policiesLink: "Check-in, pets and house rules",
  },

  gallery: {
    eyebrow: "Photo gallery",
    title: "See the Inn",
    heroAlt: "Front of The Olde Mill Inn of Clarkston North",
    categories: {
      exterior: "Exterior",
      lobby: "Lobby",
    },
    ui: {
      all: "All",
      filterAria: "Filter photos",
      viewLarger: "view larger",
      viewerAria: "Photo viewer",
      close: "Close photo viewer",
      prev: "Previous photo",
      next: "Next photo",
    },
    exteriorAlt: "Exterior of The Olde Mill Inn of Clarkston North",
    lobbyAlt: "Lobby and front desk at The Olde Mill Inn of Clarkston North",
  },

  extendedStay: {
    eyebrow: "Extended stay",
    title: "Stay a While",
    subtitle: "Comfortable studios and attentive service for guests who need more than a night or two.",
    heroAlt: "Front porch with the Olde Mill Inn sign",
    whoTitle: "Who it's for",
    whoFor: [
      { icon: "work", title: "Work assignments", text: "Contractors, crews and professionals on a local project." },
      { icon: "local_shipping", title: "Relocating", text: "A comfortable base while you find your next place in the area." },
      { icon: "home", title: "Between homes", text: "Somewhere steady during a move, renovation or life change." },
    ],
    includedTitle: "What's included",
    howTitle: "How to book an extended stay",
    steps: [
      { title: "Call or send an inquiry", text: `Reach us at ${property.phone.display} or through the contact form.` },
      { title: "Get your rate", text: "Pricing depends on the length of your stay. We'll give you a quote." },
      { title: "Move in", text: "Pick up your key at the front desk and make yourself at home." },
    ],
    faqTitle: "Frequently asked questions",
  },

  faqs: [
    {
      q: "How do I book a nightly stay?",
      a: "Choose a studio on our Studios page and book it online through Vacasa, our booking partner. Stays start at one night.",
    },
    {
      q: "How do extended stays work?",
      a: `Extended stays are booked by phone. Call us at ${property.phone.display} for pricing — rates depend on the length of your stay.`,
    },
    {
      q: "What time are check-in and check-out?",
      a: `Check-in is after ${property.checkIn} at the front desk, where you'll receive your key. Check-out is by ${property.checkOut}; please return your key to the front desk.`,
    },
    {
      q: "Are pets allowed?",
      a: `Yes. Pets are welcome for a fee of ${property.petFee} per stay.`,
    },
    {
      q: "Is there a kitchen?",
      a: "Each studio has a kitchenette with a microwave and coffee maker. There is no stove or oven. Some studios also have a refrigerator, toaster or cooking basics — see each studio for details.",
    },
    {
      q: "Is there laundry on-site?",
      a: "No, there is no on-site laundry at this location.",
    },
    {
      q: "Where do I park?",
      a: `Parking is free, with room for ${property.parkingSpaces} vehicles in front of your studio in the community lot.`,
    },
    {
      q: "Is the property accessible?",
      a: "The studios are single-story with step-free entry.",
    },
    {
      q: "Is smoking allowed?",
      a: "No. All studios are non-smoking, and events, parties and large gatherings are not permitted.",
    },
  ],

  thingsToDo: {
    eyebrow: "Explore the area",
    title: "Things to Do",
    subtitle: "The Village is a mile away and Pine Knob about five. Distances are approximate.",
    heroAlt: "The Olde Mill Inn of Clarkston North from the parking lot",
    sections: {
      local: "The Village & Essentials",
      concerts: "Concerts & Entertainment",
      skiing: "Skiing & Winter Activities",
      outdoors: "Parks, Beaches & Golf",
      shopping: "Shopping",
      travel: "Getting Here",
    },
  },

  // Distances from the owner's sheet. No shuttle, partnership, discount or
  // ticket claims.
  attractions: [
    {
      name: "The Village of Clarkston",
      category: "local",
      approxMiles: 1,
      description: "A walkable historic downtown with highly rated restaurants, outdoor dining and shops.",
    },
    {
      name: "Neiman's Family Market",
      category: "local",
      approxMiles: 0.3,
      description: "A local grocery store just down the road — handy for longer stays.",
    },
    {
      name: "Pine Knob Music Theatre",
      category: "concerts",
      approxMiles: 5,
      address: "33 Bob Seger Drive, Clarkston, MI 48348",
      description: "Michigan's landmark outdoor amphitheater. Allow extra time for traffic on concert nights.",
    },
    {
      name: "Pine Knob Ski and Snowboard Resort",
      category: "skiing",
      approxMiles: 5,
      description: "Downhill skiing, snowboarding and tubing.",
    },
    {
      name: "Alpine Valley Ski Resort",
      category: "skiing",
      description: "A second nearby ski area with runs for a range of abilities.",
    },
    {
      name: "Mt. Holly Ski and Snowboard Resort",
      category: "skiing",
      description: "Family-friendly slopes a short drive north.",
    },
    {
      name: "Deer Lake Beach",
      category: "outdoors",
      approxMiles: 0.8,
      description: "A neighborhood beach on Deer Lake, less than a mile away.",
    },
    {
      name: "Shepherd's Hollow Golf Club",
      category: "outdoors",
      approxMiles: 3,
      description: "A golf club a few minutes' drive away.",
    },
    {
      name: "Independence Oaks County Park",
      category: "outdoors",
      approxMiles: 6,
      description: "A large county park with trails and a lake for hiking and picnics.",
    },
    {
      name: "Great Lakes Crossing Outlets",
      category: "shopping",
      approxMiles: 9,
      address: "4000 Baldwin Road, Auburn Hills, MI 48326",
      description: "Michigan's largest indoor outlet mall, with shopping, dining and entertainment.",
    },
    {
      name: "Bishop International Airport",
      category: "travel",
      approxMiles: 25,
      description: "The nearest commercial airport, in Flint.",
    },
  ] as Attraction[],

  contact: {
    eyebrow: "We're here to help",
    title: "Contact Olde Mill Inn North",
    heroAlt: "Front of The Olde Mill Inn of Clarkston North with the lobby in the center",
    reachUs: "Reach us",
    directionsText: "We're on Dixie Highway in Clarkston, about a mile from The Village. Check in at the front desk in the center of the building. Tap “Get Directions” for turn-by-turn navigation.",
    southPrefix: "Looking for a lakefront stay? Visit our sister property,",
    formTitle: "Send an inquiry",
  },

  form: {
    intro:
      "Planning an extended stay or have a question? Tell us what you need and we'll reach out. Submitting this form does not confirm a reservation.",
    name: "Name",
    email: "Email",
    phone: "Phone (optional)",
    moveIn: "Arrival date (optional)",
    moveOut: "Departure date (optional)",
    message: "Message",
    consent: "By submitting, you agree we may use the details above to respond to your inquiry. We don't sell your information.",
    errorPrefix: "Sorry — we couldn't send your message right now. Please call",
    sending: "Sending…",
    submit: "Send message",
    successTitle: "Thanks — your message is on its way.",
    successPrefix: "We'll follow up as soon as we can. For anything time-sensitive, please call",
  },

  privacy: {
    title: "Privacy",
    note: "This statement describes how this website handles personal information. It is provided for transparency and should be reviewed and approved by the property before launch.",
    blocks: [
      {
        h: "Information we collect",
        ps: [
          "If you use our contact form, we collect the details you provide — such as your name, email address, optional phone number, optional arrival and departure dates and your message — so we can respond to your inquiry.",
          "Like most websites, we may collect limited technical and usage information (such as pages viewed) to understand how the site is used and to improve it. This is only active if an analytics service has been configured.",
        ],
      },
      {
        h: "How we use information",
        ps: ["We use the information you submit to reply to your questions and to help arrange your stay. We do not sell your personal information."],
      },
      {
        h: "Third-party services",
        ps: [
          "Online bookings are completed on Vacasa, our booking partner; details you enter there are governed by their terms and privacy practices. Map and directions links open Google Maps. Links to our sister property open its own website, which has its own privacy practices.",
        ],
      },
    ],
    contactTitle: "Contact",
    contactPrefix: "Questions about this statement? Contact us at",
    or: "or",
  },

  accessibility: {
    title: "Accessibility",
    intro: "We want this website to be usable by as many people as possible and aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.",
    doneTitle: "What we've done",
    done: [
      "Semantic structure with clear headings and landmarks",
      "Keyboard navigation with visible focus styles",
      "Descriptive alternative text for images",
      "Color contrast checked against the design palette",
      "Support for reduced-motion preferences",
      "Labels and clear error messages on the contact form",
      "The full site is available in English and Spanish",
    ],
    propertyTitle: "The property",
    propertyText: "The studios are single-story with step-free entry. Online bookings are completed on our booking partner's system, which is maintained separately. For questions about accessibility features of the studios, please contact us directly so we can help.",
    tellTitle: "Let us know",
    tellPrefix: "If you encounter any difficulty using this site, contact us at",
    or: "or",
    tellSuffix: "and we'll do our best to help and to fix the issue.",
  },
};

export type Attraction = {
  name: string;
  category: "local" | "concerts" | "skiing" | "outdoors" | "shopping" | "travel";
  description: string;
  approxMiles?: number;
  address?: string;
};

export type Dict = typeof en;
