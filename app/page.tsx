"use client";

import dynamic from "next/dynamic";
import { Hero07 } from "@/components/ui/hero-07";
import { DynamicIslandNav } from "@/components/ui/dynamic-island-nav";
import { Section } from "@/components/ui/section";
import { ArrowUpRight } from "lucide-react";
import "@/components/ui/lumina.css";

const Lumina = dynamic(
  () => import("@/components/ui/lumina-interactive-list").then((m) => m.Component),
  { ssr: false },
);

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
  {
    title: "Shobhita",
    description: "Computational biophysicist. PhD, Cornell. Based in San Francisco.",
    media: "/images/shobhita-graduation.png",
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

const research = [
  {
    title: "AI x Drug Discovery",
    body: "Applying deep learning to uncover novel therapeutic mechanisms — including computational prediction of a small-molecule mechanism with potential to guide future Alzheimer's therapeutics.",
  },
  {
    title: "Protein–Protein Interactomes",
    body: "Structurally informed interactome modeling to reveal how atomic-level perturbations from disease mutations propagate across the human proteome.",
  },
  {
    title: "Realistic Data for Predictive Biology",
    body: "Biology needs more experimentally grounded data — most training data today is synthetic, and the field's focus is drifting toward natural language rather than predictive biology. Experimental-quality data is what will power simulation of future biological risk (CBRN) for defense and beyond.",
  },
  {
    title: "Neurodegenerative Disorders",
    body: "Decoding the brain: from quantum-mechanical first principles to network-level disease perturbations in Alzheimer's and related disorders.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <DynamicIslandNav />

      {/* Gallery hero — glass-transition slideshow */}
      <Lumina slides={gallerySlides} />

      {/* Editorial intro */}
      <div id="about" className="scroll-mt-20 pt-10">
        <Hero07
          tagline="Computational biophysics, AI, and drug discovery"
          title="Decoding the brain — from atomic perturbations to therapeutics."
          description="PhD in Biophysics from Cornell. Applying deep learning to protein interactomes and neurodegenerative disease, with a focus on experimentally grounded data for predictive biology. Now based in San Francisco."
          landscapeImage="https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1920&auto=format&fit=crop"
          landscapeAlt="DNA helix — molecular biology"
          animation="subtle"
          variant="compact"
          primaryCTA={{ ctaEnabled: true, text: "View publications", link: "#publications", variant: "default" }}
          secondaryCTA={{ ctaEnabled: true, text: "Get in touch", link: "#contact", variant: "link" }}
        />
      </div>

      <Section id="research" eyebrow="Focus" title="Research">
        <div className="grid gap-6 sm:grid-cols-2">
          {research.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
            >
              <h3 className="mb-3 text-lg font-medium text-primary">{r.title}</h3>
              <p className="text-sm leading-relaxed text-primary/60">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

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

      {/* Velvet Mystique footer */}
      <footer id="contact" className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1920&auto=format&fit=crop"
          alt="Glowing brain in deep violet"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-black/40 to-black/80" />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-overlay" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center md:py-36">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/50">Contact</p>
          <h2 className="mb-4 text-3xl font-medium tracking-tight text-white sm:text-5xl">
            Velvet Mystique
          </h2>
          <p className="mx-auto mb-10 max-w-md text-sm text-white/60 sm:text-base">
            Wrapped in the deep, luxurious embrace of the night.
          </p>
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
