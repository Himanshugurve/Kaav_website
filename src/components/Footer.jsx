import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Custom Software',
    'Web Applications',
    'Mobile Apps',
    'Cloud Solutions',
    'AI Integration',
    'DevOps'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'Case Studies',
    'Blog',
    'Contact'
  ];

  const legal = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy'
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-slate-300' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' }
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-slate-950 to-black">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 via-transparent to-purple-950/10" />

      <div className="relative">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Brand Section - Takes more space */}
            <div className="lg:col-span-4">
              <div className="mb-4">
                <h3 className="mb-2 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                  KAAV
                </h3>
                <p className="text-sm text-slate-400">
                  Transforming ideas into powerful digital solutions
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-2 transition-colors hover:text-indigo-400">
                  <Mail className="h-3.5 w-3.5" />
                  <a href="mailto:hello@kodvix.com">hello@kaav.com</a>
                </div>
                <div className="flex items-center gap-2 transition-colors hover:text-indigo-400">
                  <Phone className="h-3.5 w-3.5" />
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                  <span>123 Innovation Drive, San Francisco, CA 94103</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`group relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-slate-900/50 transition-all duration-300 ${social.color} hover:border-indigo-500/50 hover:bg-slate-900`}
                  >
                    <social.icon className="h-4 w-4 text-slate-400 transition-colors group-hover:text-current" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Section - Compact grid */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
              {/* Services */}
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Services
                </h4>
                <ul className="space-y-2 text-sm">
                  {services.map((service) => (
                    <li key={service}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-indigo-400"
                      >
                        {service}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Company
                </h4>
                <ul className="space-y-2 text-sm">
                  {company.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-indigo-400"
                      >
                        {item}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Legal
                </h4>
                <ul className="space-y-2 text-sm">
                  {legal.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-indigo-400"
                      >
                        {item}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 bg-black/30 px-6 py-4">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-500">
              © {currentYear} Kaav Technology. All rights reserved.
            </p>

            {/* Tech Badge */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Built with</span>
              <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-900/50 px-2.5 py-1">
                <div className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
                <span className="text-indigo-400">React</span>
              </div>
              <span>&</span>
              <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-900/50 px-2.5 py-1">
                <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                <span className="text-cyan-400">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;