import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { GraduationCap, Smartphone, Globe, Database, Palette, CheckCircle2 } from 'lucide-react';
import { educationData } from '../../data/education';

export const AboutSection: React.FC = () => {
  const primaryEdu = educationData[0];

  const focusAreas = [
    { icon: <Smartphone className="w-4 h-4 text-blue-500" />, label: 'Mobile Development (Flutter & Dart)' },
    { icon: <Globe className="w-4 h-4 text-emerald-500" />, label: 'Web Application Development' },
    { icon: <Database className="w-4 h-4 text-indigo-500" />, label: 'REST API & Firebase Integration' },
    { icon: <Palette className="w-4 h-4 text-purple-500" />, label: 'UI/UX Implementation & Design Fidelity' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Profile Overview"
          title="About Me"
          subtitle="A disciplined Computer Science student and software developer focused on engineering reliable, user-centered mobile and web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am a Computer Science student at <strong className="text-slate-900 dark:text-white">Minya National University</strong> and a <strong className="text-slate-900 dark:text-white">Flutter &amp; Web Developer</strong> with a passionate drive for turning complex real-world requirements into clean, scalable software solutions.
            </p>
            <p>
              My primary engineering focus is centered on cross-platform mobile app development with Flutter and Dart, alongside modern web development. I pay rigorous attention to clean architecture, intuitive user flows, and structured API integration with reliable backends like PostgreSQL and Firebase.
            </p>
            <p>
              Rather than building superficial demos, I prioritize production-grade principles: predictable state management with Riverpod, offline-first caching mechanisms, modular codebase architecture, and robust network error resilience.
            </p>

            {/* Core Focus Badges */}
            <div className="pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                Core Engineering Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 shadow-2xs"
                  >
                    {area.icon}
                    <span>{area.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Academic Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Academic Journey</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Higher Education</p>
                  </div>
                </div>
                <Badge variant="blue">{primaryEdu.years}</Badge>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                  Degree Status
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-white">
                  {primaryEdu.degreeStatus}
                </div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {primaryEdu.faculty}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {primaryEdu.institution} ({primaryEdu.institutionArabic}) &bull; {primaryEdu.location}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  Core Foundations
                </h4>
                <div className="space-y-2">
                  {primaryEdu.coreFoundations.map((found, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{found}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
