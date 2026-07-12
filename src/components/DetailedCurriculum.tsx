import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, BarChart3, Palette, Layout, PenTool, Mic, Video, Search, Workflow, Briefcase, ChevronDown, Gift, Flame, ArrowRight } from 'lucide-react';

const curriculum = [
  { day: 1, title: 'Advanced Prompt Engineering & System Archetypes', focus: 'Context Windows, System Prompts, Dynamic Variables, Parameter Tuning.', Icon: Brain, accent: 'from-cyan-500 to-blue-600', border: 'border-cyan-500/30', tools: ['Claude 3.5 Sonnet', 'ChatGPT-4o'], asset: 'Master System Architect Mega-Prompt Database', value: '₹25,000' },
  { day: 2, title: 'AI-Powered Research & Deep Data Analytics', focus: 'Synthesizing 500-page reports, web scraping, data intelligence.', Icon: BarChart3, accent: 'from-emerald-500 to-teal-600', border: 'border-emerald-500/30', tools: ['Perplexity Pro', 'Code Interpreter'], asset: 'Executive Market Intelligence Dashboard', value: '₹18,000' },
  { day: 3, title: 'Generative Artistry & Cinematic Visual Engine', focus: 'Photorealistic lighting, aspect ratios, camera angles, vectors.', Icon: Palette, accent: 'from-pink-500 to-rose-600', border: 'border-pink-500/30', tools: ['Midjourney v6', 'DALL-E 3 API'], asset: 'Premium Commercial Prompt Book', value: '₹22,000' },
  { day: 4, title: 'UI/UX Prototyping & Dynamic Pitch Engine', focus: 'High-converting decks and web layouts via text parameters.', Icon: Layout, accent: 'from-violet-500 to-purple-600', border: 'border-violet-500/30', tools: ['Gamma.app', 'Beautiful.ai'], asset: '5 Enterprise Presentation Templates', value: '₹15,000' },
  { day: 5, title: 'Enterprise Copywriting & Brand Voice Scale', focus: 'Teaching AI your brand voice, infinite content matrices.', Icon: PenTool, accent: 'from-orange-500 to-amber-600', border: 'border-orange-500/30', tools: ['Copy.ai Engine', 'Jasper AI'], asset: 'Infinite Content Engine Blueprint', value: '₹20,000' },
  { day: 6, title: 'AI Audio Synthesis & Voice Cloning', focus: 'Voice cloning, multi-lingual voiceover production.', Icon: Mic, accent: 'from-indigo-500 to-blue-600', border: 'border-indigo-500/30', tools: ['ElevenLabs Premium'], asset: 'Voice Clone Optimization Checklist', value: '₹12,000' },
  { day: 7, title: 'Automated Video Pipelines & Cinematic B-Roll', focus: 'Text-to-video, camera motion, AI avatars for marketing.', Icon: Video, accent: 'from-purple-500 to-fuchsia-600', border: 'border-purple-500/30', tools: ['Runway Gen-3', 'HeyGen'], asset: 'Video Production Automation Pipeline', value: '₹28,000' },
  { day: 8, title: 'Authority Scale & Semantic SEO Dominance', focus: '95+ optimization scores, high-intent keywords, authority maps.', Icon: Search, accent: 'from-teal-500 to-cyan-600', border: 'border-teal-500/30', tools: ['SurferSEO', 'NeuronWriter'], asset: '90-Day Topical Authority Map', value: '₹16,000' },
  { day: 9, title: 'No-Code Automation & Webhooks', focus: 'LLM backends via APIs, zero human intervention workflows.', Icon: Workflow, accent: 'from-rose-500 to-red-600', border: 'border-rose-500/30', tools: ['Make.com', 'Zapier Canvas'], asset: 'Lead Router & Fulfillment Blueprint', value: '₹19,000' },
  { day: 10, title: 'The Sovereign Engine - Your AI Agency', focus: 'Pricing AI solutions, retainer models, high-ticket services.', Icon: Briefcase, accent: 'from-amber-500 to-yellow-600', border: 'border-amber-500/30', tools: ['Full Stack Matrix'], asset: 'Elite AI Agency Proposal & MSA Template', value: '₹35,000' },
];

function Card({ item, i }: { item: typeof curriculum[0]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
      <div className={`glass-card rounded-2xl overflow-hidden border ${item.border} cursor-pointer group`} onClick={() => setOpen(!open)}>
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center`}><item.Icon className="w-6 h-6 text-white" /></div>
              <span className="text-[10px] font-mono text-white/30">DAY {item.day.toString().padStart(2, '0')}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-sm sm:text-base font-bold text-white/90 mb-1">{item.title}</h3>
              <p className="text-xs text-white/40 line-clamp-2">{item.focus}</p>
            </div>
            <motion.div animate={{ rotate: open ? 180 : 0 }}><ChevronDown className="w-5 h-5 text-white/30" /></motion.div>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
              <div className="px-5 pb-5 pt-2 border-t border-white/5">
                <div className="mb-3">
                  <span className="text-[10px] font-mono text-white/25 uppercase">Tech Stack</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.tools.map((t) => (<span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70">{t}</span>))}
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
                  <Gift className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="text-xs font-semibold text-amber-400/90">Asset Delivered</div>
                    <div className="text-sm text-white/70">{item.asset}</div>
                    <div className="text-xs text-amber-400/60 font-mono mt-1">Valued at {item.value}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function DetailedCurriculum() {
  const total = curriculum.reduce((s, i) => s + parseInt(i.value.replace(/\D/g, '')), 0);
  return (
    <section id="curriculum" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block glass-card rounded-full px-4 py-1.5 text-xs font-mono text-amber-400 mb-5">📅 THE 10-DAY TRANSFORMATION</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Your Complete <span className="text-gradient">AI Mastery</span> Roadmap</h2>
          <p className="text-white/40 max-w-2xl mx-auto mb-6">10 intensive days. 20+ AI tools. ₹{total.toLocaleString()}+ in exclusive assets. Click any day to expand.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {[{ l: 'Days', v: '10' }, { l: 'Tools', v: '20+' }, { l: 'Assets', v: `₹${Math.round(total/1000)}K+` }, { l: 'Frameworks', v: '50+' }].map((s) => (
              <div key={s.l}><div className="text-xl font-bold text-white/80 font-mono">{s.v}</div><div className="text-[10px] text-white/30 font-mono">{s.l}</div></div>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{curriculum.map((item, i) => (<Card key={item.day} item={item} i={i} />))}</div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 flex flex-col items-center gap-4">
          <a href="#secure" className="mega-cta-btn rounded-xl px-8 py-4 text-sm font-bold text-white uppercase inline-flex items-center gap-2 group">
            <Flame className="w-5 h-5" strokeWidth={2.5} />Get Instant Access to All 10 Days<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </a>
          <span className="text-xs text-white/25 font-mono">Only 7 slots · ₹{total.toLocaleString()}+ in assets included</span>
        </motion.div>
      </div>
    </section>
  );
}
