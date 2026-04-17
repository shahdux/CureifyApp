import React, { Component } from 'react';
import "./Pharmacies.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import PharmacyCard from '../components/PharmacyCard';




const  Pharmacies = () => {
    return (<>
     <Navbar/>
            <div className='searchdiv'>
                <div className='buttonwithdiv'>
<img src={back} alt="back icon" />


<div className='titlewsubdes'>
    <SectionTitle title="Available Pharmacies"/>
        <p className='subtitles tac'>Medicine: Anuva 50mg</p>

</div>

                </div>

                <div className='forpharms'>
                    <PharmacyCard
    name="El Ezaby"
    price={745}
    rating={4.2}
    arrival="10-20 min"
/>
<PharmacyCard
    name="El Tarshouby"
    price={747}
    rating={4.2}
    arrival="30-50 min"
/>
<PharmacyCard
    name="Askar"
    price={747}
    rating={4.2}
    arrival="60-70 min"
/>
                </div>


</div>
    
    
    
    
    </>  );
}
 
export default  Pharmacies;