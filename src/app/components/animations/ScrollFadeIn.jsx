// 'use client'; // This component uses client-side hooks

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const ScrollFadeIn = ({ children }) => {
//   const ref = useRef(null);

//   // useScroll to track the scroll position of the target element
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'end start'], // When the start of the target enters the end of the viewport, and when the end of the target leaves the start of the viewport
//   });

//   // useTransform to map scrollYProgress to opacity
//   // This animation will fade in as the section enters the viewport,
//   // and fade out as it leaves the viewport.
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0, 1, 1, 0]);

//   // Optional: A subtle slide-up animation as it enters
//   // The '0.8' value here determines when the element is fully up.
//   // The '0.2' value here determines when it starts to move down.
//   const y = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [100, 0, 0, -100]);


//   return (
//     <motion.div
//       ref={ref}
//       style={{ opacity, y }}
//       initial={{ opacity: 0, y: 100 }} // Initial state when not in view
//       // You might want to remove `initial` if `useTransform` covers all states
//       // Or set it to the initial state defined by useTransform's first value
//       // and let useTransform handle the rest.
//       // For this setup, `style` overrides `initial` based on scroll.
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default ScrollFadeIn;

'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollFadeIn = ({ children }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Opacity transformation:
  // Fades from 0 to 1 as the element enters view, stays 1, then fades back to 0 as it leaves.
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0, 1, 1, 0]);

  // Vertical (y-axis) transformation:
  // Slides up from 100px below its resting position to 0, stays at 0,
  // then slides further up to -100px (off-screen) as it leaves.
  //const y = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [100, 0, 0, -100]);
  const y = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [200, 0, 0, -200]); // Slides from 200px below to 200px above
// For slide-in from left and slide-out to left
const x = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [-100, 0, 0, -100]); // Starts left, moves to center, then left again
  return (
    <motion.div
      ref={ref}
      style={{ opacity ,y}} // Applying both opacity and y-axis transformation
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
