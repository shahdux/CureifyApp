// import React, { useEffect, useState } from 'react';
// import { supabase } from "../supabase";
// import "./Onboarding1.css";
// import dots from '../assets/dots1.svg';

// import Button from '../components/Button';
// import TextButton from '../components/TextButton';
// import { Link } from 'react-router-dom';
// import smalll from '../assets/smalllogo.svg';


// const Onboarding1 = () => 
//     {
//             const [loading, setLoading] = useState(true);

//     const [data, setData] = useState("");
     

//     useEffect(() => {
//         async function getOnboarding() {
            
//             const res = await supabase.from("Onboarding")
//         .select("*")
//     .eq("id", 1);

// setData(res.data[0]);
// setLoading(false);
//         }
//         getOnboarding();
//     }, []);

//  if (loading) return (
//         <div className="loader-container">
//             <img src={smalll} alt="loading" className="loader-logo" />
//         </div>
//     );
//     return (
//         <>
        
//             <div className='onboarddiv'>
//                 <div className='buttonholder'>
//  <Link to="/onboarding-6"  style={{ textDecoration: 'none' }}>
                    
// <TextButton text="skip" />    </Link>            </div>
//                 <img src={data.image} alt="onboarding" />

//                 <div className='titlewdes'>

//                 <p className='onbtitle'>{data.title}</p>
//                 <p className='ondes'>{data.description}</p>
//                 </div>
// <img src={dots} alt="dots icon" />  
// <div className='dots'></div>

//                 <Link to="/onboarding-2"  style={{ textDecoration: 'none' }}>
//            <Button text={data.button2} />
//                 </Link>
//             </div>
//         </>
//     );
// }

// export default Onboarding1;


import React, { useEffect, useState } from 'react';
import { supabase } from "../supabase";
import "./Onboarding1.css";
import dots from '../assets/dots1.svg';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import { Link } from 'react-router-dom';
import smalll from '../assets/smalllogo.svg';
import { motion } from 'framer-motion'; // Added Framer Motion
import { useLang } from '../context/LanguageContext'; // Assuming this context exists for isArabic

const Onboarding1 = () => {
    const { isArabic } = useLang(); 
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState("");

    useEffect(() => {
        async function getOnboarding() {
            const res = await supabase.from("Onboarding")
                .select("*")
                .eq("id", 1);
            
            if (res.data) {
                setData(res.data[0]);
            }
            setLoading(false);
        }
        getOnboarding();
    }, []);

    if (loading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <motion.div 
            className='onboarddiv'
            initial={{ opacity: 0, x: isArabic ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isArabic ? -100 : 100 }}
            transition={{ duration: 0.5 }}
        >
            <div className='buttonholder'>
                <Link to="/onboarding-6" style={{ textDecoration: 'none' }}>
                    <TextButton text={isArabic ? data.button1_ar : data.button1} /> 
                </Link>
            </div>

            <motion.img 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                src={data.image} 
                alt="onboarding" 
            />

            <div className='titlewdes'>
                <p className='onbtitle'>
                    {isArabic ? data.title_ar : data.title}
                </p>
                <p className='ondes'>
                    {isArabic ? data.description_ar : data.description}
                </p>
            </div>

            <img src={dots} alt="dots icon" /> 
            
            <Link to="/onboarding-2" style={{ textDecoration: 'none' }}>
                <Button text={isArabic ? data.button2_ar : data.button2} />
            </Link>
        </motion.div>
    );
}

export default Onboarding1;