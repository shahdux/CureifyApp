import React from 'react';
import "./Pharmacies.css"
import "./PrescriptionHistory.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import { Link } from 'react-router-dom';
import prescriptiorn from '../assets/pca.svg';

const PrescriptionHistory = () => {
    return (
        <>
            <Navbar />
            <div className='searchdiv opadding gap26 height800px'>
                <div className='arrowwtitle gap0'>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" />
                    </Link>
                    <SectionTitle title="Prescriptions History" margin="0 auto" align="center"/>
                </div>

                <div className='prescard'>
                    <div className='prescardtop'>
                        <img src={prescriptiorn} alt="prescription"/>
                        <div className='prescardinfo'>
                            <p className='prescardtitle'>Prescription1</p>
                            <div className='prescarddate'>
                                <p className='prescardatetext'>Mar 13, 2026</p>
                            </div>
                        </div>
                    </div>
                    <div className='prescarddivider' />
                    <div className='prescardmeds'>
                        <p className='prescardmedslabel'>Medications (3)</p>
                        <p className='prescardmeditem'>• Aspirin 100mg</p>
                        <p className='prescardmeditem'>• Metformin 500mg</p>
                        <p className='prescardmeditem'>• Lisinopril 10mg</p>
                    </div>
                </div>

              

            </div>
        </>
    );
}

export default PrescriptionHistory;