import { useNavigate } from 'react-router-dom';
import { courseTracks, courseData } from '../data/courseData';
import AIToolsShowcase from '../components/AIToolsShowcase';
import CountdownTimer from '../components/CountdownTimer';
import LiveCounter from '../components/LiveCounter';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import InstructorSection from '../components/InstructorSection';
import ComparisonTable from '../components/ComparisonTable';

export default function HomePage() {
  const navigate = useNavigate();
  const selectedCourseId = localStorage.getItem('selectedCourse') || 'ai-mastery';
  const selectedCourse = courseTracks.find(c => c.id === selectedCourseId) || courseTracks[0];

  const totalAssetValue = courseData.reduce((sum, day) => {
    const value = parseInt(day.asset_value.replace(/[₹,]/g, ''));
    return sum + value;
  }, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Urgency Banner */}
          <div className="glass-card rounded-2xl p-4 sm:p-6 mb-8 border-orange-500/30">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="text-orange-400 font-semibold">Limited Time Offer Ending In:</p>
                  <p className="text-white/50 text-sm">Special {Math.round((1 - selectedCourse.price / selectedCourse.originalPrice) * 100)}% discount</p>
                </div>
              </div>
              <CountdownTimer />
            </div>
          </div>

          <div className="text-center mb-16">
            {/* Live Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <LiveCounter baseCount={2847} label="Students Enrolled" icon="👥" />
              <LiveCounter baseCount={156} label="Watching Now" icon="👀" intervalMs={3000} />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {selectedCourse.title.split(' ').slice(0, -1).join(' ')}
              <span className="block text-gradient-warm">
                {selectedCourse.title.split(' ').slice(-1)}
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
              {selectedCourse.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
              <div className="glass-card rounded-2xl px-6 py-4 float-1">
                <div className="text-2xl font-bold text-white">{selectedCourse.duration}</div>
                <div className="text-white/50 text-sm">Duration</div>
              </div>
              <div className="glass-card rounded-2xl px-6 py-4 float-2">
                <div className="text-2xl font-bold text-white">{selectedCourse.modules}+</div>
                <div className="text-white/50 text-sm">Modules</div>
              </div>
              <div className="glass-card rounded-2xl px-6 py-4 float-3">
                <div className="text-2xl font-bold text-cyan-400 counter-glow">₹{(totalAssetValue/1000).toFixed(0)}K+</div>
                <div className="text-white/50 text-sm">Asset Value</div>
              </div>
              <div className="glass-card rounded-2xl px-6 py-4 float-1">
                <div className="text-2xl font-bold text-green-400">Lifetime</div>
                <div className="text-white/50 text-sm">Access</div>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="inline-block glass-card rounded-3xl p-8 mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl sm:text-5xl font-bold text-white">₹{selectedCourse.price.toLocaleString()}</span>
                <div className="text-left">
                  <span className="text-xl text-white/40 line-through block">₹{selectedCourse.originalPrice.toLocaleString()}</span>
                  <span className="text-green-400 font-semibold">Save ₹{(selectedCourse.originalPrice - selectedCourse.price).toLocaleString()}</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/payment')}
                className="mega-cta-btn px-12 py-5 rounded-2xl text-white font-bold text-xl shadow-2xl w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Enroll Now
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <p className="text-white/40 text-sm mt-4">🔒 7-Day Money Back Guarantee • Secure Payment</p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 text-white/40 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Secure Checkout
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Instant Access
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Certificate Included
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Showcase */}
      <AIToolsShowcase />

      {/* Curriculum Section */}
      <section className="px-4 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Complete <span className="text-gradient">Curriculum</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              10 days of intensive training with hands-on projects & premium assets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courseData.map((day, index) => (
              <div 
                key={day.day_number} 
                className={`glass-card rounded-2xl p-6 ${index === 0 ? 'ring-2 ring-cyan-500/50' : ''}`}
              >
                {index === 0 && (
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
                    Start Here
                  </span>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20">
                    {day.day_number}
                  </div>
                  <div>
                    <div className="text-white/50 text-xs">Day {day.day_number}</div>
                    <div className="text-white font-semibold line-clamp-1">{day.title}</div>
                  </div>
                </div>
                <p className="text-white/50 text-sm line-clamp-2 mb-4">{day.intro}</p>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="text-white/40">{day.duration}</span>
                  <span className="text-cyan-400">{day.sections.length} sections</span>
                </div>
                {/* Asset Preview */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">🎁</span>
                    <span className="text-white/50 text-xs line-clamp-1">{day.asset_name}</span>
                  </div>
                  <div className="text-yellow-400 text-sm font-bold mt-1">{day.asset_value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Kya <span className="text-gradient">Milega</span> Aapko?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedCourse.features.map((feature, i) => (
              <div key={i} className="glass-card rounded-xl p-5 flex items-center gap-3 group hover:border-cyan-500/50 transition-all">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Instructor Section */}
      <InstructorSection />

      {/* Guarantee Section */}
      <section className="px-4 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center border-green-500/30 holographic">
            <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6 ring-expand">
              <span className="text-5xl">🛡️</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              100% Satisfaction Guarantee
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Agar 7 days mein aapko course pasand nahi aaya, toh full refund — no questions asked.
              Hum apne content pe confident hain.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['7-Day Refund Policy', 'Lifetime Access', 'Certificate Included', '24/7 Support'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className="px-4 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to <span className="text-gradient-warm">Transform</span>?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Join {2847}+ students who have already started their transformation
          </p>
          
          <div className="inline-block glass-card rounded-3xl p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-4xl font-bold text-white">₹{selectedCourse.price.toLocaleString()}</span>
              <span className="text-xl text-white/40 line-through">₹{selectedCourse.originalPrice.toLocaleString()}</span>
            </div>
            <button
              onClick={() => navigate('/payment')}
              className="mega-cta-btn px-12 py-5 rounded-2xl text-white font-bold text-xl shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Start My Transformation
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
