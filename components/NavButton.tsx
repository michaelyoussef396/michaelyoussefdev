import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const NavButton = () => {
  return (
    <motion.div
      className="group relative w-[212px] h-fit flex justify-end items-center overflow-hidden"
      transition={{ ease: [0.44, 0, 0.56, 1], duration: 0.3 }}
    >
      <Link
        href="/contact"
        className="relative w-[212px] h-[50px] flex flex-row justify-between items-center gap-3 rounded-full border border-transparent transition-all duration-300 group-hover:border-white "
      >
        {/* Left Wrapper (Text Section) */}
        <div className="relative flex items-center justify-center w-fit h-full px-5">
          {/* Default hidden, Appears on hover */}
          <motion.span 
            className="absolute text-white uppercase text-sm font-semibold tracking-wide opacity-0 transition-all duration-300 group-hover:opacity-100"
          >
            Get In Touch
          </motion.span>

          {/* Default visible, disappears on hover */}
          <motion.span 
            className="text-white uppercase text-sm font-semibold tracking-wide transition-all duration-300 group-hover:opacity-0"
          >
            Get In Touch
          </motion.span>
        </div>

        {/* Right Wrapper (Circle with Arrow) */}
        <motion.div
          className="relative w-[50px] h-[50px] flex justify-center items-center bg-primary rounded-full transition-all duration-300"
          initial={{ rotate: 40 }} 
          whileHover={{ rotate: 90 }} // Rotates from 40° to 90° on hover
        >
          <Image src="/arrow.svg" alt="Arrow" width={20} height={20} />
        </motion.div>

      </Link>
    </motion.div>
  );
};

export default NavButton;
