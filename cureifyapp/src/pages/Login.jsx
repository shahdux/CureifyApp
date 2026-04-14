import React, { Component } from 'react';
import "./Login.css";
import Button from '../components/Button';
import icon from '../assets/logoicon.svg';
import apple from '../assets/apple.svg';
import google from '../assets/google.svg';

import AppButton from '../components/AppButton';
import TextButton from '../components/TextButton';

const Login = () => {
    return ( <>
    <div className='loginbg'>

<div className='forloginpg'>
    <img src={icon} alt="logo icon" className='iconc'/>
    <p className='logintext'>Login to your account</p>
        <p className='logindes'>Log in with one of the following</p>

</div>
<div className='logincont'>
    <div className='for2buttons'>
        <AppButton image={apple} imgalt="apple icon" apptext="Login with Apple" />
                <AppButton image={google} imgalt="google icon" apptext="Login with Google" />


    </div>
    <div className='forinputswtexts'>
        <div className='for2inputs'>
            <div className='titlewinput'>
                <p className='inputtile'>Email</p>
                <input type="email" className='inputc'/>
            </div>
            <div className='titlewinput'>
                <p className='inputtile '>Password</p>
                <input type="password" className='inputc' />
            </div>
        </div>
        <div className='textbuttons2'>
            <div className='forcheckbox'>
            <div className='chachbox'>
            </div>
                <p className='checktext'>Remember me</p>

            </div>
            <TextButton text="Forget Password?" color="#00A4AA"/>

        </div>
        <Button text="Login" width="335px"/>
    </div>
                    <p className='logindes greytext'>Don’t have an account? <span className='greentext'>Sign Up</span></p>

</div>

    </div>
    
    
    
    
    
    
    
    
    
    </> );
}
 
export default Login;