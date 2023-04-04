import React from 'react';
import DraggableIcon from './DraggableIcon';

const DesktopIcons = () => {
  const icons = [
    {
      name: 'Finder',
      image: '/path/to/finder-image.png',
      initialPosition: { x: 0, y: 0 },
    },
    {
      name: 'Applications',
      image: '/path/to/applications-image.png',
      initialPosition: { x: 0, y: 100 },
    },
    {
      name: 'Trash',
      image: '/path/to/trash-image.png',
      initialPosition: { x: 0, y: 200 },
    },
  ];

  return (
    <div className="absolute top-6 left-6 space-y-6">
      {icons.map((icon, index) => (
        <DraggableIcon key={index} icon={icon} />
      ))}
    </div>
  );
};

export default DesktopIcons;