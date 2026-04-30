import React, { Component } from 'react';
import "./Pharmacies.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useLang } from '../context/LanguageContext';

const PersonalInfo = () => {
    const { isArabic } = useLang();

    return (
        <>
            <Navbar />
            <div className='searchdiv opadding height800px'>
                <div className='arrowwtitle gap0'>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" style={{ transform: isArabic ? 'scaleX(-1)' : 'none' }} />
                    </Link>
                    <SectionTitle title={isArabic ? "المعلومات الشخصية" : "Personal Information"} margin="0 auto" align="center"/>
                </div>

                <div className='forpharms'>
                    <div className='checkoutsection'>
                        <p className='checkoutsectiontitle'>{isArabic ? "الاسم الكامل" : "Full Name"}</p>
                        <div className='phoneinputrow'>
                            <input type="tel" className='phoneinput' placeholder='Badr Mohamed' />
                        </div>
                    </div>
                    <div className='checkoutsection'>
                        <p className='checkoutsectiontitle'>{isArabic ? "البريد الإلكتروني" : "Email"}</p>
                        <div className='phoneinputrow'>
                            <input type="tel" className='phoneinput blackte' placeholder='BadrMohammad@gmail.com' />
                        </div>
                    </div>
                    <div className='checkoutsection'>
                        <p className='checkoutsectiontitle'>{isArabic ? "رقم الهاتف" : "Phone Number"}</p>
                        <div className='phoneinputrow'>
                            <input type="tel" className='phoneinput' placeholder='' />
                        </div>
                    </div>
                </div>
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <Button text={isArabic ? "حفظ" : "Save"} />
                </Link>
            </div>
        </>
    );
}

export default PersonalInfo;