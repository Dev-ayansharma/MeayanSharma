'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

const AnimatedCard = ({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;
  const slideFrom = isEven ? -60 : 60;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: slideFrom }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
