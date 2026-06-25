# SVNKEN CITY — EDC Orlando

The full consumer-journey website for **SVNKEN CITY**, the EDC Orlando surfacing of
*Salvage City Supper Club* — a drowned-Florida supper club staging a seated dinner-theatre
voyage on the **Tinker Field infield**, Nov 4–9, 2026. Tickets sold on **Speakeasy**.

Built on the **Sunken City Design System** (abyssal teal, oxidized brass, verdigris patina,
sea-bleached bone) — tokens copied into `styles/tokens/`, components ported to `components/ui/`.

## Stack

- **Next.js 14** (App Router, TypeScript, React 18)
- Zero runtime UI deps — design system is hand-ported, fonts via Google Fonts
- File-based form backend (swap for your ESP/CRM at launch)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Pages (the consumer journey)

| Route | Purpose |
|---|---|
| `/` | Home — hero, run dates, story, how-it-works, manifest preview, tickets CTA, waitlist |
| `/experience` | The Voyage — legend, the room, a seating timeline, good-to-know |
| `/tickets` | **Dates & Times** — fares, full schedule, per-seating Speakeasy buy links, wristband notice |
| `/manifest` | The Manifest — the tasting-menu "manifest" on bone menu stock |
| `/venue` | The Harbor — Tinker Field infield, getting there, plan-your-night |
| `/faq` | Logbook — grouped FAQ accordion |
| `/group-bookings` | Group tables, private seatings, buyouts + inquiry form |
| `/contact` | Contact the dock + direct emails |
| `/not-found` | On-brand 404 |

Plus `/sitemap.xml`, `/robots.txt`, and API routes `/api/waitlist`, `/api/contact`.

## The show schedule

Defined in **`lib/shows.ts`** — single source of truth. Current run:

- **Wed Nov 4** — Soft Opening · 6:30 PM, 8:00 PM
- **Thu Nov 5 – Sun Nov 8** — 5:00 PM, 6:30 PM, 8:00 PM, 9:30 PM
- **Mon Nov 9** — Closing Night · 8:00 PM, 9:30 PM

Each seating carries a `status` (`open` / `limited` / `sold-out`) and a `buyUrl`.

## ⚠️ Before launch — replace the placeholders

These are clearly marked stand-ins:

1. **Speakeasy links** — `lib/site.ts` → `ticketing.speakeasyBase`, and the `buy()` slugs in
   `lib/shows.ts`. Point each seating at its real Speakeasy checkout URL.
2. **Pricing** — `lib/site.ts` → `pricing` (currently $95 / $145 / $225).
3. **Per-seating status** — update `status` in `lib/shows.ts` as seats move (or wire to a feed).
4. **Contact emails / Instagram / address** — `lib/site.ts` → `contact`, `venue`.
5. **Form backend** — `lib/store.ts` appends to gitignored JSONL under `public/data/`.
   Swap `appendRecord()` for Klaviyo / Resend / Supabase / your CRM.
6. **OG image** — add a real share card; `app/layout.tsx` references brand favicon/app-icon.

## Design system

Reference bundle lives in `design-system/` (excluded from the build). Tokens are the source of
truth — change a token in `styles/tokens/*` and the whole site follows. Components in
`components/ui/` mirror the DS React components (Button, Card, Tag, Badge, Input/Select/Textarea).

Voice rules enforced throughout: first-person-plural house, maritime/salvage verbs, numbers as
provenance (lot numbers, dive depths), **no emoji, no exclamation marks**.
