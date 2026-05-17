// import React, { useState, useEffect } from 'react';
// import "./Cart.css"
// import Navbar from '../components/Navbar';
// import back from '../assets/back.svg';
// import smalll from '../assets/smalllogo.svg';
// import SectionTitle from '../components/SectionTitle';
// import ExtractedCard from '../components/ExtractedCard';
// import Button from '../components/Button';
// import { Link, useLocation } from 'react-router-dom';
// import { useLang } from '../context/LanguageContext';
// import { motion } from 'framer-motion';

// const Extracted = () => {
//     const { isArabic } = useLang();
//     const [pageLoading, setPageLoading] = useState(true);
//     const location = useLocation();

//     // Real meds from AI scan passed via navigate('/extracted', { state: { meds } })
//     // Falls back to demo data if navigated directly
//     const meds = location.state?.meds ?? [
//         {
//             medName: "Vibramycin 500mg",
//             dosage: "1 capsule • 2 times daily",
//             duration: "2 months",
//             instructions: "Take with food",
//             startDate: "3/13/2026",
//         },
//         {
//             medName: "Sebionex Trio",
//             dosage: "1 capsule daily",
//             duration: "2 months",
//             instructions: "Take with food",
//             startDate: "3/13/2026",
//         },
//         {
//             medName: "Omega-3",
//             dosage: "2 capsules daily",
//             duration: "2 months",
//             instructions: "Take with food",
//             startDate: "3/13/2026",
//         },
//     ];

//     useEffect(() => {
//         const timer = setTimeout(() => setPageLoading(false), 800);
//         return () => clearTimeout(timer);
//     }, []);

//     if (pageLoading) return (
//         <div className="loader-container">
//             <img src={smalll} alt="loading" className="loader-logo" />
//         </div>
//     );

//     const title = isArabic
//         ? `الأدوية المستخرجة (${meds.length})`
//         : `Extracted Medications (${meds.length})`;

//     return (
//         <>
//             <Navbar />
//             <motion.div className='maindiv opadding gap26 pr' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//                 <div className='arrowwtitle gap0'>
//                     <Link to="/add-reminder" style={{ textDecoration: 'none' }}>
//                         <img src={back} alt="back" style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} />
//                     </Link>
//                     <SectionTitle title={title} margin="0 auto" align="center" />
//                 </div>

//                 {meds.length === 0 ? (
//                     <div style={{ textAlign: 'center', padding: '40px 20px', color: '#888' }}>
//                         <p style={{ fontSize: '16px', marginBottom: '8px' }}>
//                             {isArabic ? "لم يتم العثور على أدوية في الوصفة." : "No medications found in the prescription."}
//                         </p>
//                         <p style={{ fontSize: '14px' }}>
//                             {isArabic ? "حاول مرة أخرى بصورة أوضح." : "Try again with a clearer image."}
//                         </p>
//                     </div>
//                 ) : (
//                     <div className='forbloodtests'>
//                         {meds.map((med, index) => (
//                             <ExtractedCard
//                                 key={index}
//                                 medName={med.medName}
//                                 dosage={med.dosage}
//                                 duration={med.duration}
//                                 instructions={med.instructions}
//                                 startDate={med.startDate}
//                             />
//                         ))}
//                     </div>
//                 )}

//                 <Link to="/home" style={{ textDecoration: 'none' }}>
//                     <Button text={isArabic ? "إضافة التنبيهات" : "Add Reminder"} />
//                 </Link>
//             </motion.div>
//         </>
//     );
// }

// export default Extracted;

