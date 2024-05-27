import React from 'react';
import '../App.css'
const ProgressBar = ({ completion }) => {
  return (
    <div className=" h-5 w-[55%] bg-gray-300 rounded-md ">
      <div
        className="h-full bg-yellow-400  text-center text-white rounded-l-md"
        style={{ width: `${completion}%` }}
      >
        
      </div>
    </div>
  );
};

export default ProgressBar;
