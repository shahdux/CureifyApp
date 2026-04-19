
import React, { useEffect, useState } from 'react';
import "./Home.css";
import Navbar from '../components/Navbar';
import export1 from '../assets/export.svg';
import progress from '../assets/progress.svg';
import profile from '../assets/profile.svg';

import notofications from '../assets/noti.svg';
import reo from '../assets/reo.svg';

import TextButton from '../components/TextButton';
import MedicineCard from '../components/MedicineCard';
import { supabase } from './../supabase';
import { Link } from 'react-router-dom';

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
                <Navbar />

        <div className='maindiv'>

            <div className='profilewnot'>
                <div className='profilpart'>
                                                                    <Link to="/profile"  style={{ textDecoration: 'none' }}>

                    <img src={profile} alt="profile picture" />
                    </Link>
                    <p className='name'>Hello, Badr!</p>
                    <div className='pointsdiv'>
                        <p className='points'>200 points</p>
                    </div>
                </div>
                <img src={notofications} alt="notifications icon" />
            </div>
                                                <Link to="/progress"  style={{ textDecoration: 'none' }}>

            <div className='bluecard'>
                <div className='amountwicon'>
                    <p className='amount'>You've taken 1 of 4 doses today.</p>
                    <div className='exporticon'>
                        <img src={export1} alt="export icon" />
                    </div>
                </div>
                <img src={progress} alt="export icon" />
                <div className='amountwicon'>
                    <p className='amount'></p>
                    <div className='amountwicon'>
                        <p className='amount'>33% Completed</p>
                        <p className='amount'>Next: Vibramycin (9:00 AM)</p>
                    </div>
                </div>
            </div>
</Link>
            <div className='medicationsection'>
                <div className='titlewbutton'>
                    <p className='sectiontitle'>Today's Medication</p>
                                                <Link to="/med-details"  style={{ textDecoration: 'none' }}>

                    <TextButton text="View details" color="#00A4AA" weight="700" /></Link>
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
                            <p className='medcardName'>Anuva 50mg</p>
                            <div className='medcardMeta'>
                                <span className='medcardTime2 red'>2 pills left  •  2 days remaining</span>
                            </div>
                        </div>
                    </div>
                    <div className='reorder'>
                        <img src={reo} alt="re-order icon" />
                        <p className='rtext'>Re-order</p>
                    </div>
                </div>
            </div>

            {/* <Navbar /> */}
        </div>
    </>);
}

export default Home;

