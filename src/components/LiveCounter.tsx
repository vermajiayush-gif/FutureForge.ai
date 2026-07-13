import { useState, useEffect } from 'react';

interface LiveCounterProps {
  baseCount: number;
  incrementRange?: [number, number];
  intervalMs?: number;
  label: string;
  icon?: string;
}

export default function LiveCounter({ 
  baseCount, 
  incrementRange = [1, 3], 
  intervalMs = 5000,
  label,
  icon = '👥'
}: LiveCounterProps) {
  const [count, setCount] = useState(baseCount);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const increment = Math.floor(
        Math.random() * (incrementRange[1] - incrementRange[0] + 1) + incrementRange[0]
      );
      setCount(prev => prev + increment);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [incrementRange, intervalMs]);

  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
        <span className="text-xl">{icon}</span>
      </div>
      <div>
        <div className={`text-xl font-bold text-white counter-glow ${isAnimating ? 'live-counter' : ''}`}>
          {count.toLocaleString()}+
        </div>
        <div className="text-white/50 text-xs flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          {label}
        </div>
      </div>
    </div>
  );
}
