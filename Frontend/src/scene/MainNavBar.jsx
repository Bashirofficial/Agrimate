import React from 'react'
import { headerlog } from '../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserFriends,   faComments, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { HeaderOption } from '../components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function MainNavBar() {
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate('/profile');
  }
  return (
    <div className='abolute w-full max-container top-0  bg-[#74a81c] mb-8  drop-shadow-xl'>
      <div className='relative  flex px-24'>
        <div className=' flex-1/3 icon and search'>
          <div className='relative flex'>
            <img 
              src={headerlog}
              alt='headerLogo'
              
              className='object-cover object-center  h-full max-h-[50px] pr-3'
            />     
            <div className='relative '>
              <input
                type="text"
                placeholder="&#xf002; Search"
                className="w-full   my-2 py-1 pl-10 pr-4 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                style={{ fontFamily: 'FontAwesome, Arial' }}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>
        <div className=' px-20 content-center'>
          <div className='flex  justify-between items-center gap-5'>
            <HeaderOption Icon={() => <FontAwesomeIcon icon={faHome} />} title="Home" />
            <HeaderOption Icon={() => <FontAwesomeIcon icon={faUserFriends} />} title="My Network" />
            <HeaderOption Icon={() => <FontAwesomeIcon icon={faComments} />} title="Messaging" />
            <HeaderOption Icon={() => <FontAwesomeIcon icon={faBell} />} title="Notifications" />
          </div>
        </div>
          <div className='flex-1/3 content-center pl-24' onClick={handleProfile}>
            <HeaderOption Icon={() => <FontAwesomeIcon icon={faUser} />} title="User" />
          </div>
      </div>
    </div>
  )
}

export default MainNavBar