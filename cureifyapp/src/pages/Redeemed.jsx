import React, { Component } from 'react';

import "./Rewards.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import { Link } from 'react-router-dom';
import lock from '../assets/lock.svg';
import opened from '../assets/opened.svg';
import bigstar from '../assets/bigstar.svg';

const Redeemed = () => {

    return (
        <>
            <Navbar />
            <div className='maindiv opadding'>
                <div className='arrowwtitle gap0'>
                    <Link to="/rewards" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" />
                    </Link>
                    <SectionTitle title="My Rewards" margin="0 auto" align="center"/>
                </div>

                <div className='rewardsherocard'>
                    <img src={bigstar} alt="star icon" />
                    <p className='rewardstotallabel'>Total Points</p>
                    <p className='rewardstotalvalue'>200</p>
                    <div className='rewardsprogresswrap'>
                        <div className='rewardsprogress'>
                            <div className='rewardsprogressfill'/>
                        </div>
                        <div className='rewardsprogresslabels'>
                            <p className='rewardsnextlabel'>Next reward at 300</p>
                            <p className='rewardsmorelabel'>55 more</p>
                        </div>
                    </div>
                </div>

                <p className='rewardssectionlabel'>Available Rewards</p>

               

                <div className='rewarditemcard'>
                    <div className='rewarditemleft'>
                        <div className='rewarditemicon grayicon'>
                            <img src={lock} alt="reward" className='rewardlockicon'/>
                        </div>
                        <div className='rewarditeminfo'>
                            <p className='rewarditemtitle'>Free Medicine Delivery</p>
                            <p className='rewarditemdes'>Free delivery on your next order</p>
                            <div className='rewardbottomrow'>
                                <p className='rewarditempoints'>⭐ 250 points</p>
                                <p className='rewardmoreneeded'>50 more points needed</p>
                            </div>
                        </div>
                    </div>
                </div>
   <p className='rewardssectionlabel'>Redeemed Rewards</p>

                <div className='rewarditemcard'>
                    <div className='rewarditemleft'>
                        <img src={opened} alt="reward" className='rewardlockicon'/>
                        <div className='rewarditeminfo'>
                            <p className='rewarditemtitle'>10% Pharmacy Discount</p>
                            <p className='rewarditemdes'>Valid at partner pharmacies</p>
                            <div className='rewardbottomrow'>
                                <p className='rewarditempoints'>⭐ 100 points</p>
                                <Link to="/reward-details" style={{ textDecoration: 'none' }}>
                <button className="pharmacydirectionsbtn viewwidth">View</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Redeemed;