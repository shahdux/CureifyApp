import React from 'react';
import "./Confirm.css"
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import box from '../assets/box.svg';
import delivery from '../assets/car.svg';
import conf from '../assets/cnf.svg';



const Confirm = () => {
    return (
        <>
            <div className='orderplacedpage'>

                <div className='orderplacedcontent'>
                    <div className='checkcirlces'>
                       <img src={conf} alt="confirm icon" />
                    </div>

                    <p className='orderplacedtitle'>Order Placed!</p>
                    <p className='orderplaceddes'>Your medicine is on its way to you.</p>

                    <div className='orderinfocard'>
                        <div className='orderinforow'>
                                <img src={delivery} alt="delivery" className='infosvsg' />
                            <div className='orderinfotext'>
                                <p className='orderinfolabel'>ESTIMATED DELIVERY</p>
                                <p className='orderinfovalue'>Today, 04:30 PM - 05:00 PM</p>
                            </div>
                        </div>
                        <div className='orderinfodivider' />
                        <div className='orderinforow'>
                            <div className='ord'>
                                <img src={box} alt="order" className='infosvsg' />
                            </div>
                            <div className='orderinfotext'>
                                <p className='orderinfolabel'>ORDER ID</p>
                                <p className='orderinfovalue'>#MED-882941</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <Button text="Back to Home" />
                </Link>

            </div>
        </>
    );
}

export default Confirm;