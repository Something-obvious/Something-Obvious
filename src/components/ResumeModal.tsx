import React, { useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Mail, MapPin, Globe, CheckCircle } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  lang: 'ko' | 'en';
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, lang, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0E1017] border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 text-slate-200">
        
        {/* Header Action Bar */}
        <div className="p-5 border-b border-white/[0.08] flex items-center justify-between gap-4 bg-[#141721]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-blue-400">
              CURRICULUM VITAE / MASTER RESUME
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400 font-mono">
              {lang === 'ko' ? '한국어/영어 통합 경력기술서' : 'Bilingual Master Document'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'ko' ? '인쇄 / PDF 저장' : 'Print / Save PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white border border-white/[0.1] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Printable Paper Body */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-10 flex-1 font-sans print:p-0 print:bg-white print:text-black">
          
          {/* Top Profile Header */}
          <div className="border-b border-white/[0.1] pb-8 print:border-black/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black">
                  {PORTFOLIO_DATA.profile.name[lang]}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-blue-400 print:text-blue-700 mt-1">
                  {PORTFOLIO_DATA.profile.title[lang]}
                </p>
              </div>

              <div className="text-xs font-mono space-y-1 text-slate-400 print:text-black/70">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400 print:text-black" />
                  <span>{PORTFOLIO_DATA.profile.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 print:text-black" />
                  <span>{PORTFOLIO_DATA.profile.location[lang]}</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 print:text-black/80 leading-relaxed max-w-3xl">
              {lang === 'ko'
                ? '8년 경력의 시니어 웹 디자이너이자 프론트엔드 엔지니어로서, UI 디자인 시스템 구축과 대규모 트래픽 환경의 웹 프론트엔드 아키텍처를 전담해 왔습니다. 복잡한 비즈니스 로직을 사용자가 직관적으로 조작할 수 있는 심미적 인터페이스로 풀어내며, 철저한 성능 최적화와 웹 접근성을 기본 원칙으로 실천합니다.'
                : 'With 8 years of hybrid experience spanning senior web design and frontend engineering, I specialize in architecting scalable design systems, silky 60 FPS interfaces, and resilient web applications. Proven track record in mentoring cross-functional squads and reducing feature delivery cycles.'}
            </p>
          </div>

          {/* Core Competencies Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 print:text-blue-700 mb-4">
              {lang === 'ko' ? '핵심 역량 (Core Competencies)' : 'Core Competencies'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] print:border-black/10">
                <span className="font-semibold text-white print:text-black block mb-1">Design Systems</span>
                <span className="text-slate-400 print:text-black/70">W3C Tokens, Multi-Brand, Figma REST API, Storybook</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] print:border-black/10">
                <span className="font-semibold text-white print:text-black block mb-1">Frontend Architecture</span>
                <span className="text-slate-400 print:text-black/70">React 19, TypeScript, Next.js, Micro-Frontends</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] print:border-black/10">
                <span className="font-semibold text-white print:text-black block mb-1">Interaction & Performance</span>
                <span className="text-slate-400 print:text-black/70">WebGL, Canvas 2D, Web Workers, 60 FPS, Core Web Vitals</span>
              </div>
            </div>
          </div>

          {/* Professional Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 print:text-blue-700 mb-6">
              {lang === 'ko' ? '상세 경력 사항 (Professional Experience)' : 'Professional Experience'}
            </h2>
            <div className="space-y-8">
              {PORTFOLIO_DATA.experiences.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-blue-500/30 pl-5 space-y-3 print:border-black/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                        {exp.role[lang]}
                      </h3>
                      <div className="text-xs text-blue-400 print:text-blue-800 font-medium">
                        {exp.company[lang]} · {exp.location[lang]}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 print:text-black/60">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 print:text-black/80 leading-relaxed">
                    {exp.description[lang]}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-300 print:text-black/80">
                    {exp.achievements[lang].map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-blue-400 print:text-black">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] font-mono text-slate-400 print:text-black/60 pt-1">
                    Stack: {exp.techStack.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Awards */}
          <div className="pt-6 border-t border-white/[0.08] print:border-black/20 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 print:text-blue-700 mb-2">
                {lang === 'ko' ? '학력 (Education)' : 'Education'}
              </h2>
              <div className="text-xs space-y-1">
                <div className="font-semibold text-white print:text-black">
                  {lang === 'ko' ? '컴퓨터공학 & 시각디자인 학사' : 'B.S. in Computer Science & Visual Design'}
                </div>
                <div className="text-slate-400 print:text-black/70">
                  {lang === 'ko' ? '2014 — 2018 졸업' : 'Graduated 2018 (Honors)'}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 print:text-blue-700 mb-2">
                {lang === 'ko' ? '수상 및 인증 (Honors & Certifications)' : 'Honors & Certifications'}
              </h2>
              <ul className="text-xs text-slate-300 print:text-black/80 space-y-1">
                <li>• Awwwards Site of the Day (2021)</li>
                <li>• iF Design Award - Digital Interface Winner (2020)</li>
                <li>• IAAP CPACC (Certified Professional in Accessibility Core Competencies)</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
