import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import { Icon } from "@/components/Icon";
import { CTA } from "@/components/CTA";
import { rooms } from "@/lib/rooms";
import { featured } from "@/lib/photos";
import { property } from "@/lib/property";
import { getDict, localePath, pageMetadata, type Lang } from "@/lib/i18n";
import { EVENTS } from "@/lib/analytics";

type Props = { params: { lang: Lang } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "/rooms", getDict(params.lang).meta.rooms);
}

export default function RoomsPage({ params }: Props) {
  const { lang } = params;
  const t = getDict(lang);
  const p = t.roomsPage;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} image={featured.roomsHero} imageAlt={p.heroAlt} />

      <section className="py-section-gap max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {rooms.map((room) => (
            <RoomCard key={room.slug} room={room} href={localePath(lang, `/rooms/${room.slug}`)} t={t} />
          ))}
        </div>
      </section>

      <section id="good-to-know" className="py-section-gap bg-surface-container-low scroll-mt-24">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">{p.goodToKnowTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {p.goodToKnow.map((f) => (
              <div key={f.label} className="bg-surface-white rounded-xl p-5 border border-outline-variant/10 flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <Icon name={f.icon} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-on-surface-variant">{f.label}</p>
                  <p className="font-label-lg text-on-surface">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTA href={property.phone.href} variant="outline" icon="call" analyticsEvent={EVENTS.phoneClick}>
              {t.home.callToBookYourStay}
            </CTA>
            <CTA href={localePath(lang, "/extended-stay")} variant="ghost">
              {t.nav.main[1].label}
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
