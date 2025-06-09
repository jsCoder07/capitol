'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItem'; // We'll create this next
import menuData from '../data/menuData.json'; // Your JSON data
import Image from 'next/image';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white-800 p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>
            <Image src={"/images/logo.png"} width={70} height={70}></Image></div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuData.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-gray-700 py-4 shadow-lg"
          >
            <ul className="flex flex-col items-center space-y-4">
              {menuData.map((item) => (
                <MenuItem key={item.id} item={item} isMobile={true} closeMobileMenu={() => setIsOpen(false)} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Menu;