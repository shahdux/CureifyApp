import React, { Component } from 'react';
import "./MedicineCard.css"

const MedicineCard = (props) => {
    return (
        <div className='medcard' style={{ width: props.width1 }}>
            <div className='forfirst2' style={{ width: props.width }}>

                <img src={props.image} alt="medication icon" />

            <div className='medcardInfo'>
                <p className='medcardName'>{props.name}</p>
                <div className='medcardMeta'>
                    <span className='medcardTime'>{props.time}</span>
                    <span className='medcardDot' />
                    <span className='medcardTime'>{props.instruction}</span>
                </div>
            </div>
            </div>

            <button className='medcardToggle' />
        </div>
    );
}

export default MedicineCard;