/**
 * projects.ts — All project data lives here.
 *
 * There are two data sets:
 *   1. `projectCategories` — metadata for category labels / filters.
 *   2. `projects` — the summary list shown on the /projects page cards.
 *   3. `projectDetails` — the full detail pages keyed by slug.
 *
 * Helper functions at the bottom let you query the data by category or id.
 */

import type {
  Project,
  ProjectCategory,
  ProjectCategoryInfo,
  ProjectDetail,
} from "./types";

// ---------------------------------------------------------------------------
// Category definitions — used for category filter buttons on the projects page.
// ---------------------------------------------------------------------------
export const projectCategories: ProjectCategoryInfo[] = [
  {
    id: "iOS",
    title: "iOS Development",
    description:
      "Native iOS applications built with SwiftUI and modern Apple frameworks.",
    icon: "📱",
    color: "#007AFF",
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description:
      "End-to-end web applications using React, Node.js, and cloud services.",
    icon: "🌐",
    color: "#6f42c1",
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Robust server-side applications and APIs with Node.js and Express.",
    icon: "⚙️",
    color: "#28a745",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure, CI/CD pipelines, and containerization with AWS and Docker.",
    icon: "☁️",
    color: "#f39c12",
  },
  {
    id: "data",
    title: "Data Science & ML",
    description:
      "Data analysis, machine learning models, and visualization using Python.",
    icon: "📊",
    color: "#17a2b8",
  },
];

// ---------------------------------------------------------------------------
// Project summaries — shown as cards on the /projects page.
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: "wave-music-app",
    title: "Wave - AI-Powered Music Discovery",
    description:
      "An iOS app that uses AI to recommend music based on user preferences and listening habits.",
    longDescription:
      "Wave leverages machine learning algorithms to analyze user listening patterns and provide personalized music recommendations. The app features a sleek SwiftUI interface, seamless integration with Apple Music, and real-time updates to keep users engaged with their favorite tunes.",
    technologies: ["Swift", "SwiftUI", "CoreML", "Apple Music API"],
    category: "iOS",
    githubUrl: "https://github.com/evanbourgoine/wave-app",
    imageUrl: "/projects/wave.png",
    highlights: [
      "Implemented a custom recommendation engine using CoreML.",
      "Designed a modern and intuitive UI with SwiftUI.",
      "Integrated Apple Music API for seamless playback.",
    ],
    date: "2025-10-15",
  },
  {
    id: "microservices-architecture",
    title: "Microservices Architecture",
    description:
      "A full-stack web application demonstrating microservices architecture with Spring Boot and React.",
    longDescription:
      "This project showcases a microservices-based e-commerce platform where the frontend is built with React and the backend consists of multiple Spring Boot services.",
    technologies: ["Spring Boot", "React", "Docker", "Kubernetes", "AWS"],
    category: "fullstack",
    githubUrl: "https://github.com/evanbourgoine/spring-microservices",
    highlights: [
      "RESTful API design",
      "Service Oriented Architecture",
      "Spring Boot best practices",
      "Scalable backend design",
    ],
    date: "2026-01-10",
  },
  {
    id: "cicd-monitoring-dashboard",
    title: "CI/CD Pipeline Monitoring Dashboard",
    description:
      "Full-stack CI/CD monitoring dashboard with MongoDB, MySQL, and GitHub Actions integration.",
    technologies: ["React", "Node.js", "MySQL", "MongoDB", "Docker"],
    category: "fullstack",
    githubUrl: "https://github.com/evanbourgoine/cicd-pipeline-dashboard",
    imageUrl: "/projects/cicd_dashboard.png",
    highlights: [
      "Real-time scoring and ranking updates",
      "Multi-coach concurrent evaluation",
      "Automated statistical analysis",
    ],
    date: "2025-08-20",
  },
  {
    id: "healthcare-claims-pipeline",
    title: "Healthcare Claims Analytics Pipeline",
    description:
      "An end-to-end claims analytics pipeline ingesting 55,500 records into a normalized PostgreSQL schema with SQL segmentation, hypothesis testing, and regression modeling.",
    longDescription:
      "Built a full analytics pipeline on synthetic healthcare claims data, demonstrating SQL schema design, data ingestion, statistical analysis, and machine learning.",
    technologies: [
      "Python",
      "PostgreSQL",
      "SQL",
      "pandas",
      "scikit-learn",
      "SciPy",
      "Jupyter",
    ],
    category: "data",
    githubUrl: "https://github.com/evanbourgoine/claims-pipeline",
    imageUrl: "/projects/claims-eda.png",
    highlights: [
      "Designed a normalized star schema across members, providers, and claims tables.",
      "Ran hypothesis testing with ANOVA, chi-square, and t-tests using SciPy.",
      "Built linear and logistic regression models with scikit-learn.",
    ],
    date: "2026-04-12",
  },
];

