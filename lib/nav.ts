export type NavLink = { label: string; href: string };

// Primary navigation.
export const mainNav: NavLink[] = [
  { label: "Extended Stay", href: "/extended-stay" },
  { label: "The Room", href: "/room" },
  { label: "Things to Do", href: "/things-to-do" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
];
