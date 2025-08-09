import React, { useState, useEffect } from 'react';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
      <div 
        className="h-full bg-gradient-to-r from-xexon-gold to-yellow-400 transition-all duration-300 ease-out shadow-lg"
        style={{ width: `${scrollProgress * 100}%` }}
      >
        <div className="absolute right-0 top-0 w-3 h-3 bg-xexon-gold rounded-full transform translate-x-1/2 -translate-y-1/2 shadow-lg animate-pulse"></div>
      </div>
    </div>
  );
}
