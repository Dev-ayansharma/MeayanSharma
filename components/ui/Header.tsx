'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Set scroll state for background blur/shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll('section[id]');
      let currentSection: string | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = `#${section.id}`;
        }
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 w-full z-50 px-6 md:px-16 py-4 flex items-center justify-between transition-all duration-300',
        scrolled ? 'bg-black/70 shadow-lg backdrop-blur-xl' : 'bg-transparent'
      )}
    >
      <Link
        href="/"
        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#d879de] hover:opacity-80 transition"
      >
        Ayan Sharma
      </Link>

      <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'relative group transition duration-300',
              activeSection === href
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#d879de] font-semibold'
                : 'text-gray-300 hover:text-white'
            )}
          >
            {label}
            <span
              className={cn(
                'absolute left-0 -bottom-1 h-[2px] bg-purple-500 rounded-full transition-all duration-300',
                activeSection === href ? 'w-full' : 'w-0 group-hover:w-full'
              )}
            ></span>
          </Link>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;



