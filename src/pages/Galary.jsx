import React from 'react'
import galary1 from '../assets/galary1.webp'
import galary2 from '../assets/galary2.webp'
import galary3 from '../assets/galary3.webp'
import galary4 from '../assets/galary4.jpeg'
import galary5 from '../assets/galary5.webp'
import galary6 from '../assets/galary6.jpeg'
import galary7 from '../assets/galary7.webp'
import galary8 from '../assets/galary8.webp'
import galary9 from '../assets/galary9.webp'

const Galary = () => {
    const images =[galary1,galary2,galary3,galary4,galary5,galary6,galary7,galary8,galary9]
  return (
    <div className=' w-full grid grid-cols-2 md:grid-cols-3 gap-5 py-10 px-5'>
      {
        images.map((image,index)=>{
            return <div key={index}>
                <img src={image}  alt="image" />
            </div>
        })
      }
      
    </div>
  )
}

export default Galary
