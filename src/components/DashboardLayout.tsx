import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search,
  LogOut,
  ShoppingCart,
  Mail
} from 'lucide-react';

interface DashboardLayoutProps {
  onLogout: () => void;
}

export function DashboardLayout({ onLogout }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">HandsLTD</h1>
        </div>
        <nav className="mt-8">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 transition-colors ${
                isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`
            }
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Overview</span>
          </NavLink>
          <NavLink
            to="/dashboard/customers"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 transition-colors ${
                isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`
            }
          >
            <Users className="h-5 w-5" />
            <span>Customers</span>
          </NavLink>
          <NavLink
            to="/dashboard/orders"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 transition-colors ${
                isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`
            }
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Orders</span>
          </NavLink>
          <NavLink
            to="/dashboard/analytics"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 transition-colors ${
                isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`
            }
          >
            <BarChart3 className="h-5 w-5" />
            <span>Analytics</span>
          </NavLink>
          <NavLink
            to="/dashboard/messages"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 transition-colors ${
                isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`
            }
          >
            <Mail className="h-5 w-5" />
            <span>Messages</span>
          </NavLink>
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 transition-colors ${
                isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`
            }
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-8 py-4">
            <div className="relative flex-1 max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search..."
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Bell className="h-6 w-6" />
              </button>
              <button
                onClick={onLogout}
                className="text-gray-500 hover:text-gray-700"
                title="Logout"
              >
                <LogOut className="h-6 w-6" />
              </button>
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}