// Window.js
import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Window = ({ icon }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    !isClosed && (
      <Draggable position={position} handle=".handle" onDrag={handleDrag}>
        <div
          className="absolute w-80 h-60 bg-white border-2 border-gray-300"
          style={{ zIndex: 1 }}
        >
          <div className="flex items-center justify-between px-2 py-1 bg-gray-300 handle">
            <span className="font-bold">{icon.name}</span>
            <button className="text-gray-600 hover:text-gray-800" onClick={handleClose}>
              &#xd7;
            </button>
          </div>
          <div className="px-2 py-1">{/* Window content goes here */}</div>
        </div>
      </Draggable>
    )
  );
};

export default Window;
