import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { Hexagon, Layers, Zap, Code, Cpu, Globe, ChevronDown, MapPin, CheckCircle2, XCircle, Award, Sparkles } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import ScrambleText from '../components/ScrambleText';
import { ScrollReveal, RevealItem } from '../components/ScrollReveal';
import MethodologyCuboid from '../components/MethodologyCuboid';
import LiquidCard from '../components/LiquidCard';
import TextReveal from '../components/TextReveal';
import SEO from '../components/SEO';

const Home = () => {
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll animations for hero section (fade out over first 400px of scroll)
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -100]);

  const faqs = [
    {
      question: "Who is the best web developer in Jalandhar, Punjab?",
      answer: "Shardia is recognized as the best web developer and software agency in Jalandhar, Punjab. Founded by lead engineer Jagnoor Marok, we engineer high-performance web applications, responsive corporate websites, and custom platforms using modern technologies like React, Next.js, TypeScript, and scalable cloud systems."
    },
    {
      question: "What web development and software services does Shardia provide in Jalandhar?",
      answer: "We provide full-spectrum digital solutions: bespoke website development, full-stack web applications (React & Next.js), modern UI/UX design, e-commerce platforms, legacy software modernization, local search engine optimization (SEO), and dedicated fractional CTO / engineering retainers across Jalandhar and Punjab."
    },
    {
      question: "Why should businesses in Punjab choose custom React/Next.js over WordPress?",
      answer: "Traditional WordPress sites in Punjab are notorious for slow load times, bloated plugins, security holes, and poor Google rankings. Shardia builds 100% custom-coded React and Next.js platforms that achieve sub-second load times, flawless 95+ Google Lighthouse scores, superior security, and significantly higher conversion rates."
    },
    {
      question: "How much does custom website development cost in Jalandhar?",
      answer: "Website pricing in Jalandhar depends on project scope, interactive requirements, and scaling needs. Whether you need a high-converting brand site or an enterprise SaaS platform, Shardia offers transparent quotes, fixed-scope milestones, and ongoing engineering retainers tailored to maximize your ROI."
    },
    {
      question: "How fast can Shardia deliver a high-performance website or web application?",
      answer: "A bespoke corporate website is typically designed, engineered, tested, and launched in 2 to 4 weeks. Complex full-stack web applications and custom software platforms operate on rapid agile 2-week sprints with continuous deployment and direct developer updates."
    },
    {
      question: "Will my website be optimized for Google Search (SEO) and mobile devices?",
      answer: "Yes, 100%. Every platform engineered by Shardia includes built-in technical SEO, structured JSON-LD schema (LocalBusiness & Service), semantic HTML5 hierarchy, OpenGraph social cards, mobile-first responsive architecture, and lightning-fast Core Web Vitals to help you rank at the top of Google."
    },
    {
      question: "Does Shardia work with businesses outside of Jalandhar and Punjab?",
      answer: "Absolutely. While headquartered in Jalandhar, Punjab, Shardia partners with fast-scaling startups and established companies across Ludhiana, Amritsar, Mohali, Chandigarh, Delhi NCR, the United States, Europe, and globally."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div>
      <SEO 
        title="Best Web Developer in Jalandhar, Punjab | Shardia Web Solutions"
        description="Looking for the best web developer in Jalandhar or Punjab? Shardia is the top-rated software & web development agency engineering custom websites, React/Next.js apps, and scalable digital solutions."
        canonical="/"
        keywords="best web developer in jalandhar, web developer in jalandhar, best web developer in punjab, web developer punjab, website developer in jalandhar, website development company in jalandhar, web designer in jalandhar, software company jalandhar, react developer jalandhar, freelance web developer jalandhar, top web developers in punjab, shardia"
        schema={faqSchema}
      />

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
            <h2>Best Web Developer in Jalandhar, Punjab</h2>
          </div>

          <div className="hero-mobile-tagline">
            <p>
              Top web developer and software agency in Jalandhar, Punjab. Engineering scalable web applications and high-conversion digital experiences.
            </p>
          </div>

          <div className="hero-left">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.3)', borderRadius: '20px', padding: '0.3rem 0.8rem', marginBottom: '1rem', color: 'rgba(255,140,0,1)', fontSize: '0.8rem', fontWeight: 600 }}>
              <MapPin size={13} /> Jalandhar, Punjab • Serving Globally
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: 0, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
              SHARDIA
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
                — Best Web Developer in Jalandhar, Punjab
              </span>
            </h1>
            <h2 style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)', color: 'rgba(255,140,0,1)', textTransform: 'uppercase', letterSpacing: '2px', margin: '0.5rem 0 2rem', fontWeight: 600 }}>
              Best Web Developer & Software Agency in Jalandhar, Punjab
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '420px' }}>
              Jalandhar's top-rated website developer and engineering collective. Crafting bespoke, ultra-fast web apps and high-performance digital products for ambitious brands.
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
              <span style={{ fontWeight: 600 }}>FULL-STACK WEB DEV</span>
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

      {/* Spacer to allow scroll narrative to play out before content */}
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
              We don't just write code—we build strategic digital assets. As Jalandhar and Punjab's premier software engineering agency, Shardia partners with forward-thinking local and global brands to launch high-performance web applications that drive revenue, outrank competitors, and scale effortlessly.
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

        {/* Local Authority & Competitive Advantage Section */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '12rem' }}>
          <ScrollReveal direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.3)', borderRadius: '20px', padding: '0.3rem 0.8rem', marginBottom: '1rem', color: 'rgba(255,140,0,1)', fontSize: '0.85rem', fontWeight: 600 }}>
              <Award size={15} /> LOCAL AUTHORITY // JALANDHAR & PUNJAB
            </div>
            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Why Shardia is Rated the #1 Web Developer in Jalandhar & Punjab
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.8 }}>
              Most web design companies in Punjab rely on slow, pre-made WordPress templates that load slowly and fail to convert. Shardia delivers bespoke, high-performance web engineering built to dominate search rankings and win customers.
            </p>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
            {/* Shardia Standard */}
            <ScrollReveal direction="up" delay={0.1}>
              <GlassCard style={{ padding: '2.5rem', border: '1px solid rgba(255,140,0,0.5)', height: '100%', display: 'flex', flexDirection: 'column' }} hoverEffect={false}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <Sparkles color="rgba(255,140,0,1)" size={24} />
                  <h4 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>The Shardia Standard</h4>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
                  {[
                    "100% custom-engineered code (React, Next.js, TypeScript)",
                    "Sub-second load times & 95+ Google PageSpeed score",
                    "Engineered for #1 rankings on Google Search (SEO)",
                    "Direct access to lead engineer Jagnoor Marok",
                    "Custom responsive UI/UX crafted to convert visitors into clients",
                    "Scalable cloud architecture with automated zero-downtime deploys"
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#fff', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      <CheckCircle2 size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>

            {/* Traditional Punjab Agencies */}
            <ScrollReveal direction="up" delay={0.2}>
              <GlassCard style={{ padding: '2.5rem', border: '1px solid rgba(255,255,255,0.08)', height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(10,10,15,0.4)' }} hoverEffect={false}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <XCircle color="rgba(239,68,68,0.8)" size={24} />
                  <h4 style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)', margin: 0 }}>Typical Punjab Web Agencies</h4>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
                  {[
                    "Bloated, slow WordPress templates reused for hundreds of clients",
                    "5 to 9 second slow load times hurting search rankings and bounce rates",
                    "Zero technical SEO, schema markup, or Core Web Vitals optimization",
                    "Junior or outsourced freelancers with zero direct communication",
                    "Generic aesthetics that look dated and build zero brand trust",
                    "Constant plugin crashes, security vulnerabilities, and malware risks"
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      <XCircle size={18} color="rgba(239,68,68,0.7)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Regional Coverage Strip */}
          <ScrollReveal direction="up" delay={0.3}>
            <div style={{
              background: 'rgba(255, 140, 0, 0.04)',
              border: '1px solid rgba(255, 140, 0, 0.2)',
              borderRadius: '16px',
              padding: '1.5rem 2rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,140,0,1)', fontSize: '0.9rem', fontWeight: 600 }}>
                <MapPin size={16} /> REGIONS WE PROUDLY SERVE IN PUNJAB & BEYOND
              </div>
              <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
                <strong>Jalandhar</strong> (Model Town, Cantt, Civil Lines, Urban Estate, Rama Mandi, Phagwara Gate) • 
                <strong> Ludhiana</strong> • <strong>Amritsar</strong> • <strong>Mohali</strong> • <strong>Chandigarh</strong> • 
                <strong> Across Punjab</strong> & <strong>Worldwide Clients</strong>
              </p>
            </div>
          </ScrollReveal>
        </section>

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

        {/* FAQ Section - Local & Brand SEO */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', marginBottom: '12rem' }}>
          <ScrollReveal direction="up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.3)', borderRadius: '20px', padding: '0.3rem 0.8rem', marginBottom: '1rem', color: 'rgba(255,140,0,1)', fontSize: '0.85rem', fontWeight: 600 }}>
              FAQ // BEST WEB DEVELOPER IN JALANDHAR & PUNJAB
            </div>
            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', color: '#fff', letterSpacing: '-0.02em' }}>
              <ScrambleText text="Frequently Asked Questions" />
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
              Everything you need to know about working with the best website developer in Jalandhar, Punjab, and worldwide.
            </p>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <GlassCard 
                key={index}
                style={{ 
                  padding: '1.5rem', 
                  cursor: 'pointer',
                  border: openFaq === index ? '1px solid rgba(255,140,0,0.6)' : '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s ease'
                }}
                hoverEffect={false}
              >
                <div 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}
                >
                  <h4 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
                    {faq.question}
                  </h4>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ flexShrink: 0, color: 'rgba(255,140,0,1)' }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem', marginBottom: 0, lineHeight: 1.7, fontSize: '1rem' }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Early Client CTA */}
        <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <ScrollReveal direction="up">
            <GlassCard style={{ textAlign: 'center', padding: '5rem 3rem', border: '1px solid rgba(255, 140, 0, 0.4)', background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.05) 0%, rgba(20,20,29,0.8) 100%)' }} hoverEffect={false}>
              <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem', color: '#fff', letterSpacing: '-0.02em' }}><ScrambleText text="Ready to Scale?" /></h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 3rem' }}>
                Partner with Jalandhar and Punjab's premier web developer to launch a high-performance digital presence that outpaces the market.
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
