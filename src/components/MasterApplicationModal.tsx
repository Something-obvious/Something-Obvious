import React, { useState, useEffect } from 'react';
import { YUJIN_PORTFOLIO } from '../data/portfolioData';
import { X, Printer, FileText, CheckCircle2, ShieldAlert, Award, Globe } from 'lucide-react';

interface MasterApplicationModalProps {
  isOpen: boolean;
  lang: 'ko' | 'en';
  onClose: () => void;
}

export const MasterApplicationModal: React.FC<MasterApplicationModalProps> = ({
  isOpen,
  lang,
  onClose
}) => {
  const [tab, setTab] = useState<'kr' | 'en' | 'principles'>('kr');

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 mb-1">
              <FileText className="w-3.5 h-3.5" />
              <span>공통 입사지원서 원본 마스터 문서</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              신유진 · Yujin Shin
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>인쇄 / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-slate-100/60 border-b border-slate-200 text-xs font-mono">
          <button
            onClick={() => setTab('kr')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              tab === 'kr' ? 'bg-white font-bold text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            한국어 원본 (Master KR)
          </button>
          <button
            onClick={() => setTab('en')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              tab === 'en' ? 'bg-white font-bold text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            English Wording (Master EN)
          </button>
          <button
            onClick={() => setTab('principles')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              tab === 'principles' ? 'bg-white font-bold text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            원기록 검증 원칙 & 표현 점검
          </button>
        </div>

        {/* Body Content */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-10 flex-1 text-slate-800 text-sm leading-relaxed">
          
          {tab === 'kr' && (
            <div className="space-y-8">
              {/* Basic Info */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-3 font-mono">1. 기본 정보</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block">이름</span>
                    <span className="font-bold text-slate-900">신유진 (Yujin Shin)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">연락처 이메일</span>
                    <span className="font-bold text-slate-900">dnjf127@gmail.com</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">전문 분야</span>
                    <span className="font-bold text-slate-900">글로벌 CX 및 파트너 교육</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">경력 요약</span>
                    <span className="font-bold text-slate-900">치과병원 임상 + Medit CX</span>
                  </div>
                </div>
              </div>

              {/* Career Overview */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-4 font-mono pb-2 border-b border-slate-200">
                  2. 경력 개요
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="font-bold text-slate-900 text-sm">Medit (메디트)</div>
                    <div className="text-xs text-blue-600 font-mono mt-0.5">APAC CX 및 HQ CX 기술지원</div>
                    <p className="text-xs text-slate-600 mt-2">
                      주요 대상: 해외 파트너·딜러와 최종 사용자.<br />
                      업무 범위: 글로벌 고객 지원, 파트너 교육, 교육자료 작성, 고객 안내 문서 검토, 업무 매크로 제작, 제품 피드백, 해외 직원 교육 및 회의 운영.<br />
                      영어 활용: 이메일, 원격 지원, 화상회의, 파트너 교육, 해외 CX 회의.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="font-bold text-slate-900 text-sm">치과대학병원</div>
                    <div className="text-xs text-blue-600 font-mono mt-0.5">치과위생사 (Dental Hygienist)</div>
                    <p className="text-xs text-slate-600 mt-2">
                      치과대학병원 임상 현장 근무 경험을 바탕으로 덴탈 의료 현장의 프로토콜과 치과의사·위생사·치과기공사의 워크플로우를 깊이 있게 체득.
                    </p>
                  </div>
                </div>
              </div>

              {/* 12 Detailed Tasks */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-4 font-mono pb-2 border-b border-slate-200">
                  3. 경력기술서 — Medit 담당업무 12개 항목
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">3-1. 글로벌 고객·파트너 지원</div>
                    <p className="text-slate-600">Zendesk 기반 장비/소프트웨어 문의 대응, 시차 조율 원격 지원(TeamViewer), 로그/영상 검토.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">3-2. 파트너 교육과 자료 작성</div>
                    <p className="text-slate-600">외부 파트너 기술지원 교육 일정 조율, 교육 자료 직접 제작, 해외 파트너 대상 영어 교육/발표 진행.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">3-3. 교육 평가 설문</div>
                    <p className="text-slate-600">Google Forms 기반 설문 작성 및 배포(유용성, 업무 적용도, 문제 대응 준비도 항목 구성).</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">3-4. Help Center 및 기술문서 검토</div>
                    <p className="text-slate-600">이해하기 어려운 안내 내용 검토, 설명 순서/구조/사진 첨부 개선 제안, 피드백 제공.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">3-5. 매크로·템플릿과 안내 절차 개선</div>
                    <p className="text-slate-600">반복 안내 매크로 제작, Live Chat 무응답/종료 영문 매크로화, CI/NCI 템플릿 분리, 다운로드 방식 변경 요청.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">3-6. 제품·정책 정보 취합과 문서화</div>
                    <p className="text-slate-600">신제품/정책 변경 정보 수집, 유관부서 미팅 참여, 법인 공통 안내 활용을 위한 SOP 및 Confluence 정리.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">3-7. 출시 전 제품 사용과 개선 요청</div>
                    <p className="text-slate-600">신제품 사전 사용 및 개선점 확인, Jira 또는 이메일을 통해 관련 부서에 구체적 개선 요청 전달.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">3-8. 해외 신규 직원 온보딩</div>
                    <p className="text-slate-600">해외 신규 직원 대상 영어 교육 진행, 버디 역할을 통한 업무 질문 대응 및 주간 미팅 진행.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">3-9. 해외 CX 회의 & APAC 후속 관리</div>
                    <p className="text-slate-600">주간 영어 회의 리딩, HQ 회의 정리 전달, 지역별 질문 관리, APAC CX 액션 아이템 후속 확인 체계 운영.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">3-10. RMA 및 수리·교체 고객 안내</div>
                    <p className="text-slate-600">RMA 사례 관리, 수리/교체/반품 절차 안내, 관련 부서 및 딜러와 진행 필요사항 조율.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">3-11. 전시회·딜러 행사 지원</div>
                    <p className="text-slate-600">2026년 3월 호주 ADX 전시 지원 및 딜러 교육, 2026년 5월 SDIEX 부스 제품 데모 지원.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">3-12. 기타 운영 경험</div>
                    <p className="text-slate-600">Live Chat 운영 절차 개선, Facebook 월별 업무, 해외 직원 채팅/전화 지원, 중국 법인 운영·관리 경험.</p>
                  </div>
                </div>
              </div>

              {/* Reusable Intro Paragraphs */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-4 font-mono pb-2 border-b border-slate-200">
                  4. 자기소개서 기초 문단 (5대 핵심 영역)
                </h3>
                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-blue-600 block mb-1">4-1. 경력 소개</span>
                    치과대학병원에서 치과위생사로 근무한 뒤 Medit에서 글로벌 고객 지원과 파트너 교육을 담당하고 있습니다. 해외 고객과 파트너의 제품 사용 문의에 대응하고 교육 내용을 구성해 자료를 만들고 영어로 교육을 진행해 왔습니다. 이와 함께 고객 안내용 매크로를 제작하고 Help Center의 설명과 구성에 대한 개선을 요청했습니다. 제품을 사용하며 발견한 개선점은 Jira와 이메일을 통해 관련 부서에 전달하고 있습니다.
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-blue-600 block mb-1">4-2. 고객 안내와 업무 절차 개선</span>
                    고객 지원 업무를 하면서 반복적으로 사용하는 안내를 매크로로 만들었습니다. Live Chat의 무응답·종료 상황과 다른 언어로 접수된 문의에 사용할 영어 안내 문구를 정리했습니다. 고객이 Google 계정 없이 안내 파일을 다운로드할 수 있도록 변경을 요청하기도 했습니다. Help Center에서는 누락되거나 이해하기 어려운 내용을 확인하고 설명의 순서, 사진과 레이아웃에 대한 수정을 요청한 뒤 진행 상황을 확인했습니다.
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-blue-600 block mb-1">4-3. 파트너 교육 경험</span>
                    파트너 교육에서는 일정 조율과 교육 내용 구성, 자료 제작과 진행을 담당했습니다. 온라인과 오프라인에서 제품 및 기술지원 내용을 교육했고 해외 파트너를 대상으로 영어 교육도 진행했습니다. 교육의 유용성과 업무 적용 가능성, 추가로 필요한 교육을 확인하기 위해 Google Forms 설문을 작성해 배포했습니다.
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 'en' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
                <span className="font-bold text-slate-900 block mb-1">English Application Wording</span>
                Verified English master record for global job applications and international distributors.
              </div>

              <div className="space-y-4 text-xs leading-relaxed">
                <div className="p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Career Overview</h4>
                  <p className="text-slate-700">
                    "I worked as a dental hygienist at a university dental hospital before joining Medit. My experience includes global customer support, partner training, training materials, customer guidance, response macros, product feedback and support for overseas CX staff."
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Partner Training & Enablement</h4>
                  <p className="text-slate-700">
                    "My partner training work has included scheduling, content planning, material preparation and delivery. I have delivered online and in-person product and technical support training, including sessions in English for overseas partners. To gather feedback on the usefulness of the training, its application at work and additional training needs, I created and distributed Google Forms surveys."
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Working with Overseas Staff</h4>
                  <p className="text-slate-700">
                    "I delivered training in English to new overseas staff and supported them as a buddy. I answered work-related questions, checked progress and set up a chat-based check-in process for working hours. In weekly overseas CX meetings, I shared information from HQ meetings and covered regional priorities and questions. I prepared meeting notes and points requiring attention and followed up on outstanding items in later meetings."
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Product Feedback</h4>
                  <p className="text-slate-700">
                    "I have used products before release and provided feedback. I also identify areas for improvement while using existing products and submit requests through Jira and email. My direct contribution is the information I identify and communicate. Implementation and release decisions belong to the relevant teams."
                  </p>
                </div>
              </div>
            </div>
          )}

          {tab === 'principles' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                <div className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>검증된 사실과 확정 행동 표현 (Verifiable Actions)</span>
                </div>
                <ul className="space-y-1 text-emerald-950 mt-2 list-disc pl-4">
                  <li>작성했다 / 제작했다: 본인이 직접 만든 교육자료와 응대 매크로</li>
                  <li>검토했다 / 요청했다 / 후속 확인했다: Help Center 설명 보완 및 첨부파일 다운로드 방식 변경</li>
                  <li>진행했다 / 준비했다 / 정리했다: 파트너 영어 교육, 주간 미팅 및 회의록</li>
                  <li>사용해 보고 전달했다: 출시 전 제품 사전 테스트 및 Jira 개선 피드백</li>
                  <li>구성하고 배포했다: Google Forms 파트너 교육 평가 설문</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs">
                <div className="font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  <span>단정하지 않고 분리 보존한 계획 및 제안 기록 (Plans Kept Separate)</span>
                </div>
                <p className="text-amber-950 leading-relaxed mt-2">
                  모듈형 교육 운영 제안(기본/국가별/업데이트), 교육 후속 관리 주기(1주/2주/1개월/3개월 논의), 업무량 평가 기준 개선 논의 등은 '실제 조직 도입 완료'로 과장하지 않고, '당시 준비하거나 제안한 상태'로 엄격히 분리 보존했습니다.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 flex items-center justify-between bg-slate-50">
          <span className="text-xs font-mono text-slate-500">
            신유진 마스터 입사지원서 v2026.10
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-colors"
          >
            닫기 (Close)
          </button>
        </div>

      </div>
    </div>
  );
};
