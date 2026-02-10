import React, { useEffect, useRef, useState } from 'react';
import {
  Code2, Cloud, Shield, Smartphone, Database, Cpu,
  Sparkles, ArrowRight, CheckCircle2, Zap, Globe, Lock
} from 'lucide-react';

// Function to scroll to hero section
const scrollToHero = () => {
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const Services = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  // Tech Stack Data
  const techStacks = [
    {
      id: 1,
      category: 'Frontend Development',
      icon: <Code2 className="h-8 w-8" />,
      description: 'Building modern, responsive, and performant user interfaces with cutting-edge frameworks. Our frontend expertise ensures pixel-perfect designs that deliver exceptional user experiences across all devices.'
    },
    {
      id: 2,
      category: 'Backend & APIs',
      icon: <Database className="h-8 w-8" />,
      description: 'Crafting robust, scalable backend systems and RESTful/GraphQL APIs that power complex applications. We architect data solutions that grow with your business demands.'
    },
    {
      id: 3,
      category: 'Cloud Infrastructure',
      icon: <Cloud className="h-8 w-8" />,
      description: 'Deploying and managing cloud-native applications with automated CI/CD pipelines. We leverage cloud platforms to ensure high availability, scalability, and cost efficiency.'
    },
    {
      id: 4,
      category: 'Mobile Development',
      icon: <Smartphone className="h-8 w-8" />,
      description: 'Creating native and cross-platform mobile applications that deliver seamless experiences. From concept to deployment, we build apps that users love.'
    },
    {
      id: 5,
      category: 'AI & Machine Learning',
      icon: <Cpu className="h-8 w-8" />,
      description: 'Integrating intelligent features and predictive analytics into your applications. We harness the power of AI to automate processes and derive actionable insights from data.'
    },
    {
      id: 6,
      category: 'Security & Testing',
      icon: <Shield className="h-8 w-8" />,
      description: 'Implementing comprehensive security measures and rigorous testing protocols. We protect your applications from vulnerabilities while ensuring code quality through automated testing.'
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleSections.includes(index)) {
              setVisibleSections((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="relative w-full scroll-mt-24 py-10 md:py-14"
    >
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 animate-float rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 animate-float rounded-full bg-purple-500/10 blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 animate-float rounded-full bg-blue-500/10 blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-300">
              Our Technology Stack
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            Powered by{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cutting-Edge Tech
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            We leverage industry-leading technologies to build scalable, secure, and innovative solutions that drive your business forward.
          </p>
        </div>

        {/* Tech Stack Sections - Alternating Layout */}
        <div className="space-y-6 md:space-y-8">
          {techStacks.map((stack, index) => {
            const isVisible = visibleSections.includes(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={stack.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center"
              >
                {/* Category Section */}
                <div
                  className={`${isEven ? 'md:order-1' : 'md:order-2'
                    } ${isVisible
                      ? isEven
                        ? 'animate-fade-in-left'
                        : 'animate-fade-in-right'
                      : 'opacity-0'
                    }`}
                  style={{ animationDelay: '100ms' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-3 text-indigo-400 ring-2 ring-indigo-500/20">
                      {stack.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-50 sm:text-2xl">
                      {stack.category}
                    </h3>
                  </div>
                </div>

                {/* Description Section */}
                <div
                  className={`${isEven ? 'md:order-2' : 'md:order-1'
                    } ${isVisible
                      ? isEven
                        ? 'animate-fade-in-right'
                        : 'animate-fade-in-left'
                      : 'opacity-0'
                    }`}
                  style={{ animationDelay: '200ms' }}
                >
                  <p className="text-base leading-relaxed text-slate-300 sm:text-lg mb-3">
                    {stack.description}
                  </p>
                  <button
                    onClick={scrollToHero}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-all duration-300 hover:text-indigo-300 hover:gap-3"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <div className="mt-10 text-center">
          <div className="mx-auto max-w-3xl">
           
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;