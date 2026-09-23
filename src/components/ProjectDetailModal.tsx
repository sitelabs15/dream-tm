import React from 'react';
import { ProjectItem } from '../data/projects';
import { industrialAssets } from '../data/assets';
import { ImageWithFallback } from './ImageWithFallback';
import { X, Check, ArrowRight, MapPin, Tag } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenQuote
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#0B1638] text-white border border-white/15 rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#101C3B]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#E42332] bg-red-950/40 px-2.5 py-0.5 border border-red-500/30 rounded">
              {project.number}
            </span>
            <span className="text-xs font-mono text-slate-300">
              EXPEDIENTE DE PROYECTO
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

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
              {project.title}
            </h3>
            {/* Metadata (Zero-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-400 mt-2">
              <span className="flex items-center gap-1 text-slate-300">
                <Tag className="w-3.5 h-3.5 text-[#E42332]" />
                {project.industry}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {project.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300">{project.robotModel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{project.controller}</span>
            </div>
          </div>

          <ImageWithFallback
            src={industrialAssets.projectFanuc.src}
            alt={project.title}
            aspectRatio="aspect-[16/9]"
            label="CELDA REAL AUTOMOTRIZ"
            coordinate="PUEBLA, MÉXICO"
          />

          {/* 01 El Reto */}
          <div className="p-5 bg-[#08122D] border border-white/10 rounded-lg">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#E42332] mb-2 font-bold flex items-center gap-2">
              <span>01</span>
              <span>/</span>
              <span>EL RETO OPERATIVO</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* 02 La Solución */}
          <div className="p-5 bg-[#08122D] border border-white/10 rounded-lg">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#3154B5] mb-2 font-bold flex items-center gap-2">
              <span>02</span>
              <span>/</span>
              <span>LA SOLUCIÓN DE INGENIERÍA</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* 03 Integración en Campo */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
              03 / ALCANCE DE INTEGRACIÓN REALIZADO
            </h4>
            <div className="space-y-2">
              {project.integrationDetails.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 04 Tecnologías */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              04 / HARDWARE & CONTROL
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 05 Resultado */}
          <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1 font-bold">
              05 / RESULTADO VERIFICADO
            </h4>
            <p className="text-xs text-slate-200">
              {project.resultsNote}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-[#08122D] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            ¿Requieres una integración similar?
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="px-5 py-2.5 bg-[#E42332] hover:bg-[#C91826] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center gap-2"
          >
            <span>CONSULTAR PROYECTO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
