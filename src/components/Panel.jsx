import React from "react";

const Panel = ({ title, isactive, onShow, children }) => {
  return (
    <div className="panel">
      <h3 onClick={onShow}>{title}</h3>
      {isactive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </div>
  );
};

export default Panel;
