

// import React from 'react';
// import "./MedicineCard.css";

// const MedicineCard = (props) => {

//     const handleToggle = () => {
//         if (!props.taken && props.onTake) {
//             props.onTake();
//         }
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
                
//                 className={`medcardToggle ${props.taken ? 'medcardToggleTaken' : ''}`}
//                 onClick={handleToggle}
//                 disabled={props.taken} 
//             />
//         </div>
//     );
// }

// export default MedicineCard;


import React from 'react';
import "./MedicineCard.css";

const MedicineCard = (props) => {

    const handleToggle = () => {
        if (!props.taken && props.onTake) {
            props.onTake();       // decrease count
        } else if (props.taken && props.onUntake) {
            props.onUntake();     // restore count
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
                className={`medcardToggle ${props.taken ? 'medcardToggleTaken' : ''}`}
                onClick={handleToggle}
                // removed disabled so it can be untoggled
            />
        </div>
    );
}

export default MedicineCard;