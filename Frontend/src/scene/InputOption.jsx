import React from "react";
 

function InputOptions({ Icon, title, color }) {
  return (
    <div className="flex  items-center mt-4 text-gray-500 p-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
      <Icon style={{ color: color }} />
      <h4 className="ml-1 text-xs">{title}</h4>
    </div>
  );
}

export default InputOptions;