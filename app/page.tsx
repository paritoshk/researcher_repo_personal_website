"use client";

import dynamic from "next/dynamic";
import { DynamicIslandNav } from "@/components/ui/dynamic-island-nav";
import { Section } from "@/components/ui/section";
import { ArrowUpRight } from "lucide-react";
import "@/components/ui/lumina.css";

const Lumina = dynamic(
  () => import("@/components/ui/lumina-interactive-list").then((m) => m.Component),
  { ssr: false },
);

const heroSlide = [
  {
    title: "Dr. Shobhita Gupta, PhD",
    description:
      "Biology needs realistic, experimental-grade data. Most of what we train on today is synthetic, and the field is drifting toward natural language instead of predictive biology \u2014 the kind that can simulate future biological risk for defense and beyond.",
    media: "/images/shobhita-graduation-wide.jpg",
  },
];

const gallerySlides = [
  {
    title: "Decoding the Brain",
    description: "Neurodegenerative disorders, from atomic perturbations to network-level disease.",
    media: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "AI x Drug Discovery",
    description: "Deep learning to uncover novel therapeutic mechanisms for Alzheimer's and beyond.",
    media: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Protein Interactomes",
    description: "Structurally informed interactome modeling across the human proteome.",
    media: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Predictive Biology",
    description: "Experimentally grounded data to power the next era of simulated biology.",
    media: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1920&auto=format&fit=crop",
  },
];

const publications = [
  {
    title:
      "A structurally informed human protein–protein interactome reveals proteome-wide perturbations caused by disease mutations",
    venue: "Nature Biotechnology 43 (9), 1510–1524",
    year: "2025",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JzQ0ALcAAAAJ&citation_for_view=JzQ0ALcAAAAJ:2osOgNQ5qMEC",
  },
  {
    title:
      "Progress in methodologies and quality-control strategies in protein cross-linking mass spectrometry",
    venue: "Proteomics 21 (23-24), 2100145",
    year: "2021",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JzQ0ALcAAAAJ&citation_for_view=JzQ0ALcAAAAJ:u5HHmVD_uO8C",
  },
  {
    title:
      "Leveraging Computational Tools in Precision Medicine: Investigating Protein Interaction Networks to Uncover Disease Perturbations, Functional Impacts and Therapeutic Strategies",
    venue: "PhD Thesis, Cornell University",
    year: "2025",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JzQ0ALcAAAAJ&citation_for_view=JzQ0ALcAAAAJ:qjMakFHDy7sC",
  },
];

export default function Home() {
  return (
    <main id="top">
      <DynamicIslandNav />

      {/* Hero — her photo, name, thesis in a nutshell */}
      <div id="about">
        <Lumina slides={heroSlide} autoSlide={false} />
      </div>

      <section id="research" data-lumina-track className="relative h-[400vh] scroll-mt-0">
        <div className="sticky top-0 flex h-screen flex-col justify-center px-4 sm:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs uppercase tracking-[0.25em] text-primary/60">Focus</span>
            </div>
            <h2 className="mb-6 text-3xl font-medium tracking-tight text-primary sm:text-4xl md:text-5xl">
              Research
            </h2>
            <Lumina slides={gallerySlides} embedded scrollHijack autoSlide={false} />
          </div>
        </div>
      </section>

      <Section id="publications" eyebrow="Selected work" title="Publications">
        <ul className="divide-y divide-white/10">
          {publications.map((p) => (
            <li key={p.title}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 py-6"
              >
                <div>
                  <h3 className="mb-2 text-base font-medium leading-snug text-primary transition-colors group-hover:text-white md:text-lg">
                    {p.title}
                  </h3>
                  <p className="text-sm text-primary/50">
                    {p.venue} · {p.year}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-primary/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://scholar.google.com/citations?hl=en&user=JzQ0ALcAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-primary/60 transition-colors hover:text-primary"
        >
          Google Scholar profile
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Section>

      <Section id="education" eyebrow="Background" title="Education">
        <ul className="space-y-6">
          <li className="flex flex-col gap-1 border-l-2 border-primary/30 pl-5">
            <span className="text-lg font-medium text-primary">Cornell University</span>
            <span className="text-sm text-primary/60">
              PhD in Biophysics — deep learning, protein–protein interactions, and
              computational drug discovery for Alzheimer&apos;s disease
            </span>
          </li>
          <li className="flex flex-col gap-1 border-l-2 border-primary/30 pl-5">
            <span className="text-lg font-medium text-primary">MS, Biomedical Sciences</span>
            <span className="text-sm text-primary/60">
              Interdisciplinary training bridging experimental and computational biology
            </span>
          </li>
          <li className="flex flex-col gap-1 border-l-2 border-primary/30 pl-5">
            <span className="text-lg font-medium text-primary">BA, Mathematics</span>
            <span className="text-sm text-primary/60">
              Foundations in the mathematical principles underlying molecular systems
            </span>
          </li>
        </ul>
      </Section>

      {/* Night footer */}
      <footer id="contact" className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1920&auto=format&fit=crop"
          alt="Watercolor mountain landscape"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-black/40 to-black/80" />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-overlay" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center md:py-36">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/50">Contact</p>
          <h2 className="mb-10 text-3xl font-medium tracking-tight text-white sm:text-5xl">
            Shobhita Gupta
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <a
              href="https://scholar.google.com/citations?hl=en&user=JzQ0ALcAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
            >
              Google Scholar
            </a>
            <a
              href="https://www.linkedin.com/in/shobhitagupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/drguptaseeks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
            >
              Instagram
            </a>
          </div>
          <p className="mt-14 text-xs text-white/30">
            © {new Date().getFullYear()} Dr. Shobhita Gupta
          </p>
        </div>
      </footer>
    </main>
  );
}
