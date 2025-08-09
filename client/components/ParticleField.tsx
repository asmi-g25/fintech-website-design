import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  originalVx: number;
  originalVy: number;
  pulse: number;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isMouseActive, setIsMouseActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(200, Math.floor(window.innerWidth / 8));

      for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 0.8;
        const vy = (Math.random() - 0.5) * 0.8;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx,
          vy,
          originalVx: vx,
          originalVy: vy,
          size: Math.random() * 3 + 0.5,
          opacity: Math.random() * 0.6 + 0.2,
          color: Math.random() > 0.6 ? '#D4AF37' : '#ffffff',
          pulse: Math.random() * Math.PI * 2
        });
      }

      particlesRef.current = particles;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      setIsMouseActive(true);
    };

    const handleMouseLeave = () => {
      setIsMouseActive(false);
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      particlesRef.current.forEach((particle, index) => {
        // Mouse interaction
        if (isMouseActive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const force = (150 - distance) / 150;
            particle.vx = particle.originalVx + (dx / distance) * force * 2;
            particle.vy = particle.originalVy + (dy / distance) * force * 2;
          } else {
            particle.vx += (particle.originalVx - particle.vx) * 0.05;
            particle.vy += (particle.originalVy - particle.vy) * 0.05;
          }
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += 0.02;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Pulsing effect
        const pulseSize = particle.size + Math.sin(particle.pulse) * 0.5;
        const pulseOpacity = particle.opacity + Math.sin(particle.pulse * 0.5) * 0.2;

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulseSize * 2
        );

        if (particle.color === '#D4AF37') {
          gradient.addColorStop(0, `rgba(212, 175, 55, ${pulseOpacity})`);
          gradient.addColorStop(0.7, `rgba(212, 175, 55, ${pulseOpacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
        } else {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${pulseOpacity})`);
          gradient.addColorStop(0.7, `rgba(255, 255, 255, ${pulseOpacity * 0.2})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw core particle
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = pulseOpacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        // Draw connections with enhanced effects
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const lineOpacity = 0.15 * (1 - distance / 150);
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );

            gradient.addColorStop(0, `rgba(212, 175, 55, ${lineOpacity})`);
            gradient.addColorStop(0.5, `rgba(255, 255, 255, ${lineOpacity * 0.5})`);
            gradient.addColorStop(1, `rgba(212, 175, 55, ${lineOpacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = lineOpacity * 2;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
