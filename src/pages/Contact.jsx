import React, { useEffect } from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";

const Contact = () => {
    
   
  return (
    <section className="max-w-6xl mx-auto py-12 px-6 md:mt-10">
   
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
                    <form className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                            <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <input type="text" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                            <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                        </div>
                        <textarea placeholder="Write Your Message Here..." className="w-full p-3 border border-gray-300 rounded-lg mt-4 h-32 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
                        <button className="mt-4 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 flex items-center gap-2 transition-all">
                            <Send size={18} /> SEND MESSAGE
                        </button>
                    </form>
                </div>

        
                <div className=' md:pl-10'>
                    <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
                    <div className="mt-4 flex items-center gap-2">
                        <MapPin className="text-red-500" />
                        <p className="text-gray-600 uppercase">200, madina nagar, indore (M.P)</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <Mail className="text-red-500" /> Email Us
                        </p>
                        <a href="mailto:aminsheikh9065@gmail.com" className="  bg-red-500 text-white px-4 py-2 rounded-lg mt-2 inline-block ">aminsheikh@gmail.com</a>
                    </div>
                    <div className="mt-4">
                        <p className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <Phone className="text-red-500" /> Call Us
                        </p>
                        <a href="tel:+919329394737" className=" bg-red-500 text-white px-4 py-2 rounded-lg mt-2 inline-block">+91-93293-94737</a>
                    </div>
                    <div className="mt-6">
                        <p className="text-lg font-semibold text-gray-900">Follow Us:</p>
                        <div className="flex gap-3 mt-2">
                            <a href="#" className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all"><Facebook className="text-blue-600" /></a>
                            <a href="#" className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all"><Twitter className="text-blue-400" /></a>
                            <a href="www.linkedin.com/in/amin-sheikh-1a885a328" className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all"><Linkedin className="text-blue-700" /></a>
                            <a href="https://www.instagram.com/amin__shaikh_72?igsh=NXl2MWgwMHV2eTk=" className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all"><Instagram className="text-pink-600" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact
