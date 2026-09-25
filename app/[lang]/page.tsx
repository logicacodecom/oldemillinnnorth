import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { AmenityGrid } from "@/components/AmenityGrid";
import { property, directionsUrl, southLocation } from "@/lib/property";
import { getDict, localePath, pageMetadata, type Lang } from "@/lib/i18n";
import { EVENTS } from "@/lib/analytics";

type Props = { params: { lang: Lang } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "/", {});
}

export default function HomePage({ params }: Props) {
  const { lang } = params;
  const t = getDict(lang);
  const h = t.home;
  const to = (path: string) => localePath(lang, path);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="relative z-10 text-center max-w-4xl px-margin-mobile text-surface-white pt-28 pb-16">
          <Image
            src="/images/logo.png"
            alt=""
            width={286}
            height={350}
            priority
            className="h-40 md:h-48 w-auto mx-auto mb-8 drop-shadow-lg"
          />
          <p className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary-fixed mb-4">
            {h.eyebrow}
          </p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 drop-shadow-lg">
            {h.heroTitle}
          </h1>
          <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-95 leading-relaxed">
            {h.heroText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA
              href={property.phone.href}
              size="lg"
              icon="call"
              className="bg-sunset-accent text-primary hover:bg-surface-white"
              analyticsEvent={EVENTS.phoneClick}
            >
              {t.common.callNumber}
            </CTA>
            <CTA href={to("/contact")} variant="glass" size="lg">
              {t.common.sendInquiry}
            </CTA>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section aria-label={h.glanceAria} className="bg-surface-white py-12 border-b border-outline-variant/20">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {h.trust.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-12 h-12 shrink-0 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <Icon name={item.icon} />
              </div>
              <span className="font-label-lg text-on-surface">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="py-section-gap max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{h.introTitle}</h2>
        <div className="h-1 w-20 bg-sunset-accent mx-auto rounded-full mb-8" />
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          {h.introText}
        </p>
      </section>

      {/* The room */}
      <section className="pb-section-gap overflow-hidden">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/room.jpg"
                alt={t.common.roomAlt}
                width={1080}
                height={1080}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-56 h-56 bg-sunset-accent rounded-2xl -z-0 opacity-20" />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-sunset-accent font-label-lg uppercase tracking-[0.2em] mb-4 block">
              {h.roomEyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6 leading-tight">{h.roomTitle}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">{h.roomText}</p>
            <CTA href={to("/room")} variant="outline">
              {h.seeRoom}
            </CTA>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{h.amenitiesTitle}</h2>
            <div className="h-1 w-20 bg-sunset-accent mx-auto rounded-full" />
          </div>
          <AmenityGrid items={t.amenities} />
        </div>
      </section>

      {/* Extended stay */}
      <section className="py-section-gap">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-primary rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between text-on-primary gap-10">
            <div className="lg:w-3/5">
              <h2 className="font-headline-lg text-[32px] md:text-[40px] leading-tight mb-6">{h.extTitle}</h2>
              <p className="text-on-primary-container text-body-lg mb-8 max-w-lg leading-relaxed">{h.extText}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTA
                  href={property.phone.href}
                  icon="call"
                  className="bg-sunset-accent text-primary hover:bg-surface-white border-0"
                  analyticsEvent={EVENTS.phoneClick}
                >
                  {t.common.callForPricing}
                </CTA>
                <CTA href={to("/extended-stay")} variant="glass">
                  {h.howItWorks}
                </CTA>
              </div>
            </div>
            <div className="lg:w-2/5 flex justify-center">
              <div className="bg-surface-white/10 backdrop-blur-md p-8 rounded-2xl border border-on-primary/20 w-full text-center">
                <Icon name="call" className="text-[48px] mb-2" />
                <p className="font-display-lg text-[32px] leading-none mb-2">{property.phone.display}</p>
                <p className="text-sm uppercase tracking-wider opacity-80">{h.callToBookYourStay}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="pb-section-gap max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-10">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{h.reviewsTitle}</h2>
          <div className="h-1 w-20 bg-sunset-accent mx-auto rounded-full" />
          {h.reviewsNote ? <p className="text-sm text-on-surface-variant mt-4">{h.reviewsNote}</p> : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {property.reviews.map((r) => (
            <figure key={r.author} className="bg-surface-white rounded-xl p-8 border border-outline-variant/10 flex flex-col">
              <Icon name="format_quote" className="text-sunset-accent text-4xl mb-4" />
              <blockquote lang="en" className="text-on-surface-variant leading-relaxed flex-1">
                {r.quote}
              </blockquote>
              <figcaption className="font-label-lg text-on-surface mt-6">— {r.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Two locations */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{h.locationsTitle}</h2>
            <div className="h-1 w-20 bg-sunset-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
            <div className="bg-surface-white rounded-2xl p-8 border-2 border-primary">
              <span className="inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 bg-primary text-on-primary">
                {h.youAreHere}
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">{h.northName}</h3>
              <p className="text-on-surface-variant mb-4">
                {property.address.street}, {property.address.city}, {property.address.state}
              </p>
              <p className="text-on-surface-variant text-sm mb-6">{h.northText}</p>
              <CTA href={property.phone.href} variant="outline" icon="call" analyticsEvent={EVENTS.phoneClick}>
                {t.common.callNumber}
              </CTA>
            </div>
            <div className="bg-surface-white rounded-2xl p-8 border border-outline-variant/20">
              <span className="inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 bg-secondary-container text-on-secondary-container">
                {h.lakefront}
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">{southLocation.short}</h3>
              <p className="text-on-surface-variant mb-4">{southLocation.address}</p>
              <p className="text-on-surface-variant text-sm mb-6">{h.southText}</p>
              <CTA href={southLocation.url} external variant="outline" icon="open_in_new" analyticsEvent={EVENTS.southSiteClick}>
                {h.visitSouth}
              </CTA>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby attractions */}
      <section className="py-section-gap max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-10">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{h.exploreTitle}</h2>
          <div className="h-1 w-20 bg-sunset-accent mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {t.attractions.slice(0, 6).map((a) => (
            <div key={a.name} className="bg-surface-white rounded-xl p-6 border border-outline-variant/10">
              <h3 className="font-headline-md text-lg text-on-surface mb-2">{a.name}</h3>
              <p className="text-on-surface-variant text-sm">{a.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTA href={to("/things-to-do")} variant="outline">
            {h.seeThingsToDo}
          </CTA>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">{h.finalTitle}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA href={property.phone.href} size="lg" icon="call" analyticsEvent={EVENTS.phoneClick}>
              {t.common.callToBook}
            </CTA>
            <CTA href={to("/contact")} variant="outline" size="lg" icon="mail">
              {t.common.sendInquiry}
            </CTA>
            <CTA href={directionsUrl} external variant="outline" size="lg" icon="explore" analyticsEvent={EVENTS.directionsClick}>
              {t.common.getDirections}
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
