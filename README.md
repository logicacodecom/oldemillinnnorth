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
app/            Routes: home, extended-stay, room, things-to-do, contact,
                privacy, accessibility, api/contact, sitemap.ts, robots.ts
components/     UI shared with the South site (Header, Footer, CTA, PageHero,
                ContactForm, MobileActionBar, AmenityGrid, …)
lib/            property.ts (all business data), faqs, attractions, nav, analytics
public/images/  logo.png (North badge), room.jpg
assets/brand/   Source images pulled from the previous Wix site
```

There is **no online booking** for this location. Every call to action is
"call to book" or the inquiry form. Nightly-stay guests go to the South site.

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
