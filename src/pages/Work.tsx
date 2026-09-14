import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import Footer from '../components/Footer';

const projects = [
  { name: "Jagnoor Marok", tag: "Personal Portfolio", img: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", metric: "jagnoormarok.dev", link: "https://jagnoormarok.dev" },
  { name: "Synaptic", tag: "Web Application", img: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)", metric: "syn-aptic.vercel.app", link: "https://syn-aptic.vercel.app" }
];

const Work = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', minHeight: '100vh', position: 'relative' }}
    >
      {/* Sticky Header / Background Screen */}
      <div style={{ 
        position: 'sticky', 
        top: '15vh', 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 2rem',
        zIndex: 0 
      }}>
        <ScrollReveal>
          <div style={{ marginBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem', color: '#fff', letterSpacing: '-0.02em', fontFamily: 'var(--font-display)' }}>
              Selected Work
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '700px', lineHeight: 1.8 }}>
              A curated collection of platforms and digital products engineered by Shardia. We measure success by the growth and ROI we deliver to our partners.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Cards Container */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        display: 'flex', 
        flexDirection: 'column', 
        padding: '0 1rem 10rem 1rem', // almost screen width
        gap: '60vh',
        marginTop: '30vh' 
      }}>
        {projects.map((project, i) => (
          <div 
            key={i}
            style={{ 
              position: 'sticky', 
              top: `calc(6rem + ${i * 1.5}rem)`, // sits right under the navbar
              width: '100%', 
              height: 'calc(100vh - 7rem)', // fills the rest of the screen height
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 -20px 40px rgba(0,0,0,0.5)',
              borderRadius: '24px',
              background: project.img,
              border: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden',
              zIndex: 10 + i
            }}
          >
            <ScrollReveal delay={0} style={{ width: '100%', height: '100%' }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%', cursor: 'pointer' }}>
                {/* iframe Preview */}
                <div style={{ width: '100%', height: '100%', position: 'relative', pointerEvents: 'none' }}>
                  <iframe 
                    src={project.link} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      border: 'none', 
                      position: 'absolute', 
                      top: 0, 
                      left: 0
                    }} 
                    title={`${project.name} preview`}
                    sandbox="allow-scripts allow-same-origin"
                    tabIndex={-1}
                  />
                  <div 
                    style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0)', transition: 'background 0.3s' }} 
                    onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} 
                    onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0)'} 
                  />
                </div>
              </a>
            </ScrollReveal>
          </div>
        ))}
      </div>

      {/* Flashcard Footer */}
      <div style={{
          position: 'sticky',
          top: `calc(6rem + ${projects.length * 1.5}rem)`, 
          width: '100%',
          boxShadow: '0 -20px 40px rgba(0,0,0,0.5)',
          borderRadius: '24px 24px 0 0',
          overflow: 'hidden',
          zIndex: 50,
          marginTop: '60vh', // matches the gap between cards
          border: '1px solid rgba(255,255,255,0.1)',
          borderBottom: 'none'
      }}>
          <Footer />
      </div>
    </motion.div>
  );
};

export default Work;
