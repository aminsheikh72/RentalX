import React, { useEffect, useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const Login = () => {
    const {isLoading,isError,message,user}= useSelector((state)=> state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
const[formData,setFormData]= useState({
    email : "",password : ""
})
const {email,password}= formData
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value})
    }
const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(userLogin(formData))
}
useEffect(()=>{
  window.scrollTo(0, 0);
if(user){
navigate('/')
toast.success("Login Successfull",{
    position : "top-center"
})
}
if(isError && message){
    toast.error(message,{
        position : "top-center"
    })
}
},[user,isError,message])
if(isLoading){
    return <Loader/>
}
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 transform transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-500">Car Rental Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="block text-gray-600">Email</label>
            <div className="flex items-center border rounded-lg p-2 focus-within:border-red-500 transition">
              <Mail className="text-gray-400 mr-2" />
              <input 
                type="email" 
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email" 
                className="outline-none w-full bg-transparent focus:ring-0"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-gray-600">Password</label>
            <div className="flex items-center border rounded-lg p-2 focus-within:border-red-500 transition">
              <Lock className="text-gray-400 mr-2" />
              <input 
                type="password" 
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your password" 
                className="outline-none w-full bg-transparent focus:ring-0"
                required
              />
            </div>
          </div>

          <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition transform hover:scale-105">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <Link to="/register" className="text-red-500 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
