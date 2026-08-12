
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import { Hexagon, Layers, Zap, Code, Cpu, Globe } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import ScrambleText from '../components/ScrambleText';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { ScrollReveal, RevealItem } from '../components/ScrollReveal';

const Home = () => {
  const scrollY = useScrollProgress();
  const vh = typeof window !== 'undefined' ? window.innerHeight : 1000;

  // Calculate narrative progress (0 to 1 over the 300vh spacer)
  const progress = Math.min(Math.max(scrollY / (3 * vh), 0), 1);

  // Phase opacity calculations (fading in and out sequentially without overlapping)
  const heroOpacity = progress < 0.95 ? 1 : Math.max(1 - (progress - 0.95) * 20, 0);

  const dbOpacity = progress > 0.3 && progress < 0.6
    ? (progress < 0.35 ? (progress - 0.3) * 20 : progress > 0.55 ? 1 - (progress - 0.55) * 20 : 1)
    : 0;

  const cloudOpacity = progress > 0.6 && progress < 0.95
    ? (progress < 0.65 ? (progress - 0.6) * 20 : progress > 0.9 ? 1 - (progress - 0.9) * 20 : 1)
    : 0;
  const navigate = useNavigate();


  return (
    <div>
      {/* Hero Section (Always fixed, but text fades in/out based on phase) */}
      <section style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: 10, pointerEvents: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

        {/* Phase 1: Landing Interface */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          opacity: heroOpacity,
          transition: 'opacity 0.5s',
          display: 'flex',
          justifyContent: 'space-between',
          padding: 'clamp(2rem, 5vw, 4rem)',
          boxSizing: 'border-box',
          pointerEvents: 'none'
        }}>
          {/* Left Side: Identity */}
          <div style={{ marginTop: '25vh', maxWidth: '350px', textAlign: 'left' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: 0, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>SHARDIA</h1>
            <h2 style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', color: 'rgba(255,140,0,1)', textTransform: 'uppercase', letterSpacing: '2px', margin: '0.5rem 0 2rem', fontWeight: 600 }}>Web Solutions Agency</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Engineering scalable web applications, immersive digital experiences, and robust technical infrastructure for ambitious brands.
            </p>
          </div>
          
          {/* Right Side: Tech Specs */}
          <div style={{ marginTop: '25vh', maxWidth: '300px', textAlign: 'right', fontFamily: 'monospace' }}>
            <div style={{ color: 'rgba(255,140,0,1)', fontSize: '0.85rem', marginBottom: '1.5rem', letterSpacing: '2px' }}>[ CORE SYSTEMS ]</div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>STACK</span>
              <span style={{ fontWeight: 600 }}>REACT / NODE / WEBGL</span>
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

        {/* Scroll Hint */}
        <div style={{
          position: 'absolute', bottom: '2rem', textAlign: 'center',
          opacity: heroOpacity * 0.5,
          transition: 'opacity 0.1s'
        }}>
          <p style={{ fontFamily: 'monospace', letterSpacing: '0.2em', fontSize: '0.8rem', color: '#fff' }}>
            SCROLL TO EXPLORE // SHARDIA
          </p>
        </div>

        {/* Phase 2: Database Connects */}
        <div style={{
          position: 'absolute',
          opacity: dbOpacity,
          transition: 'opacity 0.1s',
          textAlign: 'center'
        }}>
          <p style={{ color: 'rgba(255, 140, 0, 1)', fontFamily: 'monospace', letterSpacing: '2px', fontSize: '1.2rem' }}>
            {">"} CONNECTING DATABASE... [OK]
          </p>
        </div>

        {/* Phase 3: Cloud Appears */}
        <div style={{
          position: 'absolute',
          opacity: cloudOpacity,
          transition: 'opacity 0.1s',
          textAlign: 'center'
        }}>
          <p style={{ color: 'rgba(100, 200, 255, 1)', fontFamily: 'monospace', letterSpacing: '2px', fontSize: '1.2rem' }}>
            {">"} PROVISIONING CLOUD INFRASTRUCTURE... [OK]
          </p>
        </div>

      </section>

      {/* Spacer to allow scroll narrative to play out before content. */}
      <div style={{ height: '400vh', width: '100%', pointerEvents: 'none' }} />

      {/* Main Content Area */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        background: 'linear-gradient(to bottom, rgba(5,5,8,0) 0%, rgba(5,5,8,1) 15%, rgba(5,5,8,1) 100%)',
        paddingTop: '15vh',
        paddingBottom: '10rem',
      }}>

        {/* Intro Section */}
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 2rem', marginBottom: '8rem' }}>
          <ScrollReveal direction="up" className="max-w-4xl text-center" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: '#fff', textShadow: '0 0 20px rgba(255,140,0,0.3)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Engineering Digital <br /><span style={{ color: 'rgba(255, 140, 0, 1)' }}>Business Growth</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.8 }}>
              We don't just write code—we build strategic digital assets. As a premium software agency, Shardia partners with forward-thinking brands to launch high-performance web applications that drive revenue and scale effortlessly.
            </p>
          </ScrollReveal>
        </section>

        {/* Services Grid */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '12rem' }}>
          <ScrollReveal direction="up">
            <h3 style={{ fontSize: '2.5rem', marginBottom: '4rem', color: '#fff', textAlign: 'center', letterSpacing: '-0.02em' }}><ScrambleText text="How We Drive Value" /></h3>
          </ScrollReveal>

          <ScrollReveal staggerChildren direction="up" className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Layers color="rgba(255, 140, 0, 1)" size={28} />, title: "Technical Strategy", desc: "Aligning software architecture directly with your ROI and business objectives to ensure maximum leverage." },
              { icon: <Zap color="rgba(255, 140, 0, 1)" size={28} />, title: "High-Performance Engineering", desc: "Building blazing fast, conversion-optimized applications that leave your competitors behind." },
              { icon: <Hexagon color="rgba(255, 140, 0, 1)" size={28} />, title: "Premium UX/UI", desc: "Crafting immersive, frictionless user journeys that increase retention and drive sales." },
              { icon: <Code color="rgba(255, 140, 0, 1)" size={28} />, title: "Legacy Rescue", desc: "Modernizing outdated, slow systems into agile platforms without disrupting your daily operations." },
              { icon: <Cpu color="rgba(255, 140, 0, 1)" size={28} />, title: "Cloud Architecture", desc: "Deploying secure, auto-scaling infrastructure so your platform never goes down during traffic spikes." },
              { icon: <Globe color="rgba(255, 140, 0, 1)" size={28} />, title: "Growth & Iteration", desc: "Providing continuous feature development and A/B testing post-launch to keep compounding your success." }
            ].map((feat, i) => (
              <RevealItem key={i}>
                <GlassCard style={{ textAlign: 'left', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(255, 140, 0, 0.1)', borderRadius: '50%', width: 'fit-content' }}>
                    {feat.icon}
                  </div>
                  <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#fff', fontWeight: 600 }}>{feat.title}</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.6, flexGrow: 1 }}>{feat.desc}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </ScrollReveal>
        </section>

        {/* Our Process Section */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '12rem' }}>
          <ScrollReveal direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '2.5rem', color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}><ScrambleText text="Our Methodology" /></h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>A battle-tested process for predictable, high-quality delivery.</p>
          </ScrollReveal>
          
          <ScrollReveal staggerChildren direction="up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { num: '01', title: 'Discovery', desc: 'Deep dive into your business model, identifying technical bottlenecks and defining success metrics.' },
              { num: '02', title: 'Architecture', desc: 'Designing a scalable, secure, and performant technical foundation tailored to your specific needs.' },
              { num: '03', title: 'Execution', desc: 'Agile sprints delivering functional software rapidly, with constant feedback loops and transparent communication.' },
              { num: '04', title: 'Scale', desc: 'Post-launch optimization, continuous monitoring, and iterative feature development to drive compounding growth.' }
            ].map((step, i) => (
              <RevealItem key={i}>
                <GlassCard style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-1rem', right: '-1rem', fontSize: '6rem', fontWeight: 800, color: 'rgba(255, 140, 0, 0.05)', lineHeight: 1, pointerEvents: 'none' }}>
                    {step.num}
                  </div>
                  <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>{step.title}</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                    {step.desc}
                  </p>
                </GlassCard>
              </RevealItem>
            ))}
          </ScrollReveal>
        </section>

        {/* Maintenance Plans */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '10rem' }}>
          <ScrollReveal direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff', letterSpacing: '-0.02em' }}><ScrambleText text="Retained Engineering" /></h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              We operate as your fractional CTO and dedicated engineering team, ensuring your digital products continuously evolve.
            </p>
          </ScrollReveal>

          <ScrollReveal staggerChildren direction="up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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
              <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#fff', letterSpacing: '-0.02em' }}><ScrambleText text="Ready to Scale?" /></h3>
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
