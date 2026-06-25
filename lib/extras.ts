// ============================================================
// SVNKEN CITY · TABLES & ADD-ONS
// Experience extras that ride along with a seating. All route to the
// Speakeasy box office at checkout (channel: "speakeasy").
// ============================================================

export interface Extra {
  id: string;
  kind: "table" | "addon";
  name: string;
  detail: string;
  price: number;
  /** priced per seat vs. flat */
  perSeat?: boolean;
  maxQty?: number;
  /** Speakeasy deep-link for this extra (placeholder until live) */
  buyUrl: string;
}

const buy = (slug: string) => `${"https://www.speakeasy.io/svnken-city"}/${slug}`;

// Reservable tables / sections (instant-add; larger buyouts go through
// /group-bookings inquiry).
export const TABLES: Extra[] = [
  {
    id: "captains-table",
    kind: "table",
    name: "Captain's Table — 2 seats",
    detail: "Front rail · wreck-cellar pairing · welcome pour for two",
    price: 450,
    maxQty: 4,
    buyUrl: buy("captains-table"),
  },
  {
    id: "reserved-rail",
    kind: "table",
    name: "Reserved Rail — holds 8",
    detail: "A held stretch of the long table at a single seating · deposit",
    price: 250,
    maxQty: 3,
    buyUrl: buy("reserved-rail"),
  },
];

// Per-seating upgrades.
export const ADDONS: Extra[] = [
  {
    id: "wreck-cellar-pairing",
    kind: "addon",
    name: "Wreck Cellar Pairing",
    detail: "Wine & rum pairing poured course by course",
    price: 45,
    perSeat: true,
    maxQty: 12,
    buyUrl: buy("addon-pairing"),
  },
  {
    id: "tide-list-pairing",
    kind: "addon",
    name: "Zero-Proof Tide Pairing",
    detail: "The non-alcoholic tide list, course by course",
    price: 28,
    perSeat: true,
    maxQty: 12,
    buyUrl: buy("addon-tide"),
  },
  {
    id: "welcome-pour",
    kind: "addon",
    name: "Welcome Pour",
    detail: "A pour from the wreck cellar as you log in",
    price: 18,
    perSeat: true,
    maxQty: 12,
    buyUrl: buy("addon-welcome"),
  },
  {
    id: "skip-the-dock",
    kind: "addon",
    name: "Skip the Dock",
    detail: "Priority entry — first onto the manifest at your seating",
    price: 25,
    perSeat: true,
    maxQty: 12,
    buyUrl: buy("addon-priority"),
  },
];
