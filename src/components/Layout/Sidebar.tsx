import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  DocumentTextIcon, 
  ChartBarIcon, 
  DocumentTextIcon as DocumentReportIcon, 
  CogIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';

const Sidebar: React.FC = () => {
  const navigation = [
    { name: 'Contracts', href: '/dashboard', icon: DocumentTextIcon },
    { name: 'Insights', href: '/insights', icon: ChartBarIcon },
    { name: 'Reports', href: '/reports', icon: DocumentReportIcon },
    { name: 'Settings', href: '/settings', icon: CogIcon },
  ];

  return (
    <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 bg-white/80 backdrop-blur-xl border-r border-gray-200/50">
        <div className="flex-1 flex flex-col pt-8 pb-6 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6">
            <div className="h-10 w-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-soft">
              <DocumentTextIcon className="h-6 w-6 text-white" strokeWidth={1.5} />
            </div>
            <span className="ml-3 text-2xl font-light text-gray-900 tracking-tight">Contracts</span>
          </div>
          <nav className="mt-12 flex-1 px-4 space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-50 text-primary-700 shadow-soft border border-primary-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-soft'
                  }`
                }
              >
                <item.icon
                  className="mr-4 h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 border-t border-gray-200/50 p-6">
          <button className="w-full group flex items-center justify-center px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
            <CloudArrowUpIcon className="h-5 w-5 mr-2" strokeWidth={1.5} />
            Upload Contract
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
