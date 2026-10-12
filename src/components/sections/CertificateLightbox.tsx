import React, { useEffect, useCallback } from 'react';
import type { Certificate } from '../../types';
import { X, ChevronLeft, ChevronRight, Award, Calendar, Clock, CheckCircle } from 'lucide-react';

interface CertificateLightboxProps {
  certificates: Certificate[];
  currentIndex: number | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({
  certificates,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
}) => {
  const currentCert =
    currentIndex !== null && certificates[currentIndex] ? certificates[currentIndex] : null;

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % certificates.length;
    onSelectIndex(nextIndex);
  }, [currentIndex, certificates.length, onSelectIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    onSelectIndex(prevIndex);
  }, [currentIndex, certificates.length, onSelectIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !currentCert) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${currentCert.title} Certificate Lightbox`}
      onClick={(e) => {
        // Light dismiss on backdrop click
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate max-w-md">
                {currentCert.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {currentCert.issuer} &bull; Certificate {currentIndex! + 1} of {certificates.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate lightbox"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className="relative flex-1 bg-slate-950 flex items-center justify-center p-4 sm:p-8 min-h-[300px] overflow-hidden select-none">
          <img
            src={currentCert.image}
            alt={`${currentCert.title} Full View`}
            className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-2xl border border-slate-800"
          />

          {/* Previous Slide Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous certificate"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md border border-slate-700 shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Slide Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next certificate"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md border border-slate-700 shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Certificate Details Footer */}
        <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 space-y-4 shrink-0 overflow-y-auto max-h-48">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
              {currentCert.duration && (
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  <span>{currentCert.duration}</span>
                </div>
              )}
              {currentCert.date && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>{currentCert.date}</span>
                </div>
              )}
            </div>

            <div className="text-xs text-slate-400 italic">
              Use Left/Right arrow keys or buttons to navigate
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {currentCert.description}
          </p>

          {currentCert.skillsLearned.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-slate-900 dark:text-white">Curriculum Competencies:</span>
              {currentCert.skillsLearned.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
