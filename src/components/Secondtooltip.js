import React, { useState } from 'react'

const Secondtooltip = ({text,children}) => {
   
    const [isvisible,setIsvisible]=useState(false);

    function handleHover(){
    setIsvisible(true)
    }
function handleLeave(){
    setIsvisible(false)
}

  return (
    <div>
    
    <div className='tooltip' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
       {isvisible && <div className="tooltiptext">
          <div>
            <p className="tooltip" style={{marginTop:'10px'}}>{text}</p>
           </div>
          </div>
       }
       
       {children }
       
       
       </div>
    
  
      
      
    </div>
  )
}

export default Secondtooltip
