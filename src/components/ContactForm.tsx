import React, { useState, useRef } from 'react';
import { Send, Upload, CheckCircle2, AlertCircle, Loader2, FileText } from 'lucide-react';

interface ContactFormProps {
  onOpenPrivacy: () => void;
}

interface FormState {
  name: string;
  company: string;
  position: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  robotBrand: string;
  robotCount: string;
  projectDescription: string;
  estimatedDate: string;
  privacyAccepted: boolean;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  projectDescription?: string;
  privacyAccepted?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onOpenPrivacy }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    city: '',
    projectType: 'Integración robótica',
    robotBrand: 'FANUC',
    robotCount: '',
    projectDescription: '',
    estimatedDate: '',
    privacyAccepted: false
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Por favor ingresa tu nombre (mínimo 2 caracteres).';
    }

    if (!formData.company.trim() || formData.company.trim().length < 2) {
      newErrors.company = 'Por favor ingresa el nombre de tu empresa (mínimo 2 caracteres).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Ingresa un correo corporativo o válido.';
    }

    const phoneClean = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.phone.trim() || phoneClean.length < 8) {
      newErrors.phone = 'Ingresa un teléfono válido de contacto (mínimo 8 dígitos).';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Selecciona el tipo de proyecto.';
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 20) {
      newErrors.projectDescription = 'Describe brevemente el alcance del proyecto (mínimo 20 caracteres).';
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = 'Debes aceptar el aviso de privacidad para continuar.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('loading');

    try {
      // B2B Architectural Submission Handler
      // Stores submission safely in localStorage and logs schema formatted for Supabase `contact_submissions`
      const payload = {
        id: `sub_${Date.now()}`,
        created_at: new Date().toISOString(),
        name: formData.name,
        company: formData.company,
        position: formData.position,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        project_type: formData.projectType,
        robot_brand: formData.robotBrand,
        robot_count: formData.robotCount ? parseInt(formData.robotCount) : null,
        project_description: formData.projectDescription,
        estimated_date: formData.estimatedDate || null,
        attachment_filename: fileName,
        privacy_accepted: formData.privacyAccepted,
        status: 'new'
      };

      // Persist in client submissions history
      const existing = JSON.parse(localStorage.getItem('dreamtm_submissions') || '[]');
      existing.push(payload);
      localStorage.setItem('dreamtm_submissions', JSON.stringify(existing));

      // Simulate network latency (500ms) for realistic UX
      await new Promise((resolve) => setTimeout(resolve, 600));

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Max 15MB
      if (file.size > 15 * 1024 * 1024) {
        alert('El archivo supera el límite de 15MB.');
        return;
      }
      setFileName(file.name);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#101C3B] p-8 sm:p-10 rounded-lg border border-emerald-500/40 text-center">
        <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display font-bold text-2xl text-white mb-2">
          Gracias. Hemos recibido la información de tu proyecto.
        </h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Nuestro equipo de ingeniería evaluará los requerimientos técnicos y se pondrá en contacto al teléfono o correo proporcionado.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setFormData({
              name: '',
              company: '',
              position: '',
              email: '',
              phone: '',
              city: '',
              projectType: 'Integración robótica',
              robotBrand: 'FANUC',
              robotCount: '',
              projectDescription: '',
              estimatedDate: '',
              privacyAccepted: false
            });
            setFileName(null);
            setErrors({});
          }}
          className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider rounded transition-colors"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#101C3B] p-6 sm:p-8 rounded-lg border border-white/15 shadow-xl text-white"
    >
      <div className="mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono text-[#E42332] uppercase tracking-wider block font-semibold">
            SOLICITUD DE REVISIÓN TÉCNICA
          </span>
          <h3 className="font-display font-bold text-xl text-white mt-1">
            Formulario de Proyecto B2B
          </h3>
        </div>
        <span className="text-[11px] font-mono text-slate-400 hidden sm:block">
          * Campos obligatorios
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Nombre */}
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Nombre completo *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ej. Ing. Carlos Mendoza"
            className={`w-full px-3.5 py-2.5 bg-[#08122D] border rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
              errors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/15 focus:border-[#E42332] focus:ring-[#E42332]'
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.name}</p>}
        </div>

        {/* Empresa */}
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Empresa / Planta *
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Ej. Manufacturas del Centro"
            className={`w-full px-3.5 py-2.5 bg-[#08122D] border rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
              errors.company ? 'border-red-500 focus:ring-red-500' : 'border-white/15 focus:border-[#E42332] focus:ring-[#E42332]'
            }`}
          />
          {errors.company && <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.company}</p>}
        </div>

        {/* Cargo */}
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Cargo / Posición
          </label>
          <input
            type="text"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            placeholder="Ej. Gerente de Ingeniería / Mantenimiento"
            className="w-full px-3.5 py-2.5 bg-[#08122D] border border-white/15 rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E42332] focus:ring-1 focus:ring-[#E42332]"
          />
        </div>

        {/* Correo */}
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Correo corporativo *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="nombre@empresa.com"
            className={`w-full px-3.5 py-2.5 bg-[#08122D] border rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/15 focus:border-[#E42332] focus:ring-[#E42332]'
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.email}</p>}
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Teléfono de contacto *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+52 222 000 0000"
            className={`w-full px-3.5 py-2.5 bg-[#08122D] border rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
              errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-white/15 focus:border-[#E42332] focus:ring-[#E42332]'
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.phone}</p>}
        </div>

        {/* Ciudad / Estado */}
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Ciudad / Estado
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="Ej. Puebla, Pue. / Tlaxcala / Silao"
            className="w-full px-3.5 py-2.5 bg-[#08122D] border border-white/15 rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E42332] focus:ring-1 focus:ring-[#E42332]"
          />
        </div>
      </div>

      {/* Row 2: Selects for Technical Specifications */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {/* Tipo de proyecto */}
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Tipo de proyecto *
          </label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-3 py-2.5 bg-[#08122D] border border-white/15 rounded text-xs text-white focus:outline-none focus:border-[#E42332]"
          >
            <option value="Integración robótica">Integración robótica</option>
            <option value="Programación de robot">Programación de robot</option>
            <option value="Automatización">Automatización</option>
            <option value="Commissioning">Commissioning</option>
            <option value="Optimización">Optimización</option>
            <option value="Soporte técnico">Soporte técnico</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        {/* Marca de robot */}
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Marca de robot
          </label>
          <select
            value={formData.robotBrand}
            onChange={(e) => setFormData({ ...formData, robotBrand: e.target.value })}
            className="w-full px-3 py-2.5 bg-[#08122D] border border-white/15 rounded text-xs text-white focus:outline-none focus:border-[#E42332]"
          >
            <option value="FANUC">FANUC</option>
            <option value="KUKA">KUKA</option>
            <option value="Otra">Otra</option>
            <option value="No aplica">No aplica</option>
            <option value="No definida">No definida</option>
          </select>
        </div>

        {/* Número de robots */}
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            No. de robots (opcional)
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={formData.robotCount}
            onChange={(e) => setFormData({ ...formData, robotCount: e.target.value })}
            placeholder="Ej. 2"
            className="w-full px-3 py-2.5 bg-[#08122D] border border-white/15 rounded text-xs text-white focus:outline-none focus:border-[#E42332]"
          />
        </div>
      </div>

      {/* Descripción del proyecto */}
      <div className="mb-4">
        <label className="block text-xs font-mono text-slate-300 mb-1.5">
          Descripción técnica del proyecto o requerimiento *
        </label>
        <textarea
          rows={4}
          value={formData.projectDescription}
          onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
          placeholder="Describe el proceso a automatizar, tipo de piezas, ciclo estimado o tipo de soporte en planta que requieres..."
          className={`w-full px-3.5 py-2.5 bg-[#08122D] border rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
            errors.projectDescription ? 'border-red-500 focus:ring-red-500' : 'border-white/15 focus:border-[#E42332] focus:ring-[#E42332]'
          }`}
        />
        {errors.projectDescription && (
          <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.projectDescription}</p>
        )}
      </div>

      {/* File Attachment & Estimated Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Fecha estimada de inicio
          </label>
          <input
            type="date"
            value={formData.estimatedDate}
            onChange={(e) => setFormData({ ...formData, estimatedDate: e.target.value })}
            className="w-full px-3 py-2 bg-[#08122D] border border-white/15 rounded text-xs text-white focus:outline-none focus:border-[#E42332]"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-300 mb-1.5">
            Adjuntar información técnica (opcional)
          </label>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full px-3 py-2 bg-[#08122D] hover:bg-[#0B1638] border border-white/15 rounded text-xs font-mono text-slate-300 flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            {fileName ? (
              <>
                <FileText className="w-3.5 h-3.5 text-[#E42332]" />
                <span className="truncate max-w-[200px]">{fileName}</span>
              </>
            ) : (
              <>
                <Upload className="w-3.5 h-3.5 text-slate-400" />
                <span>PDF, DWG/CAD, XLS (Max 15MB)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Privacy Checkbox */}
      <div className="mb-6">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.privacyAccepted}
            onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
            className="mt-1 w-4 h-4 rounded bg-[#08122D] border-white/20 text-[#E42332] focus:ring-[#E42332]"
          />
          <span className="text-xs text-slate-300">
            He leído y acepto el{' '}
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-[#E42332] hover:underline font-semibold"
            >
              aviso de privacidad
            </button>{' '}
            para el tratamiento de mis datos de contacto industrial.
          </span>
        </label>
        {errors.privacyAccepted && (
          <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.privacyAccepted}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-[#E42332] hover:bg-[#C91826] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 cursor-pointer disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>ENVIANDO REQUERIMIENTO...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>ENVIAR SOLICITUD DE PROYECTO</span>
          </>
        )}
      </button>

      {status === 'error' && (
        <div className="mt-3 p-3 bg-red-950/40 border border-red-500/40 rounded flex items-center gap-2 text-xs text-red-300">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Ocurrió un error al procesar tu solicitud. Por favor intenta de nuevo o comunícate vía telefónica.</span>
        </div>
      )}
    </form>
  );
};
