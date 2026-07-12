import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DetailedCurriculum from './components/DetailedCurriculum';
import WhyTextSection from './components/WhyTextSection';
import GuaranteeSection from './components/GuaranteeSection';
import Day1Preview from './components/Day1Preview';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Particles from './components/Particles';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050a14] text-white overflow-x-hidden">
      {/* Background layers */}
      <div className="cyber-grid" />
      <div className="noise-overlay" />
      <div className="scan-line" />
      <Particles />

      {/* Content */}
      <Navbar />
      <main>
        <HeroSection />
        <DetailedCurriculum />
        <WhyTextSection />
        <Day1Preview />
        <GuaranteeSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
