import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, Download, Sparkles, Layers, ShieldCheck, Terminal } from 'lucide-react';

interface HeroProps {
  lang: 'ko' | 'en';
  onOpenResume: () => void;
  onOpenSpecs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenResume, onOpenSpecs }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <section className="relative pt-12 pb-20 border-b border-white/[0.08] overflow-hidden">
      {/* Subtle radial ambient glow in background */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-blue-600/[0.07] blur-[140px] rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Editorial Kicker (Quiet unboxed text) */}
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-blue-400 mb-5">
              <span>{lang === 'ko' ? '시니어 디자인 엔지니어' : 'Senior Design Engineer'}</span>
              <span className="text-slate-600" aria-hidden="true">/</span>
              <span>{lang === 'ko' ? 'UI 아키텍처 & 프론트엔드' : 'UI Architecture & Frontend'}</span>
              <span className="text-slate-600" aria-hidden="true">/</span>
              <span>2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12] mb-6 text-balance">
              {lang === 'ko' ? (
                <>
                  디자인의 감성과 엔지니어링의 정밀함이 만나는 접점을 설계합니다.
                </>
              ) : (
                <>
                  Bridging Architectural Design Sensibility with Rigorous Frontend Engineering.
                </>
              )}
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {lang === 'ko' ? (
                <>
                  {PORTFOLIO_DATA.profile.name.ko}는 복잡한 시스템을 직관적인 시각 언어로 구조화하고, 
                  수백만 사용자가 체감하는 60 FPS 무결점 인터랙션과 디자인 시스템을 엔지니어링합니다.
                </>
              ) : (
                <>
                  {PORTFOLIO_DATA.profile.name.en} structures complex systems into intuitive visual languages, 
                  architecting production design systems and silky 60 FPS interfaces for millions of users worldwide.
                </>
              )}
            </p>

            {/* Primary Action Buttons & Status */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/20 transition-all hover:translate-y-[-1px]"
              >
                <span>{lang === 'ko' ? '주요 프로젝트 살펴보기' : 'Explore Selected Works'}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-lg transition-all hover:translate-y-[-1px]"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>{lang === 'ko' ? '경력기술서 보기' : 'View Master Resume'}</span>
              </button>

              <button
                onClick={onOpenSpecs}
                className="flex items-center gap-2 px-4 py-3 text-xs font-mono font-medium text-slate-400 hover:text-slate-200 bg-transparent hover:bg-white/[0.04] rounded-lg transition-colors"
                title="View Design System Architecture Specifications"
              >
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>{lang === 'ko' ? '설계 시스템 분석표' : 'Design System Specs'}</span>
              </button>
            </div>

            {/* Unboxed Metadata Trust Marker (No pills!) */}
            <div className="flex items-center flex-wrap gap-2 text-xs text-slate-400 pt-4 border-t border-white/[0.06]">
              <span className="font-medium text-slate-300">{PORTFOLIO_DATA.profile.location[lang]}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-emerald-400">{PORTFOLIO_DATA.profile.status[lang]}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>{PORTFOLIO_DATA.profile.email}</span>
            </div>

          </div>

          {/* Right Column: Visual Showcase Container */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative group rounded-2xl overflow-hidden border border-white/[0.1] bg-[#141721] h-full min-h-[340px] flex flex-col justify-end shadow-2xl">
              
              {/* Workspace Studio Photography */}
              {imageLoaded && (
                <img
                  src={PORTFOLIO_DATA.profile.heroWorkspaceImage}
                  alt="Design Engineer Studio Workspace"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={() => setImageLoaded(false)}
                />
              )}

              {/* Scrim Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-[#0B0D11]/40 to-transparent" 
                aria-hidden="true" 
              />

              {/* Foreground Showcase Card info */}
              <div className="relative z-10 p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>CRAFT & ARCHITECTURE</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {lang === 'ko' ? '디자인 토큰부터 컴파일러까지' : 'From Design Tokens to Compilers'}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {lang === 'ko' 
                    ? '피그마 컴포넌트 변수를 즉시 가용 가능한 타입스크립트 코드로 전환하는 풀스택 디자인 엔지니어링 워크스페이스.'
                    : 'A unified workflow translating Figma component variables directly into type-safe code primitives.'
                  }
                </p>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-3 border-t border-white/[0.1]">
                  <span>Figma Tokens Studio</span>
                  <span className="text-slate-600">·</span>
                  <span>React 19 & Tailwind</span>
                  <span className="text-slate-600">·</span>
                  <span>100% WCAG AA</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width 4-Column KPI Strip Directly Below Hero Split */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="flex flex-col justify-between p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight mb-1">
                {metric.value}
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-200">
                  {metric.label[lang]}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {metric.sub[lang]}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
