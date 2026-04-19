
// import React, { useState } from 'react';
// import "./Search.css"
// import Navbar from '../components/Navbar';
// import rx from '../assets/rx.svg';
// import pic from '../assets/pic.svg';
// import { useNavigate } from 'react-router-dom';

// const Search = () => {
//     const [showSheet, setShowSheet] = useState(false);
//     const [cameraMode, setCameraMode] = useState('closed');
//     const navigate = useNavigate();

//     const handleUploadClick = () => {
//         setShowSheet(true);
//     };

//     const handleCameraClick = () => {
//         setShowSheet(false);
//         setCameraMode('viewfinder');
//     };

//     const capturePhoto = () => {
//         setCameraMode('captured');
        
//         setTimeout(() => {
//             setCameraMode('closed');
//             navigate('/products-found'); 
//         }, 2000);
//     };

//     return (
//         <>
//             <Navbar />
//             <div className='searchdiv'>
//                 <div className='titlewsub'>
//                     <p className='sectiontitle margin0 mar12'>Find Medicines Nearby</p>
//                     <p className='subtitles'>Check which pharmacies have your medication in stock.</p>
//                 </div>

//                 <input type="text" className='searchinput' placeholder='Search' />
                
//                 <div className='for2buttons2'>
//                     <div className='reorder width177 h48' onClick={handleUploadClick} style={{ cursor: 'pointer' }}>
//                         <img src={rx} alt="re-order icon" />
//                         <p className='rtext f14px'>Upload Prescription</p>
//                     </div>
//                     <div className='reorder width177 h48' onClick={handleUploadClick} style={{ cursor: 'pointer' }}>
//                         <img src={pic} alt="product icon" />
//                         <p className='rtext f14px'>Upload Product Image</p>
//                     </div>
//                 </div>
//             </div>

