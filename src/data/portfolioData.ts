export interface Project {
  id: string;
  title: {
    ko: string;
    en: string;
  };
  subtitle: {
    ko: string;
    en: string;
  };
  category: 'design-system' | 'creative-tech' | 'web-app';
  categoryLabel: {
    ko: string;
    en: string;
  };
  role: {
    ko: string;
    en: string;
  };
  period: string;
  image: string;
  highlightMetric: {
    ko: string;
    en: string;
  };
  tags: string[];
  overview: {
    ko: string;
    en: string;
  };
  problem: {
    ko: string;
    en: string;
  };
  solution: {
    ko: string;
    en: string;
  };
  impact: {
    ko: string[];
    en: string[];
  };
  architectureDetails: {
    ko: string[];
    en: string[];
  };
  demoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  period: string;
  role: {
    ko: string;
    en: string;
  };
  company: {
    ko: string;
    en: string;
  };
  location: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  achievements: {
    ko: string[];
    en: string[];
  };
  techStack: string[];
}

export interface Testimonial {
  quote: {
    ko: string;
    en: string;
  };
  author: string;
  role: {
    ko: string;
    en: string;
  };
  company: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: {
      ko: "김도현 (Alex Kim)",
      en: "Alex Dohyun Kim"
    },
    title: {
      ko: "시니어 웹 디자이너 & 프론트엔드 엔지니어",
      en: "Senior Web Designer & Lead Frontend Engineer"
    },
    tagline: {
      ko: "디자인의 감성과 엔지니어링의 정밀함이 결합된 고품질 디지털 프로덕트를 설계합니다.",
      en: "Bridging architectural design sensibility with rigorous frontend engineering craft."
    },
    location: {
      ko: "대한민국 서울 / 원격 협업 가능",
      en: "Seoul, KR & Remote Worldwide"
    },
    email: "dnjf127@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    status: {
      ko: "현재 새로운 도전 및 프로젝트 기회 열려있음",
      en: "Open to High-Impact Opportunities"
    },
    avatar: "/src/assets/images/avatar_engineer_portrait_1793101622601.jpg",
    heroWorkspaceImage: "/src/assets/images/hero_workspace_minimal_1793101620523.jpg"
  },

  metrics: [
    {
      value: "8+ Yrs",
      label: {
        ko: "디자인 & 엔지니어링 경력",
        en: "Years in Production Craft"
      },
      sub: {
        ko: "UI/UX 설계부터 대규모 웹 아키텍처까지",
        en: "From Design Systems to Scaled Web"
      }
    },
    {
      value: "1.4M+",
      label: {
        ko: "월간 활성 사용자(MAU)",
        en: "Monthly Active Users"
      },
      sub: {
        ko: "고부하 트래픽에서도 무결점 인터랙션",
        en: "Zero-Jank Resilient Architecture"
      }
    },
    {
      value: "99.8%",
      label: {
        ko: "프로덕션 가용성 & 98+ 점수",
        en: "Uptime & Lighthouse 98+"
      },
      sub: {
        ko: "Core Web Vitals 최상위 등급 유지",
        en: "Optimal Core Web Vitals Guaranteed"
      }
    },
    {
      value: "350+",
      label: {
        ko: "디자인 토큰 & 컴포넌트",
        en: "Design Tokens & Components"
      },
      sub: {
        ko: "WCAG 2.2 AA 접근성 기준 충족",
        en: "Strict WCAG 2.2 AA Accessibility"
      }
    }
  ],

  projects: ([
    {
      id: "hyperion-design-system",
      title: {
        ko: "하이페리온 디자인 시스템 (Hyperion)",
        en: "Hyperion Multi-Brand Design System"
      },
      subtitle: {
        ko: "Figma 토큰과 코드가 실시간 동기화되는 엔터프라이즈 컴포넌트 아키텍처",
        en: "Enterprise Component Architecture with Real-Time Figma Token Synchronization"
      },
      category: "design-system",
      categoryLabel: {
        ko: "디자인 시스템",
        en: "Design Systems"
      },
      role: {
        ko: "리드 디자인 엔지니어 (설계 & 프론트엔드)",
        en: "Lead Design Engineer"
      },
      period: "2024 - Present",
      image: "/src/assets/images/project_design_system_1793101621165.jpg",
      highlightMetric: {
        ko: "+45% 제품 개발 속도 향상, 14개 프로덕트 통합",
        en: "+45% Feature Velocity across 14 Integrated Products"
      },
      tags: ["TypeScript", "React 19", "Tailwind CSS", "Figma Tokens", "Storybook", "Radix UI", "Accessibility"],
      overview: {
        ko: "분산된 14개의 웹 및 모바일 프로덕트의 사용자 경험을 단일한 설계 언어로 일원화하기 위해 탄생한 차세대 디자인 시스템입니다. 디자이너가 피그마에서 정의한 변수가 CI/CD 파이프라인을 거쳐 자동으로 TypeScript 타입과 CSS 변수로 변환됩니다.",
        en: "A next-generation multi-brand design system unified across 14 enterprise web and mobile products. Synchronizes design decisions from Figma directly into type-safe code tokens with zero human translation errors."
      },
      problem: {
        ko: "팀마다 상이한 UI 라이브러리를 사용해 컴포넌트 중복 개발이 발생하고, 일관성 없는 여백·폰트 스케일 및 접근성 미비로 인한 품질 이슈가 지속되었습니다.",
        en: "Teams previously fragmented across inconsistent UI libraries, creating duplicative components, drifting typography and spacing scales, and failing WCAG accessibility audits."
      },
      solution: {
        ko: "W3C 디자인 토큰 표준을 준수하는 양방향 토큰 동기화 파이프라인 구축. 무손실 키보드 내비게이션, 스크린 리더 지원(Aria primitives), 동적 테마 엔진(Dark/Light/High-Contrast)을 완벽 구현했습니다.",
        en: "Constructed an automated bidirectional design token engine adhering to W3C standards, paired with accessible headless primitives, comprehensive keyboard navigation, and dynamic dark/light theme switching."
      },
      impact: {
        ko: [
          "신규 피처 개발 시 UI 제작 시간 45% 단축",
          "사내 3개 본부 14개 프로덕트에 성공적 도입 및 100% 마이그레이션",
          "WCAG 2.2 AA 접근성 100% 달성 및 다크모드 광학 보정 시스템 안착"
        ],
        en: [
          "45% reduction in frontend UI implementation time for new product squads",
          "100% adoption and migration completed across 14 distinct product teams",
          "Achieved full WCAG 2.2 AA compliance and automated dark mode optical balance"
        ]
      },
      architectureDetails: {
        ko: [
          "Figma REST API & GitHub Actions 기반 자동 토큰 생성 파이프라인",
          "CVA (Class Variance Authority)와 Tailwind를 결합한 불변 컴포넌트 변형 관리",
          "Playwright 및 Storybook Test Runner를 통한 시각적 회귀(Visual Regression) 자동 검증"
        ],
        en: [
          "Automated token compiler via Figma REST API & GitHub Actions runner",
          "Strict component variant system utilizing CVA and Tailwind CSS primitives",
          "Automated visual regression and accessibility testing with Playwright & Storybook"
        ]
      }
    },
    {
      id: "vectorflux-spatial-canvas",
      title: {
        ko: "벡터플럭스 인터랙티브 노드 캔버스 (VectorFlux)",
        en: "VectorFlux Spatial Node Canvas & Graph Engine"
      },
      subtitle: {
        ko: "10,000개 이상의 노드를 끊김 없이 렌더링하는 WebGL/Canvas 하이브리드 엔진",
        en: "High-Performance Hybrid WebGL/2D Canvas Engine Rendering 10k+ Dynamic Graph Nodes"
      },
      category: "creative-tech",
      categoryLabel: {
        ko: "크리에이티브 인터랙션",
        en: "Creative Tech"
      },
      role: {
        ko: "시니어 프론트엔드 아키텍트",
        en: "Senior Frontend Architect"
      },
      period: "2023 - 2024",
      image: "/src/assets/images/project_spatial_canvas_1793101622075.jpg",
      highlightMetric: {
        ko: "대용량 노드 렌더링 시에도 일관된 60 FPS 유지",
        en: "Consistent 60 FPS under 10,000+ Active Vector Nodes"
      },
      tags: ["WebGL", "Three.js", "Canvas 2D", "Web Workers", "Zustand", "Spatial Partitioning", "TypeScript"],
      overview: {
        ko: "창작자와 데이터 엔지니어가 복잡한 데이터 파이프라인과 인터랙티브 노드를 자유롭게 연결할 수 있는 무한 줌 캔버스 웹 애플리케이션입니다. 브라우저의 렌더링 한계를 극복하기 위해 공간 분할(Spatial Partitioning) 알고리즘을 도입했습니다.",
        en: "An infinite-pan visual node graph editor designed for data pipelines and creative workflows. Leverages quadtree spatial partitioning and Web Workers to overcome browser rendering bottlenecks."
      },
      problem: {
        ko: "노드 수가 500개를 초과할 때 DOM 기반 렌더링 방식의 한계로 인해 브라우저 프레임 드랍(15 FPS 이하)과 입력 지연이 심각하게 발생했습니다.",
        en: "Traditional DOM-based graph renderers collapsed below 15 FPS when graph density exceeded 500 nodes, resulting in unresponsive drag gestures and severe input lag."
      },
      solution: {
        ko: "OffscreenCanvas와 Web Worker로 복잡한 계산을 격리하고, 뷰포트 내 보이는 요소만 선별 렌더링하는 Quadtree 알고리즘을 설계하여 메인 스레드를 온전히 UI 인터랙션에 집중시켰습니다.",
        en: "Isolated rendering loops using OffscreenCanvas and Web Workers, combined with a custom Quadtree frustum culling algorithm that renders only elements visible in the active viewport."
      },
      impact: {
        ko: [
          "10,000개 이상의 노드와 25,000개 베지어 연결선 환경에서도 안정적 60 FPS 달성",
          "초기 캔버스 로딩 시간 2.8초에서 0.4초로 85% 대폭 단축",
          "사용자 인터랙션 입력 지연시간 8ms 이하로 단축하여 실물 같은 조작감 제공"
        ],
        en: [
          "Maintained rock-solid 60 FPS with 10k nodes and 25k bezier connector curves",
          "Initial canvas initialization time dropped from 2.8s to 0.4s (85% reduction)",
          "Sub-8ms gesture input latency, delivering native desktop-grade fluidity"
        ]
      },
      architectureDetails: {
        ko: [
          "Worker 스레드 기반 쿼드트리(Quadtree) 공간 색인 및 컬링",
          "Bézier 곡선 실시간 하드웨어 가속 셰이더 및 커스텀 충돌 감지",
          "Zustand 스토어를 통한 영속적 실행 취소/다시 실행(Undo/Redo) 히스토리 관리"
        ],
        en: [
          "Worker-authoritative quadtree indexing and viewport frustum culling",
          "Hardware-accelerated custom shaders for smooth cubic bezier paths",
          "High-efficiency immutable history stack with persistent undo/redo capability"
        ]
      }
    },
    {
      id: "velocity-observability",
      title: {
        ko: "벨로시티 실시간 옵저버빌리티 플랫폼 (Velocity)",
        en: "Velocity Real-Time Cloud Telemetry Suite"
      },
      subtitle: {
        ko: "분당 수만 건의 서버 지표를 실시간 가시화하는 고성능 모니터링 인터페이스",
        en: "High-Throughput Real-Time Metrics & Telemetry Dashboard for Mission-Critical Systems"
      },
      category: "web-app",
      categoryLabel: {
        ko: "웹 애플리케이션",
        en: "Web Applications"
      },
      role: {
        ko: "시니어 프론트엔드 엔지니어 & UI 디자이너",
        en: "Senior Frontend Engineer & UI Designer"
      },
      period: "2022 - 2023",
      image: "/src/assets/images/project_analytics_engine_1793101624590.jpg",
      highlightMetric: {
        ko: "초기 페이지 응답(TTFB) 68% 단축, 실시간 렌더링",
        en: "68% TTFB Reduction (1.2s → 0.38s) & Real-Time Stream"
      },
      tags: ["React", "TypeScript", "D3.js", "WebSocket", "Tailwind CSS", "Data Virtualization", "Vite"],
      overview: {
        ko: "글로벌 분산 클라우드 인프라의 상태, API 응답 시간, 장애 알림을 한 화면에서 즉각 파악할 수 있는 다크 모드 중심의 프로덕션 엔터프라이즈 모니터링 콘솔입니다.",
        en: "A dark-mode-first mission-critical monitoring dashboard designed for DevOps and SRE teams to analyze real-time streaming infrastructure metrics, latency curves, and anomalies."
      },
      problem: {
        ko: "초당 수천 개의 웹소켓 이벤트 수신 시 리렌더링 폭주로 브라우저 탭 메모리가 지속적으로 증가하여 장시간 켜둘 경우 크래시가 발생하는 문제가 있었습니다.",
        en: "High-frequency streaming telemetry triggered aggressive React re-renders, causing memory leaks and browser tab crashes during prolonged 24/7 monitoring sessions."
      },
      solution: {
        ko: "배치 업데이트(Throttle Batching) 기법과 가상화 테이블(Virtual Table)을 구현하고, SVG 대신 가벼운 HTML5 Canvas 차트 렌더러를 직접 작성하여 24시간 연속 가동 시에도 메모리 누수를 원천 차단했습니다.",
        en: "Implemented fixed-window throttle batching, virtualized tabular views, and lightweight canvas sparklines to prevent memory leaks during 24/7 continuous operation."
      },
      impact: {
        ko: [
          "TTFB 1.2초에서 0.38초로 68% 개선 및 클라이언트 메모리 사용량 65% 절감",
          "장애 감지 및 인시던트 대응 시간 평균 4.2분 단축",
          "엔지니어 500+명이 매일 사용하는 핵심 프로덕션 도구로 정착"
        ],
        en: [
          "68% TTFB improvement (1.2s to 0.38s) and 65% reduction in client heap memory",
          "Reduced mean time to incident response (MTTR) by 4.2 minutes across ops teams",
          "Adopted daily by 500+ engineers as the primary mission-critical dashboard"
        ]
      },
      architectureDetails: {
        ko: [
          "WebSocket 데이터 수신을 16ms 주기로 통합하는 렌더링 버퍼링 큐",
          "Tabular 수치 정렬을 위한 monospace tabular-nums 폰트 엔진 및 미세 여백 튜닝",
          "SSE (Server-Sent Events) 자동 재연결 및 지수 백오프(Exponential Backoff) 전략"
        ],
        en: [
          "16ms render buffering queue aligning telemetry packets to display refresh cycles",
          "Tabular-num typography discipline ensuring vertical baseline stability",
          "Self-healing WebSocket reconnection protocols with exponential jitter backoff"
        ]
      }
    }
  ] as Project[]),

  experiences: [
    {
      period: "2023 — Present",
      role: {
        ko: "리드 디자인 엔지니어 (Lead Design Engineer)",
        en: "Lead Design Engineer"
      },
      company: {
        ko: "넥서스 인터랙티브 (Nexus Interactive)",
        en: "Nexus Interactive"
      },
      location: {
        ko: "서울, 대한민국",
        en: "Seoul, South Korea"
      },
      description: {
        ko: "디자인과 프론트엔드 엔지니어링의 경계를 허무는 디자인 엔지니어링 챕터를 이끌며 전사 공통 컴포넌트 아키텍처 및 고성능 웹 플랫폼을 총괄하고 있습니다.",
        en: "Directing the Design Engineering chapter, spearheading enterprise component architectures, web performance standards, and cross-functional design token pipelines."
      },
      achievements: {
        ko: [
          "W3C 토큰 표준 기반의 전사 디자인 시스템 구축 및 14개 제품 성공적 배포",
          "핵심 서비스 Core Web Vitals (LCP, INP, CLS) 올그린 달성 및 로딩 속도 2배 향상",
          "주니어 엔지니어 및 프로덕트 디자이너 8명 멘토링 및 디자인 엔지니어링 문화 정립"
        ],
        en: [
          "Architected enterprise design system serving 14 products with automated token sync",
          "Achieved perfect Core Web Vitals (LCP, INP, CLS) resulting in 2x faster page loads",
          "Mentored 8 engineers & product designers in modern interaction craft and accessibility"
        ]
      },
      techStack: ["TypeScript", "React 19", "Tailwind CSS", "Motion", "Design Tokens", "Architecture"]
    },
    {
      period: "2021 — 2023",
      role: {
        ko: "시니어 프론트엔드 개발자 (Senior Frontend Developer)",
        en: "Senior Frontend Developer"
      },
      company: {
        ko: "프리즘 테크 랩스 (Prism Tech Labs)",
        en: "Prism Tech Labs"
      },
      location: {
        ko: "원격 (Remote)",
        en: "Remote, Global"
      },
      description: {
        ko: "대규모 데이터 시각화 웹 애플리케이션 및 공간 인터랙티브 캔버스 코어 모듈을 개발했습니다.",
        en: "Engineered real-time telemetry dashboards and interactive canvas graphics for global developer products."
      },
      achievements: {
        ko: [
          "WebGL & Web Workers를 활용한 대규모 노드 그래프 렌더러 설계 (60 FPS 보장)",
          "마이크로 프론트엔드(Module Federation) 아키텍처 전환으로 독립 배포 주기 확립",
          "프로덕션 장애율 0.02% 미만 유지 및 무중단 배포 체계 완성"
        ],
        en: [
          "Developed high-throughput WebGL/Canvas node graph engine running at 60 FPS",
          "Transitioned monolithic frontend into modular micro-frontends with independent CI/CD",
          "Maintained <0.02% production error budget with robust Sentry telemetry and testing"
        ]
      },
      techStack: ["React", "TypeScript", "WebGL", "Three.js", "Zustand", "D3.js", "Vite"]
    },
    {
      period: "2018 — 2021",
      role: {
        ko: "UI/UX 디자이너 & 프론트엔드 엔지니어",
        en: "UI/UX Designer & Frontend Engineer"
      },
      company: {
        ko: "스튜디오 모놀리스 (Studio Monolith)",
        en: "Studio Monolith"
      },
      location: {
        ko: "서울, 대한민국",
        en: "Seoul, South Korea"
      },
      description: {
        ko: "핀테크, 모빌리티, 미디어 브랜드의 차별화된 브랜드 웹사이트 및 디지털 프로덕트를 턴키(기획-디자인-개발)로 납품했습니다.",
        en: "Delivered 20+ responsive web platforms and brand experiences from conceptual UX wireframes through final production code."
      },
      achievements: {
        ko: [
          "국내외 권위 있는 디지털 어워드 3관왕 (Awwwards, FWA, iF Design)",
          "부드러운 스크롤 인터랙션 및 마이크로 인터랙션 라이브러리 자체 개발",
          "고객사 전환율(Conversion Rate) 평균 34% 개선"
        ],
        en: [
          "Recognized with 3 digital design awards (Awwwards Site of the Day, FWA, iF Design)",
          "Authored internal micro-interaction and smooth scroll orchestration library",
          "Delivered average 34% increase in user conversion rates across shipped client projects"
        ]
      },
      techStack: ["Figma", "JavaScript", "React", "GSAP", "CSS Architecture", "Design Systems"]
    }
  ],

  skills: {
    engineering: [
      { name: "TypeScript / JavaScript", level: "Expert", years: "8 yrs" },
      { name: "React 19 & Next.js", level: "Expert", years: "7 yrs" },
      { name: "Tailwind CSS & Styling Systems", level: "Expert", years: "6 yrs" },
      { name: "Motion & UI Physics", level: "Advanced", years: "5 yrs" },
      { name: "WebGL / Three.js / Canvas", level: "Advanced", years: "4 yrs" },
      { name: "State Architecture (Zustand/Redux)", level: "Expert", years: "6 yrs" },
      { name: "Web Workers & Performance Ops", level: "Advanced", years: "4 yrs" },
      { name: "CI/CD & Monorepo (Turborepo)", level: "Advanced", years: "4 yrs" }
    ],
    design: [
      { name: "Design System Architecture", level: "Master", years: "6 yrs" },
      { name: "Figma Variables & Auto-Layout", level: "Expert", years: "7 yrs" },
      { name: "W3C Design Tokens Spec", level: "Expert", years: "4 yrs" },
      { name: "WCAG 2.2 AA Accessibility", level: "Expert", years: "5 yrs" },
      { name: "Micro-Interactions & Motion", level: "Expert", years: "6 yrs" },
      { name: "Typographic & Spatial Grid Systems", level: "Master", years: "8 yrs" }
    ],
    principles: [
      {
        title: {
          ko: "타협 없는 시각적 디테일",
          en: "Uncompromising Visual Precision"
        },
        desc: {
          ko: "1px의 테두리 대비, 폰트의 행간, 모션의 감속 곡선 하나까지 의도된 설계 원칙에 따라 조율합니다.",
          en: "Every border contrast, typographic baseline, and easing curve is calibrated with mathematical purpose."
        }
      },
      {
        title: {
          ko: "0.1초의 지연도 용납하지 않는 성능",
          en: "Zero-Latency Performance"
        },
        desc: {
          ko: "아름다운 인터랙션이 프레임 드랍을 일으키지 않도록 하드웨어 가속과 컴포지터 계층을 철저히 검증합니다.",
          en: "Interactions animate on GPU compositor layers exclusively, ensuring buttery 60 FPS responsiveness."
        }
      },
      {
        title: {
          ko: "모두를 위한 포용적 접근성",
          en: "Universal Accessibility First"
        },
        desc: {
          ko: "화려한 비주얼도 접근성이 결여되면 실패입니다. 시맨틱 마크업과 키보드 네비게이션을 기본 탑재합니다.",
          en: "Beauty without accessibility is incomplete. Full semantic HTML, visible focus states, and screen reader clarity."
        }
      }
    ]
  },

  testimonials: [
    {
      quote: {
        ko: "도현 님은 디자인의 뉘앙스를 온전히 코드로 구현해 내는 보기 드문 인재입니다. 우리 프로덕트의 완성도와 개발 생산성을 비약적으로 끌어올려 주셨습니다.",
        en: "Alex possesses the rare synthesis of exquisite visual taste and hardened engineering architecture. Elevated our entire product bar effortlessly."
      },
      author: "최원석 (Marcus Choi)",
      role: {
        ko: "제품 총괄 부사장 (VP of Product)",
        en: "VP of Product"
      },
      company: "Nexus Interactive"
    },
    {
      quote: {
        ko: "10,000개 이상의 노드가 도는 캔버스를 60 FPS로 안정화한 것은 도현 님의 집요한 프로파일링과 아키텍처 역량이 있었기에 가능했습니다.",
        en: "Stabilizing our canvas engine at 60 FPS under massive node loads was directly powered by his relentless performance profiling."
      },
      author: "David Vance",
      role: {
        ko: "수석 소프트웨어 엔지니어 (Principal Architect)",
        en: "Principal Architect"
      },
      company: "Prism Tech Labs"
    }
  ]
};
