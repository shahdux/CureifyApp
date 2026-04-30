import React, { useState, useEffect } from 'react';
import "./Checkout.css"
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import smalll from '../assets/smalllogo.svg';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import location from '../assets/location.svg';
import cash from '../assets/cash.svg';
import card from '../assets/credit.svg';
import edit from '../assets/edit.svg';
import a from '../assets/smallimg.svg';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Checkout = () => {
    const { isArabic } = useLang();
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <>
            <Navbar />
            <motion.div 
                className='maindiv opadding' 
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }} 
                animate={{ opacity: 1, x: 0 }}
            >
                <div className='arrowwtitle'>
                    <Link to="/bag" style={{ textDecoration: 'none' }}>
                        <img 
                            src={back} 
                            alt="back icon" 
                            style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} 
                        />
                    </Link>
                    <SectionTitle title={isArabic ? "إتمام الدفع" : "Checkout"} />
                </div>

                <div className='checkoutsection'>
                    <p className='checkoutsectiontitle'>{isArabic ? "ملخص الطلب" : "Order Summary"}</p>
                    <div className='orderrow'>
                        <img src={a} alt="product" className='orderimg' />
                        <div className='orderinfo'>
                            <p className='ordername'>Avene Cleanance 30Ml</p>
                            <p className='orderpharmacy'>{isArabic ? "صيدلية العزبي" : "El Ezaby Pharmacy"}</p>
                            <p className='orderqty'>{isArabic ? "الكمية: ١" : "Qty: 1"}</p>
                        </div>
                        <p className='orderprice'>{isArabic ? "٧٤٥ ج.م" : "745 EGP"}</p>
                    </div>
                </div>

                <p className='checkoutlabel'>{isArabic ? "التوصيل إلى" : "Delivery to"}</p>
                <div className='checkoutsection'>
                    <div className='deliveryrow'>
                        <img src={location} alt="location" className='rowicon' />
                        <div className='deliveryinfo'>
                            <p className='deliverytitle'>{isArabic ? "عنوان التوصيل" : "Delivery Address"}</p>
                            <p className='deliveryaddress'>
                                {isArabic ? "١٢٣ شارع التسعين، التجمع الخامس، القاهرة" : "123 Main Street, Apt 4B, Cairo, Egypt"}
                            </p>
                        </div>
                        <img src={edit} alt="edit" className='editicon' />
                    </div>
                </div>

                <div className='checkoutsection'>
                    <p className='checkoutsectiontitle'>{isArabic ? "معلومات التواصل" : "Contact Information"}</p>
                    <div className='phoneinputrow'>
                        <input 
                            type="tel" 
                            className='phoneinput' 
                            placeholder={isArabic ? "رقم الهاتف" : "Phone Number"} 
                        />
                    </div>
                </div>

                <div className='checkoutsection'>
                    <p className='checkoutsectiontitle'>{isArabic ? "طريقة الدفع" : "Payment Method"}</p>
                    <div
                        className={`paymentrow ${paymentMethod === 'cash' ? 'paymentselected' : ''}`}
                        onClick={() => setPaymentMethod('cash')}
                    >
                        <img src={cash} alt="cash" className='paymenticon' />
                        <div className='paymentinfo'>
                            <p className='paymenttitle'>{isArabic ? "دفع عند الاستلام" : "Cash on Delivery"}</p>
                            <p className='paymentdes'>{isArabic ? "ادفع عند استلام طلبك" : "Pay when you receive"}</p>
                        </div>
                    </div>
                    <div
                        className={`paymentrow ${paymentMethod === 'card' ? 'paymentselected' : ''}`}
                        onClick={() => setPaymentMethod('card')}
                    >
                        <img src={card} alt="card" className='paymenticon' />
                        <div className='paymentinfo'>
                            <p className='paymenttitle'>{isArabic ? "بطاقة ائتمان / خصم" : "Credit / Debit Card"}</p>
                            <p className='paymentdes'>{isArabic ? "دفع آمن عبر الإنترنت" : "Secure online payment"}</p>
                        </div>
                    </div>
                </div>

                <div className='discountrow m30'>
                    <input
                        type="text"
                        className='discountinput'
                        placeholder={isArabic ? "كود الخصم" : "Discount code"}
                    />
                    <button className='applybtn'>{isArabic ? "تطبيق" : "Apply"}</button>
                </div>

                <div className='summarybox'>
                    <div className='summaryrow'>
                        <p className='summarylabel'>{isArabic ? "الإجمالي الفرعي" : "Sub Total"}</p>
                        <p className='summaryvalue'>{isArabic ? "٧٢٠ ج.م" : "720 EGP"}</p>
                    </div>
                    <div className='divider' />
                    <div className='summaryrow'>
                        <p className='summarylabel'>{isArabic ? "التوصيل" : "Delivery"}</p>
                        <p className='summaryvalue'>{isArabic ? "٢٠ ج.م" : "20 EGP"}</p>
                    </div>
                    <div className='divider' />
                    <div className='summaryrow'>
                        <p className='summarylabelbold'>{isArabic ? "الإجمالي" : "Total"}</p>
                        <p className='summaryvaluebold'>{isArabic ? "٧٤٥ ج.م" : "745 EGP"}</p>
                    </div>
                </div>

                <Link to="/confirm" style={{ textDecoration: 'none' }}>
                    <Button text={isArabic ? "تأكيد الطلب" : "Place Order"} />
                </Link>
            </motion.div>
        </>
    );
}

export default Checkout;