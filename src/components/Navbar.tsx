import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Command, Cpu, LayoutGrid, TerminalSquare, Zap } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState("");
  const location = useLocation();
  useEffect(() => {
    const updateTime = () => setTimeStr(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navOpacity = 1;
  const navPointerEvents = 'auto';

  const getIcon = (item: string) => {
    switch(item) {
      case 'Services': return <Cpu size={14} />;
      case 'Work': return <LayoutGrid size={14} />;
      case 'Studio': return <TerminalSquare size={14} />;
      case 'Insights': return <Command size={14} />;
      default: return null;
    }
  }

  return (
    <>
      <nav className="nav-container" style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '95%',
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 50,
        background: 'rgba(10, 10, 15, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 140, 0, 0.2)',
        borderRadius: '8px',
        padding: '0.5rem 1rem',
        opacity: navOpacity,
        pointerEvents: navPointerEvents,
        transition: 'opacity 0.3s ease, border 0.3s ease',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
      }}>
        {/* Logo / System Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/" style={{ 
            fontFamily: 'monospace', 
            fontSize: '1rem', 
            fontWeight: 700,
            letterSpacing: '1px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none'
          }}
          onClick={() => setIsMobileMenuOpen(false)}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255, 140, 0, 1)', boxShadow: '0 0 10px rgba(255,140,0,0.8)' }} />
            SHARDIA
          </Link>
        </div>

        {/* Desktop Nav Links / Modules */}
        <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
          {['Services', 'Studio', 'Insights'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`}
              style={{
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                color: location.pathname === `/${item.toLowerCase()}` ? '#fff' : 'var(--color-text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
              onMouseOut={(e) => {
                if (location.pathname !== `/${item.toLowerCase()}`) {
                  e.currentTarget.style.color = 'var(--color-text-muted)';
                }
              }}
            >
              {getIcon(item)}
              [{item.toUpperCase()}]
            </Link>
          ))}
        </div>

        {/* System Tray / Initiate */}
        <div className="nav-tray" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            {timeStr}
          </span>
          <Link to="/contact" className="nav-cta" style={{
            padding: '0.4rem 1rem',
            borderRadius: '4px',
            background: location.pathname === '/contact' ? 'rgba(255, 140, 0, 0.2)' : 'transparent',
            border: '1px solid rgba(255, 140, 0, 0.5)',
            color: 'rgba(255, 140, 0, 1)',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            textDecoration: 'none',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255, 140, 0, 0.2)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(255,140,0,0.3)';
          }}
          onMouseOut={(e) => {
            if (location.pathname !== '/contact') {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
          >
            <Zap size={14} />
            EXE
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="nav-mobile-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="glass" style={{
          position: 'fixed',
          inset: 0,
          zIndex: 45,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5rem',
          background: 'rgba(5, 5, 8, 0.98)',
          backdropFilter: 'blur(20px)'
        }}>
          <div style={{ fontFamily: 'monospace', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            SYSTEM MODULES
          </div>
          {['Services', 'Studio', 'Insights'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontFamily: 'monospace',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: location.pathname === `/${item.toLowerCase()}` ? 'rgba(255, 140, 0, 1)' : '#fff',
                letterSpacing: '2px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              {getIcon(item)}
              {item.toUpperCase()}
            </Link>
          ))}
          
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{
            marginTop: '2rem',
            padding: '1rem 3rem',
            border: '1px solid rgba(255, 140, 0, 0.5)',
            color: '#fff',
            fontFamily: 'monospace',
            fontSize: '1.2rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            background: 'rgba(255, 120, 0, 0.1)',
            boxShadow: '0 0 20px rgba(255, 120, 0, 0.2)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Zap size={18} />
            INITIATE
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
