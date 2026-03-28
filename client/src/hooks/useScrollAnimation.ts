/**
 * useScrollAnimation Hook
 * Triggers entrance animation when element enters viewport.
 * Returns a ref to attach to the element + a boolean `visible`.
 * Uses IntersectionObserver — fires once per element.
 */

import { useEffect, useRef, useState } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollAnimation(options: Options = {}) {
  const { threshold = 0.12, rootMargin = "0px 0px -40px 0px" } = options;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}

/**
 * Returns Tailwind-compatible inline style for fade-up entrance.
 * Apply to any element alongside the `ref` from useScrollAnimation.
 */
export function fadeUpStyle(visible: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  };
}

export function fadeInStyle(visible: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transition: `opacity 0.7s ease ${delay}ms`,
  };
}

export function slideLeftStyle(visible: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(-32px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  };
}

export function slideRightStyle(visible: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(32px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  };
}
