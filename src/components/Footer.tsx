import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-7 h-7 rounded-md bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-cyan-400/10">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <span className="text-sm font-bold">
            <span className="text-white/60">Future</span>
            <span className="text-gradient">Forge</span>
            <span className="text-white/20 font-mono text-xs">.ai</span>
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-white/30">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          <a href="#" className="hover:text-white/60 transition-colors">Support</a>
        </div>
        <div className="text-xs text-white/20 font-mono">© 2026 FutureForge.ai</div>
      </div>
    </footer>
  );
}
