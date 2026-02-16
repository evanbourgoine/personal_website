/**
 * tech-stack/page.tsx — Tech Stack page (/tech-stack).
 *
 * Dedicated page for displaying all technical skills.
 * The TechStack component handles the layout and content internally.
 *
 * Metadata override sets a page-specific title in the browser tab.
 */

import type { Metadata } from "next";
import TechStack from "@/components/sections/TechStack";

export const metadata: Metadata = {
  title: "Tech Stack | Evan Bourgoine",
  description:
    "Technologies and tools Evan Bourgoine has worked with — frontend, backend, tools, and more.",
};

export default function TechStackPage() {
  return (
    <main className="min-h-screen">
      <TechStack />
    </main>
  );
}
