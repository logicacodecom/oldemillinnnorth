// Nearby attractions. Distances are omitted until measured from the North address.
// No shuttle/partnership/discount/ticket claims are made.

export type Attraction = {
  name: string;
  category: "concerts" | "skiing" | "shopping" | "dining" | "local";
  description: string;
  approxMiles?: number;
  address?: string;
  note?: string;
};

export const attractions: Attraction[] = [
  {
    name: "Pine Knob Music Theatre",
    category: "concerts",
    address: "33 Bob Seger Drive, Clarkston, MI 48348",
    description:
      "Michigan's landmark outdoor amphitheater. A short drive from the inn on concert nights.",
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
];

export const attractionsByCategory = {
  concerts: attractions.filter((a) => a.category === "concerts"),
  skiing: attractions.filter((a) => a.category === "skiing"),
  shopping: attractions.filter((a) => a.category === "shopping"),
  dining: attractions.filter((a) => a.category === "dining"),
  local: attractions.filter((a) => a.category === "local"),
};
