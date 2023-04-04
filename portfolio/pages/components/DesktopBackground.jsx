import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import MenuBar from './MenuBar';
import DesktopIcons from './DesktopIcons';
import Dock from './Dock';

const DesktopBackground = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="relative min-h-screen bg-gradient-to-br from-blue-500 to-blue-700">
        <MenuBar />
        <DesktopIcons />
        {/* <Dock /> */}
      </div>
    </DndProvider>
  );
};

export default DesktopBackground;