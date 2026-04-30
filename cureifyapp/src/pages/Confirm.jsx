import React from 'react';
import "./Confirm.css"
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import box from '../assets/box.svg';
import delivery from '../assets/car.svg';
import conf from '../assets/cnf.svg';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Confirm = () => {
    const { isArabic } = useLang();
    return (
        <div className='orderplacedpage'>
            <motion.div 
                className='orderplacedcontent'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 15 }}
            >
                <div className='checkcirlces'>
                    <img src={conf} alt="confirm" />
                </div>
                <p className='orderplacedtitle'>{isArabic ? "تم الطلب بنجاح!" : "Order Placed!"}</p>
                <p className='orderplaceddes'>{isArabic ? "دواؤك في الطريق إليك الآن." : "Your medicine is on its way to you."}</p>

                <div className='orderinfocard'>
                    <div className='orderinforow'>
                        <img src={delivery} alt="delivery" className='infosvsg' />
                        <div className='orderinfotext'>
                            <p className='orderinfolabel'>{isArabic ? "موعد التوصيل المتوقع" : "ESTIMATED DELIVERY"}</p>
                            <p className='orderinfovalue'>{isArabic ? "اليوم، ٠٤:٣٠ م - ٠٥:٠٠ م" : "Today, 04:30 PM - 05:00 PM"}</p>
                        </div>
                    </div>
                    <div className='orderinfodivider' />
                    <div className='orderinforow'>
                        <img src={box} alt="order" className='infosvsg' />
                        <div className='orderinfotext'>
                            <p className='orderinfolabel'>{isArabic ? "رقم الطلب" : "ORDER ID"}</p>
                            <p className='orderinfovalue'>#MED-882941</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Link to="/home" style={{ textDecoration: 'none' }}>
                <Button text={isArabic ? "العودة للرئيسية" : "Back to Home"} />
            </Link>
        </div>
    );
}

export default Confirm;