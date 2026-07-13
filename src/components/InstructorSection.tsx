export default function InstructorSection() {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '10K+', label: 'Students Taught' },
    { value: '50+', label: 'AI Projects' },
    { value: '4.9★', label: 'Avg Rating' },
  ];

  const credentials = [
    'AI Automation Expert',
    'Former Tech Lead at Top Startup',
    'YouTube Creator (100K+ Subs)',
    'Digital Marketing Specialist',
  ];

  return (
    <section className="py-20 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet Your <span className="text-gradient">Instructor</span>
          </h2>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-3xl bg-[#0a0f1a] flex items-center justify-center">
                    <span className="text-7xl">👨‍💻</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center border-4 border-[#0a0f1a]">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">FutureForge Team</h3>
              <p className="text-cyan-400 mb-4">AI & Automation Experts</p>
              
              <p className="text-white/60 leading-relaxed mb-6">
                Hum ek team hain jo AI tools ko real business problems solve karne ke liye use karti hai. 
                Humne 1000+ students ko AI skills sikhaya hai aur unhe 10x productive banaya hai.
              </p>

              {/* Credentials */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                {credentials.map((cred, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-white/5">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/40 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
