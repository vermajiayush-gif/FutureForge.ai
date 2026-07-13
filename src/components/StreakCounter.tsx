import { useState, useEffect } from 'react';

export default function StreakCounter() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedStreak = localStorage.getItem('learningStreak');
    const savedLastVisit = localStorage.getItem('lastLearningVisit');
    
    if (savedStreak && savedLastVisit) {
      const lastVisitDate = new Date(savedLastVisit);
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - lastVisitDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Consecutive day - maintain streak
        setStreak(parseInt(savedStreak));
      } else if (diffDays === 0) {
        // Same day - maintain streak
        setStreak(parseInt(savedStreak));
      } else {
        // Streak broken
        setStreak(1);
        localStorage.setItem('learningStreak', '1');
      }
    } else {
      // First visit
      setStreak(1);
      localStorage.setItem('learningStreak', '1');
    }

    // Update last visit
    localStorage.setItem('lastLearningVisit', new Date().toISOString());
  }, []);

  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white/50 text-sm mb-1">Learning Streak</h3>
          <div className="flex items-center gap-2">
            <span className={`text-4xl font-bold text-orange-400 ${streak >= 3 ? 'streak-fire' : ''}`}>
              {streak}
            </span>
            <span className="text-2xl">{streak >= 7 ? '🔥🔥' : streak >= 3 ? '🔥' : '📅'}</span>
          </div>
          <p className="text-white/40 text-xs mt-1">
            {streak >= 7 ? 'Incredible! Keep it up!' : streak >= 3 ? 'You\'re on fire!' : 'Build your streak!'}
          </p>
        </div>

        {/* Streak Calendar */}
        <div className="flex gap-1">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-sm ${
                i < streak % 7
                  ? 'bg-gradient-to-br from-orange-400 to-red-500'
                  : 'bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Streak Milestones */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-white/40 text-xs mb-2">Next Milestone</p>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all"
              style={{ width: `${(streak % 7) / 7 * 100}%` }}
            />
          </div>
          <span className="text-white/60 text-xs">{7 - (streak % 7)} days to 🏆</span>
        </div>
      </div>
    </div>
  );
}
