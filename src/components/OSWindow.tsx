import React from 'react';
import { motion } from 'framer-motion';

const OSWindow = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.97 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: 1, 
        filter: 'blur(0px)',
        transitionEnd: { transform: 'none', filter: 'none' }
      }}
      exit={{ opacity: 0, y: -40, filter: 'blur(10px)', scale: 1.03 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1,
        transformOrigin: 'center top'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255, 140, 0, 0.3), transparent)',
        zIndex: 10
      }} />
      {children}
    </motion.div>
  );
};

export default OSWindow;
