import React, { useEffect, useState, useRef } from 'react';

interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export function ParallaxScroll({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = '' 
}: ParallaxScrollProps) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      
      const adjustedParallax = direction === 'up' ? -parallax : parallax;
      setOffset(adjustedParallax);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div ref={ref} className={className}>
      <div 
        style={{ 
          transform: `translateY(${offset}px)`,
          willChange: 'transform'
        }}
      >
        {children}
      </div>
    </div>
  );
}
