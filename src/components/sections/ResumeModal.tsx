import React from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { Download, GraduationCap, Award, Code, MapPin, Mail } from 'lucide-react';
import { Github } from '../common/Icons';
import { socialLinks } from '../../data/socialLinks';
import { educationData } from '../../data/education';
import { certificatesData } from '../../data/certificates';
import { skillsData } from '../../data/skills';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const primaryEdu = educationData[0];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Curriculum Vitae Preview"
      maxWidth="4xl"
    >
      <div className="space-y-8 p-1 sm:p-2">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Sara Mohamed
            </h3>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Flutter &amp; Web Developer &bull; Computer Science Student
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Minya / Cairo, Egypt</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{socialLinks.email}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5" />
                <span>github.com/sara367139-stack</span>
              </span>
            </div>
          </div>

          <Button
            variant="primary"
            size="sm"
            href={socialLinks.cvPath}
            download="Sara-Mohamed-CV.pdf"
            icon={<Download className="w-4 h-4" />}
          >
            Download PDF
          </Button>
        </div>

        {/* Education Section */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-blue-500" />
            <span>Academic Education</span>
          </h4>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 space-y-1.5">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <strong className="text-slate-900 dark:text-white">
                {primaryEdu.faculty} &bull; {primaryEdu.institution}
              </strong>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">{primaryEdu.years}</span>
            </div>
            <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
              Degree Status: {primaryEdu.degreeStatus}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {primaryEdu.coreFoundations.map((found, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-[11px] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                >
                  {found}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Proficiencies */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <Code className="w-4 h-4 text-emerald-500" />
            <span>Technical Proficiencies</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skillsData.map((cat) => (
              <div
                key={cat.id}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 space-y-1.5"
              >
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {cat.name}
                </div>
                <div className="flex flex-wrap gap-1 text-[11px] text-slate-600 dark:text-slate-400">
                  {cat.skills.map((s, idx) => (
                    <span key={idx} className="bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intensive Certifications */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Certifications &amp; Bootcamps</span>
          </h4>
          <div className="space-y-2">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 flex items-start justify-between gap-4 text-xs"
              >
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {cert.title}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400">
                    {cert.issuer} &bull; {cert.duration}
                  </div>
                </div>
                <span className="text-slate-400 shrink-0 font-medium">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-300 flex items-center justify-between gap-4">
          <span>
            Looking for a customized or tailored CV for your company stack?
          </span>
          <Button
            variant="outline"
            size="sm"
            href={`mailto:${socialLinks.email}?subject=Tailored Resume Request`}
          >
            Request Custom CV
          </Button>
        </div>
      </div>
    </Modal>
  );
};
