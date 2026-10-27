import React from 'react';
import { YUJIN_PORTFOLIO } from '../data/portfolioData';
import { Briefcase, CheckCircle2, ShieldCheck, Wrench, Layers } from 'lucide-react';

interface ExperienceSectionProps {
  lang: 'ko' | 'en';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 mb-2">
            {lang === 'ko' ? '검증된 업무 및 경력 기록' : 'Verified Career & Experience'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            {lang === 'ko' ? '임상과 글로벌 테크를 잇는 실무 이력' : 'Professional Journey & Milestones'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {lang === 'ko'
              ? '사용자 및 파트너 관점에서 직접 수행하고 확인한 업무 기록을 투명하게 보존하고 제시합니다.'
              : 'Verifiable actions, partner enablement deliverables, and cross-functional contributions.'}
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8 mb-16">
          {YUJIN_PORTFOLIO.experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold mb-2">
                    <span>{exp.period}</span>
                    <span className="text-slate-300">·</span>
                    <span>{exp.division[lang]}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {exp.role[lang]}
                  </h3>
                  <div className="text-sm font-semibold text-slate-600 mt-1">
                    {exp.company[lang]}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 self-start">
                  {exp.tools.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {exp.description[lang]}
              </p>

              {/* Responsibilities list */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  {lang === 'ko' ? '직접 수행한 핵심 업무' : 'Core Handled Responsibilities'}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.keyResponsibilities[lang].map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Tools & Workflow Environment Grid */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 mb-2">
            <Wrench className="w-4 h-4" />
            <span>{lang === 'ko' ? '활용 도구 및 실무 환경' : 'Tools & Operational Environment'}</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            {lang === 'ko' ? '실제 업무에 활용한 도구와 맥락' : 'Systems, Software & Operating Stack'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {YUJIN_PORTFOLIO.toolsAndSkills.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                <div className="text-xs font-mono text-blue-600 font-bold mb-1">
                  {item.category}
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1">
                  {item.name}
                </div>
                <div className="text-xs text-slate-500 leading-normal">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
