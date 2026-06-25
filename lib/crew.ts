// ============================================================
// SVNKEN CITY · THE EXPEDITION CREW (public-facing)
// The team that runs the descent, framed as an expedition roster.
// Names are withheld until the run; roles are real.
// ============================================================

export interface CrewMember {
  role: string;
  /** expedition-style title */
  rank: string;
  bio: string;
  /** depth-tag flavor */
  station: string;
}

export const CREW: CrewMember[] = [
  {
    role: "Expedition Lead",
    rank: "Chief Scientist · Host",
    bio: "Your narrator and dockmaster. Threads the night's field dispatches from the surface down to the city, and never breaks the descent.",
    station: "The Bridge",
  },
  {
    role: "Executive Chef",
    rank: "Galley Command",
    bio: "Builds the five-course descent from whatever the divers bring up — one plate per depth zone, the catch dictating the manifest.",
    station: "The Pass",
  },
  {
    role: "Creative Director",
    rank: "World Architect",
    bio: "Owns the look of the deep — the salvage scenic, the lantern light, the glyphs that wake on the recovered shards.",
    station: "Scenic",
  },
  {
    role: "Show Director",
    rank: "Run of Show",
    bio: "Keeps the room moving on the 90-minute clock so the tight turns read as intention, not rush. Calls every cue.",
    station: "FOH",
  },
  {
    role: "Music Director",
    rank: "The Soundscape",
    bio: "Scores the dive — an original bed that low-passes and deepens with the descent, then ignites at the reveal.",
    station: "The Deck",
  },
  {
    role: "Company of Performers",
    rank: "Aerial · Hand-balance · Contortion",
    bio: "The creatures of each zone — silk fish, aerial jellyfish, the lone anglerfish lure, the ray that glides through the abyss.",
    station: "The Water",
  },
];

export const CREW_NOTE =
  "An XPMS production of Salvage City Supper Club. Crew the run yourself — see open roles on the careers page.";
