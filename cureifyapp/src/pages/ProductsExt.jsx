// import React, { useEffect, useState } from 'react';
// import "./Cart.css"
// import Navbar from '../components/Navbar';
// import back from '../assets/back.svg';
// import trash from '../assets/trash.svg';
// import av from '../assets/aven.svg';
// import SectionTitle from '../components/SectionTitle';
// import Button from '../components/Button';
// import { Link } from 'react-router-dom';

// const ProductsExt = () => {
//     const [count2, setCount2] = useState(1);
//     const [name, setName] = useState('Avene Cleanance 30Ml');
//     const [desc, setDesc] = useState('Fast-acting prevents recurrence');
//     const [editingName, setEditingName] = useState(false);
//     const [editingDesc, setEditingDesc] = useState(false);

//     return (
//         <>
//             <Navbar />
//             <div className='maindiv opadding gap26 pr h600'>
//                 <div className='arrowwtitle gap0'>
//                     <Link to="/search" style={{ textDecoration: 'none' }}>
//                         <img src={back} alt="back icon" />
//                     </Link>
//                     <SectionTitle title="Detected Medications(1)" margin="0 auto" align="center"/>
//                 </div>

//                 <div className="cartcard">
//                     <img src={av} className="cartcardImage1" />

//                     <div className="cartcardBody w375">
//                         <div className="cartcardTop">
//                             {editingName ? (
//                                 <input
//                                     className='editableinput'
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     onBlur={() => setEditingName(false)}
//                                     autoFocus
//                                 />
//                             ) : (
//                                 <p className="cartcardName" onClick={() => setEditingName(true)}>{name}</p>
//                             )}
//                             <img src={trash} alt="delete" className="trashIcon1" />
//                         </div>

//                         {editingDesc ? (
//                             <input
//                                 className='editableinput editableinputdes'
//                                 value={desc}
//                                 onChange={(e) => setDesc(e.target.value)}
//                                 onBlur={() => setEditingDesc(false)}
//                                 autoFocus
//                             />
//                         ) : (
//                             <p className="cartcardPharmacy" onClick={() => setEditingDesc(true)}>{desc}</p>
//                         )}

//                         <div className="cartcardBottom">
//                             <div className="cartcardCounter">
//                                 <button className="cartcardBtn" onClick={() => setCount2(c => Math.max(1, c - 1))}>−</button>
//                                 <span className="cartcardCount">{count2}</span>
//                                 <button className="cartcardBtn" onClick={() => setCount2(c => c + 1)}>+</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <Link to="/pharmacies" style={{ textDecoration: 'none' }}>
//                     <Button text="Select Pharmacy" />
//                 </Link>
//             </div>
//         </>
//     );
// }

// export default ProductsExt;


import React, { useEffect, useState } from 'react';
import "./Cart.css"
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import trash from '../assets/trash.svg';
import av from '../assets/aven.svg';
import smalll from '../assets/smalllogo.svg';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const ProductsExt = () => {
    const { isArabic } = useLang();
    const [loading, setLoading] = useState(true);
    const [count2, setCount2] = useState(1);
    const [name, setName] = useState('Avene Cleanance 30Ml');
    const [desc, setDesc] = useState('Fast-acting prevents recurrence');
    const [editingName, setEditingName] = useState(false);
    const [editingDesc, setEditingDesc] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <>
            <Navbar />
            <motion.div 
                className='maindiv opadding gap26 pr h600'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className='arrowwtitle gap0'>
                    <Link to="/search" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} />
                    </Link>
                    <SectionTitle title={isArabic ? "الأدوية المكتشفة (١)" : "Detected Medications(1)"} margin="0 auto" align="center" />
                </div>

                <div className="cartcard">
                    <img src={av} className="cartcardImage1" />

                    <div className="cartcardBody w375">
                        <div className="cartcardTop">
                            {editingName ? (
                                <input
                                    className='editableinput'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onBlur={() => setEditingName(false)}
                                    autoFocus
                                />
                            ) : (
                                <p className="cartcardName" onClick={() => setEditingName(true)}>{name}</p>
                            )}
                            <img src={trash} alt="delete" className="trashIcon1" />
                        </div>

                        {editingDesc ? (
                            <input
                                className='editableinput editableinputdes'
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                onBlur={() => setEditingDesc(false)}
                                autoFocus
                            />
                        ) : (
                            <p className="cartcardPharmacy" onClick={() => setEditingDesc(true)}>{desc}</p>
                        )}

                        <div className="cartcardBottom">
                            <div className="cartcardCounter">
                                <button className="cartcardBtn" onClick={() => setCount2(c => Math.max(1, c - 1))}>−</button>
                                <span className="cartcardCount">{count2}</span>
                                <button className="cartcardBtn" onClick={() => setCount2(c => c + 1)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/pharmacies" style={{ textDecoration: 'none' }}>
                    <Button text={isArabic ? "اختر الصيدلية" : "Select Pharmacy"} />
                </Link>
            </motion.div>
        </>
    );
}

export default ProductsExt;