
import React, { useState } from 'react';
import "./Checkout.css"
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import location from '../assets/location.svg';
import cash from '../assets/cash.svg';
import card from '../assets/credit.svg';
import edit from '../assets/edit.svg';
import a from '../assets/smallimg.svg';


const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('cash');

    return (
        <>
            <Navbar />
            <div className='maindiv opadding '>
                <div className='arrowwtitle'>
                    <Link to="/cart" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" />
                    </Link>
                    <SectionTitle title="Checkout" />
                </div>

                <div className='checkoutsection'>
                    <p className='checkoutsectiontitle'>Order Summary</p>
                    <div className='orderrow'>
                        <img src={a} alt="product" className='orderimg' />
                        <div className='orderinfo'>
                            <p className='ordername'>Avene Cleanance 30Ml</p>
                            <p className='orderpharmacy'>El Ezaby Pharmacy</p>
                            <p className='orderqty'>Qty: 1</p>
                        </div>
                        <p className='orderprice'>745 EGP</p>
                    </div>
                </div>

                <p className='checkoutlabel'>Delivery to</p>
                <div className='checkoutsection'>
                    <div className='deliveryrow'>
                        <img src={location} alt="location" className='rowicon' />
                        <div className='deliveryinfo'>
                            <p className='deliverytitle'>Delivery Address</p>
                            <p className='deliveryaddress'>123 Main Street, Apt 4B, Cairo, Egypt</p>
                        </div>
                        <img src={edit} alt="edit" className='editicon' />
                    </div>
                </div>

                <div className='checkoutsection'>
                    <p className='checkoutsectiontitle'>Contact Information</p>
                    <div className='phoneinputrow'>
                        <input type="tel" className='phoneinput' placeholder='Phone Number' />
                    </div>
                </div>

                <div className='checkoutsection'>
                    <p className='checkoutsectiontitle'>Payment Method</p>
                    <div
                        className={`paymentrow ${paymentMethod === 'cash' ? 'paymentselected' : ''}`}
                        onClick={() => setPaymentMethod('cash')}
                    >
                        <img src={cash} alt="cash" className='paymenticon' />
                        <div className='paymentinfo'>
                            <p className='paymenttitle'>Cash on Delivery</p>
                            <p className='paymentdes'>Pay when you receive</p>
                        </div>
                    </div>
                    <div
                        className={`paymentrow ${paymentMethod === 'card' ? 'paymentselected' : ''}`}
                        onClick={() => setPaymentMethod('card')}
                    >
                        <img src={card} alt="card" className='paymenticon' />
                        <div className='paymentinfo'>
                            <p className='paymenttitle'>Credit / Debit Card</p>
                            <p className='paymentdes'>Secure online payment</p>
                        </div>
                    </div>
                </div>

                <div className='discountrow m30'>
                   <input
                    
                       type="text"
                         className='discountinput'
                        placeholder='Discount code'
                        
                     />
                     <button className='applybtn'>Apply</button>
                 </div>

                 <div className='summarybox'>
                     <div className='summaryrow'>
                         <p className='summarylabel'>Sub Total</p>
                        <p className='summaryvalue'>720 EGP</p>
                     </div>
                     <div className='divider'/>
                     <div className='summaryrow'>
                         <p className='summarylabel'>Delivery</p>
                         <p className='summaryvalue'>20 EGP</p>
                     </div>
                     <div className='divider'/>
                     <div className='summaryrow'>
                         <p className='summarylabelbold'>Total</p>
                         <p className='summaryvaluebold'>745 EGP</p>
                     </div>
                 </div>
                                   <Link to="/confirm" style={{ textDecoration: 'none' }}>

 <Button text="Place Order"/></Link>

             

                

            </div>
        </>
    );
}

export default Checkout;