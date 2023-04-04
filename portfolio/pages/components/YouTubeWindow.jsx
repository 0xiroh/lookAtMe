import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

const YouTubeWindow = ({ icon }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClosed, setIsClosed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);

  const handleIconClick = () => {
    setIsClosed(false);
  };

  const handleClose = () => {
    setIsClosed(true);
  };

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handlePlayerReady = (event) => {
    setPlayer(event.target);
    setIsPlaying(true);
  };
  
  useEffect(() => {
    if (player) {
      player.addEventListener("onReady", () => {
        player.playVideo();
      });
    }
  }, [player]);
  

  const handlePlayerStateChange = (event) => {
    if (event.data === 0) {
      setIsPlaying(false);
      setPlayer(null);
    }
  };

  return (
    !isClosed && (
      <Draggable position={position} handle=".handle" onDrag={handleDrag}>
        <div className="absolute bg-white rounded-md border-2 border-gray-300" style={{ zIndex: 1 }}>
          <div className="flex items-center justify-between px-2 py-1 bg-gray-300 handle">
            <span className="font-bold">{icon.name}</span>
            <button className="text-gray-600 hover:text-gray-800" onClick={handleClose}>
              &#xd7;
            </button>
          </div>
          <div className="p-4 h-[40vh] w-[40vw]">
            {isPlaying ? (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-[100%] h-[35vh]"
                  src={`https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="text-center">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md"
                  onClick={handlePlayerReady}
                >
                  Play
                </button>
              </div>
            )}
          </div>
        </div>
      </Draggable>
    )
  );
};

export default YouTubeWindow;