//             {showSheet && (
//                 <div className='sheetoverlay' onClick={() => setShowSheet(false)}>
//                     <div className='sheetcontainer' onClick={(e) => e.stopPropagation()}>
//                         <div className='sheetcard'>
//                             <p className='sheettitle'>Select Source</p>
//                             <div className='sheetdivider' />
//                             <button className='sheetbtn' onClick={handleCameraClick}>Camera</button>
//                             <div className='sheetdivider' />
//                             <button className='sheetbtn' onClick={() => setShowSheet(false)}>Gallery</button>
//                         </div>
//                         <div className='sheetcancelcard'>
//                             <button className='sheetcancelbtn' onClick={() => setShowSheet(false)}>Cancel</button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {cameraMode === 'viewfinder' && (
//                 <div className="camera-sim-overlay">
//                     <div className="viewfinder">
//                         <div className="scan-focus-box">
//                             <div className="corner tl"></div>
//                             <div className="corner tr"></div>
//                             <div className="corner bl"></div>
//                             <div className="corner br"></div>
//                         </div>
//                         <p className="scan-text">Align item within the frame</p>
//                         <div className="camera-controls">
//                             <div className="capture-btn-outer" onClick={capturePhoto}>
//                                 <div className="capture-btn-inner"></div>
//                             </div>
//                             <button className="close-cam" onClick={() => setCameraMode('closed')}>Cancel</button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {cameraMode === 'captured' && (
//                 <div className="camera-sim-overlay captured-bg bg2">
//                     <div className="captured-content">
//                         <div className="scanning-bar"></div>
//                         <p className="processing-text">Analyzing Image...</p>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default Search;
import React, { useState, useRef } from 'react';
import "./Search.css"
import Navbar from '../components/Navbar';
import rx from '../assets/rx.svg';
import pic from '../assets/pic.svg';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [showSheet, setShowSheet] = useState(false);
    const [cameraMode, setCameraMode] = useState('closed');
    const [scanType, setScanType] = useState(''); // 'prescription' or 'product'
    const navigate = useNavigate();
    
    // Ref to trigger the hidden file input
    const fileInputRef = useRef(null);

    // Handlers for the main UI buttons
    const handlePrescriptionClick = () => {
        setScanType('prescription');
        setShowSheet(true);
    };

    const handleProductClick = () => {
        setScanType('product');
        setShowSheet(true);
    };

    // Handlers for the Bottom Sheet options
    const handleCameraClick = () => {
        setShowSheet(false);
        setCameraMode('viewfinder');
    };

    const handleGalleryClick = () => {
        setShowSheet(false);
        fileInputRef.current.click(); // Open system gallery
    };

    // Triggered when user selects an image from gallery
    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            // Logic: Prescription -> Alternative | Product -> Products Found
            const target = scanType === 'prescription' ? '/extracted-prescription' : '/products-found';
            startAnalysisFlow(target);
        }
    };

    // Triggered when user takes a photo with simulated camera
    const capturePhoto = () => {
        // Logic: Prescription -> Alternative | Product -> Products Found
        const target = scanType === 'prescription' ? '/extracted-prescription' : '/products-found';
        startAnalysisFlow(target);
    };

    // Reusable analysis animation logic
    const startAnalysisFlow = (targetPath) => {
        setCameraMode('captured');
        setTimeout(() => {
            setCameraMode('closed');
            navigate(targetPath); 
        }, 2000);
    };

    return (
        <>
            <Navbar />
            <div className='searchdiv'>
                <div className='titlewsub'>
                    <p className='sectiontitle margin0 mar12'>Find Medicines Nearby</p>
                    <p className='subtitles'>Check which pharmacies have your medication in stock.</p>
                </div>

                <input type="text" className='searchinput' placeholder='Search' />
                
                <div className='for2buttons2'>
                    {/* Prescription Flow */}
                    <div className='reorder width177 h48' onClick={handlePrescriptionClick} style={{ cursor: 'pointer' }}>
                        <img src={rx} alt="rx icon" />
                        <p className='rtext f14px'>Upload Prescription</p>
                    </div>

                    {/* Product Flow */}
                    <div className='reorder width177 h48' onClick={handleProductClick} style={{ cursor: 'pointer' }}>
                        <img src={pic} alt="product icon" />
                        <p className='rtext f14px'>Upload Product Image</p>
                    </div>
                </div>
            </div>

            {/* Hidden Input for Gallery Selection */}
            <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                accept="image/*" 
                onChange={handleFileChange}
            />

            {/* Bottom Sheet Overlay */}
            {showSheet && (
                <div className='sheetoverlay' onClick={() => setShowSheet(false)}>
                    <div className='sheetcontainer' onClick={(e) => e.stopPropagation()}>
                        <div className='sheetcard'>
                            <p className='sheettitle'>Select Source</p>
                            <div className='sheetdivider' />
                            <button className='sheetbtn' onClick={handleCameraClick}>Camera</button>
                            <div className='sheetdivider' />
                            <button className='sheetbtn' onClick={handleGalleryClick}>Gallery</button>
                        </div>
                        <div className='sheetcancelcard'>
                            <button className='sheetcancelbtn' onClick={() => setShowSheet(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Camera Viewfinder Overlay */}
            {cameraMode === 'viewfinder' && (
                <div className="camera-sim-overlay">
                    <div className="viewfinder">
                        <div className="scan-focus-box">
                            <div className="corner tl"></div>
                            <div className="corner tr"></div>
                            <div className="corner bl"></div>
                            <div className="corner br"></div>
                        </div>
                        <p className="scan-text">Align {scanType} within the frame</p>
                        <div className="camera-controls">
                            <div className="capture-btn-outer" onClick={capturePhoto}>
                                <div className="capture-btn-inner"></div>
                            </div>
                            <button className="close-cam" onClick={() => setCameraMode('closed')}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Analysis/Scanning Overlay */}
            {cameraMode === 'captured' && (
                <div className={`camera-sim-overlay captured-bg ${scanType === 'prescription' ? 'bg-rx' : 'bg-product'}`}>
                    <div className="captured-content">
                        <div className="scanning-bar"></div>
                        <p className="processing-text">Analyzing {scanType}...</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Search;