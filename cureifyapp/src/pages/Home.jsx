import React, { useEffect, useState } from 'react';
import "./Home.css";
import Navbar from '../components/Navbar';
import export1 from '../assets/export.svg';
import profile from '../assets/profile.svg';
import smalll from '../assets/smalllogo.svg';
import notofications from '../assets/noti.svg';
import reo from '../assets/reo.svg';
import TextButton from '../components/TextButton';
import MedicineCard from '../components/MedicineCard';
import { supabase } from './../supabase';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Home = () => {
    const { isArabic } = useLang();
    const [meds, setMeds] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        async function fetchMeds() {
            const res = await supabase
                .from('Users')
                .select('meds')
                .eq('id', 4);

            if (res.data?.[0]?.meds) setMeds(res.data[0].meds);
            setPageLoading(false);
        }
        fetchMeds();
    }, []);

    const handleTakeMed = async (medIndex) => {
        setMeds(prevMeds => {
            const targetMed = prevMeds[medIndex];
            if (targetMed.taken) return prevMeds;

            // Decrement from shared pool — sync remaining across all same-named meds
            const newRemaining = Math.max(0, targetMed.remaining - 1);

            const updatedMeds = prevMeds.map((med, i) => {
                if (med.name === targetMed.name) {
                    return {
                        ...med,
                        remaining: newRemaining,
                        taken: i === medIndex ? true : med.taken,
                    };
                }
                return med;
            });

            supabase
                .from('Users')
                .update({ meds: updatedMeds })
                .eq('id', 4)
                .then(({ error }) => {
                    if (error) console.error("Error updating medication:", error);
                });

            return updatedMeds;
        });
    };

    const handleUntakeMed = async (medIndex) => {
        setMeds(prevMeds => {
            const targetMed = prevMeds[medIndex];
            if (!targetMed.taken) return prevMeds;

            // Restore to shared pool — sync remaining across all same-named meds
            const newRemaining = targetMed.remaining + 1;

            const updatedMeds = prevMeds.map((med, i) => {
                if (med.name === targetMed.name) {
                    return {
                        ...med,
                        remaining: newRemaining,
                        taken: i === medIndex ? false : med.taken,
                    };
                }
                return med;
            });

            supabase
                .from('Users')
                .update({ meds: updatedMeds })
                .eq('id', 4)
                .then(({ error }) => {
                    if (error) console.error("Error updating medication:", error);
                });

            return updatedMeds;
        });
    };

    const takenCount = meds.filter(med => med.taken).length;
    const totalCount = meds.length;
    const percentage = totalCount > 0 ? Math.round((takenCount / totalCount) * 100) : 0;
    const nextMed = meds.find(med => !med.taken);

    if (pageLoading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <>
            <Navbar />
            <motion.div 
                className='maindiv gap8'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className='profilewnot'>
                    <div className='profilpart'>
                        <Link to="/profile" style={{ textDecoration: 'none' }}>
                            <img src={profile} alt="profile" />
                        </Link>
                        <div className='profilpart'>
                            <p className='name'>{isArabic ? "أهلاً، بدر!" : "Hello, Badr!"}</p>
                            <div className='pointsdiv'>
                                <p className='points'>{isArabic ? "٢٠٠ نقطة" : "200 points"}</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/notifications" style={{ textDecoration: 'none' }}>
                        <img src={notofications} alt="notifications" />
                    </Link>
                </div>

                <Link to="/progress" style={{ textDecoration: 'none' }}>
                    <motion.div className='bluecard' whileTap={{ scale: 0.98 }}>
                        <div className='amountwicon'>
                            <p className='amount'>
                                {isArabic 
                                    ? `لقد تناولت ${takenCount} من ${totalCount} جرعات اليوم.` 
                                    : `You've taken ${takenCount} of ${totalCount} doses today.`}
                            </p>
                            <div className='exporticon'>
                                <img src={export1} alt="export" />
                            </div>
                        </div>

                        <div className='progressbar-track'>
                            <div className='progressbar-fill' style={{ width: `${percentage}%` }} />
                        </div>

                        <div className='amountwicon'>
                            <p className='amount'>{isArabic ? `تم إنجاز ${percentage}٪` : `${percentage}% Completed`}</p>
                            <p className='amount'>
                                {nextMed 
                                    ? (isArabic 
                                        ? `التالي: ${nextMed.name} (${nextMed.time})` 
                                        : `Next: ${nextMed.name} (${nextMed.time})`)
                                    : (isArabic ? "تم تناول جميع الأدوية!" : "All doses taken!")}
                            </p>
                        </div>
                    </motion.div>
                </Link>

                <div className='medicationsection'>
                    <div className='titlewbutton'>
                        <p className='sectiontitle'>{isArabic ? "أدوية اليوم" : "Today's Medication"}</p>
                        <Link to="/med-details" style={{ textDecoration: 'none' }}>
                            <TextButton text={isArabic ? "عرض التفاصيل" : "View details"} color="#00A4AA" weight="700" />
                        </Link>
                    </div>
                    <div className='formedcards'>
                        {meds.map((med, index) => (
                            <MedicineCard
                                key={med.name + index} 
                                name={med.dosage ? `${med.name} ${med.dosage}` : med.name}
                                time={med.time}
                                instruction={med.note}
                                image={med.image} 
                                taken={med.taken}
                                onTake={() => handleTakeMed(index)}
                                onUntake={() => handleUntakeMed(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className='medicationsection'>
                    <div className='titlewbutton'>
                        <p className='sectiontitle'>{isArabic ? "أدوية قاربت على الانتهاء" : "Running Low"}</p>
                    </div>
                    <motion.div className='medcard' whileHover={{ x: 5 }}>
                        <div className='forfirst2'>
                            <div className='medcardInfo'>
                                <p className='medcardName'>Anuva 50mg</p>
                                <div className='medcardMeta'>
                                    <span className='medcardTime2 red'>
                                        {isArabic ? "حبتان متبقيتان • يومان متبقيان" : "2 pills left • 2 days remaining"}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Link to="/bag" style={{ textDecoration: 'none' }}>
                            <div className='reorder'>
                                <img src={reo} alt="re-order" />
                                <p className='rtext'>{isArabic ? "إعادة طلب" : "Re-order"}</p>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}

export default Home;