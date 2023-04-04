import React, { useState } from 'react';
import Draggable from 'react-draggable';

const MusicPlayerWindow = ({ icon }) => {
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
            className="absolute bg-gray-800 rounded-md overflow-hidden"
            style={{
              top: position.y,
              left: position.x,
              width: '400px',
              height: '300px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className="bg-gray-900 text-white py-2 px-4 flex justify-between items-center">
              <div className="flex items-center">
                <img src="/path/to/music-player-icon.png" alt="Music Player" className="w-6 h-6 mr-2" />
                <span className="font-bold text-sm">Music Player</span>
              </div>
              <button className="text-white font-bold" onClick={handleClose}>
                X
              </button>
            </div>
            <div className="p-4 flex-grow">
              <div className="text-center text-white font-bold text-lg mb-4">Now Playing</div>
              <div className="flex items-center justify-between mb-4">
                <img src="/path/to/album-cover.png" alt="Album Cover" className="w-16 h-16 mr-4" />
                <div className="flex-grow">
                  <div className="text-white font-bold">Song Name</div>
                  <div className="text-gray-300">Artist Name</div>
                </div>
                <div className="flex items-center">
                  <button className="text-white font-bold mx-2">Prev</button>
                  <button className="text-white font-bold mx-2">Play/Pause</button>
                  <button className="text-white font-bold mx-2">Next</button>
                </div>
              </div>
              <div className="text-white text-sm">Album Name - Release Year</div>
              <div className="text-white text-sm mt-2">Genre · Label</div>
              <div className="flex items-center justify-between mt-8">
                <div className="text-white text-sm">00:00</div>
                <div className="text-white text-sm">3:14</div>
              </div>
              <div className="mt-4 bg-white h-1 rounded-full">
                <div className="bg-green-500 h-1 rounded-full"></div>
              </div>
            </div>
          </div>
        </Draggable>
      )
  );
};

export default MusicPlayerWindow;