import React from 'react';
import { BrandLogo } from './BrandLogo';
import { companyData } from '../data/company';
import { footerServiceLinks, footerCompanyLinks } from '../data/navigation';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050C1F] text-white border-t border-white/10 relative overflow-hidden">
      {/* Decorative top red precision line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E42332] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Brand & Contact summary (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" />

            <p className="text-xs font-mono text-[#E42332] uppercase tracking-wider font-semibold">
              {companyData.tagline}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              {companyData.description}
            </p>

            <div className="pt-4 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E42332] shrink-0 mt-0.5" />
                <span>{companyData.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#3154B5] shrink-0" />
                <a href={`tel:${companyData.contact.phone}`} className="hover:text-white transition-colors">
                  {companyData.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#3154B5] shrink-0" />
                <a href={`mailto:${companyData.contact.emailPrimary}`} className="hover:text-white transition-colors">
                  {companyData.contact.emailPrimary}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Servicios (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E42332]" />
              SERVICIOS TÉCNICOS
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Empresa y Proceso (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3154B5]" />
              EMPRESA
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              {footerCompanyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Brand ownership disclaimer & Legal (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              AVISO TÉCNICO Y MARCAS
            </h4>
            <p className="text-[11px] font-mono text-slate-400 leading-relaxed mb-4">
              {companyData.brandDisclaimer}
            </p>
            <div className="p-3 bg-white/5 border border-white/10 rounded text-[11px] font-mono text-slate-400">
              Atención presencial en planta sujeta a previa coordinación de seguridad industrial.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {currentYear} DREAM TM. Todos los derechos reservados. Puebla, México.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Aviso de Privacidad
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/5 hover:bg-white/15 rounded text-white transition-colors flex items-center gap-1.5"
              aria-label="Volver al inicio"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px]">SUBIR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
