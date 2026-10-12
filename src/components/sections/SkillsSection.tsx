import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { skillsData } from '../../data/skills';
import { Smartphone, Server, Database, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-blue-500" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-500" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-500" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Core Competencies"
          title="Skills &amp; Technologies"
          subtitle="Honest, technology-focused developer toolbelt based on verified project experience and rigorous coursework."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillsData.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Tech Badges / Cards */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-2xs hover:border-blue-400 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{skill.name}</span>
                      {skill.badge && (
                        <span className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 bg-blue-100/70 dark:bg-blue-950/80 px-1.5 py-0.2 rounded-md">
                          {skill.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Verified Stack</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400">&bull; Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
