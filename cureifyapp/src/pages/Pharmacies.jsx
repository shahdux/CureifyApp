import React, { Component } from 'react';
import "./Pharmacies.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';




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


</div>
    
    
    
    
    </>  );
}
 
export default  Pharmacies;