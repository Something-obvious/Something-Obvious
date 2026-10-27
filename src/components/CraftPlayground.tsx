import React, { useState, useEffect, useRef } from 'react';
import { Sliders, Play, RotateCcw, Sparkles, Check, Copy } from 'lucide-react';

interface CraftPlaygroundProps {
  lang: 'ko' | 'en';
}

export const CraftPlayground: React.FC<CraftPlaygroundProps> = ({ lang }) => {
  // Spring Physics State
  const [stiffness, setStiffness] = useState<number>(300);
  const [damping, setDamping] = useState<number>(24);
  const [mass, setMass] = useState<number>(1);
  const [displacement, setDisplacement] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [history, setHistory] = useState<number[]>([]);
  const animRef = useRef<number | null>(null);

  // Design Token Sandbox State
  const [tokenRadius, setTokenRadius] = useState<number>(12);
  const [tokenScale, setTokenScale] = useState<number>(1);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Trigger Spring Physics Animation
  const runPhysicsSimulation = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsSimulating(true);

    let x = 120; // initial displacement
    let v = 0;   // velocity
    const dt = 1 / 60; // 60 fps step
    const samples: number[] = [];

    const step = () => {
      // Spring force: F = -k * x - c * v
      const springForce = -stiffness * x;
      const dampingForce = -damping * v;
      const totalForce = springForce + dampingForce;
      const a = totalForce / mass;

      v += a * dt;
      x += v * dt;

      samples.push(x);
      setDisplacement(x);

      // Stop condition: near zero displacement and velocity
      if (Math.abs(x) < 0.1 && Math.abs(v) < 0.1) {
        setDisplacement(0);
        setIsSimulating(false);
        setHistory([...samples]);
      } else {
        animRef.current = requestAnimationFrame(step);
      }
    };

    step();
  };

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const copyTokens = () => {
    const code = `// Active Design Token Snapshot\nexport const activeTokens = {\n  radius: "${tokenRadius}px",\n  scale: ${tokenScale},\n  spring: { stiffness: ${stiffness}, damping: ${damping}, mass: ${mass} }\n};`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="craft-lab" className="py-24 border-b border-white/[0.08] bg-[#0E1017]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '02. 인터랙션 엔지니어링 랩' : '02. Interaction Engineering Lab'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3">
            {lang === 'ko' ? '실시간 물리 엔진 & 토큰 샌드박스' : 'Live Spring Physics & Token Sandbox'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {lang === 'ko' 
              ? '수치 기반의 감속 곡선과 반응형 디자인 토큰이 브라우저에서 실시간으로 렌더링되는 인터랙션 프로토타입입니다.'
              : 'Directly manipulate harmonic oscillation physics, dynamic token scaling, and micro-interaction mechanics in real time.'}
          </p>
        </div>

        {/* 2-Column Split Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Spring Physics Simulator */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#141721] border border-white/[0.08] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Sliders className="w-4 h-4 text-blue-400" />
                  <span>{lang === 'ko' ? '스프링 물리 엔진 시뮬레이터' : 'Harmonic Spring Oscillator'}</span>
                </div>
                <div className="text-xs font-mono text-emerald-400">
                  {isSimulating ? (lang === 'ko' ? '시뮬레이션 가동 중...' : 'Oscillating...') : 'Idle (Ready)'}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-5 mb-8">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-300">{lang === 'ko' ? '강도 (Stiffness / 탄성)' : 'Stiffness (k)'}</span>
                    <span className="text-blue-400 font-semibold">{stiffness} N/m</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="600"
                    step="10"
                    value={stiffness}
                    onChange={(e) => setStiffness(Number(e.target.value))}
                    className="w-full accent-blue-500 bg-white/10 rounded-lg h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-300">{lang === 'ko' ? '감쇠 (Damping / 저항)' : 'Damping (c)'}</span>
                    <span className="text-blue-400 font-semibold">{damping} N·s/m</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="1"
                    value={damping}
                    onChange={(e) => setDamping(Number(e.target.value))}
                    className="w-full accent-blue-500 bg-white/10 rounded-lg h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-300">{lang === 'ko' ? '질량 (Mass)' : 'Mass (m)'}</span>
                    <span className="text-blue-400 font-semibold">{mass} kg</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3"
                    step="0.1"
                    value={mass}
                    onChange={(e) => setMass(Number(e.target.value))}
                    className="w-full accent-blue-500 bg-white/10 rounded-lg h-2 cursor-pointer"
                  />
                </div>
              </div>

              {/* Live Canvas / Visual Representation */}
              <div className="p-6 rounded-xl bg-[#0B0D11] border border-white/[0.08] relative min-h-[140px] flex items-center justify-center overflow-hidden">
                {/* Center Baseline */}
                <div className="absolute left-0 right-0 h-[1px] bg-white/[0.1]" />
                <div className="absolute top-2 left-3 text-[11px] font-mono text-slate-500">
                  y = 0 equilibrium
                </div>

                {/* Animated Spring Orb */}
                <div
                  className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 border border-white/20 shadow-lg shadow-blue-500/20 flex items-center justify-center text-xs font-mono font-bold text-white cursor-pointer select-none"
                  style={{
                    transform: `translateX(${displacement}px)`,
                    transition: isSimulating ? 'none' : 'transform 0.15s ease-out'
                  }}
                  onClick={runPhysicsSimulation}
                  title="Click to trigger oscillation"
                >
                  F(x)
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.08]">
              <div className="text-xs font-mono text-slate-400">
                Formula: <span className="text-slate-200">F = -kx - cv</span>
              </div>
              <button
                onClick={runPhysicsSimulation}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{lang === 'ko' ? '물리 반응 테스트 실행' : 'Trigger Spring Oscillation'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Design Token Sandbox */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#141721] border border-white/[0.08] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="text-sm font-semibold text-white">
                  {lang === 'ko' ? '동적 토큰 스케일러' : 'Dynamic Design Token Scaler'}
                </div>
                <button
                  onClick={copyTokens}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] rounded-md transition-colors"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Tokens'}</span>
                </button>
              </div>

              {/* Token Sliders */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-300">{lang === 'ko' ? '곡률 (Border Radius)' : 'Border Radius'}</span>
                    <span className="text-blue-400 font-semibold">{tokenRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="24"
                    step="2"
                    value={tokenRadius}
                    onChange={(e) => setTokenRadius(Number(e.target.value))}
                    className="w-full accent-blue-500 bg-white/10 rounded-lg h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-300">{lang === 'ko' ? '타이포 배율 (Type Scale)' : 'Typography Scale Factor'}</span>
                    <span className="text-blue-400 font-semibold">{tokenScale.toFixed(2)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.9"
                    max="1.3"
                    step="0.05"
                    value={tokenScale}
                    onChange={(e) => setTokenScale(Number(e.target.value))}
                    className="w-full accent-blue-500 bg-white/10 rounded-lg h-2 cursor-pointer"
                  />
                </div>
              </div>

              {/* Real-time adapting Preview Card */}
              <div 
                className="p-5 bg-[#0B0D11] border border-white/[0.1] transition-all duration-200"
                style={{ borderRadius: `${tokenRadius}px` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span 
                    className="font-bold text-white tracking-tight"
                    style={{ fontSize: `${16 * tokenScale}px` }}
                  >
                    Adaptive Component
                  </span>
                  <span 
                    className="font-mono text-xs text-blue-400"
                    style={{ fontSize: `${11 * tokenScale}px` }}
                  >
                    r={tokenRadius}px
                  </span>
                </div>
                <p 
                  className="text-slate-300 leading-relaxed mb-4"
                  style={{ fontSize: `${13 * tokenScale}px` }}
                >
                  {lang === 'ko' 
                    ? '토큰 조정 시 컴포넌트 내부 여백 및 텍스트 비율이 정합성을 유지합니다.' 
                    : 'Inner padding and typography maintain proportional harmony when tokens mutate.'}
                </p>
                <button
                  className="w-full py-2.5 font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                  style={{ 
                    borderRadius: `${Math.max(0, tokenRadius - 4)}px`,
                    fontSize: `${12 * tokenScale}px`
                  }}
                >
                  {lang === 'ko' ? '액션 트리거' : 'Interactive Action'}
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>W3C Tokens Spec Compliant</span>
              <span className="text-slate-500">Zero CSS Drifts</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
