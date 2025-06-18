'use client';

import { Experience } from '@/app/data/Experience';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils'; // optional if using clsx or similar
import { PiCertificateBold } from 'react-icons/pi';
import { BsCalendarDate } from 'react-icons/bs';
import Link from 'next/link';
type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className="bg-gradient-to-br from-purple-900/30 via-black/60 to-black border border-purple-800/20 backdrop-blur-md rounded-2xl  shadow-md shadow-purple-700/40 p-6 transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-1">{experience.title}</h3>
         <Link href={experience.visit} className='hover:underline'> <p className="text-sm text-purple-300">{experience.company}</p></Link>
        </div>
        <Badge variant="secondary" >
          {experience.jobtype}
        </Badge>
      </div>

      <p className="flex items-center gap-2 text-sm text-gray-400 mb-3">
        <BsCalendarDate className="text-purple-400" />
        {experience.startDate} – {experience.endDate}
      </p>

      <p className="text-sm text-gray-200 mb-4">{experience.description}</p>

      <div className="flex flex-wrap gap-3 text-sm">
        {experience.paid && (
          <Badge variant="secondary" >
            💸 Paid
          </Badge>
        )}
        {experience.certificate && (
          <Link
            href={experience.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-purple-400 hover:underline"
          >
            <PiCertificateBold className="text-lg" /> Certificate
            <FaExternalLinkAlt className="text-xs" />
          </Link>
        )}
        {experience.worklink && (
          <Link
            href={experience.worklink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline flex items-center gap-1"
          >
            🌐 Work check
            <FaExternalLinkAlt className="text-xs" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
