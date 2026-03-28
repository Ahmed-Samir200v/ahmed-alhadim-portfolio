/**
 * SkillsScroll Component
 * Scroll-based sticky experience:
 * - User scrolls while section stays fixed
 * - Each skill category transitions in with creative animations
 * - Category indicator on left, skills panel on right
 * - Purple/cyan color scheme from logo
 */

import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/portfolio";

const CATEGORIES = Object.entries(skills);

const CATEGORY_META: Record<string, { icon: string; color: string; desc: string }> = {
  "3D Art & Modeling": {
    icon: "◈",
    color: "oklch(0.65 0.28 290)",
    desc: "From concept sculpts to production-ready assets — every polygon tells a story.",
  },
  "Game Engines & Real-Time": {
    icon: "⬡",
    color: "oklch(0.72 0.18 210)",
    desc: "Optimizing worlds for 60fps+ across Unity and Unreal Engine pipelines.",
  },
  "XR Development": {
    icon: "◉",
    color: "oklch(0.60 0.24 300)",
    desc: "Building spatial experiences for Meta Quest, HoloLens 2, and Magic Leap 2.",
  },
  "Software & Tools": {
    icon: "⬟",
    color: "oklch(0.68 0.20 260)",
    desc: "Industry-standard tools wielded with precision and creative mastery.",
  },
};

export function SkillsScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScroll = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const pct = Math.max(0, Math.min(1, scrolled / totalScroll));
      setProgress(pct);
      const idx = Math.min(
        CATEGORIES.length - 1,
        Math.floor(pct * CATEGORIES.length)
      );
      setActiveIndex(idx);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [catName, catSkills] = CATEGORIES[activeIndex];
  const meta = CATEGORY_META[catName] || { icon: "◈", color: "oklch(0.65 0.28 290)", desc: "" };

  return (
    <div
      ref={containerRef}
      style={{ height: `${CATEGORIES.length * 100}vh` }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="skills-panel flex items-center justify-center overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse at 60% 50%, ${meta.color}18 0%, transparent 65%)`,
          }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">

            {/* Left: Category nav */}
            <div className="lg:col-span-4 space-y-2">
              {CATEGORIES.map(([name], i) => {
                const m = CATEGORY_META[name] || { icon: "◈", color: "oklch(0.65 0.28 290)", desc: "" };
                const isActive = i === activeIndex;
                return (
                  <div
                    key={name}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-500 cursor-default"
                    style={{
                      background: isActive ? `${m.color}12` : "transparent",
                      border: `1px solid ${isActive ? m.color + "40" : "transparent"}`,
                      transform: isActive ? "translateX(8px)" : "translateX(0)",
                    }}
                  >
                    <span
                      className="text-2xl font-display transition-all duration-500"
                      style={{ color: isActive ? m.color : "oklch(0.40 0.04 280)", fontSize: "1.4rem" }}
                    >
                      {m.icon}
                    </span>
                    <div>
                      <p
                        className="font-heading text-sm font-semibold tracking-wide transition-all duration-500"
                        style={{ color: isActive ? m.color : "oklch(0.50 0.04 280)" }}
                      >
                        {name}
                      </p>
                      {isActive && (
                        <p className="text-xs text-muted-foreground mt-0.5 font-body leading-relaxed max-w-[220px]">
                          {m.desc}
                        </p>
                      )}
                    </div>
                    {isActive && (
                      <div
                        className="ml-auto w-1.5 h-8 rounded-full"
                        style={{ background: m.color, boxShadow: `0 0 10px ${m.color}` }}
                      />
                    )}
                  </div>
                );
              })}

              {/* Progress bar */}
              <div className="mt-6 h-1 rounded-full bg-border/30 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${progress * 100}%`,
                    background: `linear-gradient(90deg, oklch(0.55 0.28 290), oklch(0.72 0.18 210))`,
                    boxShadow: "0 0 8px oklch(0.55 0.28 290 / 0.6)",
                  }}
                />
              </div>
            </div>

            {/* Right: Skills display */}
            <div className="lg:col-span-8">
              <div
                key={activeIndex}
                className="glass-card rounded-2xl p-8"
                style={{
                  animation: "skillsIn 0.5s ease-out forwards",
                  borderColor: `${meta.color}30`,
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
                    style={{
                      background: `${meta.color}15`,
                      border: `1px solid ${meta.color}40`,
                      boxShadow: `0 0 20px ${meta.color}20`,
                    }}
                  >
                    {meta.icon}
                  </div>
                  <div>
                    <h3
                      className="font-display text-3xl"
                      style={{ color: meta.color, textShadow: `0 0 20px ${meta.color}60` }}
                    >
                      {catName.toUpperCase()}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body mt-1">{meta.desc}</p>
                  </div>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {(catSkills as string[]).map((skill, i) => (
                    <div
                      key={skill}
                      className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105"
                      style={{
                        background: `${meta.color}08`,
                        border: `1px solid ${meta.color}20`,
                        animation: `skillItemIn 0.4s ease-out ${i * 60}ms both`,
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150"
                        style={{
                          background: meta.color,
                          boxShadow: `0 0 6px ${meta.color}`,
                        }}
                      />
                      <span className="text-sm font-heading text-foreground/85 group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative corner */}
                <div
                  className="absolute top-4 right-4 w-16 h-16 opacity-20"
                  style={{
                    background: `radial-gradient(circle, ${meta.color} 0%, transparent 70%)`,
                    filter: "blur(8px)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes skillsIn {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes skillItemIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
