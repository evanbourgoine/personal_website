import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define all your projects here
const projects = {
  'wave-music-app': {
    title: "Wave - Music Social App",
    description: "A comprehensive iOS application that bridges the gap between music streaming and social connectivity. Wave integrates seamlessly with Apple MusicKit to provide real-time music analytics and sharing capabilities.",
    longDescription: `Wave started as a personal project to solve a simple problem: I wanted to see what my friends were listening to in real-time. What evolved was a full-featured social music platform that combines the power of Apple Music with Firebase's real-time database capabilities.

The app features a clean, intuitive interface built entirely in SwiftUI, following Apple's Human Interface Guidelines. Users can share their currently playing tracks, create collaborative playlists, and discover new music through their friend network's listening habits.

Key technical challenges included optimizing Firebase queries for real-time updates, implementing efficient caching strategies to reduce API calls, and designing a scalable data model that could handle growing user bases without performance degradation.`,
    technologies: ["SwiftUI", "Firebase", "Apple MusicKit", "iOS", "Firestore", "CloudKit"],
    githubUrl: "https://github.com/yourusername/wave",
    liveUrl: undefined,
    category: 'iOS',
    images: [
      "/projects/wave-1.png",
      "/projects/wave-2.png",
      "/projects/wave-3.png",
    ],
    features: [
      "Real-time friend activity tracking",
      "Collaborative playlist creation",
      "Music discovery based on listening patterns",
      "Social sharing and comments",
      "Apple Music integration",
      "Push notifications for friend updates",
    ],
    challenges: [
      "Implementing efficient real-time data sync without draining battery",
      "Managing Apple MusicKit API rate limits",
      "Designing an intuitive UX for complex social features",
    ],
    outcomes: [
      "Successfully deployed to TestFlight with 50+ beta users",
      "Average session time of 15+ minutes",
      "Positive feedback on user experience and performance",
    ],
  },
  'microservices-architecture': {
    title: "Microservices Architecture",
    description: "An enterprise-grade microservices system demonstrating scalable backend architecture patterns using Spring Boot and PostgreSQL.",
    longDescription: `This project showcases a production-ready microservices architecture built to handle high-traffic scenarios. The system is designed with industry best practices including service discovery, API gateway patterns, distributed tracing, and fault tolerance.

Each microservice is independently deployable and scalable, communicating through RESTful APIs and message queues. The architecture implements circuit breaker patterns to prevent cascading failures and uses distributed caching to optimize performance.

The project demonstrates my understanding of backend system design, containerization with Docker, and deployment orchestration. It includes comprehensive monitoring, logging, and alerting systems to ensure reliability in production environments.`,
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Redis", "Kafka", "REST", "Kubernetes"],
    githubUrl: "https://github.com/yourusername/microservices",
    liveUrl: undefined,
    category: 'Backend',
    images: [
      "/projects/microservices-1.png",
      "/projects/microservices-2.png",
    ],
    features: [
      "Service discovery and registration",
      "API Gateway with rate limiting",
      "Distributed tracing with Zipkin",
      "Circuit breaker pattern implementation",
      "Docker containerization",
      "Kubernetes orchestration",
      "Redis caching layer",
      "Event-driven architecture with Kafka",
    ],
    challenges: [
      "Designing efficient inter-service communication",
      "Implementing distributed transactions",
      "Managing service dependencies and versioning",
    ],
    outcomes: [
      "Successfully handles 10,000+ requests per minute",
      "99.9% uptime in testing environment",
      "Reduced response times by 40% with caching",
    ],
  },
  'volleyball-tryout-tracker': {
    title: "Volleyball Tryout Tracker",
    description: "A real-time player evaluation system that revolutionizes how coaches assess athletes during tryouts.",
    longDescription: `Built for a local volleyball club, this application solves the problem of real-time player evaluation during tryouts. Coaches needed a way to quickly rate players across multiple criteria without slowing down the tryout process.

The system integrates Google Forms for rapid data entry and Google Sheets API for real-time calculations and rankings. As coaches submit evaluations, players' scores are automatically calculated and updated live on a React dashboard visible to all coaching staff.

The application handles concurrent data entry from multiple coaches, prevents duplicate entries, and provides instant statistical analysis including averages, rankings, and comparison tools. This reduced tryout evaluation time by 60% while increasing data accuracy.`,
    technologies: ["React", "Google Sheets API", "JavaScript", "Node.js", "Express", "Google Forms API"],
    githubUrl: "https://github.com/yourusername/volleyball-tracker",
    liveUrl: undefined,
    category: 'Full-Stack',
    images: [
      "/projects/volleyball-1.png",
    ],
    features: [
      "Real-time scoring and ranking updates",
      "Multi-coach concurrent evaluation",
      "Automated statistical analysis",
      "Player comparison tools",
      "Export functionality for final decisions",
      "Mobile-responsive design for tablet use",
    ],
    challenges: [
      "Handling concurrent data writes from multiple coaches",
      "Optimizing Google Sheets API rate limits",
      "Creating an intuitive UI for non-technical users",
    ],
    outcomes: [
      "Reduced evaluation time by 60%",
      "Used successfully for 3 tryout seasons",
      "Positive feedback from coaching staff on ease of use",
    ],
  },
};

type ProjectSlug = keyof typeof projects;

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-primary mb-4">{project.title}</h1>
            <p className="text-xl text-gray-700 mb-6">{project.description}</p>
            
            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>View on GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium"
                >
                  <HiExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Images Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Project Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <div key={index} className="relative h-80 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
              {project.longDescription}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-50 text-primary font-medium rounded-lg border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Challenges */}
          {project.challenges && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Technical Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span className="text-gray-700 text-lg">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Outcomes & Impact</h2>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl">★</span>
                    <span className="text-gray-700 text-lg">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}