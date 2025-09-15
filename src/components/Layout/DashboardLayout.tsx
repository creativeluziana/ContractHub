import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { 
  DocumentTextIcon, 
  ChartBarIcon, 
  DocumentTextIcon as DocumentReportIcon, 
  CogIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navigation = [
    { name: 'Contracts', href: '/dashboard', icon: DocumentTextIcon },
    { name: 'Insights', href: '/insights', icon: ChartBarIcon },
    { name: 'Reports', href: '/reports', icon: DocumentReportIcon },
    { name: 'Upload Contract', href: '/upload', icon: CloudArrowUpIcon },
    { name: 'Settings', href: '/settings', icon: CogIcon },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-50">
      <Topbar onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        
        <div className={`flex flex-col w-0 flex-1 overflow-hidden transition-all duration-300 ${sidebarCollapsed ? 'md:ml-20' : 'md:ml-72'}`}>
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-4 xs:py-6 sm:py-8">
              <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 flex z-40 md:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="relative flex-1 flex flex-col w-screen h-screen bg-black">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 h-0 pt-6 xs:pt-8 pb-4 overflow-y-auto">
              {/* Back to workspace link */}
              <div className="px-4 xs:px-6 mb-6 xs:mb-8">
                <a href="#" onClick={() => setSidebarOpen(false)} className="flex items-center text-sm text-gray-100 hover:text-white transition-colors duration-200 cursor-pointer">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  Back to workspace
                </a>
              </div>
              
              {/* Navigation */}
              <nav className="px-4 xs:px-6 space-y-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-center px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl ${
                        isActive
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-200 hover:bg-gray-800 hover:text-white'
                      }`
                    }
                  >
                    <item.icon className="mr-3 h-5 w-5" strokeWidth={1.5} />
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
