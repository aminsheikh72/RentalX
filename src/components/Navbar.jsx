import { Car, User2, X } from 'lucide-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userLogout } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user } = useSelector(state => state.auth);
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleRemove = () => {
        dispatch(userLogout());
        navigate('/');
        setSidebarOpen(false);
        toast.success("User Logout", { position: "top-center" });
    };

    return (
        <>
            <nav className="w-full bg-gray-50 border-b shadow-md shadow-pink-500/30 z-50">
                <div className="w-full mx-auto flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Car className="w-6 h-6 text-red-600" />
                        <Link to='/' className="font-bold text-xl text-gray-800">Rental<span className='text-red-700 text-2xl'>X</span></Link>
                    </div>

                    {/* 🔹 Desktop Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to='/about' className="hover:text-red-600 transition">ABOUT</Link>
                        <Link to='/services' className="hover:text-red-600 transition">SERVICE</Link>
                        <Link to='/cars' className="hover:text-red-600 transition">CARS</Link>
                        <Link to='/galary' className="hover:text-red-600 transition">GALLERY</Link>
                        <Link to='/contact' className="hover:text-red-600 transition">CONTACT</Link>
                    </div>

                    
                    <div className="flex items-center space-x-3">
                        {!user ? (
                            <Link to='/login'>
                                <button className='px-4 py-1 text-white rounded bg-green-600 hover:bg-green-700 transition'>
                                    LOGIN
                                </button>
                            </Link>
                        ) : (
                            <>
                                <button onClick={handleRemove} className='px-4 py-1 text-white rounded bg-red-600 hover:bg-red-700 uppercase'>
                                    LOGOUT
                                </button>
                                <User2
                                    className='rounded-full border p-1 w-8 h-8 cursor-pointer hover:bg-gray-200 transition'
                                    onClick={() => setSidebarOpen(true)}
                                />
                            </>
                        )}
                    </div>
                </div>
            </nav>

   
            <div className="md:hidden flex justify-around text-sm bg-gray-100 py-2 border-b">
                <Link to='/about' className="hover:text-red-600">ABOUT</Link>
                <Link to='/services' className="hover:text-red-600">SERVICE</Link>
                <Link to='/cars' className="hover:text-red-600">CARS</Link>
                <Link to='/galary' className="hover:text-red-600">GALLERY</Link>
                <Link to='/contact' className="hover:text-red-600">CONTACT</Link>
            </div>

            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-bold">User Panel</h2>
                    <X className="cursor-pointer" onClick={() => setSidebarOpen(false)} />
                </div>

                <div className="p-6 space-y-4">
                    {user ? (
                        <>
                            <p className="text-gray-600 font-medium">Hello, {user?.name || "User"}!</p>
                            {user.isAdmin ? (
                                <Link to="/admin" className="block bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">Admin</Link>
                            ) : (
                                <Link to="/profile" className="block bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">Profile</Link>
                            )}
                            <Link to="/myRentals" className="block bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">My Rentals</Link>
                            <button onClick={handleRemove} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">Logout</button>
                        </>
                    ) : (
                        <>
                            <p className="text-gray-600 font-medium">Welcome, Guest!</p>
                            <Link to="/login" className="block bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">Profile</Link>
                            <Link to="/login" className="block bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">My Rentals</Link>
                            <Link to="/login" className="block bg-green-600 text-white py-2 rounded hover:bg-green-700">Login</Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
