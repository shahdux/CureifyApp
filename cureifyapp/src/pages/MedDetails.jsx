import React, { useState, useEffect } from 'react';
import "./Pharmacies.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import smalll from '../assets/smalllogo.svg';
import MedicineCard2 from '../components/MedicineCard2';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { supabase } from './../supabase';

const MedDetails = () => {
    const { isArabic } = useLang();
    const [meds, setMeds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMeds() {
            const res = await supabase
                .from('Users')
                .select('meds')
                .eq('id', 4);

            if (res.data?.[0]?.meds) {
                setMeds(res.data[0].meds);
            }
            setLoading(false);
        }
        fetchMeds();
    }, []);

    // Deduplicate meds by name — same-named meds (e.g. two Vibramycin doses)
    // share a remaining pool, so we only show one card with the shared count.
    const dedupedMeds = meds.reduce((acc, med) => {
        const existing = acc.find(m => m.name === med.name);
        if (!existing) {
            acc.push(med);
        }
        return acc;
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
                className='searchdiv opadding'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div className='arrowwtitle gap0'>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <img 
                            src={back} 
                            alt="back icon" 
                            style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} 
                        />
                    </Link>
                    <SectionTitle 
                        title={isArabic ? "أدوية اليوم" : "Today's Medication"} 
                        margin="0 auto" 
                        align="center" 
                    />
                </div>

                <div className='forpharms'>
                    {dedupedMeds.map((med, index) => (
                        <MedicineCard2
                            key={index}
                            image={med.image}
                            name={med.dosage ? `${med.name} ${med.dosage}` : med.name}
                            tablets={1} 
                            frequency={isArabic ? med.freqAr : med.freqEn}
                            time={med.time}
                            remaining={med.remaining}
                            total={med.total}
                            duration={isArabic ? med.durAr : med.durEn}
                        />
                    ))}
                </div>
            </motion.div>
        </>
    );
}

export default MedDetails;