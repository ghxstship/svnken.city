// ============================================================
// SVNKEN CITY · SALVAGE STORE (merch catalog)
// Headless catalog that maps 1:1 to Shopify. Each variant carries a
// `shopifyVariantId` — replace the placeholders with the real numeric
// Shopify variant ids, then flip SITE.shop.live to true. Checkout
// hands off to Shopify-hosted checkout via a cart permalink.
// ============================================================

export interface Variant {
  /** Shopify numeric variant id — placeholder until the store is live. */
  shopifyVariantId: string;
  /** e.g. "M" or "M / Bone" */
  title: string;
  /** option name -> value, e.g. { Size: "M" } */
  options: Record<string, string>;
  available: boolean;
}

export interface Product {
  handle: string;
  name: string;
  tagline: string;
  category: "Apparel" | "Headwear" | "Goods" | "Print";
  price: number; // USD
  compareAt?: number;
  lot: string;
  description: string;
  /** option name -> ordered values, e.g. { Size: ["XS","S",...] } */
  options: Record<string, string[]>;
  variants: Variant[];
  badge?: string;
}

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

// Build size-only variants with placeholder ids (handle + size).
function sizeVariants(handle: string, soldOut: string[] = []): Variant[] {
  return SIZES.map((s, i) => ({
    shopifyVariantId: `PLACEHOLDER-${handle}-${i + 1}`,
    title: s,
    options: { Size: s },
    available: !soldOut.includes(s),
  }));
}

function oneSize(handle: string, available = true): Variant[] {
  return [{ shopifyVariantId: `PLACEHOLDER-${handle}-1`, title: "One size", options: {}, available }];
}

export const PRODUCTS: Product[] = [
  {
    handle: "manifest-tee",
    name: "The Manifest Tee",
    tagline: "Wordmark across the chest, lot number at the hem.",
    category: "Apparel",
    price: 42,
    lot: "Lot 0447",
    badge: "Bestseller",
    description:
      "Heavyweight 100% ring-spun cotton, garment-dyed the color of deep water. The SVNKEN CITY wordmark across the chest, a salvage lot number stamped at the hem. Boxy, pre-shrunk, built to outlast the run.",
    options: { Size: SIZES },
    variants: sizeVariants("manifest-tee", ["XS"]),
  },
  {
    handle: "salvage-crew-crewneck",
    name: "Salvage Crew Crewneck",
    tagline: "Heavyweight fleece for the dock at low tide.",
    category: "Apparel",
    price: 78,
    lot: "Lot 0451",
    description:
      "A 420gsm brushed-back fleece crewneck in abyssal teal, with a tonal verdigris embroidery at the heart and a woven salvage tag at the side seam. Cut a touch oversized; wear it cold.",
    options: { Size: SIZES },
    variants: sizeVariants("salvage-crew-crewneck", ["XS", "XXL"]),
  },
  {
    handle: "pier-9-cap",
    name: "Pier 9 Dad Cap",
    tagline: "Low-profile, unstructured, brass-stitched.",
    category: "Headwear",
    price: 38,
    lot: "Pier 9",
    description:
      "Washed cotton six-panel in bone, with PIER 9 embroidered in aged-brass thread and an antique-brass slider closure. Unstructured, low crown, curved brim broken in for you.",
    options: {},
    variants: oneSize("pier-9-cap"),
  },
  {
    handle: "tide-list-tote",
    name: "Tide List Tote",
    tagline: "Heavy canvas. Carries the catch.",
    category: "Goods",
    price: 32,
    lot: "Daily",
    description:
      "16oz natural canvas tote screen-printed with the night's tide list in typewriter type. Boxed bottom, webbed handles, room for a magnum from the wreck cellar.",
    options: {},
    variants: oneSize("tide-list-tote"),
  },
  {
    handle: "lot-no-pin-set",
    name: "Lot No. Enamel Pin Set",
    tagline: "Three marks of provenance.",
    category: "Goods",
    price: 18,
    lot: "Lot 0009",
    badge: "Limited",
    description:
      "A set of three hard-enamel pins on a salvage-tag backing card: the wordmark, an anchor rule, and a brass lot stamp. Rubber clutch backs. Numbered run.",
    options: {},
    variants: oneSize("lot-no-pin-set"),
  },
  {
    handle: "subterranean-poster",
    name: "A Subterranean World Awaits — Print",
    tagline: "Letterpress poster, numbered edition.",
    category: "Print",
    price: 28,
    lot: "Lot 0488",
    description:
      "An 18×24 letterpress print on heavy cotton stock — the wordmark and tagline pulled in brass and abyssal teal, deckled edge, hand-numbered. Ships flat in a rigid mailer.",
    options: {},
    variants: oneSize("subterranean-poster"),
  },
  {
    handle: "wreck-cellar-coupe",
    name: "Wreck Cellar Coupe",
    tagline: "Etched glass from the bar build.",
    category: "Goods",
    price: 24,
    lot: "Pier 9",
    description:
      "A weighted coupe glass etched with the SVNKEN CITY mark, drawn from the wreck-bar spec. Sold singly; the bar pours from the same.",
    options: {},
    variants: oneSize("wreck-cellar-coupe"),
  },
  {
    handle: "drowned-grove-bandana",
    name: "Drowned Grove Bandana",
    tagline: "Salvage paisley, sea-faded.",
    category: "Apparel",
    price: 22,
    lot: "Lot 0451",
    description:
      "A 22-inch cotton bandana printed in a salvage paisley — anchors, citrus, and lot stamps washed to a sea-faded teal. Wear it, fly it, tie it to a tag.",
    options: {},
    variants: oneSize("drowned-grove-bandana"),
  },
];

export const CATEGORIES = ["Apparel", "Headwear", "Goods", "Print"] as const;

export function getProduct(handle: string): Product | undefined {
  return PRODUCTS.find((p) => p.handle === handle);
}

export function formatPrice(usd: number): string {
  return `$${usd.toFixed(0)}`;
}
