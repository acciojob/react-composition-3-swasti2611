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
      <div className="tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
       
        {isHover && (
          <div className="tooltiptext">
            <div>
              <p className="tooltip">{text}</p>
            </div>
          </div>
        )}
        { children }
  
          
      </div>
    );
  };

export default Tooltip
