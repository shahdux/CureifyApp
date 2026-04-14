import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Onboarding1 from './pages/Onboarding1';
import Onboarding2 from './pages/Onboarding2';
import Onboarding3 from './pages/Onboarding3';
import Splash from './pages/Splash';



const RoutingApp = () => {
    return ( 
        <BrowserRouter>
        <Routes>
<Route path='/' element={<Splash />} />
  <Route path='/onboarding-1' element={<Onboarding1 />} />
<Route path='/onboarding-2' element={<Onboarding2 />} />
<Route path='/onboarding-3' element={<Onboarding3 />} />



   




        </Routes>
        
    
        </BrowserRouter>
     );
}
 
export default RoutingApp;