import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { AmenityGrid } from "@/components/AmenityGrid";
import { GalleryGrid } from "@/components/GalleryGrid";
import { RoomCard } from "@/components/RoomCard";
import { rooms, roomsBySlug, sortedAmenities, type Room } from "@/lib/rooms";
import { property } from "@/lib/property";
import { getDict, localePath, pageMetadata, type Lang } from "@/lib/i18n";
import { EVENTS } from "@/lib/analytics";

type Props = { params: { lang: Lang; slug: string } };

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const room = roomsBySlug.get(params.slug as Room["slug"]);
  if (!room) return {};
  const copy = getDict(params.lang).rooms[room.slug];
  return pageMetadata(params.lang, `/rooms/${room.slug}`, { title: copy.name, description: copy.description });
}

export default function RoomPage({ params }: Props) {
  const room = roomsBySlug.get(params.slug as Room["slug"]);
  if (!room) notFound();
  const { lang } = params;
  const t = getDict(lang);
  const copy = t.rooms[room.slug];
  const alt = t.roomFacts.photoAlt(copy.name);
  const facts = [
    { icon: "group", text: t.roomFacts.sleeps(room.sleeps) },
    { icon: "bed", text: t.roomFacts.beds(room.beds) },
    { icon: "bathroom", text: t.roomFacts.baths(room.bathrooms) },
    { icon: "square_foot", text: t.roomFacts.sqft(room.sqft) },
  ];

  return (
    <article className="pb-section-gap">
      {/* Lead photos */}
      <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {room.photos.slice(0, 3).map((src, i) => (
            <div
              key={src}
              className={`relative rounded-2xl overflow-hidden ${
                i === 0 ? "md:col-span-2 md:row-span-2 h-72 md:h-[30rem]" : "hidden md:block h-full min-h-[14rem]"
              }`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                priority // all three lead photos are above the fold
                sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "33vw"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Details + booking rail */}
      <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop pt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <span className="inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 bg-primary text-on-primary">
            {t.roomFacts.unit(room.unit)}
          </span>
          <h1 className="font-display-lg text-[36px] md:text-[44px] text-primary mb-2">{copy.name}</h1>
          <p className="text-on-surface-variant mb-6">{copy.tagline}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
            {facts.map((f) => (
              <li key={f.icon} className="inline-flex items-center gap-2 text-on-surface">
                <Icon name={f.icon} className="text-primary" /> {f.text}
              </li>
            ))}
          </ul>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">{copy.description}</p>

          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">{t.amenityGroups.room}</h2>
          <AmenityGrid keys={sortedAmenities(room.amenities, "room")} labels={t.amenities} className="lg:grid-cols-2 mb-10" />
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">{t.amenityGroups.property}</h2>
          <AmenityGrid keys={sortedAmenities(room.amenities, "property")} labels={t.amenities} className="lg:grid-cols-2 mb-6" />

          <p className="text-sm text-on-surface-variant border-t border-outline-variant/30 pt-4">
            <Link href={`${localePath(lang, "/rooms")}#good-to-know`} className="text-primary underline underline-offset-2">
              {t.roomPage.policiesLink}
            </Link>
          </p>
        </div>

        <aside className="lg:col-span-1">
          <div className="bg-surface-white rounded-2xl border border-outline-variant/20 shadow-sm p-6 lg:sticky lg:top-24">
            <p className="font-headline-md text-headline-md text-on-surface mb-2">{t.roomPage.bookTitle}</p>
            <p className="text-on-surface-variant text-sm mb-6">{t.roomPage.bookText}</p>
            <div className="flex flex-col gap-3">
              <CTA href={room.bookingUrl} external size="block" icon="open_in_new" analyticsEvent={EVENTS.bookingClick}>
                {t.common.bookOnline}
              </CTA>
              <p className="text-on-surface-variant text-sm mt-3">{t.roomPage.extendedNote}</p>
              <CTA href={property.phone.href} variant="outline" size="block" icon="call" analyticsEvent={EVENTS.phoneClick}>
                {t.common.callNumber}
              </CTA>
            </div>
          </div>
        </aside>
      </section>

      {/* All photos */}
      <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop pt-section-gap">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">{t.roomPage.photosTitle}</h2>
        <GalleryGrid
          photos={room.photos.map((src) => ({ src, alt, categoryId: room.slug }))}
          categories={[{ id: room.slug, label: copy.name }]}
          t={t.gallery.ui}
        />
      </section>

      {/* Other studios */}
      <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop pt-section-gap">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">{t.roomPage.otherStudios}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {rooms
            .filter((r) => r.slug !== room.slug)
            .map((r) => (
              <RoomCard key={r.slug} room={r} href={localePath(lang, `/rooms/${r.slug}`)} t={t} />
            ))}
        </div>
      </section>
    </article>
  );
}
