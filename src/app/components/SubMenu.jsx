import Link from 'next/link';
import { motion } from 'framer-motion';

const SubMenu = ({ submenu, isMobile, closeMobileMenu }) => {
  const ulVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.05, // Stagger animation for children
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const liVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.ul
      variants={ulVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`${
        isMobile
          ? 'flex flex-col items-center bg-gray-600 py-2 w-full mt-2'
          : 'absolute top-full left-0 bg-gray-700 py-2 rounded shadow-lg w-48'
      }`}
    >
      {submenu.map((subItem) => (
        <motion.li
          key={subItem.id}
          variants={liVariants}
          className={`${isMobile ? 'w-full text-center' : 'w-full'}`}
        >
          <Link
            href={subItem.link}
            className="block px-4 py-2 text-white hover:bg-gray-600 transition-colors duration-200"
            onClick={closeMobileMenu} // Close mobile menu when a sub-item is clicked
          >
            {subItem.title}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SubMenu;