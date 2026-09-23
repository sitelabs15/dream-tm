import React from 'react';
import { ServiceItem } from '../data/services';
import { X, Check, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuote
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0B1638] text-white border border-white/15 rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#101C3B]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#E42332] bg-red-950/40 px-2 py-0.5 border border-red-500/30 rounded">
              {service.number}
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              ESPECIFICACIÓN TÉCNICA
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
              {service.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Capabilities breakdown */}
          <div className="p-5 bg-[#08122D] border border-white/10 rounded-lg">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E42332]" />
              Alcance de integración y soporte
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-[#E42332] shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          {service.applications && service.applications.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Aplicaciones típicas
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {service.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#3154B5] font-mono">›</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deliverables */}
          {service.deliverables && service.deliverables.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Entregables de ingeniería
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-400 font-mono">✓</span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/10 bg-[#08122D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-slate-400">
            Consultar viabilidad para tu planta
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white border border-white/10 rounded transition-colors w-full sm:w-auto"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="px-5 py-2 bg-[#E42332] hover:bg-[#C91826] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>COTIZAR SERVICIO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
