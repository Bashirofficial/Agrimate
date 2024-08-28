import React, { useContext } from 'react'
import { farmerPic2 } from '../assets/images'
import { UserContext } from '../components/UserContextProvider'

function UserProfile() {

    const { user, logout } = useContext(UserContext);
  
    if (!user) {
      return <p>Please log in to view your profile.</p>;
    }

    return (
    <div className="p-16 bg-[#e9f2dc]">
    <div className="p-8  bg-[#bfed7e] shadow mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
          <div>
            <p className="font-bold text-gray-700 text-xl">0</p>
            <p className="text-gray-400">Friends</p>
          </div>
          <div>
               <p className="font-bold text-gray-700 text-xl">0</p>
            <p className="text-gray-400">Photos</p>
          </div>
              <div>
               <p className="font-bold text-gray-700 text-xl">0</p>
            <p className="text-gray-400">Comments</p>
          </div>
        </div>
        <div className="relative">
          <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
            <img src={farmerPic2} className="h-full w-full object-center rounded-full"/>
          </div>
        </div>
      
        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
    <button
      className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
    >
      Connect
    </button>
        <button
      className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
    >
      Message
    </button>
        </div>
      </div>
      <div className=' '>
        <button className="text-white py-2 px-4 uppercase rounded bg-red-400 hover:bg-red-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          onClick={logout}
        >
          Logout
        </button>
      </div> 
      <div className="mt-20 text-center border-b pb-12">
        <h1 className="text-4xl font-medium text-gray-700">{user.fullName}</h1>
        
      
        <p className="mt-8 text-gray-500">Farmer</p>
        
      </div>
      
      <div className="mt-12 flex flex-col justify-center">
        <p className="text-gray-600 text-center font-light lg:px-16">USER is a dedicated farmer with over 15 years of experience in agriculture. He specializes in sustainable farming techniques and is passionate about cultivating high-quality crops while maintaining the health of the land. He is eager to connect with agriculture experts and fellow farmers to share knowledge and improve farming practices in the community.</p> 
      </div>
      
    </div>
    </div>
      )
    }

export default UserProfile