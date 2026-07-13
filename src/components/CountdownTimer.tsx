import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
  onComplete?: () => void;
}

export default function CountdownTimer({ targetDate, onComplete }: CountdownTimerProps) {
  // Default to 24 hours from now if no target date
  const [target] = useState(() => {
    if (targetDate) return targetDate;
    const saved = localStorage.getItem('countdownTarget');
    if (saved) return new Date(saved);
    const newTarget = new Date(Date.now() + 24 * 60 * 60 * 1000);
    localStorage.setItem('countdownTarget', newTarget.toISOString());
    return newTarget;
  });

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = target.getTime() - Date.now();
      
      if (difference <= 0) {
        onComplete?.();
        return { hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [target, onComplete]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      <div className="text-center">
        <div className="countdown-digit text-xl sm:text-3xl font-mono">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-white/40 text-xs mt-1">Hours</div>
      </div>
      <span className="text-orange-400 text-2xl font-bold">:</span>
      <div className="text-center">
        <div className="countdown-digit text-xl sm:text-3xl font-mono">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-white/40 text-xs mt-1">Minutes</div>
      </div>
      <span className="text-orange-400 text-2xl font-bold">:</span>
      <div className="text-center">
        <div className="countdown-digit text-xl sm:text-3xl font-mono slot-glow">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-white/40 text-xs mt-1">Seconds</div>
      </div>
    </div>
  );
}
