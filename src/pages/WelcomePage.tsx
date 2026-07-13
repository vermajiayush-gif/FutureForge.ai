import { useNavigate } from 'react-router-dom';
import { aiTools } from '../data/aiTools';

export default function WelcomePage() {
  const navigate = useNavigate();

  const stats = [
    { value: '10,000+', label: 'Students', icon: '👥' },
    { value: '4.9★', label: 'Rating', icon: '⭐' },
    { value: '95%', label: 'Success Rate', icon: '🎯' },
    { value: '24/7', label: 'Support', icon: '💬' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 py-20">
        {/* Floating AI Tools Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {aiTools.slice(0, 8).map((tool, i) => (
            <div
              key={tool.id}
              className={`absolute opacity-20 float-${(i % 3) + 1}`}
              style={{
                left: `${10 + (i * 12) % 80}%`,
                top: `${15 + (i * 15) % 70}%`,
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-8 h-8 object-contain opacity-50"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-[3px] float-1">
                <div className="w-full h-full rounded-3xl bg-[#050a14] flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl">🚀</span>
                </div>
              </div>
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-3xl border-2 border-cyan-500/30 ring-expand"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-purple-500/20 ring-expand" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 text-cyan-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            India's #1 AI Learning Platform
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <span className="block text-gradient">FutureForge.ai</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 mb-4 max-w-2xl mx-auto">
            <span className="text-gradient-warm font-semibold">Apna Future Design Karo</span>
          </p>

          <p className="text-base sm:text-lg text-white/40 mb-12 max-w-xl mx-auto">
            AI-powered courses jo aapko industry-ready banayein. 
            10 din mein apni career transform karein.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card rounded-2xl p-4 sm:p-6">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-xl sm:text-2xl font-bold text-white counter-glow">{stat.value}</div>
                <div className="text-white/50 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/career-goals')}
            className="mega-cta-btn px-10 sm:px-16 py-5 sm:py-6 rounded-2xl text-white font-bold text-lg sm:text-xl shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-3">
              Shuru Karein
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          <p className="text-white/30 text-sm mt-6">
            ⚡ 2 minute mein apna perfect course discover karein
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Kyun Choose Karein <span className="text-gradient">FutureForge</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Personalized Learning Path',
                description: 'Aapke goals aur experience ke hisaab se customized course recommendations'
              },
              {
                icon: '🤖',
                title: '15+ AI Tools Master Karein',
                description: 'ChatGPT, Midjourney, ElevenLabs, Runway aur more — sab ek jagah'
              },
              {
                icon: '📜',
                title: 'Verified Certificate',
                description: 'Industry-recognized certificate jo LinkedIn pe add kar sakte ho'
              },
              {
                icon: '💼',
                title: 'Real Projects',
                description: '10+ hands-on projects jo portfolio mein add kar sakte ho'
              },
              {
                icon: '🎁',
                title: '₹2,10,000+ Worth Assets',
                description: 'Premium templates, prompts, aur resources free mein'
              },
              {
                icon: '🔄',
                title: 'Lifetime Access',
                description: 'Ek baar payment, hamesha ke liye access + future updates free'
              }
            ].map((feature, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 group hover:border-cyan-500/50">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Tools Showcase */}
      <div className="px-4 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="text-gradient">15+ Premium AI Tools</span> Seekhein
            </h2>
            <p className="text-white/50">Industry ke top tools jo professionals daily use karte hain</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {aiTools.slice(0, 12).map((tool) => (
              <div
                key={tool.id}
                className="tool-logo-card flex items-center gap-3 px-4 py-3"
                style={{ 
                  '--tool-color': tool.color,
                  '--tool-glow': tool.glowColor 
                } as React.CSSProperties}
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden p-1.5">
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tool.name}&background=random&color=fff&size=32`;
                    }}
                  />
                </div>
                <span className="text-white text-sm font-medium">{tool.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/career-goals')}
              className="glow-btn px-8 py-4 rounded-xl font-semibold text-white"
            >
              Start Your Journey →
            </button>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="px-4 py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div>
                <div className="text-4xl font-bold text-white counter-glow">10,000+</div>
                <div className="text-white/50 text-sm">Happy Students</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">4.9 ⭐</div>
                <div className="text-white/50 text-sm">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
              <div>
                <div className="text-4xl font-bold text-green-400">₹71L+</div>
                <div className="text-white/50 text-sm">Revenue Generated by Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
