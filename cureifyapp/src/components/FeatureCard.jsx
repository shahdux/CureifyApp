import React, { Component } from 'react';
import "./FeatureCard.css";
const  FeatureCard = (props) => {
    return (  
        <>
          <div className='featurecard' style={{ width: props.width }} onClick={props.onClick}>
            <div className='forfirst22'>

                <img src={props.image} alt="medication icon" />

            <div className='medcardInfo gap0'>
                <p className='featuretitle'>{props.name}</p>
                               <p className='featuredes'>{props.des}</p>

            </div>
            </div>

          
        </div>
        
        
        </>
    );
}
 
export default  FeatureCard;