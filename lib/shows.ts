// ============================================================
// SVNKEN CITY · SHOW SCHEDULE
// Six-night run, Nov 2026, at Lot54, The Vanguard, downtown Orlando.
// Soft Opening 11/4 (2 shows) → main run 11/5–11/8 (3 shows/night,
// with the after-hours program) → closing 11/9 (2 shows).
// ============================================================

export type SeatingStatus = "open" | "limited" | "sold-out";

export interface Seating {
  /** 24h time, e.g. "18:30" — drives sorting & buy links */
  time24: string;
  /** display time, e.g. "6:30 PM" */
  time: string;
  status: SeatingStatus;
  /** Speakeasy event/checkout link for this specific seating */
  buyUrl: string;
}

export interface ShowDay {
  /** ISO date */
  date: string;
  weekday: string;
  display: string; // "Wed · Nov 4"
  kind: "soft-opening" | "main" | "closing";
  label: string;
  blurb: string;
  /** main-run nights also run the after-hours program (bar + afterparty) */
  festivalProgram: boolean;
  seatings: Seating[];
}

const buy = (slug: string) => `${"https://www.speakeasy.io/svnken-city"}/${slug}`;

export const SHOWS: ShowDay[] = [
  {
    date: "2026-11-04",
    weekday: "Wednesday",
    display: "Wed · Nov 4",
    kind: "soft-opening",
    label: "Soft Opening",
    blurb: "Two preview voyages as the city surfaces for the first time. Reduced fare, full five-course voyage.",
    festivalProgram: false,
    seatings: [
      { time24: "18:30", time: "6:30 PM", status: "limited", buyUrl: buy("nov-4-630pm") },
      { time24: "20:00", time: "8:00 PM", status: "open", buyUrl: buy("nov-4-800pm") },
    ],
  },
  {
    date: "2026-11-05",
    weekday: "Thursday",
    display: "Thu · Nov 5",
    kind: "main",
    label: "The Run",
    blurb: "Three voyages nightly, with the wreck bar before and a late afterparty after.",
    festivalProgram: true,
    seatings: [
      { time24: "17:00", time: "5:00 PM", status: "open", buyUrl: buy("nov-5-500pm") },
      { time24: "18:30", time: "6:30 PM", status: "open", buyUrl: buy("nov-5-630pm") },
      { time24: "20:00", time: "8:00 PM", status: "limited", buyUrl: buy("nov-5-800pm") },
    ],
  },
  {
    date: "2026-11-06",
    weekday: "Friday",
    display: "Fri · Nov 6",
    kind: "main",
    label: "The Run",
    blurb: "Three voyages nightly. Friday tides run loud — book early.",
    festivalProgram: true,
    seatings: [
      { time24: "17:00", time: "5:00 PM", status: "open", buyUrl: buy("nov-6-500pm") },
      { time24: "18:30", time: "6:30 PM", status: "limited", buyUrl: buy("nov-6-630pm") },
      { time24: "20:00", time: "8:00 PM", status: "sold-out", buyUrl: buy("nov-6-800pm") },
    ],
  },
  {
    date: "2026-11-07",
    weekday: "Saturday",
    display: "Sat · Nov 7",
    kind: "main",
    label: "The Run",
    blurb: "Three voyages nightly. The biggest night of the run.",
    festivalProgram: true,
    seatings: [
      { time24: "17:00", time: "5:00 PM", status: "limited", buyUrl: buy("nov-7-500pm") },
      { time24: "18:30", time: "6:30 PM", status: "sold-out", buyUrl: buy("nov-7-630pm") },
      { time24: "20:00", time: "8:00 PM", status: "sold-out", buyUrl: buy("nov-7-800pm") },
    ],
  },
  {
    date: "2026-11-08",
    weekday: "Sunday",
    display: "Sun · Nov 8",
    kind: "main",
    label: "The Run",
    blurb: "Three voyages nightly, with the full after-hours program.",
    festivalProgram: true,
    seatings: [
      { time24: "17:00", time: "5:00 PM", status: "open", buyUrl: buy("nov-8-500pm") },
      { time24: "18:30", time: "6:30 PM", status: "open", buyUrl: buy("nov-8-630pm") },
      { time24: "20:00", time: "8:00 PM", status: "limited", buyUrl: buy("nov-8-800pm") },
    ],
  },
  {
    date: "2026-11-09",
    weekday: "Monday",
    display: "Mon · Nov 9",
    kind: "closing",
    label: "Closing Night",
    blurb: "Two final voyages before the water takes the city back.",
    festivalProgram: false,
    seatings: [
      { time24: "18:30", time: "6:30 PM", status: "limited", buyUrl: buy("nov-9-630pm") },
      { time24: "20:00", time: "8:00 PM", status: "open", buyUrl: buy("nov-9-800pm") },
    ],
  },
];

export const RUN_LABEL = "Nov 4 – 9, 2026 · Lot54, The Vanguard · Orlando";

export const STATUS_COPY: Record<SeatingStatus, string> = {
  open: "Open",
  limited: "Few Left",
  "sold-out": "Sold Out",
};

export function totalSeatings(): number {
  return SHOWS.reduce((n, d) => n + d.seatings.length, 0);
}

// Lowest fare by day kind — the "from" price (soft-opening nights are
// a single open-floor fare; main/closing nights start at The Manifest).
export const FARES = { softOpening: 129, standard: 169 } as const;

export function fareFor(kind: ShowDay["kind"]): number {
  return kind === "soft-opening" ? FARES.softOpening : FARES.standard;
}

/** URL-safe slug for a seating, e.g. "2026-11-05-2000". */
export function seatingSlug(date: string, time24: string): string {
  return `${date}-${time24.replace(":", "")}`;
}

/** Parse a seating slug back to { date, time24 }. */
export function parseSeatingSlug(slug: string): { date: string; time24: string } | null {
  const m = slug.match(/^(\d{4}-\d{2}-\d{2})-(\d{2})(\d{2})$/);
  if (!m) return null;
  return { date: m[1], time24: `${m[2]}:${m[3]}` };
}

export function findSeating(date: string, time24: string): { day: ShowDay; seating: Seating } | null {
  const day = SHOWS.find((d) => d.date === date);
  const seating = day?.seatings.find((s) => s.time24 === time24);
  return day && seating ? { day, seating } : null;
}

// ----------------------------------------------------------
// AFTER HOURS (main-run nights, Nov 5–8)
// The house's own programming that wraps the dinner — bar, voyage, afterparty.
// ----------------------------------------------------------
export interface ProgramBeat {
  time: string;
  title: string;
  detail: string;
}

export const WEEKEND_PROGRAM: ProgramBeat[] = [
  {
    time: "From 4:00 PM",
    title: "The Wreck Bar Opens",
    detail: "Doors and the wreck bar open before the first seating — drinks, sound, and a slow sink into the deep.",
  },
  {
    time: "5:00 · 6:30 · 8:00 PM",
    title: "The Voyage — Dinner Seatings",
    detail: "Three seatings of the five-course voyage below the waterline. Pick your tide on the schedule below.",
  },
  {
    time: "After the last seating",
    title: "The Afterparty",
    detail: "When the last plate clears, the room turns — a late afterparty below the waterline. Dinner guests get the door.",
  },
];

export const WEEKEND_DATES = "Main nights · Nov 5 – 8";
