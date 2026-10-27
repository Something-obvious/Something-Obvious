import React, { useState } from 'react';
import { YUJIN_PORTFOLIO } from '../data/portfolioData';
import { Copy, Check, Mail, ArrowUpRight } from 'lucide-react';

interface SayHiContactProps {
  lang: 'ko' | 'en';
  onOpenMessageModal: () => void;
}

export const SayHiContact: React.FC<SayHiContactProps> = ({ lang, onOpenMessageModal }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(YUJIN_PORTFOLIO.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-white overflow-hidden flex flex-col items-center justify-center">
      
      {/* Giant Background Watermark Typography (Signature element from reference image: "MAX" or "HELLO") */}
      <div 
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center opacity-[0.05] text-[18vw] sm:text-[22vw] font-black tracking-tighter text-slate-900 leading-none"
        aria-hidden="true"
      >
        YUJIN
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Prominent Pill Button: "Say hi" (Exactly as in reference image) */}
        <button
          onClick={onOpenMessageModal}
          className="group relative px-10 sm:px-14 py-4 sm:py-5 rounded-full bg-white hover:bg-slate-900 text-slate-950 hover:text-white border border-slate-200/80 hover:border-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          aria-label="Say hi to Yujin Shin"
        >
          <span className="text-3xl sm:text-5xl font-black tracking-tight font-sans">
            Say hi
          </span>
        </button>

        {/* Subtext and Quick Email Copy */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            {lang === 'ko'
              ? '새로운 프로젝트 협업, 글로벌 CX 포지션, 딜러 트레이닝에 대해 이야기 나눠보세요.'
              : 'Feel free to reach out for global CX opportunities, partner training, or inquiries.'}
          </p>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 hover:text-slate-950 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-bold">{lang === 'ko' ? '이메일 주소 복사 완료!' : 'Copied to clipboard!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>{YUJIN_PORTFOLIO.profile.email}</span>
              </>
            )}
          </button>
        </div>

      </div>

    </section>
  );
};
