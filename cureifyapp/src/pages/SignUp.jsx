import React, { Component } from 'react';
import "./Login.css";
import Button from '../components/Button';
import icon from '../assets/logoicon.svg';
import apple from '../assets/apple.svg';
import google from '../assets/google.svg';

import AppButton from '../components/AppButton';
import TextButton from '../components/TextButton';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return ( <>
    <div className='loginbg'>

<div className='forloginpg'>
    <img src={icon} alt="logo icon" className='iconc'/>
    <p className='logintext'>Sign Up</p>
        <p className='logindes'>Sign Up with one of the following</p>

</div>
<div className='logincont longerw'>
    <div className='for2buttons'>
        <AppButton image={apple} imgalt="apple icon" apptext="Login with Apple" />
                <AppButton image={google} imgalt="google icon" apptext="Login with Google" />


    </div>
    <div className='forinputswtexts'>
        <div className='for2inputs'>
             <div className='titlewinput'>
                <p className='inputtile'>Name</p>
                <input type="email" className='inputc'/>
            </div>
            <div className='titlewinput'>
                <p className='inputtile'>Email</p>
                <input type="email" className='inputc'/>
            </div>
            <div className='titlewinput'>
                <p className='inputtile '>Password</p>
                <input type="password" className='inputc' />
            </div>
        </div>
        <div className='mrtop'></div>
                           <Link to="/login"  style={{ textDecoration: 'none' }}>

        <Button text="Sign Up" width="335px"/></Link>
    </div>
                    <Link to="/login"  style={{ textDecoration: 'none' }}>

                    <p className='logindes greytext'>Already have an account?<span className='greentext'> Log in</span></p>
</Link>
</div>

    </div>
    
    
    
    
    
    
    
    
    
    </> );
}
 
export default SignUp;