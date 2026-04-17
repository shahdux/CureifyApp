import React, { Component } from 'react';
import "./Reminder.css"
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import f1 from '../assets/ai.svg';
import Navbar from '../components/Navbar';
import Button from './../components/Button';


const Reminder = () => {
    return ( <>
    <div className='maindiv opadding'>
    <SectionTitle title="Add Reminder" />
    <FeatureCard image={f1} name="Scan Prescription" des="Auto-fill form using AI scanner"/>

<div className='logincont hauto'>
    <div className='for2buttons'>


    </div>
    <div className='forinputswtexts'>
  <div className='for2inputs'>

    <div className='titlewinput'>
      <p className='inputtile'> Medicine Name</p>
      <input type="text" className='inputc'/>
    </div>

    <div className='titlewinput'>
      <p className='inputtile '>Total Pills Available</p>
      <div className='inputwtext'>
        <input type="number" className='inputsmallerwidth' />
        <p className='pills'>Pills</p>
      </div>
    </div>

    <div className='titlewinputbutton'>
      <p className='inputtile'>Pills per intake</p>
      <div className='pillcounter'>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
    </div>

    <div className='titlewinput'>
      <p className='inputtile'> Time</p>
      <input type="time" className='inputc'/>
    </div>

    <div className='titlewinput'>
      <p className='inputtile'> Frequency</p>
      <input type="text" className='inputc'/>
    </div>

    <div className='titlewinput'>
      <p className='inputtile'> Duration</p>
      <input type="text" className='inputc'/>
    </div>

    <div className='titlewinput'>
      <p className='inputtile'> Start Date</p>
      <input type="date" className='inputc'/>
    </div>

    <div className='titlewinput'>
      <p className='inputtile'> Pill Color (Optional)</p>
      <select className='inputc'>
        <option>Select</option>
        <option>Red</option>
        <option>Blue</option>
        <option>White</option>
      </select>
    </div>

    <div className='titlewinput'>
      <p className='inputtile'> Notes (Optional)</p>
      <textarea className='inputc' placeholder='Take after food...'></textarea>
    </div>

    <div className='togglecard'>
      <div>
        <p className='toggle-title'>Voice Alert</p>
        <p className='toggle-desc'>
          Play a voice reminder when it's time to take your medication.
        </p>
      </div>
      <input type="checkbox" />
    </div>

    <div className='togglecard'>
      <div>
        <p className='toggle-title'>Reminder call</p>
        <p className='toggle-desc'>
          If you miss a push notification, we'll call you again within 5 minutes.
        </p>
      </div>
      <input type="checkbox" />
    </div>

    <div className='titlewinput'>
      <p className='inputtile'> Call Delay</p>
      <select className='inputc'>
        <option>5 minutes</option>
        <option>10 minutes</option>
      </select>
    </div>
<Button text="Add Reminder" width="322px"/>
    

  </div>
</div>
   

</div>
<Navbar />
    
    </div>
    
    </> );
}
 
export default Reminder;
