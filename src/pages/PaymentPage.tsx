import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { courseTracks } from '../data/courseData';

export default function PaymentPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [processing, setProcessing] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const selectedCourseId = localStorage.getItem('selectedCourse') || 'ai-mastery';
  const selectedCourse = courseTracks.find(c => c.id === selectedCourseId) || courseTracks[0];

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !agreed) {
      alert('Please fill all details and agree to terms');
      return;
    }

    setProcessing(true);

    // Store user details
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    localStorage.setItem('enrollmentDate', new Date().toISOString());
    localStorage.setItem('courseUnlocked', 'true');

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setProcessing(false);
    navigate('/course');
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <div className="glass-card rounded-3xl p-8 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

              {/* Course Info */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedCourse.color} flex items-center justify-center text-3xl`}>
                  {selectedCourse.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{selectedCourse.title}</h3>
                  <p className="text-white/50 text-sm">{selectedCourse.duration} • {selectedCourse.modules}+ Modules</p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-white/60">
                  <span>Course Price</span>
                  <span className="line-through">₹{selectedCourse.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-green-400">
                  <span>Discount</span>
                  <span>-₹{(selectedCourse.originalPrice - selectedCourse.price).toLocaleString()}</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between text-white font-bold text-lg">
                  <span>Total</span>
                  <span>₹{selectedCourse.price.toLocaleString()}</span>
                </div>
              </div>

              {/* Included */}
              <div className="space-y-2">
                <p className="text-white/50 text-sm font-semibold mb-3">Included:</p>
                {['Lifetime Access', 'Certificate', '24/7 Support', '7-Day Refund'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="order-1 lg:order-2">
            <h1 className="text-3xl font-bold text-white mb-2">Complete Enrollment</h1>
            <p className="text-white/50 mb-8">Fill your details to get instant access</p>

            <form onSubmit={handlePayment} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-white/70 text-sm mb-2">Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Aapka naam"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-cyan-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/70 text-sm mb-2">Email Address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-cyan-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white/70 text-sm mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-cyan-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-white/30 bg-white/5 text-cyan-500 focus:ring-cyan-500"
                />
                <label htmlFor="terms" className="text-white/60 text-sm">
                  I agree to the Terms of Service and Privacy Policy. I understand this is a demo and no actual payment will be processed.
                </label>
              </div>

              {/* Payment Button */}
              <button
                type="submit"
                disabled={processing || !agreed}
                className={`w-full mega-cta-btn py-5 rounded-xl font-bold text-lg text-white transition-all ${
                  processing || !agreed ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {processing ? (
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Pay ₹{selectedCourse.price.toLocaleString()} & Get Access
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                )}
              </button>

              {/* Security */}
              <div className="flex items-center justify-center gap-4 text-white/40 text-xs">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure Payment
                </span>
                <span>•</span>
                <span>256-bit SSL Encryption</span>
              </div>
            </form>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/home')}
            className="text-white/50 hover:text-white transition-colors flex items-center gap-2 mx-auto"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Course Details
          </button>
        </div>
      </div>
    </div>
  );
}
