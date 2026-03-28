/**
 * CustomCursor Component
 * FusionAI-inspired custom cursor with:
 * - Small glowing dot that follows mouse precisely
 * - Larger ring that follows with slight delay (trailing effect)
 * - Orange glow when hovering over interactive elements
 * - Smooth transitions and neon glow effects
 */

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Ring position uses lerp for smooth trailing
  const ringPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = () => window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice()) return;

    const handleMouseMove = (e: MouseEvent) => {
      dotPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.closest("[role='button']") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest(".cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(!!isInteractive);
    };

    // Animation loop for smooth ring trailing
    const animate = () => {
      // Lerp ring position toward dot position
      const lerpFactor = 0.12;
      ringPos.current.x += (dotPos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (dotPos.current.y - ringPos.current.y) * lerpFactor;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotPos.current.x}px`;
        dotRef.current.style.top = `${dotPos.current.y}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleHoverStart);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleHoverStart);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot - follows mouse precisely */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isHovering ? "hovering" : ""}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s, width 0.2s, height 0.2s, background 0.2s, box-shadow 0.2s",
        }}
      />

      {/* Ring - follows with trailing delay */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isHovering ? "hovering" : ""}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s, width 0.3s, height 0.3s, border-color 0.3s",
        }}
      />
    </>
  );
}
