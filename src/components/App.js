
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
          <h3>This is another tooltip</h3>
        </Secondtooltip>
    </div>
  )
}

export default App
