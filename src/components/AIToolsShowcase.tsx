import { aiTools } from '../data/aiTools';

export default function AIToolsShowcase() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="text-gradient">12+ Premium AI Tools</span> Master Karein
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Industry ke top AI tools jo professionals daily use karte hain
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {aiTools.map((tool) => (
            <div
              key={tool.id}
              className="tool-logo-card group text-center"
              style={{ 
                '--tool-color': tool.color,
                '--tool-glow': tool.glowColor 
              } as React.CSSProperties}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden p-2">
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tool.name}&background=random&color=fff&size=48`;
                  }}
                />
              </div>
              <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-white/40 text-xs">{tool.category}</p>
              <div className="mt-2 flex justify-center gap-1">
                {tool.dayUsed.map((day) => (
                  <span 
                    key={day} 
                    className="w-5 h-5 rounded-full bg-white/10 text-white/60 text-xs flex items-center justify-center"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tool Categories */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['AI Chat', 'Image Gen', 'Video AI', 'Voice AI', 'SEO', 'Automation', 'Research', 'Presentations'].map((cat) => (
            <span 
              key={cat}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-pointer"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
