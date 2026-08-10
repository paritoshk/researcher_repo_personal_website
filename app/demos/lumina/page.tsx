"use client";

import dynamic from "next/dynamic";
import "@/components/ui/lumina.css";

const Lumina = dynamic(
  () => import("@/components/ui/lumina-interactive-list").then((m) => m.Component),
  { ssr: false },
);

export default function DemoLumina() {
  return <Lumina />;
}
