import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./Rewards.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import { Link } from 'react-router-dom';
import lock from '../assets/lock.svg';
import bluelock from '../assets/bluelock.svg';
import bigstar from '../assets/bigstar.svg';
import smalll from '../assets/smalllogo.svg';
import { useLang } from '../context/LanguageContext';

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };
const vp = { once: true, amount: 0.2 };

const Rewards = () => {
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
                className='maindiv opadding'
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className='arrowwtitle gap0'>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" style={{ transform: isArabic ? 'scaleX(-1)' : 'none' }} />
                    </Link>
                    <SectionTitle title={isArabic ? "مكافآتي" : "My Rewards"} margin="0 auto" align="center"/>
                </div>

                <motion.div className='rewardsherocard' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                    <img src={bigstar} alt="star icon" />
                    <p className='rewardstotallabel'>{isArabic ? "إجمالي النقاط" : "Total Points"}</p>
                    <p className='rewardstotalvalue'>200</p>
                    <div className='rewardsprogresswrap'>
                        <div className='rewardsprogress'>
                            <div className='rewardsprogressfill'/>
                        </div>
                        <div className='rewardsprogresslabels'>
                            <p className='rewardsnextlabel'>{isArabic ? "المكافأة التالية عند 300" : "Next reward at 300"}</p>
                            <p className='rewardsmorelabel'>{isArabic ? "55 نقطة أخرى" : "55 more"}</p>
                        </div>
                    </div>
                </motion.div>

                <motion.p className='rewardssectionlabel' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.1 }} viewport={vp}>
                    {isArabic ? "المكافآت المتاحة" : "Available Rewards"}
                </motion.p>

                <motion.div className='rewarditemcard' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.15 }} viewport={vp}>
                    <div className='rewarditemleft'>
                        <img src={bluelock} alt="reward" className='rewardlockicon'/>
                        <div className='rewarditeminfo'>
                            <p className='rewarditemtitle'>{isArabic ? "خصم 10% في الصيدلية" : "10% Pharmacy Discount"}</p>
                            <p className='rewarditemdes'>{isArabic ? "صالح في الصيدليات الشريكة" : "Valid at partner pharmacies"}</p>
                            <div className='rewardbottomrow'>
                                <p className='rewarditempoints'>⭐ {isArabic ? "100 نقطة" : "100 points"}</p>
                                <Link to="/reward-details" style={{ textDecoration: 'none' }}>
                                    <button className='redeembtn'>{isArabic ? "استبدال" : "Redeem"}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div className='rewarditemcard' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.2 }} viewport={vp}>
                    <div className='rewarditemleft'>
                        <div className='rewarditemicon grayicon'>
                            <img src={lock} alt="reward" className='rewardlockicon'/>
                        </div>
                        <div className='rewarditeminfo'>
                            <p className='rewarditemtitle'>{isArabic ? "توصيل دواء مجاني" : "Free Medicine Delivery"}</p>
                            <p className='rewarditemdes'>{isArabic ? "توصيل مجاني على طلبك التالي" : "Free delivery on your next order"}</p>
                            <div className='rewardbottomrow'>
                                <p className='rewarditempoints'>⭐ {isArabic ? "250 نقطة" : "250 points"}</p>
                                <p className='rewardmoreneeded'>{isArabic ? "50 نقطة أخرى مطلوبة" : "50 more points needed"}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

export default Rewards;