import React, { useState, useEffect } from 'react';
import "./Cart.css"
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import smalll from '../assets/smalllogo.svg';
import SectionTitle from '../components/SectionTitle';
import ExtractedCard from '../components/ExtractedCard';
import Button from '../components/Button';
import Toggle from '../components/Toggle';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Extracted = () => {
    const { isArabic } = useLang();
    const [pageLoading, setPageLoading] = useState(true);
    const [voiceAlert, setVoiceAlert] = useState(false);
    const [reminderCall, setReminderCall] = useState(false);
    const [caregiverReminder, setCaregiverReminder] = useState(false);
    const location = useLocation();

    const meds = location.state?.meds ?? [
        {
            medName: "Vibramycin 500mg",
            dosage: "1 capsule • 2 times daily",
            duration: "2 months",
            instructions: "Take with food",
            startDate: "3/13/2026",
        },
        {
            medName: "Sebionex Trio",
            dosage: "1 capsule daily",
            duration: "2 months",
            instructions: "Take with food",
            startDate: "3/13/2026",
        },
        {
            medName: "Omega-3",
            dosage: "2 capsules daily",
            duration: "2 months",
            instructions: "Take with food",
            startDate: "3/13/2026",
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => setPageLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (pageLoading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    const title = isArabic
        ? `الأدوية المستخرجة (${meds.length})`
        : `Extracted Medications (${meds.length})`;

    return (
        <>
            <Navbar />
            <motion.div className='maindiv opadding gap26 pr' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className='arrowwtitle gap0'>
                    <Link to="/add-reminder" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back" style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} />
                    </Link>
                    <SectionTitle title={title} margin="0 auto" align="center" />
                </div>

                {meds.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px 20px', color: '#888' }}>
                        <p style={{ fontSize: '16px', marginBottom: '8px' }}>
                            {isArabic ? "لم يتم العثور على أدوية في الوصفة." : "No medications found in the prescription."}
                        </p>
                        <p style={{ fontSize: '14px' }}>
                            {isArabic ? "حاول مرة أخرى بصورة أوضح." : "Try again with a clearer image."}
                        </p>
                    </div>
                ) : (
                    <div className='forbloodtests'>
                        {meds.map((med, index) => (
                            <ExtractedCard
                                key={index}
                                medName={med.medName}
                                dosage={med.dosage}
                                duration={med.duration}
                                instructions={med.instructions}
                                startDate={med.startDate}
                            />
                        ))}
                    </div>
                )}

                {/* ── Reminder options ── */}
                <div className='for2inputs' style={{ width: '375px' }}>

                    {/* Voice Alert */}
                    <div className='togglecard'>
                        <div className='titlewtogbutton'>
                            <p className='toggle-title'>{isArabic ? "تنبيه صوتي" : "Voice Alert"}</p>
                            <Toggle />
                        </div>
                        <p className='toggle-desc'>
                            {isArabic
                                ? "تشغيل تذكير صوتي عند موعد الدواء."
                                : "Play a voice reminder when it's time to take your medication."}
                        </p>
                    </div>

                    {/* Reminder Call */}
                    <div className='togglecard'>
                        <div className='titlewtogbutton'>
                            <p className='toggle-title'>{isArabic ? "مكالمة تذكير" : "Reminder call"}</p>
                            <Toggle />
                        </div>
                        <p className='toggle-desc'>
                            {isArabic
                                ? "إذا فاتك الإشعار، سنقوم بالاتصال بك خلال 5 دقائق."
                                : "If you miss a push notification, we'll call you within 5 minutes."}
                        </p>
                        <div className='titlewinput margintop12'>
                            <p className='inputtile f14'>{isArabic ? "تأخير المكالمة" : "Call Delay"}</p>
                            <select className='inputc martop3 w295'>
                                <option>{isArabic ? "٥ دقائق" : "5 minutes"}</option>
                                <option>{isArabic ? "١٠ دقائق" : "10 minutes"}</option>
                            </select>
                        </div>
                    </div>

                    {/* Caregiver Reminder */}
                    <div className='togglecard'>
                        <div className='titlewtogbutton'>
                            <p className='toggle-title'>{isArabic ? "تنبيه مقدم الرعاية" : "Caregiver Reminder"}</p>
                            <Toggle />
                        </div>
                        <p className='toggle-desc'>
                            {isArabic
                                ? "إرسال إشعار أو رسالة لمقدم الرعاية إذا فاتك موعد الدواء."
                                : "Send a notification or message to a caregiver if you miss your medication reminder."}
                        </p>
                        <div className='titlewinput margintop12'>
                            <p className='inputtile f14'>{isArabic ? "اسم مقدم الرعاية" : "Caregiver Name"}</p>
                            <input
                                type="text"
                                className='inputc width293i'
                                placeholder={isArabic ? "أدخل الاسم" : "Enter caregiver name"}
                            />
                        </div>
                        <div className='titlewinput margintop12'>
                            <p className='inputtile f14'>{isArabic ? "رقم الهاتف" : "Phone Number"}</p>
                            <input
                                type="tel"
                                className='inputc width293i'
                                placeholder={isArabic ? "01XXXXXXXXX" : "+20 1XXXXXXXXX"}
                            />
                        </div>
                        <div className='titlewinput margintop12'>
                            <p className='inputtile f14'>{isArabic ? "طريقة التنبيه" : "Alert Method"}</p>
                            <select className='inputc martop3 w295'>
                                <option>{isArabic ? "رسالة نصية" : "SMS"}</option>
                                <option>{isArabic ? "إشعار داخل التطبيق" : "In-App Notification"}</option>
                                <option>{isArabic ? "مكالمة هاتفية" : "Phone Call"}</option>
                            </select>
                        </div>
                    </div>

                </div>

                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <Button text={isArabic ? "إضافة التنبيهات" : "Add Reminder"} />
                </Link>
            </motion.div>
        </>
    );
}

export default Extracted;