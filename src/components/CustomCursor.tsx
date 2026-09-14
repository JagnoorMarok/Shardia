import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use motion values for immediate tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for smooth, organic trailing
  const springConfig = { damping: 20, stiffness: 200, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports hover (ignore mobile)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over an interactive element
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* The main solid dot that follows exactly on the cursor */}
      <motion.div
        style={{
          position: 'fixed',
          left: cursorX,
          top: cursorY,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#ff8c00',
          pointerEvents: 'none',
          zIndex: 9999,
          x: '-50%',
          y: '-50%',
          mixBlendMode: 'difference'
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
      />

      {/* The outer trailing ring that expands on hover */}
      <motion.div
        style={{
          position: 'fixed',
          left: smoothX,
          top: smoothY,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 140, 0, 0.5)',
          pointerEvents: 'none',
          zIndex: 9998,
          x: '-50%',
          y: '-50%',
          backdropFilter: 'blur(2px)' // Glassmorphism cursor trail
        }}
        animate={{
          width: isHovering ? '80px' : '32px',
          height: isHovering ? '80px' : '32px',
          backgroundColor: isHovering ? 'rgba(255, 140, 0, 0.15)' : 'transparent',
          borderColor: isHovering ? 'rgba(255, 140, 0, 0.9)' : 'rgba(255, 140, 0, 0.4)',
          boxShadow: isHovering ? '0 0 20px rgba(255, 140, 0, 0.5)' : 'none'
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
    </>
  );
};

export default CustomCursor;
