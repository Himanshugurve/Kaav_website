import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = ({ setMenuOpen }) => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Custom Software Development',
    'Web Application Development',
    'Mobile App Development',
    'Cloud Solutions',
    'Cybersecurity Services',
    'IT Consulting & Support'
  ];

  const company = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Contact', href: '#contact' },
    { name: 'Clients', href: '#clients' }
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
                <img
                  src="/Images/KAAV-ITES-DARK.png"
                  alt="Kavv Logos"
                  className="h-12 w-auto max-h-full object-contain transform scale-110 hover:scale-125 transition-transform duration-200"
                />
                <p className="text-sm text-slate-400">
                  Transforming ideas into powerful digital solutions
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-2 transition-colors hover:text-indigo-400">
                  <Mail className="h-3.5 w-3.5" />
                  <a href="info@kaav-ites.com">info@kaav-ites.com</a>
                </div>
                <div className="flex items-center gap-2 transition-colors hover:text-indigo-400">
                  <Phone className="h-3.5 w-3.5" />
                  <a href="tel:+12498765343">+1 (249) 876-5343</a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                  <span>6452 Chaumont Crescent, Mississauga, ON L5N 2M8, Canada</span>
                </div>
              </div>

            </div>

            {/* Links Section - Compact grid */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-8">
              {/* Services */}
              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Services
                </h4>
                <ul className="space-y-2 text-sm">
                  {services.map((service) => (
                    <li key={service}>
                      <a
                        href="#services"
                        className="group inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-indigo-400"
                        onClick={() => setMenuOpen && setMenuOpen(false)}
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
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-indigo-400"
                        onClick={() => setMenuOpen && setMenuOpen(false)}
                      >
                        {item.name}
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


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;