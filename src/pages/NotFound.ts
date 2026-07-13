
export default function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#050a14]">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">😕</div>
        <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-white/50 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/#/', { replace: true })}
            className="glow-btn px-6 py-3 rounded-xl text-white font-semibold"
          >
            Go Home →
          </button>
          
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-white/20 text-white/60 hover:text-white transition-colors"
          >
            ← Back
          </button>
        </div>
        <p className="text-white/30 text-xs mt-8">
          If this error persists, try: <br/>
          • Clear browser cache and reload<br/>
          • Check if you're connected to internet<br/>
          • Report support@futureforge.ai
        </p>
      </div>
    </div>
  );
}
