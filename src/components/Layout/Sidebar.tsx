import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  DocumentTextIcon, 
  ChartBarIcon, 
  DocumentTextIcon as DocumentReportIcon, 
  CogIcon,
  CloudArrowUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronRightIcon as BackIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const navigation = [
    { name: 'Contracts', href: '/dashboard', icon: DocumentTextIcon },
    { name: 'Insights', href: '/insights', icon: ChartBarIcon },
    { name: 'Reports', href: '/reports', icon: DocumentReportIcon },
    { name: 'Upload Contract', href: '/upload', icon: CloudArrowUpIcon },
    { name: 'Settings', href: '/settings', icon: CogIcon },
  ];

  return (
    <div className={`hidden md:flex md:flex-col md:fixed md:inset-y-0 transition-all duration-300 ${collapsed ? 'md:w-20' : 'md:w-72'}`}>
      <div className="flex-1 flex flex-col min-h-0 bg-white/80 backdrop-blur-xl border-r border-gray-200">
        <div className="flex-1 flex flex-col pt-8 pb-6 overflow-y-auto">
          {/* Back to workspace link */}
          <div className={`px-6 mb-8 ${collapsed ? 'px-4' : ''}`}>
            <a href="#" className="flex items-center text-sm text-gray-700 hover:text-gray-900 active:text-gray-900 focus:text-gray-900 transition-colors duration-200">
              <BackIcon className="h-4 w-4 mr-2" strokeWidth={1.5} />
              {!collapsed && 'Back to workspace'}
            </a>
          </div>
          
          {/* Toggle Button */}
          <div className={`px-6 mb-8 ${collapsed ? 'px-4' : ''}`}>
            <button
              onClick={onToggle}
              className="flex items-center text-sm text-gray-700 hover:text-gray-900 active:text-gray-900 focus:text-gray-900 active:bg-gray-100 transition-colors duration-200"
              title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {collapsed ? (
                <ChevronRightIcon className="h-4 w-4 mr-2" strokeWidth={1.5} />
              ) : (
                <ChevronLeftIcon className="h-4 w-4 mr-2" strokeWidth={1.5} />
              )}
              {!collapsed && (collapsed ? 'Expand' : 'Collapse')}
            </button>
          </div>
          
          {/* Navigation */}
          <nav className={`flex-1 space-y-2 ${collapsed ? 'px-2' : 'px-6'}`}>
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  [
                    'group flex items-center',
                    collapsed ? 'px-3 py-3 justify-center' : 'px-4 py-3',
                    'text-sm font-medium rounded-xl transition-all duration-200',
                    isActive
                      ? 'bg-white text-gray-900 shadow-soft'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 active:bg-gray-200 active:text-gray-900 focus:bg-gray-200 focus:text-gray-900'
                  ].join(' ')
                }
                title={collapsed ? item.name : undefined}
              >
                <item.icon
                  className={`h-5 w-5 flex-shrink-0 ${collapsed ? '' : 'mr-3'}`}
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                {!collapsed && item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
