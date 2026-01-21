import TechCategory from "./TechCategory";
import AnimatedSection from "./AnimatedSection";

export default function TechStack() {
  const frontend = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "SwiftUI",
    "Tailwind CSS",
    "HTML/CSS"
  ];

  const backend = [
    "Java",
    "Spring Boot",
    "Node.js",
    "PostgreSQL",
    "Firebase",
    "REST APIs",
    "Microservices"
  ];

  const tools = [
    "Git",
    "Docker",
    "AWS",
    "Postman",
    "VS Code",
    "Xcode",
    "Linux/Unix"
  ];

  const other = [
    "Python",
    "C",
    "SQL",
    "MongoDB",
    "Redis",
    "GraphQL"
  ];

  return (
    <section id="tech-stack" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Tech Stack
          </h3>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Technologies and tools I've worked with across different projects and experiences
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <AnimatedSection animation="fade-in-left" delay={100}>
            <TechCategory title="Frontend" skills={frontend} />
          </AnimatedSection>
          <AnimatedSection animation="fade-in-right" delay={200}>
            <TechCategory title="Backend" skills={backend} />
          </AnimatedSection>
          <AnimatedSection animation="fade-in-left" delay={300}>
            <TechCategory title="Tools & Platforms" skills={tools} />
          </AnimatedSection>
          <AnimatedSection animation="fade-in-right" delay={400}>
            <TechCategory title="Other" skills={other} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}