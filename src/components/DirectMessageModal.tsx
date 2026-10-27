import React, { useState, useEffect } from 'react';
import { YUJIN_PORTFOLIO } from '../data/portfolioData';
import { X, Send, Check, Mail, Copy } from 'lucide-react';

interface DirectMessageModalProps {
  isOpen: boolean;
  lang: 'ko' | 'en';
  onClose: () => void;
}

export const DirectMessageModal: React.FC<DirectMessageModalProps> = ({
  isOpen,
  lang,
  onClose
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const handleCopy = () => {
    navigator.clipboard.writeText(YUJIN_PORTFOLIO.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              Say hi to {YUJIN_PORTFOLIO.profile.name[lang]}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {lang === 'ko' ? '글로벌 CX 및 파트너 교육 협업 문의' : 'Direct inquiry & collaboration'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Email Copy Banner */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Mail className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="font-semibold text-slate-900">{YUJIN_PORTFOLIO.profile.email}</span>
          </div>
          <button
            onClick={handleCopy}
            className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-semibold transition-colors"
          >
            {copied ? (lang === 'ko' ? '복사됨' : 'Copied!') : (lang === 'ko' ? '복사' : 'Copy')}
          </button>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
            <Check className="w-8 h-8 text-emerald-600 mx-auto" />
            <h4 className="text-base font-bold text-emerald-950">
              {lang === 'ko' ? '메시지가 성공적으로 전달되었습니다!' : 'Message Sent!'}
            </h4>
            <p className="text-xs text-emerald-800">
              {lang === 'ko' ? '확인 후 기재해주신 메일로 신속히 답변드리겠습니다.' : 'Thank you. I will reply to your email promptly.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-600 mb-1">
                {lang === 'ko' ? '보내시는 분 성함 *' : 'Your Name *'}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={lang === 'ko' ? '홍길동 (채용 담당자 / 파트너사)' : 'Jane Doe (Hiring Manager / Partner)'}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-600 mb-1">
                {lang === 'ko' ? '회신받으실 이메일 *' : 'Your Email *'}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@company.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-600 mb-1">
                {lang === 'ko' ? '문의 내용 *' : 'Message *'}
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={lang === 'ko' ? '포지션 제안, 교육 일정 문의, 미팅 일정 등을 적어주세요.' : 'Job opportunity, training inquiry, or coffee chat request...'}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{lang === 'ko' ? '메시지 전송하기' : 'Send Message'}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
