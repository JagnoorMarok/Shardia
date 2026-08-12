import GlassCard from '../components/GlassCard';
import { ScrollReveal, RevealItem } from '../components/ScrollReveal';

const Services = () => {
  return (
    <div style={{ paddingTop: '15vh', minHeight: '80vh', paddingBottom: '10rem', paddingLeft: '2rem', paddingRight: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <ScrollReveal>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem', color: '#fff', letterSpacing: '-0.02em' }}>Capabilities</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '5rem', maxWidth: '700px', lineHeight: 1.8 }}>
          We don't sell hours. We sell outcomes. Our capabilities are focused entirely on bridging the gap between your business objectives and scalable technical execution.
        </p>
      </ScrollReveal>

      <ScrollReveal staggerChildren style={{ display: 'grid', gap: '4rem' }}>
        
        <RevealItem>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'rgba(255, 140, 0, 0.1)', lineHeight: 1 }}>01</div>
              <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', marginTop: '-2rem' }}>Product Strategy</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Before writing a single line of code, we define the architecture and roadmap that will yield the highest ROI. We mitigate technical debt early and ensure the product solves real market needs.
              </p>
            </div>
            <GlassCard style={{ flex: '1 1 400px', background: 'linear-gradient(135deg, rgba(20,20,29,0.8) 0%, rgba(255,140,0,0.05) 100%)' }}>
              <h4 style={{ color: 'rgba(255, 140, 0, 1)', marginBottom: '1rem' }}>Key Deliverables</h4>
              <ul style={{ color: 'var(--color-text-muted)', paddingLeft: '1.2rem', lineHeight: 2 }}>
                <li>Market & Competitor Technical Analysis</li>
                <li>System Architecture Design</li>
                <li>Database Schema & Scaling Roadmap</li>
                <li>Go-To-Market Technical Strategy</li>
              </ul>
            </GlassCard>
          </div>
        </RevealItem>

        <RevealItem>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', flexDirection: 'row-reverse' }}>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'rgba(255, 140, 0, 0.1)', lineHeight: 1 }}>02</div>
              <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', marginTop: '-2rem' }}>Full-Stack Engineering</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                We build blazing fast, secure, and robust web applications. From reactive frontends to complex microservice backends, our code is designed to scale alongside your user base.
              </p>
            </div>
            <GlassCard style={{ flex: '1 1 400px', background: 'linear-gradient(135deg, rgba(20,20,29,0.8) 0%, rgba(100,200,255,0.05) 100%)' }}>
              <h4 style={{ color: 'rgba(100, 200, 255, 1)', marginBottom: '1rem' }}>Key Deliverables</h4>
              <ul style={{ color: 'var(--color-text-muted)', paddingLeft: '1.2rem', lineHeight: 2 }}>
                <li>Custom Web Applications (React/Next.js)</li>
                <li>REST & GraphQL API Development</li>
                <li>Third-party Integrations (Stripe, Twilio, etc.)</li>
                <li>Automated CI/CD Pipelines</li>
              </ul>
            </GlassCard>
          </div>
        </RevealItem>

        <RevealItem>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'rgba(255, 140, 0, 0.1)', lineHeight: 1 }}>03</div>
              <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', marginTop: '-2rem' }}>Experience Design</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Aesthetic interfaces that convert. We merge high-end visual design with deep UX psychology to create frictionless digital experiences that delight your users and drive retention.
              </p>
            </div>
            <GlassCard style={{ flex: '1 1 400px', background: 'linear-gradient(135deg, rgba(20,20,29,0.8) 0%, rgba(255,140,0,0.05) 100%)' }}>
              <h4 style={{ color: 'rgba(255, 140, 0, 1)', marginBottom: '1rem' }}>Key Deliverables</h4>
              <ul style={{ color: 'var(--color-text-muted)', paddingLeft: '1.2rem', lineHeight: 2 }}>
                <li>Wireframing & Prototyping</li>
                <li>User Journey Mapping</li>
                <li>High-Fidelity UI Design</li>
                <li>WebGL & Advanced Motion Graphics</li>
              </ul>
            </GlassCard>
          </div>
        </RevealItem>

      </ScrollReveal>
    </div>
  );
};

export default Services;
