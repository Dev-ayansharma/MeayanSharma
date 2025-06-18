'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt,FaTwitter} from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import Button from '@/components/ui/button';
import Image from 'next/image';
const words = [
  { text: 'Tech Enthusiast' },
  { text: 'Computer Science Student' },
  { text: 'Problem Solver' },
];

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section id='home'>
    <BackgroundBeamsWithCollision className="min-h-screen bg-black text-white px-6">
      <motion.div
        ref={ref}
        id="home"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10 relative"
      >
        {/* Left Text Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow">
              ✨ Ready to Innovate
            </button>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-7xl font-bold"
          >
            Full Stack{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#d879de]">
              Developer
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-2 items-center text-xl md:text-2xl text-white"
          >
            <TypewriterEffect words={words} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm text-gray-400"
          >
            Enhancing digital experiences that are smooth, scalable, and made to impress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            <span className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-sm">
              React
            </span>
            <span className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-sm">
              Node.js
            </span>
            <span className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-sm">
              PostgreSQL
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-4 mt-6"
          >
            <Button link="#portfolio" text="Projects" width="120px" height="40px" Icon={FaExternalLinkAlt} />
            <Button link="#contact" text="Contact" width="120px" height="40px" Icon={IoMail} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex gap-4 mt-4 text-2xl"
          >
            <Button link="https://github.com/helloayan14" Icon={FaGithub} width="50px" height="35px" targett='_blank' />
            <Button link="https://www.linkedin.com/in/imayansharma/" Icon={FaLinkedin} width="50px" height="35px" targett='_blank' />
            <Button link="https://x.com/imayansharma" Icon={FaTwitter} width="50px" height="35px" targett='_blank' />
          </motion.div>
        </div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <div className="w-180 h-180 bg-black  z-10 border-lg border-black  rounded-2xl flex items-center justify-center text-gray-500 text-sm">
            <Image 
            src='/herocomp.png'
            alt='hero'
            width={600}
            height={600}
            >

            </Image>
          </div>
        </motion.div>
      </motion.div>
    </BackgroundBeamsWithCollision></section>
  );
};

export default Hero;



// styles/globals.css
/* Add this to your global CSS file */
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply antialiased;
  }
}

@layer utilities {
  .animate-spin-slow {
    animation: spin 8s linear infinite;
  }
}
*/

// tailwind.config.js
/*

*/

// package.json dependencies needed:
/*
{
  "dependencies": {
    "next": "14.0.0",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "autoprefixer": "^10",
    "postcss": "^8",
    "tailwindcss": "^3"
  }
}
*/