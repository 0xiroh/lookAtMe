// DraggableIcon.js
import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import GameWindow from './GameWindow';
import Mario64EmulatorWindow from './Mario64EmulatorWindow';
import MusicPlayerWindow from './MusicPlayerWindow';
import TwitterFeedWindow from './TwitterFeedWindow';
import Window from './Window';
import YouTubeWindow from './YouTubeWindow';

const DraggableIcon = ({ icon }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedPosition = localStorage.getItem(icon.name);
      if (storedPosition) {
        setPosition(JSON.parse(storedPosition));
      } else {
        setPosition(icon.initialPosition);
      }
    }
  }, []);

  const handleStop = (e, data) => {
    setPosition({ x: data.x, y: data.y });
    if (typeof window !== 'undefined') {
      localStorage.setItem(icon.name, JSON.stringify({ x: data.x, y: data.y }));
    }
  };

  const handleClick = () => {
    setIsWindowOpen(true);
  };

  return (
    <>
      <Draggable position={position} onStop={handleStop}>
        <div
          className="text-center w-20"
          style={{
            position: 'absolute',
            cursor: 'move',
          }}
          onClick={handleClick}
        >
          <img
            src={icon.image}
            alt={icon.name}
            className="w-12 h-12 mx-auto mb-2"
          />
          <span className="text-white text-xs">{icon.name}</span>
        </div>
      </Draggable>
      {isWindowOpen && <Mario64EmulatorWindow icon={icon} />}
    </>
   );
};

export default DraggableIcon;