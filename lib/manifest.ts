// ============================================================
// SVNKEN CITY · THE MANIFEST (tasting menu)
// "There is no menu — only the manifest of what the divers
//  brought up today." Subject to the tide.
// ============================================================

export interface ManifestItem {
  name: string;
  desc: string;
  lot: string;
}

export interface Course {
  course: string;
  items: ManifestItem[];
}

export const MANIFEST: Course[] = [
  {
    course: "I · From the Rail",
    items: [
      { name: "Wreck Oysters, half dozen", desc: "green peppercorn mignonette, brine ice", lot: "Pier 9" },
      { name: "Conch, cured & pounded", desc: "lime, scotch bonnet oil, salt cracker", lot: "Lot 0451" },
      { name: "Smoked marlin dip", desc: "pickled grove citrus, charred bread", lot: "Daily" },
    ],
  },
  {
    course: "II · From the Deep",
    items: [
      { name: "Reef Snapper, charred whole", desc: "drowned-grove citrus, fennel ash", lot: "Dive 14m" },
      { name: "Salt-Cured Cobia", desc: "three weeks under salt, blood orange, black oil", lot: "Lot 0447" },
      { name: "Hull Stew", desc: "whatever the divers brought up, saffron, brine", lot: "Daily" },
    ],
  },
  {
    course: "III · From the Grove",
    items: [
      { name: "Drowned-grove citrus, set custard", desc: "burnt honey, sea salt", lot: "—" },
      { name: "Black rum cake", desc: "molasses pulled from the wreck stores", lot: "Lot 0009" },
    ],
  },
];

export const PAIRING_NOTE =
  "Wine and rum pairings poured from the wreck cellar. A zero-proof tide list is logged for every seating.";
