import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import type { Project } from '../../types';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { Github } from '../common/Icons';
import { ProjectImage } from '../common/ProjectImage';

interface FeaturedProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  onSelectProject,
}) => {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="featured-projects" className="py-20 lg:py-28 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Engineering"
          title="Featured Projects"
          subtitle="Flagship mobile applications showcasing architectural design, clean state management, and reliable backend connectivity."
        />

        <div className="space-y-16 lg:space-y-24">
          {featured.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Media Column */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    onClick={() => onSelectProject(project)}
                    className="relative aspect-16/10 rounded-2xl overflow-hidden cursor-pointer border border-slate-200/80 dark:border-slate-800 bg-slate-950 shadow-md group/img"
                  >
                    <ProjectImage
                      src={project.heroImage}
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.02]"
                      loading="lazy"
                    />
                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-lg inline-flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Inspect Case Study</span>
                      </span>
                    </div>

                    {/* Category Stamp */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900/80 text-white backdrop-blur-md border border-slate-700">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div
                  className={`lg:col-span-5 space-y-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="blue" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => onSelectProject(project)}
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      View Project
                    </Button>

                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="md"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={<Github className="w-4 h-4" />}
                      >
                        GitHub
                      </Button>
                    )}

                    {project.liveDemoUrl && (
                      <Button
                        variant="ghost"
                        size="md"
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={<ExternalLink className="w-4 h-4" />}
                      >
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
