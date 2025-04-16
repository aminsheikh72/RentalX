import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Car, Star, Settings, LogOut } from 'lucide-react';

function Sidebar() {
  const {pathname}= useLocation()

  
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>
      <nav className="p-4 flex flex-col gap-2">
        

        <NavLink
          to="/admin"
         className={pathname === '/admin' ? "flex items-center gap-2 p-2 rounded bg-red-500 text-white" : "flex items-center gap-2 p-2 rounded text-gray-600 hover:bg-gray-100" }
        >
          <Car size={20} />
          Rentals
        </NavLink>

        <NavLink
          to="/admin/reviews"
          className={pathname === '/admin/reviews' ? "flex items-center gap-2 p-2 rounded bg-red-500 text-white" : "flex items-center gap-2 p-2 rounded text-gray-600 hover:bg-gray-100" }
        >
          <Star size={20} />
          Reviews
        </NavLink>

        <NavLink
          to="/admin/cars"
          className={pathname === '/admin/cars' ? "flex items-center gap-2 p-2 rounded bg-red-500 text-white" : "flex items-center gap-2 p-2 rounded text-gray-600 hover:bg-gray-100" }
        >
          <Settings size={20} />
          Manage Cars
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
