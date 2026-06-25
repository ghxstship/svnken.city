// ============================================================
// SVNKEN CITY · THE MANIFEST — a five-course descent
// The menu is the narrative: five courses, one per ocean depth
// zone, dropping from the sunlight into the drowned city.
// "There is no menu — only the manifest of what the divers
//  brought up today." Subject to the tide.
// ============================================================

export interface ManifestItem {
  name: string;
  desc: string;
  lot: string;
}

export interface Course {
  /** course label, e.g. "Course I" */
  course: string;
  /** depth zone name */
  zone: string;
  /** depth telemetry, e.g. "0 – 200 m" */
  depth: string;
  /** the narrative beat for the zone */
  beat: string;
  /** wine / pour that lands a beat ahead */
  pairing: string;
  items: ManifestItem[];
}

export const MANIFEST: Course[] = [
  {
    course: "Course I",
    zone: "The Sunlight",
    depth: "0 – 200 m",
    beat: "The light is still ours. The vessel seals and the descent begins.",
    pairing: "Sparkling, bone-dry",
    items: [
      { name: "Wreck Oysters, half dozen", desc: "green peppercorn mignonette, brine ice, edible sea-foam", lot: "Pier 9" },
      { name: "Reef Crudo", desc: "snapper, drowned-grove citrus, fennel ash", lot: "Dive 9m" },
    ],
  },
  {
    course: "Course II",
    zone: "The Twilight",
    depth: "200 – 1,000 m",
    beat: "The light fades. Something below is watching the dark.",
    pairing: "Smoked spirit / amber wine",
    items: [
      { name: "Conch, cured & pounded", desc: "lime, scotch bonnet oil, salt cracker, ember", lot: "Lot 0451" },
      { name: "Smoked Marlin, charred & cool", desc: "pickled grove citrus, black oil, char", lot: "Dive 600m" },
    ],
  },
  {
    course: "Course III · The Main",
    zone: "The Midnight",
    depth: "1,000 – 4,000 m",
    beat: "Total dark. You trust your own light. The glyphs begin to align.",
    pairing: "Dark, bitter, deep",
    items: [
      { name: "Reef Snapper, charred whole", desc: "plated in the dark, a bioluminescent finish poured at the table", lot: "Dive 14m" },
      { name: "Salt-Cured Cobia", desc: "three weeks under salt, blood orange, black oil", lot: "Lot 0447" },
    ],
  },
  {
    course: "Course IV",
    zone: "The Abyss · Approach",
    depth: "4,000 – 6,000 m",
    beat: "Pressure resolves into structure. The vessel enters the ruins — gates lit from within.",
    pairing: "Crisp, clean, luminous",
    items: [
      { name: "Hull Stew, cleared", desc: "cold, luminous palate-reset, saffron, brine", lot: "Daily" },
      { name: "Drowned-grove granita", desc: "citrus, sea salt, a single cold light", lot: "—" },
    ],
  },
  {
    course: "Course V · The Reveal",
    zone: "The Hadal · The Lost City",
    depth: "6,000 m +",
    beat: "Discovery. The empire ignites and the crew is welcomed. (This one lives only in the room.)",
    pairing: "Celebratory · luminous serve",
    items: [
      { name: "The Artifact", desc: "a bronzed shell that cracks to a glowing, molten center", lot: "Lot 0488" },
      { name: "Black rum cake & digestif", desc: "molasses pulled from the wreck stores, a token to carry out", lot: "Lot 0009" },
    ],
  },
];

export const PAIRING_NOTE =
  "Wine and rum pairings poured from the wreck cellar, each a beat ahead of its plate. A zero-proof tide list is logged for every seating.";

// Per the blueprint's withhold rule: the final reveal lives only in the room.
export const WITHHOLD_NOTE =
  "The fifth course — the city itself — is never shown here. It surfaces once, at your table, and nowhere else.";
