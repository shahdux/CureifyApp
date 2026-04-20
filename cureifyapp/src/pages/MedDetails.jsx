import React, { Component } from 'react';
import "./Pharmacies.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import pil from '../assets/pillsg.svg';
import greyp from '../assets/greyp.svg';
import bluep from '../assets/bluep.svg';


import PharmacyCard from '../components/PharmacyCard';
import MedicineCard2 from '../components/MedicineCard2';
import { Link } from 'react-router-dom';




const  MedDetails = () => {
    return (<>
     <Navbar/>
            <div className='searchdiv opadding'>
                <div className='arrowwtitle gap0'>
 <Link to="/home"  style={{ textDecoration: 'none' }}>

<img src={back} alt="back icon" />

</Link>
    <SectionTitle title="Today's Medication" margin="0 auto" align="center"/>


                </div>

                <div className='forpharms'>
                 <MedicineCard2
                 image={pil}
    name="Vibramycin 500mg"
    tablets={1}
    frequency="Twice daily"
    time="09:00 AM"
    remaining={18}
    total={30}
    duration="15 days"
/>
<MedicineCard2
                 image={greyp}

    name="Sebionex Trio"
    tablets={1}
    frequency="Once daily"
    time="02:00 PM"
    remaining={10}
    total={30}
    duration="30 days"
/>
<MedicineCard2
                 image={bluep}

    name="Adapalene Gel"
    tablets={1}
    frequency="Once daily"
    time="02:00 PM"
    remaining={22}
    total={30}
    duration="30 days"
/>
                </div>


</div>
    
    
    
    
    </>  );
}
 
export default  MedDetails;