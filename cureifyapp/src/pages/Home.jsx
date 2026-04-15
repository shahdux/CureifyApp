// import React, { Component } from 'react';
// import "./Home.css";
// import Navbar from '../components/Navbar';
// import export1 from '../assets/export.svg';
// import progress from '../assets/progress.svg';
// import notofications from '../assets/noti.svg';
// import reo from '../assets/reo.svg';

// import TextButton from '../components/TextButton';
// import MedicineCard from '../components/MedicineCard';


// const Home = () => {
//     return (  <>
//     <div className='maindiv'>

// <div className='profilewnot'>
//     <div className='profilpart'>

//     <img src="" alt="profile picture" />
//     <p className='name'>Hello, !</p>
//     <div className='pointsdiv'>
//             <p className='points'></p>

//     </div>
//     </div>
//     <img src={notofications} alt="notifications icon" />
// </div>
// <div className='bluecard'>
//     <div className='amountwicon'>
//         <p className='amount'></p>
//         <div className='exporticon'>
//             <img src={export1} alt="export icon" />
//         </div>
//     </div>
//                 <img src={progress} alt="export icon" />
//  <div className='amountwicon'>
//         <p className='amount'></p>
//         <div className='amountwicon'>
//         <p className='amount'></p>
//        <p className='next'></p>
//     </div>
//     </div>
    
// </div>
// <div className='medicationsection'>
//     <div className='titlewbutton'>
//         <p className='sectiontitle'>Today's Medication</p>
//         <TextButton text="View details" color="#00A4AA" weight="700"/>
//     </div>
//     <div className='formedcards'>
//        <MedicineCard
//     name="Vibramycin 500mg"
//     time="09:00 AM"
//     instruction="Take with food"
// image=""/>
// <MedicineCard
//     name="Vibramycin 500mg"
//     time="09:00 AM"
//     instruction="Take with food"
// image=""/>
// <MedicineCard
//     name="Vibramycin 500mg"
//     time="09:00 AM"
//     instruction="Take with food"
//     image=""
// />
//     </div>
// </div>
// <div className='medicationsection'>
//     <div className='titlewbutton'>
//         <p className='sectiontitle'>Medicines Running Low</p>
//     </div>
//      <div className='medcard'>
//             <div className='forfirst2'>

          

//             <div className='medcardInfo'>
//                 <p className='medcardName'></p>
//                 <div className='medcardMeta'>
//                     <span className='medcardTime red'></span>
//                     <span className='medcardDot' />
//                     <span className='medcardTime red'></span>
//                 </div>
//             </div>
//             </div>

//            <div className='reorder'>
//             <img src={reo} alt="re-order icon" />
//             <p className='rtext'>Re-order</p>
//            </div>
//         </div>
// </div>


//  <Navbar />
//     </div>



    
    
    
    
    
    
//     </>);
// }
 
// export default Home;
import React, { useEffect, useState } from 'react';
import "./Home.css";
import Navbar from '../components/Navbar';
import export1 from '../assets/export.svg';
import progress from '../assets/progress.svg';
import notofications from '../assets/noti.svg';
import reo from '../assets/reo.svg';

import TextButton from '../components/TextButton';
import MedicineCard from '../components/MedicineCard';
import { supabase } from './../supabase';

const Home = () => {
    const [meds, setMeds] = useState([]);

    useEffect(() => {
        async function fetchMeds() {
            const res = await supabase
                .from('Users')
                .select('meds')
                .eq('id', 4);

            if (res.data?.[0]?.meds) setMeds(res.data[0].meds);
        }

        fetchMeds();
    }, []);

    return (<>
        <div className='maindiv'>

            <div className='profilewnot'>
                <div className='profilpart'>
                    <img src="" alt="profile picture" />
                    <p className='name'>Hello, !</p>
                    <div className='pointsdiv'>
                        <p className='points'></p>
                    </div>
                </div>
                <img src={notofications} alt="notifications icon" />
            </div>

            <div className='bluecard'>
                <div className='amountwicon'>
                    <p className='amount'></p>
                    <div className='exporticon'>
                        <img src={export1} alt="export icon" />
                    </div>
                </div>
                <img src={progress} alt="export icon" />
                <div className='amountwicon'>
                    <p className='amount'></p>
                    <div className='amountwicon'>
                        <p className='amount'></p>
                        <p className='next'></p>
                    </div>
                </div>
            </div>

            <div className='medicationsection'>
                <div className='titlewbutton'>
                    <p className='sectiontitle'>Today's Medication</p>
                    <TextButton text="View details" color="#00A4AA" weight="700" />
                </div>
               <div className='formedcards'>
  {meds.map((med, index) => (
    <MedicineCard
      key={med.name + index} 
      
      name={med.dosage ? `${med.name} ${med.dosage}` : med.name}
      
      time={med.time}
      
      instruction={med.note}
      
      image={med.image} 
      
     
    />
  ))}
</div>
            </div>

            <div className='medicationsection'>
                <div className='titlewbutton'>
                    <p className='sectiontitle'>Medicines Running Low</p>
                </div>
                <div className='medcard'>
                    <div className='forfirst2'>
                        <div className='medcardInfo'>
                            <p className='medcardName'></p>
                            <div className='medcardMeta'>
                                <span className='medcardTime red'></span>
                                <span className='medcardDot' />
                                <span className='medcardTime red'></span>
                            </div>
                        </div>
                    </div>
                    <div className='reorder'>
                        <img src={reo} alt="re-order icon" />
                        <p className='rtext'>Re-order</p>
                    </div>
                </div>
            </div>

            <Navbar />
        </div>
    </>);
}

export default Home;
