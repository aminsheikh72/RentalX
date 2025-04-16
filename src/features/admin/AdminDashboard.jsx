import React, { useState } from 'react';

import Sidebar from './Sidebar';
import AddCarForm from './AddCarForm';
import { Outlet } from 'react-router-dom';
import CarsList from './CarsList';


function AdminDashboard() {

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 overflow-auto p-8">
      
      <Outlet/>
        
      </div>
    </div>
  );
}

export default AdminDashboard;