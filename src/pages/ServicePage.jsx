import { Building, Building2, Luggage, MapPin, Plane,BellRing as Ring } from 'lucide-react'
import React from 'react'

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-red-500 font-bold text-xl mb-2">See Our</h1>
          <h2 className="text-4xl font-bold text-blue-900">Latest Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 - City Transfer */}
          <div className="bg-white p-8 min-h-70 relative group shadow-lg shadow-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-600/60 hover:scale-105 rounded-lg">
            <div className="text-8xl font-bold text-gray-100 absolute top-4 right-4">01</div>
            <div className="relative">
              <div className="text-red-500 mb-4">
                <MapPin className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4 text-green-800 ">City Transfer</h3>
              <p className="text-gray-600">
              Apni manzil tak bina kisi dikkat ke pahunchein! Hum aapko shahar ke kisi bhi kone tak surakshit aur aaramdayak ride provide karte hain.
              </p>
            </div>
          </div>

          {/* Service 2 - Air Transfer */}
          <div className="bg-white p-8 min-h-70 relative group shadow-lg shadow-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-600/60 hover:scale-105 rounded-lg">
            <div className="text-8xl font-bold text-gray-100 absolute top-4 right-4">02</div>
            <div className="relative">
              <div className="text-red-500 mb-4">
                <Plane className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4  text-green-800">Air Transfer</h3>
              <p className="text-gray-600">
              Flight ke liye late hone ki tension chhodiye! Hamari reliable cab service aapko airport tak time pe aur hassle-free pahuncha degi.
              </p>
            </div>
          </div>

          {/* Service 3 - Hospital Transfer */}
          <div className="bg-white p-8 min-h-70 relative group shadow-lg shadow-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-600/60 hover:scale-105 rounded-lg">
            <div className="text-8xl font-bold text-gray-100 absolute top-4 right-4">03</div>
            <div className="relative">
              <div className="text-red-500 mb-4">
                <Building2 className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4 text-green-800">Hospital Transfer</h3>
              <p className="text-gray-600">
              Emergency ya regular check-up? Hamari hospital transfer service tez aur safe hai, jo aapko bina kisi deri ke ilaj tak pahunchaayegi.
              </p>
            </div>
          </div>

          {/* Service 4 - Wedding Ceremony */}
          <div className="bg-white p-8 min-h-70 relative group shadow-lg shadow-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-600/60 hover:scale-105 rounded-lg">
            <div className="text-8xl font-bold text-gray-100 absolute top-4 right-4">04</div>
            <div className="relative">
              <div className="text-red-500 mb-4">
                <Ring className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4  text-green-800">Wedding Ceremony</h3>
              <p className="text-gray-600">
              Aapki shadi ka din special hai, aur hum use aur bhi yaadgaar banayenge. Hamari luxury car service shandar entry ka ehsaas degi.
              </p>
            </div>
          </div>

          {/* Service 5 - Whole City Tour */}
          <div className="bg-white p-8 min-h-70 relative group shadow-lg shadow-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-600/60 hover:scale-105 rounded-lg">
            <div className="text-8xl font-bold text-gray-100 absolute top-4 right-4">05</div>
            <div className="relative">
              <div className="text-red-500 mb-4">
                <Building className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4  text-green-800">Whole City Tour</h3>
              <p className="text-gray-600">
              Shahar ke har khoobsurat nazaron ka maza lijiye bina kisi tension ke. Hamari tour service aapko har khaas jagah le jayegi.
              </p>
            </div>
          </div>

          {/* Service 6 - Baggage Transport */}
          <div className="bg-white p-8 min-h-70 relative group shadow-lg shadow-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-600/60 hover:scale-105 rounded-lg">
            <div className="text-8xl font-bold text-gray-100 absolute top-4 right-4">06</div>
            <div className="relative">
              <div className="text-red-500 mb-4">
                <Luggage className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4  text-green-800">Baggage Transport</h3>
              <p className="text-gray-600">
              Extra saman ka tension na lein! Hamari baggage transport service aapke saman ko surakshit aur time pe pahunchaane ka bharosa deti hai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage
