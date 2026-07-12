import { motion } from 'framer-motion';

const cards = [
  { label: 'Claude AI', desc: 'Advanced Reasoning', color: 'from-orange-500/20 to-amber-500/10', border: 'border-orange-500/20', glow: 'rgba(217,119,87,0.15)', float: 'float-1', icon: '🧠' },
  { label: 'OpenAI', desc: 'GPT-4 / o1 Models', color: 'from-emerald-500/20 to-teal-500/10', border: 'border-emerald-500/20', glow: 'rgba(16,163,127,0.15)', float: 'float-2', icon: '⚡' },
  { label: 'Make.com', desc: 'Visual Automation', color: 'from-violet-500/20 to-purple-500/10', border: 'border-violet-500/20', glow: 'rgba(109,59,245,0.15)', float: 'float-3', icon: '🔄' },
];

export default function FloatingIcons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
      {cards.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.2, duration: 0.8 }}
          className={card.float}
        >
          <div className={`relative glass-card rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-3 border ${card.border} cursor-pointer min-w-[140px]`}>
            <div className={`relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br ${card.color}`}>
              <span className="text-3xl sm:text-4xl">{card.icon}</span>
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-base font-semibold text-white/90">{card.label}</div>
              <div className="text-[11px] sm:text-xs text-white/40 font-mono mt-0.5">{card.desc}</div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-emerald-400/70 font-mono">INTEGRATED</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
