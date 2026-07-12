import { motion } from 'framer-motion';
import { Search, RefreshCw, Copy, Terminal } from 'lucide-react';

const points = [
  { icon: Search, title: '⚡ Sub-Second Skimming', desc: 'Video content me search nahi kiya ja sakta. Text me Ctrl + F dabayein, apna solution 0.4 seconds me dhundhein aur kaam par wapas jayein.', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { icon: RefreshCw, title: '🔄 Hot-Swappable Updates', desc: 'Jab koi AI company apna UI change karti hai, tab poori video library kachra ho jaati hai. Humare text architectures real-time me update hote hain.', color: 'text-violet-400', bg: 'bg-violet-500/10' },
  { icon: Copy, title: '📋 Perfect Code/Prompt Fidelity', desc: 'Video me dekh kar [Temperature: 0.7] ya exact system variables copy karna nightmare hai. Yahan se absolute precision ke sath directly execute kijiye.', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
];

export default function WhyTextSection() {
  return (
    <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl p-6 sm:p-10 border border-cyan-500/20 relative overflow-hidden">
          {/* Terminal-style header */}
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400/80">WHY_TEXT_BEATS_VIDEO.md</span>
            <span className="terminal-cursor text-cyan-400">█</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            💎 Why <span className="text-gradient">Text Beats Video</span> Every Single Time
          </h2>
          <p className="text-white/40 text-sm mb-8">The core rationale behind our documentation-first approach.</p>

          <div className="space-y-4">
            {points.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] group hover:border-white/[0.1] transition-all">
                <div className={`w-10 h-10 rounded-lg ${p.bg} flex items-center justify-center flex-shrink-0`}>
                  <p.icon className={`w-5 h-5 ${p.color}`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white/90 mb-1">{p.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal footer */}
          <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-white/20">
            <span className="text-emerald-400">$</span> cat advantages.txt | grep "efficiency" <span className="text-white/40">→ 10x faster learning curve</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
