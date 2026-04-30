import React, { useState, useRef } from 'react';
import "./Search.css"
import Navbar from '../components/Navbar';
import rx from '../assets/rx.svg';
import pic from '../assets/pic.svg';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

const Search = () => {
    const [showSheet, setShowSheet] = useState(false);
    const [cameraMode, setCameraMode] = useState('closed');
    const [scanType, setScanType] = useState('');
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const { isArabic } = useLang();

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

    return (
        <>
            <Navbar />
            <div className='searchdiv'>
                <div className='titlewsub'>
                    <p className='sectiontitle margin0 mar12'>
                        {isArabic ? "ابحث عن الأدوية القريبة" : "Find Medicines Nearby"}
                    </p>
                    <p className='subtitles'>
                        {isArabic ? "تحقق من الصيدليات التي لديها دوائك في المخزون." : "Check which pharmacies have your medication in stock."}
                    </p>
                </div>

                <input type="text" className='searchinput' placeholder={isArabic ? "بحث" : "Search"} />

                <div className='for2buttons2'>
                    <div className='reorder width177 h48' onClick={handlePrescriptionClick} style={{ cursor: 'pointer' }}>
                        <img src={rx} alt="rx icon" />
                        <p className='rtext f14px'>{isArabic ? "رفع وصفة طبية" : "Upload Prescription"}</p>
                    </div>
                    <div className='reorder width177 h48' onClick={handleProductClick} style={{ cursor: 'pointer' }}>
                        <img src={pic} alt="product icon" />
                        <p className='rtext f14px'>{isArabic ? "رفع صورة المنتج" : "Upload Product Image"}</p>
                    </div>
                </div>
            </div>

            <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />

            {showSheet && (
                <div className='sheetoverlay' onClick={() => setShowSheet(false)}>
                    <div className='sheetcontainer' onClick={(e) => e.stopPropagation()}>
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
                    </div>
                </div>
            )}

            {cameraMode === 'viewfinder' && (
                <div className="camera-sim-overlay">
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
                            <div className="capture-btn-outer" onClick={capturePhoto}>
                                <div className="capture-btn-inner"></div>
                            </div>
                            <button className="close-cam" onClick={() => setCameraMode('closed')}>{isArabic ? "إلغاء" : "Cancel"}</button>
                        </div>
                    </div>
                </div>
            )}

            {cameraMode === 'captured' && (
                <div className={`camera-sim-overlay captured-bg ${scanType === 'prescription' ? 'bg-rx' : 'bg-product'}`}>
                    <div className="captured-content">
                        <div className="scanning-bar"></div>
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