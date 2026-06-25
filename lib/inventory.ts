// ============================================================
// SVNKEN CITY · SEAT INVENTORY (deterministic, no backend)
// Each 150-seat seating is split into priced sections. Whether a seat
// is taken is a pure function of (date, time, section, index) + the
// seating's status — so the "live availability" is stable across every
// render (no hydration drift) and reads like a real seat map. Swap
// `seatTaken()` for a live inventory feed when one exists.
// ============================================================

import { SHOWS, type SeatingStatus, type ShowDay } from "@/lib/shows";

export type TierKey = "softOpening" | "standard" | "chefsPass" | "captains";

export interface SectionDef {
  id: string;
  name: string;
  tier: TierKey;
  price: number;
  blurb: string;
  cols: number;
  count: number;
}

// Main + closing nights: three priced sections (150 total).
export const MAIN_SECTIONS: SectionDef[] = [
  { id: "captains", name: "Captain's Table", tier: "captains", price: 299, blurb: "Front rail · pairing · welcome pour", cols: 10, count: 20 },
  { id: "chefs", name: "Chef's Pass", tier: "chefsPass", price: 229, blurb: "The counter at the pass", cols: 14, count: 14 },
  { id: "manifest", name: "The Manifest", tier: "standard", price: 169, blurb: "The long communal tables", cols: 15, count: 116 },
];

// Soft-opening nights: one open-floor fare.
export const PREVIEW_SECTIONS: SectionDef[] = [
  { id: "preview", name: "Preview Floor", tier: "softOpening", price: 129, blurb: "Preview night · one fare", cols: 15, count: 150 },
];

export function sectionsForKind(kind: ShowDay["kind"]): SectionDef[] {
  return kind === "soft-opening" ? PREVIEW_SECTIONS : MAIN_SECTIONS;
}

// ---- deterministic availability --------------------------------------

// FNV-1a → unit float in [0, 1)
function hashUnit(str: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return (h % 100000) / 100000;
}

// Base fill (fraction of seats already sold) by seating status.
const STATUS_FILL: Record<SeatingStatus, number> = {
  open: 0.4,
  limited: 0.8,
  "sold-out": 1,
};

// Premium sections sell a little hotter.
const SECTION_BIAS: Record<string, number> = { captains: 0.1, chefs: 0.06, manifest: 0, preview: 0 };

export function seatTaken(date: string, time24: string, sectionId: string, index: number, status: SeatingStatus): boolean {
  if (status === "sold-out") return true;
  const fill = Math.min(0.98, STATUS_FILL[status] + (SECTION_BIAS[sectionId] ?? 0));
  return hashUnit(`${date}|${time24}|${sectionId}|${index}`) < fill;
}

export interface Seat {
  id: string; // global seat id, e.g. "2026-11-05|20:00|manifest|42"
  label: string; // e.g. "C3"
  index: number;
  taken: boolean;
}

export interface SectionInventory extends SectionDef {
  seats: Seat[];
  available: number;
}

export interface SeatingInventory {
  date: string;
  time24: string;
  status: SeatingStatus;
  sections: SectionInventory[];
  totalAvailable: number;
  totalCapacity: number;
  fromPrice: number;
}

const ROW_LETTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ"; // skip I/O for legibility

export function getSeatingInventory(date: string, time24: string): SeatingInventory | null {
  const day = SHOWS.find((d) => d.date === date);
  const seating = day?.seatings.find((s) => s.time24 === time24);
  if (!day || !seating) return null;

  const defs = sectionsForKind(day.kind);
  const sections: SectionInventory[] = defs.map((def) => {
    const seats: Seat[] = Array.from({ length: def.count }, (_, i) => {
      const row = ROW_LETTERS[Math.floor(i / def.cols)] ?? "Z";
      const num = (i % def.cols) + 1;
      return {
        id: `${date}|${time24}|${def.id}|${i}`,
        label: `${row}${num}`,
        index: i,
        taken: seatTaken(date, time24, def.id, i, seating.status),
      };
    });
    return { ...def, seats, available: seats.filter((s) => !s.taken).length };
  });

  const totalAvailable = sections.reduce((n, s) => n + s.available, 0);
  const totalCapacity = sections.reduce((n, s) => n + s.count, 0);
  const fromPrice = Math.min(...sections.map((s) => s.price));

  return { date, time24, status: seating.status, sections, totalAvailable, totalCapacity, fromPrice };
}

export function seatingAvailability(date: string, time24: string): { available: number; total: number; fromPrice: number } {
  const inv = getSeatingInventory(date, time24);
  if (!inv) return { available: 0, total: 150, fromPrice: 0 };
  return { available: inv.totalAvailable, total: inv.totalCapacity, fromPrice: inv.fromPrice };
}
