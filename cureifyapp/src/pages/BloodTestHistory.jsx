import React, { Component } from 'react';
import "./Pharmacies.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import calendar from '../assets/calendar.svg';







const  BloodTestHistory = () => {
    return (<>
     <Navbar/>
            <div className='searchdiv opadding '>
                <div className='arrowwtitle gap0'>
                                    <Link to="/profile"  style={{ textDecoration: 'none' }}>

<img src={back} alt="back icon" /></Link>


    <SectionTitle title="Blood Test History" margin="0 auto" align="center"/>


                </div>

               <div className='forbloodtests'>
               
                   <div className='testcard'>
                       <p className='testcardtitle'>Complete Blood Count (CBC)</p>
                       <div className='testcarddate'>
                           <img src={calendar} alt="date" className='calendaricon' />
                           <p className='testcardDateText'>Feb 28, 2026</p>
                       </div>
                       <div className='testcardrows'>
                           <div className='testrow normal'>
                               <div className='testrowleft'>
                                   <p className='testrowname'>Hemoglobin</p>
                                   <p className='testrowstatus'>Normal range</p>
                               </div>
                               <div className='testrowright'>
                                   <p className='testrowvalue normal'>14.2</p>
                                   <p className='testrowunit'>g/dL</p>
                               </div>
                           </div>
                           <div className='testrow normal'>
                               <div className='testrowleft'>
                                   <p className='testrowname'>WBC</p>
                                   <p className='testrowstatus'>Normal range</p>
                               </div>
                               <div className='testrowright'>
                                   <p className='testrowvalue normal'>7.5</p>
                                   <p className='testrowunit'>K/uL</p>
                               </div>
                           </div>
                           <div className='testrow normal'>
                               <div className='testrowleft'>
                                   <p className='testrowname'>Platelets</p>
                                   <p className='testrowstatus'>Normal range</p>
                               </div>
                               <div className='testrowright'>
                                   <p className='testrowvalue normal'>250</p>
                                   <p className='testrowunit'>K/uL</p>
                               </div>
                           </div>
                       </div>
                   </div>
               
                   <div className='testcard'>
                       <p className='testcardtitle'>Lipid Panel</p>
                       <div className='testcarddate'>
                           <img src={calendar} alt="date" className='calendaricon' />
                           <p className='testcardDateText'>Feb 15, 2026</p>
                       </div>
                       <div className='testcardrows'>
                           <div className='testrow elevated'>
                               <div className='testrowleft'>
                                   <p className='testrowname'>Total Cholesterol</p>
                                   <p className='testrowstatus'>Slightly elevated</p>
                               </div>
                               <div className='testrowright'>
                                   <p className='testrowvalue elevated'>220</p>
                                   <p className='testrowunit'>mg/dL</p>
                               </div>
                           </div>
                           <div className='testrow elevated'>
                               <div className='testrowleft'>
                                   <p className='testrowname'>HDL</p>
                                   <p className='testrowstatus'>Slightly elevated</p>
                               </div>
                               <div className='testrowright'>
                                   <p className='testrowvalue elevated'>45</p>
                                   <p className='testrowunit'>mg/dL</p>
                               </div>
                           </div>
                           <div className='testrow elevated'>
                               <div className='testrowleft'>
                                   <p className='testrowname'>LDL</p>
                                   <p className='testrowstatus'>Slightly elevated</p>
                               </div>
                               <div className='testrowright'>
                                   <p className='testrowvalue elevated'>140</p>
                                   <p className='testrowunit'>mg/dL</p>
                               </div>
                           </div>
                           <div className='testrow normal'>
                               <div className='testrowleft'>
                                   <p className='testrowname'>Triglycerides</p>
                                   <p className='testrowstatus'>Normal range</p>
                               </div>
                               <div className='testrowright'>
                                   <p className='testrowvalue normal'>175</p>
                                   <p className='testrowunit'>mg/dL</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   </div>


</div>
    
    
    
    
    </>  );
}
 
export default  BloodTestHistory;