import React from 'react';
import { companyData } from '../data/company';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export const LocationBlock: React.FC = () => {
  return (
    <div className="bg-[#101C3B] p-6 sm:p-8 rounded-lg border border-white/15 shadow-xl text-white flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#E42332]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#E42332] font-semibold">
            SEDE OPERATIVA
          </span>
        </div>

        <h3 className="font-display font-bold text-2xl text-white mb-6">
          {companyData.name}
        </h3>

        {/* Contact details list */}
        <div className="space-y-4 mb-8">
          {/* Address */}
          <div className="flex items-start gap-3 text-slate-300">
            <div className="w-8 h-8 rounded bg-[#08122D] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-[#E42332]" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">DIRECCIÓN</div>
              <div className="text-sm font-medium text-white">{companyData.location.street}</div>
              <div className="text-xs text-slate-400">{companyData.location.neighborhood}</div>
              <div className="text-xs text-slate-400">C.P. {companyData.location.postalCode}, {companyData.location.city}, {companyData.location.state}</div>
            </div>
          </div>

          {/* Telephone */}
          <div className="flex items-start gap-3 text-slate-300">
            <div className="w-8 h-8 rounded bg-[#08122D] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
              <Phone className="w-4 h-4 text-[#3154B5]" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">TELÉFONO DE PLANTA / OFICINA</div>
              <a
                href={`tel:${companyData.contact.phone}`}
                className="text-sm font-mono font-medium text-white hover:text-[#E42332] transition-colors"
              >
                {companyData.contact.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 text-slate-300">
            <div className="w-8 h-8 rounded bg-[#08122D] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
              <Mail className="w-4 h-4 text-[#3154B5]" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">CORREO DE CONTACTO</div>
              <a
                href={`mailto:${companyData.contact.emailPrimary}`}
                className="text-xs font-mono text-slate-200 hover:text-white block transition-colors"
              >
                {companyData.contact.emailPrimary}
              </a>
              <a
                href={`mailto:${companyData.contact.emailSecondary}`}
                className="text-xs font-mono text-slate-400 hover:text-white block transition-colors"
              >
                {companyData.contact.emailSecondary}
              </a>
            </div>
          </div>

          {/* Schedule */}
          <div className="flex items-start gap-3 text-slate-300">
            <div className="w-8 h-8 rounded bg-[#08122D] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4 text-slate-400" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">MODALIDAD DE ATENCIÓN</div>
              <div className="text-xs text-slate-300">{companyData.scheduleNote}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stylized CAD Coordinates Map Block */}
      <div className="p-4 bg-[#08122D] border border-white/10 rounded-lg">
        <div className="flex items-center justify-between mb-3 text-xs font-mono">
          <span className="text-slate-400">COORDENADAS GPS</span>
          <span className="text-[#3154B5]">LAT 19.0414 · LNG -98.2063</span>
        </div>

        <a
          href={companyData.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/15 rounded text-xs font-mono text-center flex items-center justify-center gap-2 text-white transition-colors"
        >
          <span>VER EN GOOGLE MAPS</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>
    </div>
  );
};
