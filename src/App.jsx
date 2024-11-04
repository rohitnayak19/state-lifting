import React, { useState } from "react";
import "./App.css";
import Panel from "./components/Panel";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <h2>Chattisgarh, India</h2>
      <Panel
        title="Bilaspur"
        isactive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        soluta placeat velit?
      </Panel>
      <Panel
        title="Raipur"
        isactive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        soluta placeat velit?
      </Panel>
    </div>
  );
};

export default App;
