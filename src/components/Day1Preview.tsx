import { motion } from 'framer-motion';
import { Brain, Terminal, Zap, Copy, ArrowRight, Flame } from 'lucide-react';

const megaPrompt = `### SYSTEM INITIATION: ENTERPRISE ARCHITECT ENGINE v2.6
[INITIATE SEMANTIC BLOCK]

{
  "SYSTEM_ROLE": "Elite Corporate Venture Architect & Strategic Systems Engineer",
  "EXPERTISE_MATRICES": ["Unit Economics", "Automated Operational Scale", "High-Ticket Market Positioning"],
  "TONE_PROFILE": "Highly analytical, precise, direct, zero-fluff, hyper-actionable"
}

[INPUT CONFIGURATION VARIABLES]
- BUSINESS_NAME: "[Insert Business Name]"
- CORE_OFFERING: "[Insert Premium Product or Service]"
- CORE_TARGET_DEMOGRAPHIC: "[Insert High-Value Client Persona]"
- REVENUE_BOTTLENECK: "[Insert Current Failure Point]"

[THE COMPLEX SYSTEM DIRECTIVE]
Analyze the INPUT_DATA under the lens of REVENUE_BOTTLENECK. 
Synthesize a non-obvious operational solution that bypasses standard tactics.
Every strategy must be executable using AI automation within 48 hours.

[STRICT ENFORCEMENT RULES - NEGATIVE FILTERS]
1. DO NOT use filler: "Sure, I can help", "It is crucial to remember"
2. ZERO buzzwords: "revolutionary", "game-changing", "holistic"
3. If not executable via no-code in 48h, EXCLUDE IT.

[OUTPUT SPECIFICATION ARCHITECTURE]
# 🧠 CRITICAL DIAGNOSIS: SYSTEM BREAKDOWN
# 🛠️ THE 48-HOUR AUTOMATION PROTOCOL
# 📊 THE INVERSE PROMPT ENGINE ASSET

[TERMINATE SEMANTIC BLOCK]`;

export default function Day1Preview() {
  return (
    <section className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block glass-card rounded-full px-4 py-1.5 text-xs font-mono text-cyan-400 mb-5">🚀 DAY 1 PREVIEW</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Advanced Prompt Engineering & <span className="text-gradient">System Archetypes</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">Beyond the Chat Interface: The Mechanics of Prompt Architecture</p>
        </motion.div>

        {/* Key Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl p-6 border border-cyan-500/20">
            <Brain className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Context Window Allocation</h3>
            <p className="text-sm text-white/50">Faltu baatein likh kar AI ki memory waste mat kijiye. Har token count karta hai.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card rounded-2xl p-6 border border-violet-500/20">
            <Zap className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Structural Rigidity</h3>
            <p className="text-sm text-white/50">AI ko strict mathematical boundaries me bandhein taaki wo hallucinate na kar sake.</p>
          </motion.div>
        </div>

        {/* The Blueprint Syntax */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl p-6 mb-10 border border-emerald-500/20">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-mono text-emerald-400">THE DYNAMIC BEHAVIORAL PIPELINE</span>
          </div>
          <div className="bg-black/40 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <span className="text-cyan-400">[CONTEXT DEFINITION]</span> <span className="text-white/30">→</span> <span className="text-violet-400">[OPERATIONAL CONSTRAINT]</span> <span className="text-white/30">→</span> <span className="text-rose-400">[NEGATIVE FILTER]</span> <span className="text-white/30">→</span> <span className="text-emerald-400">[TOKEN EXPECTATION]</span>
          </div>
        </motion.div>

        {/* Mega Prompt */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl overflow-hidden border border-amber-500/20">
          <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-3 text-xs font-mono text-white/40">ENTERPRISE_ARCHITECT_MEGA_PROMPT.md</span>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-white/60 hover:text-white transition-colors">
              <Copy className="w-3.5 h-3.5" />Copy
            </button>
          </div>
          <pre className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-white/70 overflow-x-auto whitespace-pre-wrap max-h-[400px] overflow-y-auto">{megaPrompt}</pre>
        </motion.div>

        {/* Execution Challenge */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 glass-card rounded-2xl p-6 border border-orange-500/20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">⚡</span>
            <span className="text-sm font-bold text-orange-400">DAY 1: THE EXECUTION CHALLENGE</span>
          </div>
          <ol className="space-y-2 text-sm text-white/60 list-decimal list-inside">
            <li>Upar diye gaye Mega-Prompt ko copy kijiye</li>
            <li>Apne business project ki details brackets me inject kijiye</li>
            <li>Claude Pro ya ChatGPT Plus me paste karein</li>
            <li>Generated "INVERSE PROMPT ENGINE ASSET" ko test karein</li>
            <li>Output quality ka comparison standard queries se karein</li>
          </ol>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 flex flex-col items-center gap-4">
          <p className="text-white/50 text-center max-w-xl">Ye sirf Day 1 ka preview hai. Full 10-day program me 50+ aise advanced frameworks milenge.</p>
          <a href="#secure" className="mega-cta-btn rounded-xl px-8 py-4 text-sm font-bold text-white uppercase inline-flex items-center gap-2 group">
            <Flame className="w-5 h-5" strokeWidth={2.5} />Get Full Access Now<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
