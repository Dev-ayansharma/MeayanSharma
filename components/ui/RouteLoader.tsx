// components/RouteLoader.tsx
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const RouteLoader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    setLoading(true);
    timer = setTimeout(() => setLoading(false), 600); // mimic page load

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 animate-pulse" />
    </div>
  );
};

export default RouteLoader;

