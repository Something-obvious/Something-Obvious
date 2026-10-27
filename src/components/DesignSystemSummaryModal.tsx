import React, { useEffect } from 'react';
import { X, Layers, Sliders, Type, Palette, Monitor, Zap, CheckCircle2 } from 'lucide-react';

interface DesignSystemSummaryModalProps {
  isOpen: boolean;
  lang: 'ko' | 'en';
  onClose: () => void;
}

export const DesignSystemSummaryModal: React.FC<DesignSystemSummaryModalProps> = ({
  isOpen,
  lang,
  onClose
}) => {
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
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 text-slate-800">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold mb-1">
              <Layers className="w-4 h-4" />
              <span>DESIGN SYSTEM SPECIFICATIONS & AUDIT REPORT</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {lang === 'ko' ? '참고 사이트 분석 및 설계 시스템 요약표' : 'Reference Site Architecture & Delta Report'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1 text-xs sm:text-sm">
          
          {/* Executive One-Line Delta Summary */}
          <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
            <span className="font-mono text-blue-700 font-bold uppercase block mb-1">
              {lang === 'ko' ? '원본 대비 변경점 한 줄 요약' : 'Core Architecture Delta Summary'}
            </span>
            <p className="text-slate-800 leading-relaxed font-medium">
              {lang === 'ko'
                ? '참고 사이트의 시그니처인 상단 회전 텍스트 엠블럼, 5개 풀블리드 컬러풀 케이스스터디 카드, 에디토리얼 원형 프로필 스토리 블록, 대형 워터마크 "Say hi" 버튼 푸터의 설계 패턴을 온전히 추출하고, 내용은 치과임상 및 Medit 글로벌 CX·파트너 교육 전문가 신유진(Yujin Shin)의 국·영문 공통 입사지원서 실무 기록으로 100% 완벽 치환하여 독자 구축했습니다.'
                : 'Preserved the reference site\'s signature kinetic rotating emblem, full-bleed saturated project cards, centered circular portrait story block, and oversized "Say hi" watermark footer, while replacing 100% of the content with Yujin Shin\'s verified clinical and Medit global CX / partner enablement career records.'}
            </p>
          </div>

          {/* 1. Spacing Scale */}
          <div>
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-3">
              <Sliders className="w-4 h-4 text-blue-600" />
              <span>1. 그리드 및 간격 시스템 (Spacing Scale)</span>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                  <tr>
                    <th className="p-3">토큰 (Token)</th>
                    <th className="p-3">크기 (Value)</th>
                    <th className="p-3">적용 영역 (Application)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-blue-600">space-1 (4px)</td>
                    <td className="p-3">0.25rem</td>
                    <td className="p-3">텍스트-아이콘 인라인 미세 간격</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-blue-600">space-2 (8px)</td>
                    <td className="p-3">0.5rem</td>
                    <td className="p-3">언어 토글 및 작은 뱃지 패딩</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-blue-600">space-4 (16px)</td>
                    <td className="p-3">1.0rem</td>
                    <td className="p-3">헤더 요소 간격 및 카드 하단 메타바 여백</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-blue-600">space-8 (32px)</td>
                    <td className="p-3">2.0rem</td>
                    <td className="p-3">풀블리드 케이스스터디 카드 내부 상단 패딩</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-blue-600">space-16 (64px)</td>
                    <td className="p-3">4.0rem</td>
                    <td className="p-3">풀블리드 카드 간 세로 갭 스택 (space-y-16)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-blue-600">space-28 (112px)</td>
                    <td className="p-3">7.0rem</td>
                    <td className="p-3">Say hi 푸터 섹션 수직 높이 여백</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Typography Scale */}
          <div>
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-3">
              <Type className="w-4 h-4 text-blue-600" />
              <span>2. 타이포그래피 스케일 (Typography Hierarchy)</span>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                  <tr>
                    <th className="p-3">레벨</th>
                    <th className="p-3">폰트 패밀리</th>
                    <th className="p-3">크기 / 행간</th>
                    <th className="p-3">굵기 / 특징</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Hero Display</td>
                    <td className="p-3">Plus Jakarta Sans</td>
                    <td className="p-3">clamp(2.5rem, 6vw, 4.5rem) / 1.08</td>
                    <td className="p-3">900 (Black) / -0.04em</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Card Giant Title</td>
                    <td className="p-3">Plus Jakarta Sans</td>
                    <td className="p-3">clamp(2rem, 5vw, 4.5rem) / 1.0</td>
                    <td className="p-3">900 (Black) / -0.03em (High Contrast)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Section Title</td>
                    <td className="p-3">Plus Jakarta Sans</td>
                    <td className="p-3">2.25rem (36px) / 1.2</td>
                    <td className="p-3">800 (ExtraBold) / -0.02em</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Body Text</td>
                    <td className="p-3">Plus Jakarta Sans</td>
                    <td className="p-3">0.9375rem (15px) / 1.6</td>
                    <td className="p-3">400 (Regular) / 가독성 최우선</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Metadata / Tag</td>
                    <td className="p-3">JetBrains Mono</td>
                    <td className="p-3">0.75rem (12px) / 1.4</td>
                    <td className="p-3">500 (Medium) / 대문자 트래킹 +0.1em</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Color Palette */}
          <div>
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-3">
              <Palette className="w-4 h-4 text-blue-600" />
              <span>3. 풀블리드 카드 색상 팔레트 (Reference Palette Mapping)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-mono text-xs text-white">
              <div className="p-4 rounded-xl shadow-md" style={{ backgroundColor: '#0F2E1B' }}>
                <span className="block text-[11px] text-white/70">Card 1: Forest Green</span>
                <span className="font-bold text-sm">#0F2E1B</span>
                <span className="block text-[10px] text-white/60 mt-1">Partner Training</span>
              </div>
              <div className="p-4 rounded-xl shadow-md" style={{ backgroundColor: '#3E1045' }}>
                <span className="block text-[11px] text-white/70">Card 2: Deep Amethyst</span>
                <span className="font-bold text-sm">#3E1045</span>
                <span className="block text-[10px] text-white/60 mt-1">Global CX Support</span>
              </div>
              <div className="p-4 rounded-xl shadow-md" style={{ backgroundColor: '#0B1B36' }}>
                <span className="block text-[11px] text-white/70">Card 3: Deep Navy</span>
                <span className="font-bold text-sm">#0B1B36</span>
                <span className="block text-[10px] text-white/60 mt-1">Help Center Ops</span>
              </div>
              <div className="p-4 rounded-xl shadow-md" style={{ backgroundColor: '#0A2A2E' }}>
                <span className="block text-[11px] text-white/70">Card 4: Deep Teal</span>
                <span className="font-bold text-sm">#0A2A2E</span>
                <span className="block text-[10px] text-white/60 mt-1">Process & Macros</span>
              </div>
              <div className="p-4 rounded-xl shadow-md" style={{ backgroundColor: '#18181B' }}>
                <span className="block text-[11px] text-white/70">Card 5: Obsidian Slate</span>
                <span className="font-bold text-sm">#18181B</span>
                <span className="block text-[10px] text-white/60 mt-1">Product Feedback</span>
              </div>
            </div>
          </div>

          {/* 4. Motion & Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                <Zap className="w-4 h-4 text-blue-600" />
                <span>4. 인터랙션 및 모션 스펙</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                <li>• <strong>Kinetic Rotating Badge</strong>: 24초 주기 linear 무한 회전 SVG textPath</li>
                <li>• <strong>Card Lift on Hover</strong>: translate-y -6px, duration 400ms cubic-bezier</li>
                <li>• <strong>Say hi Pill Button</strong>: scale 1.05 호버 확대 및 그림자 심도 상승</li>
                <li>• <strong>Bilingual Instant Toggle</strong>: 레이턴시 없는 실시간 KR/EN 데이터 스위칭</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                <Monitor className="w-4 h-4 text-blue-600" />
                <span>5. 반응형 브레이크포인트</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                <li>• <strong>Mobile (&lt;640px)</strong>: 단일 컬럼 스택, 엠블럼 192px 축소, 최소 터치 44px</li>
                <li>• <strong>Tablet (640-1024px)</strong>: 카드 내부 이미지 384px 높이, 에디토리얼 수평 정렬</li>
                <li>• <strong>Desktop (≥1024px)</strong>: 1440px 맥시멈 기준, 풀블리드 카드 420px 미디어 프레임</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 flex items-center justify-end bg-slate-50">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-colors"
          >
            {lang === 'ko' ? '명세서 닫기' : 'Close Report'}
          </button>
        </div>

      </div>
    </div>
  );
};
