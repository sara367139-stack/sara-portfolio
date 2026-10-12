import React from 'react';
import { Button } from '../common/Button';
import { GitBranch, Terminal } from 'lucide-react';
import { Github } from '../common/Icons';
import { socialLinks } from '../../data/socialLinks';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-20 lg:py-28 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle Grid & Code Glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>Version Control &amp; Code Repositories</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Explore my code, repositories, and development journey.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Inspect application architectures, commit logs, Flutter widgets, and REST client modules directly on my GitHub profile. All projects follow clean separation of concerns and industry standards.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Github className="w-5 h-5" />}
              >
                View GitHub Profile
              </Button>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <GitBranch className="w-4 h-4 text-emerald-400" />
                <span>@sara367139-stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
