import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { projectsData } from './data/projects';
import { certificatesData } from './data/certificates';
import type { Project } from './types';

// Layout Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Section Components
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { ProjectsGallery } from './components/sections/ProjectsGallery';
import { CertificatesSection } from './components/sections/CertificatesSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { EducationSection } from './components/sections/EducationSection';
import { GitHubSection } from './components/sections/GitHubSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { ContactSection } from './components/sections/ContactSection';

// Modals
import { ProjectModal } from './components/sections/ProjectModal';
import { CertificateLightbox } from './components/sections/CertificateLightbox';
import { ResumeModal } from './components/sections/ResumeModal';

export function App() {
  const { theme, toggleTheme } = useTheme();

  const sectionIds = [
    'home',
    'about',
    'projects',
    'certificates',
    'skills',
    'education',
    'resume',
    'contact',
  ];
  const activeSection = useScrollSpy(sectionIds, 120);

  // Modal States
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleScrollToProjects = () => {
    const el = document.getElementById('featured-projects') || document.getElementById('projects');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Sticky Navigation Header */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResumeModal={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <HeroSection onViewWorkClick={handleScrollToProjects} />
        <AboutSection />
        <FeaturedProjects
          projects={projectsData}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
        <ProjectsGallery
          projects={projectsData}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
        <CertificatesSection
          certificates={certificatesData}
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
        />
        <SkillsSection />
        <EducationSection />
        <GitHubSection />
        <ResumeSection onViewResume={() => setIsResumeOpen(true)} />
        <ContactSection />
      </main>

      {/* Production Footer */}
      <Footer />

      {/* Interactive Modals & Lightboxes */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateLightbox
        certificates={certificatesData}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(newIdx) => setLightboxIndex(newIdx)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
