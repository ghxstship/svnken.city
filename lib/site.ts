// ============================================================
// SVNKEN CITY · SITE CONFIG
// Single source of truth for venue, contact, and ticketing.
// ============================================================

export const SITE = {
  name: "SVNKEN CITY",
  wordmark: "SVNKENCITY",
  tagline: "A Subterranean World Awaits…",
  parent: "Salvage City Supper Club",
  oneLiner: "There is no menu — only the manifest of what the divers brought up today.",
  description:
    "A drowned-Florida supper club surfacing for one week inside EDC Orlando. Candlelit, underwater, built from salvage — a seated dinner-theatre voyage below the waterline.",
  url: "https://svnken.city",

  venue: {
    name: "Tinker Field Infield",
    context: "Inside the EDC Orlando festival grounds",
    address: "287 S Tampa Ave, Orlando, FL 32805",
    city: "Orlando, FL",
    note: "Access is through the EDC Orlando gates. A festival wristband is required to reach the infield.",
  },

  contact: {
    general: "bonvoyage@svnken.city",
    press: "press@svnken.city",
    groups: "tables@svnken.city",
    partners: "partners@svnken.city",
    careers: "crew@svnken.city",
    instagram: "@svnken.city",
    instagramUrl: "https://instagram.com/svnken.city",
  },

  // Social — handle is @svnken.city wherever the platform allows a "."
  // in the username; where it doesn't (X), it falls back to @svnkencity.
  social: [
    { platform: "Instagram", handle: "@svnken.city", url: "https://instagram.com/svnken.city" },
    { platform: "TikTok", handle: "@svnken.city", url: "https://www.tiktok.com/@svnken.city" },
    { platform: "X", handle: "@svnkencity", url: "https://x.com/svnkencity" },
    { platform: "YouTube", handle: "@svnken.city", url: "https://www.youtube.com/@svnken.city" },
    { platform: "Facebook", handle: "@svnken.city", url: "https://www.facebook.com/svnken.city" },
  ],

  // ----------------------------------------------------------
  // TICKETING — sold on Speakeasy (NOT Ticket Fairy).
  // Replace SPEAKEASY_BASE / per-show `buyUrl`s with the live
  // Speakeasy event links before launch.
  // ----------------------------------------------------------
  ticketing: {
    platform: "Speakeasy",
    speakeasyBase: "https://www.speakeasy.io/svnken-city",
    onSaleNote: "Tickets on sale now on Speakeasy.",
  },

  // ----------------------------------------------------------
  // MERCH — Shopify-hosted checkout (headless catalog + cart
  // permalink). Set `domain` to the live *.myshopify.com domain and
  // flip `live` to true once products exist and each variant in
  // lib/merch.ts carries its real numeric Shopify variant id.
  // ----------------------------------------------------------
  shop: {
    domain: "svnken-city.myshopify.com",
    currency: "USD",
    live: false,
    note: "The salvage store. Checkout is handled securely on Shopify.",
  },

  pricing: {
    softOpening: { label: "Soft Opening Seat", price: 95, note: "Preview night · two seatings only" },
    standard: { label: "The Manifest", price: 145, note: "Full seated voyage · per seat" },
    captains: { label: "Captain's Table", price: 225, note: "Front rail · wreck-cellar pairing · welcome pour" },
  },
} as const;
