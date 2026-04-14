import React, { Component } from 'react';
import "./Button.css"
const Button = (props) => {
    return ( 
        <>
        <div className='button' style={{ width: props.width }}>
            <p className='buttontext'  >{props.text}</p>
        </div>
        
        
        </>
     );
}
 
export default Button;