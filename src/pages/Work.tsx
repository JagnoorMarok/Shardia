import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

const projects = [
  { name: "Aether Protocol", tag: "Web3 / DeFi", img: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", metric: "+140% TVL" },
  { name: "Nexus Analytics", tag: "Data Visualization", img: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)", metric: "3x User Retention" },
  { name: "Orbital Engine", tag: "WebGL Interactive", img: "linear-gradient(135deg, #2b1055 0%, #7597de 100%)", metric: "Site of the Day" },
  { name: "Vault Enterprise", tag: "Security Infrastructure", img: "linear-gradient(135deg, #111 0%, #333 100%)", metric: "Zero Breach" },
  { name: "SynthWave AI", tag: "Machine Learning", img: "linear-gradient(135deg, #290a59 0%, #ff7c00 100%)", metric: "1M+ API Calls" }
];

const Work = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <div style={{ paddingTop: '15vh', minHeight: '80vh', paddingBottom: '10rem', overflowX: 'hidden' }}>
      <div style={{ paddingLeft: '2rem', paddingRight: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem', color: '#fff', letterSpacing: '-0.02em' }}>Selected Work</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '4rem', maxWidth: '600px', lineHeight: 1.8 }}>
            A curated collection of platforms and digital products engineered by Shardia. We measure success by the growth and ROI we deliver to our partners.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <motion.div 
          ref={carouselRef} 
          style={{ cursor: 'grab', overflow: 'hidden', paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2))', paddingBottom: '2rem' }}
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            style={{ display: 'flex', gap: '3rem' }}
          >
            {projects.map((project, i) => (
              <motion.div 
                key={i} 
                style={{ minWidth: '400px', width: '400px' }}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div style={{ 
                  width: '100%', 
                  height: '450px', 
                  background: project.img, 
                  borderRadius: '16px',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  pointerEvents: 'none'
                }}>
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '20px', backdropFilter: 'blur(10px)', color: '#fff', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    {project.tag}
                  </div>
                  <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(0,0,0,0.8)', padding: '0.5rem 1rem', borderRadius: '20px', backdropFilter: 'blur(10px)', color: '#fff', fontSize: '0.9rem', fontWeight: 600, border: '1px solid rgba(255,140,0,0.3)' }}>
                    {project.metric}
                  </div>
                </div>
                <h4 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 600 }}>{project.name}</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>View Case Study &rarr;</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
          &larr; Drag to explore &rarr;
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Work;
