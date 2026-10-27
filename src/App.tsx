/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CaseStudyCards } from './components/CaseStudyCards';
import { EditorialStorySection } from './components/EditorialStorySection';
import { ExperienceSection } from './components/ExperienceSection';
import { SayHiContact } from './components/SayHiContact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { MasterApplicationModal } from './components/MasterApplicationModal';
import { DirectMessageModal } from './components/DirectMessageModal';
import { DesignSystemSummaryModal } from './components/DesignSystemSummaryModal';
import { CaseStudy } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState<boolean>(false);
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white flex flex-col font-sans">
      
      {/* 1. Header Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenSpecs={() => setIsSpecsOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Kinetic Rotating Emblem Hero Section */}
        <Hero
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenSpecs={() => setIsSpecsOpen(true)}
        />

        {/* 3. High-Contrast Full-Bleed Colored Project Cards */}
        <CaseStudyCards
          lang={lang}
          onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
        />

        {/* 4. Editorial Story & Circular Portrait Section */}
        <EditorialStorySection
          lang={lang}
          onOpenStory={() => setIsResumeOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 5. Verified Career & Experience Stack */}
        <ExperienceSection
          lang={lang}
        />

        {/* 6. Iconic "Say hi" Watermark Contact Section */}
        <SayHiContact
          lang={lang}
          onOpenMessageModal={() => setIsMessageOpen(true)}
        />
      </main>

      {/* 7. Minimal 3-Column Footer */}
      <Footer
        lang={lang}
        onOpenSpecs={() => setIsSpecsOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        lang={lang}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Full Master Application (CV) Modal with Print Support */}
      <MasterApplicationModal
        isOpen={isResumeOpen}
        lang={lang}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive Message Modal */}
      <DirectMessageModal
        isOpen={isMessageOpen}
        lang={lang}
        onClose={() => setIsMessageOpen(false)}
      />

      {/* Design System Specifications & Audit Modal */}
      <DesignSystemSummaryModal
        isOpen={isSpecsOpen}
        lang={lang}
        onClose={() => setIsSpecsOpen(false)}
      />

    </div>
  );
}
