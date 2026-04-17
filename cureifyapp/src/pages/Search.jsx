// import React, { Component } from 'react';
// import "./Search.css"
// import Navbar from '../components/Navbar';
// import search from '../assets/search.svg';
// import rx from '../assets/rx.svg';
// import pic from '../assets/pic.svg';


// const  Search = () => {
//     return (<>
//      <Navbar/>
//             <div className='searchdiv'>
// <div className='titlewsub'>
//     <p className='sectiontitle margin0 mar12'>Find Medicines Nearby</p>
//         <p className='subtitles'>Check which pharmacies have your medication in stock.</p>

// </div>

// <input type="text" className='searchinput' placeholder='Search'/>
// <div className='for2buttons2'>
//       <div className='reorder width177 h48'>
//                             <img src={rx} alt="re-order icon" />
//                             <p className='rtext f14px'>Upload Prescription</p>
//                         </div>
//                           <div className='reorder width177 h48'>
//                                                 <img src={pic} alt="re-order icon" />
//                                                 <p className='rtext f14px'>Uplaod Product Image</p>
//                                             </div>
// </div>
//     {/* <Navbar/> */}
// </div>
    
    
    
    
//     </>  );
// }
 
// export default  Search;
import React, { useState } from 'react';
import "./Search.css"
import Navbar from '../components/Navbar';
import rx from '../assets/rx.svg';
import pic from '../assets/pic.svg';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    // 1. Initialize states for the camera flow
    const [showSheet, setShowSheet] = useState(false);
    const [cameraMode, setCameraMode] = useState('closed');
    const navigate = useNavigate();

    // 2. Logic handlers
    const handleUploadClick = () => {
        setShowSheet(true);
    };

    const handleCameraClick = () => {
        setShowSheet(false);
        setCameraMode('viewfinder');
    };

    const capturePhoto = () => {
        setCameraMode('captured');
        
        // Simulating the analysis delay
        setTimeout(() => {
            setCameraMode('closed');
            // Navigate to the extracted page after analysis
            navigate('/products-found'); 
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
                    {/* 3. Added onClick to trigger the sheet */}
                    <div className='reorder width177 h48' onClick={handleUploadClick} style={{ cursor: 'pointer' }}>
                        <img src={rx} alt="re-order icon" />
                        <p className='rtext f14px'>Upload Prescription</p>
                    </div>
                    <div className='reorder width177 h48' onClick={handleUploadClick} style={{ cursor: 'pointer' }}>
                        <img src={pic} alt="product icon" />
                        <p className='rtext f14px'>Upload Product Image</p>
                    </div>
                </div>
            </div>

            {/* 4. The Simulation Overlays (Same as Reminder page) */}
            {showSheet && (
                <div className='sheetoverlay' onClick={() => setShowSheet(false)}>
                    <div className='sheetcontainer' onClick={(e) => e.stopPropagation()}>
                        <div className='sheetcard'>
                            <p className='sheettitle'>Select Source</p>
                            <div className='sheetdivider' />
                            <button className='sheetbtn' onClick={handleCameraClick}>Camera</button>
                            <div className='sheetdivider' />
                            <button className='sheetbtn' onClick={() => setShowSheet(false)}>Gallery</button>
                        </div>
                        <div className='sheetcancelcard'>
                            <button className='sheetcancelbtn' onClick={() => setShowSheet(false)}>Cancel</button>
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
                        <p className="scan-text">Align item within the frame</p>
                        <div className="camera-controls">
                            <div className="capture-btn-outer" onClick={capturePhoto}>
                                <div className="capture-btn-inner"></div>
                            </div>
                            <button className="close-cam" onClick={() => setCameraMode('closed')}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {cameraMode === 'captured' && (
                <div className="camera-sim-overlay captured-bg bg2">
                    <div className="captured-content">
                        <div className="scanning-bar"></div>
                        <p className="processing-text">Analyzing Image...</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Search;