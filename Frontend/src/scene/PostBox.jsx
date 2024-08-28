import React, { useState } from 'react';

import InputOption from './InputOption'; // Adjust the path as needed
import PhotoIcon from '@mui/icons-material/Photo';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ArticleIcon from '@mui/icons-material/Article';

import { FaImage, FaSmile, FaCog, FaPlus } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { farmerPic2 } from '../assets/images';
function PostBox() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden  px-6 margin-y  max-w-xl ">
        <div className="flex items-center p-4">
          <img src={farmerPic2} alt="User" className="w-12 h-12 rounded-full mr-4" />
          <button className="flex-grow px-4 py-2 border border-gray-300 rounded-full text-left text-gray-600 focus:outline-none" 
            onClick={openDialog}>
            Start a post
          </button>
        </div>
        <div className="flex justify-around py-2 px-4 border-t border-gray-200">
          <button className="flex items-center text-gray-600">
            {/*<img src={media} alt="Media" className="mr-2  max-h-[20px]" />*/}
          <InputOption 
            Icon={PhotoIcon} 
            title="Photo" 
            color="#70B5F9" 
          />     
          </button>

          <button className="flex items-center text-gray-600">
          {/*<FontAwesomeIcon  icon={faVideo}    className="mr-2 hover:text-gray-700" />*/}
          <InputOption
            Icon={VideoLibraryIcon} 
            title="Video" 
            color="#E7A33E" 
          />
              
          </button>
          <button className="flex items-center text-gray-600" onClick={openDialog}>
           {/* <img src={article} alt="Article"  className="mr-2   max-h-[20px]" />*/}
            <InputOption
              Icon={ArticleIcon} 
              title="Article" 
              color="#7FC15E" 
            />
              
          </button>
          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white w-[500px] p-4 rounded-lg shadow-lg relative">
            {/* Close Button */}
                <button onClick={closeDialog} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                  <AiOutlineClose size={24} />
                </button>
        
        {/* Header */}
            <div className="flex items-center space-x-2 mb-4">
              <img src={farmerPic2} alt="User" className="w-10 h-10 rounded-full" />
              <div>
                <h2 className="font-semibold">USER</h2>
              </div>
            </div>
        
        {/* Text Area */}
            <textarea 
              className="w-full h-32 border-none p-2 text-lg placeholder-gray-500 focus:outline-none resize-none"
              placeholder="What do you want to talk about?"
            />

            {/* Icons and Post Button */}
            <div className="flex justify-between items-center mt-4 border-t pt-4">
              <div className="flex space-x-4 text-gray-500">
                <FaSmile size={20} className="hover:text-gray-700 cursor-pointer" />
                <FaImage size={20} className="hover:text-gray-700 cursor-pointer" />
                <FaCog size={20} className="hover:text-gray-700 cursor-pointer" />
                <FaPlus size={20} className="hover:text-gray-700 cursor-pointer" />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700" onClick={closeDialog}>
                Post
              </button>
            </div>
         </div>
       </div>
      )}
        </div>
      </div>
    </>
  );
}

export default PostBox;
