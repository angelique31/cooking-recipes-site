// import { useState } from "react";
// import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
// import {
//   incrementCurrentIndex,
//   decrementCurrentIndex,
// } from "../../store/actions/recipeActions";

// const SwipeableContainer = ({ children }) => {
//   const [startX, setStartX] = useState(0);
//   const dispatch = useDispatch();

//   const handleTouchStart = (e) => {
//     setStartX(e.touches[0].clientX);
//   };

//   const handleTouchEnd = (e) => {
//     const endX = e.changedTouches[0].clientX;
//     const sensitivity = 50;

//     if (startX - endX > sensitivity) {
//       dispatch(incrementCurrentIndex());
//     } else if (endX - startX > sensitivity) {
//       dispatch(decrementCurrentIndex());
//     }
//   };

//   return (
//     <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
//       {children}
//     </div>
//   );
// };

// SwipeableContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default SwipeableContainer;

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
