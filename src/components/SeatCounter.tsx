import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, TrendingDown } from 'lucide-react';

function useMidnightCountdown() {
  const getMidnight = useCallback(() => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight.getTime() - now.getTime();
    return { h: Math.floor(diff / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) };
  }, []);
  const [time, setTime] = useState(getMidnight);
  useEffect(() => {
    const i = setInterval(() => setTime(getMidnight()), 1000);
    return () => clearInterval(i);
  }, [getMidnight]);
  return time;
}

export default function SeatCounter() {
  const [seats, setSeats] = useState(7);
  const [viewers, setViewers] = useState(147);
  const midnight = useMidnightCountdown();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const ref = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    ref.current = setInterval(() => {
      setSeats(p => p <= 3 ? p : Math.random() > 0.7 ? p - 1 : p);
      setViewers(p => Math.max(100, Math.min(200, p + Math.floor(Math.random() * 7) - 3)));
    }, 12000);
    return () => clearInterval(ref.current);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
      <div className="glass-card rounded-xl px-4 sm:px-5 py-3 flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20">
          <TrendingDown className="w-4 h-4 text-red-400" />
        </div>
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="slot-glow text-xl sm:text-2xl font-bold font-mono text-orange-400">{seats}</span>
            <span className="text-xs text-white/40">slots left</span>
          </div>
          <div className="text-[10px] text-white/30 font-mono">JULY 2026 COHORT</div>
        </div>
      </div>

      <div className="glass-card rounded-xl px-4 sm:px-5 py-3 flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <Users className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
            <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">{viewers}</span>
            <span className="text-xs text-white/40">viewing</span>
          </div>
          <div className="text-[10px] text-white/30 font-mono">LIVE RIGHT NOW</div>
        </div>
      </div>

      <div className="glass-card rounded-xl px-4 sm:px-5 py-3 flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20">
          <Clock className="w-4 h-4 text-violet-400" />
        </div>
        <div>
          <div className="counter-glow text-xl sm:text-2xl font-bold font-mono text-violet-400">{pad(midnight.h)}:{pad(midnight.m)}:{pad(midnight.s)}</div>
          <div className="text-[10px] text-white/30 font-mono">₹15K PRICE HIKE</div>
        </div>
      </div>
    </motion.div>
  );
}
