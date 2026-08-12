import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', style = {}, hoverEffect = true, ...props }) => {
  return (
    <motion.div 
      className={`glass-card ${className}`}
      style={{
        background: 'rgba(20, 20, 29, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 140, 0, 0.1)',
        borderRadius: '16px', // Rounded corners
        padding: '2rem',
        ...style
      }}
      whileHover={hoverEffect ? {
        y: -5,
        borderColor: 'rgba(255, 140, 0, 0.5)',
        boxShadow: '0 10px 40px rgba(255, 120, 0, 0.1)',
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
