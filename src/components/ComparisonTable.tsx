export default function ComparisonTable() {
  const features = [
    { name: 'Practical AI Tools Training', us: true, others: 'Basic' },
    { name: 'Real-World Projects', us: '10+', others: '2-3' },
    { name: 'Premium Assets Worth', us: '₹2.1L+', others: '₹10K' },
    { name: 'Lifetime Access', us: true, others: false },
    { name: 'Certificate', us: true, others: true },
    { name: 'Community Access', us: true, others: 'Limited' },
    { name: 'WhatsApp Support', us: '24/7', others: 'Email Only' },
    { name: 'Money Back Guarantee', us: '7 Days', others: 'No' },
    { name: 'Hinglish Content', us: true, others: false },
    { name: 'Agency Launch Guide', us: true, others: false },
  ];

  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return (
        <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </span>
      );
    }
    if (value === false) {
      return (
        <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      );
    }
    return <span className="text-white/70">{value}</span>;
  };

  return (
    <section className="py-20 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-gradient">FutureForge</span>?
          </h2>
          <p className="text-white/50">
            See how we compare to other courses
          </p>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-white/5 border-b border-white/10">
            <div className="font-semibold text-white/50">Feature</div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30">
                <span className="text-cyan-400 font-bold">FutureForge</span>
                <span className="text-yellow-400">⭐</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-white/40">Other Courses</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="grid grid-cols-3 gap-4 p-4 sm:p-6 items-center hover:bg-white/5 transition-colors"
              >
                <div className="text-white/70 text-sm sm:text-base">{feature.name}</div>
                <div className="flex justify-center">{renderValue(feature.us)}</div>
                <div className="flex justify-center text-sm">{renderValue(feature.others)}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border-t border-white/10">
            <div className="text-center">
              <p className="text-white/60 mb-4">
                Clear winner? We think so too! 😎
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
