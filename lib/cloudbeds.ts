import "server-only";
import { cloudbedsRoomTypeIds } from "./booking";
import type { Room } from "./rooms";

// Server-side Cloudbeds access (same as South). The API key lives in env and
// never reaches the client. Used by the live /api/availability route.

const ENDPOINT = "https://api.cloudbeds.com/api/v1.3/getAvailableRoomTypes";
const DAY = 86_400_000;

const slugByRoomTypeId = new Map(
  (Object.entries(cloudbedsRoomTypeIds) as [Room["slug"], string][]).map(([slug, id]) => [id, slug])
);

export type AvailRoom = {
  roomTypeID: string;
  slug: Room["slug"] | null;
  name: string; // Cloudbeds name; the widget shows the site's localized name when slug is known
  available: number;
  ratePerNight: number;
  rateTotal: number;
};
export type AvailResult = { configured: true; currency: string; nights: number; rooms: AvailRoom[] };
type NotConfigured = { configured: false };

type CbRoom = { roomTypeID: string | number; roomTypeName: string; roomRate: number | string; roomsAvailable: number | string };

export async function getAvailability(opts: {
  checkin: string;
  checkout: string;
  adults?: number;
  children?: number;
}): Promise<AvailResult | NotConfigured> {
  const key = process.env.CLOUDBEDS_API_KEY;
  const propertyID = process.env.CLOUDBEDS_PROPERTY_ID;
  if (!key || !propertyID) return { configured: false };

  const adults = opts.adults ?? 2;
  const children = opts.children ?? 0;
  const nights = Math.max(1, Math.round((Date.parse(opts.checkout) - Date.parse(opts.checkin)) / DAY));
  const url = `${ENDPOINT}?propertyID=${propertyID}&startDate=${opts.checkin}&endDate=${opts.checkout}&rooms=1&adults=${adults}&children=${children}`;

  const res = await fetch(url, { headers: { Authorization: `Bearer ${key}` }, cache: "no-store" });
  if (!res.ok) throw new Error(`cloudbeds ${res.status}`);
  const payload = (await res.json()) as { data?: Array<{ propertyCurrency?: { currencySymbol?: string }; propertyRooms?: CbRoom[] }> };

  const block = Array.isArray(payload.data) ? payload.data[0] : undefined;
  const currency = block?.propertyCurrency?.currencySymbol ?? "$";
  const rooms: AvailRoom[] = (block?.propertyRooms ?? []).map((r) => {
    const total = Number(r.roomRate) || 0;
    return {
      roomTypeID: String(r.roomTypeID),
      slug: slugByRoomTypeId.get(String(r.roomTypeID)) ?? null,
      name: r.roomTypeName,
      available: Number(r.roomsAvailable) || 0,
      ratePerNight: Math.round(total / nights),
      rateTotal: total,
    };
  });
  rooms.sort((a, b) => Number(b.available > 0) - Number(a.available > 0) || a.ratePerNight - b.ratePerNight);
  return { configured: true, currency, nights, rooms };
}
