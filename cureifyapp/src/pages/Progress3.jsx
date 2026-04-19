import React from 'react';
import "./Progress1.css"
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import MedicineCard2 from '../components/MedicineCard2';
import { Link } from 'react-router-dom';
import pil from '../assets/pillsg.svg';
import SectionTitle from '../components/SectionTitle';

const Progress3 = () => {
    return (
        <>
            <Navbar />
            <div className='maindiv opadding gap26 height800px'>
                <div className='arrowwtitle gap0'>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" />
                    </Link>
                    <SectionTitle title="Your Progress" margin="0 auto" align="center"/>
                </div>

                <div className='progresschartcard'>
                    <div className='donutwrapper'>
                        <svg viewBox="0 0 120 120" className='donutsvg'>
                            <circle cx="60" cy="60" r="45" fill="none" stroke="#E5E7EB" strokeWidth="14"/>
                            <circle cx="60" cy="60" r="45" fill="none" stroke="#F8D468" strokeWidth="14"
                                strokeDasharray="282.6"
                                strokeDashoffset="0"
                                strokeLinecap="round"
                                transform="rotate(-90 60 60)"
                            />
                            <circle cx="60" cy="60" r="45" fill="none" stroke="#00A63E" strokeWidth="14"
                                strokeDasharray="282.6"
                                strokeDashoffset="188.4"
                                strokeLinecap="round"
                                transform="rotate(-90 60 60)"
                            />
                            <circle cx="60" cy="60" r="45" fill="none" stroke="#D4183D" strokeWidth="14"
                                strokeDasharray="282.6"
                                strokeDashoffset="235.5"
                                strokeLinecap="round"
                                transform="rotate(-90 60 60)"
                            />
                            <text x="60" y="65" textAnchor="middle" className='donuttext'>33%</text>
                        </svg>
                    </div>
                    <div className='progresschartright'>
                        <div className='progresslegendrow'>
                            <span className='progressdot redd'/>
                            <p className='progresslegendlabel'><span className='progresslegendnum'>1</span> missed</p>
                        </div>
                        <div className='progresslegendrow'>
                            <span className='progressdot greenn'/>
                            <p className='progresslegendlabel'><span className='progresslegendnum'>1</span> Completed</p>
                        </div>
                        <div className='progresslegendrow'>
                            <span className='progressdot yelloww'/>
                            <p className='progresslegendlabel'><span className='progresslegendnum'>3</span> Upcoming</p>
                        </div>
                    </div>
                </div>

              <div className='progresstabs'>
                 <Link to="/progress" style={{ textDecoration: 'none' }}>
                     <button className='progresstab '>Completed</button>
                 </Link>
                 <Link to="/progress-upcoming" style={{ textDecoration: 'none' }}>
                     <button className='progresstab '>Upcoming</button>
                 </Link>
                 <Link to="/progress-missed" style={{ textDecoration: 'none' }}>
                     <button className='progresstab progresstabactive'>Missed</button>
                 </Link>
             </div>

                <div className='missedcard redbg'>
                    <MedicineCard2
                        image={pil}
                        name="Aspirin 100mg"
                        tablets={1}
                        frequency="Once daily"
                        time="09:00 AM"
                        remaining={25}
                        total={30}
                        duration="30 days"
                    />
                </div>

            </div>
        </>
    );
}

export default Progress3;