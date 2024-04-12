import React, { useState } from 'react'

const Tooltip = ({text,children}) => {
   
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
      setIsHover(true);
    };
  
    const handleMouseLeave = () => {
      setIsHover(false);
    };
  
    return (
      <div className="tooltip" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children }
        {isHover && (
          <div className="tooltiptext">
            <div>
              <p className="tooltip">{text}</p>
            </div>
          </div>
        )}
  
          
      </div>
    );
  };

export default Tooltip
