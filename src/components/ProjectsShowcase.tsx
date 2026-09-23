import React, { useState } from 'react';
import { projectsData, ProjectItem } from '../data/projects';
import { ProjectDetailModal } from './ProjectDetailModal';
import { industrialAssets } from '../data/assets';
import { ImageWithFallback } from './ImageWithFallback';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

interface ProjectsShowcaseProps {
  onOpenQuote: () => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'robotics', label: 'Robótica' },
    { id: 'automotive', label: 'Automotriz' },
    { id: 'handling', label: 'Manipulación' }
  ];

  return (
    <section id="proyectos" className="py-24 bg-[#08122D] text-white relative border-b border-white/10 bg-cad-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-semibold text-[#E42332] tracking-wider uppercase">
                03 / PROYECTOS
              </span>
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                INGENIERÍA APLICADA
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white [text-wrap:balance]">
              PROYECTOS DONDE LA INGENIERÍA SE CONVIERTE EN PRODUCCIÓN.
            </h2>
          </div>

          {/* Interactive filter tabs (Buttons per frontend-design rule) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#101C3B] border border-white/10 rounded-lg">
            {filters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#E42332] text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Verified Project */}
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="lg:col-span-8 bg-[#101C3B] border border-white/15 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-white/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Visual side */}
                <div className="md:col-span-6 relative">
                  <ImageWithFallback
                    src={industrialAssets.projectFanuc.src}
                    alt={project.title}
                    aspectRatio="h-full min-h-[260px]"
                    label="PROYECTO REAL"
                    coordinate="PUEBLA, MX"
                  />
                </div>

                {/* Info side */}
                <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Metadata (Zero-Pill discipline) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                      <span className="text-[#E42332] font-bold">{project.number}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.industry}</span>
                      <span aria-hidden="true">·</span>
                      <span>FANUC S-430</span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-slate-100 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {project.shortDescription}
                    </p>

                    <div className="space-y-1.5 text-xs font-mono text-slate-400 border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{project.location}</span>
                      </div>
                      <div className="text-slate-300">
                        Aplicación: {project.application}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#E42332] font-semibold transition-colors cursor-pointer"
                    >
                      <span>VER PROYECTO COMPLETO</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-mono text-emerald-400">
                      EN PRODUCCIÓN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Card 2: Upcoming Projects Architectural Placeholder */}
          <div className="lg:col-span-4 bg-[#0B1638] border border-dashed border-white/20 p-8 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
                <Clock className="w-4 h-4 text-[#3154B5]" />
                <span>EXPEDIENTES EN PROCESO</span>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-3">
                Próximamente más proyectos documentados.
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                En Dream TM respetamos los acuerdos de confidencialidad y validación técnica con nuestros clientes industriales antes de la publicación de casos de estudio.
              </p>

              <div className="p-4 bg-[#101C3B] rounded border border-white/10 text-xs font-mono text-slate-300 space-y-2">
                <div className="text-slate-400">Áreas de especialidad:</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#E42332]">›</span>
                  <span>Celdas de soldadura y ensamble</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#E42332]">›</span>
                  <span>Dispensado de adhesivos automotrices</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#E42332]">›</span>
                  <span>Líneas continuas de estampado</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                onClick={onOpenQuote}
                className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 text-xs font-mono uppercase text-slate-200 hover:text-white border border-white/15 rounded transition-colors text-center cursor-pointer"
              >
                CONSULTAR ANTECEDENTES PARA TU PROCESO →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
};
