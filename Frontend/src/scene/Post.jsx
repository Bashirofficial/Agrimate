import { Avatar } from "@mui/material";
import React, {useContext}  from "react";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { UserContext } from "../components/UserContextProvider";
import { farmerPic2 } from "../assets/images";

function Post() {
  const { user }  = useContext(UserContext);
  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }
  return (
    
    <div className="bg-white p-4 mt-10 rounded-lg max-w-xl"  >
      <div className="flex mb-2">
        <Avatar src={farmerPic2}>USER</Avatar>
        <div className="ml-2">
          <h2 className="text-base">{user.fullName}</h2>
          <p className="text-xs text-gray-500">Farmer</p>
          {/* <p>{timestamp}</p> */}
        </div>
      </div>

      <div style={{ overflowWrap: 'anywhere' }}> {/* close to overflow: 'anywhere'--- className="break-words break-all" */}
        <p>The message box.</p>
      </div>

      <div className="flex justify-evenly">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  )
}

export default Post