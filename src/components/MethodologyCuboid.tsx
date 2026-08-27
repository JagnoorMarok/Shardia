import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlassCard from './GlassCard';
import ScrambleText from './ScrambleText';

const steps = [
  { num: '01', title: 'Discovery', desc: 'Deep dive into your business model, identifying technical bottlenecks and defining success metrics.' },
  { num: '02', title: 'Architecture', desc: 'Designing a scalable, secure, and performant technical foundation tailored to your specific needs.' },
  { num: '03', title: 'Execution', desc: 'Agile sprints delivering functional software rapidly, with constant feedback loops and transparent communication.' },
  { num: '04', title: 'Scale', desc: 'Post-launch optimization, continuous monitoring, and iterative feature development to drive compounding growth.' }
];

// 3D Cuboid Configuration
const FACE_HEIGHT = 350;
const MAX_WIDTH = 500;
const TRANSLATE_Z = FACE_HEIGHT / 2;

const MethodologyCuboid = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this component's 300vh wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] 
  });

  // Map scroll progress to a full 270-degree rotation.
  // We clamp the rotation at 0.75 progress so the 4th side stays locked on screen
  // for a while before the sticky container naturally un-sticks and scrolls up.
  const rotateX = useTransform(scrollYProgress, [0, 0.75], [0, 270]);

  return (
    <div ref={containerRef} style={{ height: '400vh', position: 'relative' }}>
      
      {/* Sticky wrapper that stays in viewport while scrolling */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '0 2rem'
      }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 10 }}>
          <h3 style={{ fontSize: '2.5rem', color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            <ScrambleText text="Our Methodology" />
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
            A battle-tested process for predictable, high-quality delivery.
          </p>
        </div>

        {/* The rotating 3D Pivot */}
        <div style={{ perspective: '1200px', width: '100%', maxWidth: MAX_WIDTH, height: FACE_HEIGHT }}>
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              transformStyle: 'preserve-3d',
              rotateX: rotateX
            }}
          >
          {steps.map((step, index) => {
            // Face transforms
            let transform = '';
            if (index === 0) transform = `translateZ(${TRANSLATE_Z}px)`; // Front
            else if (index === 1) transform = `rotateX(-90deg) translateZ(${TRANSLATE_Z}px)`; // Top
            else if (index === 2) transform = `rotateX(-180deg) translateZ(${TRANSLATE_Z}px)`; // Back
            else if (index === 3) transform = `rotateX(-270deg) translateZ(${TRANSLATE_Z}px)`; // Bottom
            
            return (
              <div key={step.num} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                transform: transform,
                display: 'flex',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}>
                <GlassCard style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ position: 'absolute', top: '-1rem', right: '-1rem', fontSize: '8rem', fontWeight: 900, color: 'rgba(255, 140, 0, 0.25)', lineHeight: 1, pointerEvents: 'none' }}>
                    {step.num}
                  </div>
                  <h4 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>{step.title}</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                    {step.desc}
                  </p>
                </GlassCard>
              </div>
            );
          })}
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default MethodologyCuboid;
