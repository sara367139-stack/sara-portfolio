import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { FileText, Download, Eye, CheckCircle2, AlertCircle } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';

interface ResumeSectionProps {
  onViewResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onViewResume }) => {
  return (
    <section id="resume" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Curriculum Vitae"
          title="Resume &amp; Credentials"
          subtitle="A comprehensive summary of technical skills, academic coursework at Minya National University, and verified certifications."
        />

        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-lg text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-xs">
            <FileText className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Sara Mohamed &bull; Resume Overview
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
              Download my official resume PDF or preview the verified credentials, technical proficiencies, and educational background.
            </p>
          </div>

          {/* Quick Highlights Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4 border-y border-slate-100 dark:border-slate-800 text-left text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Flutter &amp; Dart Mobile Development</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
              <span>Minya National University (CS 2024–2028)</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>NTI Certified Tracks</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={onViewResume}
              icon={<Eye className="w-4 h-4" />}
            >
              View Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              href={socialLinks.cvPath}
              download="Sara-Mohamed-CV.pdf"
              icon={<Download className="w-4 h-4" />}
            >
              Download CV (PDF)
            </Button>
          </div>

          <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5 pt-2">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>To update the CV file, replace <code className="font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">public/assets/cv/Sara_Mohamed_Resume.pdf</code></span>
          </p>
        </div>
      </div>
    </section>
  );
};
