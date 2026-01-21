import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Image from 'next/image';
import ResumeButton from './ResumeButton';

interface HeroProps {
  name: string;
  title: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
  profileImage?: string;
  resumePath?: string;
}

export default function Hero({
  name,
  title,
  description,
  email,
  linkedin,
  github,
  profileImage,
  resumePath,
}: HeroProps) {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-blue-50 py-12 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 mb-8">
          {/* Profile Photo with float animation */}
          <div className="animate-scale-in">
            {profileImage ? (
              <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 animate-float glow-hover">
                <Image
                  src={profileImage}
                  alt={`${name} profile photo`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="w-32 h-32 md:w-40 md:h-40 bg-primary rounded-full flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-lg flex-shrink-0 animate-float glow-hover">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>

          {/* Name and Role */}
          <div className="flex-1 text-center md:text-left animate-fade-in-right delay-200">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
              {name}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              Software Engineer
            </p>
          </div>
        </div>

        {/* Title and Description */}
        <div className="mb-8 text-center md:text-left animate-fade-in delay-300">
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            {title}
          </p>
          
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto md:mx-0 mb-6">
            {description}
          </p>

          {/* Resume Button */}
          {resumePath && (
            <div className="mb-6 flex justify-center md:justify-start animate-fade-in delay-400">
              <ResumeButton resumePath={resumePath} />
            </div>
          )}
        </div>

        {/* Contact Icons with staggered animation */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a 
            href={`mailto:${email}`}
            aria-label="Email"
            className="p-3 bg-white border-2 border-gray-300 rounded-full hover:border-primary hover:text-primary transition-all duration-200 shadow-sm hover:shadow-md hover:scale-110 animate-scale-in delay-500"
          >
            <HiMail className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 bg-white border-2 border-gray-300 rounded-full hover:border-primary hover:text-primary transition-all duration-200 shadow-sm hover:shadow-md hover:scale-110 animate-scale-in delay-600"
          >
            <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 bg-white border-2 border-gray-300 rounded-full hover:border-primary hover:text-primary transition-all duration-200 shadow-sm hover:shadow-md hover:scale-110 animate-scale-in delay-700"
          >
            <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}