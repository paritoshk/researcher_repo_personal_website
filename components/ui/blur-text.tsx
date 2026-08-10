"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const words = useMemo(() => text.split(" "), [text]);

  const segmentStyle = (i: number): React.CSSProperties => ({
    display: "inline-block",
    filter: inView ? "blur(0px)" : "blur(10px)",
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0)"
      : `translateY(${direction === "top" ? "-20px" : "20px"})`,
    transition: `all 0.5s ease-out ${i * delay}ms`,
  });

  let letterIndex = 0;

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, w) => (
        <span key={w} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {animateBy === "letters" ? (
            word.split("").map((char, c) => {
              const i = letterIndex++;
              return (
                <span key={c} style={segmentStyle(i)}>
                  {char}
                </span>
              );
            })
          ) : (
            <span style={segmentStyle(w)}>{word}</span>
          )}
          {w < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export { BlurText };
