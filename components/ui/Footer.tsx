'use client';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white py-6 text-center">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
