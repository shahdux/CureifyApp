import React, { useState } from 'react';
import "./MedicineCard2.css";
import clock from '../assets/clock.svg';
import calendar from '../assets/calendar.svg';
import ar from '../assets/ar.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LanguageContext';

const AR_OPTIONS = [
    {
        id: 1,
        titleEn: 'View Medicine in AR',
        titleAr: 'عرض الدواء بالواقع المعزز',
        descEn: 'See your medicine in augmented reality',
        descAr: 'شاهد دوائك بتقنية الواقع المعزز',
        icon: '💊',
        link: 'https://mywebar.com/qr/900489',
    },
    {
        id: 2,
        titleEn: 'Explore AR Features',
        titleAr: 'استكشف ميزات الواقع المعزز',
        descEn: 'Learn about the AR features in this app',
        descAr: 'تعرف على ميزات الواقع المعزز في التطبيق',
        icon: '✨',
        link: 'https://dashboard.mywebar.com/account/pages/901313',
    },
    {
        id: 3,
        titleEn: 'Digital Mirror',
        titleAr: 'المرآة الرقمية',
        descEn: 'Try the digital mirror experience',
        descAr: 'جرب تجربة المرآة الرقمية',
        icon: '🪞',
        link: 'https://mywebar.com/qr/901070',
    },
];

const ARPopup = ({ onClose, isArabic }) => {
    const handleSelect = (link) => {
        window.open(link, '_blank', 'noopener,noreferrer');
        onClose();
    };

    return (
        <AnimatePresence>
            <motion.div
                key="backdrop"
                className="arpopup-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            <motion.div
                key="sheet"
                className="arpopup-sheet"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                dir={isArabic ? 'rtl' : 'ltr'}
            >
                <div className="arpopup-handle" />

                <p className="arpopup-title">
                    {isArabic ? 'تجارب الواقع المعزز' : 'AR Experiences'}
                </p>
                <p className="arpopup-subtitle">
                    {isArabic ? 'اختر تجربة للاستكشاف' : 'Choose an experience to explore'}
                </p>

                {AR_OPTIONS.map((option, i) => (
                    <motion.div
                        key={option.id}
                        className="arpopup-option"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07 }}
                        onClick={() => handleSelect(option.link)}
                        whileTap={{ scale: 0.97 }}
                    >
                        <div className="arpopup-option-icon">{option.icon}</div>
                        <div className="arpopup-option-text">
                            <p className="arpopup-option-title">
                                {isArabic ? option.titleAr : option.titleEn}
                            </p>
                            <p className="arpopup-option-desc">
                                {isArabic ? option.descAr : option.descEn}
                            </p>
                        </div>
                        <svg
                            className={`arpopup-chevron ${isArabic ? 'arpopup-chevron-rtl' : ''}`}
                            width="16" height="16" viewBox="0 0 24 24"
                            fill="none" stroke="#aaa" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </motion.div>
                ))}

                <p className="arpopup-cancel" onClick={onClose}>
                    {isArabic ? 'إلغاء' : 'Cancel'}
                </p>
            </motion.div>
        </AnimatePresence>
    );
};

const MedicineCard2 = (props) => {
    const { isArabic } = useLang();
    const progress = (props.remaining / props.total) * 100;
    const [showARPopup, setShowARPopup] = useState(false);

    return (
        <>
            <div className="medicinecard2">
                <div className="medicinecard2top">
                    <img src={props.image} alt="pill" />

                    <div className="medicinecard2info">
                        <p className="medicinecard2name">{props.name}</p>
                        <p className="medicinecard2dose">{props.tablets} {isArabic ? 'قرص' : 'tablet'} • {props.frequency}</p>
                        <div className="medicinecard2time">
                            <img src={clock} alt="clock" className="medicinecard2clockicon" />
                            <p className="medicinecard2timetext">{props.time}</p>
                        </div>
                    </div>

                    <div
                        className="medicinecard2ar"
                        onClick={() => setShowARPopup(true)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={ar} alt="ar" className="medicinecard2aricon" />
                        <p className="medicinecard2artext">
                            {isArabic ? 'عرض AR' : 'View in AR'}
                        </p>
                    </div>
                </div>

                <div className="medicinecard2pills">
                    <p className="medicinecard2pillslabel">
                        {isArabic ? 'الأقراص المتبقية' : 'Pills remaining'}
                    </p>
                    <p className="medicinecard2pillscount">
                        {props.remaining} {isArabic ? 'متبقي' : 'left'}
                    </p>
                </div>

                <div className="medicinecard2progressbar">
                    <div
                        className="medicinecard2progressfill"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="medicinecard2duration">
                    <img src={calendar} alt="calendar" className="medicinecard2calicon" />
                    <p className="medicinecard2durationtext">
                        {isArabic ? `المدة: ${props.duration}` : `Duration: ${props.duration}`}
                    </p>
                </div>
            </div>

            {showARPopup && (
                <ARPopup
                    onClose={() => setShowARPopup(false)}
                    isArabic={isArabic}
                />
            )}
        </>
    );
};

export default MedicineCard2;