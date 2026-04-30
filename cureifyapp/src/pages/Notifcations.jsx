import React, { useState, useEffect } from 'react';
import "./Notifications.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import smalll from '../assets/smalllogo.svg';
import { Link } from 'react-router-dom';
import pill from '../assets/notpill.svg';
import warning from '../assets/warning.svg';
import clock from '../assets/clock.svg';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Notifications = () => {
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
                className='maindiv opadding gap26 height800px'
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className='arrowwtitle gap0'>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} />
                    </Link>
                    <SectionTitle title={isArabic ? "التنبيهات" : "Notifications"} margin="0 auto" align="center" />
                </div>

                <div className='notifitemcard'>
                    <div className='notifitemicon bluenotif'>
                        <img src={pill} alt="pill" />
                    </div>
                    <div className='notifitembody'>
                        <p className='notifitemtitle'>{isArabic ? "تذكير بالدواء" : "Medication Reminder"}</p>
                        <p className='notifitemdes'>{isArabic ? "حان وقت جرعة فيبراميسين - 02:00 مساءً" : "Time to take Vibramycin - 2:00 PM dose"}</p>
                        <div className='notifitemtime'>
                            <img src={clock} alt="clock" />
                            <p className='notifitemtimetext'>{isArabic ? "منذ ٥ دقائق" : "5 minutes ago"}</p>
                        </div>
                    </div>
                    <span className='notifiteundot' />
                </div>

                <div className='notifitemcard'>
                    <div className='notifitemicon rednotif'>
                        <img src={warning} alt="warning" />
                    </div>
                    <div className='notifitembody'>
                        <p className='notifitemtitle'>{isArabic ? "تنبيه نفاذ الكمية" : "Refill Alert"}</p>
                        <p className='notifitemdes'>{isArabic ? "ميتفورمين أوشك على الانتهاء - تبقى ٣ جرعات فقط" : "Metformin is running low - only 3 doses left"}</p>
                        <div className='notifitemtime'>
                            <img src={clock} alt="clock" />
                            <p className='notifitemtimetext'>{isArabic ? "منذ ٣ ساعات" : "3 hours ago"}</p>
                        </div>
                    </div>
                    <span className='notifiteundot' />
                </div>
            </motion.div>
        </>
    );
}

export default Notifications;