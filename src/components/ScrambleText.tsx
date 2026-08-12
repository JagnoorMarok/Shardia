import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface ScrambleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const CHARS = '!<>-_\\\\/[]{}—=+*^?#________';

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className, style }) => {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px" });

  useEffect(() => {
    if (!isInView) {
      setDisplayText(text); // reset when out of view
      return;
    }

    let iteration = 0;
    let interval: number;

    const maxIterations = text.length;

    interval = window.setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            // Preserve spaces
            if (letter === ' ') return ' ';
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
      }
      
      iteration += 1 / 2; // Slower reveal (takes 2 ticks per letter)
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <span ref={ref} className={className} style={style}>
      {displayText}
    </span>
  );
};

export default ScrambleText;
