// import React from 'react';
// import "./Pharmacies.css"
// import "./PrescriptionHistory.css"
// import Navbar from '../components/Navbar';
// import SectionTitle from '../components/SectionTitle';
// import back from '../assets/back.svg';
// import { Link } from 'react-router-dom';
// import prescriptiorn from '../assets/pca.svg';

// const PrescriptionHistory = () => {
//     return (
//         <>
//             <Navbar />
//             <div className='searchdiv opadding gap26 height800px'>
//                 <div className='arrowwtitle gap0'>
//                     <Link to="/profile" style={{ textDecoration: 'none' }}>
//                         <img src={back} alt="back icon" />
//                     </Link>
//                     <SectionTitle title="Prescriptions History" margin="0 auto" align="center"/>
//                 </div>

//                 <div className='prescard'>
//                     <div className='prescardtop'>
//                         <img src={prescriptiorn} alt="prescription"/>
//                         <div className='prescardinfo'>
//                             <p className='prescardtitle'>Prescription1</p>
//                             <div className='prescarddate'>
//                                 <p className='prescardatetext'>Mar 13, 2026</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='prescarddivider' />
//                     <div className='prescardmeds'>
//                         <p className='prescardmedslabel'>Medications (3)</p>
//                         <p className='prescardmeditem'>• Aspirin 100mg</p>
//                         <p className='prescardmeditem'>• Metformin 500mg</p>
//                         <p className='prescardmeditem'>• Lisinopril 10mg</p>
//                     </div>
//                 </div>

              

//             </div>
//         </>
//     );
// }

// export default PrescriptionHistory;

import React, { useEffect, useState } from 'react';
import "./Cart.css"
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import smalll from '../assets/smalllogo.svg';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import flector from '../assets/flector.svg';
import trash from '../assets/trash.svg';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const ExtractedPrescription = () => {
    const { isArabic } = useLang();
    const [loading, setLoading] = useState(true);
    const [count2, setCount2] = useState(1);
    const [name, setName] = useState('Flector 50mg');
    const [desc, setDesc] = useState('nonsteroidal anti-inflammatory drug');
    const [editingName, setEditingName] = useState(false);
    const [editingDesc, setEditingDesc] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <>
            <Navbar />
            <motion.div 
                className='maindiv opadding gap26 pr height800px'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className='arrowwtitle gap0'>
                    <Link to="/search" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} />
                    </Link>
                    <SectionTitle 
                        title={isArabic ? "الأدوية المستخرجة (١)" : "Extracted Medications(1)"} 
                        margin="0 auto" 
                        align="center"
                    />
                </div>

                <div className='forbloodtests'>
                    <div className="cartcard cg2">
                        <img src={flector} alt="" />

                        <div className="cartcardBody">
                            <div className="cartcardTop">
                                {editingName ? (
                                    <input
                                        className='editableinput'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onBlur={() => setEditingName(false)}
                                        autoFocus
                                    />
                                ) : (
                                    <p className="cartcardName" onClick={() => setEditingName(true)}>{name}</p>
                                )}
                                <img src={trash} alt="delete" className="trashIcon1" />
                            </div>

                            {editingDesc ? (
                                <input
                                    className='editableinput editableinputdes'
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    onBlur={() => setEditingDesc(false)}
                                    autoFocus
                                />
                            ) : (
                                <p className="cartcardPharmacy" onClick={() => setEditingDesc(true)}>{desc}</p>
                            )}

                            <div className="cartcardBottom">
                                <div className="cartcardCounter">
                                    <button className="cartcardBtn" onClick={() => setCount2(c => Math.max(1, c - 1))}>−</button>
                                    <span className="cartcardCount">{count2}</span>
                                    <button className="cartcardBtn" onClick={() => setCount2(c => c + 1)}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/alternative" style={{ textDecoration: 'none' }}>
                    <Button text={isArabic ? "اختر الصيدلية" : "Select Pharmacy"} />
                </Link>
            </motion.div>
        </>
    );
}

export default ExtractedPrescription;