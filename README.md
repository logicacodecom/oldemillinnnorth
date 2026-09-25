# Olde Mill Inn of Clarkston North

Website for **The Olde Mill Inn of Clarkston North**, an independent extended-stay
inn at 6853 Dixie Hwy, Clarkston, MI. Sister site to
[oldemillinnofclarkston.com](https://www.oldemillinnofclarkston.com/) (South), and
built from the same codebase and **"Lakeside Heritage"** design system
([design/stitch/](design/stitch/)).

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Structure

```
app/[lang]/     Pages (English at /, Spanish at /es): home, rooms, rooms/[slug],
                extended-stay, gallery, things-to-do, contact, privacy, accessibility
app/api/        contact (inquiry email)
components/     UI shared with the South site (Header, Footer, CTA, PageHero,
                GalleryGrid, RoomCard, AmenityGrid, ContactForm, …)
lib/            property.ts (business data + policies), rooms.ts (4 studios,
                amenities, Vacasa booking links), photos.ts, dictionaries/{en,es}.ts
public/images/  logo.png, exterior/, lobby/, studio-1|3|4|8/ (2048px listing photos)
```

Source of truth for rooms, amenities, policies, distances and photos: the
owner's Google Sheet **Evolve_Listings_6853_Dixie_Hwy**. Nightly stays book
online through each studio's public Vacasa listing; extended stays by phone.

## Languages (English / Spanish)

English is served at the root (`/rooms`) and Spanish under `/es` (`/es/rooms`).
All pages live once in `app/[lang]/`, and `middleware.ts` rewrites unprefixed URLs
to the internal `/en` segment (`/en/*` redirects back to the root). All copy
lives in `lib/dictionaries/en.ts` and `es.ts`. `es.ts` is typed against
`en.ts`, so a missing Spanish string fails the typecheck. The header toggle
(`components/LanguageToggle.tsx`) links to the same page in the other language.
Guest reviews stay in their original English. Run `node lib/i18n.check.mjs` to
check the path helpers.

## Configuration

All business data lives in [lib/property.ts](lib/property.ts). Don't duplicate it
in components.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_PROPERTY_EMAIL` | Override the public email |
| `RESEND_API_KEY` / `RESEND_FROM` / `CONTACT_TO` | Deliver inquiry-form emails via Resend |
| `CONTACT_WEBHOOK_URL` | Fallback destination for inquiries (without either, the form shows an error and tells the guest to call) |
| `NEXT_PUBLIC_GA_ID` | Analytics |

Old Wix URLs (`/about-9`, `/general-5`, `/booking-engine`, `/blank`) are
permanently redirected in `next.config.mjs`.

See [docs/OWNER-CONFIRMATION.md](docs/OWNER-CONFIRMATION.md) for open items.
