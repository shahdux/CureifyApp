import React, { useState } from 'react';
import "./Pharmacies.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import smalll from '../assets/smalllogo.svg';
import { Link } from 'react-router-dom';
import clock from '../assets/clock.svg';
import Button from '../components/Button';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Alternative = () => {
    const { isArabic } = useLang();
    // Keeping the loader logic but removed the manual timer stuff
    const [loading, setLoading] = useState(false);

    if (loading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <>
            <Navbar/>
            <motion.div 
                className='searchdiv' 
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }} 
                animate={{ opacity: 1, x: 0 }}
            >
                <div className='arrowwtitle gap0'>
                    <Link to="/search" style={{ textDecoration: 'none' }}>
                        <img 
                            src={back} 
                            alt="back" 
                            style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} 
                        />
                    </Link>
                    <div className='titlewsubdes'>
                        <SectionTitle title={isArabic ? "الصيدليات المتاحة" : "Available Pharmacies"} margin="0 auto" />
                        <p className='subtitles tac2'>{isArabic ? "الدواء: فليكتور ٥٠" : "Medicine: Flector 50"}</p>
                    </div>
                </div>

                <p className='alternativewarning'>
                    {isArabic ? "الصيدلية الوحيدة المتاحة بعيدة عن موقعك الحالي." : "The only pharmacy available with this medication is far from your location."}
                </p>

                <div className='alternativepharmcard'>
                    <div className='pharmacycardtop'>
                        <p className='pharmacyname'>{isArabic ? "صيدلية جرين" : "Green Pharmacy"}</p>
                        <p className='pharmacyprice'>{isArabic ? "١٠٤٥ ج.م" : "1045 EGP"}</p>
                    </div>
                    <div className='pharmacystars'>
                        <span className='star'>★</span><span className='star'>★</span><span className='star'>★</span><span className='star'>★</span><span className='starempty'>★</span>
                        <span className='pharmacyratingnum'>4.2</span>
                    </div>
                    <div className='pharmacyarrival'>
                        <img src={clock} alt="clock" className='clockicon'/>
                        <p className='pharmacyarrivaltext'>{isArabic ? "يصل خلال ساعتين" : "Arrives in 2 hours"}</p>
                    </div>
                    <Link to="/bag" style={{ textDecoration: 'none', width: '100%' }}>
                        <Button text={isArabic ? "إضافة للسلة" : "Add to cart"} width="340px"/>
                    </Link>
                </div>

                <p className='alternativesectionlabel'>{isArabic ? "بديل مقترح" : "Suggested Alternative"}</p>

                <div className='alternativesuggcard'>
                    <p className='alternativesuggtitle'>CeraVe Resurfacing Serum</p>
                    <p className='cartcardPharmacy'>📍 {isArabic ? "صيدلية العزبي" : "El Ezaby Pharmacy"}</p>
                    <p className='alternativesuggdes'>{isArabic ? "نفس المواد الفعالة. استشر الصيدلي أولاً." : "Similiar active ingredients. Consult with a pharmacist first."}</p>
                    <div className='alternativesuggbtns'>
                        <button className='alternativecallbtn w166'>{isArabic ? "اتصل بالصيدلية" : "Call pharmacy"}</button>
                        <Link to="/bag" style={{ textDecoration: 'none' }}>
                            <button className='alternativeaddcartbtn2 w166'>{isArabic ? "إضافة للسلة" : "Add to cart"}</button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Alternative;