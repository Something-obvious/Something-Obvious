import React, { useEffect, useState } from 'react';
import { Project } from '../data/portfolioData';
import { X, CheckCircle, Code2, ArrowUpRight, Cpu, Layers, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  lang: 'ko' | 'en';
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, lang, onClose }) => {
  const [activeTab, setActiveTab] = useState<'case-study' | 'tokens' | 'architecture'>('case-study');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0F1219] border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between gap-4 bg-[#141721]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
              <span className="text-blue-400 font-medium">{project.categoryLabel[lang]}</span>
              <span className="text-slate-600">·</span>
              <span>{project.period}</span>
              <span className="text-slate-600">·</span>
              <span>{project.role[lang]}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title[lang]}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white border border-white/[0.1] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation inside modal */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-[#0B0D11] border-b border-white/[0.08] text-xs font-medium">
          <button
            onClick={() => setActiveTab('case-study')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'case-study'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            {lang === 'ko' ? '심층 케이스 스터디' : 'Deep-Dive Case Study'}
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'architecture'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            {lang === 'ko' ? '아키텍처 스펙' : 'Architecture Specs'}
          </button>
          <button
            onClick={() => setActiveTab('tokens')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'tokens'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            {lang === 'ko' ? '토큰 & 코드 샘플' : 'Tokens & Code Preview'}
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Media Banner */}
          <div className="rounded-xl overflow-hidden border border-white/[0.08] h-64 sm:h-80 bg-black relative">
            <img
              src={project.image}
              alt={project.title[lang]}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs font-mono">
              <span className="text-white font-medium">{project.subtitle[lang]}</span>
              <span className="text-emerald-400 font-semibold">{project.highlightMetric[lang]}</span>
            </div>
          </div>

          {activeTab === 'case-study' && (
            <div className="space-y-8">
              {/* Overview */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
                  {lang === 'ko' ? '프로젝트 개요' : 'Executive Overview'}
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.overview[lang]}
                </p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-2">
                    {lang === 'ko' ? '문제 정의 (Challenge)' : 'Challenge & Friction'}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.problem[lang]}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                    {lang === 'ko' ? '해결 방안 (Engineering Solution)' : 'Engineered Solution'}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.solution[lang]}
                  </p>
                </div>
              </div>

              {/* Quantifiable Impact */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
                  {lang === 'ko' ? '정량적 비즈니스 및 엔지니어링 성과' : 'Quantified Business & Technical Impact'}
                </h4>
                <div className="space-y-2.5">
                  {project.impact[lang].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-emerald-500/[0.05] border border-emerald-500/20">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
                  {lang === 'ko' ? '핵심 아키텍처 원칙' : 'Core Architecture Principles'}
                </h4>
                <div className="space-y-3">
                  {project.architectureDetails[lang].map((detail, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                      <Cpu className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Stack Breakdown */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
                  {lang === 'ko' ? '기술 스택 생태계' : 'Technology Stack Breakdown'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tokens' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">tokens.config.ts (Generated Output)</span>
                <span className="text-xs font-mono text-emerald-400">Type-checked & Validated</span>
              </div>
              <pre className="p-4 rounded-xl bg-black/70 border border-white/[0.1] text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
{`// Auto-generated from Figma Tokens Studio via GitHub Action runner
export const designTokens = {
  typography: {
    fontDisplay: "Plus Jakarta Sans, sans-serif",
    fontCode: "JetBrains Mono, monospace",
    scale: {
      hero: "clamp(2.5rem, 5vw, 4.25rem)",
      h1: "2.5rem",
      h2: "2.0rem",
      body: "1.0rem",
      caption: "0.75rem"
    }
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    section: "96px"
  },
  surfaces: {
    canvas: "#0B0D11",
    card: "#141721",
    elevated: "#1B202D",
    hairline: "rgba(255, 255, 255, 0.08)"
  },
  motion: {
    springFast: { stiffness: 400, damping: 28 },
    springSmooth: { stiffness: 220, damping: 24 }
  }
} as const;`}
              </pre>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/[0.08] flex items-center justify-between bg-[#141721]">
          <div className="text-xs text-slate-400 font-mono">
            {lang === 'ko' ? '상세 포트폴리오 파일 및 소스코드는 제안 시 추가 제공' : 'Full source code & design files available on request'}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            {lang === 'ko' ? '닫기' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
