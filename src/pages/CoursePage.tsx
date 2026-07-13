import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { courseData, courseTracks } from '../data/courseData';
import { aiTools } from '../data/aiTools';
import AchievementSystem from '../components/AchievementSystem';
import StreakCounter from '../components/StreakCounter';

export default function CoursePage() {
  const navigate = useNavigate();
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  
  const userName = localStorage.getItem('userName') || 'Student';
  const courseUnlocked = localStorage.getItem('courseUnlocked') === 'true';
  const selectedCourseId = localStorage.getItem('selectedCourse') || 'ai-mastery';
  const selectedCourse = courseTracks.find(c => c.id === selectedCourseId) || courseTracks[0];

  useEffect(() => {
    if (!courseUnlocked) {
      navigate('/payment');
      return;
    }
    
    const saved = localStorage.getItem('completedDays');
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }
  }, [courseUnlocked, navigate]);

  const progress = (completedDays.length / courseData.length) * 100;
  const allCompleted = completedDays.length === courseData.length;
  const nextDay = completedDays.length + 1;

  const getToolsForDay = (dayNumber: number) => {
    return aiTools.filter(tool => tool.dayUsed.includes(dayNumber));
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Welcome back, <span className="text-gradient">{userName.split(' ')[0]}</span>! 👋
              </h1>
              <p className="text-white/50">
                {selectedCourse.title} • {completedDays.length}/{courseData.length} Days Completed
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {allCompleted && (
                <button
                  onClick={() => navigate('/certificate')}
                  className="glow-btn px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2"
                >
                  <span>🎓</span>
                  Get Certificate
                </button>
              )}
              {!allCompleted && (
                <button
                  onClick={() => navigate(`/course/day/${nextDay}`)}
                  className="mega-cta-btn px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Continue Day {nextDay}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-white/50 mb-2">
              <span>Course Progress</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-4 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full progress-glow transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StreakCounter />
          <AchievementSystem completedDays={completedDays} />
        </div>

        {/* Days Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>📚</span> Course Modules
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courseData.map((day, index) => {
              const isCompleted = completedDays.includes(day.day_number);
              const isLocked = index > 0 && !completedDays.includes(index);
              const isNext = day.day_number === nextDay;
              const toolsUsed = getToolsForDay(day.day_number);

              return (
                <button
                  key={day.day_number}
                  onClick={() => !isLocked && navigate(`/course/day/${day.day_number}`)}
                  disabled={isLocked}
                  className={`glass-card rounded-2xl p-6 text-left transition-all ${
                    isLocked 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:scale-[1.02] cursor-pointer'
                  } ${isNext ? 'ring-2 ring-cyan-500/50 border-cyan-500/30' : ''}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg ${
                      isCompleted 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                        : isLocked 
                          ? 'bg-white/10' 
                          : 'bg-gradient-to-br from-cyan-500 to-purple-600'
                    }`}>
                      {isCompleted ? (
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : isLocked ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      ) : (
                        day.day_number
                      )}
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      {isNext && !isCompleted && (
                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold animate-pulse">
                          Continue →
                        </span>
                      )}
                      {isCompleted && (
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                          ✓ Done
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-white/50 text-xs mb-1">Day {day.day_number}</div>
                  <h3 className="text-white font-semibold mb-2 line-clamp-2">{day.title}</h3>
                  <p className="text-white/40 text-sm line-clamp-2 mb-4">{day.intro}</p>

                  {/* Tools Used */}
                  {toolsUsed.length > 0 && (
                    <div className="flex items-center gap-1 mb-4">
                      {toolsUsed.slice(0, 4).map((tool) => (
                        <div 
                          key={tool.id}
                          className="w-6 h-6 rounded-md bg-white/10 p-1 tooltip"
                          data-tooltip={tool.name}
                        >
                          <img 
                            src={tool.logo} 
                            alt={tool.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      ))}
                      {toolsUsed.length > 4 && (
                        <span className="text-white/40 text-xs">+{toolsUsed.length - 4}</span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/40">{day.duration}</span>
                    <span className="text-cyan-400">{day.sections.length} sections</span>
                  </div>

                  {/* Asset Preview */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">🎁</span>
                      <span className="text-white/50 text-xs line-clamp-1">{day.asset_name}</span>
                    </div>
                    <div className="text-yellow-400 text-xs font-semibold mt-1">{day.asset_value}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Completion Banner */}
        {allCompleted && (
          <div className="glass-card rounded-3xl p-8 text-center border-green-500/30 holographic">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-white mb-2">Course Completed!</h2>
            <p className="text-white/50 mb-6">
              Congratulations! Aapne successfully poora course complete kar liya hai.
            </p>
            <button
              onClick={() => navigate('/certificate')}
              className="mega-cta-btn px-8 py-4 rounded-xl font-semibold text-white"
            >
              <span className="relative z-10 flex items-center gap-2">
                🎓 Download Your Certificate
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
