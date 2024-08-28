import React from 'react'


function HeaderOption({ Icon,  title }) {
  
  return (
    <div 
      
      className="flex flex-col items-center mr-5 text-black cursor-pointer hover:text-gray-500"
    >
       <Icon className="h-6 w-6" />
     
      <h3 className="font-normal text-xs">{title}</h3>
    </div>
  )
}

export default HeaderOption