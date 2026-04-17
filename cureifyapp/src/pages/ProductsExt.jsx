
import React, { useEffect, useState } from 'react';
import "./Cart.css"
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import trash from '../assets/trash.svg';
import av from '../assets/aven.svg';

import SectionTitle from '../components/SectionTitle';
import ExtractedCard from '../components/ExtractedCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';


const ProductsExt = () => {
   
       const [count2, setCount2] = useState(1);


    return (
        <>
            <Navbar />
            <div className='maindiv opadding gap26 pr h600'>
                 <div className='arrowwtitle gap0'>
                                  <Link to="/search" style={{ textDecoration: 'none' }}>

                    <img src={back} alt="back icon" />
                    </Link>
                    <SectionTitle title="Detected Medications(1)" margin="0 auto" align="center"/>
                </div>
                     <div className="cartcard">
                         <img src={av} className="cartcardImage1" />
                   
                         <div className="cartcardBody w375">
                           <div className="cartcardTop">
                             <p className="cartcardName">Avene Cleanance 30Ml</p>
                               <img src={trash} alt="delete" className="trashIcon1" />
                           </div>
                   
                           <p className="cartcardPharmacy">Fast-acting prevents recurrence</p>
                   
                           <div className="cartcardBottom">
                             <div className="cartcardCounter">
                               <button className="cartcardBtn" onClick={() => setCount2(c => Math.max(1, c - 1))}>−</button>
                               <span className="cartcardCount">{count2}</span>
                               <button className="cartcardBtn" onClick={() => setCount2(c => c + 1)}>+</button>
                             </div>
                           </div>
                         </div>
                       </div>

                 

                   
                
              <Link to="/pharmacies" style={{ textDecoration: 'none' }}>
                                <Button text="Select Pharmacy" />
                            </Link>
             </div>
        </>
    );
}

export default ProductsExt;