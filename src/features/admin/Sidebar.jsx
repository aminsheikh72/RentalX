import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Car, Star, Settings, LogOut, Menu } from 'lucide-react';

function Sidebar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden p-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        <Menu size={28} />
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 min-h-screen w-64 bg-white shadow-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0 md:static md:h-auto z-50`}>
        <div className="p-4 border-b flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
          {/* Close button for mobile */}
          <button className="md:hidden" onClick={toggleSidebar}>
            <LogOut size={24} />
          </button>
        </div>
        <nav className="p-4 flex flex-col gap-2">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive || pathname === '/admin'
                ? "flex items-center gap-2 p-2 rounded"
                : "flex items-center gap-2 p-2 rounded text-gray-600 hover:bg-gray-100"
            }
            onClick={() => setIsOpen(false)}
          >
            <Car size={20} />
            Rentals
          </NavLink>

          <NavLink
            to="/admin/reviews"
            className={({ isActive }) =>
              isActive || pathname === '/admin/reviews'
                ? "flex items-center gap-2 p-2 rounded bg-red-500 text-white"
                : "flex items-center gap-2 p-2 rounded text-gray-600 hover:bg-gray-100"
            }
            onClick={() => setIsOpen(false)}
          >
            <Star size={20} />
            Reviews
          </NavLink>

          <NavLink
            to="/admin/cars"
            className={({ isActive }) =>
              isActive || pathname === '/admin/cars'
                ? "flex items-center gap-2 p-2 rounded bg-red-500 text-white"
                : "flex items-center gap-2 p-2 rounded text-gray-600 hover:bg-gray-100"
            }
            onClick={() => setIsOpen(false)}
          >
            <Settings size={20} />
            Manage Cars
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;