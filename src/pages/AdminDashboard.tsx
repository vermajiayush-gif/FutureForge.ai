import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  payment_status: string;
  amount: number;
  enrolled_at: string;
  progress: number;
}

interface Settings {
  cashfree_app_id: string;
  cashfree_secret_key: string;
  course_price: number;
  discount_percentage: number;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'settings' | 'analytics'>('overview');
  const [settings, setSettings] = useState<Settings>({
    cashfree_app_id: '',
    cashfree_secret_key: '',
    course_price: 2500,
    discount_percentage: 83
  });
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  // Mock data - in production, fetch from Supabase
  const [students] = useState<Student[]>([
    { id: '1', name: 'Rahul Sharma', email: 'rahul@example.com', phone: '+91 98765 43210', course: 'AI Mastery', payment_status: 'completed', amount: 2500, enrolled_at: '2025-01-15', progress: 70 },
    { id: '2', name: 'Priya Patel', email: 'priya@example.com', phone: '+91 87654 32109', course: 'AI Mastery', payment_status: 'completed', amount: 2500, enrolled_at: '2025-01-14', progress: 100 },
    { id: '3', name: 'Amit Kumar', email: 'amit@example.com', phone: '+91 76543 21098', course: 'AI Mastery', payment_status: 'completed', amount: 2500, enrolled_at: '2025-01-13', progress: 40 },
    { id: '4', name: 'Sneha Gupta', email: 'sneha@example.com', phone: '+91 65432 10987', course: 'AI Mastery', payment_status: 'pending', amount: 2500, enrolled_at: '2025-01-16', progress: 0 },
  ]);

  const stats = {
    totalStudents: 2847,
    totalRevenue: 7117500,
    activeToday: 156,
    completionRate: 78,
    avgRating: 4.9
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    const loginTime = localStorage.getItem('adminLoginTime');
    
    if (!isLoggedIn || !loginTime) {
      navigate('/admin');
      return;
    }

    // Session expires after 2 hours
    const twoHours = 2 * 60 * 60 * 1000;
    if (Date.now() - parseInt(loginTime) > twoHours) {
      localStorage.removeItem('adminLoggedIn');
      localStorage.removeItem('adminLoginTime');
      navigate('/admin');
    }

    // Load saved settings
    const savedSettings = localStorage.getItem('adminSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminLoginTime');
    navigate('/admin');
  };

