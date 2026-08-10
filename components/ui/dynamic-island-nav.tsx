"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const markAnchorJump = () => {
  document.documentElement.dataset.anchorJump = "1";
  window.setTimeout(() => {
    delete document.documentElement.dataset.anchorJump;
  }, 1800);
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const DynamicIslandNav = () => {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setCompact(y > 80);
  });

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center"
    >
      <motion.div
        animate={{
          paddingLeft: compact ? 16 : 24,
          paddingRight: compact ? 16 : 24,
          paddingTop: compact ? 6 : 10,
          paddingBottom: compact ? 6 : 10,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/10 bg-black/80 shadow-lg shadow-black/40 backdrop-blur-md sm:gap-5 md:gap-8"
      >
        <a href="#top" onClick={markAnchorJump} className="mr-1 hidden text-sm font-semibold tracking-tight text-primary sm:block">
          SG
        </a>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={markAnchorJump}
            className="text-[10px] text-primary/70 transition-colors hover:text-primary sm:text-xs md:text-sm"
          >
            {item.label}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export { DynamicIslandNav };
