import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavLinkProps {
  text: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, href }) => {
  return (
    <motion.div
      className="w-fit h-fit flex flex-row justify-center items-center gap-5 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }} // Hover effect
      transition={{ ease: [0.44, 0, 0.56, 1], duration: 0.3 }}
    >
      <Link href={href} className="relative w-fit h-fit">
        <span className="relative w-fit h-fit text-white text-lg font-medium hover:text-primary transition-all duration-300">
          {text}
        </span>
      </Link>
    </motion.div>
  );
};

export default NavLink;
