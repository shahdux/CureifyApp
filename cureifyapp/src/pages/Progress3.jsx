import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./Progress1.css"
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import MedicineCard2 from '../components/MedicineCard2';
import { Link } from 'react-router-dom';
import pil from '../assets/pillsg.svg';
import SectionTitle from '../components/SectionTitle';
import smalll from '../assets/smalllogo.svg';
import { useLang } from '../context/LanguageContext';

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };
const vp = { once: true, amount: 0.2 };

const Progress3 = () => {
    const { isArabic } = useLang();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
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
                className='maindiv opadding gap26 height800px'
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className='arrowwtitle gap0'>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" style={{ transform: isArabic ? 'scaleX(-1)' : 'none' }} />
                    </Link>
                    <SectionTitle title={isArabic ? "تقدمك" : "Your Progress"} margin="0 auto" align="center"/>
                </div>

                <motion.div className='progresschartcard' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                    <div className='donutwrapper'>
                        <svg viewBox="0 0 120 120" className='donutsvg'>
                            <circle cx="60" cy="60" r="45" fill="none" stroke="#E5E7EB" strokeWidth="14"/>
                            <circle cx="60" cy="60" r="45" fill="none" stroke="#F8D468" strokeWidth="14" strokeDasharray="282.6" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 60 60)"/>
                            <circle cx="60" cy="60" r="45" fill="none" stroke="#00A63E" strokeWidth="14" strokeDasharray="282.6" strokeDashoffset="188.4" strokeLinecap="round" transform="rotate(-90 60 60)"/>
                            <circle cx="60" cy="60" r="45" fill="none" stroke="#D4183D" strokeWidth="14" strokeDasharray="282.6" strokeDashoffset="235.5" strokeLinecap="round" transform="rotate(-90 60 60)"/>
                            <text x="60" y="65" textAnchor="middle" className='donuttext'>33%</text>
                        </svg>
                    </div>
                    <div className='progresschartright'>
                        <div className='progresslegendrow'>
                            <span className='progressdot redd'/>
                            <p className='progresslegendlabel'><span className='progresslegendnum'>1</span> {isArabic ? "فائتة" : "missed"}</p>
                        </div>
                        <div className='progresslegendrow'>
                            <span className='progressdot greenn'/>
                            <p className='progresslegendlabel'><span className='progresslegendnum'>1</span> {isArabic ? "مكتملة" : "Completed"}</p>
                        </div>
                        <div className='progresslegendrow'>
                            <span className='progressdot yelloww'/>
                            <p className='progresslegendlabel'><span className='progresslegendnum'>3</span> {isArabic ? "قادمة" : "Upcoming"}</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div className='progresstabs' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.1 }} viewport={vp}>
                    <Link to="/progress" style={{ textDecoration: 'none' }}>
                        <button className='progresstab'>{isArabic ? "مكتملة" : "Completed"}</button>
                    </Link>
                    <Link to="/progress-upcoming" style={{ textDecoration: 'none' }}>
                        <button className='progresstab'>{isArabic ? "قادمة" : "Upcoming"}</button>
                    </Link>
                    <Link to="/progress-missed" style={{ textDecoration: 'none' }}>
                        <button className='progresstab progresstabactive'>{isArabic ? "فائتة" : "Missed"}</button>
                    </Link>
                </motion.div>

                <motion.div className='missedcard redbg' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.15 }} viewport={vp}>
                    <MedicineCard2
                        image={pil}
                        name="Aspirin 100mg"
                        tablets={1}
                        frequency={isArabic ? "مرة يومياً" : "Once daily"}
                        time="09:00 AM"
                        remaining={25}
                        total={30}
                        duration={isArabic ? "30 يوم" : "30 days"}
                    />
                </motion.div>
            </motion.div>
        </>
    );
}

export default Progress3;