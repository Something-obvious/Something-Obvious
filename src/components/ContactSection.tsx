import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Download, Sparkles, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  lang: 'ko' | 'en';
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, onOpenResume }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !senderEmail || !message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setSenderEmail('');
      setMessage('');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Outreach Info */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
                {lang === 'ko' ? '06. 협업 및 채용 문의' : '06. Collaboration & Opportunities'}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                {lang === 'ko' ? (
                  <>
                    새로운 가능성과 프로덕트에 대해 이야기 나눠보세요.
                  </>
                ) : (
                  <>
                    Let's Build Extraordinary Products Together.
                  </>
                )}
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-8">
                {lang === 'ko'
                  ? '시니어 및 리드 디자인 엔지니어 포지션, 대규모 디자인 시스템 구축, 인터랙션 아키텍처 컨설팅에 열려 있습니다.'
                  : 'Open to Lead / Senior Staff Design Engineering roles, design system migrations, and high-impact web architecture consulting.'}
              </p>

              {/* Direct Email Card */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-1">
                    {lang === 'ko' ? '직접 이메일 연락' : 'Direct Email Address'}
                  </div>
                  <a 
                    href={`mailto:${PORTFOLIO_DATA.profile.email}`} 
                    className="text-base sm:text-lg font-mono font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {PORTFOLIO_DATA.profile.email}
                  </a>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-lg transition-all self-start sm:self-auto shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{lang === 'ko' ? '복사 완료' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>{lang === 'ko' ? '주소 복사' : 'Copy Email'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === 'ko' ? '경력기술서 전문 열람' : 'Open Master Resume'}</span>
                </button>

                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Collaboration%20Inquiry%20from%20Portfolio`}
                  className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{lang === 'ko' ? '메일 클라이언트 열기' : 'Send via Mail Client'}</span>
                </a>
              </div>
            </div>

            {/* Unboxed Metadata Footer */}
            <div className="pt-8 mt-8 border-t border-white/[0.06] flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
              <span>{PORTFOLIO_DATA.profile.location[lang]}</span>
              <span className="text-slate-600">·</span>
              <span className="text-emerald-400">{PORTFOLIO_DATA.profile.status[lang]}</span>
              <span className="text-slate-600">·</span>
              <span>Response within 24 hours</span>
            </div>
          </div>

          {/* Right Column: Working Interactive Inquiry Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#141721] border border-white/[0.08] shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2">
              {lang === 'ko' ? '빠른 메시지 남기기' : 'Send a Direct Message'}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {lang === 'ko' ? '프로젝트 의뢰, 채용 제안, 기술 자문 등 편하게 남겨주세요.' : 'Inquire about roles, architecture advisory, or project partnerships.'}
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 text-center space-y-3">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">
                  {lang === 'ko' ? '메시지가 성공적으로 전달되었습니다!' : 'Message Sent Successfully!'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'ko' 
                    ? '확인 후 기재해주신 이메일로 빠르게 회신드리겠습니다.' 
                    : 'Thank you for reaching out. I will respond to your email promptly.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.06] rounded-lg transition-colors"
                >
                  {lang === 'ko' ? '새 메시지 작성' : 'Send Another'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    {lang === 'ko' ? '성함 / 담당자명 *' : 'Your Name / Organization *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'ko' ? '홍길동 (Acme Inc.)' : 'Jane Doe (Acme Corp)'}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    {lang === 'ko' ? '회신받을 이메일 *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    {lang === 'ko' ? '문의 내용 *' : 'Inquiry Details *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={lang === 'ko' ? '프로젝트 일정, 포지션 설명, 요구 기술 스택 등을 적어주세요.' : 'Project timeline, role specifications, or questions...'}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? (lang === 'ko' ? '전송 중...' : 'Sending...') : (lang === 'ko' ? '문의 메시지 전송' : 'Send Inquiry')}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