  const handleSaveSettings = async () => {
    setSaveStatus('saving');
    // Save to localStorage (in production, save to Supabase)
    localStorage.setItem('adminSettings', JSON.stringify(settings));
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050a14]">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 bg-[#050a14]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <h1 className="text-white font-bold">Admin Dashboard</h1>
                <p className="text-white/40 text-xs">FutureForge.ai Management</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-colors text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'students', label: 'Students', icon: '👥' },
            { id: 'settings', label: 'Settings', icon: '⚙️' },
            { id: 'analytics', label: 'Analytics', icon: '📈' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">👥</span>
                  <span className="text-green-400 text-xs">+12%</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.totalStudents.toLocaleString()}</div>
                <div className="text-white/50 text-sm">Total Students</div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">💰</span>
                  <span className="text-green-400 text-xs">+18%</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">₹{(stats.totalRevenue / 100000).toFixed(1)}L</div>
                <div className="text-white/50 text-sm">Total Revenue</div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">🟢</span>
                  <span className="text-cyan-400 text-xs">Live</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.activeToday}</div>
                <div className="text-white/50 text-sm">Active Today</div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.completionRate}%</div>
                <div className="text-white/50 text-sm">Completion Rate</div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stats.avgRating}</div>
                <div className="text-white/50 text-sm">Avg Rating</div>
              </div>
            </div>

            {/* Recent Enrollments */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Recent Enrollments</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-white/50 text-sm border-b border-white/10">
                      <th className="pb-4 pr-4">Student</th>
                      <th className="pb-4 pr-4">Course</th>
                      <th className="pb-4 pr-4">Status</th>
                      <th className="pb-4 pr-4">Amount</th>
                      <th className="pb-4">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {students.slice(0, 5).map((student) => (
                      <tr key={student.id} className="text-sm">
                        <td className="py-4 pr-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold">
                              {student.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-white font-semibold">{student.name}</div>
                              <div className="text-white/40 text-xs">{student.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 pr-4 text-white/70">{student.course}</td>
                        <td className="py-4 pr-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            student.payment_status === 'completed'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {student.payment_status}
                          </span>
                        </td>
                        <td className="py-4 pr-4 text-white">₹{student.amount}</td>
                        <td className="py-4 text-white/50">{student.enrolled_at}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Students Tab */}
        {activeTab === 'students' && (
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">All Students</h3>
              <div className="flex gap-2">
                <input
                  type="search"
                  placeholder="Search students..."
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-cyan-500"
                />
                <button className="px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 text-sm hover:bg-cyan-500/30 transition-colors">
                  Export CSV
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-white/50 text-sm border-b border-white/10">
                    <th className="pb-4 pr-4">Student</th>
                    <th className="pb-4 pr-4">Phone</th>
                    <th className="pb-4 pr-4">Course</th>
                    <th className="pb-4 pr-4">Progress</th>
                    <th className="pb-4 pr-4">Status</th>
                    <th className="pb-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {students.map((student) => (
                    <tr key={student.id} className="text-sm hover:bg-white/5 transition-colors">
                      <td className="py-4 pr-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-white font-semibold">{student.name}</div>
                            <div className="text-white/40 text-xs">{student.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 pr-4 text-white/70">{student.phone}</td>
                      <td className="py-4 pr-4 text-white/70">{student.course}</td>
                      <td className="py-4 pr-4">
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                              style={{ width: `${student.progress}%` }}
                            />
                          </div>
                          <span className="text-white/50 text-xs">{student.progress}%</span>
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          student.payment_status === 'completed'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {student.payment_status}
                        </span>
                      </td>
                      <td className="py-4">
                        <button className="text-cyan-400 hover:text-cyan-300 text-xs">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl">
            <div className="glass-card rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>💳</span> Payment Gateway (Cashfree)
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Cashfree App ID</label>
                  <input
                    type="text"
                    value={settings.cashfree_app_id}
                    onChange={(e) => setSettings({...settings, cashfree_app_id: e.target.value})}
                    placeholder="Enter Cashfree App ID"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Cashfree Secret Key</label>
                  <input
                    type="password"
                    value={settings.cashfree_secret_key}
                    onChange={(e) => setSettings({...settings, cashfree_secret_key: e.target.value})}
                    placeholder="Enter Cashfree Secret Key"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>💰</span> Pricing Settings
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Course Price (₹)</label>
                  <input
                    type="number"
                    value={settings.course_price}
                    onChange={(e) => setSettings({...settings, course_price: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Discount Percentage (%)</label>
                  <input
                    type="number"
                    value={settings.discount_percentage}
                    onChange={(e) => setSettings({...settings, discount_percentage: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
                  />
                  <p className="text-white/40 text-xs mt-2">
                    Original Price: ₹{Math.round(settings.course_price / (1 - settings.discount_percentage / 100)).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleSaveSettings}
              disabled={saveStatus === 'saving'}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all disabled:opacity-50"
            >
              {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? '✓ Saved!' : 'Save Settings'}
            </button>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Revenue Trend</h3>
                <div className="h-48 flex items-end justify-between gap-2">
                  {[65, 45, 78, 90, 55, 88, 95].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-cyan-500 to-purple-600 rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-white/40 text-xs">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Course Completion</h3>
                <div className="space-y-4">
                  {[
                    { day: 'Day 1-3', percent: 95 },
                    { day: 'Day 4-6', percent: 82 },
                    { day: 'Day 7-9', percent: 68 },
                    { day: 'Day 10', percent: 78 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/70">{item.day}</span>
                        <span className="text-white">{item.percent}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Top Performing Days</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {[
                  { day: 1, views: 2847, rating: 4.9 },
                  { day: 3, views: 2654, rating: 4.8 },
                  { day: 7, views: 2456, rating: 4.9 },
                  { day: 5, views: 2398, rating: 4.7 },
                  { day: 10, views: 2234, rating: 4.9 },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">Day {item.day}</div>
                    <div className="text-white/50 text-xs">{item.views.toLocaleString()} views</div>
                    <div className="text-yellow-400 text-xs mt-1">⭐ {item.rating}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
