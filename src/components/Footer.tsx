import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 20,
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      background: '#050508',
      padding: '4rem 2rem 2rem',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '4rem',
        marginBottom: '3rem'
      }}>
        {/* Brand */}
        <div>
          <h3 style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: '1.5rem', 
            marginBottom: '1rem',
            color: '#fff',
            textShadow: '0 0 10px rgba(255, 120, 0, 0.3)'
          }}>SHARDIA</h3>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
            Recognized as the best web developer and software engineering agency in Jalandhar, Punjab. Engineering high-performance custom websites and scalable web applications for forward-thinking brands worldwide.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,140,0,1)', fontSize: '0.85rem' }}>
            <MapPin size={15} />
            <span>Jalandhar, Punjab 144001, India</span>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ color: '#fff', marginBottom: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Explore</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Services', 'Work', 'Studio', 'Contact'].map(item => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`}
                style={{ color: 'var(--color-text-muted)', transition: 'var(--transition-normal)' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: '#fff', marginBottom: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Connect</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            <a href="mailto:jagnoormarok@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', textDecoration: 'none' }} onMouseOver={e=>e.currentTarget.style.color='#fff'} onMouseOut={e=>e.currentTarget.style.color='var(--color-text-muted)'}>
              <Mail size={16} color="rgba(255,140,0,1)" /> jagnoormarok@gmail.com
            </a>
            <a href="tel:+919814078213" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', textDecoration: 'none' }} onMouseOver={e=>e.currentTarget.style.color='#fff'} onMouseOut={e=>e.currentTarget.style.color='var(--color-text-muted)'}>
              <Phone size={16} color="rgba(255,140,0,1)" /> +91 9814078213
            </a>
            <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
              Available for new projects & consultations in Jalandhar, Punjab, and remote worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* SEO Tagline Banner */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1.2rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center',
        color: 'var(--color-text-muted)',
        fontSize: '0.8rem',
        letterSpacing: '0.5px'
      }}>
        <span>Best Web Developer in Jalandhar, Punjab • Full-Stack Web Applications (React & Next.js) • UI/UX Design • Scalable Cloud Engineering</span>
      </div>

      {/* Bottom Bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        color: 'var(--color-text-muted)',
        fontSize: '0.8rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Shardia (Jagnoor Marok). All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/privacy" style={{ cursor: 'pointer', transition: 'color 0.2s', color: 'var(--color-text-muted)' }} onMouseOver={e=>e.currentTarget.style.color='#fff'} onMouseOut={e=>e.currentTarget.style.color='var(--color-text-muted)'}>Privacy Policy</Link>
          <Link to="/terms" style={{ cursor: 'pointer', transition: 'color 0.2s', color: 'var(--color-text-muted)' }} onMouseOver={e=>e.currentTarget.style.color='#fff'} onMouseOut={e=>e.currentTarget.style.color='var(--color-text-muted)'}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
