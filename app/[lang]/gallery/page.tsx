import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid, type GalleryPhoto } from "@/components/GalleryGrid";
import { rooms } from "@/lib/rooms";
import { photosFor, featured } from "@/lib/photos";
import { getDict, pageMetadata, type Lang } from "@/lib/i18n";

type Props = { params: { lang: Lang } };

export function generateMetadata({ params }: Props): Metadata {
  return pageMetadata(params.lang, "/gallery", getDict(params.lang).meta.gallery);
}

export default function GalleryPage({ params }: Props) {
  const t = getDict(params.lang);
  const g = t.gallery;

  // Studios first, so "All" opens on the rooms rather than the parking lot.
  const categories = [
    ...rooms.map((r) => ({ id: r.slug, label: t.rooms[r.slug].name })),
    { id: "lobby", label: g.categories.lobby },
    { id: "exterior", label: g.categories.exterior },
  ];
  const photos: GalleryPhoto[] = [
    ...rooms.flatMap((r) =>
      r.photos.map((src) => ({ src, alt: t.roomFacts.photoAlt(t.rooms[r.slug].name), categoryId: r.slug }))
    ),
    ...photosFor("lobby").map((src) => ({ src, alt: g.lobbyAlt, categoryId: "lobby" })),
    ...photosFor("exterior").map((src) => ({ src, alt: g.exteriorAlt, categoryId: "exterior" })),
  ];

  return (
    <>
      <PageHero eyebrow={g.eyebrow} title={g.title} image={featured.contactHero} imageAlt={g.heroAlt} />
      <section className="py-section-gap max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <GalleryGrid photos={photos} categories={categories} t={g.ui} />
      </section>
    </>
  );
}
