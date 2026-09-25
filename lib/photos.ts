// Property photos from the Evolve listings (source of truth: the owner's
// Evolve_Listings_6853_Dixie_Hwy sheet). Downloaded at 2048px into
// /public/images/<category>/NN.jpg, with duplicates shared across unit
// listings (exterior, lobby) kept once.

export const photoCounts = {
  exterior: 7,
  lobby: 5,
  "studio-1": 15,
  "studio-3": 18,
  "studio-4": 16,
  "studio-8": 18,
} as const;

export type PhotoCategory = keyof typeof photoCounts;

export function photosFor(category: PhotoCategory): string[] {
  return Array.from(
    { length: photoCounts[category] },
    (_, i) => `/images/${category}/${String(i + 1).padStart(2, "0")}.jpg`
  );
}

// Hand-picked placements.
export const featured = {
  homeHero: "/images/studio-3/01.jpg", // rustic studio: wood panelling, log bed
  roomsHero: "/images/studio-8/01.jpg", // two-bed studio, orange accent wall
  extendedStayHero: "/images/exterior/06.jpg", // front porch with the inn's sign
  contactHero: "/images/exterior/01.jpg", // full building front, for finding us
  thingsToDoHero: "/images/exterior/02.jpg",
  lobby: "/images/lobby/04.jpg",
} as const;
