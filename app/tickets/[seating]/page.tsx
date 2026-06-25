import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow } from "@/components/ui/Atoms";
import { SeatMap } from "@/components/site/SeatMap";
import { SHOWS, STATUS_COPY, seatingSlug, parseSeatingSlug, findSeating } from "@/lib/shows";
import { getSeatingInventory } from "@/lib/inventory";

export function generateStaticParams() {
  return SHOWS.flatMap((d) => d.seatings.map((s) => ({ seating: seatingSlug(d.date, s.time24) })));
}

export function generateMetadata({ params }: { params: { seating: string } }): Metadata {
  const parsed = parseSeatingSlug(params.seating);
  const found = parsed && findSeating(parsed.date, parsed.time24);
  if (!found) return { title: "Select Seats" };
  return {
    title: `${found.day.display} · ${found.seating.time} · Select Seats`,
    description: `Choose your seats and section for the ${found.day.display} ${found.seating.time} voyage at SVNKEN CITY.`,
  };
}

function statusTone(s: string) {
  if (s === "sold-out") return "full" as const;
  if (s === "limited") return "brass" as const;
  return "available" as const;
}

export default function SeatingPage({ params }: { params: { seating: string } }) {
  const parsed = parseSeatingSlug(params.seating);
  if (!parsed) notFound();
  const found = findSeating(parsed.date, parsed.time24);
  if (!found) notFound();
  const inventory = getSeatingInventory(parsed.date, parsed.time24);
  if (!inventory) notFound();

  const { day, seating } = found;

  return (
    <>
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Link href="/tickets" className="sc-label" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
            ← All dates &amp; times
          </Link>
        </div>
      </section>

      <section className="sc-deep sc-grain" style={{ position: "relative", overflow: "hidden", padding: "56px 24px 40px", textAlign: "center" }}>
        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }}>
          <Eyebrow style={{ marginBottom: "14px" }}>Select Your Seats</Eyebrow>
          <h1 className="sc-display" style={{ color: "var(--text-strong)", marginBottom: "16px" }}>
            {day.display} · {seating.time}
          </h1>
          <div className="row-center" style={{ gap: "10px" }}>
            <Tag tone="brass">{day.label}</Tag>
            <Badge tone={statusTone(inventory.status)} dot>{STATUS_COPY[inventory.status]}</Badge>
            <Badge tone="neutral">{inventory.totalAvailable} of {inventory.totalCapacity} seats left</Badge>
            <Badge tone="patina">From ${inventory.fromPrice}</Badge>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SeatMap inventory={inventory} display={day.display} time={seating.time} buyUrl={seating.buyUrl} />
          <p className="sc-small sc-italic" style={{ color: "var(--text-faint)", textAlign: "center", marginTop: "24px", maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
            Availability shown live. Seats are released from your hold if you don&rsquo;t check out — and pairings, tables, and merch can be
            added to the same hold from the tickets page.
          </p>
        </div>
      </section>
    </>
  );
}
