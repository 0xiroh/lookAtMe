import React from 'react';

const MenuBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-6 bg-gray-800 text-white text-sm flex items-center px-2">
      <span className="pr-4"></span>
      <span className="pr-4">Finder</span>
      <span className="pr-4">File</span>
      <span className="pr-4">Edit</span>
      <span className="pr-4">View</span>
      <span className="pr-4">Go</span>
      <span className="pr-4">Window</span>
      <span className="pr-4">Help</span>
    </div>
  );
};

export default MenuBar;