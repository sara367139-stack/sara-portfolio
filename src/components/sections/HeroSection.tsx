import React from 'react';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import { socialLinks } from '../../data/socialLinks';
import { Button } from '../common/Button';
import { withBase } from '../../utils/withBase';

interface HeroSectionProps {
  onViewWorkClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewWorkClick }) => {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Subtle Background Glow Accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Computer Science Student &bull; Open to Internships &amp; Freelance</span>
            </div>

            {/* Main Greeting & Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sara</span> 👋
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 mt-2 font-mono">
                  Flutter &amp; Web Developer
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                I build modern mobile and web applications with a focus on clean UI, great user experiences, and reliable backend integration.
              </p>
            </div>

            {/* Core Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onViewWorkClick}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                href={socialLinks.cvPath}
                download="Sara-Mohamed-CV.pdf"
                icon={<Download className="w-4 h-4" />}
              >
                Download CV
              </Button>
            </div>

            {/* Secondary Social Chips */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white">Connect:</span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">&bull;</span>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile (Update in socialLinks.ts)"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">&bull;</span>
              <a
                href={`mailto:${socialLinks.email}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{socialLinks.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Profile Visual Area */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-88 aspect-square group">
              {/* Decorative background border effect */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"
                aria-hidden="true"
              />

              <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl flex flex-col items-center justify-center p-6 text-center">
                {/* Visual Avatar Placeholder Image */}
                <div className="w-full h-full relative flex flex-col items-center justify-center">
                  <img
                    src={withBase('/assets/profile/photo_2026-05-17_15-21-53.jpg')}
                    alt="Sara Mohamed"
                    className="w-full h-full object-cover object-[50%_16%] rounded-2xl"
                    loading="eager"
                  />
                  {/* Floating Tech Badges */}
                  <div className="absolute top-2 right-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                    <Sparkles className="w-3 h-3" />
                    <span>Flutter &bull; Dart</span>
                  </div>

                  <div className="absolute bottom-2 left-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-xs text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <span>Clean Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
