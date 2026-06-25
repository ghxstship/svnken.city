// ============================================================
// SVNKEN CITY · SHOW SCHEDULE
// On-sale run overlapping EDC Orlando, Nov 2026.
// Soft Opening 11/4 (2 shows) → main run 11/5–11/8 (4 shows/day)
// → closing night 11/9 (2 shows).
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
  display: string; // "Tue · Nov 4"
  kind: "soft-opening" | "main" | "closing";
  label: string;
  blurb: string;
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
    blurb: "Two preview seatings as the house surfaces for the first time. Reduced fare, full voyage.",
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
    label: "Opening Run",
    blurb: "Four seatings nightly. The full manifest, the full crew.",
    seatings: [
      { time24: "17:00", time: "5:00 PM", status: "open", buyUrl: buy("nov-5-500pm") },
      { time24: "18:30", time: "6:30 PM", status: "open", buyUrl: buy("nov-5-630pm") },
      { time24: "20:00", time: "8:00 PM", status: "limited", buyUrl: buy("nov-5-800pm") },
      { time24: "21:30", time: "9:30 PM", status: "open", buyUrl: buy("nov-5-930pm") },
    ],
  },
  {
    date: "2026-11-06",
    weekday: "Friday",
    display: "Fri · Nov 6",
    kind: "main",
    label: "The Run",
    blurb: "Four seatings nightly. Friday tides run loud — book early.",
    seatings: [
      { time24: "17:00", time: "5:00 PM", status: "open", buyUrl: buy("nov-6-500pm") },
      { time24: "18:30", time: "6:30 PM", status: "limited", buyUrl: buy("nov-6-630pm") },
      { time24: "20:00", time: "8:00 PM", status: "sold-out", buyUrl: buy("nov-6-800pm") },
      { time24: "21:30", time: "9:30 PM", status: "limited", buyUrl: buy("nov-6-930pm") },
    ],
  },
  {
    date: "2026-11-07",
    weekday: "Saturday",
    display: "Sat · Nov 7",
    kind: "main",
    label: "The Run",
    blurb: "Four seatings nightly. The biggest night of the run.",
    seatings: [
      { time24: "17:00", time: "5:00 PM", status: "limited", buyUrl: buy("nov-7-500pm") },
      { time24: "18:30", time: "6:30 PM", status: "sold-out", buyUrl: buy("nov-7-630pm") },
      { time24: "20:00", time: "8:00 PM", status: "sold-out", buyUrl: buy("nov-7-800pm") },
      { time24: "21:30", time: "9:30 PM", status: "limited", buyUrl: buy("nov-7-930pm") },
    ],
  },
  {
    date: "2026-11-08",
    weekday: "Sunday",
    display: "Sun · Nov 8",
    kind: "main",
    label: "The Run",
    blurb: "Four seatings nightly.",
    seatings: [
      { time24: "17:00", time: "5:00 PM", status: "open", buyUrl: buy("nov-8-500pm") },
      { time24: "18:30", time: "6:30 PM", status: "open", buyUrl: buy("nov-8-630pm") },
      { time24: "20:00", time: "8:00 PM", status: "limited", buyUrl: buy("nov-8-800pm") },
      { time24: "21:30", time: "9:30 PM", status: "open", buyUrl: buy("nov-8-930pm") },
    ],
  },
  {
    date: "2026-11-09",
    weekday: "Monday",
    display: "Mon · Nov 9",
    kind: "closing",
    label: "Closing Night",
    blurb: "Two final seatings before the water takes the room back.",
    seatings: [
      { time24: "20:00", time: "8:00 PM", status: "limited", buyUrl: buy("nov-9-800pm") },
      { time24: "21:30", time: "9:30 PM", status: "open", buyUrl: buy("nov-9-930pm") },
    ],
  },
];

export const RUN_LABEL = "Nov 4 – 9, 2026 · EDC Orlando · Tinker Field Infield";

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
