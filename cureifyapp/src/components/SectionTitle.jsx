import React, { Component } from 'react';
import "./SectionTitle.css"
const SectionTitle = (props) => {
    return ( <>
    
    <p className='sttile'    style={{
                    textAlign: props.align,
                    margin: props.margin
                }}>{props.title}</p>
    </> );
}
 
export default SectionTitle;