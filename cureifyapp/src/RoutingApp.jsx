import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Onboarding1 from './pages/Onboarding1';

const RoutingApp = () => {
    return ( 
        <BrowserRouter>
        <Routes>
  <Route path='/onboarding-1' element={<Onboarding1 />} />
   




        </Routes>
        
    
        </BrowserRouter>
     );
}
 
export default RoutingApp;