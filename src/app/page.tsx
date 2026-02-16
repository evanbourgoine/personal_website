/**
 * page.tsx — Home page (/).
 *
 * This is intentionally simple: just the Hero section with your profile
 * image, name, bio, resume button, and contact links.
 *
 * Tech Stack and Projects live on their own pages now:
 *   /tech-stack  — all skills organized by category
 *   /projects    — project cards with links to detail pages
 */

import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero
        name="Evan Bourgoine"
        title="Recent Computer Science Graduate @ Virginia Tech"
        description="Passionate about building impactful full-stack applications and creating seamless user experiences. I love turning complex problems into elegant solutions."
        email="evan.bourgoine@gmail.com"
        linkedin="https://linkedin.com/in/evan-bourgoine"
        github="https://github.com/evanbourgoine"
        profileImage="/profile.jpg"
        resumePath="/Evan_Bourgoine_Resume.pdf"
      />
    </main>
  );
}
