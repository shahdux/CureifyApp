// import React from 'react';
// import './ExtractedCard.css';
// import trash from '../assets/trash.svg';
// import edit from '../assets/edit.svg';

// const ExtractedCard = (props) => {
//     return (
//         <div className="extractedcard" style={{ width: props.width }}>
//             <div className="extractedheader">
//                 <div className="extractedtitlecontainer">
//                     <h2 className="extractedmedname">{props.medName}</h2>
//                     <p className="extractedmedsubtitle">{props.dosage}</p>
//                 </div>
//                 <div className="extractedactions">
//                     <img src={edit} alt="edit icon" />
//                                         <img src={trash} alt="delete icon" />

//                 </div>
//             </div>

//             <div className="extracteddivider" />

//             <div className="extractedinfo">
//                 <div className="extractedrow">
//                     <p className="extractedlabel">Duration</p>
//                     <p className="extractedvalue">{props.duration}</p>
//                 </div>
                
//                 <div className="extracteddivider" />

//                 <div className="extractedrow">
//                     <p className="extractedlabel">Instructions</p>
//                     <p className="extractedvalue">{props.instructions}</p>
//                 </div>

//                 <div className="extracteddivider" />

//                 <div className="extractedrow">
//                     <p className="extractedlabel">Start Date</p>
//                     <p className="extractedvalue">{props.startDate}</p>
//                 </div>

//                 <div className="extracteddivider" />

//                 <div className="extractedrow">
//                     <p className="extractedlabel">Time</p>
//                     <input type="time" placeholder='' className='extractedselect'/>
//                 </div>

//                 <div className="extracteddivider" />

//                 <div className="extractedrow centeralign">
//                     <p className="extractedlabel">Pill color(Optional)</p>
//                     <input type="text" placeholder='select' className='extractedselect'/>
                  
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ExtractedCard;
import React, { useState } from 'react';
import './ExtractedCard.css';
import trash from '../assets/trash.svg';
import edit from '../assets/edit.svg';
import LuCheck from '../assets/home.svg';

const ExtractedCard = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="extractedcard" style={{ width: props.width }}>
            <div className="extractedheader">
                <div className="extractedtitlecontainer">
                    {isEditing ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <input type="text" className="editinput titleinput" defaultValue={props.medName} />
                            <input type="text" className="editinput subtitleinput" defaultValue={props.dosage} />
                        </div>
                    ) : (
                        <>
                            <h2 className="extractedmedname">{props.medName}</h2>
                            <p className="extractedmedsubtitle">{props.dosage}</p>
                        </>
                    )}
                </div>
                <div className="extractedactions">
                    {isEditing ? (
                        <div className="checkicon" onClick={toggleEdit} style={{ cursor: 'pointer', color: '#00A4AA', fontSize: '20px' }} ></div>
                    ) : (
                        <img src={edit} alt="edit icon" onClick={toggleEdit} style={{ cursor: 'pointer' }} />
                    )}
                    <img src={trash} alt="delete icon" style={{ cursor: 'pointer' }} />
                </div>
            </div>

            <div className="extracteddivider" />

            <div className="extractedinfo">
                <div className="extractedrow">
                    <p className="extractedlabel">Duration</p>
                    {isEditing ? (
                        <input type="text" className="extractedselect editwidth" defaultValue={props.duration} />
                    ) : (
                        <p className="extractedvalue">{props.duration}</p>
                    )}
                </div>
                
                <div className="extracteddivider" />

                <div className="extractedrow">
                    <p className="extractedlabel">Instructions</p>
                    {isEditing ? (
                        <input type="text" className="extractedselect editwidth" defaultValue={props.instructions} />
                    ) : (
                        <p className="extractedvalue">{props.instructions}</p>
                    )}
                </div>

                <div className="extracteddivider" />

                <div className="extractedrow">
                    <p className="extractedlabel">Start Date</p>
                    {isEditing ? (
                        <input type="date" className="extractedselect editwidth" defaultValue={props.startDate} />
                    ) : (
                        <p className="extractedvalue">{props.startDate}</p>
                    )}
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