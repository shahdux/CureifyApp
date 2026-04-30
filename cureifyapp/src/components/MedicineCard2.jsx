import React from 'react';
import "./MedicineCard2.css";
import clock from '../assets/clock.svg';
import calendar from '../assets/calendar.svg';
import ar from '../assets/ar.svg';

const MedicineCard2 = (props) => {
    // Calculate progress percentage
    const progress = (props.remaining / props.total) * 100;

    return (
        <div className="medicinecard2">
            <div className="medicinecard2top">
                <img src={props.image} alt="pill" />

                <div className="medicinecard2info">
                    <p className="medicinecard2name">{props.name}</p>
                    <p className="medicinecard2dose">{props.tablets} tablet • {props.frequency}</p>
                    <div className="medicinecard2time">
                        <img src={clock} alt="clock" className="medicinecard2clockicon" />
                        <p className="medicinecard2timetext">{props.time}</p>
                    </div>
                </div>

                <div className="medicinecard2ar">
                    <img src={ar} alt="ar" className="medicinecard2aricon" />
                    <p className="medicinecard2artext">View in AR</p>
                </div>
            </div>

            <div className="medicinecard2pills">
                <p className="medicinecard2pillslabel">Pills remaining</p>
                <p className="medicinecard2pillscount">{props.remaining} left</p>
            </div>

            {/* Dynamic Progress Bar */}
            <div className="medicinecard2progressbar">
                <div 
                    className="medicinecard2progressfill" 
                    style={{ width: `${progress}%` }} 
                />
            </div>

            <div className="medicinecard2duration">
                <img src={calendar} alt="calendar" className="medicinecard2calicon" />
                <p className="medicinecard2durationtext">Duration: {props.duration}</p>
            </div>
        </div>
    );
}

export default MedicineCard2;