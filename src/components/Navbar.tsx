import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Flame } from 'lucide-react';

const links = [
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'The System', href: '#system' },
  { label: 'Guarantee', href: '#guarantee' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 nav-glass transition-all ${scrolled ? 'shadow-lg shadow-black/30' : ''}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-cyan-400/20">
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-lg font-bold">
              <span className="text-white">Future</span>
              <span className="text-gradient">Forge</span>
              <span className="text-white/40 font-mono text-sm">.ai</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="relative px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors group">
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-3/4 transition-all" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE
            </div>
            <a href="#secure" className="mega-cta-btn rounded-lg px-5 py-2.5 text-sm font-bold text-white flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" strokeWidth={2.5} />
              Secure Access
            </a>
          </div>

          <button className="md:hidden text-white/70 hover:text-white p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t border-white/5 bg-[#050a14]/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-lg">{link.label}</a>
              ))}
              <a href="#secure" onClick={() => setOpen(false)} className="mega-cta-btn flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white mt-2">
                <Flame className="w-3.5 h-3.5" strokeWidth={2.5} />Secure Your Slot
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
