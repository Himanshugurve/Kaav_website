import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { technologies } from '../data/technologies';

const tabs = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'cloud', label: 'Cloud & DevOps' },
  { key: 'database', label: 'Database' },
];

const TechIcon = ({ icon, className = '' }) => {
  const getIcon = () => {
    switch (icon) {
      case 'react':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="reactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#61DAFB" />
                <stop offset="100%" stopColor="#0066CC" />
              </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="28" fill="url(#reactGradient)" opacity="0.9" />
            <path d="M32 12C22.0589 12 14 20.0589 14 30C14 39.9411 22.0589 48 32 48C41.9411 48 50 39.9411 50 30C50 20.0589 41.9411 12 32 12ZM32 16C37.5228 16 42 20.4772 42 26C42 31.5228 37.5228 36 32 36C26.4772 36 22 31.5228 22 26C22 20.4772 26.4772 16 32 16Z" fill="white" opacity="0.9" />
            <circle cx="32" cy="30" r="8" fill="white" opacity="0.8" />
          </svg>
        );

      case 'nextjs':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="nextGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#333333" />
              </linearGradient>
            </defs>
            <rect x="12" y="16" width="40" height="32" rx="8" fill="url(#nextGradient)" opacity="0.9" />
            <path d="M20 24L32 36L44 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
            <circle cx="32" cy="28" r="2" fill="white" opacity="0.8" />
          </svg>
        );

      case 'tailwind':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="tailwindGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
            <path d="M32 8C46.3594 8 58 19.6406 58 34C58 48.3594 46.3594 60 32 60C17.6406 60 6 48.3594 6 34C6 19.6406 17.6406 8 32 8Z" fill="url(#tailwindGradient)" opacity="0.9" />
            <path d="M22 28C22 22.4772 26.4772 18 32 18C37.5228 18 42 22.4772 42 28C42 33.5228 37.5228 38 32 38C26.4772 38 22 33.5228 22 28Z" fill="white" opacity="0.8" />
          </svg>
        );

      case 'vue':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="vueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#42B883" />
                <stop offset="100%" stopColor="#36907D" />
              </linearGradient>
            </defs>
            <path d="M32 8L56 34L32 60L8 34L32 8Z" fill="url(#vueGradient)" opacity="0.9" />
            <path d="M32 16L44 30L32 44L20 30L32 16Z" fill="white" opacity="0.8" />
          </svg>
        );

      case 'angular':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="angularGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DD0031" />
                <stop offset="100%" stopColor="#C10029" />
              </linearGradient>
            </defs>
            <path d="M32 8L56 34L32 60L8 34L32 8Z" fill="url(#angularGradient)" opacity="0.9" />
            <path d="M24 26L32 34L40 26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
            <path d="M24 38L32 46L40 38" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
          </svg>
        );

      case 'typescript':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="tsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3178C6" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            <rect x="16" y="16" width="32" height="32" rx="8" fill="url(#tsGradient)" opacity="0.9" />
            <text x="32" y="36" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="Arial, sans-serif">TS</text>
          </svg>
        );

      case 'nodejs':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#339933" />
                <stop offset="100%" stopColor="#2E8B57" />
              </linearGradient>
            </defs>
            <rect x="12" y="16" width="40" height="32" rx="16" fill="url(#nodeGradient)" opacity="0.9" />
            <circle cx="28" cy="32" r="6" fill="white" opacity="0.8" />
            <circle cx="36" cy="32" r="6" fill="white" opacity="0.8" />
          </svg>
        );

      case 'spring':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="springGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6DB33F" />
                <stop offset="100%" stopColor="#5AA030" />
              </linearGradient>
            </defs>
            <path d="M16 20C24 12 40 12 48 20C56 28 56 44 48 52C40 60 24 60 16 52C8 44 8 28 16 20Z" fill="url(#springGradient)" opacity="0.9" />
            <path d="M20 28C26 22 38 22 44 28C50 34 50 46 44 52C38 58 26 58 20 52C14 46 14 34 20 28Z" fill="white" opacity="0.7" />
          </svg>
        );

      case 'express':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="expressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#333333" />
              </linearGradient>
            </defs>
            <rect x="12" y="16" width="40" height="32" rx="8" fill="url(#expressGradient)" opacity="0.9" />
            <path d="M20 28H44V36H20V28Z" fill="white" opacity="0.8" />
            <path d="M28 36V44" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          </svg>
        );

      case 'python':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="pythonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3776AB" />
                <stop offset="100%" stopColor="#2B5D86" />
              </linearGradient>
            </defs>
            <path d="M32 8C46.3594 8 58 19.6406 58 34C58 48.3594 46.3594 60 32 60C17.6406 60 6 48.3594 6 34C6 19.6406 17.6406 8 32 8Z" fill="url(#pythonGradient)" opacity="0.9" />
            <path d="M24 28C24 22.4772 28.4772 18 34 18C39.5228 18 44 22.4772 44 28C44 33.5228 39.5228 38 34 38C28.4772 38 24 33.5228 24 28Z" fill="white" opacity="0.8" />
          </svg>
        );

      case 'django':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="djangoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#092E20" />
                <stop offset="100%" stopColor="#0C4B33" />
              </linearGradient>
            </defs>
            <rect x="16" y="16" width="32" height="32" rx="8" fill="url(#djangoGradient)" opacity="0.9" />
            <path d="M24 28L32 36L40 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
            <path d="M24 40L32 32L40 40" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
          </svg>
        );

      case 'flask':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="flaskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#333333" />
              </linearGradient>
            </defs>
            <path d="M20 16L44 16L48 24L48 48C48 52.4183 44.4183 56 40 56L24 56C19.5817 56 16 52.4183 16 48L16 24L20 16Z" fill="url(#flaskGradient)" opacity="0.9" />
            <path d="M28 24L36 24" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <path d="M28 32L36 32" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <path d="M28 40L36 40" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          </svg>
        );

      case 'aws':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="awsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF9900" />
                <stop offset="100%" stopColor="#FF7700" />
              </linearGradient>
            </defs>
            <rect x="12" y="16" width="40" height="32" rx="8" fill="url(#awsGradient)" opacity="0.9" />
            <path d="M20 28L32 36L44 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
            <circle cx="32" cy="40" r="4" fill="white" opacity="0.7" />
          </svg>
        );

      case 'docker':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="dockerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2496ED" />
                <stop offset="100%" stopColor="#1B75BA" />
              </linearGradient>
            </defs>
            <path d="M12 20L52 20L58 34L32 60L6 34L12 20Z" fill="url(#dockerGradient)" opacity="0.9" />
            <path d="M20 28L44 28L38 36L26 36L20 28Z" fill="white" opacity="0.8" />
          </svg>
        );

      case 'kubernetes':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="k8sGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#326CE5" />
                <stop offset="100%" stopColor="#2A5BBD" />
              </linearGradient>
            </defs>
            <path d="M32 8L56 24L48 40L16 40L8 24L32 8Z" fill="url(#k8sGradient)" opacity="0.9" />
            <path d="M20 24L44 24L36 36L20 36L20 24Z" fill="white" opacity="0.8" />
          </svg>
        );

      case 'azure':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="azureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0078D4" />
                <stop offset="100%" stopColor="#005A9E" />
              </linearGradient>
            </defs>
            <path d="M32 8L56 32L32 56L8 32L32 8Z" fill="url(#azureGradient)" opacity="0.9" />
            <path d="M24 24L40 24L32 40L24 24Z" fill="white" opacity="0.8" />
          </svg>
        );

      case 'gcp':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="gcpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4285F4" />
                <stop offset="100%" stopColor="#3367D6" />
              </linearGradient>
            </defs>
            <path d="M32 8L56 24L48 40L16 40L8 24L32 8Z" fill="url(#gcpGradient)" opacity="0.9" />
            <path d="M20 24L44 24L36 36L20 36L20 24Z" fill="white" opacity="0.8" />
          </svg>
        );

      case 'terraform':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="terraformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7B42BC" />
                <stop offset="100%" stopColor="#6A37A4" />
              </linearGradient>
            </defs>
            <rect x="16" y="16" width="32" height="32" rx="8" fill="url(#terraformGradient)" opacity="0.9" />
            <path d="M24 28L32 36L40 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
            <path d="M24 40L32 32L40 40" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
          </svg>
        );

      case 'postgresql':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="postgresGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#336791" />
                <stop offset="100%" stopColor="#2C5278" />
              </linearGradient>
            </defs>
            <path d="M32 8C46.3594 8 58 19.6406 58 34C58 48.3594 46.3594 60 32 60C17.6406 60 6 48.3594 6 34C6 19.6406 17.6406 8 32 8Z" fill="url(#postgresGradient)" opacity="0.9" />
            <path d="M24 28C24 22.4772 28.4772 18 34 18C39.5228 18 44 22.4772 44 28C44 33.5228 39.5228 38 34 38C28.4772 38 24 33.5228 24 28Z" fill="white" opacity="0.8" />
          </svg>
        );

      case 'mongodb':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="mongoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#47A841" />
                <stop offset="100%" stopColor="#3A8A35" />
              </linearGradient>
            </defs>
            <path d="M32 8C46.3594 8 58 19.6406 58 34C58 48.3594 46.3594 60 32 60C17.6406 60 6 48.3594 6 34C6 19.6406 17.6406 8 32 8Z" fill="url(#mongoGradient)" opacity="0.9" />
            <path d="M24 28C24 22.4772 28.4772 18 34 18C39.5228 18 44 22.4772 44 28C44 33.5228 39.5228 38 34 38C28.4772 38 24 33.5228 24 28Z" fill="white" opacity="0.8" />
          </svg>
        );

      case 'mysql':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="mysqlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4479A1" />
                <stop offset="100%" stopColor="#376283" />
              </linearGradient>
            </defs>
            <rect x="16" y="16" width="32" height="32" rx="8" fill="url(#mysqlGradient)" opacity="0.9" />
            <path d="M24 28L32 36L40 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
          </svg>
        );

      case 'redis':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="redisGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DC382D" />
                <stop offset="100%" stopColor="#B82E24" />
              </linearGradient>
            </defs>
            <path d="M32 8C46.3594 8 58 19.6406 58 34C58 48.3594 46.3594 60 32 60C17.6406 60 6 48.3594 6 34C6 19.6406 17.6406 8 32 8Z" fill="url(#redisGradient)" opacity="0.9" />
            <path d="M24 28C24 22.4772 28.4772 18 34 18C39.5228 18 44 22.4772 44 28C44 33.5228 39.5228 38 34 38C28.4772 38 24 33.5228 24 28Z" fill="white" opacity="0.8" />
          </svg>
        );

      case 'elasticsearch':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="elasticGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#005571" />
                <stop offset="100%" stopColor="#003D51" />
              </linearGradient>
            </defs>
            <rect x="16" y="16" width="32" height="32" rx="8" fill="url(#elasticGradient)" opacity="0.9" />
            <path d="M24 28L32 36L40 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
            <path d="M24 36L32 28L40 36" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
          </svg>
        );

      case 'firebase':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="firebaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFCA28" />
                <stop offset="100%" stopColor="#FFB300" />
              </linearGradient>
            </defs>
            <path d="M32 8L56 24L48 40L16 40L8 24L32 8Z" fill="url(#firebaseGradient)" opacity="0.9" />
            <path d="M24 24L40 24L32 40L24 24Z" fill="white" opacity="0.8" />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <circle cx="32" cy="32" r="24" fill="#64748B" opacity="0.8" />
            <text x="32" y="36" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">?</text>
          </svg>
        );
    }
  };

  return <div className="flex items-center justify-center">{getIcon()}</div>;
};

