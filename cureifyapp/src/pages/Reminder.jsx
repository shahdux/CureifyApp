// import React, { Component, useState } from 'react';
// import "./Reminder.css"
// import SectionTitle from '../components/SectionTitle';
// import FeatureCard from '../components/FeatureCard';
// import f1 from '../assets/ai.svg';
// import Button from './../components/Button';
// import Counter from '../components/Counter';
// import Toggle from '../components/Toggle';
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';


// const Reminder = () => {
//       const [showSheet, setShowSheet] = useState(false);

//     return ( <>
//     <Navbar/>
//     <div className='maindiv opadding gap26'>
//     <SectionTitle title="Add Reminder" />
//     <FeatureCard image={f1} name="Scan Prescription" des="Auto-fill form using AI scanner" onClick={() => setShowSheet(true)}/>

// <div className='logincont hauto'>
//     <div className='for2buttons'>


//     </div>
//     <div className='forinputswtexts'>
//   <div className='for2inputs'>

//     <div className='titlewinput'>
//       <p className='inputtile'> Medicine Name</p>
//       <input type="text" className='inputc'/>
//     </div>

//     <div className='titlewinput'>
//       <p className='inputtile '>Total Pills Available</p>
//       <div className='inputwtext'>
//         <input type="number" className='inputsmallerwidth' />
//         <p className='pills'>Pills</p>
//       </div>
//     </div>

//     <div className='titlewinputbutton'>
//       <p className='inputtile'>Pills per intake</p>
     
//       <Counter/>
//     </div>

//     <div className='titlewinput'>
//       <p className='inputtile'> Time</p>
//       <input type="time" className='inputc'/>
//     </div>

// <div className='titlewinput '>
//   <p className='inputtile'>Frequency</p>
//   <select className='inputc martop3 lw'>
//     <option value="1" className='optiontext'>Every day</option>
//     <option value="2" className='optiontext'>Every 2 days</option>
//     <option value="3" className='optiontext'>Every 3 days</option>
//     <option value="7" className='optiontext'>Every week</option>
//     <option value="14" className='optiontext'>Every 2 weeks</option>
//     <option value="30" className='optiontext'>Every month</option>
//   </select>
// </div>
//    <div className='titlewinput '>
//   <p className='inputtile'>Duration</p>
//   <select className='inputc martop3 lw'>
//     <option value="7" className='optiontext'>1 week</option>
//     <option value="14" className='optiontext'>2 weeks</option>
//     <option value="21" className='optiontext'>3 weeks</option>
//     <option value="30" className='optiontext'>1 month</option>
//     <option value="60" className='optiontext'>2 months</option>
//     <option value="90" className='optiontext'>3 months</option>
//     <option value="180" className='optiontext'>6 months</option>
//     <option value="365" className='optiontext'>1 year</option>
//   </select>
// </div>

//     <div className='titlewinput'>
//       <p className='inputtile'> Start Date</p>
//       <input type="date" className='inputc'/>
//     </div>

//     <div className='titlewinput '>
//       <p className='inputtile'> Pill Color (Optional)</p>
//       <select className='inputc martop3 lw'>
//         <option className='optiontext'>Select</option>
//         <option className='optiontext'>Red</option>
//         <option className='optiontext'>Blue</option>
//         <option className='optiontext'>White</option>
//       </select>
//     </div>

//     <div className='titlewinput '>
//       <p className='inputtile'> Notes (Optional)</p>
//       <textarea className='inputc martop3' placeholder='Take after food...'></textarea>
//     </div>

   
// <div className='togglecard'>
//       <div className='titlewtogbutton'>
//         <p className='toggle-title'>Voice Alert</p>
//         <Toggle />
//       </div>
//         <p className='toggle-desc'>
//                    Play a voice reminder when it's time to take your medication.

//         </p>
//     </div>
//     <div className='togglecard'>
//       <div className='titlewtogbutton'>
//         <p className='toggle-title'>Reminder call</p>
//         <Toggle />
//       </div>
//         <p className='toggle-desc'>
//           If you miss a push notification, we'll call you again within 5 minutes.
//         </p>
//         <p className='conf'>A notification that mimics a phone call. Internet connection required. There is no charge or phone number is used.</p>
//     <div className='titlewinput'>
//       <p className='inputtile f14'> Call Delay</p>
//       <select className='inputc martop3 w295'>
//         <option>5 minutes</option>
//         <option>10 minutes</option>
//       </select>
//     </div>
//     </div>
// <Link to="/home" style={{ textDecoration: 'none' }}>
// <Button text="Add Reminder" width="335px"/>
// </Link>
    

