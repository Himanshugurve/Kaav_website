import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

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

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particlesRef.current = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particlesRef.current.length; i++) {
      particlesRef.current[i].update();
      particlesRef.current[i].draw(ctx);

      for (let j = i; j < particlesRef.current.length; j++) {
        const dx = particlesRef.current[i].x - particlesRef.current[j].x;
        const dy = particlesRef.current[i].y - particlesRef.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const opacity = Math.max(0, 0.3 - distance / 500);
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
          ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
          ctx.stroke();
        }
      }
    }
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Ensure canvas is ready before initializing
    if (canvasRef.current) {
      init();
      animate();
    }

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Reinitialize particles on resize
        particlesRef.current = [];
        const particleCount = 100;
        for (let i = 0; i < particleCount; i++) {
          particlesRef.current.push(new Particle());
        }
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
        bottom: 0
      }}
    />
  );
};

export default ParticleBackground;
