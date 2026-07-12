import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowRight, Clock, AlertTriangle, ShieldCheck, Lock, Sparkles, TrendingUp } from 'lucide-react';

const companies = ['Google', 'McKinsey', 'Razorpay', 'Stripe', 'Microsoft', 'Deloitte', 'Amazon', 'Flipkart'];

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

export default function CTASection() {
  const mid = useMidnight();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const [hovered, setHovered] = useState(false);

  return (
    <section id="secure" className="relative z-10 py-20 sm:py-28 md:py-36 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-orange-500/[0.04] via-amber-500/[0.02] to-red-500/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Urgency Strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 animate-pulse">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span className="text-xs sm:text-sm font-semibold text-red-400/90">FINAL WARNING — ENROLLMENT CLOSING SOON</span>
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
          </div>
        </motion.div>

        {/* Main Card */}
        <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} className="glass-card rounded-3xl overflow-hidden relative" style={{ borderColor: hovered ? 'rgba(255, 140, 0, 0.25)' : undefined }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-gradient-to-b from-orange-500/[0.06] to-transparent pointer-events-none" />

          <div className="relative p-6 sm:p-10 md:p-14 flex flex-col items-center text-center">
            {/* Slot Counter */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-3 sm:gap-4 glass-card rounded-2xl px-6 sm:px-8 py-4 sm:py-5 border border-orange-500/15">
                <div className="relative">
                  <span className="slot-glow text-4xl sm:text-5xl md:text-6xl font-black font-mono text-orange-400">7</span>
                  <div className="absolute inset-0 -m-3 rounded-xl border border-orange-400/20 ring-expand pointer-events-none" />
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-bold text-white/90">Cohort Slots</div>
                  <div className="text-xs sm:text-sm text-white/40">Remaining for <span className="text-orange-400 font-semibold">July 2026</span> Batch</div>
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15]">
                <span className="text-white">You are standing at a</span><br />
                <span className="text-gradient">Critical Inflection Point.</span>
              </h2>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-white/40 text-sm sm:text-base max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
              Aap agle 10 din purani methods se kaam karke guzar sakte hain, ya phir aap apne business ko ek <span className="text-white font-semibold">fully-automated, high-leverage engine</span> me transform kar sakte hain. Choice aapki hai.
            </motion.p>

            {/* MEGA CTA BUTTON */}
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} className="relative w-full max-w-xl mx-auto mb-6" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              <a href="#" className="mega-cta-btn relative flex items-center justify-center gap-3 rounded-2xl px-6 sm:px-10 py-5 sm:py-6 md:py-7 w-full group">
                <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-white/90" strokeWidth={2.5} />
                <span className="text-base sm:text-lg md:text-xl font-black text-white uppercase">🔥 Secure Your Acceleration Slot Now</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 group-hover:translate-x-1.5 transition-all" strokeWidth={2.5} />
              </a>
            </motion.div>

            {/* Price urgency */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8 sm:mb-10 flex flex-col items-center gap-3">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 text-red-400/90">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm sm:text-base font-bold">Price jumps by ₹15,000 at Midnight</span>
                </div>
                <span className="hidden sm:inline text-white/20">·</span>
                <div className="flex items-center gap-1.5 font-mono text-sm sm:text-base">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-400 font-bold tabular-nums">{pad(mid.h)}h {pad(mid.m)}m {pad(mid.s)}s</span>
                  <span className="text-white/30 text-xs">left</span>
                </div>
              </div>

              {/* Micro proof */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['bg-cyan-500', 'bg-violet-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500'].map((bg, i) => (
                    <div key={i} className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full ${bg} border-2 border-[#0a0f1e] flex items-center justify-center text-[9px] text-white font-bold`}>
                      {['AK', 'SR', 'PV', 'NM', 'DJ'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-white/40"><span className="text-white/60 font-semibold">12 people</span> enrolled in the last 24 hours</span>
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
              {[{ icon: Lock, label: '256-bit SSL' }, { icon: ShieldCheck, label: '30-Day Guarantee' }, { icon: Sparkles, label: 'Instant Access' }].map((b) => (
                <div key={b.label} className="flex items-center gap-1.5 text-white/25 text-xs font-mono"><b.icon className="w-3.5 h-3.5" /><span>{b.label}</span></div>
              ))}
            </motion.div>

            {/* Payment badges */}
            <div className="mt-6 flex items-center gap-4 text-white/20 text-xs font-mono">
              <span>Secure Checkout:</span>
              <span className="text-[#635BFF]">Stripe</span>
              <span className="text-[#3395FF]">Razorpay</span>
              <span>🔒 SSL</span>
            </div>
          </div>
        </motion.div>

        {/* Social Proof Ribbon */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full mt-12 sm:mt-16">
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm text-white/50">Trusted by Leaders at <span className="text-white font-semibold">Google</span>, <span className="text-white font-semibold">McKinsey</span>, <span className="text-white font-semibold">Razorpay</span>, and <span className="text-white font-semibold">Stripe</span></span>
            </div>
          </div>

          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#050a14] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#050a14] to-transparent z-10" />
            <div className="ribbon-slide flex items-center gap-10 sm:gap-16 w-max">
              {[...companies, ...companies].map((c, i) => (
                <span key={`${c}-${i}`} className="text-sm sm:text-base font-bold text-white/20 whitespace-nowrap">{c}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-5">
            {[{ value: '2,400+', label: 'Graduates' }, { value: '₹8.5 Cr+', label: 'Revenue Generated' }, { value: '4.9/5', label: 'Avg. Rating' }, { value: '93%', label: 'Completion Rate' }].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-base sm:text-lg font-bold text-white/80 font-mono">{s.value}</div>
                <div className="text-[10px] sm:text-xs text-white/30 font-mono">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
