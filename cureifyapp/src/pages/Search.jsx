import React, { useState, useRef, useEffect } from 'react';
import "./Search.css"
import Navbar from '../components/Navbar';
import rx from '../assets/rx.svg';
import pic from '../assets/pic.svg';
import smalll from '../assets/smalllogo.svg';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion'; 

/* =========================
   MEDICINES ARRAY
========================= */
const MEDICINES = [
    "Panadol", "Panadol Extra", "Panadol Cold & Flu",
    "Adol", "Adol Extra", "Brufen", "Brufen 400",
    "Brufen 600", "Ibuprofen", "Cataflam", "Voltaren",
    "Diclofenac", "Augmentin", "Amoxicillin",
    "Azithromycin", "Zithromax", "Zyrtec",
    "Claritin", "Telfast", "Aerius", "Avil",
    "Histazine", "Concor", "Betaloc", "Norvasc",
    "Lasix", "Losec", "Nexium", "Controloc",
    "Omeprazole", "Pantoprazole", "Esomeprazole",
    "Glucophage", "Metformin", "Januvia",
    "Amaryl", "Ventolin", "Symbicort",
    "Pulmicort", "Prospan", "Mucosolvan",
    "Bisolvon", "Flagyl", "Ciprofloxacin",
    "Levofloxacin", "Fucidin", "Bactroban",
    "Dermovate", "Betnovate", "Vibramycin",
    "Aspirin", "Cardiprin", "Aspocid",
    "Plavix", "Eliquis", "Xarelto",
    "Daflon", "Detralex", "Calcium D",
    "Vitamin D3", "Omega 3", "Magnesium",
    "Zinc", "Feroglobin", "Motilium",
    "Domperidone", "Buscopan", "Imodium",
    "Duphalac", "Zovirax", "Acyclovir",
    "Fluconazole", "Diflucan", "Otrivin",
    "Nasonex", "Avamys", "Neurobion",
    "Milga", "Neurorubine"
];

const Search = () => {

    const [loading, setLoading] = useState(true);
    const [showSheet, setShowSheet] = useState(false);
    const [cameraMode, setCameraMode] = useState('closed');
    const [scanType, setScanType] = useState('');

    /* =========================
       SEARCH STATES
    ========================= */
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMeds, setFilteredMeds] = useState([]);

    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const { isArabic } = useLang();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    /* =========================
       AUTOCOMPLETE
    ========================= */
    useEffect(() => {

        if (searchTerm.trim() === '') {
            setFilteredMeds([]);
            return;
        }

        const results = MEDICINES.filter((med) =>
            med.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredMeds(results.slice(0, 5));

    }, [searchTerm]);

    const handlePrescriptionClick = () => { setScanType('prescription'); setShowSheet(true); };
    const handleProductClick = () => { setScanType('product'); setShowSheet(true); };
    const handleCameraClick = () => { setShowSheet(false); setCameraMode('viewfinder'); };
    const handleGalleryClick = () => { setShowSheet(false); fileInputRef.current.click(); };

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const target = scanType === 'prescription' ? '/extracted-prescription' : '/products-found';
            startAnalysisFlow(target);
        }
    };

    const capturePhoto = () => {
        const target = scanType === 'prescription' ? '/extracted-prescription' : '/products-found';
        startAnalysisFlow(target);
    };

    const startAnalysisFlow = (targetPath) => {
        setCameraMode('captured');
        setTimeout(() => { setCameraMode('closed'); navigate(targetPath); }, 2000);
    };

    if (loading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <>
            <Navbar />
            <motion.div 
                className='searchdiv'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className='titlewsub'>
                    <p className='sectiontitle margin0 mar12'>
                        {isArabic ? "ابحث عن الأدوية القريبة" : "Find Medicines Nearby"}
                    </p>
                    <p className='subtitles'>
                        {isArabic ? "تحقق من الصيدليات التي لديها دوائك في المخزون." : "Check which pharmacies have your medication in stock."}
                    </p>
                </div>

                {/* =========================
                   SEARCH INPUT
                ========================= */}
                <div style={{ position: 'relative'}}>

                    <input
                        type="text"
                        className='searchinput'
                        placeholder={isArabic ? "بحث" : "Search"}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    {filteredMeds.length > 0 && (

                        <div className='searchdropdown'>

                            {filteredMeds.map((med, index) => (

                                <div
                                    key={index}
                                    className='searchitem'
                                    onClick={() => {
                                        setSearchTerm(med);
                                        setFilteredMeds([]);

                                        navigate(`/pharmacies?medicine=${encodeURIComponent(med)}`);
                                    }}
                                >
                                    {med}
                                </div>

                            ))}

                        </div>

                    )}

                </div>

                <div className='for2buttons2'>
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='reorder width177 h48' 
                        onClick={handlePrescriptionClick} 
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={rx} alt="rx icon" />
                        <p className='rtext f14px'>{isArabic ? "رفع وصفة طبية" : "Upload Prescription"}</p>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='reorder width177 h48' 
                        onClick={handleProductClick} 
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={pic} alt="product icon" />
                        <p className='rtext f14px'>{isArabic ? "رفع صورة المنتج" : "Upload Product Image"}</p>
                    </motion.div>
                </div>
            </motion.div>

            <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />

            <AnimatePresence>
                {showSheet && (
                    <motion.div 
                        className='sheetoverlay' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowSheet(false)}
                    >
                        <motion.div 
                            className='sheetcontainer' 
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='sheetcard'>
                                <p className='sheettitle'>{isArabic ? "اختر المصدر" : "Select Source"}</p>
                                <div className='sheetdivider' />
                                <button className='sheetbtn' onClick={handleCameraClick}>{isArabic ? "الكاميرا" : "Camera"}</button>
                                <div className='sheetdivider' />
                                <button className='sheetbtn' onClick={handleGalleryClick}>{isArabic ? "المعرض" : "Gallery"}</button>
                            </div>
                            <div className='sheetcancelcard'>
                                <button className='sheetcancelbtn' onClick={() => setShowSheet(false)}>{isArabic ? "إلغاء" : "Cancel"}</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {cameraMode === 'viewfinder' && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="camera-sim-overlay"
                >
                    <div className="viewfinder">
                        <div className="scan-focus-box">
                            <div className="corner tl"></div>
                            <div className="corner tr"></div>
                            <div className="corner bl"></div>
                            <div className="corner br"></div>
                        </div>
                        <p className="scan-text">
                            {isArabic ? `ضع ${scanType === 'prescription' ? 'الوصفة' : 'المنتج'} داخل الإطار` : `Align ${scanType} within the frame`}
                        </p>
                        <div className="camera-controls">
                            <motion.div 
                                whileTap={{ scale: 0.9 }}
                                className="capture-btn-outer" 
                                onClick={capturePhoto}
                            >
                                <div className="capture-btn-inner"></div>
                            </motion.div>
                            <button className="close-cam" onClick={() => setCameraMode('closed')}>{isArabic ? "إلغاء" : "Cancel"}</button>
                        </div>
                    </div>
                </motion.div>
            )}

            {cameraMode === 'captured' && (
                <div className={`camera-sim-overlay captured-bg ${scanType === 'prescription' ? 'bg-rx' : 'bg-product'}`}>
                    <div className="captured-content">
                        <motion.div 
                            className="scanning-bar"
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        ></motion.div>
                        <p className="processing-text">
                            {isArabic ? `جارٍ تحليل ${scanType === 'prescription' ? 'الوصفة' : 'المنتج'}...` : `Analyzing ${scanType}...`}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Search;


