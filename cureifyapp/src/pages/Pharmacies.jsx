// import React, { useEffect, useState } from 'react';
// import "./Pharmacies.css"
// import Navbar from '../components/Navbar';
// import SectionTitle from '../components/SectionTitle';
// import back from '../assets/back.svg';
// import PharmacyCard from '../components/PharmacyCard';
// import { supabase } from '../supabase';
// import { Link } from 'react-router-dom';

// const Pharmacies = () => {
//     const [loading, setLoading] = useState(true);
//     const [pharmacies, setPharmacies] = useState("");

//     useEffect(() => {
//         async function fetchPharmacies() {
//             const res = await supabase.from("Pharmacies").select("*");
//             setPharmacies(res.data);
//             setLoading(false);
//         }
//         fetchPharmacies();
//     }, []);

//     if (loading) return <p>Loading...</p>;

//     return (
//         <>
//             <Navbar/>
//             <div className='searchdiv'>
//                 <div className='buttonwithdiv'>
//                      <Link to="/extracted"  style={{ textDecoration: 'none' }}>

//                     <img src={back} alt="back icon" />
//                     </Link>
//                     <div className='titlewsubdes'>
//                         <SectionTitle title="Available Pharmacies"/>
//                         <p className='subtitles tac'>Medicine: Anuva 50mg</p>
//                     </div>
//                 </div>

//                 <div className='forpharms'>
//                     {pharmacies.map((pharmacy) => {
//                         return <PharmacyCard
//                             name={pharmacy.name}
//                             price={pharmacy.price}
//                             rating={pharmacy.rate}
//                             arrival={pharmacy.arrival}
//                         />
//                     })}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Pharmacies;


import React, { useEffect, useState } from 'react';
import "./Pharmacies.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import smalll from '../assets/smalllogo.svg';
import PharmacyCard from '../components/PharmacyCard';
import { supabase } from '../supabase';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Pharmacies = () => {
    const { isArabic } = useLang();
    const [loading, setLoading] = useState(true);
    const [pharmacies, setPharmacies] = useState([]);

    useEffect(() => {
        async function fetchPharmacies() {
            const res = await supabase.from("Pharmacies").select("*");
            setPharmacies(res.data || []);
            setLoading(false);
        }
        fetchPharmacies();
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
                className='searchdiv'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div className='buttonwithdiv'>
                    <Link to="/extracted" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} />
                    </Link>
                    <div className='titlewsubdes'>
                        <SectionTitle title={isArabic ? "الصيدليات المتاحة" : "Available Pharmacies"} />
                        <p className='subtitles tac'>{isArabic ? "الدواء: أنوفا ٥٠ ملجم" : "Medicine: Anuva 50mg"}</p>
                    </div>
                </div>

                <div className='forpharms'>
                    {pharmacies.map((pharmacy, index) => (
                        <PharmacyCard
                            key={index}
                            name={pharmacy.name}
                            price={pharmacy.price}
                            rating={pharmacy.rate}
                            arrival={pharmacy.arrival}
                        />
                    ))}
                </div>
            </motion.div>
        </>
    );
}

export default Pharmacies;