const ParticleBackground = ({ isActive }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isActive) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = rect.height;

    const particles = [];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    particlesRef.current = particles;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isMobile || !isAutoScrolling) return;

    const techCount = technologies[activeTab].length;

    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % techCount;
        scrollToIndex(next);
        return next;
      });
    }, 3000); // Auto-scroll every 3 seconds

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [activeTab, isAutoScrolling, isMobile]);

  const scrollToIndex = (index) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.scrollWidth / technologies[activeTab].length;
    const scrollPosition = cardWidth * index;

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  const handlePrevious = () => {
    setIsAutoScrolling(false);
    const techCount = technologies[activeTab].length;
    const newIndex = currentIndex === 0 ? techCount - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);

    // Resume auto-scroll after 5 seconds
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    const techCount = technologies[activeTab].length;
    const newIndex = (currentIndex + 1) % techCount;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);

    // Resume auto-scroll after 5 seconds
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setCurrentIndex(0);
    setIsAutoScrolling(true);
  };

  return (
    <section
      id="technologies"
      className="w-full scroll-mt-24 border-y border-white/5 bg-slate-950/40 py-12 sm:py-16 md:py-20 backdrop-blur-md"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Technologies
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-4xl">
            Cutting-Edge Tech Stack
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base md:text-lg px-4">
            Explore the technologies we use to build scalable, secure, and
            future-ready digital products.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-2 md:gap-3 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`rounded-full px-3 sm:px-4 md:px-5 py-1.5 md:py-2 text-xs font-semibold uppercase tracking-[0.2em] md:tracking-[0.25em] transition-all duration-300
                ${activeTab === tab.key
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/40 scale-105'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:border-indigo-400/50 hover:bg-white/10'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Container with Navigation */}
        <div className="relative mt-8 md:mt-12">
          {/* Mobile Navigation Arrows */}
          {isMobile && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-indigo-500/90 hover:bg-indigo-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-indigo-500/90 hover:bg-indigo-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* Mobile: Horizontal Scroll */}
              <div
                ref={scrollContainerRef}
                className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onTouchStart={() => setIsAutoScrolling(false)}
                onTouchEnd={() => setTimeout(() => setIsAutoScrolling(true), 5000)}
              >
                {technologies[activeTab].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center"
                    whileHover={{ y: -6 }}
                  >
                    <div className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-5 sm:p-6 shadow-lg shadow-black/20 transition h-full">
                      {/* Particle Background Container */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <ParticleBackground isActive={true} />
                      </div>

                      {/* Card Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 transition-all duration-500 group-hover:scale-110 group-hover:from-indigo-500/20 group-hover:to-purple-500/20">
                          <TechIcon icon={tech.icon} className="h-8 w-8" />
                        </div>

                        {/* Technology Name */}
                        <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                          {tech.name}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-3">
                          {tech.description}
                        </p>

                        {/* Documentation Link */}
                        <div className="mt-4 flex items-center gap-2">
                          <span className="text-xs text-indigo-300 opacity-0 transition group-hover:opacity-100">
                            Documentation →
                          </span>
                        </div>
                      </div>

                      {/* Hover Effects */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
                      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur transition-opacity duration-500 group-hover:opacity-20" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Desktop/Tablet: Grid Layout */}
              <div className="hidden lg:grid gap-4 xl:gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {technologies[activeTab].map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/20 transition"
                  >
                    {/* Particle Background Container */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <ParticleBackground isActive={true} />
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 transition-all duration-500 group-hover:scale-110 group-hover:from-indigo-500/20 group-hover:to-purple-500/20">
                        <TechIcon icon={tech.icon} className="h-8 w-8" />
                      </div>

                      {/* Technology Name */}
                      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                        {tech.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        {tech.description}
                      </p>

                      {/* Documentation Link */}
                      <div className="mt-4 flex items-center gap-2">
                        <span className="text-xs text-indigo-300 opacity-0 transition group-hover:opacity-100">
                          Documentation →
                        </span>
                      </div>
                    </div>

                    {/* Hover Effects */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur transition-opacity duration-500 group-hover:opacity-20" />
                  </motion.div>
                ))}
              </div>

              {/* Mobile Scroll Indicators */}
              {isMobile && (
                <div className="flex justify-center gap-2 mt-6">
                  {technologies[activeTab].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        scrollToIndex(index);
                        setIsAutoScrolling(false);
                        setTimeout(() => setIsAutoScrolling(true), 5000);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                          ? 'w-8 bg-indigo-500'
                          : 'w-2 bg-slate-600 hover:bg-slate-500'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
};

export default Technologies;