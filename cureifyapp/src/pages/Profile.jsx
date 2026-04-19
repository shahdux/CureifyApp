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
// import language from '../assets/language.svg';
import rewards from '../assets/rewards.svg';
import arrow from '../assets/arrow.svg';

const Profile = () => {
    return (
        <>
            <Navbar />
            <div className='maindiv opadding gap26'>

                    <img src={profileimg} alt="profile" className='imgbgg'/>
                    <p className='profilename'>Badr Mohamed</p>

                <div className='profilestats'>
                    <div className='profilestatcard'>
                        <p className='profilestatvalue'>33%</p>
                        <p className='profilestatlabel'>ADHERENCE</p>
                    </div>
                    <div className='profilestatdivider' />
                    <div className='profilestatcard'>
                        <p className='profilestatvalue'>200</p>
                        <p className='profilestatlabel'>POINTS</p>
                    </div>
                </div>

                <Link to="/rewards" style={{ textDecoration: 'none' }}>
                    <div className='rewardscard'>
                            <img src={rewards} alt="rewards"  />
                        <div className='rewardsinfo'>
                            <p className='rewardstitle'>My Rewards</p>
                            <p className='rewardsdes'>200 points available</p>
                        </div>
                        <img src={arrow} alt="arrow" className='rewardsarrow' />
                    </div>
                </Link>

                <p className='accountlabel'>Account</p>

                <div className='accountcards'>
                    <AccountCard image={person} title="Personal Information" to="/personal-info" />
                    <AccountCard image={bell} title="Notification Settings" to="/notification-settings" />
                    <AccountCard image={prescription} title="Prescription History" to="/prescription-history" />
                    <AccountCard image={bloodtest} title="Blood Test History" to="/blood-test-history" />
                    {/* <AccountCard image={language} title="Language" to="/language" /> */}
                </div>

            </div>
        </>
    );
}

export default Profile;