import { useState, useEffect } from 'react';
import { achievements } from '../data/aiTools';

interface AchievementSystemProps {
  completedDays: number[];
}

export default function AchievementSystem({ completedDays }: AchievementSystemProps) {
  const [totalXP, setTotalXP] = useState(0);
  const [level, setLevel] = useState(1);
  const [showUnlock, setShowUnlock] = useState<string | null>(null);

  const earnedAchievements = achievements.filter(a => a.condition(completedDays));

  useEffect(() => {
    const xp = earnedAchievements.reduce((sum, a) => sum + a.xp, 0);
    setTotalXP(xp);
    setLevel(Math.floor(xp / 500) + 1);
  }, [completedDays, earnedAchievements]);

  const currentLevelXP = totalXP % 500;
  const xpProgress = (currentLevelXP / 500) * 100;

  return (
    <div className="glass-card rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span>🏆</span> Achievements
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-yellow-400 font-bold">{totalXP} XP</span>
          <span className="px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold">
            Level {level}
          </span>
        </div>
      </div>

      {/* XP Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-white/50 mb-2">
          <span>Level {level}</span>
          <span>{currentLevelXP}/{500} XP to Level {level + 1}</span>
        </div>
        <div className="xp-bar h-3">
          <div 
            className="xp-bar-fill h-full"
            style={{ width: `${xpProgress}%` }}
          />
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="grid grid-cols-4 gap-3">
        {achievements.map((achievement) => {
          const isEarned = achievement.condition(completedDays);
          
          return (
            <div
              key={achievement.id}
              className={`achievement-badge rounded-xl p-3 text-center cursor-pointer transition-all hover:scale-105 ${
                isEarned ? 'earned' : 'opacity-50'
              }`}
              onClick={() => isEarned && setShowUnlock(achievement.id)}
              title={achievement.description}
            >
              <div className={`text-2xl mb-1 ${isEarned ? '' : 'grayscale'}`}>
                {achievement.icon}
              </div>
              <p className="text-white text-xs font-semibold line-clamp-1">{achievement.title}</p>
              <p className="text-yellow-400 text-xs">+{achievement.xp} XP</p>
            </div>
          );
        })}
      </div>

      {/* Unlock Animation */}
      {showUnlock && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowUnlock(null)}
        >
          <div className="achievement-badge earned rounded-3xl p-8 text-center max-w-sm mx-4 animate-bounce">
            <div className="text-6xl mb-4">
              {achievements.find(a => a.id === showUnlock)?.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Achievement Unlocked!
            </h3>
            <p className="text-white/70 mb-2">
              {achievements.find(a => a.id === showUnlock)?.title}
            </p>
            <p className="text-yellow-400 font-bold">
              +{achievements.find(a => a.id === showUnlock)?.xp} XP
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
