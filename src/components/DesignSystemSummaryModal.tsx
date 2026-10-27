import React, { useEffect } from 'react';
import { X, Layers, Sliders, Type, Palette, Monitor, Zap } from 'lucide-react';

interface DesignSystemSummaryModalProps {
  isOpen: boolean;
  lang: 'ko' | 'en';
  onClose: () => void;
}

export const DesignSystemSummaryModal: React.FC<DesignSystemSummaryModalProps> = ({ isOpen, lang, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E1017] border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between gap-4 bg-[#141721]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>DESIGN SYSTEM SPECIFICATIONS & AUDIT</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {lang === 'ko' ? '설계 시스템 분석 및 원본 대비 매핑 명세서' : 'Design System Architecture & Delta Report'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white border border-white/[0.1] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-slate-300 text-xs sm:text-sm">
          
          {/* Executive One-Line Delta */}
          <div className="p-4 rounded-xl bg-blue-500/[0.08] border border-blue-500/20">
            <span className="font-mono text-blue-400 font-semibold uppercase block mb-1">
              {lang === 'ko' ? '원본 대비 변경점 한 줄 요약' : 'Core Architecture Delta Summary'}
            </span>
            <p className="text-slate-200 leading-relaxed">
              {lang === 'ko'
                ? '원본의 미니멀 스플릿 구조와 벤토 그리드, 인터랙션 리듬을 온전히 계승하되, 색상은 고대비 다크 흑요석(#0B0D11)과 일렉트릭 코발트(#3B82F6)로 전면 재설계하고 타이포그래피는 Plus Jakarta Sans 및 JetBrains Mono로 치환하여 시니어 디자인 엔지니어의 포트폴리오로 독자 구현했습니다.'
                : 'Preserved the reference site’s split-screen hero structure, Bento grid hierarchy, and fluid interaction cadence, while completely re-architecting the visual design with an obsidian dark theme (#0B0D11), electric cobalt accents (#3B82F6), Plus Jakarta Sans typography, and authentic bilingual engineering case studies.'}
            </p>
          </div>

          {/* 1. Spacing Scale */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold mb-3">
              <Sliders className="w-4 h-4 text-blue-400" />
              <span>1. 그리드 및 간격 시스템 (Spacing Scale)</span>
            </div>
            <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-[#141721] text-slate-400 border-b border-white/[0.08]">
                  <tr>
                    <th className="p-3">토큰 (Token)</th>
                    <th className="p-3">크기 (Value)</th>
                    <th className="p-3">용도 (Application)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] bg-black/20">
                  <tr>
                    <td className="p-3 text-blue-400">space-1 (xs)</td>
                    <td className="p-3">4px (0.25rem)</td>
                    <td className="p-3">아이콘-텍스트 간 미세 정렬 여백</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-blue-400">space-2 (sm)</td>
                    <td className="p-3">8px (0.5rem)</td>
                    <td className="p-3">버튼 수직 패딩, 인라인 태그 간격</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-blue-400">space-4 (md)</td>
                    <td className="p-3">16px (1.0rem)</td>
                    <td className="p-3">버튼 수평 패딩, 카드 내부 자식 요소 간격</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-blue-400">space-6 (lg)</td>
                    <td className="p-3">24px (1.5rem)</td>
                    <td className="p-3">카드 패딩 (Container Outer Padding)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-blue-400">space-8 (xl)</td>
                    <td className="p-3">32px (2.0rem)</td>
                    <td className="p-3">그리드 컬럼 갭 (Grid Gap)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-blue-400">space-24 (section)</td>
                    <td className="p-3">96px (6.0rem)</td>
                    <td className="p-3">메이저 섹션 간 수직 호흡 여백 (py-24)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Typography Scale */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold mb-3">
              <Type className="w-4 h-4 text-blue-400" />
              <span>2. 타이포그래피 위계 (Typography Hierarchy)</span>
            </div>
            <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-[#141721] text-slate-400 border-b border-white/[0.08]">
                  <tr>
                    <th className="p-3">레벨</th>
                    <th className="p-3">폰트 패밀리</th>
                    <th className="p-3">크기 / 행간</th>
                    <th className="p-3">자간 / 굵기</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] bg-black/20">
                  <tr>
                    <td className="p-3 text-white font-semibold">Hero Display</td>
                    <td className="p-3">Plus Jakarta Sans</td>
                    <td className="p-3">clamp(2.5rem, 5vw, 4.25rem) / 1.12</td>
                    <td className="p-3">-0.03em / 800 (ExtraBold)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-semibold">Section Heading</td>
                    <td className="p-3">Plus Jakarta Sans</td>
                    <td className="p-3">clamp(1.75rem, 3vw, 2.5rem) / 1.2</td>
                    <td className="p-3">-0.02em / 700 (Bold)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-semibold">Card Title</td>
                    <td className="p-3">Plus Jakarta Sans</td>
                    <td className="p-3">1.25rem (20px) / 1.3</td>
                    <td className="p-3">-0.01em / 700 (Bold)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-semibold">Body Prose</td>
                    <td className="p-3">Plus Jakarta Sans</td>
                    <td className="p-3">0.9375rem (15px) / 1.6</td>
                    <td className="p-3">normal / 400 (Regular)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-semibold">Metadata / Code</td>
                    <td className="p-3">JetBrains Mono</td>
                    <td className="p-3">0.75rem (12px) / 1.4</td>
                    <td className="p-3">+0.02em / 500 (tabular-nums)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Color Palette */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold mb-3">
              <Palette className="w-4 h-4 text-blue-400" />
              <span>3. 색상 팔레트 및 대비 시스템 (60-30-10 Rule)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#0B0D11] border border-white/10">
                <span className="text-slate-400 block mb-1">60% Dominant Canvas</span>
                <span className="text-white font-bold text-sm block">#0B0D11 / #0E1017</span>
                <span className="text-slate-500 text-[11px] mt-1 block">저반사 다크 옵시디언 캔버스</span>
              </div>
              <div className="p-4 rounded-xl bg-[#141721] border border-white/10">
                <span className="text-slate-400 block mb-1">30% Structural Surfaces</span>
                <span className="text-white font-bold text-sm block">#141721 / rgba(255,255,255,0.08)</span>
                <span className="text-slate-500 text-[11px] mt-1 block">카드 컨테이너 및 헤어라인 테두리</span>
              </div>
              <div className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/30">
                <span className="text-blue-300 block mb-1">10% High-Intent Accent</span>
                <span className="text-blue-400 font-bold text-sm block">#3B82F6 (Cobalt) & #06B6D4</span>
                <span className="text-slate-400 text-[11px] mt-1 block">인터랙션 CTA 및 활성 탭</span>
              </div>
            </div>
          </div>

          {/* 4. Motion & Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 text-white font-bold mb-3">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>4. 인터랙션 및 모션 스펙</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li>• Micro-interaction budget: ≤ 180ms cubic-bezier(0.16, 1, 0.3, 1)</li>
                <li>• Only compositor properties (transform, opacity) animated</li>
                <li>• Card hover: 1.02 scale with 0.15s ease-out border illumination</li>
                <li>• Zero-latency DOM availability: No blocking scroll reveals</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-white font-bold mb-3">
                <Monitor className="w-4 h-4 text-blue-400" />
                <span>5. 반응형 브레이크포인트</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li>• Mobile (&lt;640px): 1-column stack, 44px touch targets</li>
                <li>• Tablet (640px–1024px): 2-column KPI strip, flexible bento grid</li>
                <li>• Desktop (≥1024px): 1440px baseline, 7:5 split-hero layout</li>
                <li>• Sticky cap: Top bar 18 (72px), &lt;10% of mobile viewport</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 border-t border-white/[0.08] flex items-center justify-end bg-[#141721]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            {lang === 'ko' ? '확인 및 닫기' : 'Dismiss'}
          </button>
        </div>

      </div>
    </div>
  );
};
