
import React, { useEffect, useState } from 'react';
import "./Cart.css"
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import SectionTitle from '../components/SectionTitle';
import ExtractedCard from '../components/ExtractedCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';


const Extracted = () => {
   
     

    return (
        <>
            <Navbar />
            <div className='maindiv opadding gap26 pr'>
                 <div className='arrowwtitle gap0'>
                                  <Link to="/add-reminder" style={{ textDecoration: 'none' }}>

                    <img src={back} alt="back icon" />
                    </Link>
                    <SectionTitle title="Extracted Medications(3)" margin="0 auto" align="center"/>
                </div>
                <div className='forbloodtests'>
                    <ExtractedCard 
                        medName="Vibramycin 500mg"
                        dosage="1 capsule • 3 times daily"
                        duration="2 months"
                        instructions="Take with food"
                        startDate="3/13/2026"
                      
                    />

                    <ExtractedCard 
                        medName="Sebionex Trio"
                        dosage="1 capsule • 3 times daily"
                        duration="2 months"
                        instructions="Take with food"
                        startDate="3/13/2026"
                       
                    />

                    <ExtractedCard 
                        medName="Adaplene Gel"
                        dosage="1 capsule • 3 times daily"
                        duration="2 months"
                        instructions="Take with food"
                        startDate="3/13/2026"
                       
                    />
                </div>
              <Link to="/home" style={{ textDecoration: 'none' }}>
                                <Button text="Add Reminder" />
                            </Link>
             </div>
        </>
    );
}

export default Extracted;