//   </div>
// </div>
   

// </div>
    
//     </div>
//        {showSheet && (
//             <div className='sheetoverlay' onClick={() => setShowSheet(false)}>
//                 <div className='sheetcontainer' onClick={(e) => e.stopPropagation()}>
//                     <div className='sheetcard'>
//                         <p className='sheettitle'>Select Prescription</p>
//                         <div className='sheetdivider'/>
//                         <button className='sheetbtn' onClick={() => setShowSheet(false)}>Camera</button>
//                         <div className='sheetdivider'/>
//                         <button className='sheetbtn' onClick={() => setShowSheet(false)}>Gallery</button>
//                     </div>
//                     <div className='sheetcancelcard'>
//                         <button className='sheetcancelbtn' onClick={() => setShowSheet(false)}>Cancel</button>
//                     </div>
//                 </div>
//             </div>
//         )}
    
//     </> );
// }
 
// export default Reminder;

// import React, { useState } from 'react';
// import "./Reminder.css"
// import SectionTitle from '../components/SectionTitle';
// import FeatureCard from '../components/FeatureCard';
// import f1 from '../assets/ai.svg';
// import Button from './../components/Button';
// import Counter from '../components/Counter';
// import Toggle from '../components/Toggle';
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';

// const Reminder = () => {
//     const [showSheet, setShowSheet] = useState(false);
//     const [cameraMode, setCameraMode] = useState('closed'); // 'closed', 'viewfinder', 'captured'

//     const handleCameraClick = () => {
//         setShowSheet(false);
//         setCameraMode('viewfinder');
//     };

//     const capturePhoto = () => {
//         setCameraMode('captured');
//         // Auto-close after 2 seconds to simulate "Processing"
//         setTimeout(() => {
//             setCameraMode('closed');
//             alert("Prescription Scanned! Form auto-filled.");
//         }, 2000);
//     };

//     return (
//         <>
//             <Navbar />
//             <div className='maindiv opadding gap26'>
//                 <SectionTitle title="Add Reminder" />
//                 <FeatureCard image={f1} name="Scan Prescription" des="Auto-fill form using AI scanner" onClick={() => setShowSheet(true)} />

