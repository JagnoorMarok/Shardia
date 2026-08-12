import { Link } from 'react-router-dom';

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
        marginBottom: '4rem'
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
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Building software that helps businesses grow. From idea to deployment, we build, launch, and maintain digital products.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ color: '#fff', marginBottom: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Explore</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Services', 'Studio', 'Insights'].map(item => (
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
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>hello@shardia.dev</p>
          <p style={{ color: 'var(--color-text-muted)' }}>+1 (555) 019-2837</p>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        color: 'var(--color-text-muted)',
        fontSize: '0.8rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Shardia. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a onClick={e => e.preventDefault()} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='#fff'} onMouseOut={e=>e.currentTarget.style.color='var(--color-text-muted)'}>Privacy Policy</a>
          <a onClick={e => e.preventDefault()} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='#fff'} onMouseOut={e=>e.currentTarget.style.color='var(--color-text-muted)'}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
