import React from 'react';
import { YUJIN_PORTFOLIO } from '../data/portfolioData';
import { ArrowUp, Terminal, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  lang: 'ko' | 'en';
  onOpenSpecs: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenSpecs, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-white border-t border-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Column 1: Identity & Role */}
        <div className="space-y-2">
          <div className="text-base font-black tracking-tight text-slate-950">
            {YUJIN_PORTFOLIO.profile.name[lang]}
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
            GLOBAL CX & PARTNER TRAINING
          </div>
          <div className="text-xs text-slate-400">
            Medit APAC & HQ CX · Dental Hospital Clinical Experience
          </div>
          <div className="text-xs text-slate-400 pt-2 font-mono">
            © 2026 Yujin Shin. All rights reserved.
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col space-y-2 text-xs font-mono uppercase tracking-wider font-semibold text-slate-600">
          <a href="#work" className="hover:text-slate-950 transition-colors">
            WORK
          </a>
          <a href="#about" className="hover:text-slate-950 transition-colors">
            ABOUT
          </a>
          <a href="#experience" className="hover:text-slate-950 transition-colors">
            EXPERIENCE
          </a>
          <button 
            onClick={onOpenResume} 
            className="text-left hover:text-slate-950 transition-colors"
          >
            MASTER CV
          </button>
          <a href="#contact" className="hover:text-slate-950 transition-colors">
            CONTACT
          </a>
        </div>

        {/* Column 3: Contact & Socials */}
        <div className="flex flex-col items-start md:items-end space-y-3 text-xs font-mono">
          <a 
            href={`mailto:${YUJIN_PORTFOLIO.profile.email}`}
            className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
          >
            {YUJIN_PORTFOLIO.profile.email}
          </a>

          <div className="flex items-center gap-3 text-slate-500">
            <button
              onClick={onOpenSpecs}
              className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors"
              title="Design System Specs"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Specs</span>
            </button>

            <a
              href={`mailto:${YUJIN_PORTFOLIO.profile.email}`}
              className="hover:text-slate-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