//                 <div className='logincont hauto'>
//                     <div className='forinputswtexts'>
//                         <div className='for2inputs'>
//                             <div className='titlewinput'>
//                                 <p className='inputtile'> Medicine Name</p>
//                                 <input type="text" className='inputc' placeholder="Panadol" />
//                             </div>
//                             <Link to="/home" style={{ textDecoration: 'none' }}>
//                                 <Button text="Add Reminder" width="335px" />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {showSheet && (
//                 <div className='sheetoverlay' onClick={() => setShowSheet(false)}>
//                     <div className='sheetcontainer' onClick={(e) => e.stopPropagation()}>
//                         <div className='sheetcard'>
//                             <p className='sheettitle'>Select Prescription</p>
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
//                         <div className="scan-focus-box"></div>
//                         <p className="scan-text">Align prescription within the frame</p>
//                         <div className="camera-controls">
//                             <button className="capture-btn" onClick={capturePhoto}></button>
//                             <button className="close-cam" onClick={() => setCameraMode('closed')}>Cancel</button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {cameraMode === 'captured' && (
//                 <div className="camera-sim-overlay captured-bg">
//                     <div className="processing-flash"></div>
//                     <div className="captured-content">
//                         <div className="scanning-bar"></div>
//                         <p className="processing-text">Analyzing Prescription...</p>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default Reminder;
import React, { useState } from 'react';
import "./Reminder.css"
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import f1 from '../assets/ai.svg';
import Button from './../components/Button';
import Counter from '../components/Counter';
import Toggle from '../components/Toggle';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Reminder = () => {
    const [showSheet, setShowSheet] = useState(false);
    const [cameraMode, setCameraMode] = useState('closed'); // 'closed', 'viewfinder', 'captured'

    const handleCameraClick = () => {
        setShowSheet(false);
        setCameraMode('viewfinder');
    };

    const capturePhoto = () => {
        setCameraMode('captured');
        // Auto-close after 2 seconds to simulate "Processing"
        setTimeout(() => {
            setCameraMode('closed');
        }, 2000);
    };

    return (
        <div className="app-container">
            <Navbar />
            <div className='maindiv opadding gap26'>
                <SectionTitle title="Add Reminder" />
                <FeatureCard image={f1} name="Scan Prescription" des="Auto-fill form using AI scanner" onClick={() => setShowSheet(true)} />

                <div className='logincont hauto'>
                    <div className='forinputswtexts'>
                        <div className='for2inputs'>
                            
                            {/* --- ALL FORM FIELDS RESTORED --- */}
                            <div className='titlewinput'>
                                <p className='inputtile'> Medicine Name</p>
                                <input type="text" className='inputc' placeholder="Panadol" />
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile '>Total Pills Available</p>
                                <div className='inputwtext'>
                                    <input type="number" className='inputsmallerwidth' />
                                    <p className='pills'>Pills</p>
                                </div>
                            </div>

                            <div className='titlewinputbutton'>
                                <p className='inputtile'>Pills per intake</p>
                                <Counter />
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'> Time</p>
                                <input type="time" className='inputc' />
                            </div>

                            <div className='titlewinput '>
                                <p className='inputtile'>Frequency</p>
                                <select className='inputc martop3 lw'>
                                    <option value="1">Every day</option>
                                    <option value="2">Every 2 days</option>
                                    <option value="3">Every 3 days</option>
                                    <option value="7">Every week</option>
                                    <option value="14">Every 2 weeks</option>
                                    <option value="30">Every month</option>
                                </select>
                            </div>

                            <div className='titlewinput '>
                                <p className='inputtile'>Duration</p>
                                <select className='inputc martop3 lw'>
                                    <option value="7">1 week</option>
                                    <option value="14">2 weeks</option>
                                    <option value="21">3 weeks</option>
                                    <option value="30">1 month</option>
                                    <option value="60">2 months</option>
                                    <option value="90">3 months</option>
                                    <option value="180">6 months</option>
                                    <option value="365">1 year</option>
                                </select>
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'> Start Date</p>
                                <input type="date" className='inputc' />
                            </div>

                            <div className='titlewinput '>
                                <p className='inputtile'> Pill Color (Optional)</p>
                                <select className='inputc martop3 lw'>
                                    <option>Select</option>
                                    <option>Red</option>
                                    <option>Blue</option>
                                    <option>White</option>
                                </select>
                            </div>

                            <div className='titlewinput '>
                                <p className='inputtile'> Notes (Optional)</p>
                                <textarea className='inputc martop3' placeholder='Take after food...'></textarea>
                            </div>

                            <div className='togglecard'>
                                <div className='titlewtogbutton'>
                                    <p className='toggle-title'>Voice Alert</p>
                                    <Toggle />
                                </div>
                                <p className='toggle-desc'>Play a voice reminder when it's time to take your medication.</p>
                            </div>

                            <div className='togglecard'>
                                <div className='titlewtogbutton'>
                                    <p className='toggle-title'>Reminder call</p>
                                    <Toggle />
                                </div>
                                <p className='toggle-desc'>If you miss a push notification, we'll call you again within 5 minutes.</p>
                                <p className='conf'>A notification that mimics a phone call. Internet connection required.</p>
                                <div className='titlewinput'>
                                    <p className='inputtile f14'> Call Delay</p>
                                    <select className='inputc martop3 w295'>
                                        <option>5 minutes</option>
                                        <option>10 minutes</option>
                                    </select>
                                </div>
                            </div>

                            <Link to="/home" style={{ textDecoration: 'none' }}>
                                <Button text="Add Reminder" width="335px" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simulation Overlays */}
            {showSheet && (
                <div className='sheetoverlay' onClick={() => setShowSheet(false)}>
                    <div className='sheetcontainer' onClick={(e) => e.stopPropagation()}>
                        <div className='sheetcard'>
                            <p className='sheettitle'>Select Prescription</p>
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
                        <p className="scan-text">Align prescription within the frame</p>
                      <div className="camera-controls">
    {/* Outer ring */}
    <div className="capture-btn-outer" onClick={capturePhoto}>
        {/* Inner white circle */}
        <div className="capture-btn-inner"></div>
    </div>
    <button className="close-cam" onClick={() => setCameraMode('closed')}>Cancel</button>
</div>
                    </div>
                </div>
            )}

            {cameraMode === 'captured' && (
                <div className="camera-sim-overlay captured-bg">
                    <div className="captured-content">
                        <div className="scanning-bar"></div>
                        <p className="processing-text">Analyzing Prescription...</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Reminder;