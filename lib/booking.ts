import type { Room } from "./rooms";

// Cloudbeds booking engine for North (property 321279). Every booking button
// on the site links here; there is no widget or iframe (same pattern as South).
export const CLOUDBEDS_BOOKING_BASE = "https://hotels.cloudbeds.com/en/reservation/v9FbEe";
export const CLOUDBEDS_CURRENCY = "usd";
export const CLOUDBEDS_BOOKING_URL = `${CLOUDBEDS_BOOKING_BASE}?currency=${CLOUDBEDS_CURRENCY}`;

// Cloudbeds room type IDs (the booking engine's `rid` values), by studio page.
export const cloudbedsRoomTypeIds: Record<Room["slug"], string> = {
  "studio-1": "682210", // Classic Studio
  "studio-3": "682213", // Rustic Studio
  "studio-4": "682211", // Workspace Studio
  "studio-8": "682214", // Two-Bed Studio
};

// General booking link, or a studio's room-specific link, optionally with dates
// (YYYY-MM-DD) and guest count.
export function bookingUrl(opts?: {
  slug?: Room["slug"];
  checkin?: string;
  checkout?: string;
  adults?: number;
}): string {
  const params = new URLSearchParams();
  if (opts?.checkin) params.set("checkin", opts.checkin);
  if (opts?.checkout) params.set("checkout", opts.checkout);
  if (opts?.adults) params.set("adults", String(opts.adults));
  if (opts?.slug) params.set("room_type_id", cloudbedsRoomTypeIds[opts.slug]);
  const qs = params.toString();
  return qs ? `${CLOUDBEDS_BOOKING_URL}&${qs}` : CLOUDBEDS_BOOKING_URL;
}
