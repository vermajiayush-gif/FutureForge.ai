import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { skillLevels } from '../data/courseData';

export default function SkillLevelPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const handleContinue = () => {
    if (selected) {
      localStorage.setItem('skillLevel', selected);
      navigate('/course-selection');
    }
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1.5 rounded-full bg-cyan-500"></div>
            <div className="w-12 h-1.5 rounded-full bg-cyan-500"></div>
            <div className="w-12 h-1.5 rounded-full bg-white/20"></div>
          </div>
          <p className="text-center text-white/50 text-sm">Step 2 of 3</p>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Aapka <span className="text-gradient">Experience</span> Level?
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Isse hum content difficulty customize karenge
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-12">
          {skillLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelected(level.id)}
              className={`selection-card w-full text-left flex items-center gap-6 ${selected === level.id ? 'selected' : ''}`}
            >
              <div className="relative z-10 flex items-center gap-6 w-full">
                <div className="text-5xl flex-shrink-0">{level.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{level.title}</h3>
                  <p className="text-white/50 text-sm mb-2">{level.description}</p>
                  <p className="text-cyan-400 text-xs">{level.recommendation}</p>
                </div>
                
                {/* Selection indicator */}
                <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                  selected === level.id 
                    ? 'border-cyan-500 bg-cyan-500' 
                    : 'border-white/30'
                }`}>
                  {selected === level.id && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/career-goals')}
            className="px-6 py-3 rounded-xl text-white/50 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <button
            onClick={handleContinue}
            disabled={!selected}
            className={`glow-btn px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-2 transition-all ${
              !selected ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Continue
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
