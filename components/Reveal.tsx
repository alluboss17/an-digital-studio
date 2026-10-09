"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealVariant = "up" | "left" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

/** Small CSS-driven reveal. No animation library or runtime dependency required. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    element.classList.add("is-reveal-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal reveal-${variant} ${className}`.trim()}
      style={{ "--reveal-delay": `${Math.max(0, delay)}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
