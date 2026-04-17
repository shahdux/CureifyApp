import React from 'react';
import "./TextButton.css"

const TextButton = (props) => {
    return (
        <>
            <p 
                className='textb' 
                style={{ 
                    color: props.color,
                    fontWeight: props.weight,
                    marginTop: props.marginTop
                }}
            >
                {props.text}
            </p>
        </>
    );
}

export default TextButton;