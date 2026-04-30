// import React, { Component } from 'react';
// import "./Pharmacies.css"
// import Navbar from '../components/Navbar';
// import SectionTitle from '../components/SectionTitle';
// import back from '../assets/back.svg';
// import pil from '../assets/pillsg.svg';
// import greyp from '../assets/greyp.svg';
// import bluep from '../assets/bluep.svg';


// import PharmacyCard from '../components/PharmacyCard';
// import MedicineCard2 from '../components/MedicineCard2';
// import { Link } from 'react-router-dom';




// const  MedDetails = () => {
//     return (<>
//      <Navbar/>
//             <div className='searchdiv opadding'>
//                 <div className='arrowwtitle gap0'>
//  <Link to="/home"  style={{ textDecoration: 'none' }}>

// <img src={back} alt="back icon" />

// </Link>
//     <SectionTitle title="Today's Medication" margin="0 auto" align="center"/>


//                 </div>

//                 <div className='forpharms'>
//                  <MedicineCard2
//                  image={pil}
//     name="Vibramycin 500mg"
//     tablets={1}
//     frequency="Twice daily"
//     time="09:00 AM"
//     remaining={18}
//     total={30}
//     duration="15 days"
// />
// <MedicineCard2
//                  image={greyp}

//     name="Sebionex Trio"
//     tablets={1}
//     frequency="Once daily"
//     time="02:00 PM"
//     remaining={10}
//     total={30}
//     duration="30 days"
// />
// <MedicineCard2
//                  image={bluep}

//     name="Adapalene Gel"
//     tablets={1}
//     frequency="Once daily"
//     time="02:00 PM"
//     remaining={22}
//     total={30}
//     duration="30 days"
// />
//                 </div>


// </div>
    
    
    
    
//     </>  );
// }
 
// export default  MedDetails;

import React, { useState, useEffect } from 'react';
import "./Pharmacies.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import pil from '../assets/pillsg.svg';
import greyp from '../assets/greyp.svg';
import bluep from '../assets/bluep.svg';
import smalll from '../assets/smalllogo.svg';
import MedicineCard2 from '../components/MedicineCard2';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const MedDetails = () => {
    const { isArabic } = useLang();
    const [loading, setLoading] = useState(true);

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
                className='searchdiv opadding'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div className='arrowwtitle gap0'>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} />
                    </Link>
                    <SectionTitle title={isArabic ? "أدوية اليوم" : "Today's Medication"} margin="0 auto" align="center" />
                </div>

                <div className='forpharms'>
                    <MedicineCard2
                        image={pil}
                        name="Vibramycin 500mg"
                        tablets={1}
                        frequency={isArabic ? "مرتين يومياً" : "Twice daily"}
                        time="09:00 AM"
                        remaining={18}
                        total={30}
                        duration={isArabic ? "١٥ يوم" : "15 days"}
                    />
                    <MedicineCard2
                        image={greyp}
                        name="Sebionex Trio"
                        tablets={1}
                        frequency={isArabic ? "مرة يومياً" : "Once daily"}
                        time="02:00 PM"
                        remaining={10}
                        total={30}
                        duration={isArabic ? "٣٠ يوم" : "30 days"}
                    />
                    <MedicineCard2
                        image={bluep}
                        name="Adapalene Gel"
                        tablets={1}
                        frequency={isArabic ? "مرة يومياً" : "Once daily"}
                        time="02:00 PM"
                        remaining={22}
                        total={30}
                        duration={isArabic ? "٣٠ يوم" : "30 days"}
                    />
                </div>
            </motion.div>
        </>
    );
}

export default MedDetails;