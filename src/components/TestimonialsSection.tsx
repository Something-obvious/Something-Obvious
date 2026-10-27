import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  lang: 'ko' | 'en';
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  return (
    <section className="py-24 border-b border-white/[0.08] bg-[#0E1017]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
            {lang === 'ko' ? '05. 동료 및 리더십 추천' : '05. Peer Endorsements'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3">
            {lang === 'ko' ? '프로덕트 리더들이 전하는 협업 평가' : 'What Product Leaders & Architects Say'}
          </h2>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-[#141721] border border-white/[0.08] flex flex-col justify-between shadow-xl relative"
            >
              <Quote className="w-8 h-8 text-blue-500/20 mb-4" />
              
              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8">
                "{t.quote[lang]}"
              </blockquote>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {t.role[lang]} · {t.company}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
