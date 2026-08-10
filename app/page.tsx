import { PrismaHero } from "@/components/ui/prisma-hero";
import { DynamicIslandNav } from "@/components/ui/dynamic-island-nav";
import { Section } from "@/components/ui/section";
import { ArrowUpRight } from "lucide-react";

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
      <PrismaHero />

      <Section id="about" eyebrow="Introduction" title="Physics, AI & life itself">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-base leading-relaxed text-primary/70 md:text-lg">
            I am a PhD-trained computational biophysicist with interdisciplinary
            training in mathematics, physics, biomedical sciences, and AI
            research. My work applies AI to uncover novel therapeutic
            mechanisms, particularly in neurodegenerative diseases.
          </p>
          <p className="text-base leading-relaxed text-primary/70 md:text-lg">
            I bring scientific rigor, first-principles thinking, and commercial
            fluency to hard technology problems — and I spent 10+ years
            teaching technical subjects, translating complex ideas clearly for
            diverse audiences. Now based in San Francisco.
          </p>
        </div>
      </Section>

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

      <footer id="contact" className="px-2 pb-2 md:px-3 md:pb-3">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center md:rounded-[2rem] md:py-20">
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-overlay" />
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-primary/50">Contact</p>
          <h2 className="mb-6 text-3xl font-medium tracking-tight text-primary sm:text-4xl">
            Let&apos;s build at the frontier
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <a
              href="https://scholar.google.com/citations?hl=en&user=JzQ0ALcAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/60 transition-colors hover:text-primary"
            >
              Google Scholar
            </a>
            <a
              href="https://www.linkedin.com/in/shobhitagupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/60 transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/drguptaseeks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/60 transition-colors hover:text-primary"
            >
              Instagram
            </a>
          </div>
          <p className="mt-10 text-xs text-primary/30">
            © {new Date().getFullYear()} Dr. Shobhita Gupta
          </p>
        </div>
      </footer>
    </main>
  );
}
