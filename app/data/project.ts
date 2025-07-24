export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  image: string;
  features: string[];
};

export const projectData: Project[] = [
  {
    slug: 'mssg-sent',
    title: 'Mssg Sent',
    description:
      'mssgsent is a Next.js and TypeScript-powered web application that allows users to send messages to themselves, store them securely, and receive reminders. It also features AI-powered message suggestions using the Cohere AI API.',
    technologies: ['Next.js', 'React', 'TypeScript',' MongoDB', 'Expressjs','Brevo','NextAuth','Cohere AI','Vercel'],
    liveLink: 'https://mssgsent.vercel.app/',
    githubLink: 'https://github.com/Dev-ayansharma/mssgsent',
    image: '/project2.png',
    
    features: [
      '📩 Send Messages to Yourself – Save personal notes, reminders, or thoughts.',
      '🔄 CRUD Operations – Create, update, delete, and manage messages.',
      '🤖 AI Message Suggestions – Get smart message recommendations with Cohere AI.',
      '🔑 Authentication – Secure sign-in using NextAuth and custom signup.',
'✉️ Email Verification – Sign-up verification via Brevo (Gmail SMTP app password).',
'🛢️ MongoDB Database – Efficient and scalable data storage.',
'🌐 Deployed on Vercel – Fast and reliable hosting.',
    ],
  },
   {
    slug: 'reelise',
    title: 'Reelise',
    description:
      'Reelise is a reel upload platform built with Next.js, NextAuth for authentication, ImageKit for media storage, and DaisyUI for styling.',
    technologies: ['Next.js', 'React', 'TypeScript','NextAuth','Daisy UI','ImageKit','Vercel'],
    liveLink: 'hhttps://reelise.vercel.app/',
    githubLink: 'https://github.com/Dev-ayansharma/Reelise',
    image: '/project1.png',
    
    features: [
   
      '🔑 Authentication: NextAuth is used for secure user authentication..',
      '🖼️ Image/Video Upload: ImageKit handles media storage and optimization',
      '📕 UI Components: DaisyUI is used for a clean and responsive design'



    ],
  },
   {
    slug: 'As Blogs',
    title: 'as-blogs',
    description:
      'A blog platform with React and Vite',
    technologies: [ 'React', 'Javascript' ,'Tailwind Css' ,'Vite','Appwrite','Vercel'],
    liveLink: 'https://as-blogs.vercel.app/',
    githubLink: 'https://github.com/Dev-ayansharma/As-Blogs',
    image: '/project3.png',
 features: [
  '📦 Used Redux Toolkit for efficient state management',
  '🔐 Appwrite handles authentication & backend',
  '⚡ Vite ensures lightning-fast development',
  '🎨 Styled beautifully with Tailwind CSS',
],

  },
   {
    slug: 'mcp-central',
    title: 'MCP Central',
    description:
      'A Full stack application or Hub for the mcp servers where user can submit,edit,delete or explore the servers',
    technologies: [ 'React', 'Javascript' ,'Tailwind Css' ,'Vite','Express','MongoDB','Vercel'],
    liveLink: 'https://mcp-central.vercel.app/',
    githubLink: 'https://github.com/Dev-ayansharma/mcp-central',
    image: '/project4.png',
    
    features: [
  '🔐 Authentication: Custom user and developer sessions using Context API',
  '🧠 Backend: Optimized routes with controllers & middleware',
  '🛠️ Functions: Full CRUD operations for users and devs',
  '🎨 Frontend: Styled with Tailwind CSS & React',
  '🛑 Error Handling: Custom boundaries and edge-case coverage',
  '👨‍💻 Internship Project: Built as part of a real-world dev internship',
],

  },

   {
    slug: 'DevCollab-Ai',
    title: 'MCP Central',
    description:
      'A Automatically assign your technical issues to skilled moderators. Get help faster with intelligent ticket routing and real-time collaboration.',
    technologies: [ 'React', 'Javascript' ,'Tailwind Css' ,'Vite','Express','MongoDB','Vercel','Inngest','Gemini Ai'],
    liveLink: 'https://dev-collab-ai.vercel.app/',
    githubLink: 'https://github.com/Dev-ayansharma/DevCollab-Ai',
    image: '/project5.png',
    
    features: [
      
    ]
   }

];