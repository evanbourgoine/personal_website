'use client';

import { useState } from 'react';
import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";

type ProjectCategory = 'All' | 'iOS' | 'Full-Stack' | 'Backend' | 'Frontend';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const projects = [
    {
      title: "Wave - Music Social App",
      description: "iOS app integrating Apple MusicKit with Firebase for social music analytics. Built with SwiftUI and real-time database sync. Features include friend activity tracking, playlist sharing, and music discovery based on listening patterns.",
      technologies: ["SwiftUI", "Firebase", "Apple MusicKit", "iOS"],
      githubUrl: "https://github.com/yourusername/wave",
      liveUrl: undefined,
      category: 'iOS' as ProjectCategory,
      image: "/projects/wave.png",
      slug: "wave-music-app",
    },
    {
      title: "Microservices Architecture",
      description: "Enterprise-grade microservices system using Spring Boot and PostgreSQL with RESTful APIs and service discovery. Implements distributed tracing, circuit breakers, and containerized deployment with Docker.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "REST"],
      githubUrl: "https://github.com/yourusername/microservices",
      liveUrl: undefined,
      category: 'Backend' as ProjectCategory,
      image: "/projects/microservices.png",
      slug: "microservices-architecture",
    },
    {
      title: "Volleyball Tryout Tracker",
      description: "Real-time player evaluation system integrating Google Forms and Sheets API with React for live tryout tracking. Coaches can rate players instantly with automated scoring and ranking systems.",
      technologies: ["React", "Google Sheets API", "JavaScript", "Node.js"],
      githubUrl: "https://github.com/yourusername/volleyball-tracker",
      liveUrl: undefined,
      category: 'Full-Stack' as ProjectCategory,
      image: "/projects/volleyball.png",
      slug: "volleyball-tryout-tracker",
    },
  ];

  const categories: ProjectCategory[] = ['All', 'iOS', 'Full-Stack', 'Backend', 'Frontend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-12 md:py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Projects
          </h3>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            A selection of projects I've built to solve real problems and learn new technologies
          </p>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection animation="slide-down" delay={200}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 md:px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base transform hover:scale-105 ${
                  activeFilter === category
                    ? 'bg-primary text-white shadow-lg glow'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection 
              key={project.title}
              animation="scale-in"
              delay={100 * (index + 1)}
            >
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}