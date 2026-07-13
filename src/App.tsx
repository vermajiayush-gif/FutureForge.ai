import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Particles from './components/Particles';
import WelcomePage from './pages/WelcomePage';
import CareerGoalsPage from './pages/CareerGoalsPage';
import SkillLevelPage from './pages/SkillLevelPage';
import CourseSelectionPage from './pages/CourseSelectionPage';
import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';
import CoursePage from './pages/CoursePage';
import DayPage from './pages/DayPage';
import CertificatePage from './pages/CertificatePage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';
export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050a14] text-white overflow-x-hidden">
      {/* Background layers */}
      <div className="cyber-grid" />
      <div className="noise-overlay" />
      <div className="scan-line" />
      <Particles />
      {/* Navigation - Show everywhere except admin dashboard */}
      {!window.location.hash.includes('/admin') && !window.location.hash.includes('/admin/dashboard') && (
        <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/#/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-[2px]">
                  <div className="w-full h-full rounded-xl bg-[#050a14] flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-white font-bold text-lg group-hover:text-gradient transition-all">FutureForge<span className="text-cyan-400">.ai</span></div>
                  <div className="text-white/40 text-xs">Transform Your Career</div>
                </div>
              </Link>
              <div className="flex items-center gap-4">
                {typeof window !== 'undefined' && localStorage.getItem('courseUnlocked') === 'true' && (
                  <Link 
                    to="/#/course" 
                    className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-cyan-500/50 transition-all text-sm"
                  >
                    <span>📚</span> My Course
                  </Link>
                )}
                <Link 
                  to="/#/home"
                  className="glow-btn px-5 py-2.5 rounded-lg text-white font-semibold text-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
      {/* Content */}
      <main className="relative z-10 pt-20">
        <HashRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/career-goals" element={<CareerGoalsPage />} />
            <Route path="/skill-level" element={<SkillLevelPage />} />
            <Route path="/course-selection" element={<CourseSelectionPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/course/day/:dayNumber" element={<DayPage />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </main>
      {/* Footer - Don't show on admin pages */}
      {!window.location.hash.includes('/admin') && !window.location.hash.includes('/admin/dashboard') && (
        <footer className="relative z-10 border-t border-white/5 mt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-[2px]">
                    <div className="w-full h-full rounded-xl bg-[#050a14] flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">FutureForge<span className="text-cyan-400">.ai</span></div>
                    <div className="text-white/40 text-xs">Career Transformation Platform</div>
                  </div>
                </div>
                <p className="text-white/50 text-sm max-w-md">
                  India ka most advanced AI learning platform.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/#/" className="text-white/50 hover:text-cyan-400 transition-colors">Home</Link></li>
                  <li><Link to="/#/home" className="text-white/50 hover:text-cyan-400 transition-colors">Get Started</Link></li>
                  {typeof window !== 'undefined' && localStorage.getItem('courseUnlocked') === 'true' && (
                    <>
                      <li><Link to="/#/course" className="text-white/50 hover:text-cyan-400 transition-colors">My Course</Link></li>
                      <li><Link to="/#/certificate" className="text-white/50 hover:text-cyan-400 transition-colors">Certificate</Link></li>
                    </>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-white/50">support@futureforge.ai</li>
                  <li className="text-white/50">WhatsApp: +91 XXXXX XXXXX</li>
                </ul>
                <div className="flex gap-3 mt-4">
                  {['T', 'L', 'I', 'Y'].map((letter, i) => (
                    <Link 
                      key={i}
                      to="/#/"
                      className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-cyan-400 hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <span className="text-xs">{letter}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-white/30 text-sm">© 2025 FutureForge.ai. All rights reserved.</div>
              <div className="flex gap-6 text-sm">
                <span className="text-white/30 hover:text-white/60 transition-colors cursor-pointer">Privacy Policy</span>
                <span className="text-white/30 hover:text-white/60 transition-colors cursor-pointer">Terms of Service</span>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
