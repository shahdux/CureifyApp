// import React, { useState, useRef, useEffect } from 'react';
// import "./Search.css"
// import Navbar from '../components/Navbar';
// import rx from '../assets/rx.svg';
// import pic from '../assets/pic.svg';
// import smalll from '../assets/smalllogo.svg';
// import { useNavigate } from 'react-router-dom';
// import { useLang } from '../context/LanguageContext';
// import { motion, AnimatePresence } from 'framer-motion'; 

// const Search = () => {
//     const [loading, setLoading] = useState(true);
//     const [showSheet, setShowSheet] = useState(false);
//     const [cameraMode, setCameraMode] = useState('closed');
//     const [scanType, setScanType] = useState('');
//     const navigate = useNavigate();
//     const fileInputRef = useRef(null);
//     const { isArabic } = useLang();

//     useEffect(() => {
//         const timer = setTimeout(() => setLoading(false), 800);
//         return () => clearTimeout(timer);
//     }, []);

//     const handlePrescriptionClick = () => { setScanType('prescription'); setShowSheet(true); };
//     const handleProductClick = () => { setScanType('product'); setShowSheet(true); };
//     const handleCameraClick = () => { setShowSheet(false); setCameraMode('viewfinder'); };
//     const handleGalleryClick = () => { setShowSheet(false); fileInputRef.current.click(); };

//     const handleFileChange = (event) => {
//         if (event.target.files && event.target.files[0]) {
//             const target = scanType === 'prescription' ? '/extracted-prescription' : '/products-found';
//             startAnalysisFlow(target);
//         }
//     };

//     const capturePhoto = () => {
//         const target = scanType === 'prescription' ? '/extracted-prescription' : '/products-found';
//         startAnalysisFlow(target);
//     };

//     const startAnalysisFlow = (targetPath) => {
//         setCameraMode('captured');
//         setTimeout(() => { setCameraMode('closed'); navigate(targetPath); }, 2000);
//     };

//     if (loading) return (
//         <div className="loader-container">
//             <img src={smalll} alt="loading" className="loader-logo" />
//         </div>
//     );

//     return (
//         <>
//             <Navbar />
//             <motion.div 
//                 className='searchdiv'
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//             >
//                 <div className='titlewsub'>
//                     <p className='sectiontitle margin0 mar12'>
//                         {isArabic ? "ابحث عن الأدوية القريبة" : "Find Medicines Nearby"}
//                     </p>
//                     <p className='subtitles'>
//                         {isArabic ? "تحقق من الصيدليات التي لديها دوائك في المخزون." : "Check which pharmacies have your medication in stock."}
//                     </p>
//                 </div>

//                 <input type="text" className='searchinput' placeholder={isArabic ? "بحث" : "Search"} />

//                 <div className='for2buttons2'>
//                     <motion.div 
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         className='reorder width177 h48' 
//                         onClick={handlePrescriptionClick} 
//                         style={{ cursor: 'pointer' }}
//                     >
//                         <img src={rx} alt="rx icon" />
//                         <p className='rtext f14px'>{isArabic ? "رفع وصفة طبية" : "Upload Prescription"}</p>
//                     </motion.div>
                    
//                     <motion.div 
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         className='reorder width177 h48' 
//                         onClick={handleProductClick} 
//                         style={{ cursor: 'pointer' }}
//                     >
//                         <img src={pic} alt="product icon" />
//                         <p className='rtext f14px'>{isArabic ? "رفع صورة المنتج" : "Upload Product Image"}</p>
//                     </motion.div>
//                 </div>
//             </motion.div>

//             <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />

