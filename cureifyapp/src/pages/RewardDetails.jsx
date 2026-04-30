// import React, { useState } from 'react';
// import "./RewardDetails.css"
// import Navbar from '../components/Navbar';
// import SectionTitle from '../components/SectionTitle';
// import back from '../assets/back.svg';
// import { Link, useNavigate } from 'react-router-dom';
// import Button from '../components/Button';
// import gift from '../assets/gift.svg';
// import redeem from '../assets/yay.svg';



// const RewardDetails = () => {
//     const [showPopup, setShowPopup] = useState(false);
//     const navigate = useNavigate();

//     return (
//         <>
//             <Navbar />
//             <div className='maindiv opadding gap26 height800px'>
//                 <div className='arrowwtitle gap0'>
//                     <Link to="/rewards" style={{ textDecoration: 'none' }}>
//                         <img src={back} alt="back icon" />
//                     </Link>
//                     <SectionTitle title="My Rewards" margin="0 auto" align="center"/>
//                 </div>

//                 <div className='rewarddetailshero'>
//                         <img src={gift} alt="gift" className='rewarddetailsgift'/>
//                     <p className='rewarddetailsname'>10% Pharmacy Discount</p>
//                     <p className='rewarddetailsdes'>Valid at partner pharmacies</p>
//                     <p className='rewarddetailspoints'>100 Points</p>
//                 </div>

//                 <div className='rewarddetailsterms'>
//                     <p className='rewarddetailstermstitle'>Terms & Conditions</p>
//                     <p className='rewarddetailstermsitem'>• Valid for <span className='bold'>30 days</span></p>
//                     <p className='rewarddetailstermsitem'>• Valid at all partner pharmacies</p>
//                     <p className='rewarddetailstermsitem'>• Cannot be combined with other offers</p>
//                     <p className='rewarddetailstermsitem'>• One-time use only</p>
//                 </div>

//                 <div onClick={() => setShowPopup(true)}>
//                     <Button text="Redeem" />
//                 </div>
//             </div>

//             {showPopup && (
//                 <div className='rewardpopupoverlay' onClick={() => setShowPopup(false)}>
//                     <div className='rewardpopup' onClick={(e) => e.stopPropagation()}>
//                         <button className='rewardpopupclose' onClick={() => navigate('/redeemed')}>✕</button>
//                         <div className='rewardpopupcheckcirlce'>
// <img src={redeem} alt="redeem icon" />                        </div>
//                         <p className='rewardpopuptitle'>Reward Redeemed!</p>
//                         <p className='rewardpopupdes'>Your reward has been successfully redeemed</p>
//                         <div className='couponbox'>
//                             <p className='couponlabel'>Coupon Code</p>
//                             <p className='couponcode'>CURE37A84F</p>
//                             <p className='couponhint'>Use this code at checkout</p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default RewardDetails;

import React, { useState, useEffect } from 'react';
import "./RewardDetails.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import gift from '../assets/gift.svg';
import redeem from '../assets/yay.svg';
import smalll from '../assets/smalllogo.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LanguageContext';

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };
const vp = { once: true, amount: 0.2 };

const RewardDetails = () => {
    const { isArabic } = useLang();
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(false);
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
                    <Link to="/rewards" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" style={{ transform: isArabic ? 'scaleX(-1)' : 'none' }} />
                    </Link>
                    <SectionTitle title={isArabic ? "مكافآتي" : "My Rewards"} margin="0 auto" align="center"/>
                </div>

                <motion.div 
                    className='rewarddetailshero'
                    variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}
                >
                    <img src={gift} alt="gift" className='rewarddetailsgift'/>
                    <p className='rewarddetailsname'>{isArabic ? "خصم 10% في الصيدلية" : "10% Pharmacy Discount"}</p>
                    <p className='rewarddetailsdes'>{isArabic ? "صالح في الصيدليات الشريكة" : "Valid at partner pharmacies"}</p>
                    <p className='rewarddetailspoints'>{isArabic ? "100 نقطة" : "100 Points"}</p>
                </motion.div>

                <motion.div 
                    className='rewarddetailsterms'
                    variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <p className='rewarddetailstermstitle'>{isArabic ? "الشروط والأحكام" : "Terms & Conditions"}</p>
                    <p className='rewarddetailstermsitem'>• {isArabic ? "صالح لمدة" : "Valid for"} <span className='bold'>{isArabic ? "30 يومًا" : "30 days"}</span></p>
                    <p className='rewarddetailstermsitem'>• {isArabic ? "صالح في جميع الصيدليات الشريكة" : "Valid at all partner pharmacies"}</p>
                    <p className='rewarddetailstermsitem'>• {isArabic ? "لا يمكن دمجه مع عروض أخرى" : "Cannot be combined with other offers"}</p>
                    <p className='rewarddetailstermsitem'>• {isArabic ? "استخدام لمرة واحدة فقط" : "One-time use only"}</p>
                </motion.div>

                <motion.div 
                    onClick={() => setShowPopup(true)}
                    variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Button text={isArabic ? "استبدال" : "Redeem"} />
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {showPopup && (
                    <div className='rewardpopupoverlay' onClick={() => setShowPopup(false)}>
                        <motion.div 
                            className='rewardpopup' 
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <button className='rewardpopupclose' onClick={() => navigate('/redeemed')}>✕</button>
                            <div className='rewardpopupcheckcirlce'>
                                <img src={redeem} alt="redeem icon" />
                            </div>
                            <p className='rewardpopuptitle'>{isArabic ? "تم استبدال المكافأة!" : "Reward Redeemed!"}</p>
                            <p className='rewardpopupdes'>{isArabic ? "تم استبدال مكافأتك بنجاح" : "Your reward has been successfully redeemed"}</p>
                            <div className='couponbox'>
                                <p className='couponlabel'>{isArabic ? "كود الخصم" : "Coupon Code"}</p>
                                <p className='couponcode'>CURE37A84F</p>
                                <p className='couponhint'>{isArabic ? "استخدم هذا الكود عند الدفع" : "Use this code at checkout"}</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

export default RewardDetails;