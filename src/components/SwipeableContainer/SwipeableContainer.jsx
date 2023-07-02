// SwipeableContainer.js
import { useState } from "react";

const SwipeableContainer = ({ children, onSwipeLeft, onSwipeRight }) => {
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const sensitivity = 50;

    if (startX - endX > sensitivity) {
      onSwipeLeft();
    } else if (endX - startX > sensitivity) {
      onSwipeRight();
    }
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {children}
    </div>
  );
};

export default SwipeableContainer;
