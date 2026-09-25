import { property, southLocation } from "../property";

// All English copy. es.ts must match this shape (typed as Dict).
export const en = {
  htmlLang: "en",
  ogLocale: "en_US",
  // Toggle shown on English pages points to Spanish.
  toggle: { label: "Español", aria: "Ver este sitio en español", hrefLang: "es" },
  skip: "Skip to content",

  meta: {
    defaultTitle: "Extended Stay Hotel in Clarkston, MI | Olde Mill Inn North",
    titleTemplate: "%s | Olde Mill Inn North",
    description:
      "Extended stays at The Olde Mill Inn of Clarkston North, 6853 Dixie Hwy. Wi-Fi, Smart TV, kitchen basics and on-site laundry. Call to book.",
    ogDescription: "Comfortable extended stays on Dixie Highway in Clarkston, Michigan. Call to book.",
    twitterDescription: "Your home away from home in Clarkston, Michigan.",
    extendedStay: {
      title: "Extended Stay in Clarkston, MI",
      description:
        "Extended-stay lodging at The Olde Mill Inn of Clarkston North. Wi-Fi, Smart TV, refrigerator, microwave and on-site laundry. Call for pricing.",
    },
    room: {
      title: "The Room",
      description:
        "Spacious extended-stay rooms at The Olde Mill Inn of Clarkston North with Wi-Fi, Smart TV, refrigerator, microwave, coffee maker and air-conditioning.",
    },
    thingsToDo: {
      title: "Things to Do Near Clarkston, MI",
      description:
        "Concerts at Pine Knob, nearby skiing, shopping at Great Lakes Crossing and downtown Clarkston — all a short drive from Olde Mill Inn North.",
    },
    contact: {
      title: "Contact & Directions",
      description:
        "Contact The Olde Mill Inn of Clarkston North at 6853 Dixie Hwy for extended-stay pricing, availability and directions.",
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
      { label: "Extended Stay", href: "/extended-stay" },
      { label: "The Room", href: "/room" },
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
    callToBook: "Call to Book",
    call: "Call",
    callNumber: `Call ${property.phone.display}`,
    sendInquiry: "Send an Inquiry",
    getDirections: "Get Directions",
    callForPricing: "Call for Pricing",
    directions: "Directions",
    roomAlt: "Guest room at The Olde Mill Inn of Clarkston North with a bed, sofa and coffee table",
  },

  mobileBar: { aria: "Quick actions", call: "Call", directions: "Directions", inquire: "Inquire" },

  footer: {
    tagline: "Independent, family-operated extended-stay lodging on Dixie Highway in Clarkston, Michigan.",
    explore: "Explore",
    contact: "Contact",
    plan: "Plan",
    nightly: `Nightly stays: ${southLocation.short}`,
    credit: "Website delivered by our technology partner,",
  },

  amenities: [
    { icon: "wifi", label: "Wireless internet (Wi-Fi)" },
    { icon: "lan", label: "Wired (LAN) internet" },
    { icon: "tv", label: "Smart TV" },
    { icon: "live_tv", label: "Cable television" },
    { icon: "kitchen", label: "Refrigerator" },
    { icon: "microwave", label: "Microwave" },
    { icon: "coffee_maker", label: "Coffee maker" },
    { icon: "ac_unit", label: "Air-conditioning" },
    { icon: "local_laundry_service", label: "On-site laundry facility" },
  ],

  home: {
    eyebrow: "Extended stays in Clarkston, Michigan",
    heroTitle: "Your Home Away From Home in Clarkston",
    heroText:
      "Comfortable rooms and attentive service for guests who need to stay a while, with Wi-Fi, a Smart TV, kitchen basics and on-site laundry.",
    glanceAria: "At a glance",
    trust: [
      { icon: "calendar_month", label: "Extended Stays" },
      { icon: "wifi", label: "Wi-Fi & Wired Internet" },
      { icon: "tv", label: "Smart TV & Cable" },
      { icon: "kitchen", label: "Fridge & Microwave" },
      { icon: "local_laundry_service", label: "On-Site Laundry" },
      { icon: "call", label: "Call to Book" },
    ],
    introTitle: "Everything You Need for a Longer Stay",
    introText:
      "The Olde Mill Inn of Clarkston North is an independent inn on Dixie Highway, close to the Village of Clarkston. Whether you're in town for work, relocating or between homes, we offer comfortable accommodations, competitive rates and a team that will do its best to make your stay easy.",
    roomEyebrow: "The Room",
    roomTitle: "Room to Settle In",
    roomText:
      "Spacious rooms with a comfortable bed, a sitting area and the practical amenities that make a longer stay feel like home.",
    seeRoom: "See the room",
    amenitiesTitle: "Amenities",
    extTitle: "Planning an Extended Stay?",
    extText: "Rates depend on how long you're staying. Give us a call and we'll find the right option for you.",
    howItWorks: "How it works",
    callToBookYourStay: "Call to book your stay",
    reviewsTitle: "What Our Guests Say",
    reviewsNote: "",
    locationsTitle: "Two Locations in Clarkston",
    youAreHere: "You are here",
    northName: "Clarkston North",
    northText: "Extended stays. Call to book.",
    lakefront: "Lakefront",
    southText: "Nightly stays on Van Norman Lake with online booking.",
    visitSouth: "Visit Clarkston South",
    exploreTitle: "Explore the Area",
    seeThingsToDo: "See things to do",
    finalTitle: "Ready When You Are",
  },

  extendedStay: {
    eyebrow: "Extended stay",
    title: "Stay a While",
    subtitle: "Comfortable accommodations and attentive service for guests who need more than a night or two.",
    whoTitle: "Who it's for",
    whoFor: [
      { icon: "work", title: "Work assignments", text: "Contractors, crews and professionals on a local project." },
      { icon: "local_shipping", title: "Relocating", text: "A comfortable base while you find your next place in the area." },
      { icon: "home", title: "Between homes", text: "Somewhere steady during a move, renovation or life change." },
    ],
    includedTitle: "What's included",
    howTitle: "How to book",
    steps: [
      { title: "Call or send an inquiry", text: `Reach us at ${property.phone.display} or through the contact form.` },
      { title: "Get your rate", text: "Pricing depends on the length of your stay. We'll give you a quote." },
      { title: "Move in", text: "Settle in and make yourself at home." },
    ],
    faqTitle: "Frequently asked questions",
  },

  faqs: [
    {
      q: "How much does an extended stay cost?",
      a: `Rates depend on the length of your stay. Call us at ${property.phone.display} for current pricing.`,
    },
    {
      q: "How do I book?",
      a: `Extended stays are booked directly with us by phone at ${property.phone.display}. You can also send an inquiry through our contact form and we'll reach out. There is no online booking for this location.`,
    },
    {
      q: "What's included in the room?",
      a: "Rooms include Wi-Fi and wired internet, a Smart TV with cable, a refrigerator, microwave, coffee maker and air-conditioning.",
    },
    {
      q: "Is there laundry on-site?",
      a: "Yes. An on-site laundry facility is available to guests.",
    },
    {
      q: "I only need a night or two. Can I stay here?",
      a: `For nightly stays, book at our sister property, ${southLocation.name}, at ${southLocation.address}. It has online booking and a lakefront setting.`,
    },
  ],

  room: {
    badge: "Extended stay",
    title: "The Room",
    text: "Our rooms are spacious and comfortable, with a sitting area and everything you need for day-to-day living during a longer stay.",
    featuresTitle: "Room features",
    railTitle: "Ready to stay?",
    railText: "Call us for pricing and availability, or send an inquiry and we'll reach out.",
  },

  thingsToDo: {
    eyebrow: "Explore the area",
    title: "Things to Do",
    subtitle: "From concerts and skiing to shopping and local dining, Clarkston's best is a short drive from the inn.",
    sections: {
      concerts: "Concerts & Entertainment",
      skiing: "Skiing & Winter Activities",
      shopping: "Shopping",
      local: "Local Dining & Clarkston",
    },
  },

  // Distances omitted until measured from the North address. No shuttle,
  // partnership, discount or ticket claims.
  attractions: [
    {
      name: "Pine Knob Music Theatre",
      category: "concerts",
      address: "33 Bob Seger Drive, Clarkston, MI 48348",
      description: "Michigan's landmark outdoor amphitheater. A short drive from the inn on concert nights.",
    },
    {
      name: "Pine Knob Ski and Snowboard Resort",
      category: "skiing",
      description: "Downhill skiing, snowboarding and tubing just minutes from the inn.",
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
      name: "Great Lakes Crossing Outlets",
      category: "shopping",
      address: "4000 Baldwin Road, Auburn Hills, MI 48326",
      description: "Michigan's largest indoor outlet mall, with shopping, dining and entertainment.",
    },
    {
      name: "Downtown Clarkston",
      category: "local",
      description: "A walkable historic downtown with local dining, shops and community events.",
    },
  ] as Attraction[],

  contact: {
    eyebrow: "We're here to help",
    title: "Contact Olde Mill Inn North",
    reachUs: "Reach us",
    directionsText: "We're on Dixie Highway in Clarkston. Tap “Get Directions” for turn-by-turn navigation.",
    southPrefix: "Only need a night or two? Book online at our lakefront location,",
    formTitle: "Send an inquiry",
  },

  form: {
    intro:
      "Tell us about the stay you need and we'll reach out with availability and pricing. Submitting this form does not confirm a reservation.",
    name: "Name",
    email: "Email",
    phone: "Phone (optional)",
    moveIn: "Move-in date (optional)",
    moveOut: "Move-out date (optional)",
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
          "If you use our contact form, we collect the details you provide — such as your name, email address, optional phone number, optional move-in and move-out dates and your message — so we can respond to your inquiry.",
          "Like most websites, we may collect limited technical and usage information (such as pages viewed) to understand how the site is used and to improve it. This is only active if an analytics service has been configured.",
        ],
      },
      {
        h: "How we use information",
        ps: ["We use the information you submit to reply to your questions and to help arrange your stay. We do not sell your personal information."],
      },
      {
        h: "Third-party services",
        ps: ["Map and directions links open Google Maps. Links to our sister property open its own website, which has its own privacy practices."],
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
    propertyText: "For questions about accessibility features of the rooms or property, please contact us directly so we can help.",
    tellTitle: "Let us know",
    tellPrefix: "If you encounter any difficulty using this site, contact us at",
    or: "or",
    tellSuffix: "and we'll do our best to help and to fix the issue.",
  },
};

export type Attraction = {
  name: string;
  category: "concerts" | "skiing" | "shopping" | "local";
  description: string;
  address?: string;
};

export type Dict = typeof en;
