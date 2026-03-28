/**
 * SkillsScroll Component
 * Design: AAA Cinematic Dark — Logo Purple Theme
 * Fixed layout: Tab-based category switcher + animated skill grid
 * No sticky-scroll height issues — compact and reliable
 */

import { useState, useRef, useEffect } from "react";
import { skills } from "@/data/portfolio";

const CATEGORIES = Object.entries(skills);

const CATEGORY_META: Record<string, { icon: string; color: string; desc: string; accent: string }> = {
  "3D Art & Modeling": {
    icon: "◈",
    color: "oklch(0.65 0.28 290)",
    accent: "oklch(0.75 0.22 290)",
    desc: "From concept sculpts to production-ready assets — every polygon tells a story.",
  },
  "Game Engines & Real-Time": {
    icon: "⬡",
    color: "oklch(0.72 0.18 210)",
    accent: "oklch(0.80 0.16 210)",
    desc: "Optimizing worlds for 60fps+ across Unity and Unreal Engine pipelines.",
  },
  "XR Development": {
    icon: "◉",
    color: "oklch(0.60 0.24 300)",
    accent: "oklch(0.70 0.20 300)",
    desc: "Building spatial experiences for Meta Quest, HoloLens 2, and Magic Leap 2.",
  },
  "Software & Tools": {
    icon: "⬟",
    color: "oklch(0.68 0.20 260)",
    accent: "oklch(0.78 0.16 260)",
    desc: "Industry-standard tools wielded with precision and creative mastery.",
  },
};

export function SkillsScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (i: number) => {
    setActiveIndex(i);
    setAnimKey(k => k + 1);
  };

  const [catName, catSkills] = CATEGORIES[activeIndex];
  const meta = CATEGORY_META[catName] || CATEGORY_META["Software & Tools"];

  return (
    <div ref={ref} className="container pb-20">
      {/* ── Tab bar ─────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map(([name], i) => {
          const m = CATEGORY_META[name] || CATEGORY_META["Software & Tools"];
          const isActive = i === activeIndex;
          return (
            <button
              key={name}
              onClick={() => handleTabChange(i)}
              className="relative flex items-center gap-2.5 px-5 py-3 rounded-xl transition-all duration-400"
              style={{
                background: isActive ? `${m.color}14` : "oklch(0.10 0.02 280 / 0.6)",
                border: `1px solid ${isActive ? m.color + "50" : "oklch(0.18 0.03 280)"}`,
                transform: isActive ? "translateY(-2px)" : "translateY(0)",
                boxShadow: isActive ? `0 6px 24px ${m.color}18` : "none",
                opacity: visible ? 1 : 0,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <span className="text-lg leading-none" style={{ color: isActive ? m.color : "oklch(0.38 0.04 280)" }}>
                {m.icon}
              </span>
              <span
                className="text-xs font-heading font-semibold tracking-wide uppercase"
                style={{ color: isActive ? m.color : "oklch(0.55 0.04 280)" }}
              >
                {name}
              </span>
              {isActive && (
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{ background: m.color, boxShadow: `0 0 8px ${m.color}` }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Skills panel ────────────────────────────── */}
      <div
        key={animKey}
        className="rounded-2xl overflow-hidden"
        style={{
          background: "oklch(0.09 0.02 280 / 0.8)",
          backdropFilter: "blur(20px)",
          border: `1px solid ${meta.color}22`,
          boxShadow: `0 0 60px ${meta.color}08`,
          animation: "skillPanelIn 0.4s ease-out forwards",
        }}
      >
        {/* Top accent bar */}
        <div
          className="h-0.5 w-full"
          style={{ background: `linear-gradient(90deg, ${meta.color}, ${meta.accent}, oklch(0.72 0.18 210 / 0.3), transparent)` }}
        />

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex items-start gap-5 mb-8">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{
                background: `${meta.color}12`,
                border: `1px solid ${meta.color}35`,
                boxShadow: `0 0 24px ${meta.color}15`,
              }}
            >
              {meta.icon}
            </div>
            <div>
              <h3
                className="font-display text-3xl md:text-4xl leading-none mb-1"
                style={{ color: meta.color, textShadow: `0 0 24px ${meta.color}50` }}
              >
                {catName.toUpperCase()}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-lg">
                {meta.desc}
              </p>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {(catSkills as string[]).map((skill, i) => (
              <div
                key={skill}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5"
                style={{
                  background: `${meta.color}07`,
                  border: `1px solid ${meta.color}18`,
                  animation: `skillItemIn 0.35s ease-out ${i * 45}ms both`,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-[2]"
                  style={{ background: meta.color, boxShadow: `0 0 6px ${meta.color}` }}
                />
                <span className="text-sm font-heading text-foreground/80 group-hover:text-foreground transition-colors leading-tight">
                  {skill}
                </span>
              </div>
            ))}
          </div>

          {/* Skill count badge */}
          <div className="mt-6 flex items-center gap-2">
            <div
              className="h-px flex-1"
              style={{ background: `linear-gradient(90deg, ${meta.color}30, transparent)` }}
            />
            <span
              className="text-xs font-accent tracking-widest px-3 py-1 rounded-full"
              style={{
                color: meta.color,
                background: `${meta.color}10`,
                border: `1px solid ${meta.color}25`,
              }}
            >
              {(catSkills as string[]).length} TOOLS
            </span>
          </div>
        </div>

        {/* Decorative corner glow */}
        <div
          className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
          style={{ background: `radial-gradient(circle at top right, ${meta.color}0a 0%, transparent 65%)` }}
        />
      </div>

      <style>{`
        @keyframes skillPanelIn {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes skillItemIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
