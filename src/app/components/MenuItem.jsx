import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SubMenu from './SubMenu'; // We'll create this next

const MenuItem = ({ item, isMobile, closeMobileMenu }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    if (!isMobile && item.submenu) {
      setIsSubMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && item.submenu) {
      setIsSubMenuOpen(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      if (item.submenu) {
        setIsSubMenuOpen(!isSubMenuOpen); // Toggle sub-menu for mobile
      } else {
        closeMobileMenu(); // Close mobile menu if it's a direct link
      }
    } else if (!item.submenu) {
        // For desktop, if it's a direct link, no action needed here as Link handles navigation
    }
  };

  return (
    <li
      className={`relative group ${isMobile ? 'w-full text-center' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.link ? (
        <Link href={item.link} className="text-gray=800 hover:text-gray-300 py-2 px-3 block transition-colors duration-200" onClick={handleClick}>
          {item.title}
        </Link>
      ) : (
        <span className="text-gray=800 hover:text-gray-300 py-2 px-3 block cursor-pointer transition-colors duration-200" onClick={handleClick}>
          {item.title}
          {item.submenu && (
            <span className="ml-2 inline-block">
              {isSubMenuOpen ? (
                <svg className="w-4 h-4 inline-block transform rotate-180 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              ) : (
                <svg className="w-4 h-4 inline-block transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              )}
            </span>
          )}
        </span>
      )}

      {item.submenu && (
        <AnimatePresence>
          {isSubMenuOpen && (
            <SubMenu submenu={item.submenu} isMobile={isMobile} closeMobileMenu={closeMobileMenu} />
          )}
        </AnimatePresence>
      )}
    </li>
  );
};

export default MenuItem;