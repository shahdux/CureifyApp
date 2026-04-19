import React from 'react';
import "./Notifications.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import { Link } from 'react-router-dom';
import pill from '../assets/notpill.svg';
import warning from '../assets/warning.svg';
import clock from '../assets/clock.svg';

const Notifications = () => {
    return (
        <>
            <Navbar />
            <div className='maindiv opadding gap26 height800px'>
                <div className='arrowwtitle gap0'>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" />
                    </Link>
                    <SectionTitle title="Notifications" margin="0 auto" align="center"/>
                </div>

                <div className='notifitemcard'>
                    <div className='notifitemicon bluenotif'>
                        <img src={pill} alt="pill"/>
                    </div>
                    <div className='notifitembody'>
                        <p className='notifitemtitle'>Medication Reminder</p>
                        <p className='notifitemdes'>Time to take Vibramycin - 2:00 PM dose</p>
                        <div className='notifitemtime'>
                            <img src={clock} alt="clock"/>
                            <p className='notifitemtimetext'>5 minutes ago</p>
                        </div>
                    </div>
                    <span className='notifiteundot'/>
                </div>

                <div className='notifitemcard'>
                    <div className='notifitemicon rednotif'>
                        <img src={warning} alt="warning"/>
                    </div>
                    <div className='notifitembody'>
                        <p className='notifitemtitle'>Refill Alert</p>
                        <p className='notifitemdes'>Metformin is running low - only 3 doses left</p>
                        <div className='notifitemtime'>
                            <img src={clock} alt="clock"/>
                            <p className='notifitemtimetext'>3 hours ago</p>
                        </div>
                    </div>
                    <span className='notifiteundot'/>
                </div>

            </div>
        </>
    );
}

export default Notifications;