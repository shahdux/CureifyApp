import React, { useEffect, useState } from 'react';
import "./Home.css";
import Navbar from '../components/Navbar';
import export1 from '../assets/export.svg';
import progress from '../assets/progress.svg';
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

    const handleTakeMed = async (medName) => {
        const updatedMeds = meds.map(med => {
            if (med.name === medName && !med.taken) {
                return { 
                    ...med, 
                    remaining: med.remaining > 0 ? med.remaining - 1 : 0,
                    taken: true 
                };
            }
            return med;
        });

        setMeds(updatedMeds);

        // Update Supabase
        const { error } = await supabase
            .from('Users')
            .update({ meds: updatedMeds })
            .eq('id', 4);

        if (error) console.error("Error updating medication:", error);
    };

    if (pageLoading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <>
            <Navbar />
            <motion.div 
                className='maindiv'
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
                                {isArabic ? "لقد تناولت ١ من ٤ جرعات اليوم." : "You've taken 1 of 4 doses today."}
                            </p>
                            <div className='exporticon'>
                                <img src={export1} alt="export" />
                            </div>
                        </div>
                        <img src={progress} alt="progress" className='progress-img' />
                        <div className='amountwicon'>
                            <p className='amount'>{isArabic ? "تم إنجاز ٣٣٪" : "33% Completed"}</p>
                            <p className='amount'>
                                {isArabic ? "التالي: فيبراميسين (٩:٠٠ ص)" : "Next: Vibramycin (9:00 AM)"}
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
                                taken={med.taken} // Controlled from parent
                                onTake={() => handleTakeMed(med.name)}
                            />
                        ))}
                    </div>
                </div>

                <div className='medicationsection'>
                    <div className='titlewbutton'>
                        <p className='sectiontitle'>{isArabic ? "أدوية قاربت على الانتهاء" : "Medicines Running Low"}</p>
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