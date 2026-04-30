import React from 'react';
import "./NotificationSettings.css"
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';
import back from '../assets/back.svg';
import { Link } from 'react-router-dom';
import Toggle from '../components/Toggle';
import { useLang } from '../context/LanguageContext';

const NotificationSettings = () => {
    const { isArabic } = useLang();

    return (
        <>
            <Navbar />
            <div className='maindiv opadding'>
                <div className='arrowwtitle gap0'>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" style={{ transform: isArabic ? 'scaleX(-1)' : 'none' }} />
                    </Link>
                    <SectionTitle title={isArabic ? "إعدادات الإشعارات" : "Notification Settings"} margin="0 auto" align="center"/>
                </div>

                <p className='notifgrouplabel'>{isArabic ? "الدواء والصحة" : "Medication & Health"}</p>

                <div className='notifcard'>
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>{isArabic ? "تذكيرات الأدوية" : "Medication Reminders"}</p>
                            <p className='notifdes'>{isArabic ? "احصل على إشعار عند حلول موعد تناول دوائك" : "Get notified when it's time to take your medicine"}</p>
                        </div>
                        <Toggle />
                    </div>
                    <div className='notifdivider' />
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>{isArabic ? "تنبيهات إعادة التعبئة" : "Refill Alerts"}</p>
                            <p className='notifdes'>{isArabic ? "تنبيهات عند اقتراب نفاد دوائك" : "Alerts when your medication is running low"}</p>
                        </div>
                        <Toggle />
                    </div>
                    <div className='notifdivider' />
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>{isArabic ? "الرؤى الصحية" : "Health Insights"}</p>
                            <p className='notifdes'>{isArabic ? "نصائح صحية ورؤى مدعومة بالذكاء الاصطناعي" : "AI-powered health tips and insights"}</p>
                        </div>
                        <Toggle />
                    </div>
                </div>

                <p className='notifgrouplabel'>{isArabic ? "المكافآت والتحديثات" : "Rewards & Updates"}</p>

                <div className='notifcard'>
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>{isArabic ? "إشعارات المكافآت" : "Reward Notifications"}</p>
                            <p className='notifdes'>{isArabic ? "تحديثات حول النقاط والشارات والمكافآت الجديدة" : "Updates about points, badges, and new rewards"}</p>
                        </div>
                        <Toggle />
                    </div>
                    <div className='notifdivider' />
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>{isArabic ? "تحديثات الصيدلية" : "Pharmacy Updates"}</p>
                            <p className='notifdes'>{isArabic ? "إشعارات حالة الطلب والتوصيل" : "Order status and delivery notifications"}</p>
                        </div>
                        <Toggle />
                    </div>
                </div>

                <p className='notifgrouplabel'>{isArabic ? "طرق التنبيه" : "Alert Methods"}</p>

                <div className='notifcard'>
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>{isArabic ? "التنبيهات الصوتية" : "Voice Alerts"}</p>
                            <p className='notifdes'>{isArabic ? "إشعارات صوتية لتذكيرات الأدوية" : "Audio notifications for medication reminders"}</p>
                        </div>
                        <Toggle />
                    </div>
                    <div className='notifdivider' />
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>{isArabic ? "الإشعارات الفورية" : "Push Notifications"}</p>
                            <p className='notifdes'>{isArabic ? "إشعارات فورية داخل التطبيق وعلى الجوال" : "In-app and mobile push notifications"}</p>
                        </div>
                        <Toggle />
                    </div>
                    <div className='notifdivider' />
                    <div className='notifrow'>
                        <div className='notifinfo'>
                            <p className='notiftitle'>{isArabic ? "إشعارات البريد الإلكتروني" : "Email Notifications"}</p>
                            <p className='notifdes'>{isArabic ? "استقبل التحديثات عبر البريد الإلكتروني" : "Receive updates via email"}</p>
                        </div>
                        <Toggle />
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotificationSettings;