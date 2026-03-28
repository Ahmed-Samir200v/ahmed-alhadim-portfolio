/**
 * LogoBackground Component
 * Improved logo background:
 * - Fewer logos (5-7 instead of many)
 * - Better spatial distribution across the viewport
 * - True 3D parallax movement on mouse
 * - Varying opacity and scale for depth layers
 * - Purple glow matching logo colors
 */

import { useEffect, useRef } from "react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/sftHyPWzPimOxihY.png";

// Carefully placed logos: [x%, y%, size, opacity, depth (1=far, 3=close)]
const LOGO_INSTANCES = [
  { x: 82, y: 12, size: 48, opacity: 0.06, depth: 1 },
  { x: 8,  y: 25, size: 36, opacity: 0.04, depth: 1 },
  { x: 90, y: 55, size: 56, opacity: 0.08, depth: 2 },
  { x: 15, y: 70, size: 44, opacity: 0.05, depth: 1 },
  { x: 55, y: 85, size: 32, opacity: 0.04, depth: 1 },
  { x: 72, y: 38, size: 64, opacity: 0.10, depth: 3 },
];

export function LogoBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const animate = () => {
      // Smooth lerp
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.04;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.04;

      const container = containerRef.current;
      if (container) {
        const logos = container.querySelectorAll<HTMLElement>("[data-depth]");
        logos.forEach((el) => {
          const depth = parseFloat(el.dataset.depth || "1");
          const factor = depth * 12; // px range per depth level
          const tx = currentRef.current.x * factor;
          const ty = currentRef.current.y * factor;
          const rz = currentRef.current.x * depth * 3;
          el.style.transform = `translate(${tx}px, ${ty}px) rotateZ(${rz}deg)`;
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {LOGO_INSTANCES.map((inst, i) => (
        <div
          key={i}
          data-depth={inst.depth}
          className="absolute"
          style={{
            left: `${inst.x}%`,
            top: `${inst.y}%`,
            width: inst.size,
            height: inst.size,
            opacity: inst.opacity,
            willChange: "transform",
            transition: "none",
            filter: `drop-shadow(0 0 ${inst.depth * 4}px oklch(0.55 0.28 290 / 0.4))`,
          }}
        >
          <img
            src={LOGO_URL}
            alt=""
            width={inst.size}
            height={inst.size}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
