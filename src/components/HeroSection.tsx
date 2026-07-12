import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowRight, Shield, Star, Clock, TrendingUp } from 'lucide-react';
import FloatingIcons from './FloatingIcons';
import SeatCounter from './SeatCounter';

function useMidnightCountdown() {
  const getMidnight = useCallback(() => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight.getTime() - now.getTime();
    return { h: Math.floor(diff / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) };
  }, []);
  const [time, setTime] = useState(getMidnight);
  useEffect(() => { const i = setInterval(() => setTime(getMidnight()), 1000); return () => clearInterval(i); }, [getMidnight]);
  return time;
}

const companies = [
  { name: 'Google', letter: 'G', color: '#4285F4' },
  { name: 'McKinsey', letter: 'M', color: '#00A3E0' },
  { name: 'Razorpay', letter: 'R', color: '#3395FF' },
  { name: 'Stripe', letter: 'S', color: '#635BFF' },
];

export default function HeroSection() {
  const midnight = useMidnightCountdown();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16">
      {/* Trust Badge */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6 sm:mb-8">
        <div className="glass-card rounded-full px-4 py-1.5 flex items-center gap-2 text-xs sm:text-sm">
          <span className="flex items-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />)}
          </span>
          <span className="text-white/50">|</span>
          <span className="text-white/60">Trusted by Leaders at <span className="text-white font-semibold">Google</span>, <span className="text-white font-semibold">McKinsey</span>, <span className="text-white font-semibold">Razorpay</span> & <span className="text-white font-semibold">Stripe</span></span>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-center max-w-5xl mx-auto mb-6 sm:mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
          <span className="text-white">Build AI-Powered</span><br />
          <span className="text-gradient">Automation Systems</span><br />
          <span className="text-white">That Print Revenue</span>
        </h1>
      </motion.div>

      {/* Subheadline */}
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-center text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
        Master <span className="text-cyan-400 font-medium">Claude</span>, <span className="text-emerald-400 font-medium">OpenAI</span> & <span className="text-violet-400 font-medium">Make.com</span> to architect autonomous workflows that generate income while you sleep.
      </motion.p>

      {/* CTA Block */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="flex flex-col items-center gap-4 mb-10 sm:mb-14 w-full max-w-2xl">
        <div className="relative w-full max-w-xl" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <a href="#secure" className="mega-cta-btn relative flex items-center justify-center gap-2.5 sm:gap-3 rounded-2xl px-5 sm:px-8 py-4 sm:py-5 w-full group">
            <Flame className="w-5 h-5 text-white/90 flex-shrink-0" strokeWidth={2.5} />
            <span className="text-sm sm:text-base md:text-lg font-black tracking-wide text-white uppercase whitespace-nowrap">🔥 Secure Your Acceleration Slot Now</span>
            <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1.5 transition-transform flex-shrink-0" strokeWidth={2.5} />
          </a>
          {hovered && <div className="absolute inset-0 -m-1 rounded-2xl border border-orange-400/20 ring-expand pointer-events-none" />}
        </div>

        {/* Urgency Line */}
        <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center">
          <div className="flex items-center gap-1.5 text-red-400/90">
            <TrendingUp className="w-3.5 h-3.5" />
            <span className="text-xs sm:text-sm font-bold">Only <span className="text-orange-400 font-black">7</span> Cohort Slots for July 2026</span>
          </div>
          <span className="hidden sm:inline text-white/15">·</span>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm">
            <span className="text-amber-400/80 font-semibold">Price ↑ ₹15,000 in</span>
            <span className="font-mono font-bold text-amber-400 tabular-nums"><Clock className="w-3 h-3 inline mr-0.5" />{pad(midnight.h)}:{pad(midnight.m)}:{pad(midnight.s)}</span>
          </div>
        </div>

        <a href="#system" className="glass-card rounded-xl px-8 py-3.5 text-sm font-medium text-white/60 hover:text-white flex items-center gap-2 transition-colors">
          <Shield className="w-4 h-4" />See The System First
        </a>
      </motion.div>

      {/* Floating Icons */}
      <div className="mb-10 sm:mb-14"><FloatingIcons /></div>

      {/* Seat Counter */}
      <SeatCounter />

      {/* Social Proof */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }} className="mt-12 sm:mt-16 flex flex-col items-center gap-4">
        <span className="text-[11px] font-mono text-white/25 uppercase tracking-widest">Trusted by leaders at</span>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {companies.map((c) => (
            <div key={c.name} className="flex items-center gap-2 group">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center border border-white/[0.06] bg-white/[0.03]">
                <span className="text-xs sm:text-sm font-black" style={{ color: c.color, opacity: 0.6 }}>{c.letter}</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white/20 group-hover:text-white/35 transition-colors">{c.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
