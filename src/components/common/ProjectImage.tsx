import React from 'react';
import { ImageOff } from 'lucide-react';

interface ProjectImageProps {
  src?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, className = '', loading }) => {
  if (src) {
    return <img src={src} alt={alt} className={className} loading={loading} />;
  }

  return (
    <div
      role="img"
      aria-label={`${alt} (screenshots coming soon)`}
      className="w-full h-full flex flex-col items-center justify-center gap-2 bg-slate-900 text-slate-400"
    >
      <ImageOff className="w-8 h-8 text-slate-500" />
      <span className="text-xs font-medium">Screenshots coming soon</span>
    </div>
  );
};
