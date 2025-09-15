import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useAuth } from '../../context/AuthContext';
import { 
  UserCircleIcon, 
  ArrowRightOnRectangleIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();

  return (
    <div className="sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-4 border-b border-gray-200/50 bg-white/80 backdrop-blur-xl px-6 shadow-soft sm:gap-x-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-600 hover:text-gray-900 lg:hidden transition-colors duration-200"
        onClick={onMenuClick}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.5} />
      </button>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="relative flex flex-1"></div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center p-2 rounded-xl hover:bg-gray-50 transition-all duration-200 group">
              <span className="sr-only">Open user menu</span>
              <div className="h-10 w-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-200">
                <UserCircleIcon className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <span className="hidden lg:flex lg:items-center">
                <span className="ml-3 text-sm font-medium leading-6 text-gray-900" aria-hidden="true">
                  {user?.username}
                </span>
              </span>
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
    </div>
  );
};

export default Topbar;
