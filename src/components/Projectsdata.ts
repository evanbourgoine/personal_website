import { formatWithOptions } from "../types/projects';
import { ProjectCategory } from "./Projects";

export const projectCategories: ProjectCategoryInfo[] = [
    {
        id: 'iOS',
        title: 'iOS Development',
        description: 'Native iOS applications built with SwiftUI and modern Apple frameworks.',
        icon: '📱',
        color: '#007AFF',
    },
    {
        id: 'fullstack',
        title: 'Full-Stack Development',
        description: 'End-to-end web applications using React, Node.js, and cloud services.',
        icon: '🌐',
        color: '#6f42c1',
    },
    {
        id: 'backend',
        title: 'Backend Development',
        description: 'Robust server-side applications and APIs with Node.js and Express.',
        icon: '⚙️',
        color: '#28a745',
    },
    {
        id: 'cloud',
        title: 'Cloud & DevOps',
        description: 'Cloud infrastructure, CI/CD pipelines, and containerization with AWS and Docker.',
        icon: '☁️',
        color: '#f39c12',
    },
    {
        id: 'data',
        title: 'Data Science & ML',
        description: 'Data analysis, machine learning models, and visualization using Python.',
        icon: '📊',
        color: '#17a2b8',
    },  
];

export const projects: Project[] = [
    {
        id: 'wave',
        title: 'Wave - AI-Powered Music Discovery',
        description: 'An iOS app that uses AI to recommend music based on user preferences and listening habits.',
        longDescription: 'Wave leverages machine learning algorithms to analyze user listening patterns and provide personalized music recommendations. The app features a sleek SwiftUI interface, seamless integration with Apple Music, and real-time updates to keep users engaged with their favorite tunes.',
        technologies: ['Swift', 'SwiftUI', 'CoreML', 'Apple Music API'],
        category: 'iOS',
        githubUrl: 'https://github.com/evanbourgoine/wave-app',
        imageUrl: '/projects/wave.png',
        highlights: [
            'Implemented a custom recommendation engine using CoreML to analyze user data and provide personalized music suggestions.',
            'Designed a modern and intuitive UI with SwiftUI, resulting in a 4.8-star rating on the App Store.',
            'Integrated Apple Music API for seamless music playback and library management.',
        ],
        date: '2025-10-15'
    },
    {
        id: 'spring-microservices',
        title: 'Microservices Architecture',
        description: 'A full-stack web application demonstrating microservices architecture with Spring Boot and React.',
        longDescription: 'This project showcases a microservices-based e-commerce platform where the frontend is built with React and the backend consists of multiple Spring Boot services. Each service is responsible for a specific domain (e.g., user management, product catalog, order processing) and communicates via REST APIs. The application is deployed on AWS using Docker containers and Kubernetes for orchestration.',
        technologies: ['Spring Boot', 'React', 'Docker', 'Kubernetes', 'AWS'],
        category: 'fullstack',
        githubUrl: 'https://github.com/evanbourgoine/spring-microservices',
        highlights: [
            'RESTful API design',
            'Service Oriented Architecture',
            'Spring Boot best practices',
            'Scalable backend design'
        ],
        date: '2026-01-10'
    }
];

// Helper functions
export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
    return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
    return projects.find(project => project.id === id);
};

export const getAllCategories = (): ProjectCategoryInfo[] => {
    return projectCategories;
};