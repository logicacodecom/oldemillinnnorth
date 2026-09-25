// Single source of truth for all repeated business data.
// Do not duplicate phone/address/email in components — import from here.

export type Review = {
  quote: string;
  author: string;
};

export const property = {
  name: "The Olde Mill Inn of Clarkston North",
  eyebrow: "Extended stays in Clarkston, Michigan",
  address: {
    street: "6853 Dixie Hwy",
    city: "Clarkston",
    state: "MI",
    postalCode: "48346",
    country: "US",
  },
  phone: {
    display: "(248) 625-1522",
    href: "tel:+12486251522",
  },
  email: process.env.NEXT_PUBLIC_PROPERTY_EMAIL ?? "ClarkstonHotel@gmail.com",
  // Amenities as published on the previous North site.
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
  // Owner-approved guest reviews carried over from the previous North site.
  reviews: [
    {
      quote:
        "Affordable, clean, well kept rooms. The hotel manager Angel was incredibly accommodating and made sure I had a nice stay.",
      author: "Dylan Z.",
    },
    {
      quote:
        "Very welcoming and relaxing place. Definitely would recommend staying! Excellent service and the location is beautiful.",
      author: "Bre E.",
    },
    {
      quote:
        "The hotel was very cute and the management was very friendly and accommodating. It was very clean!",
      author: "Andrea T.",
    },
  ] as Review[],
} as const;

// Sister property for nightly stays with online booking.
export const southLocation = {
  name: "The Olde Mill Inn of Clarkston South",
  short: "Clarkston South",
  address: "5835 Dixie Hwy, Clarkston, MI 48346",
  url: "https://www.oldemillinnofclarkston.com/",
} as const;

export const addressLine = `${property.address.street}, ${property.address.city}, ${property.address.state} ${property.address.postalCode}`;

// Canonical site origin (no trailing slash) for metadata/canonical/sitemap.
export const siteUrl = "https://www.oldemillinnnorth.com";

// Opens Google Maps driving directions to the property.
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine)}`;
