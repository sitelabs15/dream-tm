import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  label?: string;
  coordinate?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-video',
  label,
  coordinate
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#0B1638] rounded-lg border border-white/10 ${aspectRatio} ${className}`}>
      {!error ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            loaded ? 'opacity-90 scale-100' : 'opacity-0 scale-105'
          } hover:scale-103`}
        />
      ) : (
        /* Styled Engineering CSS/SVG Fallback Container */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0B1638] via-[#101C3B] to-[#08122D] text-slate-300">
          <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-3">
            <Cpu className="w-6 h-6 text-[#E42332]" />
          </div>
          <p className="font-display font-semibold text-sm tracking-wide text-white text-center uppercase">
            {alt}
          </p>
          <span className="text-[11px] font-mono text-slate-400 mt-1">
            ESTACIÓN INDUSTRIAL · DREAM TM
          </span>
        </div>
      )}

      {/* Engineering technical overlay badges */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#08122D]/80 via-transparent to-transparent" />

      {label && (
        <div className="absolute top-3 left-3 pointer-events-none">
          <span className="px-2 py-1 text-[10px] font-mono tracking-wider uppercase text-slate-200 bg-black/60 backdrop-blur-md border border-white/10 rounded">
            {label}
          </span>
        </div>
      )}

      {coordinate && (
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <span className="text-[10px] font-mono text-slate-300 bg-black/60 backdrop-blur-md px-2 py-0.5 border border-white/10 rounded">
            {coordinate}
          </span>
        </div>
      )}
    </div>
  );
};
