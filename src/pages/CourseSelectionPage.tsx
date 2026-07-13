import { useNavigate } from 'react-router-dom';
import { courseTracks, careerGoals } from '../data/courseData';

export default function CourseSelectionPage() {
  const navigate = useNavigate();
  const careerGoal = localStorage.getItem('careerGoal') || 'freelancer';
  
  const selectedGoal = careerGoals.find(g => g.id === careerGoal);
  const recommendedTracks = selectedGoal?.tracks || ['ai-mastery'];
  
  const sortedTracks = [...courseTracks].sort((a, b) => {
    const aIndex = recommendedTracks.indexOf(a.id);
    const bIndex = recommendedTracks.indexOf(b.id);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  const handleSelectCourse = (courseId: string) => {
    localStorage.setItem('selectedCourse', courseId);
    navigate('/home');
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1.5 rounded-full bg-cyan-500"></div>
            <div className="w-12 h-1.5 rounded-full bg-cyan-500"></div>
            <div className="w-12 h-1.5 rounded-full bg-cyan-500"></div>
          </div>
          <p className="text-center text-white/50 text-sm">Step 3 of 3</p>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            AI Recommended for You
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Apna <span className="text-gradient">Course</span> Choose Karein
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Aapke goals ke hisaab se ye courses perfect match hain
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sortedTracks.map((course, index) => (
            <div
              key={course.id}
              className={`glass-card rounded-3xl overflow-hidden ${
                index === 0 ? 'ring-2 ring-cyan-500/50' : ''
              }`}
            >
              {/* Recommended Badge */}
              {index === 0 && (
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-center">
                  <span className="text-white text-sm font-semibold">⭐ Most Recommended</span>
                </div>
              )}

              <div className="p-6">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl shadow-lg`}>
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-white/50">
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.modules}+ Modules</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm mb-6 line-clamp-2">
                  {course.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {course.features.slice(0, 5).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                  {course.features.length > 5 && (
                    <p className="text-cyan-400 text-xs pl-6">+{course.features.length - 5} more features</p>
                  )}
                </div>

                {/* Pricing */}
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-3xl font-bold text-white">₹{course.price.toLocaleString()}</span>
                  <span className="text-lg text-white/40 line-through">₹{course.originalPrice.toLocaleString()}</span>
                  <span className="text-sm text-green-400 font-semibold">
                    {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleSelectCourse(course.id)}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${
                    index === 0
                      ? 'mega-cta-btn'
                      : 'glow-btn'
                  }`}
                >
                  Select This Course
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="text-center">
          <button
            onClick={() => navigate('/skill-level')}
            className="px-6 py-3 rounded-xl text-white/50 hover:text-white transition-colors flex items-center gap-2 mx-auto"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Change Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
