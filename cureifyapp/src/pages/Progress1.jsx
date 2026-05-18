import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./Progress1.css";
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import { Link } from 'react-router-dom';
import pil from '../assets/pillsg.svg';
import greypil from '../assets/bluepill.svg';
import bluepil from '../assets/greypill.svg';
import SectionTitle from '../components/SectionTitle';
import smalll from '../assets/smalllogo.svg';
import { useLang } from '../context/LanguageContext';

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };
const vp = { once: true, amount: 0.2 };

const Progress1 = () => {
    const { isArabic } = useLang();
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('All');

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    // 1. Centralized Data Log Array
    const medicationLogs = [
        // TODAY SECTION
        {
            id: 1,
            section: 'today',
            sectionTitleEn: "Today's Medication",
            sectionTitleAr: "أدوية اليوم",
            name: "Vibramycin 100mg",
            subEn: "09:00 AM · Take after food",
            subAr: "09:00 AM · بعد الأكل",
            status: "Upcoming",
            statusAr: "قادمة",
            iconBg: "teal-icon-bg",
            imgSrc: pil,
            filterClass: "white-pill-filter"
        },
        {
            id: 2,
            section: 'today',
            sectionTitleEn: "Today's Medication",
            sectionTitleAr: "أدوية اليوم",
            name: "Sebionex Trio",
            subEn: "02:00 PM",
            subAr: "02:00 PM",
            status: "Upcoming",
            statusAr: "قادمة",
            iconBg: "dark-icon-bg",
            imgSrc: greypil,
            filterClass: "white-pill-filter"
        },
        {
            id: 3,
            section: 'today',
            sectionTitleEn: "Today's Medication",
            sectionTitleAr: "أدوية اليوم",
            name: "Omega-3",
            subEn: "02:00 PM · 2 pills",
            subAr: "02:00 PM · حبتين",
            status: "Upcoming",
            statusAr: "قادمة",
            iconBg: "blue-icon-bg",
            imgSrc: bluepil,
            filterClass: "white-pill-filter"
        },
        {
            id: 4,
            section: 'today',
            sectionTitleEn: "Today's Medication",
            sectionTitleAr: "أدوية اليوم",
            name: "Vibramycin 100mg",
            subEn: "09:00 PM · Take with food",
            subAr: "09:00 PM · مع الأكل",
            status: "Upcoming",
            statusAr: "قادمة",
            iconBg: "teal-icon-bg",
            imgSrc: pil,
            filterClass: "white-pill-filter"
        },
        // YESTERDAY SECTION
        {
            id: 5,
            section: 'yesterday',
            sectionTitleEn: "YESTERDAY",
            sectionTitleAr: "أمس",
            name: "Aspirin 100mg",
            subEn: "1 tablet · 09:00 AM",
            subAr: "قرص واحد · 09:00 AM",
            status: "Taken",
            statusAr: "تم أخذها",
            iconBg: "blue-icon-bg",
            imgSrc: pil,
            filterClass: "white-pill-filter"
        },
        {
            id: 6,
            section: 'yesterday',
            sectionTitleEn: "YESTERDAY",
            sectionTitleAr: "أمس",
            name: "Metformin 500mg",
            subEn: "1 tablet · 08:00 PM",
            subAr: "قرص واحد · 08:00 PM",
            status: "Missed",
            statusAr: "فائتة",
            iconBg: "red-icon-bg",
            imgSrc: pil,
            filterClass: "red-pill-filter"
        },
        // SAT 16 MAY SECTION
        {
            id: 7,
            section: 'may16',
            sectionTitleEn: "SAT 16 MAY",
            sectionTitleAr: "السبت ١٦ مايو",
            name: "Aspirin 100mg",
            subEn: "1 tablet · 09:00 AM",
            subAr: "قرص واحد · 09:00 AM",
            status: "Taken",
            statusAr: "تم أخذها",
            iconBg: "blue-icon-bg",
            imgSrc: pil,
            filterClass: "white-pill-filter"
        },
        {
            id: 8,
            section: 'may16',
            sectionTitleEn: "SAT 16 MAY",
            sectionTitleAr: "السبت ١٦ مايو",
            name: "Metformin 500mg",
            subEn: "1 tablet · 08:00 PM",
            subAr: "قرص واحد · 08:00 PM",
            status: "Missed",
            statusAr: "فائتة",
            iconBg: "red-icon-bg",
            imgSrc: pil,
            filterClass: "red-pill-filter"
        }
    ];

    // 2. Filter logic based on the active tab
    const filteredLogs = activeTab === 'All' 
        ? medicationLogs 
        : medicationLogs.filter(log => log.status === activeTab);

    // 3. Group filtered results by their specific timeline date sections
    const sections = ['today', 'yesterday', 'may16'];

    if (loading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <>
            <Navbar />
            <motion.div
                className='maindiv opadding gap26 auto-height'
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                {/* Header Section */}
                <div className='arrowwtitle gap0'>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" style={{ transform: isArabic ? 'scaleX(-1)' : 'none' }} />
                    </Link>
                    <SectionTitle title={isArabic ? "سجل الأدوية" : "Medication Log"} margin="0 auto" align="center"/>
                </div>

                {/* Top Summary Stats Cards */}
                <motion.div className='summary-stats-container' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                    <div className='stat-box' onClick={() => setActiveTab('Taken')} style={{ cursor: 'pointer' }}>
                        <span className='stat-number green-text'>2</span>
                        <span className='stat-label'>{isArabic ? "مأخوذ" : "Taken"}</span>
                    </div>
                    <div className='stat-box' onClick={() => setActiveTab('Missed')} style={{ cursor: 'pointer' }}>
                        <span className='stat-number red-text'>2</span>
                        <span className='stat-label'>{isArabic ? "فائت" : "Missed"}</span>
                    </div>
                    <div className='stat-box' onClick={() => setActiveTab('Upcoming')} style={{ cursor: 'pointer' }}>
                        <span className='stat-number orange-text'>4</span>
                        <span className='stat-label'>{isArabic ? "قادم" : "Upcoming"}</span>
                    </div>
                </motion.div>

                {/* Pill Filter Tabs */}
                <motion.div className='pill-tabs-container' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.1 }} viewport={vp}>
                    {['All', 'Taken', 'Missed', 'Upcoming'].map((tab) => (
                        <button 
                            key={tab}
                            className={`pill-tab ${activeTab === tab ? 'pill-tab-active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {isArabic ? (
                                tab === 'All' ? 'الكل' : tab === 'Taken' ? 'مأخوذ' : tab === 'Missed' ? 'فائت' : 'قادم'
                            ) : tab}
                        </button>
                    ))}
                </motion.div>

                {/* Chronological Logs List */}
                <motion.div className='logs-timeline-container' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.15 }} viewport={vp}>
                    
                    {sections.map(sectionKey => {
                        // Gather medicines belonging to this specific timeline section
                        const sectionItems = filteredLogs.filter(item => item.section === sectionKey);
                        
                        // If no items match the filter for this date section, hide the entire date block
                        if (sectionItems.length === 0) return null;

                        // Get the localized section header string from the first matching element
                        const sectionTitle = isArabic ? sectionItems[0].sectionTitleAr : sectionItems[0].sectionTitleEn;

                        return (
                            <div className='timeline-section' key={sectionKey}>
                                <h4 className='timeline-date-title'>{sectionTitle}</h4>
                                
                                {sectionItems.map((log) => (
                                    <div className='medicine-log-row-card' key={log.id}>
                                        <div className='medicine-log-left'>
                                            <div className={`medicine-icon-bg ${log.iconBg}`}>
                                                <img 
                                                    src={log.imgSrc} 
                                                    alt="pill" 
                                                    className={`pill-icon-style ${log.filterClass}`} 
                                                />
                                            </div>
                                            <div className='medicine-log-details'>
                                                <h5 className='medicine-log-name'>{log.name}</h5>
                                                <p className='medicine-log-sub'>{isArabic ? log.subAr : log.subEn}</p>
                                            </div>
                                        </div>
                                        <span className={`status-badge badge-${log.status.toLowerCase()}`}>
                                            {isArabic ? log.statusAr : log.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        );
                    })}

                    {/* Fallback empty view if absolutely nothing matches the active filter */}
                    {filteredLogs.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '40px 20px', color: '#888' }}>
                            {isArabic ? "لا توجد أدوية تطابق هذا الفلتر" : "No medications found for this filter"}
                        </div>
                    )}

                </motion.div>
            </motion.div>
        </>
    );
};

export default Progress1;