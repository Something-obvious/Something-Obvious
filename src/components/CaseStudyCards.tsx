import React from 'react';
import { YUJIN_PORTFOLIO, CaseStudy } from '../data/portfolioData';
import { ArrowUpRight, ChevronRight, Eye } from 'lucide-react';

interface CaseStudyCardsProps {
  lang: 'ko' | 'en';
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const CaseStudyCards: React.FC<CaseStudyCardsProps> = ({
  lang,
  onSelectCaseStudy
}) => {
  return (
    <section id="work" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {YUJIN_PORTFOLIO.caseStudies.map((study, idx) => (
          <div
            key={study.id}
            onClick={() => onSelectCaseStudy(study)}
            className="group cursor-pointer relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
            style={{ backgroundColor: study.cardColor }}
          >
            
            {/* Top Oversized Title Header */}
            <div className="pt-8 sm:pt-12 px-6 sm:px-12 flex flex-col items-start z-10 relative">
              <div className="text-xs font-mono uppercase tracking-widest text-white/70 mb-2">
                0{idx + 1} · {study.category[lang]}
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
                {study.title}
              </h2>
            </div>

            {/* Centered High-Resolution Photography Frame */}
            <div className="py-8 sm:py-12 px-6 sm:px-16 flex items-center justify-center">
              <div className="relative w-full max-w-4xl h-64 sm:h-96 md:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
                <img
                  src={study.image}
                  alt={study.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Inspection Trigger */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/70 hover:bg-black/90 text-white text-xs font-mono backdrop-blur-md border border-white/20 shadow-lg transition-transform group-hover:scale-105">
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    <span>{lang === 'ko' ? '세부 실무 기록 보기' : 'Explore Case Study'}</span>
                  </div>
                </div>

                {/* Subtitle tag overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs sm:text-sm font-medium">
                  {study.subtitle[lang]}
                </div>
              </div>
            </div>

            {/* Bottom Signature Bar: CASE STUDY | Description (Faithful to reference image) */}
            <div className="px-6 sm:px-12 py-5 sm:py-6 bg-black/30 backdrop-blur-sm border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
              <div className="flex items-center gap-4 text-xs sm:text-sm font-mono tracking-wider">
                <span className="font-extrabold uppercase tracking-widest text-white/90">
                  CASE STUDY
                </span>
                <span className="text-white/40 hidden sm:inline" aria-hidden="true">|</span>
                <span className="text-white/80 font-sans font-normal truncate max-w-xl">
                  {study.oneLineDesc[lang]}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-white/70 group-hover:text-white transition-colors self-end sm:self-auto shrink-0">
                <span>{lang === 'ko' ? '상세 검증 기록' : 'View Verified Details'}</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};
