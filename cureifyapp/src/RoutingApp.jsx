import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Onboarding1 from './pages/Onboarding1';
import Onboarding2 from './pages/Onboarding2';
import Onboarding3 from './pages/Onboarding3';
import Onboarding4 from './pages/Onboarding4';
import Onboarding5 from './pages/Onboarding5';
import Onboarding6 from './pages/Onboarding6';
import Splash from './pages/Splash';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Search from './pages/Search';
import Reminder from './pages/Reminder';
import Cart from './pages/Cart';
import Health from './pages/Health';
import Extracted from './pages/Extracted';
import ProductsExt from './pages/ProductsExt';
import Pharmacies from './pages/Pharmacies';
import Checkout from './pages/Checkout';
import Confirm from './pages/Confirm';





const RoutingApp = () => {
    return ( 
        <BrowserRouter>
        <Routes>
<Route path='/' element={<Splash />} />
  <Route path='/onboarding-1' element={<Onboarding1 />} />
<Route path='/onboarding-2' element={<Onboarding2 />} />
<Route path='/onboarding-3' element={<Onboarding3 />} />
<Route path='/onboarding-4' element={<Onboarding4 />} />
<Route path='/onboarding-5' element={<Onboarding5 />} />
<Route path='/onboarding-6' element={<Onboarding6 />} />
<Route path='/login' element={<Login />} />
<Route path='/signup' element={<SignUp />} />
<Route path='/home' element={<Home />} />
<Route path='/search' element={<Search />} />
<Route path='/bag' element={<Cart />} />
<Route path='/health' element={<Health />} />
<Route path='/pharmacies' element={<Pharmacies />} />
<Route path='/checkout' element={<Checkout />} />
<Route path='/confirm' element={<Confirm />} />




<Route path='/extracted' element={<Extracted />} />
<Route path='/products-found' element={<ProductsExt />} />


<Route path='/add-reminder' element={<Reminder />} />










   




        </Routes>
        
    
        </BrowserRouter>
     );
}
 
export default RoutingApp;