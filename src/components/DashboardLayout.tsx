import  { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard,
  Users,
  //BarChart3,
  Settings,
  Bell,
  Search,
  LogOut,
  ShoppingCart,
  Mail,
  User,
  Quote,
  Package,
  Menu,
  X,
  Briefcase,
  BellDot
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardLayoutProps {
  onLogout: () => void;
}

export function DashboardLayout({ onLogout }: DashboardLayoutProps) {
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const NavLinks = () => (
    <>
      <NavLink
        to="/dashboard"
        end
        onClick={closeMobileMenu}
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
        onClick={closeMobileMenu}
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
        onClick={closeMobileMenu}
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
        to="/dashboard/products"
        onClick={closeMobileMenu}
        className={({ isActive }) =>
          `flex items-center space-x-3 px-4 py-3 transition-colors ${
            isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
          }`
        }
      >
        <Package className="h-5 w-5" />
        <span>Products</span>
      </NavLink>
      <NavLink
            to="/dashboard/services"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 transition-colors ${
                isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`
            }
          >
            <Briefcase className="h-5 w-5" />
            <span>Services</span>
          </NavLink>
      {/* <NavLink
        to="/dashboard/analytics"
        onClick={closeMobileMenu}
        className={({ isActive }) =>
          `flex items-center space-x-3 px-4 py-3 transition-colors ${
            isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
          }`
        }
      >
        <BarChart3 className="h-5 w-5" />
        <span>Analytics</span>
      </NavLink> */}
      <NavLink
        to="/dashboard/messages"
        onClick={closeMobileMenu}
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
        to="/dashboard/testimonials"
        onClick={closeMobileMenu}
        className={({ isActive }) =>
          `flex items-center space-x-3 px-4 py-3 transition-colors ${
            isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
          }`
        }
      >
        <Quote className="h-5 w-5" />
        <span>Testimonials</span>
      </NavLink>
      <NavLink
            to="/dashboard/updates" // Add this link
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 transition-colors ${
                isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`
            }
          >
            <BellDot className="h-5 w-5" />
            <span>Updates</span>
      </NavLink>
      <NavLink
        to="/dashboard/settings"
        onClick={closeMobileMenu}
        className={({ isActive }) =>
          `flex items-center space-x-3 px-4 py-3 transition-colors ${
            isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
          }`
        }
      >
        <Settings className="h-5 w-5" />
        <span>Settings</span>
      </NavLink>
    </>
  );

  return (
    <div className="min-h-screen flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-blue-600 text-white flex-col">
        <div className="p-4">
          <h1 className="text-2xl font-bold">HandsLTD</h1>
        </div>
        <nav className="flex-1">
          <NavLinks />
        </nav>
        {/* Bottom Logout Button */}
        <div className="p-4 border-t border-blue-500">
          <button
            onClick={onLogout}
            className="flex items-center space-x-3 w-full px-4 py-3 text-white hover:bg-blue-700 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {showMobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-64 bg-blue-600 text-white flex flex-col z-50 md:hidden"
            >
              <div className="p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">HandsLTD</h1>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex-1">
                <NavLinks />
              </nav>
              <div className="p-4 border-t border-blue-500">
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-white hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-4 md:px-8 py-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(true)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="relative flex-1 max-w-xl mx-4">
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
              <div className="relative">
                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span className="text-white text-sm font-medium">JD</span>
                </button>
                
                {/* Profile Dropdown */}
                {showProfile && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">JD</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">John Doe</p>
                          <p className="text-sm text-gray-500">john@example.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>View Profile</span>
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                        <Settings className="h-4 w-4" />
                        <span>Account Settings</span>
                      </button>
                      <button
                        onClick={onLogout}
                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}