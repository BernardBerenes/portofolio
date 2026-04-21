import { useState } from 'react';
import { workExperience, organizationExperience } from '../data/portfolio-data';
import type { Experience as ExperienceType } from '../types';

type Tab = 'work' | 'organization';

function TimelineItem({ item, index }: { item: ExperienceType; index: number }) {
  return (
    <div
      className="relative pl-8 pb-10 last:pb-0 group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Vertical line */}
      <div className="absolute left-[11px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-primary-100 group-last:hidden" />

      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-[3px] border-primary-500 shadow-md shadow-primary-500/20 group-hover:scale-125 transition-transform duration-200" />

      {/* Card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-primary-100 hover:-translate-y-0.5 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="text-lg font-bold text-gray-900">{item.role}</h3>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full whitespace-nowrap">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {item.startDate} — {item.endDate}
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <span className="inline-flex items-center gap-1 font-medium">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {item.company}
          </span>
          <span className="inline-flex items-center gap-1">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {item.location}
          </span>
        </div>

        <ul className="text-gray-600 text-sm leading-relaxed list-disc list-outside ml-4 space-y-1">
          {item.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>('work');

  const experiences = activeTab === 'work' ? workExperience : organizationExperience;

  return (
    <section id="experience" className="py-20 sm:py-28 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Experience & Milestones
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            A timeline of my professional growth and organizational leadership.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-1">
            <button
              id="tab-work"
              onClick={() => setActiveTab('work')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'work'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Work
              </span>
            </button>
            <button
              id="tab-organization"
              onClick={() => setActiveTab('organization')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'organization'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Organization
              </span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, i) => (
            <TimelineItem key={`${activeTab}-${i}`} item={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
