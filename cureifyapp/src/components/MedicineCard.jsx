// import React, { useState } from 'react';
// import "./MedicineCard.css"

// const MedicineCard = (props) => {
//     const [taken, setTaken] = useState(false);

//     const handleToggle = () => {
//         if (!taken && props.onTake) {
//             props.onTake();
//         }
//         setTaken(prev => !prev);
//     }

//     return (
//         <div className='medcard' style={{ width: props.width1 }}>
//             <div className='forfirst2' style={{ width: props.width }}>
//                 <img src={props.image} alt="medication icon" />
//                 <div className='medcardInfo'>
//                     <p className='medcardName'>{props.name}</p>
//                     <div className='medcardMeta'>
//                         <span className='medcardTime'>{props.time}</span>
//                         <span className='medcardDot' />
//                         <span className='medcardTime'>{props.instruction}</span>
//                     </div>
//                 </div>
//             </div>

//             <button
//                 className={`medcardToggle ${taken ? 'medcardToggleTaken' : ''}`}
//                 onClick={handleToggle}
//             />
//         </div>
//     );
// }

// export default MedicineCard;

import React from 'react';
import "./MedicineCard.css";

const MedicineCard = (props) => {

    const handleToggle = () => {
        // Only trigger the take action if it hasn't been taken already
        if (!props.taken && props.onTake) {
            props.onTake();
        }
    }

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

            <button
                // Use the prop passed from Home to determine the class
                className={`medcardToggle ${props.taken ? 'medcardToggleTaken' : ''}`}
                onClick={handleToggle}
                disabled={props.taken} // Prevents clicking it again once green
            />
        </div>
    );
}

export default MedicineCard;