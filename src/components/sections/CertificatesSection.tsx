import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import type { Certificate } from '../../types';
import { Award, Calendar, Maximize2, Sparkles } from 'lucide-react';

interface CertificatesSectionProps {
  certificates: Certificate[];
  onOpenLightbox: (index: number) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  certificates,
  onOpenLightbox,
}) => {
  return (
    <section id="certificates" className="py-20 lg:py-28 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Credentials"
          title="Certificates &amp; Training"
          subtitle="Direct visual verification of intensive software bootcamps and specialized technical coursework."
        />

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => onOpenLightbox(index)}
              className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {/* Visible Certificate Image Preview */}
              <div className="relative aspect-16/11 bg-slate-950 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Issuer Badge Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-amber-300 backdrop-blur-md border border-slate-700 shadow-sm flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>{cert.issuerLogoText || 'Verified'}</span>
                  </span>
                </div>

                {/* Hover Click to Enlarge Overlay */}
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-lg inline-flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to View Full Certificate</span>
                  </span>
                </div>
              </div>

              {/* Certificate Info Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    {cert.date && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{cert.date}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                    <span>{cert.duration || 'Specialized Track'}</span>
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                    Inspect Lightbox &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
