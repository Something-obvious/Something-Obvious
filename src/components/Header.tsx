import React from 'react';
import { YUJIN_PORTFOLIO } from '../data/portfolioData';
import { Globe, FileText, ArrowUpRight } from 'lucide-react';

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
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2 group whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-tighter">
            YS
          </div>
          <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            {YUJIN_PORTFOLIO.profile.name[lang]}
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#work" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            {lang === 'ko' ? '주요 업무 & 프로젝트' : 'Selected Work'}
          </a>
          <a href="#about" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            {lang === 'ko' ? '소개 & 스토리' : 'About'}
          </a>
          <a href="#experience" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            {lang === 'ko' ? '경력 이력' : 'Experience'}
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            {lang === 'ko' ? '연락처' : 'Contact'}
          </a>
        </nav>

        {/* Zone 3: Language Toggle & Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            title="Toggle Language (KR / EN)"
            aria-label="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span className={lang === 'ko' ? 'font-bold text-slate-900' : 'text-slate-400'}>KR</span>
            <span className="text-slate-400">/</span>
            <span className={lang === 'en' ? 'font-bold text-slate-900' : 'text-slate-400'}>EN</span>
          </button>

          {/* Master Application / Resume Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>{lang === 'ko' ? '입사지원서 원본' : 'Master CV'}</span>
          </button>

          {/* Direct Contact Button */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>Say hi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </header>
  );
};
