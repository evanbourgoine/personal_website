/**
 * page.tsx — Home page (/).
 *
 * A multi-section landing page that creates a visual journey:
 *   1. Hero   — dark gradient with large photo, name, and CTA buttons
 *   2. About  — quick facts (location, education, focus, fun fact)
 *   3. Focus  — 3 expertise cards (full-stack, analytics, cloud)
 *   4. CTA    — dark gradient bookend with navigation + contact
 *
 * Tech Stack and Projects live on their own pages (/tech-stack, /projects).
 */

import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import FocusAreas from "@/components/sections/FocusAreas";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main>
      {/* Section 1 — Bold hero with dark gradient */}
      <Hero
        name="Evan Bourgoine"
        role="Software Engineer"
        focus="Full-Stack Development & Analytics"
        description="I build impactful applications and turn complex problems into elegant solutions."
        email="evan.bourgoine@gmail.com"
        linkedin="https://linkedin.com/in/evan-bourgoine"
        github="https://github.com/evanbourgoine"
        profileImage="/profile.jpg"
        resumePath="/Evan_Bourgoine_Resume.pdf"
        location="Boston, MA"
        education="Virginia Tech '25"
      />

      {/* Section 2 — Personal quick facts */}
      <AboutMe />

      {/* Section 3 — Areas of expertise */}
      <FocusAreas />

      {/* Section 4 — Call to action + contact */}
      <CallToAction resumePath="/Evan_Bourgoine_Resume.pdf" />
    </main>
  );
}
