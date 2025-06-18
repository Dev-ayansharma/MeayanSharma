import ProjectDetailsClient from '@/components/ui/ProjectDetailsClient';
import Link from 'next/link';
import { use } from 'react';
import { projectData } from '@/app/data/project';



export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>; // 👈 async params
}) {
  const { slug } = use(params); // ✅ unwrap the slug
  const project = projectData.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
 if (!project)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br  from-[#1c1c2b] via-black to-purple-700 text-white p-6">
      <h1 className="text-4xl font-bold text-red-400 mb-4">🚫 Project Not Found</h1>
      <p className="text-lg text-gray-300 mb-6 text-center">
        The project you're looking for doesn’t exist or the URL is incorrect.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition duration-200 shadow-md"
      >
        ← Go Back Home
      </Link>
    </div>
  );


  return <ProjectDetailsClient project={project} />;
}

