import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, CheckCircle, MapPin } from 'lucide-react';

interface ExperienceTimelineProps {
  lang: 'ko' | 'en';
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-24 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            {lang === 'ko' ? '03. 프로페셔널 커리어 패스' : '03. Career Timeline & Impact'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3">
            {lang === 'ko' ? '경력 및 주요 기여 이력' : 'Professional Experience & Leadership'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {lang === 'ko'
              ? '스타트업부터 엔터프라이즈 환경까지, 제품의 스케일업과 기술적 도약을 이끈 8년간의 실무 여정입니다.'
              : 'Eight years of driving product transformation, frontend architecture, and design team leadership.'}
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-12">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#141721] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                    <span className="text-blue-400 font-semibold">{exp.period}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-300">{exp.company[lang]}</span>
                    <span className="text-slate-600">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {exp.location[lang]}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role[lang]}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 self-start">
                  {exp.techStack.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      <span className="text-slate-300">{tech}</span>
                      {tIdx < exp.techStack.length - 1 && <span className="text-slate-600">/</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {exp.description[lang]}
              </p>

              {/* Quantifiable Achievements */}
              <div className="pt-6 border-t border-white/[0.06] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {lang === 'ko' ? '주요 핵심 성과' : 'Key Milestones & Impact'}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {exp.achievements[lang].map((ach, aIdx) => (
                    <div 
                      key={aIdx} 
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 leading-normal">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
