import React, { useEffect, useState } from 'react';
import { supabase } from "../supabase";
import "./Onboarding1.css";

import Button from '../components/Button';
import TextButton from '../components/TextButton';

const Onboarding1 = () => 
    {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState("");

    useEffect(() => {
        async function getOnboarding() {
            
            const res = await supabase.from("Onboarding").select("*").order("created_at", { ascending: true }).limit(1).single();

            setData(res.data);
            setLoading(false);
        }
        getOnboarding();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <div className='onboarddiv'>
                <div className='buttonholder'>
<TextButton text="skip" />                </div>
                <img src={data?.image} alt="onboarding" />
                <div className='titlewdes'>

                <p className='onbtitle'>{data?.title}</p>
                <p className='ondes'>{data?.description}</p>
                </div>
                <div className='dots'></div>
                <Button text={data?.button2} />
            </div>
        </>
    );
}

export default Onboarding1;