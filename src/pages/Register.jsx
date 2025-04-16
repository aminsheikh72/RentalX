import React, { useEffect, useState } from "react";
import { User, Mail, Lock, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const Register = () => {
    const {isLoading,isError,message,user}= useSelector((state)=> state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
const[formData,setFormData]= useState({
    name : "", email : "",  phone : "" ,password : "", password2 : ""
})
const {name,email,password,phone,password2}= formData
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value})
    }
const handleSubmit=(e)=>{
    e.preventDefault()
    if(!name || !email || !password || !phone || !password2){
        toast.error(message,{
            position : "top-center"
        })
    }
    if(password !== password2){
        toast.error("Password does not match", {
            position : "top-center"
        })
    }
    dispatch(userRegister(formData))
}
useEffect(()=>{
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
    <div className="flex justify-center items-center h-screen bg-gray-50 overflow-hidden">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 transform transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-500">Create an Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="block text-gray-600">Full Name</label>
            <div className="flex items-center border rounded-lg p-2 focus-within:border-red-500 transition">
              <User className="text-gray-400 mr-2" />
              <input 
                type="text" 
                name="name"
                id="name"
                onChange={handleChange}
                value={name}
                placeholder="Enter your full name" 
                className="outline-none w-full bg-transparent focus:ring-0"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-gray-600">Email</label>
            <div className="flex items-center border rounded-lg p-2 focus-within:border-red-500 transition">
              <Mail className="text-gray-400 mr-2" />
              <input 
                type="email" 
                name="email"
                id="email"
                onChange={handleChange}
                value={email}
                placeholder="Enter your email" 
                className="outline-none w-full bg-transparent focus:ring-0"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-gray-600">Phone</label>
            <div className="flex items-center border rounded-lg p-2 focus-within:border-red-500 transition">
              <Phone className="text-gray-400 mr-2" />
              <input 
    type="tel"  // ✅ Corrected from 'phone' to 'tel'
    name="phone"
    id="phone"
    onChange={handleChange}
    value={phone}
    placeholder="Enter your phone number" 
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
                name="password"
                id="password"
                onChange={handleChange}
                value={password}
                placeholder="Enter your password" 
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
                name="password2"
                id="password2"
                onChange={handleChange}
                value={password2}
                placeholder="Confirm password" 
                className="outline-none w-full bg-transparent focus:ring-0"
                required
              />
            </div>
          </div>
          
         

          <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition transform hover:scale-105">
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account? <Link to="/login" className="text-red-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
