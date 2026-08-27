import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  maxWidth?: string;
  alignHeader?: 'left' | 'center';
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  description,
  maxWidth = '1200px',
  alignHeader = 'left'
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ 
        paddingTop: '15vh', 
        minHeight: '80vh', 
        paddingBottom: '10rem', 
        paddingLeft: '2rem', 
        paddingRight: '2rem', 
        maxWidth: maxWidth, 
        margin: '0 auto',
        overflowX: 'hidden'
      }}
    >
      <ScrollReveal>
        <div style={{ 
          marginBottom: '5rem',
          textAlign: alignHeader,
          display: 'flex',
          flexDirection: 'column',
          alignItems: alignHeader === 'center' ? 'center' : 'flex-start'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)', 
            marginBottom: '1rem', 
            color: '#fff', 
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-display)'
          }}>
            {title}
          </h1>
          {description && (
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--color-text-muted)', 
              maxWidth: '700px', 
              lineHeight: 1.8 
            }}>
              {description}
            </p>
          )}
        </div>
      </ScrollReveal>
      
      {/* Page Content */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default PageLayout;
