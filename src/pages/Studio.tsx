import { ScrollReveal } from '../components/ScrollReveal';

const Studio = () => {
  return (
    <div style={{ paddingTop: '15vh', minHeight: '80vh', paddingBottom: '10rem', paddingLeft: '2rem', paddingRight: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <ScrollReveal>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem', color: '#fff', letterSpacing: '-0.02em' }}>The Studio</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '5rem', maxWidth: '700px', lineHeight: 1.8 }}>
          We are an elite software engineering and design collective. We don't just write code—we architect digital assets that accelerate business growth and outpace the competition.
        </p>
      </ScrollReveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        
        <ScrollReveal direction="up" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Our Philosophy</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              At Shardia, we believe that technology should serve your business, not the other way around. Clients don't buy code—they buy solutions to business problems.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              We are obsessed with delivering scalable, maintainable, and high-impact digital products. From initial technical strategy to long-term enterprise maintenance, we partner with you to turn complex operational challenges into seamless, automated solutions.
            </p>
          </div>
          <div style={{ flex: '1 1 400px', height: '400px', background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.1) 0%, rgba(20,20,29,1) 100%)', border: '1px solid rgba(255,140,0,0.2)', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
             {/* Abstract decorative element representing "The Studio" */}
             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', border: '2px solid rgba(255,140,0,0.5)', borderRadius: '50%', filter: 'blur(2px)' }} />
             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(45deg)', width: '150px', height: '150px', border: '1px solid rgba(255,140,0,0.8)', borderRadius: '2px' }} />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', flexDirection: 'row-reverse' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>The Team</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              We are a lean, senior-only team. When you work with us, you are communicating directly with the engineers and designers building your product. No account managers, no junior developers learning on your dime.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              This direct line of communication ensures rapid iteration, high accountability, and a final product that perfectly aligns with your strategic vision.
            </p>
          </div>
          <div style={{ flex: '1 1 400px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
             <div style={{ height: '200px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }} />
             <div style={{ height: '200px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', transform: 'translateY(2rem)' }} />
             <div style={{ height: '200px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }} />
             <div style={{ height: '200px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', transform: 'translateY(2rem)' }} />
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Studio;
