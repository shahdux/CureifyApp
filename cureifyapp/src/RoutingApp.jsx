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
import MedDetails from './pages/MedDetails';
import Progress1 from './pages/Progress1';
import Progress2 from './pages/Progress2';
import Progress3 from './pages/Progress3';
import Profile from './pages/Profile';
import PersonalInfo from './pages/PersonalInfo';
import BloodTestHistory from './pages/BloodTestHistory';
import PrescriptionHistory from './pages/PrescriptionHistory';
import NotificationSettings from './pages/NotificationSettings';
import Notifications from './pages/Notifcations';
import Rewards from './pages/Rewards';
import RewardDetails from './pages/RewardDetails';
import Redeemed from './pages/Redeemed';
import TestResults from './pages/TestResults';
import Alternative from './pages/Alternative';
import ExtractedPrescription from './pages/ExtractedPrescription';





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
<Route path='/med-details' element={<MedDetails />} />





<Route path='/extracted' element={<Extracted />} />
<Route path='/products-found' element={<ProductsExt />} />


<Route path='/add-reminder' element={<Reminder />} />


<Route path='/progress' element={<Progress1 />} />

<Route path='/progress-upcoming' element={<Progress2 />} />
            <Route path='/progress-missed' element={<Progress3 />} />
            <Route path='/profile' element={<Profile />} />

            <Route path='/rewards' element={<Rewards />} />
<Route path='/personal-info' element={<PersonalInfo />} />
<Route path='/notification-settings' element={<NotificationSettings />} />


 <Route path='/blood-test-history' element={<BloodTestHistory />} />
<Route path='/prescription-history' element={<PrescriptionHistory />} />

<Route path='/notifications' element={<Notifications />} />
<Route path='/reward-details' element={<RewardDetails />} />

<Route path='/redeemed' element={<Redeemed />} />
<Route path='/test-results' element={<TestResults />} />
<Route path='/alternative' element={<Alternative />} />
<Route path='/extracted-prescription' element={<ExtractedPrescription />} />



   




        </Routes>
        
    
        </BrowserRouter>
     );
}
 
export default RoutingApp;