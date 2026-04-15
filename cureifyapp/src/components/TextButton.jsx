import React, { Component } from 'react';
import "./TextButton.css"
const TextButton = (props) => {
    return ( <>
    
    <p className='textb' style={{ 
                    color: props.color,
                    fontWeight: props.weight
                }}>{props.text}</p>
    
    
    
    
    
    
    </> );
}
 
export default TextButton;