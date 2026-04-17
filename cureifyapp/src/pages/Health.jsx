
import React, { Component, useState } from 'react';
import "./Health.css"
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import f1 from '../assets/ai.svg';
import Button from './../components/Button';
import Counter from '../components/Counter';
import Toggle from '../components/Toggle';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import TextButton from '../components/TextButton';
import calendar from '../assets/calendar.svg';


const Health = () => {
    return ( <>
    <Navbar/>
    <div className='maindiv opadding gap26'>
    <SectionTitle title="Blood Test Insights" />
    <FeatureCard image={f1} name="Blood Test Comparison" des="Compare your blood tests with AI-powered insights to track changes."/>
    <div className='forbloodtests2'>
    <div className='titlewbutton'>
        <p className='sectiontitle margintop0'>My Test Results</p>
        <TextButton text="Add" color="#00A4AA" weight="700" marginTop="0px" />
    </div>

    <div className='forbloodtests'>

    <div className='testcard'>
        <p className='testcardtitle'>Complete Blood Count (CBC)</p>
        <div className='testcarddate'>
            <img src={calendar} alt="date" className='calendaricon' />
            <p className='testcardDateText'>Feb 28, 2026</p>
        </div>
        <div className='testcardrows'>
            <div className='testrow normal'>
                <div className='testrowleft'>
                    <p className='testrowname'>Hemoglobin</p>
                    <p className='testrowstatus'>Normal range</p>
                </div>
                <div className='testrowright'>
                    <p className='testrowvalue normal'>14.2</p>
                    <p className='testrowunit'>g/dL</p>
                </div>
            </div>
            <div className='testrow normal'>
                <div className='testrowleft'>
                    <p className='testrowname'>WBC</p>
                    <p className='testrowstatus'>Normal range</p>
                </div>
                <div className='testrowright'>
                    <p className='testrowvalue normal'>7.5</p>
                    <p className='testrowunit'>K/uL</p>
                </div>
            </div>
            <div className='testrow normal'>
                <div className='testrowleft'>
                    <p className='testrowname'>Platelets</p>
                    <p className='testrowstatus'>Normal range</p>
                </div>
                <div className='testrowright'>
                    <p className='testrowvalue normal'>250</p>
                    <p className='testrowunit'>K/uL</p>
                </div>
            </div>
        </div>
    </div>

    <div className='testcard'>
        <p className='testcardtitle'>Lipid Panel</p>
        <div className='testcarddate'>
            <img src={calendar} alt="date" className='calendaricon' />
            <p className='testcardDateText'>Feb 15, 2026</p>
        </div>
        <div className='testcardrows'>
            <div className='testrow elevated'>
                <div className='testrowleft'>
                    <p className='testrowname'>Total Cholesterol</p>
                    <p className='testrowstatus'>Slightly elevated</p>
                </div>
                <div className='testrowright'>
                    <p className='testrowvalue elevated'>220</p>
                    <p className='testrowunit'>mg/dL</p>
                </div>
            </div>
            <div className='testrow elevated'>
                <div className='testrowleft'>
                    <p className='testrowname'>HDL</p>
                    <p className='testrowstatus'>Slightly elevated</p>
                </div>
                <div className='testrowright'>
                    <p className='testrowvalue elevated'>45</p>
                    <p className='testrowunit'>mg/dL</p>
                </div>
            </div>
            <div className='testrow elevated'>
                <div className='testrowleft'>
                    <p className='testrowname'>LDL</p>
                    <p className='testrowstatus'>Slightly elevated</p>
                </div>
                <div className='testrowright'>
                    <p className='testrowvalue elevated'>140</p>
                    <p className='testrowunit'>mg/dL</p>
                </div>
            </div>
            <div className='testrow normal'>
                <div className='testrowleft'>
                    <p className='testrowname'>Triglycerides</p>
                    <p className='testrowstatus'>Normal range</p>
                </div>
                <div className='testrowright'>
                    <p className='testrowvalue normal'>175</p>
                    <p className='testrowunit'>mg/dL</p>
                </div>
            </div>
        </div>
    </div>
    </div>

    </div>

    </div>
    
    </> );
}
 
export default Health;
