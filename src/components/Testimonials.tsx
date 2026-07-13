import { useState, useEffect } from 'react';
import { testimonials } from '../data/aiTools';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Students Ki <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-white/50">
            1000+ students ne apni career transform ki hai
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="testimonial-card mb-8 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-cyan-500/30"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                "{testimonials[activeIndex].content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{testimonials[activeIndex].name}</p>
                  <p className="text-cyan-400 text-sm">{testimonials[activeIndex].role}</p>
                </div>
                <div className="text-white/30 text-xs">
                  {testimonials[activeIndex].courseTaken}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? 'bg-cyan-500 w-8'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Mini Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {testimonials.map((t, index) => (
            <button
              key={t.id}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-xl border transition-all ${
                index === activeIndex
                  ? 'bg-cyan-500/10 border-cyan-500/50'
                  : 'bg-white/5 border-white/10 hover:border-cyan-500/30'
              }`}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full mx-auto mb-2"
              />
              <p className="text-white text-xs font-semibold text-center">{t.name}</p>
              <p className="text-white/40 text-xs text-center">{t.role}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
