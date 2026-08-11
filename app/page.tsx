"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { DynamicIslandNav } from "@/components/ui/dynamic-island-nav";
import { Section } from "@/components/ui/section";
import { ArrowUpRight } from "lucide-react";
import { BlurText } from "@/components/ui/blur-text";
import { PageLoader } from "@/components/ui/page-loader";
import "@/components/ui/lumina.css";

const Lumina = dynamic(
  () => import("@/components/ui/lumina-interactive-list").then((m) => m.Component),
  { ssr: false },
);

const heroSlideDesktop = [
  {
    title: "",
    description: "",
    media: "/images/shobhita-graduation-wide.jpg",
  },
];

const heroSlideMobile = [
  {
    title: "",
    description: "",
    media: "/images/shobhita-graduation-mobile.jpg",
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
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 640px)").matches);
  }, []);

  return (
    <main id="top">
      <PageLoader />
      <DynamicIslandNav />

      {/* Hero — her photo, name landing, one-line thesis */}
      <div id="about" className="lumina-hero relative">
        {isMobile !== null && (
          <Lumina slides={isMobile ? heroSlideMobile : heroSlideDesktop} autoSlide={false} />
        )}
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end px-5 pb-12 sm:px-10 sm:pb-14">
          <h1 className="font-light leading-[0.95] tracking-tight text-[#E1E0CC]">
            <BlurText
              text="Shobhita Gupta, PhD"
              animateBy="letters"
              delay={55}
              className="text-[9.5vw] sm:text-[7.5vw] lg:text-[6.5vw]"
            />
          </h1>
          <BlurText
            text="Computational biophysicist decoding the biology of disease to build better medicines."
            animateBy="words"
            delay={110}
            className="mt-4 max-w-2xl text-sm text-[#E1E0CC]/80 sm:text-base md:text-lg"
          />
        </div>
      </div>

      <section id="research" data-lumina-track className="relative h-[500vh] scroll-mt-0">
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

      <Section id="theses" eyebrow="Ideas" title="Theses">
        <ul className="space-y-6">
          <li className="flex flex-col gap-1 border-l-2 border-primary/30 pl-5">
            <span className="text-lg font-medium text-primary">The Next Therapeutic Frontier</span>
            <span className="text-sm text-primary/60">Medicine Beyond Molecules</span>
            <span className="text-xs uppercase tracking-[0.2em] text-primary/40">Forthcoming</span>
          </li>
        </ul>
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
            <a
              href="mailto:shobhita.gupta1@gmail.com"
              className="text-white/60 transition-colors hover:text-white"
            >
              Email
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
