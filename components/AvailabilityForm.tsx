"use client";

import { useEffect, useState } from "react";
import { bookingUrl } from "@/lib/booking";
import { EVENTS } from "@/lib/analytics";
import type { Room } from "@/lib/rooms";
import type { Dict } from "@/lib/dictionaries/en";
import { Icon } from "./Icon";

const iso = (d: Date) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};
const field =
  "w-full rounded-lg border border-outline-variant bg-surface-white px-3 py-2.5 text-on-surface focus:border-primary focus:ring-0";
const labelCls = "block text-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-1";

// Check-in / check-out / guests block (same look as South). North shows no
// prices, so instead of fetching rates it opens Cloudbeds in this tab with the
// dates, guests and, on a studio page, that studio's room type filled in.
export function AvailabilityForm({
  t,
  maxGuests,
  slug,
  compact = false,
}: {
  t: Dict["availability"];
  maxGuests: number;
  slug?: Room["slug"];
  compact?: boolean; // single column for the studio page booking rail
}) {
  const [today, setToday] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(Math.min(2, maxGuests));
  const [error, setError] = useState("");

  // Defaults set client-side to avoid SSR/CSR hydration mismatch.
  useEffect(() => {
    setToday(iso(new Date()));
    setCheckin(iso(new Date()));
    setCheckout(iso(new Date(Date.now() + 86_400_000)));
  }, []);

  // Keep checkout after checkin.
  useEffect(() => {
    if (checkin && checkout && checkout <= checkin) {
      const [y, m, d] = checkin.split("-").map(Number);
      setCheckout(iso(new Date(y, m - 1, d + 1)));
    }
  }, [checkin, checkout]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!checkin || !checkout || checkout <= checkin) {
      setError(t.errorOrder);
      return;
    }
    setError("");
    window.location.assign(bookingUrl({ slug, checkin, checkout, adults }));
  }

  const form = (
    <form onSubmit={onSubmit} className={`grid grid-cols-2 gap-4 items-end ${compact ? "" : "md:grid-cols-4"}`}>
      <div className="col-span-1">
        <label className={labelCls} htmlFor={`av-checkin${slug ?? ""}`}>{t.checkin}</label>
        <input id={`av-checkin${slug ?? ""}`} type="date" className={field} value={checkin} min={today}
          onChange={(e) => setCheckin(e.target.value)} />
      </div>
      <div className="col-span-1">
        <label className={labelCls} htmlFor={`av-checkout${slug ?? ""}`}>{t.checkout}</label>
        <input id={`av-checkout${slug ?? ""}`} type="date" className={field} value={checkout} min={checkin || today}
          onChange={(e) => setCheckout(e.target.value)} />
      </div>
      <div className="col-span-1">
        <label className={labelCls} htmlFor={`av-adults${slug ?? ""}`}>{t.guests}</label>
        <select id={`av-adults${slug ?? ""}`} className={field} value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
          {Array.from({ length: maxGuests }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>{n} {n === 1 ? t.guest1 : t.guestN}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        data-analytics-event={EVENTS.availabilitySearch}
        className={`col-span-2 inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-colors ${compact ? "" : "md:col-span-1"}`}
      >
        {t.search}
        <Icon name="search" className="text-lg" />
      </button>
      {error && (
        <p role="alert" className="col-span-2 md:col-span-4 text-error text-sm">{error}</p>
      )}
    </form>
  );

  if (compact) return form;
  return (
    <div className="bg-surface-white rounded-2xl shadow-lg border border-outline-variant/30 p-6 md:p-8">{form}</div>
  );
}
