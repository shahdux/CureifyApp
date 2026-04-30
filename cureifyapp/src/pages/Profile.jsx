import React from 'react';
import "./Profile.css"
import Navbar from '../components/Navbar';
import AccountCard from '../components/AccountCard';
import { Link } from 'react-router-dom';
import profileimg from '../assets/pp.svg';
import person from '../assets/person.svg';
import bell from '../assets/bell.svg';
import prescription from '../assets/prescription.svg';
import bloodtest from '../assets/bloodtest.svg';
import language from '../assets/language.svg';
import rewards from '../assets/rewards.svg';
import arrow from '../assets/arrow.svg';
import { useLang } from '../context/LanguageContext';

const Profile = () => {
    const { isArabic } = useLang();

    return (
        <>
            <Navbar />
            <div className='maindiv opadding gap26'>

                <img src={profileimg} alt="profile" className='imgbgg'/>
                <p className='profilename'>Badr Mohamed</p>

                <div className='profilestats'>
                    <div className='profilestatcard'>
                        <p className='profilestatvalue'>33%</p>
                        <p className='profilestatlabel'>{isArabic ? "الالتزام" : "ADHERENCE"}</p>
                    </div>
                    <div className='profilestatdivider' />
                    <div className='profilestatcard'>
                        <p className='profilestatvalue'>200</p>
                        <p className='profilestatlabel'>{isArabic ? "النقاط" : "POINTS"}</p>
                    </div>
                </div>

                <Link to="/rewards" style={{ textDecoration: 'none' }}>
                    <div className='rewardscard'>
                        <img src={rewards} alt="rewards" />
                        <div className='rewardsinfo'>
                            <p className='rewardstitle'>{isArabic ? "مكافآتي" : "My Rewards"}</p>
                            <p className='rewardsdes'>{isArabic ? "200 نقطة متاحة" : "200 points available"}</p>
                        </div>
                        <img src={arrow} alt="arrow" className='rewardsarrow' style={{ transform: isArabic ? 'scaleX(-1)' : 'none' }} />
                    </div>
                </Link>

                <p className='accountlabel'>{isArabic ? "الحساب" : "Account"}</p>

                <div className='accountcards'>
                    <AccountCard image={person} title={isArabic ? "المعلومات الشخصية" : "Personal Information"} to="/personal-info" />
                    <AccountCard image={bell} title={isArabic ? "إعدادات الإشعارات" : "Notification Settings"} to="/notification-settings" />
                    <AccountCard image={prescription} title={isArabic ? "سجل الوصفات الطبية" : "Prescription History"} to="/prescription-history" />
                    <AccountCard image={bloodtest} title={isArabic ? "سجل تحاليل الدم" : "Blood Test History"} to="/blood-test-history" />
                    <AccountCard image={language} title={isArabic ? "اللغة" : "Language"} to="/language" />
                </div>

            </div>
        </>
    );
}

export default Profile;