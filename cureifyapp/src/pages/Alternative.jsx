import React from 'react';
import "./Pharmacies.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import { Link } from 'react-router-dom';
import clock from '../assets/clock.svg';
import Button from '../components/Button';
// import Counter from '../components/Counter';

const Alternative = () => {
    return (
        <>
            <Navbar/>
            <div className='searchdiv '>
                <div className='arrowwtitle gap0'>
                    <Link to="/search" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" />
                    </Link>
                    <div className='titlewsubdes'>
                        <SectionTitle title="Available Pharmacies" margin="0 auto" />
                        <p className='subtitles tac2'>     Medicine: Flector 50</p>
                    </div>
                </div>

                <p className='alternativewarning'>The only pharmacy available with this medication is far from your location.</p>

                <div className='alternativepharmcard'>
                    <div className='pharmacycardtop'>
                        <p className='pharmacyname'>Green Pharmacy</p>
                        <p className='pharmacyprice'>1045 EGP</p>
                    </div>
                    <div className='pharmacystars'>
                        <span className='star'>★</span>
                        <span className='star'>★</span>
                        <span className='star'>★</span>
                        <span className='star'>★</span>
                        <span className='starempty'>★</span>
                        <span className='pharmacyratingnum'>4.2</span>
                    </div>
                    <div className='pharmacyarrival'>
                        <img src={clock} alt="clock" className='clockicon'/>
                        <p className='pharmacyarrivaltext'>Arrives in 2 hours</p>
                    </div>
                    {/* <div className='alternativecountrow'>
                        <Counter />
                    </div> */}
                    <Link to="/bag" style={{ textDecoration: 'none', width: '100%' }}>
                    <Button text="Add to cart" width="340px"/>
                    </Link>
                </div>

                <p className='alternativesectionlabel'>Suggested Alternative</p>

                <div className='alternativesuggcard'>
                    <p className='alternativesuggtitle'>CeraVe Resurfacing Serum</p>
                    <p className='alternativesuggdes'>Similiar active ingredients. Consult with a pharmacist first.</p>
                    <div className='alternativesuggbtns'>
                        <button className='alternativecallbtn w166'>Call pharmacy</button>
                        <Link to="/bag" style={{ textDecoration: 'none' }}>
                            <button className='alternativeaddcartbtn2 w166'>Add to cart</button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Alternative;