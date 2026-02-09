import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [activeInput, setActiveInput] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const inputRefs = useRef({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      const currentInput = e.target.name;
      const inputOrder = ['name', 'email', 'phone', 'company', 'message'];
      const currentIndex = inputOrder.indexOf(currentInput);

      if (currentIndex !== -1 && currentIndex < inputOrder.length - 1) {
        const nextInput = inputOrder[currentIndex + 1];
        inputRefs.current[nextInput]?.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-64 w-64 md:h-96 md:w-96 animate-pulse rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -right-1/4 top-1/3 h-64 w-64 md:h-96 md:w-96 animate-pulse rounded-full bg-cyan-600/20 blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 md:h-96 md:w-96 animate-pulse rounded-full bg-purple-600/20 blur-3xl" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content Container */}
      <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Contact Form */}
        <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-16">
          <div className="w-full max-w-xl">
            {/* Header */}
            <div className="mb-8 md:mb-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 md:px-4 backdrop-blur-sm">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#sparkle-gradient)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="sparkle-gradient" x1="2" y1="2" x2="22" y2="21.02">
                      <stop offset="0%" stopColor="#818CF8" />
                      <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-xs md:text-sm font-medium text-indigo-300">Let's Connect</span>
              </div>
              <h2 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white lg:text-6xl">
                Start Your
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"> Digital Journey</span>
              </h2>
              <p className="text-base md:text-lg text-slate-400">Transform your vision into reality. Our team is ready to bring innovation to your business.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 gap-4 md:gap-5 sm:grid-cols-2">
                <div className="group relative">
                  <input
                    ref={(el) => (inputRefs.current.name = el)}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setActiveInput('name')}
                    onBlur={() => setActiveInput(null)}
                    onKeyDown={handleKeyDown}
                    className="peer w-full border-b-2 border-slate-700 bg-transparent pb-2 md:pb-3 pt-5 md:pt-6 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-indigo-400 text-sm md:text-base"
                    placeholder="Full Name"
                    required
                  />
                  <label className={`absolute left-0 top-0 text-xs md:text-sm transition-all duration-300 ${formData.name || activeInput === 'name' ? 'text-indigo-400' : 'top-4 md:top-5 text-slate-500'}`}>
                    Full Name *
                  </label>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 ${activeInput === 'name' ? 'w-full' : 'w-0'}`} />
                </div>

                <div className="group relative">
                  <input
                    ref={(el) => (inputRefs.current.email = el)}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveInput('email')}
                    onBlur={() => setActiveInput(null)}
                    onKeyDown={handleKeyDown}
                    className="peer w-full border-b-2 border-slate-700 bg-transparent pb-2 md:pb-3 pt-5 md:pt-6 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-indigo-400 text-sm md:text-base"
                    placeholder="Email"
                    required
                  />
                  <label className={`absolute left-0 top-0 text-xs md:text-sm transition-all duration-300 ${formData.email || activeInput === 'email' ? 'text-indigo-400' : 'top-4 md:top-5 text-slate-500'}`}>
                    Email Address *
                  </label>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 ${activeInput === 'email' ? 'w-full' : 'w-0'}`} />
                </div>
              </div>

              {/* Phone & Company Row */}
              <div className="grid grid-cols-1 gap-4 md:gap-5 sm:grid-cols-2">
                <div className="group relative">
                  <input
                    ref={(el) => (inputRefs.current.phone = el)}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setActiveInput('phone')}
                    onBlur={() => setActiveInput(null)}
                    onKeyDown={handleKeyDown}
                    className="peer w-full border-b-2 border-slate-700 bg-transparent pb-2 md:pb-3 pt-5 md:pt-6 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-indigo-400 text-sm md:text-base"
                    placeholder="Phone"
                  />
                  <label className={`absolute left-0 top-0 text-xs md:text-sm transition-all duration-300 ${formData.phone || activeInput === 'phone' ? 'text-indigo-400' : 'top-4 md:top-5 text-slate-500'}`}>
                    Phone Number
                  </label>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 ${activeInput === 'phone' ? 'w-full' : 'w-0'}`} />
                </div>

                <div className="group relative">
                  <input
                    ref={(el) => (inputRefs.current.company = el)}
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setActiveInput('company')}
                    onBlur={() => setActiveInput(null)}
                    onKeyDown={handleKeyDown}
                    className="peer w-full border-b-2 border-slate-700 bg-transparent pb-2 md:pb-3 pt-5 md:pt-6 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-indigo-400 text-sm md:text-base"
                    placeholder="Company"
                  />
                  <label className={`absolute left-0 top-0 text-xs md:text-sm transition-all duration-300 ${formData.company || activeInput === 'company' ? 'text-indigo-400' : 'top-4 md:top-5 text-slate-500'}`}>
                    Company Name
                  </label>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 ${activeInput === 'company' ? 'w-full' : 'w-0'}`} />
                </div>
              </div>

              {/* Message */}
              <div className="group relative">
                <textarea
                  ref={(el) => (inputRefs.current.message = el)}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setActiveInput('message')}
                  onBlur={() => setActiveInput(null)}
                  rows={4}
                  className="peer w-full resize-none border-b-2 border-slate-700 bg-transparent pb-2 md:pb-3 pt-5 md:pt-6 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-indigo-400 text-sm md:text-base"
                  placeholder="Message"
                  required
                />
                <label className={`absolute left-0 top-0 text-xs md:text-sm transition-all duration-300 ${formData.message || activeInput === 'message' ? 'text-indigo-400' : 'top-4 md:top-5 text-slate-500'}`}>
                  Your Message *
                </label>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 ${activeInput === 'message' ? 'w-full' : 'w-0'}`} />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative mt-6 md:mt-8 w-full overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 p-0.5"
              >
                <div className="flex items-center justify-center gap-2 md:gap-3 rounded-[11px] md:rounded-[14px] bg-slate-950 px-6 md:px-8 py-3 md:py-4 transition-all duration-300 group-hover:bg-transparent">
                  <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-sm md:text-base font-semibold text-transparent transition-all duration-300 group-hover:from-white group-hover:to-white">
                    Send Message
                  </span>
                  <Send className="h-4 w-4 md:h-5 md:w-5 text-indigo-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Contact Info & Map */}
        <div className="relative flex flex-col bg-gradient-to-br from-slate-900/50 to-transparent backdrop-blur-sm">
          {/* Contact Cards */}
          <div className="flex-1 space-y-4 md:space-y-6 p-4 sm:p-6 md:p-8 lg:p-16">
            <div className="mb-6 md:mb-8">
              <h3 className="mb-2 text-2xl md:text-3xl font-bold text-white">Get in Touch</h3>
              <p className="text-sm md:text-base text-slate-400">We're here to help and answer any questions you might have.</p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3 md:space-y-4">
              {/* Location Card with 3D Icon */}
              <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-slate-900/40 p-4 md:p-6 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/60">
                <div className="absolute -right-10 -top-10 h-24 w-24 md:h-32 md:w-32 rounded-full bg-indigo-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
                <div className="relative flex items-start gap-3 md:gap-4">
                  <div className="rounded-lg md:rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 md:p-3 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" opacity="0.2" />
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1 text-sm md:text-base font-semibold text-white">Office Location</h4>
                    <p className="text-xs md:text-sm leading-relaxed text-slate-400 break-words">123 Innovation Drive, Suite 400<br />San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>

              {/* Email Card with 3D Icon */}
              <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-slate-900/40 p-4 md:p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/60">
                <div className="absolute -right-10 -top-10 h-24 w-24 md:h-32 md:w-32 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
                <div className="relative flex items-start gap-3 md:gap-4">
                  <div className="rounded-lg md:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-2.5 md:p-3 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="currentColor" opacity="0.2" />
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1 text-sm md:text-base font-semibold text-white">Email Address</h4>
                    <a href="mailto:hello@company.com" className="block text-xs md:text-sm text-slate-400 transition-colors hover:text-cyan-400 break-all">hello@company.com</a>
                    <a href="mailto:support@company.com" className="block text-xs md:text-sm text-slate-400 transition-colors hover:text-cyan-400 break-all">support@company.com</a>
                  </div>
                </div>
              </div>

              {/* Phone Card with 3D Icon */}
              <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-slate-900/40 p-4 md:p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-500/50 hover:bg-slate-900/60">
                <div className="absolute -right-10 -top-10 h-24 w-24 md:h-32 md:w-32 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
                <div className="relative flex items-start gap-3 md:gap-4">
                  <div className="rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-2.5 md:p-3 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22 20.92 21.1 21.72 20.1 21.62C10.88 20.83 3.17 13.12 2.38 3.9C2.28 2.9 3.08 2 4.08 2H7.08C7.58 2 8.03 2.37 8.1 2.87C8.23 3.87 8.47 4.84 8.82 5.76C8.95 6.1 8.85 6.49 8.58 6.76L6.82 8.52C8.38 11.63 11.37 14.62 14.48 16.18L16.24 14.42C16.51 14.15 16.9 14.05 17.24 14.18C18.16 14.53 19.13 14.77 20.13 14.9C20.63 14.97 21 15.42 21 15.92V18.92C21 19.42 20.55 19.87 20.05 19.87C19.55 19.87 19 19.42 19 18.92V15.92C18.55 15.85 18.1 15.73 17.66 15.58C16.92 15.35 16.12 15.62 15.63 16.11L13.87 17.87C10.42 16.1 7.9 13.58 6.13 10.13L7.89 8.37C8.38 7.88 8.65 7.08 8.42 6.34C8.27 5.9 8.15 5.45 8.08 5C8.08 4.5 7.63 4 7.13 4H4.13C3.63 4 3.18 4.45 3.18 4.95C3.97 13.58 10.42 20.03 19.05 20.82C19.55 20.82 20 20.37 20 19.87V16.87C20 16.37 19.55 15.92 19.05 15.92H16.05" fill="currentColor" opacity="0.2" />
                      <path d="M22 16.92V19.92C22.01 20.96 21.07 21.78 20.04 21.62C10.62 20.83 3.17 13.38 2.38 3.96C2.22 2.93 3.04 1.99 4.08 2H7.08C7.55 2 7.96 2.33 8.03 2.8C8.16 3.8 8.4 4.77 8.75 5.69C8.89 6.04 8.79 6.43 8.51 6.71L6.69 8.53C8.26 11.65 11.35 14.74 14.47 16.31L16.29 14.49C16.57 14.21 16.96 14.11 17.31 14.25C18.23 14.6 19.2 14.84 20.2 14.97C20.67 15.04 21 15.45 21 15.92V18.92C21 19.42 20.55 19.87 20.05 19.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1 text-sm md:text-base font-semibold text-white">Phone Number</h4>
                    <a href="tel:+1234567890" className="block text-xs md:text-sm text-slate-400 transition-colors hover:text-purple-400">+1 (234) 567-890</a>
                    <p className="text-xs text-slate-500">Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>
              </div>

              {/* Business Hours Card with 3D Icon */}
              <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-slate-900/40 p-4 md:p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-900/60">
                <div className="absolute -right-10 -top-10 h-24 w-24 md:h-32 md:w-32 rounded-full bg-emerald-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
                <div className="relative flex items-start gap-3 md:gap-4">
                  <div className="rounded-lg md:rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 md:p-3 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.2" />
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1 text-sm md:text-base font-semibold text-white">Business Hours</h4>
                    <p className="text-xs md:text-sm text-slate-400">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-xs md:text-sm text-slate-400">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links with Real Icons */}
            <div className="pt-4 md:pt-6">
              <h4 className="mb-3 md:mb-4 text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-400">Connect With Us</h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {/* Twitter/X */}
                <a
                  href="#"
                  className="group/social relative overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 p-2.5 md:p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-slate-500/50"
                  aria-label="Twitter"
                >
                  <svg className="h-4 w-4 md:h-5 md:w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="group/social relative overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-2.5 md:p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4 md:h-5 md:w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="#"
                  className="group/social relative overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 p-2.5 md:p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50"
                  aria-label="GitHub"
                >
                  <svg className="h-4 w-4 md:h-5 md:w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="group/social relative overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 p-2.5 md:p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4 md:h-5 md:w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="group/social relative overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 p-2.5 md:p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4 md:h-5 md:w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  className="group/social relative overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-br from-red-500 to-red-700 p-2.5 md:p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/50"
                  aria-label="YouTube"
                >
                  <svg className="h-4 w-4 md:h-5 md:w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977278629856!2d-122.41941568468152!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="brightness-75 grayscale transition-all duration-500 hover:brightness-100 hover:grayscale-0"
              title="Office Location"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;