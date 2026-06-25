// ============================================================
// SVNKEN CITY · SHOW SCHEDULE
// On-sale run overlapping EDC Orlando, Nov 2026, at Lot54, The Vanguard.
// Soft Opening 11/4 (2 shows) → festival run 11/5–11/8 (3 shows/night,
// wrapped in the EDC weekend program) → closing 11/9 (2 shows).
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
  /** festival nights also run the pregame / shuttle / afterparty program */
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
    blurb: "Two preview descents as the city surfaces for the first time. Reduced fare, full five-course voyage.",
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
    label: "Festival Run",
    blurb: "Three descents nightly, inside the EDC weekend program — pregame, shuttles, and afterparty.",
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
    label: "Festival Run",
    blurb: "Three descents nightly. Friday tides run loud — book early.",
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
    label: "Festival Run",
    blurb: "Three descents nightly. The biggest night of the run.",
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
    label: "Festival Run",
    blurb: "Three descents nightly, with the full EDC weekend program.",
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
    blurb: "Two final descents before the water takes the city back.",
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

// Per-seat fare by day kind (soft-opening preview seats are reduced).
export const FARES = { softOpening: 95, standard: 145 } as const;

export function fareFor(kind: ShowDay["kind"]): number {
  return kind === "soft-opening" ? FARES.softOpening : FARES.standard;
}

// ----------------------------------------------------------
// EDC WEEKEND PROGRAM (festival nights, Nov 5–8)
// The three touchpoints that wrap the dinner on festival nights.
// ----------------------------------------------------------
export interface ProgramBeat {
  time: string;
  title: string;
  detail: string;
}

export const WEEKEND_PROGRAM: ProgramBeat[] = [
  {
    time: "3:00 – 5:00 PM",
    title: "Pregame & Festival Shuttles",
    detail:
      "The SVNKEN CITY × EDC Orlando × The Vanguard pregame opens at Lot54 — drinks, sound, and shuttles running to the festival gates.",
  },
  {
    time: "5:00 · 6:30 · 8:00 PM",
    title: "The Descent — Dinner Seatings",
    detail: "Three seatings of the five-course voyage below the waterline. Pick your tide on the schedule below.",
  },
  {
    time: "After the last seating",
    title: "Exit Shuttles & Afterparty",
    detail:
      "Shuttles run back from EDC Orlando to Lot54, where the afterparty carries the night past the surface. Dinner guests get the door.",
  },
];

export const WEEKEND_DATES = "Festival nights · Nov 5 – 8";
