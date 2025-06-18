'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { GoStack } from 'react-icons/go';
import { IoCodeSlash } from 'react-icons/io5';
import Button from './button';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { BackgroundBeamsWithCollision } from './background-beams-with-collision';
type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  image: string;
  features: string[];
};


// Add CSS animations
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .animate-slideInLeft {
    animation: slideInLeft 0.6s ease-out forwards;
  }
  
  .animate-slideInRight {
    animation: slideInRight 0.6s ease-out forwards;
  }
  
  .animation-delay-200 {
    animation-delay: 0.2s;
    opacity: 0;
  }
  
  .animation-delay-300 {
    animation-delay: 0.3s;
    opacity: 0;
  }
  
  .animation-delay-400 {
    animation-delay: 0.4s;
    opacity: 0;
  }
`;

export default function ProjectDetailsClient({ project }: { project: Project }) {

  return (
 <> 
  <div className='min-h-screen w-full bg-gradient-to-br from-[#1c1c2b] via-black to-purple-600'>
      <style>{styles}</style>
    
      <motion.div 
        initial={{ opacity: 0 }}        
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen  text-white "
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <Link href={'/'}>
          <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50 hover:bg-slate-700/50 cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button></Link>
          <div className="text-gray-400 text-sm ml-4">
            <span className="text-purple-400">Projects</span> &gt; {project.title}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Project Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Project Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              >
                {project.title}
              </motion.h1>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </motion.div>

            {/* Project Description */}
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Stats Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6"
            >
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 flex items-center gap-4 min-w-[140px]">
                <div className="text-2xl text-blue-400"><IoCodeSlash/></div>
                <div>
                  <div className="text-2xl font-bold text-white">{project.technologies.length}</div>
                  <div className="text-xs text-gray-400">Total Technology</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 flex items-center gap-4 min-w-[140px]">
                <div className="text-2xl"><GoStack/></div>
                <div>
                  <div className="text-2xl font-bold text-white">{project.features.length}</div>
                  <div className="text-xs text-gray-400">Key Features</div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <Button 
                link={project.liveLink}
                text="Live Demo"
                 width="150px"
                height="40px"
                Icon={FaExternalLinkAlt}
                targett='_blank'
                >
               
              </Button>
                <Button 
                link={project.githubLink}
                text="github"
                 width="150px"
                height="40px"
                Icon={FaGithub}
                targett='_blank'
                >
               
              </Button>
            </motion.div>

            {/* Technologies Used */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
                <span className="text-blue-400"><IoCodeSlash/></span>
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="bg-slate-800/50  px-4 py-2 rounded-full text-sm text-blue-300 font-medium flex items-center gap-2 hover:bg-slate-700/50 transition-colors"
                  >
                 
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Project Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}                                                                                                                                                                                                
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-8"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 flex items-center justify-center">
                {/* Mock Browser Window */}
                <Image
                src={project.image}
                alt='project'
                width={400}
                height={400}
                className="w-full h-full object-contain"

                ></Image>
              
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="text-3xl font-bold text-yellow-400 mb-8 flex items-center gap-3"
            >
              ⭐ Key Features
            </motion.h2>
            <div className="grid gap-4">
              {project.features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-purple-400 mt-1 text-sm">🔹</span>
                  <span className="text-base leading-relaxed">
                    <span className="text-white font-semibold">
                      {feature.split(' – ')[0]}
                    </span>
                    {feature.includes(' – ') && (
                      <span className="text-gray-300"> – {feature.split(' – ')[1]}</span>
                    )}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div></div>
  
    </>
  );
}

