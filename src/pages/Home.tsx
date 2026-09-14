import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { Hexagon, Layers, Zap, Code, Cpu, Globe } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import ScrambleText from '../components/ScrambleText';
import { ScrollReveal, RevealItem } from '../components/ScrollReveal';
import MethodologyCuboid from '../components/MethodologyCuboid';
import LiquidCard from '../components/LiquidCard';
import TextReveal from '../components/TextReveal';

const Home = () => {
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  // Scroll animations for hero section (fade out over first 400px of scroll)
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -100]);

  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        style={{ 
          opacity: heroOpacity,
          y: heroY,
          position: 'fixed', 
          width: '100vw', 
          height: '100vh', 
          zIndex: 10, 
          pointerEvents: 'none', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <div className="hero-content">
          <div className="hero-mobile-branding">
            <h1>SHARDIA</h1>
            <h2>Web Solutions Agency</h2>
          </div>

          <div className="hero-mobile-tagline">
            <p>
              Engineering scalable web applications, immersive digital experiences, and robust technical infrastructure for ambitious brands.
            </p>
          </div>

          <div className="hero-left">
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: 0, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>SHARDIA</h1>
            <h2 style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', color: 'rgba(255,140,0,1)', textTransform: 'uppercase', letterSpacing: '2px', margin: '0.5rem 0 2rem', fontWeight: 600 }}>Web Solutions Agency</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '400px' }}>
              Engineering scalable web applications, immersive digital experiences, and robust technical infrastructure for ambitious brands.
            </p>
          </div>
          
          <div className="hero-right">
            <div style={{ color: 'rgba(255,140,0,1)', fontSize: '0.85rem', marginBottom: '1.5rem', letterSpacing: '2px' }}>[ CORE SYSTEMS ]</div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>STACK</span>
              <span style={{ fontWeight: 600 }}>REACT / NEXT / WEBGL</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>SERVICES</span>
              <span style={{ fontWeight: 600 }}>FULL-STACK DEV</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', color: '#fff' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>STATUS</span>
              <span style={{ color: '#4ade80', fontWeight: 600 }}>ONLINE_</span>
            </div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: 'absolute', bottom: '2rem', textAlign: 'center'
          }}
        >
          <p style={{ fontFamily: 'monospace', letterSpacing: '0.2em', fontSize: '0.8rem', color: '#fff', opacity: 0.7 }}>
            SCROLL TO EXPLORE // SHARDIA
          </p>
        </motion.div>
      </motion.section>

      {/* Spacer to allow scroll narrative to play out before content. */}
      <div style={{ height: '100vh', width: '100%', pointerEvents: 'none' }} />

      {/* Main Content Area */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        background: 'transparent',
        paddingTop: '15vh',
        paddingBottom: '10rem',
      }}>
        {/* Intro Section */}
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 2rem', marginBottom: '8rem' }}>
          <ScrollReveal direction="none" className="max-w-4xl text-center" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: '#fff', textShadow: '0 0 20px rgba(255,140,0,0.3)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              <TextReveal text="Engineering Digital Business Growth" />
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.8 }}>
              We don't just write code—we build strategic digital assets. As a premium software agency, Shardia partners with forward-thinking brands to launch high-performance web applications that drive revenue and scale effortlessly.
            </p>
          </ScrollReveal>
        </section>

        {/* Services Grid */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '12rem' }}>
          <ScrollReveal direction="up">
            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '4rem', color: '#fff', textAlign: 'center', letterSpacing: '-0.02em' }}><ScrambleText text="How We Drive Value" /></h3>
          </ScrollReveal>

          <ScrollReveal staggerChildren direction="up" className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
            {[
              { icon: <Layers color="#fff" size={32} />, title: "Technical Strategy", desc: "Aligning software architecture directly with your ROI and business objectives to ensure maximum leverage." },
              { icon: <Zap color="#fff" size={32} />, title: "High-Performance Engineering", desc: "Building blazing fast, conversion-optimized applications that leave your competitors behind." },
              { icon: <Hexagon color="#fff" size={32} />, title: "Premium UX/UI", desc: "Crafting immersive, frictionless user journeys that increase retention and drive sales." },
              { icon: <Code color="#fff" size={32} />, title: "Legacy Rescue", desc: "Modernizing outdated, slow systems into agile platforms without disrupting your daily operations." },
              { icon: <Cpu color="#fff" size={32} />, title: "Cloud Architecture", desc: "Deploying secure, auto-scaling infrastructure so your platform never goes down during traffic spikes." },
              { icon: <Globe color="#fff" size={32} />, title: "Growth & Iteration", desc: "Providing continuous feature development and A/B testing post-launch to keep compounding your success." }
            ].map((feat, i) => (
              <RevealItem key={i}>
                <LiquidCard icon={feat.icon} title={feat.title} desc={feat.desc} />
              </RevealItem>
            ))}
          </ScrollReveal>
        </section>

        {/* Our Process Section (3D Cuboid) */}
        <MethodologyCuboid />

        {/* Maintenance Plans */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '10rem' }}>
          <ScrollReveal direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1rem', color: '#fff', letterSpacing: '-0.02em' }}><ScrambleText text="Retained Engineering" /></h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              We operate as your fractional CTO and dedicated engineering team, ensuring your digital products continuously evolve.
            </p>
          </ScrollReveal>

          <ScrollReveal staggerChildren direction="up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {/* Professional Plan */}
            <RevealItem>
              <GlassCard style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h4 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>Growth Partner</h4>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>For growing businesses needing continuous iteration and optimization.</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1, color: 'var(--color-text-muted)' }}>
                  <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><span style={{ color: 'rgba(255,140,0,1)' }}>✓</span> <div><strong>Dedicated Developer</strong><br /><span style={{ fontSize: '0.9rem' }}>Direct access to your lead engineer</span></div></li>
                  <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><span style={{ color: 'rgba(255,140,0,1)' }}>✓</span> <div><strong>Weekly Feature Sprints</strong><br /><span style={{ fontSize: '0.9rem' }}>Continuous deployment of new features</span></div></li>
                  <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><span style={{ color: 'rgba(255,140,0,1)' }}>✓</span> <div><strong>Performance Monitoring</strong><br /><span style={{ fontSize: '0.9rem' }}>Proactive bottleneck resolution</span></div></li>
                </ul>
                <MagneticButton><button onClick={() => navigate('/contact')} style={{ marginTop: '2.5rem', width: '100%', padding: '1rem', background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.3)', color: '#fff', cursor: 'pointer', transition: 'background 0.3s', borderRadius: '8px' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,140,0,0.2)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,140,0,0.1)'}>Apply for Partnership</button></MagneticButton>
              </GlassCard>
            </RevealItem>

            {/* Enterprise Plan */}
            <RevealItem>
              <GlassCard style={{ display: 'flex', flexDirection: 'column', height: '100%', border: '1px solid rgba(255, 140, 0, 0.5)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255,140,0,1)', color: '#000', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', borderRadius: '8px' }}>Maximum Leverage</div>
                <h4 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>Full Agency Team</h4>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>An entire production team at a fraction of the cost of hiring in-house.</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1, color: 'var(--color-text-muted)' }}>
                  <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><span style={{ color: 'rgba(255,140,0,1)' }}>✓</span> <div><strong>Full Stack + UI/UX Team</strong><br /><span style={{ fontSize: '0.9rem' }}>Designers and engineers working in sync</span></div></li>
                  <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><span style={{ color: 'rgba(255,140,0,1)' }}>✓</span> <div><strong>Fractional CTO</strong><br /><span style={{ fontSize: '0.9rem' }}>High-level technical strategy & architecture</span></div></li>
                  <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}><span style={{ color: 'rgba(255,140,0,1)' }}>✓</span> <div><strong>Priority 24/7 Support</strong><br /><span style={{ fontSize: '0.9rem' }}>Immediate response SLA</span></div></li>
                </ul>
                <MagneticButton><button onClick={() => navigate('/contact')} style={{ marginTop: '2.5rem', width: '100%', padding: '1rem', background: 'rgba(255,140,0,1)', border: 'none', color: '#000', fontWeight: 600, cursor: 'pointer', transition: 'background 0.3s', borderRadius: '8px' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,160,50,1)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,140,0,1)'}>Book a Discovery Call</button></MagneticButton>
              </GlassCard>
            </RevealItem>
          </ScrollReveal>
        </section>

        {/* Early Client CTA */}
        <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <ScrollReveal direction="up">
            <GlassCard style={{ textAlign: 'center', padding: '5rem 3rem', border: '1px solid rgba(255, 140, 0, 0.4)', background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.05) 0%, rgba(20,20,29,0.8) 100%)' }} hoverEffect={false}>
              <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem', color: '#fff', letterSpacing: '-0.02em' }}><ScrambleText text="Ready to Scale?" /></h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 3rem' }}>
                We selectively partner with ambitious companies ready to dominate their market through superior digital experiences.
              </p>
              <MagneticButton>
                <button onClick={() => navigate('/contact')} style={{
                  padding: '1.2rem 3.5rem',
                  background: '#fff',
                  border: 'none',
                  color: '#000',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                  borderRadius: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 10px 30px rgba(255,255,255,0.1)'
                }} onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(255,255,255,0.2)' }} onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,255,255,0.1)' }}>
                  Let's Talk Business
                </button>
              </MagneticButton>
            </GlassCard>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
};

export default Home;
