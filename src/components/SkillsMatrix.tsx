import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Layout, ShieldCheck, Cpu } from 'lucide-react';

interface SkillsMatrixProps {
  lang: 'ko' | 'en';
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ lang }) => {
  return (
    <section id="skills" className="py-24 border-b border-white/[0.08] bg-[#0B0D11]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            {lang === 'ko' ? '04. 기술 및 디자인 역량 체계' : '04. Technical & Design Capabilities'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3">
            {lang === 'ko' ? '엔지니어링 & 시스템 디자인 스펙트럼' : 'Core Capabilities & Technical Stack'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {lang === 'ko'
              ? '견고한 타입 안정성과 성능 최적화, 그리고 정교한 비주얼 시스템을 구축하기 위한 핵심 도구와 역량입니다.'
              : 'End-to-end fluency spanning modern frontend infrastructure, design systems, and interaction design.'}
          </p>
        </div>

        {/* 2-Column Split: Engineering vs Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Engineering Column */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141721] border border-white/[0.08] shadow-xl">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/[0.08]">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {lang === 'ko' ? '프론트엔드 엔지니어링' : 'Frontend Engineering'}
                </h3>
                <span className="text-xs font-mono text-slate-400">Architecture, Performance, Frameworks</span>
              </div>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {PORTFOLIO_DATA.skills.engineering.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-mono text-slate-200">{item.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-slate-400">{item.years}</span>
                    <span className="px-2 py-0.5 text-[11px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded">
                      {item.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Architecture Column */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141721] border border-white/[0.08] shadow-xl">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/[0.08]">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Layout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {lang === 'ko' ? '디자인 시스템 & UI/UX' : 'Design Systems & UI/UX'}
                </h3>
                <span className="text-xs font-mono text-slate-400">Tokens, Accessibility, Typography</span>
              </div>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {PORTFOLIO_DATA.skills.design.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-mono text-slate-200">{item.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-slate-400">{item.years}</span>
                    <span className="px-2 py-0.5 text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded">
                      {item.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 3 Core Principles */}
        <div className="pt-10 border-t border-white/[0.08]">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6">
            {lang === 'ko' ? '엔지니어링 & 디자인 철학' : 'Core Design Engineering Principles'}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.skills.principles.map((pr, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <div className="text-xs font-mono text-blue-400 mb-2">
                  0{idx + 1}.
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {pr.title[lang]}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pr.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
