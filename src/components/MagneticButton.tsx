import React, { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => setOpacity(0);
  const handleMouseEnter = () => setOpacity(1);

  // Isolate the child to inject styles and the spotlight directly inside it
  const child = React.Children.only(children) as React.ReactElement;
  
  const clonedChild = React.cloneElement(child, {
    ref: ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
    // Ensure the child creates a containing block and hides overflow to clip the spotlight
    style: { 
      ...child.props.style, 
      position: 'relative', 
      overflow: 'hidden' 
    },
    children: (
      <>
        {/* Original text/content wrapped to stay above the spotlight if needed */}
        <span style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
          {child.props.children}
        </span>
        
        {/* Spotlight Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            pointerEvents: 'none',
            opacity: opacity,
            transition: 'opacity 0.3s ease',
            zIndex: 10,
            background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.4), transparent 100%)`,
            mixBlendMode: 'color-dodge',
          }}
        />
      </>
    )
  });

  return (
    <motion.div
      style={{ 
        display: child.props.style?.width === '100%' ? 'block' : 'inline-block',
        width: child.props.style?.width === '100%' ? '100%' : 'auto' 
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      onClick={onClick}
    >
      {clonedChild}
    </motion.div>
  );
};

export default MagneticButton;
