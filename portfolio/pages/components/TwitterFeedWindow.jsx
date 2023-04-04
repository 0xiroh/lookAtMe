import React, { useState } from "react";
import Draggable from "react-draggable";

const TwitterFeedWindow = ({ icon }) => {
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
          className="absolute bg-white rounded-lg shadow-lg"
          style={{
            zIndex: 1,
            width: "400px",
            height: "500px",
          }}
        >
          <div className="flex items-center justify-between px-2 py-1 bg-blue-400 rounded-t-lg handle">
            <span className="font-bold text-white">{icon.name}</span>
            <button
              className="text-gray-800 hover:text-gray-900"
              onClick={handleClose}
            >
              &#xd7;
            </button>
          </div>
          <div className="p-2">
            <a
              className="twitter-timeline"
              data-theme="light"
              href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
              data-height="400"
            >
              Tweets by TwitterDev
            </a>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
          </div>
        </div>
      </Draggable>
    )
  );
};

export default TwitterFeedWindow;
