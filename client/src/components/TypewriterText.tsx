/**
 * TypewriterText Component
 * Animates text word-by-word with a blinking cursor
 * Each word fades+slides in sequentially
 */

import { useEffect, useState, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number; // ms per word
  startDelay?: number;
}

export function TypewriterText({ text, className = "", speed = 120, startDelay = 300 }: TypewriterTextProps) {
  const words = text.split(" ");
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const timeout = setTimeout(() => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setVisibleCount(count);
        if (count >= words.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [started, words.length, speed, startDelay]);

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-300"
          style={{
            opacity: i < visibleCount ? 1 : 0,
            transform: i < visibleCount ? "translateY(0)" : "translateY(8px)",
            transitionDelay: `${i * 20}ms`,
            marginRight: "0.28em",
          }}
        >
          {word}
        </span>
      ))}
      {visibleCount < words.length && (
        <span className="typewriter-cursor inline-block w-0.5 h-5 bg-primary ml-1 align-middle" />
      )}
    </p>
  );
}
