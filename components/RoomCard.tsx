import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/lib/rooms";
import type { Dict } from "@/lib/dictionaries/en";
import { Icon } from "./Icon";

export function RoomCard({ room, href, t }: { room: Room; href: string; t: Dict }) {
  const copy = t.rooms[room.slug];
  return (
    <Link
      href={href}
      className="group flex flex-col bg-surface-white rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
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
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-headline-md text-headline-md text-primary mb-1">{copy.name}</h3>
        <p className="text-on-surface-variant text-sm mb-4">{copy.tagline}</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-on-surface-variant mb-6">
          <span className="inline-flex items-center gap-1">
            <Icon name="group" className="text-base text-primary" /> {t.roomFacts.sleeps(room.sleeps)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon name="bed" className="text-base text-primary" /> {t.roomFacts.beds(room.beds)}
          </span>
        </p>
        <span className="mt-auto inline-flex items-center gap-1 text-primary font-label-lg text-label-lg group-hover:underline underline-offset-4">
          {t.roomsPage.viewStudio} <Icon name="arrow_forward" className="text-base" />
        </span>
      </div>
    </Link>
  );
}
