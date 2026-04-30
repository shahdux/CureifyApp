import React from 'react';
import "./Pharmacies.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import { Link } from 'react-router-dom';

const Language = () => {
  return (
    <>
      <Navbar />
      <div className='searchdiv opadding height800px'>
        <div className='arrowwtitle gap0'>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <img src={back} alt="back icon" />
          </Link>
          <SectionTitle title="Language" margin="0 auto" align="center" />
        </div>

        <div className='forpharms m30'>
          <p className='alternativesectionlabel'>Available Languages</p>

          <div className='alternativepharmcard' style={{ gap: 0, padding: 0, overflow: 'hidden' }}>

            <div className='languageitem' >
              <div className='languageitemtext'>
                <span className='languageitemname'>English</span>
                <span className='languageitemnative'>English</span>
              </div>
              <div className='languagecheckicon'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#00A4AA" />
                  <path d="M6 10.5L8.5 13L14 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className='languageitem' >
              <div className='languageitemtext'>
                <span className='languageitemname'>Arabic</span>
                <span className='languageitemnative'>العربية</span>
              </div>
            </div>

            <div className='languageitem' >
              <div className='languageitemtext'>
                <span className='languageitemname'>French</span>
                <span className='languageitemnative'>Français</span>
              </div>
            </div>

            <div className='languageitem'>
              <div className='languageitemtext'>
                <span className='languageitemname'>Spanish</span>
                <span className='languageitemnative'>Español</span>
              </div>
            </div>

            <div className='languageitem'>
              <div className='languageitemtext'>
                <span className='languageitemname'>German</span>
                <span className='languageitemnative'>Deutsch</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Language;