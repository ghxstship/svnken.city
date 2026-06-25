// ============================================================
// SVNKEN CITY · LIGHTWEIGHT SUBMISSION STORE
// Appends JSON lines under /public/data (gitignored). Stands in
// for a real CRM/ESP — swap appendRecord() for your provider
// (Klaviyo, Resend, Supabase, etc.) at launch.
// ============================================================
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "public", "data");

export interface StoredRecord {
  type: "waitlist" | "contact";
  at: string;
  [k: string]: unknown;
}

export async function appendRecord(file: string, record: StoredRecord): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const target = path.join(DATA_DIR, file);
    await fs.appendFile(target, JSON.stringify(record) + "\n", "utf8");
  } catch (err) {
    // Never let storage failure break the user-facing response; log instead.
    console.error("[store] failed to append record:", err);
  }
}

export function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}
