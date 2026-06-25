import React from "react";
import { SHOWS, STATUS_COPY, fareFor, type ShowDay, type Seating } from "@/lib/shows";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { AddSeatingButton } from "@/components/site/AddSeatingButton";

function kindTone(kind: ShowDay["kind"]) {
  if (kind === "soft-opening") return "patina" as const;
  if (kind === "closing") return "ink" as const;
  return "brass" as const;
}

function statusTone(s: Seating["status"]) {
  if (s === "sold-out") return "full" as const;
  if (s === "limited") return "brass" as const;
  return "available" as const;
}

function SeatingRow({ s, day }: { s: Seating; day: ShowDay }) {
  const soldOut = s.status === "sold-out";
  const fare = fareFor(day.kind);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "14px",
        padding: "12px 14px",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--line)",
        background: soldOut ? "transparent" : "var(--surface-sunk)",
        opacity: soldOut ? 0.55 : 1,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
        <span className="sc-h4" style={{ color: "var(--text-strong)", minWidth: "72px" }}>
          {s.time}
        </span>
        <Badge tone={statusTone(s.status)} dot>
          {STATUS_COPY[s.status]}
        </Badge>
      </div>
      <AddSeatingButton
        id={`ticket:${day.date}:${s.time24}`}
        name={`${day.display} · ${s.time}`}
        price={fare}
        buyUrl={s.buyUrl}
        soldOut={soldOut}
      />
    </div>
  );
}

export function ShowSchedule() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {SHOWS.map((day) => (
        <div
          key={day.date}
          className="anchor"
          id={`day-${day.date}`}
          style={{
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-md)",
            background: "var(--surface-raised)",
            boxShadow: "var(--shadow-md)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              padding: "20px 22px",
              borderBottom: "1px solid var(--line)",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px", flexWrap: "wrap" }}>
                <h3 className="sc-h3" style={{ color: "var(--text-strong)", margin: 0 }}>
                  {day.display}
                </h3>
                <Tag tone={kindTone(day.kind)}>{day.label}</Tag>
              </div>
              <p className="sc-small" style={{ color: "var(--text-muted)", margin: 0, maxWidth: "440px" }}>
                {day.blurb}
              </p>
            </div>
            <span className="sc-tag-text" style={{ color: "var(--text-faint)" }}>
              {day.seatings.length} {day.seatings.length === 1 ? "seating" : "seatings"}
            </span>
          </div>

          <div
            style={{
              padding: "16px",
              display: "grid",
              gridTemplateColumns: day.seatings.length >= 3 ? "1fr 1fr" : "1fr",
              gap: "10px",
            }}
            className="seating-grid"
          >
            {day.seatings.map((s) => (
              <SeatingRow key={s.time24} s={s} day={day} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
