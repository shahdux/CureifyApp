import React from 'react';
import "./NotificationSettings.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import { Link } from 'react-router-dom';
import Toggle from '../components/Toggle';

const NotificationSettings = () => {
    return (
        <>
            <Navbar />
            <div className='maindiv opadding '>
                <div className='arrowwtitle gap0'>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" />
                    </Link>
                    <SectionTitle title="Notification Settings" margin="0 auto" align="center"/>
                </div>

                <p className='notifgrouplabel'>Medication & Health</p>

                <div className='notifcard'>
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>Medication Reminders</p>
                            <p className='notifdes'>Get notified when it's time to take your medicine</p>
                        </div>
                        <Toggle />
                    </div>
                    <div className='notifdivider' />
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>Refill Alerts</p>
                            <p className='notifdes'>Alerts when your medication is running low</p>
                        </div>
                        <Toggle />
                    </div>
                    <div className='notifdivider' />
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>Health Insights</p>
                            <p className='notifdes'>AI-powered health tips and insights</p>
                        </div>
                        <Toggle />
                    </div>
                </div>

                <p className='notifgrouplabel'>Rewards & Updates</p>

                <div className='notifcard'>
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>Reward Notifications</p>
                            <p className='notifdes'>Updates about points, badges, and new rewards</p>
                        </div>
                        <Toggle />
                    </div>
                    <div className='notifdivider' />
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>Pharmacy Updates</p>
                            <p className='notifdes'>Order status and delivery notifications</p>
                        </div>
                        <Toggle />
                    </div>
                </div>

                <p className='notifgrouplabel'>Alert Methods</p>

                <div className='notifcard'>
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>Voice Alerts</p>
                            <p className='notifdes'>Audio notifications for medication reminders</p>
                        </div>
                        <Toggle />
                    </div>
                    <div className='notifdivider' />
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>Push Notifications</p>
                            <p className='notifdes'>In-app and mobile push notifications</p>
                        </div>
                        <Toggle />
                    </div>
                    <div className='notifdivider' />
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>Email Notifications</p>
                            <p className='notifdes'>Receive updates via email</p>
                        </div>
                        <Toggle />
                    </div>
                </div>

            </div>
        </>
    );
}

export default NotificationSettings;