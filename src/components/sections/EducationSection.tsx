import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { educationData } from '../../data/education';
import { GraduationCap, MapPin, Calendar, CheckCircle2, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="University Studies"
          title="Education"
          subtitle="Foundational computer science education emphasizing algorithms, system architecture, and modern programming languages."
        />

        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden"
            >
              {/* Background Accent */}
              <div
                className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10"
                aria-hidden="true"
              />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/50 mb-2">
                      {item.degreeStatus}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {item.faculty}
                    </h3>
                    <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mt-1">
                      {item.institution} <span className="font-normal text-slate-500">({item.institutionArabic})</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 shrink-0">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{item.years}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <div className="py-6 space-y-4">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Core Foundations Grid */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>Curriculum &amp; Engineering Foundations</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {item.coreFoundations.map((found, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{found}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
