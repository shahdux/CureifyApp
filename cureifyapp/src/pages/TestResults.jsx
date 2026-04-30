import React, { useState, useEffect } from 'react';
import "./TestResults.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import smalll from '../assets/smalllogo.svg';
import { Link } from 'react-router-dom';
import improvedicon from '../assets/improvedicon.svg';
import attentionicon from '../assets/attentionicon.svg';
import problemsicon from '../assets/problemsicon.svg';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const TestResults = () => {
    const { isArabic } = useLang();
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setPageLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

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
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div className='arrowwtitle gap0'>
                    <Link to="/health" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} />
                    </Link>
                    <SectionTitle 
                        title={isArabic ? "مقارنة تحاليل الدم" : "Blood Test Comparisons"} 
                        margin="0 auto" 
                        align="center"
                    />
                </div>

                <div className='healthsummarycard'>
                    <p className='healthsummarytitle'>{isArabic ? "ملخص الحالة الصحية" : "Health Summary"}</p>
                    <div className='healthsummaryrow'>
                        <div className='healthsummaryitem'>
                            <img src={improvedicon} alt="improved" className='healthsummaryicon'/>
                            <p className='healthsummarynum'>2</p>
                            <p className='healthsummarylabel'>{isArabic ? "تحسن" : "Improved"}</p>
                        </div>
                        <div className='healthsummaryitem'>
                            <img src={attentionicon} alt="attention" className='healthsummaryicon'/>
                            <p className='healthsummarynum'>1</p>
                            <p className='healthsummarylabel'>{isArabic ? "يحتاج انتباه" : "Needs Attention"}</p>
                        </div>
                        <div className='healthsummaryitem'>
                            <img src={problemsicon} alt="problems" className='healthsummaryicon'/>
                            <p className='healthsummarynum'>0</p>
                            <p className='healthsummarylabel'>{isArabic ? "مشاكل" : "Problems"}</p>
                        </div>
                    </div>
                </div>

                <p className='aicomparisontitle'>{isArabic ? "نتائج مقارنة الذكاء الاصطناعي" : "AI Comparison Results"}</p>

                <motion.div 
                    className='airesultgroup'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <p className='airesultgrouptitle'>{isArabic ? "تحليل الدهون" : "Lipid Panel"}</p>

                    <div className='airesultrow improved'>
                        <div className='airesultrowtop'>
                            <p className='airesultrowname'>{isArabic ? "الكوليسترول الكلي" : "Total Cholesterol"}</p>
                            <div className='airesultrowright'>
                                <p className='airesultrowvalue improved'>100</p>
                                <p className='airesultrowunit'>g/dL</p>
                            </div>
                        </div>
                        <p className='airesultrowstatus improved'>{isArabic ? "تحسن ↑" : "Improved ↑"}</p>
                        <p className='airesultrowprev'>{isArabic ? "السابق: 220 g/dL" : "Previous: 220 g/dL"}</p>
                        <p className='airesultrowdes'>
                            {isArabic 
                                ? "تحسن مستوى الكوليسترول لديك وأصبح الآن ضمن النطاق الطبيعي." 
                                : "Your cholesterol level has improved and is now within normal range."}
                        </p>
                    </div>

                    <div className='airesultrow attention'>
                        <div className='airesultrowtop'>
                            <p className='airesultrowname'>HDL</p>
                            <div className='airesultrowright'>
                                <p className='airesultrowvalue attention'>7.5</p>
                                <p className='airesultrowunit'>K/uL</p>
                            </div>
                        </div>
                        <p className='airesultrowstatus attention'>{isArabic ? "يحتاج انتباه" : "Needs Attention"}</p>
                        <p className='airesultrowprev'>{isArabic ? "السابق: 7.2 K/uL" : "Previous: 7.2 K/uL"}</p>
                        <p className='airesultrowdes'>
                            {isArabic 
                                ? "عدد كريات الدم البيضاء مستقر وضمن النطاق الطبيعي." 
                                : "WBC count is stable and within normal range, indicating a healthy immune system."}
                        </p>
                    </div>
                </motion.div>

                <div className='disclaimerbox'>
                    <p className='disclaimertext'>
                        {isArabic 
                            ? "⚠ هذا التحليل لأغراض معلوماتية فقط ولا يغني عن الاستشارة الطبية المهنية." 
                            : "⚠ This analysis is for informational purposes only and should not replace professional medical advice."}
                    </p>
                </div>
            </motion.div>
        </>
    );
}

export default TestResults;