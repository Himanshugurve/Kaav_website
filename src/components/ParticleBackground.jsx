import React, { useEffect, useRef } from 'react';

// Defined outside component to avoid recreation on every render
class Particle {
  constructor() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > window.innerWidth) this.x = 0;
    if (this.x < 0) this.x = window.innerWidth;
    if (this.y > window.innerHeight) this.y = 0;
    if (this.y < 0) this.y = window.innerHeight;
  }

  draw(ctx) {
    ctx.fillStyle = 'rgba(99, 102, 241, 1)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const PARTICLE_COUNT = 100;

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(ctx);

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const opacity = Math.max(0, 0.3 - distance / 500);
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (canvasRef.current) {
      init();
      animate();
    }

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
  );
};

export default ParticleBackground;
