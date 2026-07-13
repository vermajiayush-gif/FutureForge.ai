import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courseData } from '../data/courseData';

export default function DayPage() {
  const { dayNumber } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>('');
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const dayNum = parseInt(dayNumber || '1');
  const day = courseData.find(d => d.day_number === dayNum);
  const courseUnlocked = localStorage.getItem('courseUnlocked') === 'true';

  useEffect(() => {
    if (!courseUnlocked) {
      navigate('/payment');
      return;
    }

    if (day) {
      setActiveSection(day.sections[0]?.id || '');
      const saved = localStorage.getItem(`day${dayNum}Sections`);
      if (saved) {
        setCompletedSections(JSON.parse(saved));
      }
    }
  }, [day, dayNum, courseUnlocked, navigate]);

  if (!day) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Day not found</div>
      </div>
    );
  }

  const markSectionComplete = (sectionId: string) => {
    if (!completedSections.includes(sectionId)) {
      const newCompleted = [...completedSections, sectionId];
      setCompletedSections(newCompleted);
      localStorage.setItem(`day${dayNum}Sections`, JSON.stringify(newCompleted));
    }
  };

  const markDayComplete = () => {
    const savedDays = localStorage.getItem('completedDays');
    const completedDays = savedDays ? JSON.parse(savedDays) : [];
    if (!completedDays.includes(dayNum)) {
      completedDays.push(dayNum);
      localStorage.setItem('completedDays', JSON.stringify(completedDays));
    }
    
    if (dayNum < courseData.length) {
      navigate(`/course/day/${dayNum + 1}`);
    } else {
      navigate('/certificate');
    }
  };

  const allSectionsCompleted = completedSections.length === day.sections.length;
  const progress = (completedSections.length / day.sections.length) * 100;

  const copyCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatContent = (content: string) => {
    const parts = content.split(/(\*\*Key Points:\*\*)/);
    
    return parts.map((part, index) => {
      if (part === '**Key Points:**') {
        return (
          <div key={index} className="mt-6 mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 text-sm font-semibold">
              📌 Key Points
            </span>
          </div>
        );
      }
      
      const lines = part.split('\n').map((line, lineIndex) => {
        if (line.startsWith('- ')) {
          return (
            <li key={lineIndex} className="flex items-start gap-3 text-white/70 leading-relaxed mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0"></span>
              <span>{line.substring(2)}</span>
            </li>
          );
        }
        if (line.trim()) {
          return (
            <p key={lineIndex} className="text-white/70 leading-relaxed mb-4">
              {line}
            </p>
          );
        }
        return null;
      });

      return <div key={index}>{lines}</div>;
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[#050a14]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/course')}
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Back to Course</span>
            </button>

            <div className="flex items-center gap-4">
              <div className="text-sm text-white/50">
                Day {dayNum} of {courseData.length}
              </div>
              <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="sticky top-24 glass-card rounded-2xl p-4">
              {/* Day Info */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    {dayNum}
                  </div>
                  <div>
                    <div className="text-white/50 text-xs">Day {dayNum}</div>
                    <div className="text-white font-semibold text-sm">{day.duration}</div>
                  </div>
                </div>
                <h2 className="text-white font-bold">{day.title}</h2>
              </div>

              {/* Sections Nav */}
              <div className="space-y-1">
                {day.sections.map((section, index) => {
                  const isCompleted = completedSections.includes(section.id);
                  const isActive = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id);
                        document.getElementById(`section-${section.id}`)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                        isActive
                          ? 'bg-cyan-500/20 text-white'
                          : 'text-white/50 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs ${
                        isCompleted
                          ? 'bg-green-500 text-white'
                          : 'bg-white/10 text-white/50'
                      }`}>
                        {isCompleted ? '✓' : index + 1}
                      </span>
                      <span className="line-clamp-1">{section.title.replace(/^\d+\.\s*/, '')}</span>
                    </button>
                  );
                })}
              </div>

              {/* Asset Card */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎁</span>
                  <span className="text-yellow-400 text-xs font-semibold">TODAY'S ASSET</span>
                </div>
                <p className="text-white text-sm font-semibold mb-1">{day.asset_name}</p>
                <p className="text-yellow-400 font-bold">{day.asset_value}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            {/* Intro */}
            <div className="glass-card rounded-2xl p-6">
              <p className="text-white/70 leading-relaxed">{day.intro}</p>
            </div>

            {/* Sections */}
            {day.sections.map((section) => {
              const isCompleted = completedSections.includes(section.id);

              return (
                <div
                  key={section.id}
                  id={`section-${section.id}`}
                  className="glass-card rounded-2xl overflow-hidden scroll-mt-24"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-xl font-bold text-white">{section.title}</h3>
                      {isCompleted && (
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                          ✓ Completed
                        </span>
                      )}
                    </div>

                    <div className="prose prose-invert max-w-none">
                      {formatContent(section.content)}
                    </div>

                    {section.codeBlock && (
                      <div className="mt-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-cyan-400 font-medium flex items-center gap-2">
                            💻 Code / Template
                          </span>
                          <button
                            onClick={() => copyCode(section.codeBlock!)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white/70 text-sm hover:bg-white/20 transition-colors"
                          >
                            {copied ? '✓ Copied!' : '📋 Copy'}
                          </button>
                        </div>
                        <pre className="bg-black/50 rounded-xl p-5 overflow-x-auto border border-white/10">
                          <code className="text-sm text-white/80 whitespace-pre-wrap font-mono">
                            {section.codeBlock}
                          </code>
                        </pre>
                      </div>
                    )}

                    {!isCompleted && (
                      <button
                        onClick={() => markSectionComplete(section.id)}
                        className="mt-6 w-full py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Mark as Complete
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Day Completion */}
            {allSectionsCompleted && (
              <div className="glass-card rounded-2xl p-8 text-center border-green-500/30">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">Day {dayNum} Complete!</h3>
                <p className="text-white/50 mb-6">
                  Great job! You've completed all sections for today.
                </p>
                <button
                  onClick={markDayComplete}
                  className="mega-cta-btn px-8 py-4 rounded-xl font-semibold text-white"
                >
                  <span className="relative z-10">
                    {dayNum < courseData.length ? `Continue to Day ${dayNum + 1}` : 'Get Your Certificate'}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
