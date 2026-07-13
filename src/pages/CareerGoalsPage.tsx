import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { careerGoals } from '../data/courseData';

export default function CareerGoalsPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const handleContinue = () => {
    if (selected) {
      localStorage.setItem('careerGoal', selected);
      navigate('/skill-level');
    }
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1.5 rounded-full bg-cyan-500"></div>
            <div className="w-12 h-1.5 rounded-full bg-white/20"></div>
            <div className="w-12 h-1.5 rounded-full bg-white/20"></div>
          </div>
          <p className="text-center text-white/50 text-sm">Step 1 of 3</p>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Aapka <span className="text-gradient">Goal</span> Kya Hai?
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Hum aapke goal ke hisaab se perfect course recommend karenge
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {careerGoals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setSelected(goal.id)}
              className={`selection-card text-left ${selected === goal.id ? 'selected' : ''}`}
            >
              <div className="relative z-10">
                <div className="text-4xl mb-4">{goal.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{goal.title}</h3>
                <p className="text-white/50 text-sm">{goal.description}</p>
                
                {/* Selection indicator */}
                {selected === goal.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
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
