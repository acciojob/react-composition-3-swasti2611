import React, { useState } from 'react'
import '../styles/App.css'
const Secondtooltip = ({text,children}) => {
   
    const [isvisible,setIsvisible]=useState(false);

    function handleMouseEnter(){
    //setIsvisible(true)
    }
function handleMouseLeave(){
    setIsvisible(false)
}

  return (
    <div>
    
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isvisible && <div className="tooltiptext">{text}</div>}
    </div>
       
       </div>
    
  
      
      
    
  )
}

export default Secondtooltip
