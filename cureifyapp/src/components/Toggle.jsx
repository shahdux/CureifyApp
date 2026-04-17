import React, { Component, useState } from 'react';
import "./Toggle.css"
const Toggle = () => {
    const [enabled, setEnabled] = useState(false);
    return ( <>
    
     <div
      className={`toggle ${enabled ? "toggle--on" : ""}`}
      onClick={() => setEnabled(e => !e)}
    >
      <div className="toggle__thumb" />
    </div>
    
    
    </> );
}
 
export default Toggle;