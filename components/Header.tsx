import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavLink from '@/components/NavLink';
import NavButton from './NavButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 w-full h-fit z-10 flex flex-row justify-between items-center pt-5 pb-5 bg-dark overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: [0.44, 0, 0.56, 1], duration: 0.4 }}
    >
      <div className="relative w-full h-fit flex flex-row justify-between items-center px-4 md:px-20 overflow-hidden">
        {/* Logo Text */}
        <div
          className="relative max-w-[212px] flex flex-row items-center whitespace-nowrap overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-primary text-xl font-bold italic">
            MichaelYoussefDev
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Navigation Links */}
        {!isHovered && (
          <div className={`absolute top-16 left-0 w-full bg-darkGray lg:relative lg:top-0 lg:left-auto lg:w-fit lg:flex lg:flex-row justify-center items-center gap-12 p-4 lg:bg-transparent rounded-full border border-solid border-white ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <NavLink text="About" href="/about-us" />
            <NavLink text="Services" href="/Services" />
            <NavLink text="Portfolio" href="/Portfolio" />
            <NavLink text="Blogs" href="/Blogs" />
            <NavLink text="Pricing" href="/Pricing" />
          </div>
        )}

        {!isHovered && (
          <div className='relative w-fit h-fit hidden lg:block'>
            <NavButton />
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Header;
