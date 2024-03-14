import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
import Secondtooltip from "./Secondtooltip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text="This is a tooltip">
          <h2>Hover over me</h2>
        </Tooltip>

        <Secondtooltip text="This is another tooltip">
          <p>Hover over me to see another tooltip</p>
        </Secondtooltip>
    </div>
  )
}

export default App