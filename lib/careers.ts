// ============================================================
// SVNKEN CITY · CREW MANIFEST (careers)
// Roles organized by XPMS department, drawn from the Salvage City
// Supper Club staffing records (GHXSTSHIP productions, EDSEA25 /
// EDCLV26.SC rosters). Hiring for the EDC Orlando run.
// ============================================================

export type Commitment = "Run crew" | "Department lead" | "Seasonal" | "Contract";

export interface Department {
  code: string; // XPMS department code
  name: string;
  blurb: string;
  roles: string[];
}

// The twelve XPMS departments, in run-of-show order.
export const DEPARTMENTS: Department[] = [
  {
    code: "XP-EXEC",
    name: "Executive",
    blurb: "The producers who carry the budget, the books, and the room's reason to exist.",
    roles: ["Executive Producer / F&B Director", "Finance Director", "Executive Accountant"],
  },
  {
    code: "XP-PROD",
    name: "Production",
    blurb: "The crew that builds, schedules, and runs the operation end to end.",
    roles: [
      "Producer / Operations Director",
      "Project Director / Production Director",
      "Production Manager",
      "Project Coordinator / Logistics Manager",
      "Production Crew — Heavy Equipment",
      "Production Crew — Skilled",
      "Production Assistant — Transport",
      "Production Assistant — Merch",
      "Production Assistant — Driver",
    ],
  },
  {
    code: "XP-CRTV",
    name: "Creative",
    blurb: "The hands that draw the wreck — set, story, and sound design.",
    roles: ["Creative Director", "Scenic Designer", "Graphic Designer", "Music Producer"],
  },
  {
    code: "XP-ENT",
    name: "Entertainment",
    blurb: "The company that performs the voyage, night after night.",
    roles: [
      "Show Director",
      "Music Director",
      "Choreographer",
      "Company Manager",
      "Costume Designer",
      "Costume & Wardrobe Supervisor",
      "Makeup Artist",
      "Vocalists",
      "Dancers",
      "Theatrical Performers",
      "Specialty Performers",
      "Understudies / Swings",
      "Musicians / DJs",
    ],
  },
  {
    code: "XP-TECH",
    name: "Technical",
    blurb: "The board ops and stage crew who make the room move.",
    roles: [
      "Technical Director / Theatrical Director",
      "Stage Manager",
      "Audio Engineers",
      "Lighting Operators",
      "Video Technician",
      "Stage Crew",
    ],
  },
  {
    code: "XP-CUL",
    name: "Culinary",
    blurb: "The kitchen that turns the catch into the manifest.",
    roles: ["Executive Chef", "Sous Chef", "Line Cooks", "Prep & Culinary Staff", "Steward / Dish"],
  },
  {
    code: "XP-BEV",
    name: "Beverage",
    blurb: "The wreck bar — pours from the cellar, zero-proof tide list and all.",
    roles: ["Bar Manager", "Bartenders", "Barbacks", "Bar Staff"],
  },
  {
    code: "XP-OPS",
    name: "Operations",
    blurb: "Front of house — the faces that seat the room and keep the night moving.",
    roles: ["Venue Manager", "Floor Manager", "Door Manager", "Event Coordinator", "Guest Experience Staff", "Servers"],
  },
  {
    code: "XP-MKTG",
    name: "Marketing",
    blurb: "The crew that tells the world the city has surfaced.",
    roles: ["Marketing & Media Manager", "Social Media Manager"],
  },
  {
    code: "XP-MEDIA",
    name: "Media",
    blurb: "The eyes on the room — capture for the gallery and the archive.",
    roles: ["Photographer", "Videographer", "Drone Pilot"],
  },
  {
    code: "XP-SAFE",
    name: "Public Safety",
    blurb: "The crew that keeps the harbor safe through the run.",
    roles: ["Public Safety Director", "Security Guards"],
  },
  {
    code: "XP-FAC",
    name: "Facilities",
    blurb: "The unseen crew that keeps the wreck standing and clean.",
    roles: ["Janitorial Staff", "Restroom Attendants"],
  },
];

export const SENIORITY_TIERS = [
  ["Producer / Director", "Carry the department — budget, hiring, and the call on the night."],
  ["Manager / Supervisor", "Run a station or a shift; answer to a director."],
  ["Coordinator", "Keep the schedule, the logistics, and the paperwork moving."],
  ["Crew / Staff / Assistant", "The hands on the floor — where most of the run is hired."],
] as const;

export function totalRoles(): number {
  return DEPARTMENTS.reduce((n, d) => n + d.roles.length, 0);
}
