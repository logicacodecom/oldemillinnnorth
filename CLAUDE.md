# Olde Mill Inn North: project rules

## Every change ships in both English and Spanish

- All user-facing copy goes in `lib/dictionaries/en.ts` **and** `lib/dictionaries/es.ts`. Never hardcode text in JSX. This includes metadata, labels, alt text and error messages.
- `es.ts` is typed as `Dict`, so a missing key fails `npm run typecheck`. A changed English string is **not** caught, so update the Spanish one by hand.
- New pages go under `app/[lang]/`, use `pageMetadata()` from `lib/i18n.ts` (for canonical and hreflang), and get added to `app/sitemap.ts`.
- Internal links use `localePath(lang, path)`.
- Verify both `/path` and `/es/path` before shipping.
- Guest reviews stay in their original English.
- Spanish style: neutral Latin American Spanish, formal "usted".

## Content facts

Only publish facts confirmed by the owner. See `docs/OWNER-CONFIRMATION.md` for open items. There's no online booking; pricing is by phone only.
