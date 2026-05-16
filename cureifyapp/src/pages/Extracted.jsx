import React, { useState, useEffect } from 'react';
import "./Cart.css"
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import smalll from '../assets/smalllogo.svg';
import SectionTitle from '../components/SectionTitle';
import ExtractedCard from '../components/ExtractedCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Extracted = () => {
    const { isArabic } = useLang();
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setPageLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (pageLoading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <>
            <Navbar />
            <motion.div className='maindiv opadding gap26 pr' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className='arrowwtitle gap0'>
                    <Link to="/add-reminder" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back" style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} />
                    </Link>
                    <SectionTitle title={isArabic ? "الأدوية المستخرجة (٣)" : "Extracted Medications(3)"} margin="0 auto" align="center"/>
                </div>
                <div className='forbloodtests'>
                    <ExtractedCard 
                        medName="Vibramycin 500mg"
                        dosage={isArabic ? "١ كبسولة • ٣ مرات يومياً" : "1 capsule • 2 times daily"}
                        duration={isArabic ? "شهران" : "2 months"}
                        instructions={isArabic ? "تناول مع الطعام" : "Take with food"}
                        startDate="3/13/2026"
                    />
                    <ExtractedCard 
                        medName="Sebionex Trio"
                        dosage={isArabic ? "١ كبسولة • ٣ مرات يومياً" : "1 capsule daily"}
                        duration={isArabic ? "شهران" : "2 months"}
                        instructions={isArabic ? "تناول مع الطعام" : "Take with food"}
                        startDate="3/13/2026"
                    />
                    <ExtractedCard 
                        medName="Omega-3"
                        dosage={isArabic ? "١ كبسولة • ٣ مرات يومياً" : "2 capsules daily"}
                        duration={isArabic ? "شهران" : "2 months"}
                        instructions={isArabic ? "تناول مع الطعام" : "Take with food"}
                        startDate="3/13/2026"
                    />
                </div>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <Button text={isArabic ? "إضافة التنبيهات" : "Add Reminder"} />
                </Link>
            </motion.div>
        </>
    );
}

export default Extracted;