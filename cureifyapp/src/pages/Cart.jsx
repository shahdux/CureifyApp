import React, { useEffect, useState } from 'react';
import "./Cart.css";
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import smalll from '../assets/smalllogo.svg';
import SectionTitle from '../components/SectionTitle';
import CartCard from '../components/CartCard';
import { supabase } from '../supabase';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Cart = () => {
    const { isArabic } = useLang();
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            const res = await supabase.from("Orders").select("*").eq("id", 7);
            const initialOrders = (res.data || []).map(item => ({
                ...item,
                quantity: 1
            }));
            setOrders(initialOrders);
            setLoading(false);
        }
        fetchOrders();
    }, []);

    // Function to handle quantity changes (+ and -)
    const updateQuantity = (id, delta) => {
        setOrders(prevOrders =>
            prevOrders.map(item =>
                item.id === id 
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
                    : item
            )
        );
    };

    // Function to remove an item from the list
    const deleteItem = (id) => {
        setOrders(prevOrders => prevOrders.filter(item => item.id !== id));
    };

    // Dynamic Calculations
    const subTotal = orders.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const delivery = orders.length > 0 ? 20 : 0;
    const total = subTotal + delivery;

    if (loading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <>
            <Navbar />
            <motion.div 
                className='maindiv opadding gap26 pr'
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className='arrowwtitle'>
                    <Link to="/pharmacies" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back" style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} />
                    </Link>
                    <SectionTitle title={isArabic ? "السلة" : "Cart"} />
                </div>

                {orders.map((order) => (
                    <motion.div key={order.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <CartCard
                            image={order.image}
                            name={order.items}
                            pharmacy={order.pharmacy}
                            price={order.price}
                            quantity={order.quantity}
                            onIncrease={() => updateQuantity(order.id, 1)}
                            onDecrease={() => updateQuantity(order.id, -1)}
                            onDelete={() => deleteItem(order.id)}
                        />
                    </motion.div>
                ))}

                <div className='discountrow'>
                    <input type="text" className='discountinput' placeholder={isArabic ? "كود الخصم" : "Discount code"} />
                    <button className='applybtn'>{isArabic ? "تطبيق" : "Apply"}</button>
                </div>

                <div className='summarybox'>
                    <div className='summaryrow'>
                        <p className='summarylabel'>{isArabic ? "المجموع الفرعي" : "Sub Total"}</p>
                        <p className='summaryvalue'>{subTotal} EGP</p>
                    </div>
                    <div className='divider'/>
                    <div className='summaryrow'>
                        <p className='summarylabel'>{isArabic ? "التوصيل" : "Delivery"}</p>
                        <p className='summaryvalue'>{delivery} EGP</p>
                    </div>
                    <div className='divider'/>
                    <div className='summaryrow'>
                        <p className='summarylabelbold'>{isArabic ? "الإجمالي" : "Total"}</p>
                        <p className='summaryvaluebold'>{total} EGP</p>
                    </div>
                </div>

                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                    <Button text={isArabic ? "الدفع" : "Proceed to Checkout"}/>
                </Link>
            </motion.div>
        </>
    );
}

export default Cart;