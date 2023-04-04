import React, { useState } from "react";
import Draggable from "react-draggable";

const GameWindow = ({ icon }) => {
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
            width: "350px",
            height: "450px",
          }}
        >
          <div className="flex items-center justify-between px-2 py-1 bg-gray-700 rounded-t-lg handle">
            <span className="font-bold">{icon.name}</span>
            <button
              className="text-gray-400 hover:text-white"
              onClick={handleClose}
            >
              &#xd7;
            </button>
          </div>
          <iframe
            src="https://play2048.co/"
            className="w-full h-full border-none"
            title="2048 Game"
          ></iframe>
        </div>
      </Draggable>
    )
  );
};

export default GameWindow;

