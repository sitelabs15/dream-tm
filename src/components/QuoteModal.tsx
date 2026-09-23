import React from 'react';
import { ContactForm } from './ContactForm';
import { X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrivacy: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, onOpenPrivacy }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#08122D] text-white border border-white/20 rounded-lg shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#101C3B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E42332]" />
            <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
              SOLICITAR COTIZACIÓN TÉCNICA · DREAM TM
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

        <div className="p-4 sm:p-6 overflow-y-auto">
          <ContactForm onOpenPrivacy={onOpenPrivacy} />
        </div>
      </div>
    </div>
  );
};
