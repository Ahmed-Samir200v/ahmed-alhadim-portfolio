/**
 * ScrollProgressBar Component
 * FusionAI-inspired scroll progress indicator:
 * - Thin 3px bar at top of page
 * - Blue-to-orange gradient matching FusionAI color scheme
 * - Neon glow effect
 * - Smooth width transitions as user scrolls
 */

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}
