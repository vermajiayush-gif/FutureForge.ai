import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { courseTracks } from '../data/courseData';

export default function CertificatePage() {
  const navigate = useNavigate();
  const certificateRef = useRef<HTMLDivElement>(null);

  const userName = localStorage.getItem('userName') || 'Student';
  const userEmail = localStorage.getItem('userEmail') || '';
  const selectedCourseId = localStorage.getItem('selectedCourse') || 'ai-mastery';
  const selectedCourse = courseTracks.find(c => c.id === selectedCourseId) || courseTracks[0];
  const completedDays = JSON.parse(localStorage.getItem('completedDays') || '[]');

  const issueDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  // Generate unique certificate ID
  const certificateId = `FF-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

  // Verification URL
  const verificationUrl = `https://futureforge.ai/verify/${certificateId}`;

  const skills = [
    'Advanced Prompt Engineering',
    'AI Research & Analytics',
    'Generative AI Visuals',
    'AI Presentation Design',
    'AI Copywriting',
    'Voice Cloning & Audio',
    'AI Video Production',
    'Semantic SEO',
    'No-Code Automation',
    'AI Agency Management'
  ];

  const downloadCertificate = () => {
    // In production, generate PDF
    alert('🎉 Certificate saved! You can also take a screenshot or print this page.');
    window.print();
  };

  const shareCertificate = async () => {
    const shareData = {
      title: `${userName} - AI Mastery Certificate`,
      text: `I just completed the ${selectedCourse.title} at FutureForge.ai! 🎉 #AImastery #FutureForge`,
      url: window.location.href
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Verified Certificate
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Congratulations, <span className="text-gradient">{userName.split(' ')[0]}</span>! 🎉
          </h1>
          <p className="text-white/50">
            You've successfully completed the {selectedCourse.title}
          </p>
        </div>

        {/* Certificate */}
        <div 
          ref={certificateRef}
          className="certificate-bg rounded-3xl p-1 sm:p-2 mb-8 print:shadow-none"
          id="certificate"
        >
          <div className="bg-gradient-to-br from-[#0a0f1a] via-[#111827] to-[#0a0f1a] rounded-2xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-cyan-500/40 rounded-tl-2xl"></div>
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-cyan-500/40 rounded-tr-2xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-cyan-500/40 rounded-bl-2xl"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-cyan-500/40 rounded-br-2xl"></div>

            {/* Content */}
            <div className="relative text-center">
              {/* Header with Logo */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <span className="text-3xl sm:text-4xl">🚀</span>
                </div>
              </div>

              {/* Certificate Type */}
              <div className="mb-6">
                <p className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
                  Certificate of Completion
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <span className="text-gradient">FutureForge.ai</span>
                </h2>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
                <span className="text-cyan-400">✦</span>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
              </div>

              {/* Recipient */}
              <div className="mb-8">
                <p className="text-white/50 text-sm mb-3">This is to certify that</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 font-serif">
                  {userName}
                </p>
                <p className="text-white/40 text-sm">{userEmail}</p>
              </div>

              {/* Course */}
              <div className="mb-8">
                <p className="text-white/50 text-sm mb-3">has successfully completed the</p>
                <div className="inline-block px-6 sm:px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{selectedCourse.title}</p>
                  <p className="text-cyan-400 text-sm mt-1">{selectedCourse.duration} Intensive Program • {selectedCourse.modules}+ Modules</p>
                </div>
              </div>

              {/* Skills Acquired */}
              <div className="mb-8">
                <p className="text-white/50 text-sm mb-4">Demonstrated Proficiency In:</p>
                <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                  {skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate Details */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8 text-center">
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-white/40 text-xs mb-1">Issue Date</p>
                  <p className="text-white font-semibold text-sm">{issueDate}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-white/40 text-xs mb-1">Certificate ID</p>
                  <p className="text-white font-mono text-xs">{certificateId}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-white/40 text-xs mb-1">Days Completed</p>
                  <p className="text-white font-semibold text-sm">{completedDays.length}/10</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-white/40 text-xs mb-1">Grade</p>
                  <p className="text-green-400 font-bold text-sm">Excellent ⭐</p>
                </div>
              </div>

              {/* Signature Section */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl italic text-white/60 mb-2 font-serif">FutureForge Team</div>
                  <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-2"></div>
                  <p className="text-white/40 text-xs">Program Director</p>
                </div>
                
                {/* QR Code Placeholder */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-lg p-2 mb-2">
                    <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2021%2021%22%3E%3Crect%20fill%3D%22%23000%22%20x%3D%220%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%223%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%226%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%2212%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%2218%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%220%22%20y%3D%223%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%226%22%20y%3D%223%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%2212%22%20y%3D%223%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%2218%22%20y%3D%223%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%220%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%223%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%226%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%229%22%20y%3D%229%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%2212%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%2215%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3Crect%20fill%3D%22%23000%22%20x%3D%2218%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%2F%3E%3C%2Fsvg%3E')] bg-contain"></div>
                  </div>
                  <p className="text-white/30 text-xs">Scan to Verify</p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t border-white/5">
                <p className="text-white/30 text-xs">
                  This certificate verifies that the above-named individual has completed the {selectedCourse.title} at FutureForge.ai
                </p>
                <p className="text-white/20 text-xs mt-2">
                  Verify at: {verificationUrl}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={downloadCertificate}
            className="mega-cta-btn px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="relative z-10">Download Certificate</span>
          </button>

          <button
            onClick={shareCertificate}
            className="glow-btn px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share on LinkedIn
          </button>
        </div>

        {/* Additional Info */}
        <div className="glass-card rounded-2xl p-6 text-center">
          <h3 className="text-lg font-bold text-white mb-4">🎉 You're Now Part of the Elite!</h3>
          <p className="text-white/60 mb-4">
            Add this certificate to your LinkedIn profile and resume to stand out from the crowd.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Verified Certificate
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Unique ID
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> QR Verification
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Shareable
            </span>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/course')}
            className="text-white/50 hover:text-white transition-colors"
          >
            ← Back to Course
          </button>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { background: white !important; }
          .glass-card, button, header, footer, nav { display: none !important; }
          #certificate { 
            display: block !important; 
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
