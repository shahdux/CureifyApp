import React, { useEffect, useState } from 'react';
import { supabase } from "../supabase";
import "./Onboarding1.css";
import dots from '../assets/dots1.svg';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import { Link } from 'react-router-dom';
import smalll from '../assets/smalllogo.svg';
import { useLang } from '../context/LanguageContext'; 

const Onboarding1 = () => {
    const { isArabic } = useLang(); 
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState("");
    const [imgLoaded, setImgLoaded] = useState(false);

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

    if (loading || !imgLoaded) return (
        <>
            <div className="loader-container">
                <img src={smalll} alt="loading" className="loader-logo" />
            </div>
            {!loading && data.image && (
                <img
                    src={data.image}
                    alt=""
                    style={{ display: 'none' }}
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgLoaded(true)}
                />
            )}
        </>
    );

    return (
        <div className='onboarddiv'>
            <div className='buttonholder'>
                <Link to="/onboarding-6" style={{ textDecoration: 'none' }}>
                    <TextButton text={isArabic ? data.button1_ar : data.button1} /> 
                </Link>
            </div>

            <img 
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
        </div>
    );
}

export default Onboarding1;