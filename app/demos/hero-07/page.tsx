"use client";

import { Hero07 } from "@/components/ui/hero-07";

export default function DemoHero07() {
  return (
    <Hero07
      tagline="Computational biophysics, AI, and drug discovery"
      title="Decoding the brain — from atomic perturbations to therapeutics."
      description="PhD in Biophysics from Cornell. Applying deep learning to protein interactomes and neurodegenerative disease, with a focus on experimentally grounded data for predictive biology."
      landscapeImage="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1144&auto=format&fit=crop"
      landscapeAlt="Abstract landscape"
      animation="subtle"
      primaryCTA={{ ctaEnabled: true, text: "View publications", link: "#", variant: "default" }}
      secondaryCTA={{ ctaEnabled: true, text: "Get in touch", link: "#", variant: "link" }}
    />
  );
}
