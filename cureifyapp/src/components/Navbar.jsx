import React, { Component } from 'react';
import "./Navbar.css";
import home from '../assets/home.svg';
import search from '../assets/search.svg';
import add from '../assets/Icon.svg';
import bag from '../assets/cart.svg';
import health from '../assets/health.svg';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( <>
    <div className='nav'>
<img src={home} alt="home icon" />
<Link to="/search">
<img src={search} alt="home icon" />
</Link>
<div className='circle'>
<img src={add} alt="home icon" />

</div>
<img src={bag} alt="home icon" />
<img src={health} alt="home icon" />

    </div>
    
    
    
    
    
    </>);
}
 
export default Navbar;