import React, { useState, useRef, useEffect } from 'react';
import "./Health.css"
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import f1 from '../assets/ai.svg';
import Navbar from '../components/Navbar';
import smalll from '../assets/smalllogo.svg';
import { useNavigate } from 'react-router-dom';
import TextButton from '../components/TextButton';
import calendar from '../assets/calendar.svg';
import { useLang } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Health = () => {
    const { isArabic } = useLang();
    const [showSheet, setShowSheet] = useState(false);
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);
    const navigate = useNavigate();
    const addFileRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setPageLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const handleConfirm = () => {
        if (!file1 || !file2) return;
        setShowSheet(false);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/test-results');
        }, 3000);
    };

    if (pageLoading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <>
            <Navbar />
            <motion.div 
                className='maindiv opadding gap26'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <SectionTitle title={isArabic ? "نتائج تحاليل الدم" : "Blood Test Insights"} />
                
                <FeatureCard 
                    image={f1} 
                    name={isArabic ? "مقارنة تحاليل الدم" : "Blood Test Comparison"} 
                    des={isArabic ? "قارن نتائج تحاليلك باستخدام الذكاء الاصطناعي." : "Compare your blood tests with AI-powered insights to track changes."} 
                    onClick={() => setShowSheet(true)}
                />

                <div className='forbloodtests2'>
                    <div className='titlewbutton'>
                        <p className='sectiontitle margintop0'>{isArabic ? "نتائجي" : "My Test Results"}</p>
                        <input
                            type="file"
                            accept=".pdf,image/*"
                            className='hiddeninput'
                            ref={addFileRef}
                            onChange={(e) => console.log(e.target.files[0])}
                        />
                        <TextButton text={isArabic ? "إضافة" : "Add"} color="#00A4AA" weight="700" marginTop="0px" onClick={() => addFileRef.current.click()}/>
                    </div>

                    <div className='forbloodtests'>
                        <motion.div className='testcard' whileHover={{ scale: 1.01 }}>
                            <p className='testcardtitle'>{isArabic ? "صورة دم كاملة (CBC)" : "Complete Blood Count (CBC)"}</p>
                            <div className='testcarddate'>
                                <img src={calendar} alt="date" className='calendaricon' />
                                <p className='testcardDateText'>Feb 28, 2026</p>
                            </div>
                            <div className='testcardrows'>
                                <div className='testrow normal'>
                                    <div className='testrowleft'>
                                        <p className='testrowname'>{isArabic ? "الهيموجلوبين" : "Hemoglobin"}</p>
                                        <p className='testrowstatus'>{isArabic ? "معدل طبيعي" : "Normal range"}</p>
                                    </div>
                                    <div className='testrowright'>
                                        <p className='testrowvalue normal'>14.2</p>
                                        <p className='testrowunit'>g/dL</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className='testcard' whileHover={{ scale: 1.01 }}>
                            <p className='testcardtitle'>{isArabic ? "تحليل الدهون" : "Lipid Panel"}</p>
                            <div className='testcarddate'>
                                <img src={calendar} alt="date" className='calendaricon' />
                                <p className='testcardDateText'>Feb 15, 2026</p>
                            </div>
                            <div className='testcardrows'>
                                <div className='testrow elevated'>
                                    <div className='testrowleft'>
                                        <p className='testrowname'>{isArabic ? "الكوليسترول الكلي" : "Total Cholesterol"}</p>
                                        <p className='testrowstatus'>{isArabic ? "مرتفع قليلاً" : "Slightly elevated"}</p>
                                    </div>
                                    <div className='testrowright'>
                                        <p className='testrowvalue elevated'>220</p>
                                        <p className='testrowunit'>mg/dL</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {showSheet && (
                    <motion.div 
                        className='sheetoverlay sheetoverlay2' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowSheet(false)}
                    >
                        <motion.div 
                            className='comparisonsheet' 
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <p className='comparisonSheettitle'>{isArabic ? "مقارنة التحاليل" : "Compare Blood Tests"}</p>
                            <p className='comparisonsheetdes'>{isArabic ? "ارفع نتيجتين للمقارنة بينهما" : "Upload two blood test results to compare them with AI"}</p>

                            <div className='uploadbox' onClick={() => document.getElementById('file1').click()}>
                                <input type="file" id="file1" accept=".pdf,image/*" className='hiddeninput' onChange={(e) => setFile1(e.target.files[0])}/>
                                <p className='uploadboxtitle'>{isArabic ? "الاختبار الأول" : "First Test"}</p>
                                <p className='uploadboxdes'>{file1 ? file1.name : (isArabic ? 'اضغط للرفع' : 'Tap to upload')}</p>
                            </div>

                            <div className='uploadbox' onClick={() => document.getElementById('file2').click()}>
                                <input type="file" id="file2" accept=".pdf,image/*" className='hiddeninput' onChange={(e) => setFile2(e.target.files[0])}/>
                                <p className='uploadboxtitle'>{isArabic ? "الاختبار الثاني" : "Second Test"}</p>
                                <p className='uploadboxdes'>{file2 ? file2.name : (isArabic ? 'اضغط للرفع' : 'Tap to upload')}</p>
                            </div>

                            <button
                                className={`comparisonconfirmbtn ${file1 && file2 ? 'active' : ''}`}
                                onClick={handleConfirm}
                                disabled={!file1 || !file2}
                            >
                                {isArabic ? "تحليل ومقارنة" : "Analyze & Compare"}
                            </button>
                            <button className='comparisonCancelbtn' onClick={() => setShowSheet(false)}>{isArabic ? "إلغاء" : "Cancel"}</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {loading && (
                <div className='loadingoverlay'>
                    <div className='loadingcard'>
                        <div className='loadingspinner'/>
                        <p className='loadingtitle'>{isArabic ? "جاري التحليل..." : "Analyzing your tests..."}</p>
                        <p className='loadingdes'>{isArabic ? "يقوم الذكاء الاصطناعي بمقارنة النتائج" : "Our AI is comparing your blood test results"}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Health;