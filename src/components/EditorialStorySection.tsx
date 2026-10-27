import React from 'react';
import { YUJIN_PORTFOLIO } from '../data/portfolioData';
import { ArrowUpRight, Award, Stethoscope, Globe, Sparkles } from 'lucide-react';

interface EditorialStorySectionProps {
  lang: 'ko' | 'en';
  onOpenStory: () => void;
  onOpenResume: () => void;
}

export const EditorialStorySection: React.FC<EditorialStorySectionProps> = ({
  lang,
  onOpenStory,
  onOpenResume
}) => {
  return (
    <section id="about" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Editorial 3-Element Cluster (Faithful to Reference Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Highlight Metric Badge Card */}
          <div className="lg:col-span-3 flex flex-col items-center sm:items-start">
            <div 
              onClick={onOpenResume}
              className="group cursor-pointer p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg w-full max-w-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">
                {lang === 'ko' ? '임상에서 글로벌 CX로' : 'Clinical to Global CX'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {lang === 'ko' 
                  ? '치과 진료실 현장의 생생한 언어를 글로벌 기술지원 표준 프로세스로 승화시킵니다.'
                  : 'Bridging front-line clinic terminology directly into standardized global support.'}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                <span>{lang === 'ko' ? '경력 기록 전체보기' : 'Discover more work'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* Middle: Editorial Core Statement */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {lang === 'ko' ? (
                <>
                  치과대학병원 임상 현장에서 글로벌 Medit CX까지,
                  의료 기술과 전 세계 파트너를 <span className="text-blue-600">신뢰와 정밀함</span>으로 연결합니다.
                </>
              ) : (
                <>
                  From clinical dental practice to Medit's global CX operations,
                  connecting medical technology and overseas partners through <span className="text-blue-600">precision and trust</span>.
                </>
              )}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed max-w-xl">
              {YUJIN_PORTFOLIO.profile.summaryParagraph[lang]}
            </p>
          </div>

          {/* Right: Circular Portrait with "Read my story" */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <button
              onClick={onOpenStory}
              className="group flex flex-col items-center focus:outline-none"
              aria-label="Read Yujin Shin's Story"
            >
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-xl border-4 border-white ring-2 ring-slate-200 transition-all duration-300 group-hover:scale-105 group-hover:ring-blue-600">
                <img
                  src={YUJIN_PORTFOLIO.profile.avatarImage}
                  alt={YUJIN_PORTFOLIO.profile.name[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                <span>{lang === 'ko' ? '스토리 읽기' : 'Read my story'}</span>
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
