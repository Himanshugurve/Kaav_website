import React, { useState, useRef, useEffect } from 'react';
import { Send, AlertCircle, CheckCircle2, Loader2, X } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeInput, setActiveInput] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeMap, setActiveMap] = useState('canada'); // 'canada' or 'indore'
  const inputRefs = useRef({});

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ── Validation rules ──────────────────────────────────────────
  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) {
      errs.name = 'Full name is required.';
    } else if (data.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!data.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (data.phone && !/^[+\d\s\-().]{7,20}$/.test(data.phone)) {
      errs.phone = 'Please enter a valid phone number.';
    }

    if (!data.message.trim()) {
      errs.message = 'Please describe how we can help.';
    } else if (data.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);
    // Live validate only touched fields
    if (touched[e.target.name]) {
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [e.target.name]: errs[e.target.name] }));
    }
  };

  const handleBlur = (e) => {
    setActiveInput(null);
    const name = e.target.name;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: errs[name] }));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      const order = ['name', 'email', 'phone', 'company', 'message'];
      const idx = order.indexOf(e.target.name);
      if (idx !== -1 && idx < order.length - 1) {
        inputRefs.current[order[idx + 1]]?.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    const allTouched = { name: true, email: true, phone: true, company: true, message: true };
    setTouched(allTouched);
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error || 'Failed to send message. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // ── Shared input base class (transparent, no browser autofill bg) ──
  const inputBase =
    'w-full border-b-2 border-slate-700 bg-transparent pb-2 pt-6 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-indigo-400 text-sm md:text-base autofill-transparent';

  const labelBase = (field) =>
    `absolute left-0 top-0 text-xs md:text-sm transition-all duration-300 pointer-events-none ${formData[field] || activeInput === field
      ? 'text-indigo-400 text-xs top-0'
      : 'text-slate-500 top-4 md:top-5'
    }`;

  const underlineClass = (field) =>
    `absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 ${activeInput === field ? 'w-full' : 'w-0'
    }`;

  return (
    <section
      id="contact"
      aria-label="Contact KAAV IT Enabling Services"
      itemScope
      itemType="https://schema.org/LocalBusiness"
      className="relative w-full scroll-mt-24 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950"
    >
      {/* ── Autofill background override ── */}
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
          box-shadow: 0 0 0 1000px transparent inset !important;
          -webkit-text-fill-color: #fff !important;
          transition: background-color 9999s ease-in-out 0s;
          background-color: transparent !important;
        }
        textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      `}</style>

      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-64 w-64 md:h-96 md:w-96 animate-pulse rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -right-1/4 top-1/3 h-64 w-64 md:h-96 md:w-96 animate-pulse rounded-full bg-cyan-600/20 blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 md:h-96 md:w-96 animate-pulse rounded-full bg-purple-600/20 blur-3xl" style={{ animationDelay: '4s' }} />
      </div>

      {/* ── Content ── */}
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2">

        {/* ── LEFT — Form ── */}
        <div className="flex flex-col justify-start p-6 sm:p-8 md:p-10 lg:p-14">

          {/* Header — pinned to top */}
          <div className="mb-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 backdrop-blur-sm">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="url(#sg)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="sg" x1="2" y1="2" x2="22" y2="21.02">
                    <stop offset="0%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xs md:text-sm font-medium text-indigo-300">Let's Connect</span>
            </div>
            <h2 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              Start Your
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"> Digital Journey</span>
            </h2>
            <p className="text-sm md:text-base text-slate-400">
              Transform your vision into reality. Our team is ready to bring innovation to your business.
            </p>
          </div>

          {/* ── Success state ── */}
          {submitted ? (
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-slate-400">Thanks for reaching out. We'll get back to you within 24 hours.</p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', message: '' }); setTouched({}); setErrors({}); }}
                className="mt-2 rounded-xl border border-indigo-500/40 px-6 py-2 text-sm text-indigo-300 transition hover:bg-indigo-500/20"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Name & Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}
                <div className="relative">
                  <input
                    ref={(el) => (inputRefs.current.name = el)}
                    type="text" name="name" autoComplete="name"
                    value={formData.name} onChange={handleChange}
                    onFocus={() => setActiveInput('name')} onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    className={inputBase}
                    placeholder="Full Name" required
                  />
                  <label className={labelBase('name')}>Full Name *</label>
                  <div className={underlineClass('name')} />
                  {touched.name && errors.name && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="h-3 w-3 flex-shrink-0" />{errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    ref={(el) => (inputRefs.current.email = el)}
                    type="email" name="email" autoComplete="email"
                    value={formData.email} onChange={handleChange}
                    onFocus={() => setActiveInput('email')} onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    className={inputBase}
                    placeholder="Email" required
                  />
                  <label className={labelBase('email')}>Email Address *</label>
                  <div className={underlineClass('email')} />
                  {touched.email && errors.email && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="h-3 w-3 flex-shrink-0" />{errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Phone */}
                <div className="relative">
                  <input
                    ref={(el) => (inputRefs.current.phone = el)}
                    type="tel" name="phone" autoComplete="tel"
                    value={formData.phone} onChange={handleChange}
                    onFocus={() => setActiveInput('phone')} onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    className={inputBase}
                    placeholder="Phone"
                  />
                  <label className={labelBase('phone')}>Phone Number</label>
                  <div className={underlineClass('phone')} />
                  {touched.phone && errors.phone && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="h-3 w-3 flex-shrink-0" />{errors.phone}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div className="relative">
                  <input
                    ref={(el) => (inputRefs.current.company = el)}
                    type="text" name="company" autoComplete="organization"
                    value={formData.company} onChange={handleChange}
                    onFocus={() => setActiveInput('company')} onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    className={inputBase}
                    placeholder="Company"
                  />
                  <label className={labelBase('company')}>Company Name</label>
                  <div className={underlineClass('company')} />
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  ref={(el) => (inputRefs.current.message = el)}
                  name="message"
                  value={formData.message} onChange={handleChange}
                  onFocus={() => setActiveInput('message')} onBlur={handleBlur}
                  rows={4}
                  className={`${inputBase} resize-none`}
                  placeholder="Message" required
                />
                <label className={labelBase('message')}>Your Message *</label>
                <div className={underlineClass('message')} />
                {touched.message && errors.message && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle className="h-3 w-3 flex-shrink-0" />{errors.message}
                  </p>
                )}
              </div>

              {/* Error Banner */}
              {submitError && (
                <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="flex-1">{submitError}</span>
                  <button onClick={() => setSubmitError('')} className="flex-shrink-0 text-red-400 hover:text-red-200 transition-colors">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="group relative mt-4 w-full overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 p-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center gap-2 rounded-[11px] md:rounded-[14px] bg-slate-950 px-6 py-3 md:py-4 transition-all duration-300 group-hover:bg-transparent group-disabled:bg-slate-950">
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 md:h-5 md:w-5 animate-spin text-indigo-400" />
                      <span className="text-sm md:text-base font-semibold text-indigo-400">Sending…</span>
                    </>
                  ) : (
                    <>
                      <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-sm md:text-base font-semibold text-transparent transition-all duration-300 group-hover:from-white group-hover:to-white">
                        Send Message
                      </span>
                      <Send className="h-4 w-4 md:h-5 md:w-5 text-indigo-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                    </>
                  )}
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              </button>

            </form>
          )}
        </div>

        {/* ── RIGHT — Contact Info Cards + Map ── */}
        <div className="flex flex-col bg-gradient-to-br from-slate-900/50 to-transparent backdrop-blur-sm">
          <div className="flex-1 space-y-3 md:space-y-4 p-6 sm:p-8 md:p-10 lg:p-14">
            <div className="mb-6">
              <h3 className="mb-2 text-2xl md:text-3xl font-bold text-white">Get in Touch</h3>
              <p className="text-sm md:text-base text-slate-400">We're here to help and answer any questions you might have.</p>
            </div>

            {/* Location */}
            <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-slate-900/40 p-4 md:p-5 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/60">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <div className="relative flex items-start gap-3 md:gap-4">
                <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-white">Registered Location</h4>
                  <p
                    className="text-xs md:text-sm leading-relaxed text-slate-400"
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">6452 Chaumont Crest</span><br />
                    <span itemProp="addressLocality">Mississauga</span>,{' '}
                    <span itemProp="addressRegion">ON</span>{' '}
                    <span itemProp="postalCode">L5N 2M8</span>,{' '}
                    <span itemProp="addressCountry">Canada</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Offshore Development Center */}
            <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-slate-900/40 p-4 md:p-5 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/60">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <div className="relative flex items-start gap-3 md:gap-4">
                <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-white">Offshore Development Center - Kodvix Technologies</h4>
                  <p className="text-xs md:text-sm leading-relaxed text-slate-400">405, Trade House, 14 South Tukoganj Rd<br />Manorama Ganj, Indore, Madhya Pradesh</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-slate-900/40 p-4 md:p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/60">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <div className="relative flex items-start gap-3 md:gap-4">
                <div className="rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-2.5 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6L12 13 2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-white">Email Address</h4>
                  <a
                    href="mailto:info@kaav-ites.com"
                    className="block text-xs md:text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                    itemProp="email"
                  >info@kaav-ites.com</a>
                  <a
                    href="mailto:contact@kaav-ites.com"
                    className="block text-xs md:text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >contact@kaav-ites.com</a>
                </div>
              </div>
            </div>

            {/* Contact Number */}
            <div className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-slate-900/40 p-4 md:p-5 backdrop-blur-md transition-all duration-300 hover:border-purple-500/50 hover:bg-slate-900/60">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <div className="relative flex items-start gap-3 md:gap-4">
                <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 p-2.5 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-white">Contact Number</h4>
                  <a
                    href="tel:+12498765343"
                    className="block text-xs md:text-sm text-slate-400 hover:text-purple-400 transition-colors"
                    itemProp="telephone"
                  >+1 (249) 876-5343</a>
                  <p className="text-xs text-slate-500">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Tabs */}
          <div className="flex border-b border-white/10 bg-slate-900/40">
            <button
              onClick={() => setActiveMap('canada')}
              className={`flex-1 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeMap === 'canada'
                ? 'bg-indigo-500/20 text-indigo-400 border-b-2 border-indigo-500'
                : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                }`}
            >
              Mississauga, Canada
            </button>
            <button
              onClick={() => setActiveMap('indore')}
              className={`flex-1 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeMap === 'indore'
                ? 'bg-purple-500/20 text-purple-400 border-b-2 border-purple-500'
                : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                }`}
            >
              Indore, India
            </button>
          </div>

          {/* Map Container */}
          <div className="relative h-48 md:h-80 overflow-hidden">
            {activeMap === 'canada' ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5780.774524116524!2d-79.75764802400647!3d43.57764935731421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6a13160ba61d%3A0x81c04cfa439621e3!2s6452%20Chaumont%20Crescent%2C%20Mississauga%2C%20ON%20L5N%202M8!5e0!3m2!1sen!2sca!4v1771699489719!5m2!1sen!2sca"
                width="100%" height="100%"
                style={{ border: 0 }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-75 grayscale transition-all duration-500 hover:brightness-100 hover:grayscale-0"
                title="KAAV Office - Mississauga, Canada"
              />
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2826590759278!2d75.87508417519489!3d22.71773302763568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8396a847fd529cf5%3A0xfe2e5d48b30a899d!2sKodvix%20Technologies!5e0!3m2!1sen!2sca!4v1771714274535!5m2!1sen!2sca"
                width="100%" height="100%"
                style={{ border: 0 }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-75 grayscale transition-all duration-500 hover:brightness-100 hover:grayscale-0"
                title="Offshore Development Center - Indore, India"
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;