import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { 
  CogIcon,
  UserIcon,
  BellIcon,
  ShieldCheckIcon,
  KeyIcon,
  CloudArrowUpIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    weekly: true,
    monthly: true
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: UserIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon },
    { id: 'integrations', name: 'Integrations', icon: KeyIcon },
    { id: 'data', name: 'Data & Export', icon: CloudArrowUpIcon },
    { id: 'preferences', name: 'Preferences', icon: CogIcon }
  ];

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-6 xs:space-y-8">
      {/* Header */}
      <PageHeader
        title="Settings"
        subtitle="Manage your account settings and preferences"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-50 text-primary-700 border border-primary-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <tab.icon className="mr-3 h-5 w-5" strokeWidth={1.5} />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-soft border border-gray-200/50 p-8">
            {activeTab === 'profile' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Profile Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="john.doe@company.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft">
                        <option>Contract Manager</option>
                        <option>Legal Counsel</option>
                        <option>Executive</option>
                        <option>Analyst</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Notification Preferences</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                        <p className="text-sm text-gray-500">Receive updates via email</p>
                      </div>
                      <button
                        onClick={() => handleNotificationChange('email')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                          notifications.email ? 'bg-primary-600' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                            notifications.email ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Push Notifications</h4>
                        <p className="text-sm text-gray-500">Browser push notifications</p>
                      </div>
                      <button
                        onClick={() => handleNotificationChange('push')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                          notifications.push ? 'bg-primary-600' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                            notifications.push ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Security Settings</h3>
                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Change Password</h4>
                      <p className="text-sm text-gray-500 mb-4">Update your password to keep your account secure</p>
                      <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200">
                        Change Password
                      </button>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Two-Factor Authentication</h4>
                      <p className="text-sm text-gray-500 mb-4">Add an extra layer of security to your account</p>
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                          <CheckIcon className="h-3 w-3 mr-1" />
                          Enabled
                        </span>
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                          Manage
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Preferences</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft">
                        <option>UTC-8 (Pacific)</option>
                        <option>UTC-5 (Eastern)</option>
                        <option>UTC+0 (GMT)</option>
                        <option>UTC+1 (CET)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
