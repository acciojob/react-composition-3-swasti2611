import React, { useState } from 'react'

const Tooltip = ({text,children}) => {
   
    const [isvisible,setIsvisible]=useState(false);

    function handleHover(){
    setIsvisible(true)
    }
function handleLeave(){
    setIsvisible(false)
}

  return (
    <div>
    
    <div className='tooltip' onMouseOver={handleHover} onMouseLeave={handleLeave}>
       {isvisible && <div className="tooltiptext">
          <div>
            <h2 className="tooltip">{text}</h2>
           </div>
          </div>
       }
       {children }
       
       
       </div>
    
  
      
      
    </div>
  )
}

export default Tooltip
