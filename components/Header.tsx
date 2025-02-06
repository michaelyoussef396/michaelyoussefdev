import React from 'react';
import { motion } from 'framer-motion';
import NavLink from '@/components/NavLink';
import NavButton from './NavButton';

const Header = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 w-full h-fit z-10 flex flex-row justify-between items-center pt-5 pb-5 bg-dark overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: [0.44, 0, 0.56, 1], duration: 0.4 }}
    >
      <div className="relative w-full h-fit flex flex-row justify-between items-center px-20 overflow-hidden">
        {/* Logo Text */}
        <div className="relative max-w-[212px] flex flex-row items-center whitespace-nowrap overflow-hidden">
          <div className="text-primary text-xl font-bold italic">
            MichaelYoussefDev
          </div>
        </div>

        {/* Navigation Links */}
        <div className="relative w-fit h-fit flex flex-row justify-center items-center gap-12 p-4 bg-darkGray rounded-full border border-solid border-white">
          <NavLink text="About" href="/about-us" />
          <NavLink text="Services" href="/Services" />
          <NavLink text="Portfolio" href="/Portfolio" />
          <NavLink text="Blogs" href="/Blogs" />
          <NavLink text="Pricing" href="/Pricing" />
        </div>

        <div className='realtive w-fit h-fit '>
            <NavButton />
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
