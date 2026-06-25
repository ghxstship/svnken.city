// ============================================================
// SVNKEN CITY · THE DESCENT — run of show
// The canonical 90-minute clock (festival cut): eight timed blocks,
// each in a deeper ocean zone, cascading from one seated start.
// T+ is minutes from your seating time.
// ============================================================

export interface RunBlock {
  /** minutes from seated start */
  t: string;
  block: string;
  min: string;
  zone: string;
  depth: string;
  /** what happens in the room */
  beat: string;
  /** true = the protected reveal beat */
  feature?: boolean;
}

export const RUN_OF_SHOW: RunBlock[] = [
  { t: "T+0", block: "Boarding & Welcome", min: "5 min", zone: "Surface · The Dock", depth: "0 m", beat: "Crew boards, the vessel seals, a first faint signal pings below. Welcome pour." },
  { t: "T+5", block: "Course I", min: "12 min", zone: "The Sunlight", depth: "0 – 200 m", beat: "Cold crudo while the light is still ours. Silk 'fish' drift overhead." },
  { t: "T+17", block: "Course II", min: "14 min", zone: "The Twilight", depth: "200 – 1,000 m", beat: "Smoke and ember as the light fades. Aerial 'jellyfish,' a glyph flickers on a recovered shard." },
  { t: "T+31", block: "Course III · The Main", min: "16 min", zone: "The Midnight", depth: "1,000 – 4,000 m", beat: "The main, plated in darkness, finished with a light at the table. The glyphs align." },
  { t: "T+47", block: "The Feature", min: "6 min", zone: "The Abyss", depth: "4,000 – 6,000 m", beat: "The descent bottoms out and the city first rises on the horizon. The room's biggest spike.", feature: true },
  { t: "T+53", block: "Course IV", min: "10 min", zone: "Approach", depth: "→ the ruins", beat: "A luminous palate-reset as the vessel passes the ruin walls. Gates ahead, lit from within." },
  { t: "T+63", block: "Course V · The Reveal", min: "20 min", zone: "The Hadal · The Lost City", depth: "6,000 m +", beat: "The empire ignites. Dessert, digestif, and the discovery the whole night was built toward." },
  { t: "T+83", block: "Close & Release", min: "7 min", zone: "Ascent · Surface", depth: "→ 0 m", beat: "The room lifts back to warm light. A token to carry out, and you surface." },
];

export const RUNTIME_NOTE = "≈ 90 minutes, seated start to surface. Arrive 15 minutes early to board.";

// The five depth zones, for the descent overview.
export const ZONES: { name: string; depth: string; mood: string }[] = [
  { name: "The Sunlight", depth: "0 – 200 m", mood: "The light is still ours — gold, gentle, dappled." },
  { name: "The Twilight", depth: "200 – 1,000 m", mood: "Light fades to blue-violet; something watches the dark." },
  { name: "The Midnight", depth: "1,000 – 4,000 m", mood: "Total dark. You trust your own light." },
  { name: "The Abyss", depth: "4,000 – 6,000 m", mood: "Pressure, and a distant geometry resolving in the deep." },
  { name: "The Lost City", depth: "6,000 m +", mood: "The empire wakes, lit from within. The reveal." },
];
