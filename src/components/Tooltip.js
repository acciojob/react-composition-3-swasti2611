import React, { useState } from 'react';
import './../styles//App.css';

const Tooltip = ({ text, children }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
   // setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isHover && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;
