import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { AmenityGrid } from "@/components/AmenityGrid";
import { faqs } from "@/lib/faqs";
import { property } from "@/lib/property";
import { EVENTS } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Extended Stay in Clarkston, MI",
  description:
    "Extended-stay lodging at The Olde Mill Inn of Clarkston North. Wi-Fi, Smart TV, refrigerator, microwave and on-site laundry. Call for pricing.",
  alternates: { canonical: "/extended-stay" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const whoFor = [
  { icon: "work", title: "Work assignments", text: "Contractors, crews and professionals on a local project." },
  { icon: "local_shipping", title: "Relocating", text: "A comfortable base while you find your next place in the area." },
  { icon: "home", title: "Between homes", text: "Somewhere steady during a move, renovation or life change." },
];

const steps = [
  { n: 1, title: "Call or send an inquiry", text: `Reach us at ${property.phone.display} or through the contact form.` },
  { n: 2, title: "Get your rate", text: "Pricing depends on the length of your stay. We'll give you a quote." },
  { n: 3, title: "Move in", text: "Settle in and make yourself at home." },
];

export default function ExtendedStayPage() {
  return (
    <>
      <PageHero
        eyebrow="Extended stay"
        title="Stay a While"
        subtitle="Comfortable accommodations and attentive service for guests who need more than a night or two."
      />

      <section className="py-section-gap max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Who it&apos;s for</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {whoFor.map((w) => (
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
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">What&apos;s included</h2>
          <AmenityGrid />
        </div>
      </section>

      <section className="py-section-gap max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">How to book</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-10">
          {steps.map((s) => (
            <li key={s.n} className="bg-surface-white rounded-xl p-6 border border-outline-variant/10">
              <span className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-md mb-4">
                {s.n}
              </span>
              <h3 className="font-headline-md text-lg text-on-surface mb-2">{s.title}</h3>
              <p className="text-on-surface-variant text-sm">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-col sm:flex-row gap-4">
          <CTA href={property.phone.href} size="lg" icon="call" analyticsEvent={EVENTS.phoneClick}>
            Call for Pricing
          </CTA>
          <CTA href="/contact" variant="outline" size="lg" icon="mail">
            Send an Inquiry
          </CTA>
        </div>
      </section>

      <section className="pb-section-gap max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
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
