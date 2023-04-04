import React, { useState } from "react";
import Draggable from "react-draggable";

const Mario64EmulatorWindow = ({ icon }) => {
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
          className="absolute bg-gray-800 rounded-lg shadow-lg"
          style={{
            zIndex: 1,
            width: "640px",
            height: "480px",
          }}
        >
          <div className="flex items-center justify-between px-2 py-1 bg-red-400 rounded-t-lg handle">
            <span className="font-bold text-white">{icon.name}</span>
            <button
              className="text-gray-800 hover:text-gray-900"
              onClick={handleClose}
            >
              &#xd7;
            </button>
          </div>
          <iframe
            src="https://www.playroms.net/n64-roms/super-mario-64/"
            title="Mario 64 Emulator"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </Draggable>
    )
  );
};

export default Mario64EmulatorWindow;
