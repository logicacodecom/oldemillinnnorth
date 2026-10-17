import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/lib/rooms";
import type { Dict } from "@/lib/dictionaries/en";
import { bookingUrl } from "@/lib/booking";
import { EVENTS } from "@/lib/analytics";
import { Icon } from "./Icon";

// Studio card (same pattern as South): photo and details, then a "View studio"
// button and a "Check Availability" button that opens this studio on Cloudbeds.
export function RoomCard({ room, href, t }: { room: Room; href: string; t: Dict }) {
  const copy = t.rooms[room.slug];
  return (
    <article className="group flex flex-col bg-surface-white rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-lg transition-shadow">
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden" tabIndex={-1} aria-hidden="true">
        <Image
          src={room.photos[0]}
          alt={t.roomFacts.photoAlt(copy.name)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-surface-white/90 text-primary text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          {t.roomFacts.unit(room.unit)}
        </span>
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-headline-md text-headline-md text-primary mb-1">
          <Link href={href} className="hover:underline underline-offset-4">{copy.name}</Link>
        </h3>
        <p className="text-on-surface-variant text-sm mb-4">{copy.tagline}</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-on-surface-variant mb-6">
          <span className="inline-flex items-center gap-1">
            <Icon name="group" className="text-base text-primary" /> {t.roomFacts.sleeps(room.sleeps)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon name="bed" className="text-base text-primary" /> {t.roomFacts.beds(room.beds)}
          </span>
        </p>
        <div className="mt-auto flex flex-col gap-3">
          <Link
            href={href}
            className="w-full inline-flex items-center justify-center gap-1 border border-primary text-primary py-3 rounded-lg font-label-lg text-label-lg hover:bg-primary hover:text-on-primary transition-colors"
          >
            {t.roomsPage.viewStudio} <Icon name="arrow_forward" className="text-base" />
          </Link>
          <a
            href={bookingUrl({ slug: room.slug })}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event={EVENTS.bookingClick}
            className="w-full text-center bg-primary text-on-primary py-3 rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-colors"
          >
            {t.common.checkAvailability}
          </a>
        </div>
      </div>
    </article>
  );
}
