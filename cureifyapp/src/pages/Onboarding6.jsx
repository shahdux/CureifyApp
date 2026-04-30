import React, { useEffect, useState } from 'react';
import { supabase } from "../supabase";
import "./Onboarding1.css";
import dots from '../assets/dots6.svg';
import smalll from '../assets/smalllogo.svg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Onboarding6 = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getOnboarding() {
            const res = await supabase.from("Onboarding").select("*").eq("id", 6);
            if (res.data) setData(res.data[0]);
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
        <div className='onboarddiv'>
            <div className='buttonholder'></div>
            <img src={data.image} alt="onboarding" />
            <div className='titlewdes'>
                <p className='onbtitle'>{data.title}</p>
                <p className='ondes'>{data.description}</p>
            </div>
            <img src={dots} alt="dots icon" />
            <div className='dots'></div>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
                <Button text={data.button2} />
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
                <p className='logindes'>Already have an account? <span className='greentext'> Log in</span></p>
            </Link>
        </div>
    );
}

export default Onboarding6;