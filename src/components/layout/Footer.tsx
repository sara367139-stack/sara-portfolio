import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import { socialLinks } from '../../data/socialLinks';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-mono text-lg font-bold text-slate-900 dark:text-white">
              <span className="text-blue-600 dark:text-blue-400">&lt;</span>
              <span>Sara Mohamed</span>
              <span className="text-blue-600 dark:text-blue-400">/&gt;</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Flutter &amp; Web Developer building modern, resilient cross-platform mobile and web applications with clean architecture and seamless backend integration.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile (Update in socialLinks.ts)"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                aria-label={`Email ${socialLinks.name}`}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#certificates" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                >
                  {socialLinks.email}
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  github.com/sara367139-stack
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.currentPortfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  sara-portfolio (Legacy Hub)
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-block text-xs text-slate-500 dark:text-slate-500">
                  Location: Minya / Cairo, Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>&copy; 2026 Sara Mohamed. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built with React, TypeScript &amp; Tailwind</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors inline-flex items-center gap-1"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
