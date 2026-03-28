/**
 * ExperienceTimeline Component
 * Creative non-standard experience display:
 * - Horizontal cinematic timeline with central glowing spine
 * - Each role is a "mission card" that expands on hover
 * - Staggered entrance animations
 * - Purple/cyan color scheme from logo
 */

import { useState, useRef, useEffect } from "react";
import { experience } from "@/data/portfolio";

const COMPANY_COLORS: Record<string, string> = {
  "Ekson":                        "oklch(0.65 0.28 290)",
  "IT-Corner Dubai":              "oklch(0.72 0.18 210)",
  "SPARK td (US)":                "oklch(0.60 0.24 300)",
  "Harmony International Schools":"oklch(0.68 0.20 260)",
};

const COMPANY_ICONS: Record<string, string> = {
  "Ekson":                        "01",
  "IT-Corner Dubai":              "02",
  "SPARK td (US)":                "03",
  "Harmony International Schools":"04",
};

export function ExperienceTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const active = experience[activeIdx];
  const color = COMPANY_COLORS[active.company] || "oklch(0.65 0.28 290)";

  return (
    <div ref={ref} className="relative">
      {/* ── Top: Company selector ── */}
      <div className="flex flex-wrap gap-3 mb-10">
        {experience.map((exp, i) => {
          const c = COMPANY_COLORS[exp.company] || "oklch(0.65 0.28 290)";
          const isActive = i === activeIdx;
          return (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="relative flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-400 group"
              style={{
                background: isActive ? `${c}12` : "oklch(0.10 0.02 280 / 0.5)",
                border: `1px solid ${isActive ? c + "50" : "oklch(0.20 0.04 280)"}`,
                transform: isActive ? "translateY(-2px)" : "translateY(0)",
                boxShadow: isActive ? `0 4px 20px ${c}20` : "none",
                opacity: visible ? 1 : 0,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <span
                className="font-accent text-xs"
                style={{ color: isActive ? c : "oklch(0.45 0.04 280)" }}
              >
                {COMPANY_ICONS[exp.company]}
              </span>
              <div className="text-left">
                <p
                  className="font-heading text-sm font-semibold transition-colors"
                  style={{ color: isActive ? c : "oklch(0.70 0.04 280)" }}
                >
                  {exp.company}
                </p>
                <p className="text-xs text-muted-foreground font-body">{exp.title}</p>
              </div>
              {isActive && (
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{ background: c, boxShadow: `0 0 8px ${c}` }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Main card ── */}
      <div
        key={activeIdx}
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "oklch(0.10 0.02 280 / 0.75)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${color}25`,
          boxShadow: `0 0 40px ${color}08`,
          animation: "expCardIn 0.45s ease-out forwards",
        }}
      >
        {/* Top accent bar */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${color}, oklch(0.72 0.18 210), transparent)` }}
        />

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div className="flex items-start gap-5">
              {/* Number badge */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${color}12`,
                  border: `1px solid ${color}35`,
                  boxShadow: `0 0 20px ${color}15`,
                }}
              >
                <span className="font-accent text-lg" style={{ color }}>
                  {COMPANY_ICONS[active.company]}
                </span>
              </div>
              <div>
                <h3
                  className="font-display text-3xl md:text-4xl leading-tight"
                  style={{ color, textShadow: `0 0 20px ${color}50` }}
                >
                  {active.title.toUpperCase()}
                </h3>
                <p className="font-heading text-lg mt-1" style={{ color: "oklch(0.72 0.18 210)" }}>
                  {active.company}
                </p>
              </div>
            </div>
            <div
              className="px-4 py-2 rounded-full font-accent text-xs tracking-widest uppercase self-start"
              style={{
                background: `${color}10`,
                border: `1px solid ${color}30`,
                color,
              }}
            >
              {active.period}
            </div>
          </div>

          {/* Responsibilities as mission items */}
          <div className="grid md:grid-cols-2 gap-4">
            {active.responsibilities.map((resp, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl group transition-all duration-300 hover:scale-[1.01]"
                style={{
                  background: `${color}06`,
                  border: `1px solid ${color}15`,
                  animation: `respIn 0.4s ease-out ${i * 80}ms both`,
                }}
              >
                {/* Index */}
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <span className="font-accent text-xs" style={{ color }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm font-body text-foreground/80 leading-relaxed group-hover:text-foreground/95 transition-colors">
                  {resp}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative corner glow */}
        <div
          className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
          style={{
            background: `radial-gradient(circle at top right, ${color}12 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none"
          style={{
            background: `radial-gradient(circle at bottom left, oklch(0.72 0.18 210 / 0.08) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Navigation dots */}
      <div className="flex items-center justify-center gap-3 mt-6">
        {experience.map((_, i) => {
          const c = COMPANY_COLORS[experience[i].company] || "oklch(0.65 0.28 290)";
          return (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="transition-all duration-300"
              style={{
                width: i === activeIdx ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === activeIdx ? c : "oklch(0.25 0.04 280)",
                boxShadow: i === activeIdx ? `0 0 8px ${c}` : "none",
              }}
            />
          );
        })}
      </div>

      <style>{`
        @keyframes expCardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes respIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
