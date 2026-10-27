import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, ChevronRight, Eye } from 'lucide-react';

interface ProjectsSectionProps {
  lang: 'ko' | 'en';
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { ko: '전체 프로젝트', en: 'All Projects' } },
    { id: 'design-system', label: { ko: '디자인 시스템', en: 'Design Systems' } },
    { id: 'creative-tech', label: { ko: '크리에이티브 인터랙션', en: 'Creative Tech' } },
    { id: 'web-app', label: { ko: '웹 애플리케이션', en: 'Web Applications' } }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              {lang === 'ko' ? '01. 엄선된 프로덕트 아카이브' : '01. Curated Production Archive'}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              {lang === 'ko' ? '주요 설계 및 엔지니어링 프로젝트' : 'Selected Works & Case Studies'}
            </h2>
          </div>

          {/* Interactive Filter Tabs (Segmented functional controls) */}
          <div className="flex items-center gap-1 p-1 bg-white/[0.03] border border-white/[0.08] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (Bento Grid Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const isFirst = index === 0 && activeCategory === 'all';
            const colSpanClass = isFirst ? 'lg:col-span-12' : 'lg:col-span-6';

            return (
              <div
                key={project.id}
                className={`${colSpanClass} group relative flex flex-col justify-between rounded-2xl bg-[#141721] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/5`}
              >
                {/* Media Image Showcase with Scrim */}
                <div className={`relative overflow-hidden ${isFirst ? 'h-72 sm:h-96' : 'h-64 sm:h-72'} bg-[#0e111a]`}>
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-[#141721] via-transparent to-black/20" 
                    aria-hidden="true" 
                  />

                  {/* Top-Right Quick Inspection Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/90 bg-black/60 hover:bg-black/90 backdrop-blur-md rounded-lg border border-white/10 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-blue-400" />
                      <span>{lang === 'ko' ? '케이스 스터디' : 'Case Study'}</span>
                    </button>
                  </div>

                  {/* Bottom Image Overlay Strip */}
                  <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span>{project.period}</span>
                    <span className="text-emerald-400 font-medium">{project.highlightMetric[lang]}</span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Unboxed Metadata Line (Zero-Pill Discipline!) */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                      <span className="text-blue-400 font-medium">{project.categoryLabel[lang]}</span>
                      <span className="text-slate-600">·</span>
                      <span>{project.role[lang]}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title[lang]}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {project.subtitle[lang]}
                    </p>

                    {/* Key Technical Overview Excerpt */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-2">
                      {project.overview[lang]}
                    </p>
                  </div>

                  <div>
                    {/* Tags rendered as clean unboxed text with typographic separators */}
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs font-mono text-slate-400 pt-5 border-t border-white/[0.08] mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <React.Fragment key={tag}>
                          <span className="hover:text-slate-200 transition-colors">{tag}</span>
                          {tIdx < project.tags.length - 1 && <span className="text-slate-600">/</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Action Footers */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-200"
                      >
                        <span>{lang === 'ko' ? '아키텍처 및 상세 성과 보기' : 'Explore Architecture & Impact'}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
                          aria-label="View project details"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
