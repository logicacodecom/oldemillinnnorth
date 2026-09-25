import { property, siteUrl } from "@/lib/property";

// Accurate JSON-LD. Only verified data — no aggregateRating, reviews, star
// rating, prices, check-in times or pet policy until confirmed.
export function lodgingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.name,
    url: siteUrl,
    image: [`${siteUrl}/images/room.jpg`],
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address.street,
      addressLocality: property.address.city,
      addressRegion: property.address.state,
      postalCode: property.address.postalCode,
      addressCountry: property.address.country,
    },
    telephone: property.phone.href.replace("tel:", ""),
    email: property.email,
    description:
      "Independent, family-operated extended-stay lodging on Dixie Highway in Clarkston, Michigan.",
    amenityFeature: property.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.label,
      value: true,
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
