import React, { Component } from 'react';
import "./Search.css"
import Navbar from '../components/Navbar';
import search from '../assets/search.svg';
import rx from '../assets/rx.svg';
import pic from '../assets/pic.svg';


const  Search = () => {
    return (<>
            <div className='searchdiv'>
<div className='titlewsub'>
    <p className='sectiontitle margin0 mar12'>Find Medicines Nearby</p>
        <p className='subtitles'>Check which pharmacies have your medication in stock.</p>

</div>

<input type="text" className='searchinput' placeholder='Search'/>
<div className='for2buttons2'>
      <div className='reorder width177 h48'>
                            <img src={rx} alt="re-order icon" />
                            <p className='rtext f14px'>Upload Prescription</p>
                        </div>
                          <div className='reorder width177 h48'>
                                                <img src={pic} alt="re-order icon" />
                                                <p className='rtext f14px'>Uplaod Product Image</p>
                                            </div>
</div>
    <Navbar/>
</div>
    
    
    
    
    </>  );
}
 
export default  Search;