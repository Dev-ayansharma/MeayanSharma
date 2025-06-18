'use client';

import { JSX, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaCertificate, FaCogs, FaExternalLinkAlt } from 'react-icons/fa';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import AnimatedCard from '@/components/ui/Animatecard';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { IoMdClose } from 'react-icons/io';
import Button from '@/components/ui/button';
import { Certificate, certificates } from '../data/certificate';

type TabType = 'projects' | 'certificates' | 'tech';
type Project = {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  slug: string;
};



type Tech = {
  name: string;
  image: string;
};

const tabs: { label: string; value: TabType; icon: JSX.Element }[] = [
  { label: 'Projects', value: 'projects', icon: <FaCode /> },
  { label: 'Certificates', value: 'certificates', icon: <FaCertificate /> },
  { label: 'Tech Stack', value: 'tech', icon: <FaCogs /> },
];

const projects = [
 {
    title: 'Reelise',
    description: 'A social app to share reels instantly.',
    image: '/project1.png',
    liveLink: 'https://reelise.vercel.app/',
    slug: 'reelise',
  },
  {
    title: 'Mssg Sent',
    description: 'A platform for anonymous messaging.',
    image: '/project2.png',
    liveLink: 'https://mssgsent.vercel.app/',
    slug: 'mssg-sent',
  },
  {
    title: 'As Blogs',
    description: 'A platform for blogging.',
    image: '/project3.png',
    liveLink: 'https://as-blogs.vercel.app/',
    slug: 'as-blogs',
  },
  {
    title: 'MCP Central',
    description: 'A platform for MCP to submit and explore servers',
    image: '/project4.png',
    liveLink: 'https://mcp-central.vercel.app/',
    slug: 'mcp-central',
  },
  
];


const techStack = [
  { name: 'HTML', image: '/html.png' },
  { name: 'CSS', image: '/css.png' },
  { name: 'JavaScript', image: '/javascript.png' },
  { name: 'Tailwind CSS', image: '/tailwind.png' },
  { name: 'Express JS', image: '/expressjs.png' },
  { name: 'Node JS', image: '/nodejs.png' },
  { name: 'React', image: '/react.png' },
  { name: 'MongoDB', image: '/mongo.png' },
  { name: 'Postman', image: '/postman.png' },

  { name: 'TypeScript', image: '/typescript.png' },
  { name: 'Next Js', image: '/nextjs.png' },
   { name: 'Github', image: '/githublogo.png' },
    { name: 'Git', image: '/git.png' },
];


const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState<TabType>('projects');
  const [showMore, setShowMore] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const { ref: sectionRef, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const getData = (): (Project | Certificate | Tech)[] => {
    let data: (Project | Certificate | Tech)[] = [];
    if (activeTab === 'projects') data = projects;
    else if (activeTab === 'certificates') data = certificates;
    else data = techStack;
    return showMore || activeTab === 'tech' ? data : data.slice(0, 3);
  };

  function isProject(item: Project | Certificate | Tech): item is Project {
  return 'description' in item && 'liveLink' in item;
}


  return (
    <section id="portfolio" className=''>
      <BackgroundBeamsWithCollision className="w-full min-h-screen bg-black">
        
        <div ref={sectionRef} className=" w-full min-h-screen px-4 md:px-6 py-20 text-white relative overflow-hidden">
          <motion.h2 initial={{ opacity: 0, y: -60 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-6">
            Portfolio Showcase
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 60 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center max-w-2xl mx-auto text-gray-300 mb-12">
            Explore my journey through projects, certifications, and technical expertise.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {tabs.map((tab) => (
              <button key={tab.value} onClick={() => { setActiveTab(tab.value); setShowMore(false); }}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg border transition-all duration-300 cursor-pointer ${activeTab === tab.value ? 'bg-purple-600 text-white border-purple-500 shadow-md' : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'}`}>{tab.icon}{tab.label}</button>
            ))}
          </div>

          <motion.div key={activeTab} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
            {getData().map((item, index) => (             
              <AnimatedCard key={index} index={index}>
                {activeTab === 'projects' && isProject(item) && (
                  <div className="bg-[#1a1a2e] p-5  rounded-xl shadow-md border border-white/5 hover:scale-[1.02] transition flex flex-col justify-between">
                    <Image src={item.image} alt={item.title} width={300} height={200} className="rounded-md mb-4 w-full h-48 object-cover" />
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400 mt-2 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <Link href={item.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-400">
                        Live Demo <FaExternalLinkAlt />
                      </Link>

                     <Button link={`/project/${item.slug}`}  text="Details" width='80px' height='40px'>

                     </Button>
                    </div>
                  </div>
                )}

                {activeTab === 'certificates' && 'title' in item && (
                  <div onClick={() => setSelectedCert(item)} className="bg-[#1a1a2e] p-5 rounded-xl shadow-md border border-white/5 hover:scale-[1.02] transition flex flex-col items-center cursor-pointer">
                    <Image src={item.image} alt={item.title} width={400} height={200} className="rounded-md mb-4 w-full h-48 object-contain bg-white p-2" />
                    <h3 className="text-md font-semibold text-white text-center">{item.title}</h3>
                  </div>
                )}

                {activeTab === 'tech' && 'name' in item && (
                 <div className="bg-[#1a1a2e] p-4 rounded-lg shadow-md border border-white/10 hover:scale-105 transition-all duration-300 flex flex-col items-center w-full max-w-[110px] mx-auto ">
    <div className="bg-white/10 p-3 rounded-full mb-2">
      <Image
        src={item.image}
        alt={item.name}
        width={36}
        height={36}
        className="object-contain"
      />
    </div>
    <p className="text-xs text-center text-white">{item.name}</p>
  </div>
                )}
              </AnimatedCard>
            ))}
          </motion.div>

          {(activeTab === 'projects' || activeTab === 'certificates') && (
            <div className="text-center mt-8">
              <button onClick={() => setShowMore(prev => !prev)} className="px-6 py-2 bg-gray-900  rounded-lg text-white hover:bg-purple-700 transition cursor-pointer">
                {showMore ? 'Show Less' : 'See More'}
              </button>
            </div>
          )}

          {selectedCert && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-[#1a1a2e] p-6 rounded-xl relative w-full max-w-2xl mx-4">
                <button onClick={() => setSelectedCert(null)} className="absolute top-3 right-3 text-white text-2xl">
                  <IoMdClose />
                </button>
                <Image src={selectedCert.image} alt={selectedCert.title} width={800} height={600} className="rounded-md object-contain w-full max-h-[80vh]" />
                <h3 className="text-center text-white mt-4 text-lg">{selectedCert.title}</h3>
              </div>
            </div>
          )}
        </div> 
      </BackgroundBeamsWithCollision>
   </section>
  );
};

export default PortfolioShowcase;


