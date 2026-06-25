// ============================================================
// SVNKEN CITY · SPONSORSHIP & PARTNERSHIP
// ============================================================

export interface PartnerTier {
  name: string;
  code: string;
  blurb: string;
  perks: string[];
  featured?: boolean;
}

export const PARTNER_TIERS: PartnerTier[] = [
  {
    name: "Dock Partner",
    code: "Presenting",
    blurb: "Title presence across the full six-night run — the name above the waterline.",
    featured: true,
    perks: [
      "Presenting billing: “SVNKEN CITY, presented by —”",
      "Logo lockup on site, tickets, and on-site signage",
      "A reserved Captain’s Table every night of the run",
      "Branded moment woven into the seating",
      "First right of renewal on the next surfacing",
    ],
  },
  {
    name: "Cellar Partner",
    code: "Beverage",
    blurb: "Own the wreck bar — spirits, wine, or zero-proof poured all week.",
    perks: [
      "Exclusive pour category at the wreck bar",
      "Custom cocktail or pairing on the manifest",
      "Brand on the bar build and tide list",
      "Staff sampling and content capture",
    ],
  },
  {
    name: "Manifest Partner",
    code: "Activation",
    blurb: "A single-night or category activation inside the festival footprint.",
    perks: [
      "Branded activation or sampling on select nights",
      "Inclusion in pre-show and social rollout",
      "Guest gifting / sampling rights",
      "Performance recap with audience metrics",
    ],
  },
];

export const PARTNER_REASONS: [string, string][] = [
  ["A captive, seated audience", "Every guest is sat for ~90 minutes in a candlelit room — not passing by a banner, but living inside the brand moment."],
  ["EDC Orlando reach", "We surface inside one of the country’s largest festivals, in front of a high-intent, experience-hungry crowd."],
  ["Built for content", "A cinematic, photogenic world engineered for capture — your brand travels home in every guest’s feed."],
  ["A proven supper-club engine", "Salvage City has run the room from Las Vegas to Miami to the high seas. The machine is tested; Orlando is the next port."],
];

export const PARTNER_STATS: [string, string][] = [
  ["6", "nights, Nov 4–9"],
  ["20", "seatings across the run"],
  ["~90", "minutes seated, per guest"],
  ["1", "of EDC Orlando’s most intimate rooms"],
];
