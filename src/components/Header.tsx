import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight, Globe, FileText } from 'lucide-react';

interface HeaderProps {
  lang: 'ko' | 'en';
  setLang: (lang: 'ko' | 'en') => void;
  onOpenResume: () => void;
  onOpenSpecs: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  onOpenResume,
  onOpenSpecs
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0B0D11]/85 border-b border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
        >
          {PORTFOLIO_DATA.profile.name[lang]}
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
          <a href="#projects" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            {lang === 'ko' ? '주요 프로젝트' : 'Selected Works'}
          </a>
          <a href="#craft-lab" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            {lang === 'ko' ? '인터랙션 랩' : 'Craft Lab'}
          </a>
          <a href="#experience" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            {lang === 'ko' ? '경력 이력' : 'Experience'}
          </a>
          <a href="#skills" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            {lang === 'ko' ? '역량 매트릭스' : 'Capabilities'}
          </a>
          <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            {lang === 'ko' ? '연락처' : 'Contact'}
          </a>
        </nav>

        {/* Zone 3: 1 primary action area with language toggle & primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-lg transition-all"
            title="Toggle Language (KR / EN)"
            aria-label="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span className={lang === 'ko' ? 'font-bold text-white' : 'text-slate-400'}>KR</span>
            <span className="text-slate-600">/</span>
            <span className={lang === 'en' ? 'font-bold text-white' : 'text-slate-400'}>EN</span>
          </button>

          {/* Quick Resume Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-lg transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>{lang === 'ko' ? '이력서' : 'Resume'}</span>
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <span>{lang === 'ko' ? '협업 제안' : 'Get in Touch'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </header>
  );
};
