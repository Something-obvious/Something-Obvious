export interface CaseStudy {
  id: string;
  title: string;
  category: {
    ko: string;
    en: string;
  };
  subtitle: {
    ko: string;
    en: string;
  };
  cardColor: string;
  image: string;
  oneLineDesc: {
    ko: string;
    en: string;
  };
  tools: string[];
  context: {
    ko: string;
    en: string;
  };
  actions: {
    ko: string[];
    en: string[];
  };
  verifiedResults: {
    ko: string[];
    en: string[];
  };
  note: {
    ko: string;
    en: string;
  };
}

export interface ExperienceItem {
  period: string;
  company: {
    ko: string;
    en: string;
  };
  role: {
    ko: string;
    en: string;
  };
  division: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  keyResponsibilities: {
    ko: string[];
    en: string[];
  };
  tools: string[];
}

export const YUJIN_PORTFOLIO = {
  profile: {
    name: {
      ko: "신유진",
      en: "Yujin Shin"
    },
    title: {
      ko: "글로벌 고객 지원 & 파트너 교육 전문가 (APAC CX & HQ CX)",
      en: "Global Customer Support & Partner Enablement Specialist"
    },
    heroStatement: {
      ko: "치과 임상 현장에서 글로벌 Medit CX까지, 의료 기술과 전 세계 파트너를 신뢰와 정밀함으로 연결합니다.",
      en: "From clinical dental practice to Medit's global CX operations, bridging medical technology and overseas partners through precision and continuous enablement."
    },
    summaryParagraph: {
      ko: "치과대학병원에서 치과위생사로 근무한 뒤 Medit에서 글로벌 고객 지원과 파트너 교육을 담당하고 있습니다. 해외 고객과 파트너의 제품 사용 문의에 대응하고, 교육 내용을 구성해 자료를 만들고 영어로 교육을 진행해 왔습니다. 고객 안내용 매크로 제작과 Help Center 설명·구성 개선을 요청했으며, 출시 전 제품 피드백을 개발팀에 전달하고 있습니다.",
      en: "After working as a dental hygienist at a university dental hospital, I joined Medit to lead global customer support and partner technical enablement. I handle overseas hardware and software inquiries, design training materials, deliver sessions in English, build response macros, and communicate verified user feedback to development teams."
    },
    email: "dnjf127@gmail.com",
    avatarImage: "/src/assets/images/yujin_profile_avatar_1793102306950.jpg",
    status: {
      ko: "글로벌 CX 및 프로덕트 오퍼레이션 포지션 탐색 중",
      en: "Open to Global CX & Product Enablement Roles"
    }
  },

  caseStudies: [
    {
      id: "partner-enablement",
      title: "Partner Training",
      category: {
        ko: "파트너 교육 & 트레이닝",
        en: "Partner Enablement"
      },
      subtitle: {
        ko: "해외 딜러 및 파트너사 대상 Medit 하드웨어·소프트웨어 기술지원 교육 기획 및 진행",
        en: "Technical Enablement & Troubleshooting Training for Overseas Partners & Dealers"
      },
      cardColor: "#0F2E1B", // Deep Emerald
      image: "/src/assets/images/global_partner_training_1793102306709.jpg",
      oneLineDesc: {
        ko: "글로벌 파트너 대상 제품 연결 및 문제 해결 영어 교육 진행과 실무 교육자료 제작",
        en: "Delivered English product & troubleshooting training for overseas partners and created custom enablement materials"
      },
      tools: ["Medit Link", "Windows/macOS", "Google Forms", "English Presentation"],
      context: {
        ko: "해외 파트너 및 딜러가 Medit 구강 스캐너와 소프트웨어의 연결 및 기술적 문제 대응 절차를 온전히 이해하고 1차 대응할 수 있도록 지원하는 업무입니다.",
        en: "Equipping overseas partners and dealers to independently understand device connectivity, software workflows, and primary troubleshooting procedures."
      },
      actions: {
        ko: [
          "파트너 교육 일정 조율 및 교육 내용 구성, 실무 교육자료 직접 제작·수정",
          "해외 파트너 대상 온라인 및 오프라인 영어 교육 및 시연 진행",
          "Windows/macOS 장비 연결 확인 순서(i700 Wireless 허브·페어링, i900 Mobility 라우터·Wi-Fi 연결 등) 대본 및 안내 문구 준비",
          "Google Forms를 활용한 파트너 교육 평가 설문(유용성, 업무 적용도, 문제 대응 준비도) 구성 및 배포",
          "2026년 3월 호주 ADX 전시 지원 및 현지 딜러 방문 교육 수행"
        ],
        en: [
          "Coordinated training schedules, planned curriculum, and produced comprehensive training decks",
          "Delivered interactive technical presentations and hands-on demonstrations in English",
          "Prepared detailed scripts for Windows/macOS connectivity (i700 Wireless pairing, i900 Mobility Wi-Fi setup)",
          "Developed and distributed evaluation surveys using Google Forms to assess training utility and readiness",
          "Supported ADX Australia in March 2026 with exhibition demo and on-site dealer training visits"
        ]
      },
      verifiedResults: {
        ko: [
          "직접 제작한 Training 자료를 바탕으로 해외 파트너 대상 반복 교육 안정적 수행",
          "교육 직후 평가 설문 배포 및 교육 후속 점검 절차 구체화",
          "복잡한 OS별 연결 설정 가이드를 파트너가 따라가기 쉬운 스크립트로 체계화"
        ],
        en: [
          "Established structured English training sessions using self-authored enablement materials",
          "Distributed post-training surveys and formalized follow-up check methodologies",
          "Synthesized complex OS-specific connectivity steps into step-by-step actionable scripts"
        ]
      },
      note: {
        ko: "과장 배제: 실제 교육 횟수나 미검증된 만족도 수치를 조작하지 않고, 직접 준비하고 수행한 교육 행동과 자료를 중심으로 서술했습니다.",
        en: "Fact-checked: Reflects actual delivery and curriculum preparation without exaggerated numerical claims."
      }
    },
    {
      id: "global-cx-support",
      title: "Global CX Support",
      category: {
        ko: "글로벌 기술지원",
        en: "Technical Support"
      },
      subtitle: {
        ko: "Zendesk & TeamViewer 기반 해외 고객 및 파트너사 기술 문의 분석 및 원격 대응",
        en: "Overseas Hardware & Software Inquiry Resolution via Zendesk, Calls & TeamViewer"
      },
      cardColor: "#3E1045", // Deep Amethyst
      image: "/src/assets/images/medit_scanner_technology_1793102305338.jpg",
      oneLineDesc: {
        ko: "국가별 시차를 고려한 원격 지원 조율과 로그·환경 분석을 통한 기술적 문제 해결",
        en: "Coordinated cross-timezone remote sessions and analyzed device logs to diagnose technical issues"
      },
      tools: ["Zendesk", "TeamViewer", "Live Chat", "Device Logs", "English Support"],
      context: {
        ko: "Medit 장비와 소프트웨어를 사용하는 전 세계 치과 의료진과 파트너사의 문의를 접수하고 정확한 진단과 안내를 제공하는 핵심 고객 지원 업무입니다.",
        en: "Handling incoming tickets from global clinicians and distributors using Medit scanners and Medit Link software."
      },
      actions: {
        ko: [
          "Zendesk를 기반으로 이메일, 전화, Live Chat을 통한 글로벌 제품 사용 및 기술 문의 대응",
          "고객의 설명, PC 환경, 소프트웨어 버전, 장비 연결 상태, 스캔 영상 및 시스템 로그 검토",
          "호주, 베트남, 말레이시아 등 국가별 시차와 고객 사용 가능 시간을 고려한 원격 지원 일정 조율",
          "TeamViewer 원격 지원 도구를 통한 장비 연결 및 소프트웨어 설정 문제 진단",
          "관련 개발팀, 수리 부서, 현지 딜러와 확인이 필요한 이슈를 정확히 연결하고 후속 절차 안내"
        ],
        en: [
          "Managed tickets via Zendesk, Live Chat, calls, and email across global timezones",
          "Investigated PC specs, OS updates, USB host controllers, scan logs, and demonstration videos",
          "Scheduled and led remote support sessions tailored to clinician availability across APAC",
          "Diagnosed driver, pairing, and graphic configuration issues hands-on via TeamViewer",
          "Escalated verified software bugs and hardware RMA requests to internal engineering teams"
        ]
      },
      verifiedResults: {
        ko: [
          "반복적인 기술 문의를 체계화하여 고객 대기 시간을 최소화하는 지원 프로토콜 준수",
          "원격 세션을 통한 현장 진단으로 불필요한 장비 반품(RMA) 발생 방지",
          "해외 의료진과의 원활한 영어 소통으로 본사 기술 신뢰도 제고"
        ],
        en: [
          "Streamlined remote triage protocol minimizing clinician downtime during clinic hours",
          "Prevented unnecessary hardware RMAs through thorough remote diagnostic verification",
          "Delivered clear, empathetic English communication strengthening clinician trust in Medit"
        ]
      },
      note: {
        ko: "원기록 원칙: 모든 APAC 국가를 전담했다고 과장하지 않으며, 실제 담당한 티켓 분석과 조율 행동을 정확하게 기록했습니다.",
        en: "Accurate scope: Focuses on verified ticket triage and remote diagnostic actions."
      }
    },
    {
      id: "helpcenter-documentation",
      title: "Help Center Ops",
      category: {
        ko: "문서화 & 지식 표준화",
        en: "Documentation & Knowledge"
      },
      subtitle: {
        ko: "Help Center 설명·순서·레이아웃 개선 요청 및 사내 공통 SOP/Confluence 지식 정리",
        en: "Help Center User Guidance Optimization & Cross-Office Technical Documentation"
      },
      cardColor: "#0B1B36", // Deep Navy
      image: "/src/assets/images/helpcenter_digital_workflow_1793102308054.jpg",
      oneLineDesc: {
        ko: "고객 친화적 Help Center 레이아웃 및 순서 개선 제안과 신제품·정책 공통 안내 문서화",
        en: "Proposed user-centric Help Center layout improvements and standardized SOP documentation"
      },
      tools: ["Help Center", "Troubleshooting Guide", "Confluence", "SOP Documentation"],
      context: {
        ko: "제품 업데이트 및 신규 정책에 따라 달라지는 기술 정보를 파트너와 고객이 스스로 쉽게 찾아보고 따라할 수 있도록 가이드를 정비하는 업무입니다.",
        en: "Auditing self-service documentation so overseas users and regional offices find clear, up-to-date guidance."
      },
      actions: {
        ko: [
          "Help Center 내 오류, 누락된 정보, 고객이 이해하기 어려운 기술 설명 자발적 검토",
          "고객의 이해도를 높이기 위한 설명 순서 재배치, 사진 첨부 및 레이아웃 개선 요청",
          "기존 Troubleshooting Guide 검토 및 현장 기술지원 피드백 전달",
          "신제품 및 소프트웨어 정책 변경 시 유관부서 미팅을 통해 확인된 내용을 문서화",
          "여러 법인에서 동일한 표준으로 안내할 수 있도록 SOP 및 Confluence 내용 정리"
        ],
        en: [
          "Audited existing Help Center articles for missing instructions, outdated UI steps, and ambiguities",
          "Requested content sequencing updates, illustrative screenshots, and layout refinements",
          "Reviewed official Troubleshooting Guides and provided frontline CX feedback",
          "Synthesized product policy updates from cross-functional meetings into reference sheets",
          "Maintained SOPs and Confluence articles to ensure unified messaging across global entities"
        ]
      },
      verifiedResults: {
        ko: [
          "고객이 혼란을 겪는 단계를 사진과 단계별 설명으로 보강하여 문의 전달 명확화",
          "본사 회의 내용 및 정책 업데이트의 해외 법인 공통 안내 문서화 체계 구축 기여",
          "Troubleshooting 문서 검토를 통해 일관된 1차 대응 기준 마련"
        ],
        en: [
          "Enhanced complex setup steps with visual references and clarified instruction flows",
          "Bridged HQ engineering updates into actionable reference guides for overseas entities",
          "Contributed to consistent first-line support answers across regional teams"
        ]
      },
      note: {
        ko: "원기록 대조: 'Help Center 전체를 직접 개발·구축했다'고 과장하지 않고, 고객 관점의 검토·수정 요청·후속 확인 행동을 명확히 구분했습니다.",
        en: "Distinction: Clearly distinguishes user-centric auditing and improvement requests from direct web engineering."
      }
    },
    {
      id: "process-automation",
      title: "Process & Macros",
      category: {
        ko: "프로세스 개선 & 매크로",
        en: "Process & Macros"
      },
      subtitle: {
        ko: "Live Chat 무응답/종료 및 다국어 문의 영어 안내 매크로 제작과 다운로드 절차 간소화",
        en: "Support Macro Automation, Live Chat Process Refinement & Download Friction Removal"
      },
      cardColor: "#0A2A2E", // Deep Cypress Teal
      image: "/src/assets/images/helpcenter_digital_workflow_1793102308054.jpg",
      oneLineDesc: {
        ko: "반복적인 고객 안내 문구 매크로화 및 계정 불필요 다운로드 방식 변경으로 처리 속도 향상",
        en: "Standardized support response macros and removed Google account requirement for guidance downloads"
      },
      tools: ["Zendesk Macros", "Live Chat", "CI/NCI Templates", "Workflow Optimization"],
      context: {
        ko: "상담 중 반복적으로 발생하는 안내 문구 작성 시간을 줄이고, 고객이 필요한 자료에 도달하는 데 겪는 불필요한 단계를 제거하는 업무입니다.",
        en: "Eliminating repetitive writing tasks and removing unnecessary hurdles for customers accessing support materials."
      },
      actions: {
        ko: [
          "반복적인 고객 안내에 사용할 템플릿과 매크로 직접 제작",
          "Live Chat 무응답 및 자동 종료 상황에 대응하는 표준 영문 안내 문구 매크로화",
          "영어 외 다른 언어로 접수된 문의 시 사용할 정중한 영어 안내 문구 매크로 정리",
          "CI/NCI 템플릿 분리 작업 수행",
          "고객이 Google 계정 로그인 없이도 안내 첨부파일을 즉시 다운로드할 수 있도록 방식 변경 요청"
        ],
        en: [
          "Authored canned responses and macros for high-frequency inquiry categories",
          "Standardized polite English scripts for Live Chat non-response and automatic closure scenarios",
          "Organized English guidance macros for inquiries initiated in non-English languages",
          "Separated specialized CI and NCI response templates",
          "Identified and requested the elimination of Google login barriers for file downloads"
        ]
      },
      verifiedResults: {
        ko: [
          "반복 안내 작성에 소요되는 시간 절약 및 상담 간 신속한 응대 지원",
          "고객의 다운로드 관련 추가 문의 방지 및 지원 경험 단순화",
          "채팅 종료 시에도 고객 친화적인 마무리 문구로 전문성 유지"
        ],
        en: [
          "Reduced response composition latency during live chat sessions",
          "Prevented repetitive back-and-forth emails regarding file permission errors",
          "Maintained professional communication standards during session wrap-ups"
        ]
      },
      note: {
        ko: "정확한 정의: '소프트웨어 기능 개발'이 아닌, 매크로 템플릿 제작 및 절차 개선 요청 업무로 기술했습니다.",
        en: "Clarification: Reflects macro authoring and workflow streamlining rather than backend code development."
      }
    },
    {
      id: "product-feedback",
      title: "Product Feedback",
      category: {
        ko: "신제품 테스트 & 피드백",
        en: "Product Feedback"
      },
      subtitle: {
        ko: "출시 전 신제품 사전 사용 테스트 및 Jira/이메일을 통한 개발팀 개선 요청 전달",
        en: "Pre-Release Hardware/Software Testing & Cross-Functional Feedback Delivery via Jira"
      },
      cardColor: "#18181B", // Deep Obsidian Charcoal
      image: "/src/assets/images/medit_scanner_technology_1793102305338.jpg",
      oneLineDesc: {
        ko: "실제 임상 및 고객 관점에서 신제품을 사전 검증하고 구체적 개선 사항 전달",
        en: "Tested pre-release scanners from clinical and user perspectives to submit actionable feedback"
      },
      tools: ["Jira", "Pre-Release Beta Scanners", "Medit Link", "Cross-Functional Collaboration"],
      context: {
        ko: "신제품 출시 전 사용성과 연결성 문제를 미리 발견하여 완성도 높은 제품 출시를 지원하고, 출시 후에도 현장 이슈를 개발팀에 공유하는 활동입니다.",
        en: "Identifying hardware/software friction before market release and advocating for user experience improvements."
      },
      actions: {
        ko: [
          "신제품 출시 전 제품을 직접 구동·사용해보고 사용자 관점의 피드백 제공",
          "스캐너 연결, 소프트웨어 기능 실행 중 발생하는 이상 증상 및 개선점 지속 확인",
          "Jira 티켓 및 이메일을 통해 재현 경로와 개선 필요 사유를 명시하여 개발팀에 전달",
          "현장 임상 지식(치과위생사 경력)을 바탕으로 치과 진료실 환경에서의 실용성 검토"
        ],
        en: [
          "Operated pre-release scanner units to evaluate real-world ergonomic and software workflows",
          "Documented connection glitches, software UI inconsistencies, and performance slowdowns",
          "Logged detailed reproduction steps and logs into Jira for engineering review",
          "Leveraged clinical hygiene background to evaluate suitability in realistic operatory conditions"
        ]
      },
      verifiedResults: {
        ko: [
          "개발팀이 파악하기 어려운 실제 사용자 및 임상 환경 관점의 버그 조기 발굴",
          "구체적인 증상 설명과 로그 전달로 개발팀의 문제 원인 분석 효율화 지원",
          "현장 목소리가 제품 개선으로 이어지는 가교 역할 수행"
        ],
        en: [
          "Surfaced edge-case usability glitches from realistic clinical perspectives prior to release",
          "Provided clear diagnostic reproduction steps enabling rapid developer triage",
          "Served as a frontline conduit between international clinicians and core engineering"
        ]
      },
      note: {
        ko: "역할 한계 준수: 'PO/PM으로서 제품 로드맵을 총괄했다'고 과장하지 않고, 본인이 확인한 내용과 전달한 개선 요청에 집중했습니다.",
        en: "Clear scope: Focused on verified testing and feedback delivery rather than overall product roadmapping."
      }
    }
  ],

  experiences: [
    {
      period: "입사 연월 — 현재",
      company: {
        ko: "Medit (메디트)",
        en: "Medit"
      },
      role: {
        ko: "APAC CX 및 HQ CX 기술지원 / 글로벌 고객 지원 & 파트너 교육",
        en: "Global Customer Support & Partner Enablement (APAC CX & HQ CX)"
      },
      division: {
        ko: "글로벌 고객경험(CX) 본부",
        en: "Global Customer Experience Division"
      },
      description: {
        ko: "해외 파트너·딜러와 최종 사용자를 대상으로 글로벌 기술지원, 파트너 교육 기획 및 진행, 고객 안내 프로세스 개선, 해외 신규 직원 온보딩 및 APAC 주간 회의 리딩을 담당하고 있습니다.",
        en: "Delivering overseas technical support, partner training programs, customer guidance optimization, new employee onboarding, and APAC CX weekly operations."
      },
      keyResponsibilities: {
        ko: [
          "Zendesk 기반 글로벌 고객·딜러 하드웨어/소프트웨어 문의 응대 및 TeamViewer 원격 지원",
          "해외 파트너 대상 제품·Troubleshooting 교육 자료 제작 및 영어 세션 진행",
          "Google Forms 파트너 교육 평가 설문 설계 및 피드백 점검 체계 마련",
          "Help Center 누락 정보·오류 검토 및 레이아웃 개선 요청, 공통 SOP 문서화",
          "반복 업무 매크로 제작, CI/NCI 템플릿 분리, 파일 다운로드 방식 개선 요청",
          "신제품 출시 전 테스트 참여 및 Jira 기반 개선 피드백 전달",
          "해외 신규 직원 영어 온보딩, 버디 멘토링, APAC 주간 회의 준비 및 액션 아이템 팔로업",
          "ADX Australia(2026.03) 전시 지원 및 딜러 교육, SDIEX(2026.05) 부스 지원"
        ],
        en: [
          "Global inquiry resolution via Zendesk and hands-on remote troubleshooting with TeamViewer",
          "Creation of technical training materials and delivery of English presentations for overseas dealers",
          "Google Forms survey design and post-training feedback loop establishment",
          "Help Center content audits, layout revision proposals, and unified SOP documentation",
          "Response macro authoring, CI/NCI template separation, and download friction elimination",
          "Pre-release product usability testing and Jira bug reporting with reproduction details",
          "Overseas employee onboarding, buddy mentoring, and APAC weekly meeting facilitation",
          "On-site exhibition and dealer training support at ADX Australia and SDIEX"
        ]
      },
      tools: ["Zendesk", "TeamViewer", "Jira", "Confluence", "Google Forms", "SAP", "Medit Link", "Microsoft Teams"]
    },
    {
      period: "치과대학병원 재직 기간",
      company: {
        ko: "치과대학병원",
        en: "University Dental Hospital"
      },
      role: {
        ko: "치과위생사 (Dental Hygienist)",
        en: "Dental Hygienist"
      },
      division: {
        ko: "임상 진료 부서",
        en: "Clinical Department"
      },
      description: {
        ko: "치과대학병원 임상 현장에서 근무하며 환자 진료 및 임상 프로토콜을 체득했습니다. 이 경험은 Medit 구강 스캐너를 사용하는 의료진과 치과의사의 실질적 니즈를 깊이 이해하는 탄탄한 도메인 자산이 되었습니다.",
        en: "Worked as a licensed dental hygienist in a university dental hospital, mastering clinical workflows and patient care environments. This foundational domain insight directly empowers deep empathy with dental clinicians."
      },
      keyResponsibilities: {
        ko: [
          "치과대학병원 임상 현장 진료 협조 및 환자 케어",
          "치과 진료실 워크플로우와 구강 내 기구 조작 환경에 대한 체계적 이해",
          "임상 의료진(치과의사, 위생사, 기공사) 관점의 워크플로우와 페인포인트 체득"
        ],
        en: [
          "Clinical patient care and operatory workflow execution in a university dental hospital",
          "Systematic understanding of clinical dental procedures and sterilization standards",
          "In-depth insight into operatory ergonomics and clinician pain points"
        ]
      },
      tools: ["Clinical Protocols", "Dental Medical Practice", "Operatory Workflows"]
    }
  ],

  toolsAndSkills: [
    { name: "Zendesk", category: "CX & Ticketing", desc: "글로벌 고객·파트너 티켓 관리 및 매크로 제작" },
    { name: "TeamViewer", category: "Remote Diagnostic", desc: "원격 접속을 통한 장비 연결 및 환경 트러블슈팅" },
    { name: "Jira", category: "Issue Tracking", desc: "출시 전 제품 이상 증상 및 개선 요청 등록" },
    { name: "Confluence & SOP", category: "Knowledge Base", desc: "사내 공통 안내 문서화 및 업무 매뉴얼 정리" },
    { name: "Google Forms", category: "Evaluation Survey", desc: "파트너 교육 평가 설문 제작 및 응답 배포" },
    { name: "SAP", category: "Operations", desc: "RMA 및 장비 관련 업무 맥락에서의 활용" },
    { name: "Medit Hardware/Software", category: "Domain System", desc: "i500, i700(Wireless), i900 Mobility, Medit Link" },
    { name: "Professional English", category: "Global Communication", desc: "해외 교육, 주간 미팅, 기술지원 영문 작성" }
  ]
};
