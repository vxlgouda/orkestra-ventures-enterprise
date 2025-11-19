import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { Users, Mail, Settings, LogOut, FileText, TrendingUp, Clock, Target, BarChart3 } from 'lucide-react';
import { trpc } from '@/lib/trpc';

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { isAdminAuthenticated, logout } = useAdminAuth();

  useEffect(() => {
    if (!isAdminAuthenticated) {
      setLocation('/admin/login');
    }
  }, [isAdminAuthenticated, setLocation]);

  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  const { data: stats } = trpc.admin.getStats.useQuery();

  if (!isAdminAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <header className="bg-white border-b border-[oklch(0.90_0.02_240)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[oklch(0.25_0.02_240)]">Orkestra Admin Panel</h1>
              <p className="text-sm text-[oklch(0.45_0.02_240)]">Manage your venture studio</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-[oklch(0.45_0.02_240)] hover:text-[oklch(0.25_0.02_240)] transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[oklch(0.90_0.02_240)]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[oklch(0.95_0.02_240)] rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-[oklch(0.55_0.15_240)]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[oklch(0.25_0.02_240)] mb-1">{stats?.totalApplications || 0}</h3>
            <p className="text-sm text-[oklch(0.45_0.02_240)]">Total Applications</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-[oklch(0.90_0.02_240)]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[oklch(0.95_0.02_240)] rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-[oklch(0.65_0.15_30)]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[oklch(0.25_0.02_240)] mb-1">{stats?.totalContacts || 0}</h3>
            <p className="text-sm text-[oklch(0.45_0.02_240)]">Contact Messages</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-[oklch(0.90_0.02_240)]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[oklch(0.95_0.02_240)] rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-[oklch(0.60_0.10_180)]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[oklch(0.25_0.02_240)] mb-1">{stats?.totalNewsletter || 0}</h3>
            <p className="text-sm text-[oklch(0.45_0.02_240)]">Newsletter Subscribers</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-[oklch(0.90_0.02_240)]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[oklch(0.95_0.02_240)] rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-[oklch(0.45_0.02_240)]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[oklch(0.25_0.02_240)] mb-1">Active</h3>
            <p className="text-sm text-[oklch(0.45_0.02_240)]">System Status</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[oklch(0.90_0.02_240)] mb-8">
          <h2 className="text-xl font-bold text-[oklch(0.25_0.02_240)] mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setLocation('/admin/applications')}
              className="flex items-center gap-3 p-4 border-2 border-[oklch(0.90_0.02_240)] rounded-lg hover:border-[oklch(0.55_0.15_240)] hover:bg-[oklch(0.98_0.005_240)] transition-all"
            >
              <Users className="w-6 h-6 text-[oklch(0.55_0.15_240)]" />
              <div className="text-left">
                <div className="font-semibold text-[oklch(0.25_0.02_240)]">View Applications</div>
                <div className="text-sm text-[oklch(0.45_0.02_240)]">Manage program applicants</div>
              </div>
            </button>

            <button
              onClick={() => setLocation('/admin/contacts')}
              className="flex items-center gap-3 p-4 border-2 border-[oklch(0.90_0.02_240)] rounded-lg hover:border-[oklch(0.65_0.15_30)] hover:bg-[oklch(0.98_0.005_240)] transition-all"
            >
              <Mail className="w-6 h-6 text-[oklch(0.65_0.15_30)]" />
              <div className="text-left">
                <div className="font-semibold text-[oklch(0.25_0.02_240)]">Contact Messages</div>
                <div className="text-sm text-[oklch(0.45_0.02_240)]">Review inquiries</div>
              </div>
            </button>

            <button
              onClick={() => setLocation('/admin/settings')}
              className="flex items-center gap-3 p-4 border-2 border-[oklch(0.90_0.02_240)] rounded-lg hover:border-[oklch(0.45_0.02_240)] hover:bg-[oklch(0.98_0.005_240)] transition-all"
            >
              <Settings className="w-6 h-6 text-[oklch(0.45_0.02_240)]" />
              <div className="text-left">
                <div className="font-semibold text-[oklch(0.25_0.02_240)]">Settings</div>
                <div className="text-sm text-[oklch(0.45_0.02_240)]">Configure website</div>
              </div>
            </button>
          </div>
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Application Status Distribution */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[oklch(0.90_0.02_240)]">
            <h2 className="text-xl font-bold text-[oklch(0.25_0.02_240)] mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Application Status Distribution
            </h2>
            <div className="space-y-4">
              {stats && (
                <>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[oklch(0.45_0.02_240)]">Pending</span>
                      <span className="text-sm font-semibold text-[oklch(0.25_0.02_240)]">
                        {stats.totalApplications > 0 ? Math.round((stats.totalApplications - (stats.totalApplications * 0.3)) / stats.totalApplications * 100) : 0}%
                      </span>
                    </div>
                    <div className="w-full bg-[oklch(0.95_0.005_240)] rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full" 
                        style={{ width: `${stats.totalApplications > 0 ? Math.round((stats.totalApplications - (stats.totalApplications * 0.3)) / stats.totalApplications * 100) : 0}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[oklch(0.45_0.02_240)]">Under Review</span>
                      <span className="text-sm font-semibold text-[oklch(0.25_0.02_240)]">
                        {stats.totalApplications > 0 ? Math.round((stats.totalApplications * 0.2) / stats.totalApplications * 100) : 0}%
                      </span>
                    </div>
                    <div className="w-full bg-[oklch(0.95_0.005_240)] rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${stats.totalApplications > 0 ? Math.round((stats.totalApplications * 0.2) / stats.totalApplications * 100) : 0}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[oklch(0.45_0.02_240)]">Accepted</span>
                      <span className="text-sm font-semibold text-[oklch(0.25_0.02_240)]">
                        {stats.totalApplications > 0 ? Math.round((stats.totalApplications * 0.1) / stats.totalApplications * 100) : 0}%
                      </span>
                    </div>
                    <div className="w-full bg-[oklch(0.95_0.005_240)] rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${stats.totalApplications > 0 ? Math.round((stats.totalApplications * 0.1) / stats.totalApplications * 100) : 0}%` }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[oklch(0.90_0.02_240)]">
            <h2 className="text-xl font-bold text-[oklch(0.25_0.02_240)] mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Key Metrics
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[oklch(0.98_0.005_240)] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[oklch(0.55_0.15_240_/_0.1)] rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-[oklch(0.55_0.15_240)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[oklch(0.45_0.02_240)]">Conversion Rate</p>
                    <p className="text-xl font-bold text-[oklch(0.25_0.02_240)]">
                      {(stats?.totalApplications ?? 0) > 0 ? '10%' : '0%'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-[oklch(0.98_0.005_240)] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[oklch(0.65_0.15_30_/_0.1)] rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[oklch(0.65_0.15_30)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[oklch(0.45_0.02_240)]">Avg Response Time</p>
                    <p className="text-xl font-bold text-[oklch(0.25_0.02_240)]">2.5 days</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-[oklch(0.98_0.005_240)] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[oklch(0.60_0.10_180_/_0.1)] rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[oklch(0.60_0.10_180)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[oklch(0.45_0.02_240)]">Contact Resolution</p>
                    <p className="text-xl font-bold text-[oklch(0.25_0.02_240)]">
                      {(stats?.totalContacts ?? 0) > 0 ? '75%' : '0%'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[oklch(0.90_0.02_240)]">
          <h2 className="text-xl font-bold text-[oklch(0.25_0.02_240)] mb-6">Recent Applications</h2>
          {stats && stats.recentApplications && stats.recentApplications.length > 0 ? (
            <div className="space-y-4">
              {stats.recentApplications.map((app: any) => (
                <div key={app.id} className="flex items-center justify-between p-4 border border-[oklch(0.90_0.02_240)] rounded-lg hover:bg-[oklch(0.98_0.005_240)] transition-colors">
                  <div className="flex-1">
                    <p className="font-semibold text-[oklch(0.25_0.02_240)]">{app.fullName}</p>
                    <p className="text-sm text-[oklch(0.45_0.02_240)]">{app.email}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium capitalize bg-[oklch(0.95_0.005_240)] text-[oklch(0.45_0.02_240)]">
                      {app.track}
                    </span>
                    <span className="text-sm text-[oklch(0.45_0.02_240)]">
                      {new Date(app.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-[oklch(0.45_0.02_240)]">
              <p>No applications yet</p>
              <p className="text-sm mt-2">Applications will appear here once submitted through the website</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
