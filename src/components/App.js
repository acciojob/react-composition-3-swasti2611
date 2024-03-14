
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
import Secondtooltip from "./Secondtooltip";

const App = () => {
  return (
    <div>
        <Tooltip text={"This is a Tooltip"}>
            <h1>Hover over me</h1>
        </Tooltip>
        <Secondtooltip text={"Hover over me to see another tooltip"}>
          <p>This is another tooltip</p>
        </Secondtooltip>
    </div>
  )
}

export default App
