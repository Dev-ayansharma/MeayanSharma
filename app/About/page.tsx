'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaCertificate, FaGlobe } from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';
import { JSX } from 'react/jsx-dev-runtime';
import { BackgroundBeamsWithCollision } from '../../components/ui/background-beams-with-collision';
import Link from 'next/link';
import Button from '@/components/ui/button';
import { projectData } from '../data/project';
import { certificates } from '../data/certificate';
import { experiences } from '../data/Experience';
interface StatCardProps {
  title: string;
  subtitle: string;
  count: string;
  link: string;
  icon: JSX.Element;
}

const StatCard: React.FC<StatCardProps> = ({ title, subtitle, count, icon ,link}) => (
  <Link href={link}>
  <div className="bg-[#13121a] rounded-2xl p-5 flex-1 min-w-[300px] hover:shadow-lg transition duration-300 border border-white/5 relative">
    <div className="flex items-center justify-between mb-4">
      <div className="bg-white/10 p-3 rounded-full text-white">{icon}</div>
      <BsArrowUpRight className="text-white/40" />
    </div>
    <p className="text-sm text-white/60 font-semibold">{title}</p>
    <h3 className="text-3xl text-white font-bold">{count}</h3>
    <p className="text-xs text-white/40">{subtitle}</p>
  </div></Link>
);

const cardData = [
  {
    title: 'TOTAL PROJECTS',
    subtitle: 'Innovative web & mobile solutions crafted',
    count: projectData.length.toString(),
    icon: <FaCode />,
    direction: -100,
    delay: 0.2,
    link: '#portfolio'
  },
  {
    title: 'CERTIFICATES',
    subtitle: 'Professional skills validated',
    count: certificates.length.toString(),
    icon: <FaCertificate />,
    direction: 100,
    delay: 0.4,
    link: '#portfolio'
  },
  {
    title: 'YEARS OF EXPERIENCE',
    subtitle: 'Continuous learning journey',
    count: experiences.length.toString(),
    icon: <FaGlobe />,
    direction: -100,
    delay: 0.6,
    link: '/About/experience'
  },
];

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <BackgroundBeamsWithCollision className="min-h-screen bg-black text-white px-6">
      <section
        ref={ref}
        id="about"
        className="w-full min-h-screen py-20 px-6 md:px-24 bg-transparent"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-500 mb-6">About Me</h2>
          <p className="text-gray-300 mb-10 leading-relaxed text-base md:text-lg">
            Hello, I'm <span className="text-purple-400 font-medium">Ayan Sharma</span>,
            Passionate about solving real-world problems through technology, eager to learn industry challenges, and
build impactful software solutions. I am seeking an internship to gain hands-on experience and grow as a
developer.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <Link
              href="https://drive.google.com/file/d/1OTtE40uRk65iKFBa1SVfHQ7iZZGbzQ2q/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md hover:scale-105 transition duration-300"
            >
              Download CV
            </Link>

            <Button link='#portfolio' text='Projects' width='120px' height='45px' Icon={FaCode}>

            </Button>
            
          
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            {cardData.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: card.direction }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: card.delay }}
                viewport={{ once: false }}
              >
              
                <StatCard
                  title={card.title}
                  subtitle={card.subtitle}
                  count={card.count}
                  icon={card.icon}
                  link={card.link}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default AboutMe;
