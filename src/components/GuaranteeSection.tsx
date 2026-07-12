import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, Flame, ArrowRight, Clock, TrendingUp, Lock, Sparkles, ShieldCheck, AlertTriangle } from 'lucide-react';

const guarantees = [
  'Full curriculum access for life — including all future updates',
  'Private community of 2,400+ AI builders & automation experts',
  'Weekly live implementation calls with real-time feedback',
  '30-day money-back guarantee — no questions asked',
  'Direct access to instructor for personalized guidance',
  'Certificate of completion recognized by 150+ agencies',
];

function useMidnight() {
  const get = useCallback(() => {
    const now = new Date(), mid = new Date(now);
    mid.setHours(24, 0, 0, 0);
    const d = mid.getTime() - now.getTime();
    return { h: Math.floor(d/3600000), m: Math.floor((d%3600000)/60000), s: Math.floor((d%60000)/1000) };
  }, []);
  const [t, setT] = useState(get);
  useEffect(() => { const i = setInterval(() => setT(get()), 1000); return () => clearInterval(i); }, [get]);
  return t;
}

export default function GuaranteeSection() {
  const mid = useMidnight();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const [hovered, setHovered] = useState(false);

  return (
    <section id="guarantee" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden border border-amber-500/20">
          {/* Gold pulse border effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-amber-400/20 animate-pulse pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-orange-500/[0.03]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-xs font-bold text-red-400">🚨 THE 100% ABSOLUTE COMPETENCY GUARANTEE</span>
            </div>

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6">
              <Shield className="w-8 h-8 text-amber-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              🛡️ Risk <span className="text-gradient">Nothing.</span>
            </h2>
            <p className="text-white/40 text-base sm:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
              Agar 10 din tak humare frameworks ko follow karne ke baad aap apne daily workflow ko kam se kam <span className="text-amber-400 font-bold">5x accelerate</span> nahi kar paate hain, toh ek single email drop kijiye.
            </p>
            <p className="text-white/60 text-base font-semibold mb-10">
              Hum aapki investment ka <span className="text-emerald-400">100% bina kisi sawaal ke refund</span> karenge. Aap saare deliverables aur cheat sheets apne paas rakh sakte hain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto mb-10">
              {guarantees.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/60">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-4">
              <div className="relative w-full max-w-md" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <a href="#secure" className="mega-cta-btn relative flex items-center justify-center gap-2.5 rounded-2xl px-6 sm:px-10 py-4 sm:py-5 w-full group">
                  <Flame className="w-5 h-5 text-white/90" strokeWidth={2.5} />
                  <span className="text-sm sm:text-base md:text-lg font-black text-white uppercase">🔥 Secure Your Slot Now</span>
                  <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1.5 transition-transform" strokeWidth={2.5} />
                </a>
                {hovered && <div className="absolute inset-0 -m-1 rounded-2xl border border-orange-400/20 ring-expand pointer-events-none" />}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
                <div className="flex items-center gap-1.5 text-red-400/80 text-xs sm:text-sm font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />Only <span className="text-orange-400 font-black">7</span> slots · July 2026
                </div>
                <span className="hidden sm:inline text-white/15">·</span>
                <div className="flex items-center gap-1 text-xs sm:text-sm">
                  <span className="text-amber-400/80 font-semibold">₹15K hike in</span>
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span className="font-mono font-bold text-amber-400 tabular-nums">{pad(mid.h)}:{pad(mid.m)}:{pad(mid.s)}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                {[{ icon: Lock, label: '256-bit SSL' }, { icon: ShieldCheck, label: '30-Day Guarantee' }, { icon: Sparkles, label: 'Instant Access' }].map((b) => (
                  <div key={b.label} className="flex items-center gap-1.5 text-white/20 text-[11px] font-mono"><b.icon className="w-3 h-3" /><span>{b.label}</span></div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
