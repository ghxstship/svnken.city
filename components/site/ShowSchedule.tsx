import React from "react";
import { SHOWS, STATUS_COPY, type ShowDay, type Seating } from "@/lib/shows";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";

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

function SeatingRow({ s }: { s: Seating }) {
  const soldOut = s.status === "sold-out";
  return (
    <a
      href={soldOut ? undefined : s.buyUrl}
      target={soldOut ? undefined : "_blank"}
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "14px",
        padding: "14px 16px",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--line)",
        background: soldOut ? "transparent" : "var(--surface-sunk)",
        textDecoration: "none",
        opacity: soldOut ? 0.5 : 1,
        cursor: soldOut ? "not-allowed" : "pointer",
        transition: "border-color var(--dur-fast) var(--ease-tide)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <span className="sc-h4" style={{ color: "var(--text-strong)", minWidth: "76px" }}>
          {s.time}
        </span>
        <Badge tone={statusTone(s.status)} dot>
          {STATUS_COPY[s.status]}
        </Badge>
      </div>
      <span
        className="sc-label"
        style={{ color: soldOut ? "var(--text-faint)" : "var(--brass-400)", fontSize: "12px", whiteSpace: "nowrap" }}
      >
        {soldOut ? "Waitlist" : "Reserve →"}
      </span>
    </a>
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
              <SeatingRow key={s.time24} s={s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
