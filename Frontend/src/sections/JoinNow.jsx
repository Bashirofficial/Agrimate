import React from 'react'
import { random5 } from '../assets/images'

function JoinNow() {
  return (
    <div className='w-full h-screen flex items-center justify-center relative'>
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
            backgroundImage: `url(${random5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            
            filter: "brightness(0.5)",
            }}
        >
            
        </div>   
        <div className="relative text-center z-10">
        <h1 className="text-5xl font-bold text-white mb-6">
          Get involved in the agricultural uprising
        </h1>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Type your email address"
            className="p-3 w-64 md:w-96 rounded-l-full outline-none"
          />
          <button className="p-3 bg-green-800 text-white font-semibold rounded-r-full hover:bg-lime-600">
            Join Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default JoinNow