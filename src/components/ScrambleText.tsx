import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface ScrambleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className, style }) => {
  const [typedIndex, setTypedIndex] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px" });

  useEffect(() => {
    if (!isInView) {
      setTypedIndex(0); // reset when out of view
      return;
    }

    let interval: number;

    // A small delay before typing starts feels more natural
    const timeout = setTimeout(() => {
      interval = window.setInterval(() => {
        setTypedIndex((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 50); // 50ms per letter typing speed
    }, 200);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isInView, text]);

  return (
    <span ref={ref} className={className} style={{ position: 'relative', display: 'inline-block', ...style }}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          style={{ 
            opacity: index < typedIndex ? 1 : 0, 
            visibility: index < typedIndex ? 'visible' : 'hidden'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      {/* Orange typing cursor */}
      <span 
        style={{
          display: 'inline-block',
          width: '0.15em',
          height: '1em',
          backgroundColor: 'rgba(255, 140, 0, 1)',
          verticalAlign: 'text-bottom',
          marginLeft: '4px',
          opacity: typedIndex >= text.length ? 0 : 1, // Hides cursor when typing is completely finished
          transition: 'opacity 0.3s'
        }} 
      />
    </span>
  );
};

export default ScrambleText;
