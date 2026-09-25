import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { AmenityGrid } from "@/components/AmenityGrid";
import { property } from "@/lib/property";
import { getDict, localePath, pageMetadata, type Lang } from "@/lib/i18n";
import { EVENTS } from "@/lib/analytics";

type Props = { params: { lang: Lang } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "/room", getDict(params.lang).meta.room);
}

export default function RoomPage({ params }: Props) {
  const t = getDict(params.lang);
  const r = t.room;
  return (
    <article className="pb-section-gap">
      <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop pt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="relative rounded-2xl overflow-hidden mb-10">
            <Image
              src="/images/room.jpg"
              alt={t.common.roomAlt}
              width={1080}
              height={1080}
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="w-full h-auto max-h-[36rem] object-cover"
            />
          </div>
          <span className="inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 bg-primary text-on-primary">
            {r.badge}
          </span>
          <h1 className="font-display-lg text-[36px] md:text-[44px] text-primary mb-4">{r.title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">{r.text}</p>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">{r.featuresTitle}</h2>
          <AmenityGrid items={t.amenities} className="lg:grid-cols-2" />
        </div>

        {/* Booking rail */}
        <aside className="lg:col-span-1">
          <div className="bg-surface-white rounded-2xl border border-outline-variant/20 shadow-sm p-6 lg:sticky lg:top-24">
            <p className="font-headline-md text-headline-md text-on-surface mb-2">{r.railTitle}</p>
            <p className="text-on-surface-variant text-sm mb-6">{r.railText}</p>
            <div className="flex flex-col gap-3">
              <CTA href={property.phone.href} size="block" icon="call" analyticsEvent={EVENTS.phoneClick}>
                {t.common.callNumber}
              </CTA>
              <CTA href={localePath(params.lang, "/contact")} variant="outline" size="block" icon="mail">
                {t.common.sendInquiry}
              </CTA>
            </div>
          </div>
        </aside>
      </section>
    </article>
  );
}
