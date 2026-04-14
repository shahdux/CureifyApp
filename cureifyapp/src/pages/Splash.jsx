import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Splash.css";
import letterF from '../assets/f.svg';
import letterY from '../assets/y.svg';
import brandName from '../assets/logo.svg';

const Splash = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => setStep(1), 300);  
        setTimeout(() => setStep(2), 1000); 
        setTimeout(() => navigate('/onboarding-1'), 2500);
    }, []);

    return (
        <div className='splashcont'>
            <div className='splash-content'>
                <div className='splash-logo-row'>
                    <img
                        src={letterF}
                        alt="f"
                        className={`letter-f ${step >= 1 ? 'animate-f' : ''}`}
                    />
                    <img
                        src={letterY}
                        alt="y"
                        className={`letter-y ${step >= 1 ? 'animate-y' : ''}`}
                    />
                </div>
                <div className='di'></div>
                <img
                    src={brandName}
                    alt="cureify"
                    className={`splash-brand ${step >= 2 ? 'animate-brand' : ''}`}
                />
            </div>
        </div>
    );
}

export default Splash;