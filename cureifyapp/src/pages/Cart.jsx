// import React, { Component } from 'react';
// import "./Cart.css"
// import Navbar from '../components/Navbar';

// import back from '../assets/back.svg';
// import SectionTitle from '../components/SectionTitle';
// import CartCard from '../components/CartCard';


// const  Cart = () => {
//     return (<>
//       <Navbar/>
//     <div className='maindiv opadding gap26'>
//          <div className='arrowwtitle'>
//             <img src={back} alt="back icon" />
//             <SectionTitle title="Cart" />
//          </div>
// <CartCard
//   image={aveneImg}
//   name="Avene Cleanance 30Ml"
//   pharmacy="El Ezaby Pharmacy"
//   price={745}
// />






//     </div>
    
    
    
//     </>  );
// }
 
// export default Cart;
import React, { useEffect, useState } from 'react';
import "./Cart.css"
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import SectionTitle from '../components/SectionTitle';
import CartCard from '../components/CartCard';
import { supabase } from '../supabase';
import Button from '../components/Button';

const Cart = () => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState("");
    

    useEffect(() => {
        async function fetchOrders() {
            const res = await supabase.from("Orders").select("*").eq("id", 7);;
            setOrders(res.data);
            setLoading(false);
        }
        fetchOrders();
    }, []);

    if (loading) return <p>Loading...</p>;
     

    return (
        <>
            <Navbar />
            <div className='maindiv opadding gap26'>
                <div className='arrowwtitle'>
                    <img src={back} alt="back icon" />
                    <SectionTitle title="Cart" />
                </div>

                {orders.map((order) => {
                    return <CartCard
                        image={order.image}
                        name={order.items}
                        pharmacy={order.pharmacy}
                        price={order.price}
                    />
                })}

 <div className='discountrow'>
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

<Button text="Proceed to Checkout"/>
            




            </div>
        </>
    );
}

export default Cart;