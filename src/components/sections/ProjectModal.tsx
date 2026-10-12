import React from 'react';
import type { Project } from '../../types';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import {
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Layers,
  Video,
  Info,
} from 'lucide-react';
import { Github } from '../common/Icons';
import { ProjectImage } from '../common/ProjectImage';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      maxWidth="4xl"
    >
      <div className="space-y-8">
        {/* Hero Screenshot */}
        <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-md">
          <ProjectImage
            src={project.heroImage}
            alt={`${project.title} Full Preview`}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-md border border-slate-700">
              {project.category} &bull; {project.subtitle}
            </span>
          </div>
        </div>

        {/* Editable Placeholder Callout if marked */}
        {caseStudy.isPlaceholderData && (
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs text-blue-800 dark:text-blue-300">
            <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold">Developer Notice:</strong> Project case study fields marked with <span className="font-mono bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">[Editable]</span> can be updated directly in <span className="font-mono">src/data/projects.ts</span> as you refine production details.
            </div>
          </div>
        )}

        {/* Action Links Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="blue" size="sm">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Github className="w-4 h-4" />}
              >
                GitHub Repo
              </Button>
            )}

            {project.liveDemoUrl ? (
              <Button
                variant="primary"
                size="sm"
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Live Application
              </Button>
            ) : (
              <span className="text-xs text-slate-400 italic">
                (Live demo link can be added in projects.ts)
              </span>
            )}
          </div>
        </div>

        {/* Overview & Role */}
        {(caseStudy.overview || caseStudy.myRole) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-500" />
              <span>Project Overview</span>
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {caseStudy.myRole && (
          <div className="space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              My Role &amp; Contribution
            </h4>
            <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
              {caseStudy.myRole}
            </p>
          </div>
          )}
        </div>
        )}

        {/* Problem & Solution Grid */}
        {caseStudy.problem && caseStudy.solution && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>The Problem</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Solution</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>
        )}

        {/* Key Features List */}
        {caseStudy.keyFeatures.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Key Application Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {caseStudy.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Architecture Highlights */}
        {caseStudy.architectureHighlights && (
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Architecture &amp; Design Decisions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {caseStudy.architectureHighlights.map((arch, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">&bull;</span>
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Screenshots Gallery */}
        {caseStudy.screenshots && caseStudy.screenshots.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Application UI Showcase
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudy.screenshots.map((screen, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 group"
                >
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={screen.url}
                      alt={screen.caption}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2.5 bg-white dark:bg-slate-900 text-[11px] font-medium text-slate-600 dark:text-slate-400 truncate">
                    {screen.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Demo Placeholder */}
        <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-slate-400" />
            <span>Walkthrough Video Demo</span>
          </div>
          <span className="italic">
            {project.videoDemoUrl
              ? project.videoDemoUrl
              : '[Optional] Add YouTube/Loom URL in projects.ts'}
          </span>
        </div>

        {/* Challenges, Learnings & Future Roadmap */}
        {(caseStudy.challenges.length > 0 ||
          caseStudy.whatILearned.length > 0 ||
          caseStudy.futureImprovements.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          {/* Challenges */}
          <div className="space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
              <span>Engineering Challenges</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              {caseStudy.challenges.map((c, i) => (
                <li key={i}>&bull; {c}</li>
              ))}
            </ul>
          </div>

          {/* What I Learned */}
          <div className="space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-blue-500" />
              <span>Key Learnings</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              {caseStudy.whatILearned.map((l, i) => (
                <li key={i}>&bull; {l}</li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div className="space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-500" />
              <span>Future Roadmap</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              {caseStudy.futureImprovements.map((f, i) => (
                <li key={i}>&bull; {f}</li>
              ))}
            </ul>
          </div>
        </div>
        )}
      </div>
    </Modal>
  );
};
