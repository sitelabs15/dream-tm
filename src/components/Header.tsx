import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { mainNavItems } from '../data/navigation';
import { companyData } from '../data/company';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08122D]/92 backdrop-blur-md border-b border-white/8 py-4 shadow-xl'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Brand wordmark */}
        <a href="#hero" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E42332] rounded">
          <BrandLogo variant="light" />
        </a>

        {/* Zone 2: Nav links */}
        <nav className="hidden lg:flex items-center gap-7">
          {mainNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E42332] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${companyData.contact.phone}`}
            className="hidden xl:flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white px-3 py-2 border border-white/10 rounded transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#E42332]" />
            <span>{companyData.contact.phoneFormatted}</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#E42332] hover:bg-[#C91826] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 shadow-lg shadow-red-900/20 active:scale-98 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>SOLICITAR COTIZACIÓN</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E42332] rounded min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-[#08122D] flex flex-col justify-between p-6 sm:p-8 border-t border-white/10 overflow-y-auto lg:hidden">
          <nav className="flex flex-col gap-4 py-4">
            {mainNavItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-display font-medium text-slate-200 hover:text-white hover:text-[#E42332] transition-colors py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-4 bg-[#E42332] hover:bg-[#C91826] text-white text-center text-sm font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
            >
              <span>SOLICITAR COTIZACIÓN</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-xs font-mono text-slate-400 flex flex-col gap-1 text-center pt-2">
              <span className="text-slate-200 font-sans font-medium">{companyData.location.city}, México</span>
              <span>{companyData.contact.phoneFormatted}</span>
              <span className="text-slate-500">{companyData.contact.emailPrimary}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
