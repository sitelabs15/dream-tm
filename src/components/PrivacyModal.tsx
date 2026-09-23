import React from 'react';
import { X, Shield } from 'lucide-react';
import { companyData } from '../data/company';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0B1638] text-white border border-white/15 rounded-lg shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#101C3B]">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#E42332]" />
            <h3 className="font-display font-bold text-lg text-white">
              Aviso de Privacidad
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <div className="p-3 bg-red-950/30 border border-red-500/30 rounded text-[11px] font-mono text-red-200">
            * Contenido informativo de cumplimiento normativo (LFPDPPP). Pendiente de validación jurídica definitiva por Dream TM.
          </div>

          <h4 className="font-semibold text-white text-base">
            1. Identidad y Domicilio del Responsable
          </h4>
          <p>
            {companyData.name}, con domicilio de operaciones ubicado en {companyData.location.fullAddress}, es responsable del tratamiento legítimo, controlado e informado de sus datos personales.
          </p>

          <h4 className="font-semibold text-white text-base">
            2. Finalidades del Tratamiento de Datos
          </h4>
          <p>
            Los datos personales y de contacto corporativo proporcionados a través de este sitio web (nombre, correo electrónico, teléfono, empresa y detalles de requerimientos técnicos) serán utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Evaluar la viabilidad y alcance técnico de cotizaciones y proyectos de automatización.</li>
            <li>Establecer comunicación directa con representantes de ingeniería o compras de su empresa.</li>
            <li>Coordinar visitas técnicas a instalaciones previa autorización.</li>
          </ul>

          <h4 className="font-semibold text-white text-base">
            3. Transferencia y Confidencialidad
          </h4>
          <p>
            Dream TM no comercializa ni transfiere datos personales a terceros con fines publicitarios. La información técnica compartida se maneja con estricta reserva profesional en apego a las prácticas industriales.
          </p>

          <h4 className="font-semibold text-white text-base">
            4. Derechos ARCO
          </h4>
          <p>
            Usted tiene derecho a conocer qué datos tenemos registrados, para qué los usamos y las condiciones de su tratamiento (Acceso). Asimismo, es su derecho solicitar la corrección (Rectificación), su eliminación de nuestros registros (Cancelación), u oponerse al tratamiento de los mismos para fines específicos (Oposición). Para ejercer sus derechos ARCO, envíe una solicitud al correo: <span className="font-mono text-white">{companyData.contact.emailPrimary}</span>.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#08122D] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
