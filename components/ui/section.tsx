"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, eyebrow, title, children }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} className="mx-auto w-full max-w-5xl scroll-mt-24 px-5 py-16 sm:px-8 md:py-24">
      <motion.div
        ref={ref}
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-3 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs uppercase tracking-[0.25em] text-primary/60">{eyebrow}</span>
        </div>
        <h2 className="mb-8 text-3xl font-medium tracking-tight text-primary sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
};

export { Section };
