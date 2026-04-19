import React, { useState } from 'react';
import "./RewardDetails.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import gift from '../assets/gift.svg';
import redeem from '../assets/yay.svg';



const RewardDetails = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className='maindiv opadding gap26 height800px'>
                <div className='arrowwtitle gap0'>
                    <Link to="/rewards" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" />
                    </Link>
                    <SectionTitle title="My Rewards" margin="0 auto" align="center"/>
                </div>

                <div className='rewarddetailshero'>
                        <img src={gift} alt="gift" className='rewarddetailsgift'/>
                    <p className='rewarddetailsname'>10% Pharmacy Discount</p>
                    <p className='rewarddetailsdes'>Valid at partner pharmacies</p>
                    <p className='rewarddetailspoints'>100 Points</p>
                </div>

                <div className='rewarddetailsterms'>
                    <p className='rewarddetailstermstitle'>Terms & Conditions</p>
                    <p className='rewarddetailstermsitem'>• Valid for <span className='bold'>30 days</span></p>
                    <p className='rewarddetailstermsitem'>• Valid at all partner pharmacies</p>
                    <p className='rewarddetailstermsitem'>• Cannot be combined with other offers</p>
                    <p className='rewarddetailstermsitem'>• One-time use only</p>
                </div>

                <div onClick={() => setShowPopup(true)}>
                    <Button text="Redeem" />
                </div>
            </div>

            {showPopup && (
                <div className='rewardpopupoverlay' onClick={() => setShowPopup(false)}>
                    <div className='rewardpopup' onClick={(e) => e.stopPropagation()}>
                        <button className='rewardpopupclose' onClick={() => navigate('/redeemed')}>✕</button>
                        <div className='rewardpopupcheckcirlce'>
<img src={redeem} alt="redeem icon" />                        </div>
                        <p className='rewardpopuptitle'>Reward Redeemed!</p>
                        <p className='rewardpopupdes'>Your reward has been successfully redeemed</p>
                        <div className='couponbox'>
                            <p className='couponlabel'>Coupon Code</p>
                            <p className='couponcode'>CURE37A84F</p>
                            <p className='couponhint'>Use this code at checkout</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default RewardDetails;