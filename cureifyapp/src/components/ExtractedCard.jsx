import React from 'react';
import './ExtractedCard.css';
import trash from '../assets/trash.svg';
import edit from '../assets/edit.svg';

const ExtractedCard = (props) => {
    return (
        <div className="extractedcard" style={{ width: props.width }}>
            <div className="extractedheader">
                <div className="extractedtitlecontainer">
                    <h2 className="extractedmedname">{props.medName}</h2>
                    <p className="extractedmedsubtitle">{props.dosage}</p>
                </div>
                <div className="extractedactions">
                    <img src={edit} alt="edit icon" />
                                        <img src={trash} alt="delete icon" />

                </div>
            </div>

            <div className="extracteddivider" />

            <div className="extractedinfo">
                <div className="extractedrow">
                    <p className="extractedlabel">Duration</p>
                    <p className="extractedvalue">{props.duration}</p>
                </div>
                
                <div className="extracteddivider" />

                <div className="extractedrow">
                    <p className="extractedlabel">Instructions</p>
                    <p className="extractedvalue">{props.instructions}</p>
                </div>

                <div className="extracteddivider" />

                <div className="extractedrow">
                    <p className="extractedlabel">Start Date</p>
                    <p className="extractedvalue">{props.startDate}</p>
                </div>

                <div className="extracteddivider" />

                <div className="extractedrow">
                    <p className="extractedlabel">Time</p>
                    <input type="time" placeholder='' className='extractedselect'/>
                </div>

                <div className="extracteddivider" />

                <div className="extractedrow centeralign">
                    <p className="extractedlabel">Pill color(Optional)</p>
                    <input type="text" placeholder='select' className='extractedselect'/>
                  
                </div>
            </div>
        </div>
    );
};

export default ExtractedCard;