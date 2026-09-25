import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { property, addressLine, directionsUrl, southLocation } from "@/lib/property";
import { getDict, pageMetadata, type Lang } from "@/lib/i18n";
import { featured } from "@/lib/photos";
import { EVENTS } from "@/lib/analytics";

type Props = { params: { lang: Lang } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "/contact", getDict(params.lang).meta.contact);
}

export default function ContactPage({ params }: Props) {
  const t = getDict(params.lang);
  const c = t.contact;
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} image={featured.contactHero} imageAlt={c.heroAlt} />

      <section className="py-section-gap max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">{c.reachUs}</h2>
          <address className="not-italic space-y-5 text-on-surface">
            <p className="flex items-start gap-3">
              <Icon name="location_on" className="text-primary mt-0.5" />
              <span>{addressLine}</span>
            </p>
            <p className="flex items-center gap-3">
              <Icon name="call" className="text-primary" />
              <a className="hover:text-primary" href={property.phone.href} data-analytics-event={EVENTS.phoneClick}>
                {property.phone.display}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Icon name="mail" className="text-primary" />
              <a
                className="hover:text-primary break-all"
                href={`mailto:${property.email}`}
                data-analytics-event={EVENTS.emailClick}
              >
                {property.email}
              </a>
            </p>
          </address>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <CTA href={property.phone.href} icon="call" analyticsEvent={EVENTS.phoneClick}>
              {t.common.callToBook}
            </CTA>
            <CTA href={directionsUrl} external variant="outline" icon="explore" analyticsEvent={EVENTS.directionsClick}>
              {t.common.getDirections}
            </CTA>
          </div>

          <div className="mt-10 rounded-2xl overflow-hidden border border-outline-variant/20">
            <div className="bg-surface-container p-6">
              <p className="font-headline-md text-lg text-on-surface mb-1">{t.common.directions}</p>
              <p className="text-on-surface-variant text-sm">{c.directionsText}</p>
            </div>
          </div>

          <p className="mt-8 text-sm text-on-surface-variant">
            {c.southPrefix}{" "}
            <a
              href={southLocation.url}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event={EVENTS.southSiteClick}
              className="text-primary underline underline-offset-2"
            >
              {southLocation.name}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">{c.formTitle}</h2>
          <ContactForm t={t.form} lang={params.lang} />
        </div>
      </section>
    </>
  );
}
