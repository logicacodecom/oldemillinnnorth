import { property, siteUrl } from "@/lib/property";
import { commonAmenities } from "@/lib/rooms";
import { en } from "@/lib/dictionaries/en";

// Accurate JSON-LD from the owner's listings sheet. No aggregateRating,
// reviews, star rating or prices.
export function lodgingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.name,
    url: siteUrl,
    image: [
      `${siteUrl}/images/exterior/01.jpg`,
      `${siteUrl}/images/studio-3/01.jpg`,
      `${siteUrl}/images/studio-8/01.jpg`,
    ],
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
    checkinTime: property.checkInTime24,
    checkoutTime: property.checkOutTime24,
    petsAllowed: true,
    availableLanguage: ["English", "Spanish"],
    description:
      "Independent, pet-friendly studios on Dixie Highway in Clarkston, Michigan, about a mile from The Village and five miles from Pine Knob.",
    amenityFeature: commonAmenities.map((k) => ({
      "@type": "LocationFeatureSpecification",
      name: en.amenities[k],
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
