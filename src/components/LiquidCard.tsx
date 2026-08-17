import React, { type ReactNode } from 'react';

interface LiquidCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  style?: React.CSSProperties;
}

const LiquidCard: React.FC<LiquidCardProps> = ({ icon, title, desc, style }) => {
  return (
    <div className="liquid-card" style={style}>
      {/* Glow Engine */}
      <div className="liquid-icon-container">
        <div className="liquid-outer-rim" />
        <div className="liquid-glow blur" />
        <div className="liquid-glow" />
        <div className="liquid-icon-bg" />
        {/* Inner Icon */}
        <div style={{ color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {icon}
        </div>
      </div>
      
      {/* Text Content */}
      <div style={{ flexGrow: 1 }}>
        <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.4rem', fontWeight: 600, letterSpacing: '-0.01em' }}>{title}</h4>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
};

export default LiquidCard;
