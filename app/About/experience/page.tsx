import { experiences } from '@/app/data/Experience';
import ExperienceCard from '@/components/ui/ExperienceCard';
import Link from 'next/link';

const ExperienceSection = () => {
  return (
    <section
      className="min-h-screen py-20 px-4 md:px-10 relative bg-gradient-to-br from-[#1c1c2b] via-black to-purple-900 text-white"
      id="experience"
    >
          <Link href={'/'}>
          <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50 hover:bg-slate-700/50 cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button></Link>
      {/* Section Heading with Subtle Glow */}
      <h2 className="text-4xl font-extrabold text-center text-purple-400 mb-12 drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">
        💼 Experience
      </h2>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} experience={exp} />
        ))}
      </div>

      {/* Optional: Purple radial glow behind */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-purple-700/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[200px] h-[200px] bg-purple-900/30 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default ExperienceSection;
