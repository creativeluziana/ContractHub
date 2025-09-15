import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useAuth } from '../../context/AuthContext';
import { 
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  BellIcon,
  CogIcon
} from '@heroicons/react/24/outline';

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  const { logout } = useAuth();

  return (
    <div className="sticky top-0 z-40 flex h-18 shrink-0 items-center justify-between bg-black px-2 xs:px-4 sm:px-6 w-full">
      {/* Left side - Hamburger and Branding */}
      <div className="flex items-center gap-x-3">
        <button
          type="button"
          className="p-2 text-gray-300 hover:text-white lg:hidden transition-colors duration-200"
          onClick={onMenuClick}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-5 w-5 xs:h-6 xs:w-6" aria-hidden="true" strokeWidth={1.5} />
        </button>
        <h1 className="text-sm xs:text-lg sm:text-xl font-semibold text-white">ContractHub</h1>
      </div>

      {/* Right side - Icons and Profile */}
      <div className="flex items-center gap-x-2">
        {/* Notification Bell */}
        <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200 relative">
          <span className="sr-only">Notifications</span>
          <BellIcon className="h-5 w-5 xs:h-6 xs:w-6" strokeWidth={1.5} />
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-medium">3</span>
          </span>
        </button>

        {/* Settings Icon */}
        <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200">
          <span className="sr-only">Settings</span>
          <CogIcon className="h-5 w-5 xs:h-6 xs:w-6" strokeWidth={1.5} />
        </button>

        {/* User Profile Menu */}
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center p-2 hover:bg-gray-800 rounded-lg transition-all duration-200 group">
            <span className="sr-only">Open user menu</span>
            <div className="h-8 w-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">AD</span>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-2xl bg-white/95 backdrop-blur-xl py-2 shadow-hard ring-1 ring-gray-900/5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logout}
                    className={`${
                      active ? 'bg-gray-50' : ''
                    } flex w-full items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200`}
                  >
                    <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" strokeWidth={1.5} />
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Topbar;
