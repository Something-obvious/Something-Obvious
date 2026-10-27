/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { CraftPlayground } from './components/CraftPlayground';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { DesignSystemSummaryModal } from './components/DesignSystemSummaryModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0B0D11] text-[#F8FAFC] selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      
      {/* 1. Header (3-Zone Top Bar Contract) */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenSpecs={() => setIsSpecsOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section (Split-Screen & 4-Column KPI Strip) */}
        <Hero
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenSpecs={() => setIsSpecsOpen(true)}
        />

        {/* 3. Projects Section (Bento Grid, Deep Dives & Zero-Pill tags) */}
        <ProjectsSection
          lang={lang}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 4. Craft Lab (Interactive Harmonic Spring & Dynamic Token Sandbox) */}
        <CraftPlayground
          lang={lang}
        />

        {/* 5. Career Experience Timeline */}
        <ExperienceTimeline
          lang={lang}
        />

        {/* 6. Capabilities & Skills Matrix */}
        <SkillsMatrix
          lang={lang}
        />

        {/* 7. Peer & Leadership Testimonials */}
        <TestimonialsSection
          lang={lang}
        />

        {/* 8. Contact & Collaboration */}
        <ContactSection
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* 9. Clean Footer */}
      <Footer
        lang={lang}
        onOpenSpecs={() => setIsSpecsOpen(true)}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        lang={lang}
        onClose={() => setIsResumeOpen(false)}
      />

      <DesignSystemSummaryModal
        isOpen={isSpecsOpen}
        lang={lang}
        onClose={() => setIsSpecsOpen(false)}
      />

    </div>
  );
}
