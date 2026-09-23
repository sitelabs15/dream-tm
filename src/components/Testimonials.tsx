import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { companyData } from '../data/company';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      author: "Alfredo Balbuena",
      rating: 5,
      comment: "Una empresa líder y destacada dentro del ámbito industrial a nivel nacional e internacional.",
      source: "Reseña publicada en Google",
      context: "Ámbito Industrial"
    },
    {
      author: "Jashua Munguia",
      rating: 5,
      comment: "Profesionales en temas de robótica y automatización.",
      source: "Reseña publicada en Google",
      context: "Robótica y Automatización"
    },
    {
      author: "Alexis Vera",
      rating: 5,
      comment: "Excelente atención técnica y compromiso en proyectos de ingeniería.",
      source: "Reseña publicada en Google",
      context: "Evaluación 5 Estrellas"
    }
  ];

  return (
    <section className="py-24 bg-[#F5F7FA] text-[#142039] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with verified rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-semibold text-[#E42332] tracking-wider uppercase">
                REFERENCIAS PÚBLICAS
              </span>
              <span className="w-8 h-[1px] bg-slate-300" />
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                TESTIMONIOS VERIFICADOS
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#0B1638]">
              CONFIANZA Y OPINIONES EN EL SECTOR.
            </h2>
          </div>

          {/* Rating Summary Box */}
          <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center gap-4">
            <div className="text-center pr-4 border-r border-slate-200">
              <div className="font-display font-bold text-2xl text-[#0B1638] tabular-nums">
                {companyData.googleRating.score} <span className="text-sm font-normal text-slate-400">/ 5</span>
              </div>
              <div className="flex items-center gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-xs font-mono text-slate-500">
              <div className="text-slate-800 font-semibold">{companyData.googleRating.totalReviews} reseñas públicas</div>
              <div>{companyData.googleRating.source}</div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquare className="w-4 h-4 text-slate-300" />
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  “{rev.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-display font-semibold text-sm text-[#0B1638]">
                  {rev.author}
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mt-0.5">
                  <span>{rev.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
