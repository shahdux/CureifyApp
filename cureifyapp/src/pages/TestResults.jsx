import React from 'react';
import "./TestResults.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import { Link } from 'react-router-dom';
import improvedicon from '../assets/improvedicon.svg';
import attentionicon from '../assets/attentionicon.svg';
import problemsicon from '../assets/problemsicon.svg';

const TestResults = () => {
    return (
        <>
            <Navbar />
            <div className='maindiv opadding gap26'>
                <div className='arrowwtitle gap0'>
                    <Link to="/health" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" />
                    </Link>
                    <SectionTitle title="Blood Test Comparisons" margin="0 auto" align="center"/>
                </div>

                <div className='healthsummarycard'>
                    <p className='healthsummarytitle'>Health Summary</p>
                    <div className='healthsummaryrow'>
                        <div className='healthsummaryitem'>
                            <img src={improvedicon} alt="improved" className='healthsummaryicon'/>
                            <p className='healthsummarynum'>2</p>
                            <p className='healthsummarylabel'>Improved</p>
                        </div>
                        <div className='healthsummaryitem'>
                            <img src={attentionicon} alt="attention" className='healthsummaryicon'/>
                            <p className='healthsummarynum'>1</p>
                            <p className='healthsummarylabel'>Needs Attention</p>
                        </div>
                        <div className='healthsummaryitem'>
                            <img src={problemsicon} alt="problems" className='healthsummaryicon'/>
                            <p className='healthsummarynum'>0</p>
                            <p className='healthsummarylabel'>Problems</p>
                        </div>
                    </div>
                </div>

                <p className='aicomparisontitle'>AI Comparison Results</p>

                <div className='airesultgroup'>
                    <p className='airesultgrouptitle'>Lipid Panel</p>

                    <div className='airesultrow improved'>
                        <div className='airesultrowtop'>
                            <p className='airesultrowname'>Total Cholesterol</p>
                            <div className='airesultrowright'>
                                <p className='airesultrowvalue improved'>100</p>
                                <p className='airesultrowunit'>g/dL</p>
                            </div>
                        </div>
                        <p className='airesultrowstatus improved'>Improved ↑</p>
                        <p className='airesultrowprev'>Previous: 220 g/dL</p>
                        <p className='airesultrowdes'>Your hemoglobin level has improved and is now within normal range. This indicates better oxygen-carrying capacity.</p>
                    </div>

                    <div className='airesultrow attention'>
                        <div className='airesultrowtop'>
                            <p className='airesultrowname'>HDL</p>
                            <div className='airesultrowright'>
                                <p className='airesultrowvalue attention'>7.5</p>
                                <p className='airesultrowunit'>K/uL</p>
                            </div>
                        </div>
                        <p className='airesultrowstatus attention'>Needs Attention</p>
                        <p className='airesultrowprev'>Previous: 7.2 K/uL</p>
                        <p className='airesultrowdes'>WBC count is stable and within normal range, indicating a healthy immune system.</p>
                    </div>
                </div>

                <div className='disclaimerbox'>
                    <p className='disclaimertext'>⚠ This analysis is for informational purposes only and should not replace professional medical advice. Always consult your doctor about your results.</p>
                </div>

            </div>
        </>
    );
}

export default TestResults;