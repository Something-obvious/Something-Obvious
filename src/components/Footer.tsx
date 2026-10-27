import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Github, Linkedin, Mail, Terminal, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: 'ko' | 'en';
  onOpenSpecs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenSpecs }) => {
  const [seoulTime, setSeoulTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setSeoulTime(new Intl.DateTimeFormat('en-GB', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#07090C] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Wordmark & Quiet Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-mono">
          <span className="font-bold text-white tracking-tight">
            {PORTFOLIO_DATA.profile.name[lang]}
          </span>
          <span className="hidden sm:inline text-slate-700">·</span>
          <span>© 2026 Alex Dohyun Kim. All rights reserved.</span>
        </div>

        {/* Center: Seoul Local Time */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          <span>Seoul, KR:</span>
          <span className="font-semibold text-slate-200 tabular-nums">
            {seoulTime || '14:00:00'} KST
          </span>
        </div>

        {/* Right: Actions & Socials */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <button
            onClick={onOpenSpecs}
            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '설계 명세표' : 'Design Specs'}</span>
          </button>

          <a 
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a 
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
