import React from "react";
import { SITE } from "@/lib/site";

const ICONS: Record<string, React.ReactNode> = {
  Instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  TikTok: <path d="M14 3v8.5a3.5 3.5 0 1 1-3-3.46M14 3a5 5 0 0 0 5 5" />,
  X: <path d="M4 4l16 16M20 4L4 20" />,
  YouTube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path d="M10.5 9.2l4.4 2.8-4.4 2.8z" fill="currentColor" stroke="none" />
    </>
  ),
  Facebook: <path d="M14.5 8.5h2V5.5h-2.2c-1.7 0-2.8 1.1-2.8 2.9V10H9.5v3h2v8h3v-8h2.2l.3-3h-2.5V8.9c0-.3.2-.4.5-.4z" />,
};

export function SocialLinks({
  size = 38,
  gap = 12,
  style,
}: {
  size?: number;
  gap?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ display: "flex", gap, flexWrap: "wrap", ...style }}>
      {SITE.social.map((s) => (
        <a
          key={s.platform}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${s.platform} — ${s.handle}`}
          title={`${s.platform} · ${s.handle}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: size,
            height: size,
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--line-strong)",
            color: "var(--brass-400)",
            background: "color-mix(in oklab, var(--abyss-900) 40%, transparent)",
            transition: "border-color var(--dur-fast) var(--ease-tide), color var(--dur-fast) var(--ease-tide)",
          }}
        >
          <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {ICONS[s.platform]}
          </svg>
        </a>
      ))}
    </div>
  );
}
