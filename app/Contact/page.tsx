'use client';

import { motion } from 'framer-motion';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'; // adjust path as needed
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section id="contact">
      <BackgroundBeamsWithCollision className="py-24 px-6 min-h-screen bg-black">
        <div
          ref={ref}
          className="relative z-10 max-w-3xl w-full text-center space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl font-bold tracking-tight text-purple-400"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="text-lg text-gray-300"
          >
            Schedule a meeting or drop a message — I'm excited to collaborate!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full mt-8 mx-auto max-w-xl relative"
          >
            <div className="h-[500px] bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-20 rounded-xl">
                  <Loader className="animate-spin text-purple-400" size={28} />
                </div>
              )}
              <iframe
                src="https://cal.com/helloayans/quick-chat"
                width="100%"
                height="100%"
                onLoad={() => setIsLoading(false)}
                className=" w-full h-full rounded-lg z-10 bg-[#18181b] border-none"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Contact;

