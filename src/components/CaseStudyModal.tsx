import React, { useEffect } from 'react';
import { CaseStudy } from '../data/portfolioData';
import { X, CheckCircle, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  lang: 'ko' | 'en';
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, lang, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Color Banner */}
        <div 
          className="p-6 sm:p-8 text-white flex items-center justify-between"
          style={{ backgroundColor: study.cardColor }}
        >
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/70 mb-1">
              CASE STUDY · {study.category[lang]}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              {study.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1 text-slate-800">
          
          {/* Subtitle & Image */}
          <div>
            <p className="text-base sm:text-lg font-semibold text-slate-900 mb-6 leading-relaxed">
              {study.subtitle[lang]}
            </p>

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-64 sm:h-80 bg-slate-900 relative">
              <img
                src={study.image}
                alt={study.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-mono">
                {study.oneLineDesc[lang]}
              </div>
            </div>
          </div>

          {/* Context & Background */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-600 mb-2 font-bold">
              {lang === 'ko' ? '업무 배경 및 목표' : 'Context & Background'}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {study.context[lang]}
            </p>
          </div>

          {/* Direct Actions Taken */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-600 mb-3 font-bold">
              {lang === 'ko' ? '직접 수행한 핵심 행동 및 역할' : 'Direct Actions & Execution'}
            </h3>
            <div className="space-y-2.5">
              {study.actions[lang].map((action, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 leading-relaxed">{action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Results */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-700 mb-3 font-bold">
              {lang === 'ko' ? '확인된 업무 결과 및 기여' : 'Confirmed Results & Impact'}
            </h3>
            <div className="space-y-2.5">
              {study.verifiedResults[lang].map((res, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fact-Check Integrity Note */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-slate-900 mb-0.5">
                {lang === 'ko' ? '기록 신뢰성 검증 원칙' : 'Fact-Check Verification Standard'}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {study.note[lang]}
              </p>
            </div>
          </div>

          {/* Tools Badge Strip */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600">
            <span className="font-bold text-slate-800">Stack:</span>
            {study.tools.map((t, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 font-medium">
                {t}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-100 flex items-center justify-end bg-slate-50">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-colors"
          >
            {lang === 'ko' ? '닫기' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
