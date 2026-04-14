import React, { Component } from 'react';
import "./AppButton.css"
const AppButton = (props) => {
    return (  <>
    
    <div className='appbutton'>
        <img src={props.image} alt={props.imgalt} />
        <p className='loginapptext'>{props.apptext}</p>
    </div>
    
    </>);
}
 
export default AppButton;