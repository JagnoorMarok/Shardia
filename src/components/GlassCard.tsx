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
        background: 'linear-gradient(135deg, rgba(30, 30, 40, 0.7) 0%, rgba(10, 10, 15, 0.4) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '24px',
        padding: '2.5rem',
        boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
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
