import React from 'react'
import heroImg from '../assets/heroImg.avif'

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 "
          style={{
            backgroundImage:` url(${heroImg})`,
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <p className="text-xl mb-4">For Rent $70 Per Day</p>
            <h1 className="text-6xl font-bold mb-6">Reserved Now</h1>
            <h2 className="text-6xl font-bold mb-8">& Get 50% Off</h2>
            <button className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition">
              RESERVE NOW!
            </button>
          </div>
        </div>
      </div>
  )
}

export default Hero
