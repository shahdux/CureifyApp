import React, { useState, useEffect } from 'react';
import "./Reminder.css"
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import f1 from '../assets/ai.svg';
import smalll from '../assets/smalllogo.svg';
import Button from './../components/Button';
import Counter from '../components/Counter';
import Toggle from '../components/Toggle';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Reminder = () => {
    const { isArabic } = useLang();
    const [pageLoading, setPageLoading] = useState(true);
    const [showSheet, setShowSheet] = useState(false);
    const [cameraMode, setCameraMode] = useState('closed'); 
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setPageLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const handleCameraClick = () => {
        setShowSheet(false);
        setCameraMode('viewfinder');
    };

    const capturePhoto = () => {
        setCameraMode('captured');
        setTimeout(() => {
            setCameraMode('closed');
            navigate('/extracted'); 
        }, 2000);
    };

    if (pageLoading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <div className="app-container">
            <Navbar />
            <motion.div 
                className='maindiv opadding gap26'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <SectionTitle title={isArabic ? "إضافة تذكير" : "Add Reminder"} />
                <FeatureCard 
                    image={f1} 
                    name={isArabic ? "مسح الوصفة الطبية" : "Scan Prescription"} 
                    des={isArabic ? "تعبئة تلقائية باستخدام الذكاء الاصطناعي" : "Auto-fill form using AI scanner"} 
                    onClick={() => setShowSheet(true)} 
                />

                <div className='logincont hauto'>
                    <div className='forinputswtexts'>
                        <div className='for2inputs'>
                            
                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "اسم الدواء" : "Medicine Name"}</p>
                                <input type="text" className='inputc' placeholder={isArabic ? "بانادول" : "Panadol"} />
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "إجمالي الحبوب المتاحة" : "Total Pills Available"}</p>
                                <div className='inputwtext'>
                                    <input type="number" className='inputsmallerwidth' />
                                    <p className='pills'>{isArabic ? "حبة" : "Pills"}</p>
                                </div>
                            </div>

                            <div className='titlewinputbutton'>
                                <p className='inputtile'>{isArabic ? "الحبوب لكل جرعة" : "Pills per intake"}</p>
                                <Counter />
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "الوقت" : "Time"}</p>
                                <input type="time" className='inputc' />
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "التكرار" : "Frequency"}</p>
                                <select className='inputc martop3 lw'>
 <option value="8">
        {isArabic ? "كل ٨ ساعات" : "Every 8 hours"}
    </option>

    <option value="12">
        {isArabic ? "كل ١٢ ساعة" : "Every 12 hours"}
    </option>
                                    <option value="1">{isArabic ? "كل يوم" : "Every day"}</option>
                                    <option value="2">{isArabic ? "كل يومين" : "Every 2 days"}</option>
                                    <option value="7">{isArabic ? "كل أسبوع" : "Every week"}</option>
                                </select>
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "المدة" : "Duration"}</p>
                                <select className='inputc martop3 lw'>
                                    <option value="7">{isArabic ? "أسبوع" : "1 week"}</option>
                                    <option value="30">{isArabic ? "شهر" : "1 month"}</option>
                                </select>
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "تاريخ البدء" : "Start Date"}</p>
                                <input type="date" className='inputc' />
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "لون الحبة (اختياري)" : "Pill Color (Optional)"}</p>
                                <select className='inputc martop3 lw'>
                                    <option>{isArabic ? "اختر" : "Select"}</option>
                                    <option>{isArabic ? "أحمر" : "Red"}</option>
                                    <option>{isArabic ? "أزرق" : "Blue"}</option>
                                </select>
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "ملاحظات (اختياري)" : "Notes (Optional)"}</p>
                                <textarea className='inputc martop3' placeholder={isArabic ? "تناوله بعد الطعام..." : "Take after food..."}></textarea>
                            </div>

                            <div className='togglecard'>
                                <div className='titlewtogbutton'>
                                    <p className='toggle-title'>{isArabic ? "تنبيه صوتي" : "Voice Alert"}</p>
                                    <Toggle />
                                </div>
                                <p className='toggle-desc'>{isArabic ? "تشغيل تذكير صوتي عند موعد الدواء." : "Play a voice reminder when it's time to take your medication."}</p>
                            </div>

                            <div className='togglecard'>
                                <div className='titlewtogbutton'>
                                    <p className='toggle-title'>{isArabic ? "مكالمة تذكير" : "Reminder call"}</p>
                                    <Toggle />
                                </div>
                                <p className='toggle-desc'>{isArabic ? "إذا فاتك الإشعار، سنقوم بالاتصال بك خلال 5 دقائق." : "If you miss a push notification, we'll call you within 5 minutes."}</p>
                                
                                <div className='titlewinput'>
                                    <p className='inputtile f14'>{isArabic ? "تأخير المكالمة" : "Call Delay"}</p>
                                    <select className='inputc martop3 w295'>
                                        <option>{isArabic ? "٥ دقائق" : "5 minutes"}</option>
                                        <option>{isArabic ? "١٠ دقائق" : "10 minutes"}</option>
                                    </select>
                                </div>
                            </div>

                            <Link to="/home" style={{ textDecoration: 'none' }}>
                                <Button text={isArabic ? "إضافة التذكير" : "Add Reminder"} width="335px" />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {showSheet && (
                    <motion.div className='sheetoverlay' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowSheet(false)}>
                        <motion.div className='sheetcontainer' initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} onClick={(e) => e.stopPropagation()}>
                            <div className='sheetcard'>
                                <p className='sheettitle'>{isArabic ? "اختر الوصفة" : "Select Prescription"}</p>
                                <div className='sheetdivider' />
                                <button className='sheetbtn' onClick={handleCameraClick}>{isArabic ? "الكاميرا" : "Camera"}</button>
                                <div className='sheetdivider' />
                                <button className='sheetbtn' onClick={() => setShowSheet(false)}>{isArabic ? "المعرض" : "Gallery"}</button>
                            </div>
                            <div className='sheetcancelcard'>
                                <button className='sheetcancelbtn' onClick={() => setShowSheet(false)}>{isArabic ? "إلغاء" : "Cancel"}</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {cameraMode === 'viewfinder' && (
                <div className="camera-sim-overlay">
                    <div className="viewfinder">
                        <div className="scan-focus-box">
                             <div className="corner tl"></div>
                             <div className="corner tr"></div>
                             <div className="corner bl"></div>
                             <div className="corner br"></div>
                        </div>
                        <p className="scan-text">{isArabic ? "ضع الوصفة داخل الإطار" : "Align prescription within the frame"}</p>
                        <div className="camera-controls">
                            <div className="capture-btn-outer" onClick={capturePhoto}>
                                <div className="capture-btn-inner"></div>
                            </div>
                            <button className="close-cam" onClick={() => setCameraMode('closed')}>{isArabic ? "إلغاء" : "Cancel"}</button>
                        </div>
                    </div>
                </div>
            )}

            {cameraMode === 'captured' && (
                <div className="camera-sim-overlay captured-bg">
                    <div className="captured-content">
                        <motion.div 
                            className="scanning-bar"
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <p className="processing-text">{isArabic ? "جاري تحليل الوصفة..." : "Analyzing Prescription..."}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Reminder;


