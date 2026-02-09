import React, { useState, useEffect, useRef } from 'react';
import {
  Cloud,
  Cpu,
  Lock,
  Zap,
  Target,
  Users,
  Award,
  TrendingUp,
  Code,
  Layers,
  Shield,
  Sparkles,
  Globe,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Rocket,
  Heart,
  Activity,
  Server,
  Database,
  Wifi,
  BookOpen,
  Cog,
  TrendingDown,
  DollarSign
} from 'lucide-react';

// Animation hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isIntersecting };
};

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [metrics, setMetrics] = useState({
    performance: 0,
    uptime: 0,
    security: 0,
    quality: 0
  });

  const headerRef = useIntersectionObserver();
  const statsRef = useIntersectionObserver();
  const contentRef = useIntersectionObserver();
  const tabsRef = useIntersectionObserver();
  const kaavRef = useIntersectionObserver();
  const achievementsRef = useIntersectionObserver();
  const ctaRef = useIntersectionObserver();

  // Animate metrics on dashboard
  useEffect(() => {
    if (contentRef.isIntersecting) {
      const targets = { performance: 98, uptime: 99.9, security: 95, quality: 97 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setMetrics({
          performance: targets.performance * easeOut,
          uptime: targets.uptime * easeOut,
          security: targets.security * easeOut,
          quality: targets.quality * easeOut
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setMetrics(targets);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [contentRef.isIntersecting]);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Cpu className="h-5 w-5" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by cutting-edge algorithms',
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable architecture built for the future',
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: 'Enterprise Security',
      description: 'Bank-grade protection for your critical data',
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'Peak Performance',
      description: 'Lightning-fast solutions optimized for speed',
    },
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered', icon: <Award /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Heart /> },
    { value: '50+', label: 'Enterprise Clients', icon: <Users /> },
    { value: '15+', label: 'Countries Served', icon: <Globe /> },
  ];

  // KAAV Principles
  const kaavPrinciples = [
    {
      letter: 'K',
      title: 'Knowledge',
      description: 'Sharing deep expertise through training, consulting, and advisory services',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      letter: 'A',
      title: 'Automation',
      description: 'Leveraging modern technology and efficient processes to accelerate results',
      icon: <Cog className="h-6 w-6" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      letter: 'A',
      title: 'Advisory',
      description: 'Guiding clients through complex IT and digital transformation challenges',
      icon: <Lightbulb className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      letter: 'V',
      title: 'Value',
      description: 'Delivering measurable impact, scalable solutions, and lasting business outcomes',
      icon: <DollarSign className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const specializations = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'IT Consulting & Solution Design',
      description: 'Strategic guidance and tailored solutions for your unique business challenges'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Corporate & Technical Training',
      description: 'Comprehensive training programs to upskill your teams and drive digital adoption'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Offshore Delivery & Outsourcing',
      description: 'Cost-effective global delivery model connecting skilled teams across borders'
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: 'Cloud, AI & Digital Enablement',
      description: 'Modern technology solutions that empower and accelerate your business growth'
    }
  ];

  const expertise = [
    {
      category: 'Software Development',
      items: [
        'Custom Web Applications',
        'Mobile App Development (iOS & Android)',
        'Enterprise Software Solutions',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Microservices Architecture'
      ]
    },
    {
      category: 'Digital Solutions',
      items: [
        'Cloud Migration & Management',
        'DevOps & CI/CD Implementation',
        'Digital Transformation Consulting',
        'E-commerce Platforms',
        'CRM & ERP Systems',
        'Data Analytics & BI Solutions'
      ]
    },
    {
      category: 'Emerging Technologies',
      items: [
        'Artificial Intelligence & ML',
        'Blockchain Development',
        'IoT Solutions',
        'AR/VR Experiences',
        'Chatbots & Virtual Assistants',
        'Computer Vision Applications'
      ]
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that give you a competitive advantage.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'User-Centric Design',
      description: 'Every solution we create is designed with the end-user in mind, ensuring intuitive interfaces and seamless experiences.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Scalability',
      description: 'We build solutions that grow with your business, ensuring your technology infrastructure can handle future demands.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Security & Compliance',
      description: 'Your data security is our priority. We implement industry-leading security practices and ensure full regulatory compliance.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Result-Driven',
      description: 'We focus on delivering measurable outcomes that directly impact your bottom line and business objectives.'
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Quality Excellence',
      description: 'Our rigorous quality assurance processes ensure every deliverable meets the highest standards of excellence.'
    }
  ];

  const methodology = [
    {
      phase: '01',
      title: 'Discovery & Strategy',
      description: 'We begin by understanding your business goals, challenges, and target audience to create a comprehensive strategy.'
    },
    {
      phase: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create intuitive, visually stunning interfaces with interactive prototypes for your feedback.'
    },
    {
      phase: '03',
      title: 'Development & Testing',
      description: 'Our developers build robust solutions using agile methodologies, with continuous testing and quality assurance.'
    },
    {
      phase: '04',
      title: 'Deployment & Support',
      description: 'We ensure smooth deployment and provide ongoing support, maintenance, and optimization services.'
    }
  ];

  const achievements = [
    'ISO 27001 Certified for Information Security',
    'Microsoft Gold Partner',
    'AWS Advanced Consulting Partner',
    'Google Cloud Partner',
    'Winner of Tech Innovation Award 2024',
    'Top 100 Software Development Companies',
    'Clutch Top B2B Company 2024',
    '5-Star Rating on G2 and Capterra'
  ];

  const tabs = [
    { id: 'mission', label: 'Mission & Vision', icon: <Target className="h-4 w-4" /> },
    { id: 'values', label: 'Our Values', icon: <Heart className="h-4 w-4" /> },
    { id: 'expertise', label: 'Expertise', icon: <Code className="h-4 w-4" /> },
    { id: 'methodology', label: 'Methodology', icon: <Layers className="h-4 w-4" /> }
  ];

  return (
    <section
      id="about"
      className="relative w-full scroll-mt-24 overflow-hidden border-y border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/30"
    >
      {/* TOP RIGHT Semi-circle bubble */}
      <div className="absolute -right-20 -top-20 h-64 w-64 overflow-hidden">
        <div
          className="h-full w-full rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-15 blur-3xl transition-all duration-700 hover:scale-110 hover:opacity-20"
        />
      </div>

      {/* TOP RIGHT Semi-circle bubble border/outline */}
      <div className="absolute -right-24 -top-24 h-80 w-80">
        <div
          className="h-full w-full rounded-full opacity-10 transition-all duration-700 hover:scale-105 hover:opacity-15"
          style={{
            background: `radial-gradient(circle at top right, rgba(99, 102, 241, 0.2) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* TOP LEFT Semi-circle bubble */}
      <div className="absolute -left-20 -top-20 h-64 w-64 overflow-hidden">
        <div
          className="h-full w-full rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-15 blur-3xl transition-all duration-700 hover:scale-110 hover:opacity-20"
        />
      </div>

      {/* TOP LEFT Semi-circle bubble border/outline */}
      <div className="absolute -left-24 -top-24 h-80 w-80">
        <div
          className="h-full w-full rounded-full opacity-10 transition-all duration-700 hover:scale-105 hover:opacity-15"
          style={{
            background: `radial-gradient(circle at top left, rgba(59, 130, 246, 0.2) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-96 w-96 animate-float rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -right-1/4 top-1/2 h-96 w-96 animate-float rounded-full bg-purple-500/10 blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 animate-float rounded-full bg-blue-500/10 blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

     
        {/* Rest of your About content continues here... */}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        {/* Header */}
        <div
          ref={headerRef.ref}
          className={`mb-12 sm:mb-16 text-center ${headerRef.isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400 delay-100">
            About Kaav IT Enablement
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-50 delay-200 px-4">
            Bridging Strategy and
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {' '}
              Execution
            </span>
          </h2>
          <p className="delay-300 mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg text-slate-400 px-4">
            Empowering businesses through cutting-edge IT solutions, training, and outsourcing with a global delivery model that connects innovation and excellence.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef.ref}
          className={`mb-12 sm:mb-16 md:mb-20 grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4 ${statsRef.isIntersecting ? '' : 'opacity-0'}`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`card-hover-effect group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/50 p-4 sm:p-6 text-center backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-indigo-500/30 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-indigo-500/20 ${statsRef.isIntersecting ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 translate-y-full bg-gradient-to-b from-indigo-500/10 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
              <div className="relative">
                <div className="mb-2 sm:mb-3 inline-flex rounded-lg bg-indigo-500/10 p-2 sm:p-3 text-indigo-400 ring-1 ring-indigo-500/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:ring-indigo-500/40">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-400 transition-all duration-500 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About Us Section */}
        <div
          ref={contentRef.ref}
          className={`mb-8 sm:mb-10 ${contentRef.isIntersecting ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}
        >
          <div className="mb-4">
            <h3 className="flex items-center justify-center sm:justify-start gap-2 text-xl sm:text-2xl font-semibold text-slate-50 px-4 sm:px-0">
              <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-400 flex-shrink-0" />
              <span>About Us</span>
            </h3>
          </div>
          <div className="grid gap-4 text-sm sm:text-base text-slate-300 leading-relaxed md:grid-cols-2 px-4 sm:px-0">
            <p>
              At Kaav IT Enablement, we empower businesses to bridge strategy and execution through cutting-edge IT solutions, training, and outsourcing. Founded as a Canada-based firm with a global delivery model, we connect skilled teams in India with companies across Canada and beyond, delivering high-quality, cost-effective technology solutions without compromising excellence.
            </p>
            <p>
              We believe technology should empower, not complicate. Our mission is to enable businesses to achieve more with the right knowledge, tools, and talent, connecting innovation and execution seamlessly across borders and industries.
            </p>
          </div>
        </div>

        {/* KAAV Principles Section */}
        {/* Cards Container */}
        <div
          id="kaav-scroll"
          className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {kaavPrinciples.map((principle, index) => (
            <div
              key={index}
              className="group relative min-w-[80vw] max-w-xs sm:min-w-[260px] flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-5 sm:p-6 md:p-8 backdrop-blur transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 md:min-w-0"
              style={{
                scrollSnapAlign: 'center',
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Semi-circle bubble in top right corner */}
              <div className="absolute -right-12 -top-12 h-32 w-32 overflow-hidden">
                <div
                  className={`h-full w-full rounded-full bg-gradient-to-br ${principle.color} opacity-20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-30`}
                />
              </div>

              {/* Semi-circle bubble border/outline */}
              <div className="absolute -right-16 -top-16 h-40 w-40">
                <div
                  className={`h-full w-full rounded-full border-2 border-gradient-to-br ${principle.color} opacity-10 transition-all duration-500 group-hover:scale-110 group-hover:opacity-20`}
                  style={{
                    background: `radial-gradient(circle at top right, transparent 60%, rgba(99, 102, 241, 0.1) 100%)`,
                  }}
                />
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
              />

              {/* Letter */}
              <div className="relative mb-3 text-4xl sm:text-5xl md:text-6xl font-black text-slate-700 transition-all duration-500 group-hover:scale-110 group-hover:text-indigo-400">
                {principle.letter}
              </div>

              {/* Icon */}
              <div className="relative mb-3 text-indigo-400 transition-all duration-500 group-hover:scale-110 group-hover:text-indigo-300">
                {principle.icon}
              </div>

              {/* Title */}
              <h3 className="relative mb-2 text-lg sm:text-xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-300">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="relative text-xs sm:text-sm leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
        {/* Mobile scroll hint */}
        <div className="mt-2 flex items-center justify-center gap-2 text-[11px] text-slate-400 md:hidden">
          <span className="h-px w-6 bg-slate-600" />
          <span>Swipe horizontally to see more</span>
          <span className="animate-pulse text-slate-300">↔</span>
        </div>


        {/* Specializations Section */}
        <div className={`mb-12 sm:mb-16 md:mb-20 ${contentRef.isIntersecting ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
          <div className="mb-6 sm:mb-8 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-50 mb-2 sm:mb-3 px-4">
              What We Specialize In
            </h3>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto px-4">
              Comprehensive IT services tailored to your business needs
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="card-hover-effect group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/50 p-5 sm:p-6 backdrop-blur-sm transition-all duration-500 hover:scale-102 hover:border-indigo-500/30 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-indigo-500/20"
              >
                <div className="absolute inset-0 translate-y-full bg-gradient-to-b from-indigo-500/10 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
                
                <div className="relative flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-xl bg-indigo-500/10 p-3 sm:p-3.5 text-indigo-400 ring-1 ring-indigo-500/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:ring-indigo-500/40">
                      {spec.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-slate-50 mb-2 transition-colors duration-300 group-hover:text-indigo-300">
                      {spec.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-300">
                      {spec.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid - Dashboard and Rotating Feature Card */}
        <div className={`mb-12 grid gap-6 lg:grid-cols-2 lg:gap-8 ${contentRef.isIntersecting ? '' : 'opacity-0'}`}>
          {/* Left Column - Rotating Feature Card */}
          <div className={`${contentRef.isIntersecting ? 'animate-fade-in-left delay-300' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/5 border-dashed bg-slate-900/30 p-5 sm:p-6 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-indigo-500/20" />

              <div className="relative mt-6 sm:mt-10 flex flex-col justify-center space-y-4 sm:space-y-6">
                {/* Rotating Content */}
                <div className="relative min-h-[100px] sm:min-h-[80px]">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`absolute inset-x-0 transition-all duration-500 ${index === currentFeatureIndex
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4 pointer-events-none'
                        }`}
                    >
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 px-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-2 ring-indigo-500/20 flex-shrink-0">
                          {feature.icon}
                        </div>

                        <div className="text-center sm:text-left">
                          <h4 className="text-base sm:text-lg font-semibold text-slate-50">
                            {feature.title}
                          </h4>
                          <p className="mt-1 max-w-md text-xs sm:text-sm text-slate-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 pt-4">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeatureIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${index === currentFeatureIndex
                          ? 'w-6 bg-indigo-400'
                          : 'w-1.5 bg-slate-600 hover:bg-slate-500'
                        }`}
                      aria-label={`Go to feature ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating particles */}
              <div className="pointer-events-none absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-1 w-1 rounded-full bg-indigo-400/20 animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Why Choose Section - Hidden on mobile, visible on md+ */}
            <div className={`hidden md:block mt-6 sm:mt-8 ${contentRef.isIntersecting ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
              <h4 className="mb-4 sm:mb-5 text-base sm:text-lg font-semibold text-slate-50">
                Why Choose Kaav IT Enablement?
              </h4>

              <div className="space-y-3">
                {[
                  'Proven track record with 500+ successful projects',
                  'End-to-end solutions from concept to deployment',
                  'Agile development with transparent communication',
                  'Dedicated account managers and 24/7 support',
                  'Competitive pricing with flexible engagement models',
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-white/5 bg-slate-900/30 p-3 sm:p-4 transition-all duration-300 hover:scale-105 hover:border-indigo-500/30 hover:bg-slate-900/50"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-400" />
                    <span className="text-xs sm:text-sm text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Innovation Dashboard */}
          <div className={`${contentRef.isIntersecting ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-800/95 p-5 sm:p-6 shadow-2xl backdrop-blur-xl transition-all duration-700 hover:border-indigo-500/40 hover:shadow-indigo-500/30">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
              </div>

              <div className="relative space-y-3 sm:space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 animate-pulse rounded-full bg-red-500" />
                      <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 animate-pulse rounded-full bg-yellow-500" style={{ animationDelay: '0.2s' }} />
                      <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 animate-pulse rounded-full bg-green-500" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <div className="h-px w-6 sm:w-10 bg-gradient-to-r from-slate-700 to-transparent" />
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Activity className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-400 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-500">LIVE</span>
                  </div>
                </div>

                {/* Dashboard Title */}
                <div className="flex items-center gap-2 border-b border-white/5 pb-2 sm:pb-3">
                  <div className="rounded-lg bg-indigo-500/10 p-1.5">
                    <Server className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-200">Innovation Dashboard</h4>
                    <p className="text-[9px] sm:text-[10px] text-slate-500">Real-time System Metrics</p>
                  </div>
                </div>

                {/* Metrics */}
                {/* Metrics */}
                <div className="space-y-2 sm:space-y-3">
                  {[
                    { label: 'System Performance', value: metrics.performance, color: 'from-blue-400 to-blue-600', icon: <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> },
                    { label: 'Cloud Uptime', value: metrics.uptime, color: 'from-cyan-400 to-blue-500', icon: <Cloud className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> },
                    { label: 'Security Score', value: metrics.security, color: 'from-indigo-400 to-blue-600', icon: <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> },
                    { label: 'Code Quality', value: metrics.quality, color: 'from-sky-400 to-indigo-500', icon: <Code className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> },
                  ].map((metric, index) => (
                    <div key={index} className="group/metric space-y-1 sm:space-y-1.5 rounded-lg bg-slate-950/30 p-2.5 sm:p-3 transition-all duration-300 hover:bg-slate-950/50">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div className="text-slate-400">{metric.icon}</div>
                          <span className="font-medium text-slate-400 text-[10px] sm:text-xs">{metric.label}</span>
                        </div>
                        <span className="font-mono text-[10px] sm:text-xs font-semibold text-slate-300">
                          {metric.value.toFixed(metric.label === 'Cloud Uptime' ? 1 : 0)}%
                        </span>
                      </div>
                      <div className="relative h-1.5 overflow-hidden rounded-full bg-slate-800">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${metric.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${metric.value}%` }}
                        >
                          <div className="h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Code Block */}
                <div className="group/code relative overflow-hidden rounded-lg border border-slate-800/50 bg-slate-950/70 p-2.5 sm:p-3 font-mono text-[9px] sm:text-[10px] backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30">
                  <div className="absolute right-2 top-2 rounded bg-slate-800/50 px-1.5 py-0.5 text-[8px] sm:text-[9px] text-slate-500">
                    TS
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-purple-400">
                      <span className="text-slate-500">interface</span> Innovation {'{'}
                    </div>
                    <div className="ml-2 sm:ml-3 text-blue-400">
                      ai: <span className="text-yellow-400">'advanced'</span>;
                    </div>
                    <div className="ml-2 sm:ml-3 text-blue-400">
                      scalability: <span className="text-yellow-400">'infinite'</span>;
                    </div>
                    <div className="ml-2 sm:ml-3 text-blue-400">
                      security: <span className="text-yellow-400">'paramount'</span>;
                    </div>
                    <div className="text-purple-400">{'}'};</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover/code:opacity-100" />
                </div>

                {/* Status Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
                  <div className="group/status card-hover-effect overflow-hidden rounded-lg border border-slate-800/50 bg-slate-950/30 p-2.5 sm:p-3 text-center transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-950/50">
                    <div className="mb-1 sm:mb-1.5 flex items-center justify-center">
                      <Wifi className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-indigo-400" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-indigo-400 transition-all duration-300 group-hover/status:scale-110">24/7</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400">Support</div>
                  </div>
                  <div className="group/status card-hover-effect overflow-hidden rounded-lg border border-slate-800/50 bg-slate-950/30 p-2.5 sm:p-3 text-center transition-all duration-300 hover:border-purple-500/30 hover:bg-slate-950/50">
                    <div className="mb-1 sm:mb-1.5 flex items-center justify-center">
                      <Database className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-400" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-purple-400 transition-all duration-300 group-hover/status:scale-110">100%</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="pointer-events-none absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-0.5 w-0.5 rounded-full bg-indigo-400/40 animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div ref={tabsRef.ref} className="mb-12 sm:mb-16 md:mb-20">
          {/* Tab Navigation */}
          <div className={`mb-6 sm:mb-8 flex flex-wrap justify-center gap-2 sm:gap-3 px-2 ${tabsRef.isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium transition-all duration-500 ${activeTab === tab.id
                  ? 'scale-105 bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-slate-800/50 text-slate-400 hover:scale-105 hover:bg-slate-800 hover:text-slate-300'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-white/5 bg-slate-900/30 p-5 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm">
            {activeTab === 'mission' && (
              <div className="space-y-6 sm:space-y-8 animate-fade-in">
                <div className="transition-smooth">
                  <h3 className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-bold text-slate-50">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-indigo-400 flex-shrink-0" />
                    <span>Our Mission</span>
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base md:text-lg text-slate-300">
                    To empower businesses worldwide with innovative, scalable, and user-centric
                    technology solutions that drive measurable growth and create lasting competitive
                    advantages in the digital economy.
                  </p>
                  <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base text-slate-400">
                    We believe technology should be an enabler, not a barrier. Our mission is to
                    democratize access to enterprise-grade technology solutions, making them accessible
                    and affordable for businesses of all sizes.
                  </p>
                </div>

                <div className="transition-smooth">
                  <h3 className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-bold text-slate-50">
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-purple-400 flex-shrink-0" />
                    <span>Our Vision</span>
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base md:text-lg text-slate-300">
                    To be the world's most trusted technology partner, pioneering breakthrough
                    solutions that shape industries, transform businesses, and create positive
                    impact for our clients, their customers, and society at large.
                  </p>
                  <p className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base text-slate-400">
                    We envision a future where businesses can focus on their core competencies while
                    we handle the complexities of technology, enabling them to innovate faster,
                    scale smarter, and compete globally.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="animate-fade-in">
                <h3 className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl font-bold text-slate-50">
                  The Principles That Guide Us
                </h3>
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="card-hover-effect group rounded-xl border border-white/5 bg-slate-800/30 p-4 sm:p-5 md:p-6 transition-all duration-500 hover:scale-105 hover:border-indigo-500/30 hover:bg-slate-800/50 hover:shadow-xl hover:shadow-indigo-500/10"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="mb-3 sm:mb-4 inline-flex rounded-lg bg-indigo-500/10 p-2 sm:p-2.5 md:p-3 text-indigo-400 ring-1 ring-indigo-500/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-indigo-500/20">
                        {value.icon}
                      </div>
                      <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-slate-50 transition-colors duration-300 group-hover:text-indigo-300">
                        {value.title}
                      </h4>
                      <p className="leading-relaxed text-xs sm:text-sm md:text-base text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'expertise' && (
              <div className="animate-fade-in">
                <h3 className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl font-bold text-slate-50">
                  Our Areas of Expertise
                </h3>
                <div className="space-y-6 sm:space-y-8">
                  {expertise.map((category, index) => (
                    <div key={index} className="transition-smooth">
                      <h4 className="mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg md:text-xl font-semibold text-indigo-400">
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                        <span>{category.category}</span>
                      </h4>
                      <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {category.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 rounded-lg border border-white/5 bg-slate-800/30 p-2.5 sm:p-3 transition-all duration-300 hover:scale-105 hover:border-indigo-500/30 hover:bg-slate-800/50"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-green-400" />
                            <span className="text-xs sm:text-sm text-slate-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'methodology' && (
              <div className="animate-fade-in">
                <h3 className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl font-bold text-slate-50">
                  Our Development Process
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {methodology.map((step, index) => (
                    <div
                      key={index}
                      className="card-hover-effect group relative overflow-hidden rounded-xl border border-white/5 bg-slate-800/30 p-4 sm:p-5 md:p-6 transition-all duration-500 hover:scale-102 hover:border-indigo-500/30 hover:bg-slate-800/50 hover:shadow-xl hover:shadow-indigo-500/10"
                    >
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-indigo-500/10 text-xl sm:text-2xl font-bold text-indigo-400 ring-2 ring-indigo-500/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:ring-indigo-500/40">
                            {step.phase}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-2 text-base sm:text-lg md:text-xl font-semibold text-slate-50 transition-colors duration-300 group-hover:text-indigo-300">
                            {step.title}
                          </h4>
                          <p className="leading-relaxed text-xs sm:text-sm md:text-base text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {index < methodology.length - 1 && (
                        <div className="hidden sm:block absolute bottom-0 left-7 md:left-10 h-6 w-0.5 bg-gradient-to-b from-indigo-500/30 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Achievements & Recognition */}
        <div ref={achievementsRef.ref} className="hidden md:block mb-12 sm:mb-16 md:mb-20">
          {/* <h3
            className={`mb-6 sm:mb-8 text-center text-xl sm:text-2xl font-bold text-slate-50 ${achievementsRef.isIntersecting
                ? 'animate-fade-in-up'
                : 'opacity-0'
              }`}
          >
            Awards & Recognition
          </h3> */}

          {/* <div
            className={`rounded-xl sm:rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-5 sm:p-6 md:p-8 backdrop-blur-sm ${achievementsRef.isIntersecting
                ? 'animate-fade-in-up delay-200'
                : 'opacity-0'
              }`}
          >
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="card-hover-effect flex items-center gap-2 sm:gap-3 rounded-lg border border-white/5 bg-slate-800/30 p-3 sm:p-4 transition-all duration-500 hover:scale-105 hover:border-indigo-500/30 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-indigo-500/10"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-yellow-400" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;