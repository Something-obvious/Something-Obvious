import React from 'react';
import { YUJIN_PORTFOLIO } from '../data/portfolioData';
import { ArrowDown, FileText, CheckCircle2, Globe2 } from 'lucide-react';

interface HeroProps {
  lang: 'ko' | 'en';
  onOpenResume: () => void;
  onOpenSpecs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenResume, onOpenSpecs }) => {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Kinetic Rotating Circle Emblem (Replicating the reference image's signature hero asset) */}
        <div className="relative mb-8 flex items-center justify-center">
          
          {/* Rotating Text Ring SVG */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 relative animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full text-slate-800">
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                fill="none"
              />
              <text className="text-[10px] font-mono tracking-[0.22em] uppercase fill-slate-900 font-bold">
                <textPath href="#circlePath" startOffset="0%">
                  YUJIN SHIN · GLOBAL CX · MEDIT HQ & APAC · ENABLEMENT ·
                </textPath>
              </text>
            </svg>
          </div>

          {/* Center White Disc with Shadow & Monogram */}
          <div className="absolute inset-0 m-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-xl border border-slate-100 flex flex-col items-center justify-center">
            <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tighter">
              YS
            </div>
            <div className="text-[9px] font-mono font-semibold text-blue-600 uppercase tracking-widest mt-0.5">
              MEDIT
            </div>
          </div>

        </div>

        {/* Oversized Bold Headline (Reference style: "Aim high. Build tough. Win fast.") */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-950 leading-[1.08] mb-6 max-w-4xl text-balance">
          {lang === 'ko' ? (
            <>
              Aim high.<br />
              <span className="text-slate-900">Enable global.</span><br />
              <span className="text-blue-600">Bridge tech.</span>
            </>
          ) : (
            <>
              Aim high.<br />
              <span className="text-slate-900">Enable global.</span><br />
              <span className="text-blue-600">Bridge tech.</span>
            </>
          )}
        </h1>

        {/* Lead Statement */}
        <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8 text-balance">
          {YUJIN_PORTFOLIO.profile.heroStatement[lang]}
        </p>

        {/* Unboxed Metadata Trust Line (Zero-Pill discipline) */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-500 mb-10 pb-6 border-b border-slate-100 max-w-xl">
          <span className="text-slate-800 font-medium">{lang === 'ko' ? '치과대학병원 임상 경력' : 'Clinical Dental Background'}</span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="text-slate-800 font-medium">Medit APAC & HQ CX</span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="text-blue-600 font-medium">{lang === 'ko' ? '해외 파트너 교육 & 영어 진행' : 'Partner Enablement & English Fluency'}</span>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full shadow-md shadow-slate-900/10 transition-all hover:scale-105 active:scale-95"
          >
            <span>{lang === 'ko' ? '주요 케이스 스터디 보기' : 'Explore Case Studies'}</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full transition-all hover:scale-105 active:scale-95"
          >
            <FileText className="w-4 h-4 text-slate-500" />
            <span>{lang === 'ko' ? '입사지원서 원본 열람' : 'View Master Application'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
