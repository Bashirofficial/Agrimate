import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { farmerPic2 } from "../assets/images";
import { UserContext } from "../components/UserContextProvider";

function SideBar() {
  const { user }  = useContext(UserContext);
  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }
  return (
    <div className="sticky  top-20 w-full max-w-xs rounded-lg text-center h-fit px-8">
      {/* TOP */}
      <div className="flex flex-col items-center border border-gray-300 border-b-0 rounded-t-lg bg-white pb-2">
        <img
          src="https://images.pexels.com/photos/22602397/pexels-photo-22602397/free-photo-of-cascades-on-stream-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="mb-[-20px] w-full h-15 rounded-t-lg object-cover"
        />
        <img src={farmerPic2} alt="User Profile" className="mb-2 h-16 w-16 rounded-full object-cover" />
        <h2 className="text-lg">{user.fullName}</h2>
        <h4 className="text-sm text-gray-500">{user.email}</h4>
      </div>

      {/* STATS/CENTER */}
      <div className="p-2 mb-2 border border-gray-300 bg-white rounded-b-lg">
        <div className="flex justify-between mt-2">
          <p className="text-gray-500 text-sm font-semibold">Who viewed you</p>
          <p className="font-bold text-green-700">NIL</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-gray-500 text-sm font-semibold">Views on post</p>
          <p className="font-bold text-green-700">NIL</p>
        </div>
      </div>

      {/* BOTTOM */}
      
    </div>
  );
}

export default SideBar;
