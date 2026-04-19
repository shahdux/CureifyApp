import React, { useState } from 'react';
import "./Health.css"
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import f1 from '../assets/ai.svg';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import TextButton from '../components/TextButton';
import calendar from '../assets/calendar.svg';

const Health = () => {
    const [showSheet, setShowSheet] = useState(false);
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleConfirm = () => {
        if (!file1 || !file2) return;
        setShowSheet(false);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/test-results');
        }, 3000);
    };

    return (
        <>
            <Navbar/>
            <div className='maindiv opadding gap26'>
                <SectionTitle title="Blood Test Insights" />
                <FeatureCard image={f1} name="Blood Test Comparison" des="Compare your blood tests with AI-powered insights to track changes." onClick={() => setShowSheet(true)}/>
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

            {showSheet && (
                <div className='sheetoverlay sheetoverlay2' onClick={() => setShowSheet(false)}>
                    <div className='comparisonsheet' onClick={(e) => e.stopPropagation()}>
                        <p className='comparisonSheettitle'>Compare Blood Tests</p>
                        <p className='comparisonsheetdes'>Upload two blood test results to compare them with AI</p>

                        <div className='uploadbox' onClick={() => document.getElementById('file1').click()}>
                            <input type="file" id="file1" accept=".pdf,image/*" className='hiddeninput' onChange={(e) => setFile1(e.target.files[0])}/>
                            <p className='uploadboxtitle'>First Test</p>
                            <p className='uploadboxdes'>{file1 ? file1.name : 'Tap to upload PDF or image'}</p>
                        </div>

                        <div className='uploadbox' onClick={() => document.getElementById('file2').click()}>
                            <input type="file" id="file2" accept=".pdf,image/*" className='hiddeninput' onChange={(e) => setFile2(e.target.files[0])}/>
                            <p className='uploadboxtitle'>Second Test</p>
                            <p className='uploadboxdes'>{file2 ? file2.name : 'Tap to upload PDF or image'}</p>
                        </div>

                        <button
                            className={`comparisonconfirmbtn ${file1 && file2 ? 'active' : ''}`}
                            onClick={handleConfirm}
                            disabled={!file1 || !file2}
                        >
                            Analyze & Compare
                        </button>

                        <button className='comparisonCancelbtn' onClick={() => setShowSheet(false)}>Cancel</button>
                    </div>
                </div>
            )}

            {loading && (
                <div className='loadingoverlay'>
                    <div className='loadingcard'>
                        <div className='loadingspinner'/>
                        <p className='loadingtitle'>Analyzing your tests...</p>
                        <p className='loadingdes'>Our AI is comparing your blood test results</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Health;