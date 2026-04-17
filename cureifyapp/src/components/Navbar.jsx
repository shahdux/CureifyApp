
import React from 'react';
import "./Navbar.css";
import home from '../assets/home.svg';
import search from '../assets/search.svg';
import add from '../assets/Icon.svg';
import bag from '../assets/cart.svg';
import health from '../assets/health.svg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className='nav-cont'>
      <div className='nav'>

        <Link to="/home">
          <img src={home} alt="home icon" className={pathname === "/home" ? "nav-icon active" : "nav-icon"} />
        </Link>

        <Link to="/search">
          <img src={search} alt="search icon" className={pathname === "/search" ? "nav-icon active" : "nav-icon"} />
        </Link>

        <div className='circle'>
          <Link to="/add-reminder">
            <img src={add} alt="add icon"/>
          </Link>
        </div>

        <Link to="/bag">
          <img src={bag} alt="bag icon" className={pathname === "/bag" ? "nav-icon active" : "nav-icon"} />
        </Link>

        <Link to="/health">
          <img src={health} alt="health icon" className={pathname === "/health" ? "nav-icon active" : "nav-icon"} />
        </Link>

      </div>
    </div>
  );
}

export default Navbar;