import { photosFor, type PhotoCategory } from "./photos";

// Room facts from the owner's Evolve listings sheet (source of truth).
// Language-neutral only — names, descriptions and amenity labels live in
// lib/dictionaries/{en,es}.ts. Amenities list only what the sheet marks for
// each unit; nothing is assumed from photos.

export type AmenityKey =
  | "ac" | "heating" | "wifi" | "coffeeMaker" | "microwave" | "kitchenette" | "toiletries"
  | "hairDryer" | "hangers" | "linens" | "towels" | "trashBags" | "parking" | "privateEntrance"
  | "coDetector" | "fireExtinguisher" | "firstAid" | "smokeDetector" | "nonSmoking" | "pets"
  | "stepFree" | "children" | "elderly" | "iron" | "shampoo" | "dishware" | "toaster" | "shower"
  | "cookingBasics" | "refrigerator" | "patio" | "books" | "smartTv";

export const amenityMeta: Record<AmenityKey, { icon: string; group: "room" | "property" }> = {
  ac: { icon: "ac_unit", group: "room" },
  heating: { icon: "heat", group: "room" },
  wifi: { icon: "wifi", group: "room" },
  smartTv: { icon: "tv", group: "room" },
  coffeeMaker: { icon: "coffee_maker", group: "room" },
  microwave: { icon: "microwave", group: "room" },
  refrigerator: { icon: "kitchen", group: "room" },
  toaster: { icon: "breakfast_dining", group: "room" },
  kitchenette: { icon: "countertops", group: "room" },
  cookingBasics: { icon: "soup_kitchen", group: "room" },
  dishware: { icon: "restaurant", group: "room" },
  shower: { icon: "shower", group: "room" },
  toiletries: { icon: "soap", group: "room" },
  shampoo: { icon: "spa", group: "room" },
  hairDryer: { icon: "air", group: "room" },
  towels: { icon: "dry", group: "room" },
  linens: { icon: "bed", group: "room" },
  hangers: { icon: "checkroom", group: "room" },
  iron: { icon: "iron", group: "room" },
  trashBags: { icon: "delete", group: "room" },
  books: { icon: "menu_book", group: "room" },
  patio: { icon: "deck", group: "property" },
  privateEntrance: { icon: "door_front", group: "property" },
  parking: { icon: "local_parking", group: "property" },
  stepFree: { icon: "accessible", group: "property" },
  pets: { icon: "pets", group: "property" },
  nonSmoking: { icon: "smoke_free", group: "property" },
  children: { icon: "child_care", group: "property" },
  elderly: { icon: "elderly", group: "property" },
  smokeDetector: { icon: "detector_smoke", group: "property" },
  coDetector: { icon: "sensors", group: "property" },
  fireExtinguisher: { icon: "fire_extinguisher", group: "property" },
  firstAid: { icon: "medical_services", group: "property" },
};

// Marked for all four units. Microwave comes from the sheet's Guest Info
// ("microwave and toaster provided"), which applies to every unit. Smart TV in
// every studio confirmed by the owner on 2026-09-25 (sheet marks only Unit 8).
// No cable TV and no wired LAN — confirmed by the owner; never list them.
export const commonAmenities: AmenityKey[] = [
  "ac", "heating", "wifi", "smartTv", "coffeeMaker", "microwave", "kitchenette", "toiletries", "hairDryer",
  "hangers", "linens", "towels", "trashBags", "parking", "privateEntrance", "stepFree", "pets",
  "nonSmoking", "children", "elderly", "coDetector", "fireExtinguisher", "firstAid",
];

export type Room = {
  slug: "studio-1" | "studio-3" | "studio-4" | "studio-8";
  unit: number;
  photos: string[];
  beds: number; // counted from the listing photos
  sleeps: number;
  bathrooms: number;
  sqft: number;
  bookingUrl: string; // public Vacasa listing (Evolve's booking channel)
  amenities: AmenityKey[];
};

const unitPhotos = (slug: Room["slug"]) => photosFor(slug as PhotoCategory);

export const rooms: Room[] = [
  {
    slug: "studio-1",
    unit: 1,
    photos: unitPhotos("studio-1"),
    beds: 1,
    sleeps: 2,
    bathrooms: 1,
    sqft: 250,
    bookingUrl: "https://www.vacasa.com/unit/1032729",
    amenities: [...commonAmenities],
  },
  {
    slug: "studio-3",
    unit: 3,
    photos: unitPhotos("studio-3"),
    beds: 1,
    sleeps: 2,
    bathrooms: 1,
    sqft: 250,
    bookingUrl: "https://www.vacasa.com/unit/1032583",
    amenities: [...commonAmenities, "iron", "shampoo", "dishware", "toaster", "smokeDetector"],
  },
  {
    slug: "studio-4",
    unit: 4,
    photos: unitPhotos("studio-4"),
    beds: 1,
    sleeps: 2,
    bathrooms: 1,
    sqft: 250,
    bookingUrl: "https://www.vacasa.com/unit/1032728",
    amenities: [
      ...commonAmenities, "iron", "shampoo", "dishware", "smokeDetector", "shower",
      "cookingBasics", "refrigerator", "patio",
    ],
  },
  {
    slug: "studio-8",
    unit: 8,
    photos: unitPhotos("studio-8"),
    beds: 2,
    sleeps: 2,
    bathrooms: 1,
    sqft: 250,
    bookingUrl: "https://www.vacasa.com/unit/1032259",
    amenities: [
      ...commonAmenities, "iron", "shampoo", "dishware", "toaster", "smokeDetector", "shower",
      "cookingBasics", "books",
    ],
  },
];

export const roomsBySlug = new Map(rooms.map((r) => [r.slug, r]));

// What every studio includes, plus the free parking lot (a property feature
// guests expect to see in the same list).
export const includedEverywhere: AmenityKey[] = [
  ...commonAmenities.filter((k) => amenityMeta[k].group === "room"),
  "parking",
];

// Sorted room-first, then by the display order of amenityMeta.
export function sortedAmenities(keys: AmenityKey[], group: "room" | "property"): AmenityKey[] {
  const order = Object.keys(amenityMeta) as AmenityKey[];
  return order.filter((k) => keys.includes(k) && amenityMeta[k].group === group);
}
