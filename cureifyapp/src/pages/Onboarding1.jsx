import React, { useEffect, useState } from 'react';
import { supabase } from "../supabase";
import "./Onboarding1.css";
import dots from '../assets/dots1.svg';

import Button from '../components/Button';
import TextButton from '../components/TextButton';
import { Link } from 'react-router-dom';

const Onboarding1 = () => 
    {
    const [data, setData] = useState("");

    useEffect(() => {
        async function getOnboarding() {
            
            const res = await supabase.from("Onboarding")
        .select("*")
    .eq("id", 1);

setData(res.data[0]);
        }
        getOnboarding();
    }, []);


    return (
        <>
        
            <div className='onboarddiv'>
                <div className='buttonholder'>
 <Link to="/signup"  style={{ textDecoration: 'none' }}>
                    
<TextButton text="skip" />    </Link>            </div>
                <img src={data.image} alt="onboarding" />

                <div className='titlewdes'>

                <p className='onbtitle'>{data.title}</p>
                <p className='ondes'>{data.description}</p>
                </div>
<img src={dots} alt="dots icon" />  
<div className='dots'></div>

                <Link to="/onboarding-2"  style={{ textDecoration: 'none' }}>
           <Button text={data.button2} />
                </Link>
            </div>
        </>
    );
}

export default Onboarding1;