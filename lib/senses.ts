// ============================================================
// SVNKEN CITY · THE FIVE SENSES
// The marketing told through the senses, in the house voice with a
// 20,000-Leagues × Dante's-Inferno × Cirque edge: epic, a little
// infernal, theatrical to the bone.
// ============================================================

export interface Sense {
  sense: string;
  tag: string;
  title: string;
  body: string;
}

export const SENSES: Sense[] = [
  {
    sense: "Sight",
    tag: "What you see",
    title: "Lost ruins, lit from within",
    body: "Drowned colonnades and broken altars rise out of the dark, glowing like a city that refused to stay buried. Aerialists move through the ruin as creatures of the deep — part Verne expedition, part Cirque fever dream.",
  },
  {
    sense: "Sound",
    tag: "What you hear",
    title: "Epic, electric, infernal",
    body: "An original score built for the room — cinematic swells, heavy-metal weight, and exotic electronic pulse. The bass of the festival run through the bones of a cathedral organ, climbing as the night goes deeper.",
  },
  {
    sense: "Scent",
    tag: "What you breathe",
    title: "Salt air and coastal wind",
    body: "Salt sea air and a coastal breeze move through the room — brine, citrus off the drowned grove, woodsmoke from the wreck bar. The deep has a smell, and we bottled it.",
  },
  {
    sense: "Taste",
    tag: "What you eat",
    title: "Global fusion, modern comfort",
    body: "Five courses of global fusion and modern comfort, pulled from the water and plated for the deep — a table that travels the world without ever leaving the seabed.",
  },
  {
    sense: "Touch",
    tag: "What you feel",
    title: "Wood, rope, sand, and brine",
    body: "Reclaimed wood, raked sand, salt-stiff sailcloth, weathered rope, and tropical green grown over the wreck. Everything in the room has been somewhere — and survived it.",
  },
];

export const SENSES_INTRO =
  "Twenty thousand leagues down, the world doesn't dim — it sharpens. We built this one for all five senses at once.";
