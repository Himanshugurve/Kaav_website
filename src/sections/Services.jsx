import React, { useEffect, useRef, useState, useCallback } from 'react';
import { services } from '../data/services';
import ServiceIcons from '../components/ServiceIcons';

const Services = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Triple the services array for seamless infinite looping
  const extendedServices = [...services, ...services, ...services];
  const middleSetStart = services.length;

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll functionality - sequential, one card at a time
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Seamlessly reset to middle set when needed
        if (next >= middleSetStart + services.length) {
          // Use timeout to reset after transition completes
          setTimeout(() => {
            setCurrentIndex(middleSetStart);
          }, 50);
          return next;
        }
        return next;
      });
    }, 3500); // 3.5 seconds for comfortable viewing

    return () => clearInterval(interval);
  }, [isHovering, services.length, middleSetStart]);

  // Initialize to middle set
  useEffect(() => {
    setCurrentIndex(middleSetStart);
  }, [middleSetStart]);

  // Intersection Observer for initial animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsHovering(true);
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swipe left - next
        setCurrentIndex((prev) => prev + 1);
      } else {
        // Swipe right - previous
        setCurrentIndex((prev) => prev - 1);
      }
    }

    // Resume auto-scroll after interaction
    setTimeout(() => {
      setIsHovering(false);
    }, 2000);
  }, []);

  const handleCardClick = useCallback((index) => {
    const position = index - currentIndex;
    if (position !== 0) {
      setCurrentIndex(index);
      setIsHovering(true);

      // Resume auto-scroll
      setTimeout(() => {
        setIsHovering(false);
      }, 3000);
    }
  }, [currentIndex]);

  const handleDotClick = useCallback((dotIndex) => {
    setCurrentIndex(middleSetStart + dotIndex);
    setIsHovering(true);

    // Resume auto-scroll
    setTimeout(() => {
      setIsHovering(false);
    }, 3000);
  }, [middleSetStart]);

  const handleArrowClick = useCallback((direction) => {
    if (direction === 'next') {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
    setIsHovering(true);

    // Resume auto-scroll
    setTimeout(() => {
      setIsHovering(false);
    }, 2000);
  }, []);

  const getCardStyle = (index) => {
    const position = index - currentIndex;
    const isCenter = position === 0;
    const isLeft = position === -1;
    const isRight = position === 1;

    // Only show three cards: left (-1), center (0), right (1)
    const isVisible = Math.abs(position) <= 1;

    // Strict positioning to prevent overlap
    let scale = 0.7;
    let opacity = 0;
    let translateX = 0;
    let zIndex = 0;

    if (isCenter) {
      // Center card - dominant and fully visible
      scale = 1;
      opacity = 1;
      translateX = 0;
      zIndex = 30;
    } else if (isLeft) {
      // Left card - smaller, positioned to the left with gap
      scale = isMobile ? 0.75 : 0.82;
      opacity = isMobile ? 0.3 : 0.5;
      translateX = isMobile ? -90 : -85; // Strict left position with gap
      zIndex = 10;
    } else if (isRight) {
      // Right card - smaller, positioned to the right with gap
      scale = isMobile ? 0.75 : 0.82;
      opacity = isMobile ? 0.3 : 0.5;
      translateX = isMobile ? 90 : 85; // Strict right position with gap
      zIndex = 10;
    }

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity: isVisible ? opacity : 0,
      zIndex,
      pointerEvents: isVisible ? 'auto' : 'none',
      // Smooth, premium transitions with ease-in-out
      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  // Calculate active dot index
  const getActiveDotIndex = () => {
    return currentIndex % services.length;
  };

  return (
    <section
      id="services"
      className="w-full scroll-mt-24 border-y border-white/5 bg-slate-950/40 py-16 backdrop-blur-md md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
              Our Services
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Comprehensive IT Solutions
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
              From custom development to cloud infrastructure and cybersecurity,
              we deliver end-to-end solutions that help your business thrive in
              the digital landscape.
            </p>

            <div className="mt-8 grid gap-6 text-slate-300">
              <div>
                <h3 className="text-lg font-semibold text-slate-50 mb-2">Why Choose Our Services?</h3>
                <p className="text-sm">
                  We combine technical expertise with business acumen to deliver solutions that not only work flawlessly
                  but also drive measurable business outcomes. Our approach focuses on understanding your unique challenges
                  and crafting tailored solutions that scale with your growth.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-50 mb-2">Our Development Process</h3>
                <ul className="text-sm space-y-1">
                  <li>• Discovery & Requirements Analysis</li>
                  <li>• Architecture & Design Planning</li>
                  <li>• Agile Development & Testing</li>
                  <li>• Deployment & Performance Optimization</li>
                  <li>• Ongoing Support & Maintenance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-50 mb-3">Service Highlights</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                  <span>10+ years of industry experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  <span>99.9% uptime guarantee on cloud solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-pink-400" />
                  <span>24/7 security monitoring and support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span>Agile methodology for faster delivery</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-slate-50 mb-3">Client Success Stories</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <p>"Kavv Technology transformed our legacy system into a modern, scalable platform that has improved our
                  operational efficiency by 40%."</p>
                <p className="text-indigo-300 font-medium">- CTO, Fortune 500 Manufacturing Company</p>
              </div>
            </div>
          </div>
        </div>

        {/* Isolated Carousel Container */}
        <div
          className="carousel-container group relative mt-16 h-[540px] md:h-[560px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Track - Overflow hidden to prevent content bleeding */}
          <div className="relative h-full overflow-hidden">
            <div
              ref={containerRef}
              className="absolute inset-0 flex items-center justify-center"
            >
              {extendedServices.map((service, index) => {
                const position = index - currentIndex;
                const isCenter = position === 0;
                const isVisible = Math.abs(position) <= 1;
                const cardStyle = getCardStyle(index);

                if (!isVisible) return null; // Don't render invisible cards

                return (
                  <div
                    key={`${service.title}-${index}`}
                    ref={(el) => {
                      if (index < services.length) {
                        cardsRef.current[index] = el;
                      }
                    }}
                    onClick={() => handleCardClick(index)}
                    className={`service-card group/card absolute w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px] ${!isCenter ? 'cursor-pointer' : ''
                      }`}
                    style={{
                      ...cardStyle,
                      willChange: 'transform, opacity',
                    }}
                  >
                    {/* Card Container - Isolated with strict boundaries */}
                    <div
                      className={`relative h-full rounded-2xl border bg-slate-900/80 shadow-2xl backdrop-blur-sm transition-all duration-1000 ${isCenter
                          ? 'border-white/10 shadow-indigo-500/30'
                          : 'border-white/5 shadow-slate-900/40'
                        }`}
                    >
                      {/* Premium gradient background for center card only */}
                      {isCenter && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-purple-500/8 to-pink-500/8 rounded-2xl" />
                          <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover/card:opacity-60" />
                        </>
                      )}

                      {/* Strictly Contained Scrollable Content */}
                      <div className="relative h-full overflow-y-auto overflow-x-hidden custom-scrollbar p-6 md:p-7">
                        <div className="flex flex-col min-h-full">
                          <div className="flex-1 space-y-4">
                            {/* Icon Container */}
                            <div
                              className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm transition-all duration-500 ${isCenter
                                  ? 'h-16 w-16 ring-2 ring-indigo-500/20 group-hover/card:scale-105 group-hover/card:rotate-3 group-hover/card:ring-indigo-500/40'
                                  : 'h-14 w-14'
                                }`}
                            >
                              <ServiceIcons
                                icon={service.icon}
                                className={`transition-all duration-500 ${isCenter ? 'h-9 w-9 text-indigo-400' : 'h-7 w-7 text-indigo-300/60'
                                  }`}
                              />
                            </div>

                            {/* Title - Truncated to prevent overflow */}
                            <h3
                              className={`font-bold text-slate-50 transition-all duration-500 line-clamp-2 ${isCenter
                                  ? 'text-xl md:text-2xl group-hover/card:text-indigo-300'
                                  : 'text-base md:text-lg text-slate-300'
                                }`}
                            >
                              {service.title}
                            </h3>

                            {/* Description - Line clamped to prevent overflow */}
                            <p
                              className={`transition-all duration-500 leading-relaxed line-clamp-3 ${isCenter
                                  ? 'text-sm md:text-base text-slate-300'
                                  : 'text-xs md:text-sm text-slate-400'
                                }`}
                            >
                              {service.desc}
                            </p>

                            {/* Bullet Points - Strictly contained */}
                            <ul
                              className={`space-y-2 transition-all duration-500 ${isCenter ? 'text-xs md:text-sm text-slate-400' : 'text-xs text-slate-500'
                                }`}
                            >
                              {service.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span
                                    className={`flex-shrink-0 rounded-full transition-all duration-300 ${isCenter
                                        ? 'mt-1.5 h-1.5 w-1.5 bg-indigo-400 ring-2 ring-indigo-400/30'
                                        : 'mt-1 h-1 w-1 bg-slate-500'
                                      }`}
                                  />
                                  <span className="leading-relaxed break-words">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Learn More CTA - Fixed at bottom */}
                          <div
                            className={`mt-6 pt-4 border-t flex items-center gap-2 transition-all duration-500 ${isCenter
                                ? 'border-white/10 text-indigo-300 group-hover/card:gap-3'
                                : 'border-white/5 text-slate-500'
                              }`}
                          >
                            <span
                              className={`font-bold uppercase tracking-[0.25em] transition-all duration-300 ${isCenter ? 'text-xs' : 'text-[10px]'
                                }`}
                            >
                              Learn More
                            </span>
                            <svg
                              className={`transition-all duration-300 flex-shrink-0 ${isCenter
                                  ? 'h-4 w-4 group-hover/card:translate-x-1'
                                  : 'h-3 w-3'
                                }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Shine effect - Only on center card hover */}
                      {isCenter && (
                        <div className="absolute inset-0 -translate-x-full rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1200 group-hover/card:translate-x-full pointer-events-none" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 gap-2.5">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`rounded-full transition-all duration-500 ${getActiveDotIndex() === index
                    ? 'h-2.5 w-10 bg-gradient-to-r from-indigo-400 to-purple-400 shadow-lg shadow-indigo-400/50'
                    : 'h-2.5 w-2.5 bg-slate-600 hover:bg-slate-500 hover:scale-125'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Premium Navigation Arrows - Desktop Only */}
          {!isMobile && (
            <>
              <button
                onClick={() => handleArrowClick('prev')}
                className="arrow-button absolute left-0 top-1/2 z-40 -translate-y-1/2 rounded-full bg-gradient-to-r from-slate-900/95 to-slate-800/95 p-4 text-slate-300 opacity-0 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 hover:from-slate-800 hover:to-slate-700 hover:text-indigo-300 hover:scale-110 hover:shadow-indigo-500/30 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => handleArrowClick('next')}
                className="arrow-button absolute right-0 top-1/2 z-40 -translate-y-1/2 rounded-full bg-gradient-to-r from-slate-900/95 to-slate-800/95 p-4 text-slate-300 opacity-0 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 hover:from-slate-800 hover:to-slate-700 hover:text-indigo-300 hover:scale-110 hover:shadow-indigo-500/30 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

    </section>
  );
};

export default Services;