//             <AnimatePresence>
//                 {showSheet && (
//                     <motion.div 
//                         className='sheetoverlay' 
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         onClick={() => setShowSheet(false)}
//                     >
//                         <motion.div 
//                             className='sheetcontainer' 
//                             initial={{ y: "100%" }}
//                             animate={{ y: 0 }}
//                             exit={{ y: "100%" }}
//                             transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             <div className='sheetcard'>
//                                 <p className='sheettitle'>{isArabic ? "اختر المصدر" : "Select Source"}</p>
//                                 <div className='sheetdivider' />
//                                 <button className='sheetbtn' onClick={handleCameraClick}>{isArabic ? "الكاميرا" : "Camera"}</button>
//                                 <div className='sheetdivider' />
//                                 <button className='sheetbtn' onClick={handleGalleryClick}>{isArabic ? "المعرض" : "Gallery"}</button>
//                             </div>
//                             <div className='sheetcancelcard'>
//                                 <button className='sheetcancelbtn' onClick={() => setShowSheet(false)}>{isArabic ? "إلغاء" : "Cancel"}</button>
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {cameraMode === 'viewfinder' && (
//                 <motion.div 
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="camera-sim-overlay"
//                 >
//                     <div className="viewfinder">
//                         <div className="scan-focus-box">
//                             <div className="corner tl"></div>
//                             <div className="corner tr"></div>
//                             <div className="corner bl"></div>
//                             <div className="corner br"></div>
//                         </div>
//                         <p className="scan-text">
//                             {isArabic ? `ضع ${scanType === 'prescription' ? 'الوصفة' : 'المنتج'} داخل الإطار` : `Align ${scanType} within the frame`}
//                         </p>
//                         <div className="camera-controls">
//                             <motion.div 
//                                 whileTap={{ scale: 0.9 }}
//                                 className="capture-btn-outer" 
//                                 onClick={capturePhoto}
//                             >
//                                 <div className="capture-btn-inner"></div>
//                             </motion.div>
//                             <button className="close-cam" onClick={() => setCameraMode('closed')}>{isArabic ? "إلغاء" : "Cancel"}</button>
//                         </div>
//                     </div>
//                 </motion.div>
//             )}

//             {cameraMode === 'captured' && (
//                 <div className={`camera-sim-overlay captured-bg ${scanType === 'prescription' ? 'bg-rx' : 'bg-product'}`}>
//                     <div className="captured-content">
//                         <motion.div 
//                             className="scanning-bar"
//                             animate={{ top: ["0%", "100%", "0%"] }}
//                             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                         ></motion.div>
//                         <p className="processing-text">
//                             {isArabic ? `جارٍ تحليل ${scanType === 'prescription' ? 'الوصفة' : 'المنتج'}...` : `Analyzing ${scanType}...`}
//                         </p>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default Search;


import React, { useState, useRef, useEffect } from 'react';
import "./Search.css"
import Navbar from '../components/Navbar';
import rx from '../assets/rx.svg';
import pic from '../assets/pic.svg';
import smalll from '../assets/smalllogo.svg';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion'; 

const Search = () => {
    const [loading, setLoading] = useState(true);
    const [showSheet, setShowSheet] = useState(false);
    const [cameraMode, setCameraMode] = useState('closed');
    const [scanType, setScanType] = useState('');
    const [capturedImage, setCapturedImage] = useState(null);
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const { isArabic } = useLang();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    // Start real camera stream
    useEffect(() => {
        if (cameraMode === 'viewfinder') {
            navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
                .then(stream => {
                    streamRef.current = stream;
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                })
                .catch(err => {
                    console.error("Camera access denied:", err);
                    setCameraMode('closed');
                });
        } else {
            // Stop stream when camera closes
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                streamRef.current = null;
            }
        }
    }, [cameraMode]);

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

    // Capture real frame from video
    const capturePhoto = () => {
        const video = videoRef.current;
        if (!video) return;

        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        const imageDataUrl = canvas.toDataURL('image/jpeg');

        setCapturedImage(imageDataUrl);
        setCameraMode('preview'); // Show preview for confirmation
    };

    const confirmCapture = () => {
        const target = scanType === 'prescription' ? '/extracted-prescription' : '/products-found';
        setCameraMode('analyzing');
        setTimeout(() => { setCameraMode('closed'); navigate(target); }, 2000);
    };

    const retakePhoto = () => {
        setCapturedImage(null);
        setCameraMode('viewfinder');
    };

    const startAnalysisFlow = (targetPath) => {
        setCameraMode('analyzing');
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
        {isArabic ? "ابحث عن دوائك" : "Search for Your Medicine"}
    </p>
    <p className='subtitles'>
        {isArabic ? "أدخل اسم الدواء لعرض الصيدليات القريبة التي تتوفر لديها." : "Enter a medicine name to see nearby pharmacies that have it in stock."}
    </p>
</div>

                <input type="text" className='searchinput' placeholder={isArabic ? "بحث" : "Search"} />

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

            {/* REAL CAMERA VIEWFINDER */}
            {cameraMode === 'viewfinder' && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="camera-sim-overlay"
                >
                    <div className="viewfinder">
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            style={{
                                position: 'absolute',
                                top: 0, left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <div className="scan-focus-box" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="corner tl"></div>
                            <div className="corner tr"></div>
                            <div className="corner bl"></div>
                            <div className="corner br"></div>
                        </div>
                        <p className="scan-text" style={{ position: 'relative', zIndex: 2 }}>
                            {isArabic ? `ضع ${scanType === 'prescription' ? 'الوصفة' : 'المنتج'} داخل الإطار` : `Align ${scanType} within the frame`}
                        </p>
                        <div className="camera-controls" style={{ position: 'relative', zIndex: 2 }}>
                            <motion.div 
                                whileTap={{ scale: 0.9 }}
                                className="capture-btn-outer" 
                                onClick={capturePhoto}
                            >
                                <div className="capture-btn-inner"></div>
                            </motion.div>
                            <button className="close-cam" onClick={() => setCameraMode('closed')}>
                                {isArabic ? "إلغاء" : "Cancel"}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* PREVIEW — confirm or retake */}
            {cameraMode === 'preview' && capturedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="camera-sim-overlay"
                    style={{ background: '#000' }}
                >
                    <img
                        src={capturedImage}
                        alt="captured"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                    />
                   <div style={{
    position: 'absolute', bottom: 120, width: '100%',
    display: 'flex', justifyContent: 'center', gap: '20px', zIndex: 2
}}>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={retakePhoto}
                            style={{
                                padding: '12px 28px', borderRadius: '12px',
                                border: '2px solid #fff', background: 'transparent',
                                color: '#fff', fontSize: '16px', cursor: 'pointer'
                            }}
                        >
                            {isArabic ? "إعادة" : "Retake"}
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={confirmCapture}
                            style={{
                                padding: '12px 28px', borderRadius: '12px',
                                border: 'none', background: '#00A4AA',
                                color: '#fff', fontSize: '16px', cursor: 'pointer'
                            }}
                        >
                            {isArabic ? "تأكيد" : "Use Photo"}
                        </motion.button>
                    </div>
                </motion.div>
            )}

            {/* ANALYZING */}
            {cameraMode === 'analyzing' && (
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