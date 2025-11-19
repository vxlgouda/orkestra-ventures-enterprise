import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { Users, Mail, Settings, LogOut, FileText } from 'lucide-react';

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
            <h3 className="text-2xl font-bold text-[oklch(0.25_0.02_240)] mb-1">0</h3>
            <p className="text-sm text-[oklch(0.45_0.02_240)]">Total Applications</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-[oklch(0.90_0.02_240)]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[oklch(0.95_0.02_240)] rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-[oklch(0.65_0.15_30)]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[oklch(0.25_0.02_240)] mb-1">0</h3>
            <p className="text-sm text-[oklch(0.45_0.02_240)]">Contact Messages</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-[oklch(0.90_0.02_240)]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[oklch(0.95_0.02_240)] rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-[oklch(0.60_0.10_180)]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[oklch(0.25_0.02_240)] mb-1">0</h3>
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

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[oklch(0.90_0.02_240)]">
          <h2 className="text-xl font-bold text-[oklch(0.25_0.02_240)] mb-6">Recent Activity</h2>
          <div className="text-center py-12 text-[oklch(0.45_0.02_240)]">
            <p>No recent activity to display</p>
            <p className="text-sm mt-2">Activity will appear here once you start receiving applications and messages</p>
          </div>
        </div>
      </main>
    </div>
  );
}
