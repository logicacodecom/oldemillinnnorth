import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { AmenityGrid } from "@/components/AmenityGrid";
import { property } from "@/lib/property";
import { commonAmenities, sortedAmenities } from "@/lib/rooms";
import { featured } from "@/lib/photos";
import { getDict, localePath, pageMetadata, type Lang } from "@/lib/i18n";
import { EVENTS } from "@/lib/analytics";

type Props = { params: { lang: Lang } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "/extended-stay", getDict(params.lang).meta.extendedStay);
}

export default function ExtendedStayPage({ params }: Props) {
  const t = getDict(params.lang);
  const e = t.extendedStay;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: params.lang,
    mainEntity: t.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <PageHero eyebrow={e.eyebrow} title={e.title} subtitle={e.subtitle} image={featured.extendedStayHero} imageAlt={e.heroAlt} />

      <section className="py-section-gap max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">{e.whoTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {e.whoFor.map((w) => (
            <div key={w.title} className="bg-surface-white rounded-xl p-6 border border-outline-variant/10">
              <div className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4">
                <Icon name={w.icon} />
              </div>
              <h3 className="font-headline-md text-lg text-on-surface mb-2">{w.title}</h3>
              <p className="text-on-surface-variant text-sm">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">{e.includedTitle}</h2>
          <AmenityGrid keys={sortedAmenities(commonAmenities, "room")} labels={t.amenities} />
        </div>
      </section>

      <section className="py-section-gap max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">{e.howTitle}</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-10">
          {e.steps.map((s, i) => (
            <li key={s.title} className="bg-surface-white rounded-xl p-6 border border-outline-variant/10">
              <span className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-md mb-4">
                {i + 1}
              </span>
              <h3 className="font-headline-md text-lg text-on-surface mb-2">{s.title}</h3>
              <p className="text-on-surface-variant text-sm">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-col sm:flex-row gap-4">
          <CTA href={property.phone.href} size="lg" icon="call" analyticsEvent={EVENTS.phoneClick}>
            {t.common.callForPricing}
          </CTA>
          <CTA href={localePath(params.lang, "/contact")} variant="outline" size="lg" icon="mail">
            {t.common.sendInquiry}
          </CTA>
        </div>
      </section>

      <section className="pb-section-gap max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">{e.faqTitle}</h2>
          <div className="space-y-3">
            {t.faqs.map((f) => (
              <details key={f.q} className="bg-surface-white rounded-xl border border-outline-variant/20 p-5">
                <summary className="font-headline-md text-lg text-on-surface cursor-pointer marker:text-primary">
                  {f.q}
                </summary>
                <p className="text-on-surface-variant mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={faqJsonLd} />
    </>
  );
}
