import React from 'react'
import carInjector from '../assets/carInjector.webp'
import aboutCar from '../assets/aboutCars.jpeg'

const AboutPage = () => {
  return (
    <div className=' bg-gray-50 pt-10'>
    <section className="max-w-6xl mx-auto py-12 px-6 md:bg-white md:border md:border-gray-200 md:rounded-lg md:shadow-lg md:shadow-pink-500/50 md:transition-all md:duration-300 md:hover:shadow-2xl md:hover:shadow-pink-600/60 md:hover:scale-105">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <h2 className="text-red-500 font-semibold">About Us</h2>
                <h1 className="text-3xl font-bold text-gray-900 mt-2">We Are Committed ToProvide Safe Ride Solutions</h1>
                <p className="text-gray-600 mt-4">At our car rental service, we prioritize your safety and convenience. With a fleet of well-maintained vehicles and a commitment to customer satisfaction, we ensure a seamless travel experience for every journey.</p>
                <p className="text-gray-600 mt-2">Whether you're traveling for business or leisure, we offer affordable, high-quality transportation solutions tailored to your needs. Enjoy a hassle-free ride with our trusted service.</p>
                <div className="flex items-center mt-4 text-red-500 font-semibold">
                    <span className="text-xl mr-2">📞</span> (+91) 9329394737
                </div>
            </div>
            <div>
                <img src={carInjector} alt="Car Interior" className="rounded-lg shadow-lg"/>
            </div>
        </div>
    </section>
    <section className="bg-gray-50 py-16">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">We Are Proud Of Our Business.</h2>
            <h2 className="text-3xl font-bold text-red-500">Rent Car Now!</h2>
        </div>
        <div className="flex justify-center mt-8 w-full">
            <img src={aboutCar} alt="Cars" className="rounded-lg shadow-lg w-[90%] md:w-[80%] md:h-1/2"/>
        </div>
    </section>
      
    </div>
  )
}

export default AboutPage