// ---------------------------------------------------------------------------
// Project detail data — keyed by slug, used on /projects/[slug] pages.
// This keeps the full detail data separate from the summary cards.
// ---------------------------------------------------------------------------
export const projectDetails: Record<string, ProjectDetail> = {
  "wave-music-app": {
    title: "Wave - Music Social App",
    description:
      "A comprehensive iOS application that bridges the gap between music streaming and social connectivity. Wave integrates seamlessly with Apple MusicKit to provide real-time music analytics and sharing capabilities.",
    longDescription: `Wave started as a personal project to solve a simple problem: I wanted to see what my friends were listening to in real-time. What evolved was a full-featured social music platform that combines the power of Apple Music with Firebase's real-time database capabilities.

The app features a clean, intuitive interface built entirely in SwiftUI, following Apple's Human Interface Guidelines. Users can share their currently playing tracks, create collaborative playlists, and discover new music through their friend network's listening habits.

Key technical challenges included optimizing Firebase queries for real-time updates, implementing efficient caching strategies to reduce API calls, and designing a scalable data model that could handle growing user bases without performance degradation.`,
    technologies: [
      "SwiftUI",
      "Firebase",
      "Apple MusicKit",
      "iOS",
      "Firestore",
      "CloudKit",
    ],
    githubUrl: "https://github.com/evanbourgoine/wave-ios",
    category: "iOS",
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
  "microservices-architecture": {
    title: "Microservices Architecture",
    description:
      "An enterprise-grade microservices system demonstrating scalable backend architecture patterns using Spring Boot and PostgreSQL.",
    longDescription: `This project showcases a production-ready microservices architecture built to handle high-traffic scenarios. The system is designed with industry best practices including service discovery, API gateway patterns, distributed tracing, and fault tolerance.

Each microservice is independently deployable and scalable, communicating through RESTful APIs and message queues. The architecture implements circuit breaker patterns to prevent cascading failures and uses distributed caching to optimize performance.

The project demonstrates my understanding of backend system design, containerization with Docker, and deployment orchestration. It includes comprehensive monitoring, logging, and alerting systems to ensure reliability in production environments.`,
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Redis",
      "Kafka",
      "REST",
      "Kubernetes",
    ],
    githubUrl: "https://github.com/evanbourgoine/spring-microservices",
    category: "Backend",
    images: ["/projects/microservices-1.png", "/projects/microservices-2.png"],
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
  "cicd-monitoring-dashboard": {
    title: "CI/CD Pipeline Monitoring Dashboard",
    description:
      "Full-stack CI/CD monitoring dashboard with MongoDB, MySQL, and GitHub Actions integration.",
    longDescription: `Built for a local volleyball club, this application solves the problem of real-time player evaluation during tryouts. Coaches needed a way to quickly rate players across multiple criteria without slowing down the tryout process.

The system integrates Google Forms for rapid data entry and Google Sheets API for real-time calculations and rankings. As coaches submit evaluations, players' scores are automatically calculated and updated live on a React dashboard visible to all coaching staff.

The application handles concurrent data entry from multiple coaches, prevents duplicate entries, and provides instant statistical analysis including averages, rankings, and comparison tools. This reduced tryout evaluation time by 60% while increasing data accuracy.`,
    technologies: ["React", "Node.js", "MySQL", "MongoDB", "RestAPI", "Docker"],
    githubUrl: "https://github.com/evanbourgoine/cicd-pipeline-dashboard",
    category: "Full-Stack",
    images: ["/projects/cicd_dashboard.png"],
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
  "healthcare-claims-pipeline": {
    title: "Healthcare Claims Analytics Pipeline",
    description:
      "An end-to-end analytics pipeline built on synthetic healthcare claims data, demonstrating SQL schema design, data ingestion, segmentation analysis, hypothesis testing, and regression modeling.",
    longDescription: `Built a full claims analytics pipeline from scratch using a synthetic healthcare dataset of 55,500 records sourced from Kaggle.

The pipeline ingests raw CSV data into a normalized PostgreSQL star schema with three tables — members, providers, and claims — deduplicating on load and preserving referential integrity through foreign keys.

SQL segmentation queries analyze utilization metrics including average billing by medical condition, emergency admission rates by insurance provider, and average length of stay by diagnosis. A data quality audit identified 108 negative billing amounts (0.2%) flagged as likely refunds and excluded from modeling.

Hypothesis testing using SciPy revealed a statistically significant association between gender and admission type (chi-square p=0.007), while billing amount showed no significant variation by admission type (ANOVA p=0.738). Linear and logistic regression models were built with scikit-learn and honestly documented — both models underperformed due to the synthetic nature of the data, demonstrating the ability to interpret and communicate model limitations to non-technical stakeholders.`,
    technologies: [
      "Python",
      "PostgreSQL",
      "SQL",
      "pandas",
      "scikit-learn",
      "SciPy",
      "SQLAlchemy",
      "Jupyter",
      "matplotlib",
      "seaborn",
    ],
    githubUrl: "https://github.com/evanbourgoine/claims-pipeline",
    category: "data",
    images: ["/projects/claims-eda.png", "/projects/claims-regression.png"],
    features: [
      "Normalized PostgreSQL star schema with members, providers, and claims tables",
      "Automated CSV ingestion pipeline with deduplication",
      "SQL segmentation queries across utilization metrics",
      "Hypothesis testing with ANOVA, chi-square, and t-tests",
      "Linear and logistic regression modeling with scikit-learn",
      "Data quality profiling with documented limitations",
      "Non-technical findings summary formatted for stakeholder review",
    ],
    challenges: [
      "Designing a normalized schema that mirrors real health plan data structures",
      "Handling negative billing amounts and documenting them as a data quality issue",
      "Interpreting and honestly communicating poor model performance caused by synthetic data",
    ],
    outcomes: [
      "Successfully ingested and normalized 55,500 claims records into PostgreSQL",
      "Identified statistically significant association between gender and admission type (p=0.007)",
      "Produced a stakeholder-ready findings summary with methodology and limitations",
    ],
  },
};

// ---------------------------------------------------------------------------
// Helper functions — query the data without importing the raw arrays directly.
// ---------------------------------------------------------------------------

/** Return all projects that match a given category. */
export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter((project) => project.category === category);
};

/** Find a single project summary by its id. */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

/** Return all available category definitions. */
export const getAllCategories = (): ProjectCategoryInfo[] => {
  return projectCategories;
};

/** Look up the full detail page data for a given slug. Returns undefined if not found. */
export const getProjectDetail = (slug: string): ProjectDetail | undefined => {
  return projectDetails[slug];
};

/** Return all valid project slugs (used by generateStaticParams). */
export const getAllProjectSlugs = (): string[] => {
  return Object.keys(projectDetails);
};
