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
    "A theatrical expedition-dining experience: a five-course descent below the waterline ending in a drowned, luminous city. The official SVNKEN CITY × EDC Orlando home at Lot54, The Vanguard — with festival shuttles, a pregame, and an afterparty.",
  url: "https://svnken.city",

  venue: {
    name: "Lot54 at The Vanguard",
    context: "The official SVNKEN CITY × EDC Orlando partner venue",
    address: "578 N Orange Ave, Orlando, FL 32801",
    city: "Orlando, FL",
    note: "A dinner ticket is all you need to dine — no festival wristband required. On show nights we run shuttles to and from EDC Orlando.",
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
    // Checkout is consolidated to Speakeasy for now — tickets, tables,
    // add-ons, and merch all settle in one basket. Flip the cart back to
    // a Shopify channel later by restoring channel:"shopify" on merch lines.
    note: "Checkout is handled securely on Speakeasy.",
  },

  pricing: {
    softOpening: { label: "Soft Opening Seat", price: 95, note: "Preview night · two seatings only" },
    standard: { label: "The Manifest", price: 145, note: "Full five-course descent · per seat" },
    chefsPass: { label: "Chef's Pass", price: 195, note: "Counter seat at the pass — watch every plate surface" },
    captains: { label: "Captain's Table", price: 225, note: "Front rail · wreck-cellar pairing · welcome pour" },
  },
} as const;
