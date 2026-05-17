import React, { useState, useEffect, useRef } from 'react';
import "./Reminder.css"
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import f1 from '../assets/ai.svg';
import smalll from '../assets/smalllogo.svg';
import Button from './../components/Button';
import Counter from '../components/Counter';
import Toggle from '../components/Toggle';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';


const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;


const Reminder = () => {
    const { isArabic } = useLang();
    const [pageLoading, setPageLoading] = useState(true);
    const [showSheet, setShowSheet] = useState(false);
    const [cameraMode, setCameraMode] = useState('closed');
    const [analyzing, setAnalyzing] = useState(false);
    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const galleryInputRef = useRef(null);
    const navigate = useNavigate();


    useEffect(() => {
        const timer = setTimeout(() => setPageLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const toBase64 = (blob) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });

    const analyzeWithGroq = async (base64Image, mimeType = 'image/jpeg') => {
        setAnalyzing(true);
        setCameraMode('closed');
        setShowSheet(false);

        try {
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'meta-llama/llama-4-scout-17b-16e-instruct',
                    max_tokens: 1000,
                    messages: [
                        {
                            role: 'user',
                            content: [
                                {
                                    type: 'image_url',
                                    image_url: {
                                        url: `data:${mimeType};base64,${base64Image}`,
                                    },
                                },
                                {
                                    type: 'text',
                                    text: `You are a medical prescription scanner. Extract all medications from this prescription image.
Respond ONLY with a valid JSON array, no explanation, no markdown, no backticks.
Each item must have exactly these fields:
- medName (string): medicine name and dosage e.g. "Vibramycin 100mg"
- dosage (string): e.g. "1 tablet • twice daily"
- duration (string): e.g. "2 months"
- instructions (string): e.g. "Take with food" (or empty string if none)
- startDate (string): today's date in MM/DD/YYYY format

Example output:
[{"medName":"Panadol 500mg","dosage":"1 tablet • 3 times daily","duration":"1 week","instructions":"Take after food","startDate":"05/17/2026"}]

If you cannot read the prescription clearly, return an empty array: []`,
                                },
                            ],
                        },
                    ],
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error?.message || 'Groq API error');
            }

            const text = data.choices?.[0]?.message?.content || '[]';
            const clean = text.replace(/```json|```/g, '').trim();
            const meds = JSON.parse(clean);

            setAnalyzing(false);
            navigate('/extracted', { state: { meds } });
        } catch (err) {
            console.error('Groq API error:', err);
            setAnalyzing(false);
            alert(isArabic ? 'فشل تحليل الوصفة. حاول مجدداً.' : 'Failed to analyze prescription. Please try again.');
        }
    };

    // --- Camera flow ---
    const handleCameraClick = async () => {
        setShowSheet(false);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
            streamRef.current = stream;
            setCameraMode('viewfinder');
            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            }, 100);
        } catch (err) {
            console.error('Camera error:', err);
            alert(isArabic ? 'تعذر الوصول إلى الكاميرا.' : 'Could not access camera.');
        }
    };

    const capturePhoto = () => {
        const video = videoRef.current;
        if (!video) return;

        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);

        streamRef.current?.getTracks().forEach(t => t.stop());
        setCameraMode('captured');

        canvas.toBlob(async (blob) => {
            const base64 = await toBase64(blob);
            await analyzeWithGroq(base64, 'image/jpeg');
        }, 'image/jpeg', 0.9);
    };

    const closeCamera = () => {
        streamRef.current?.getTracks().forEach(t => t.stop());
        setCameraMode('closed');
    };

    // --- Gallery flow ---
    const handleGalleryClick = () => {
        setShowSheet(false);
        galleryInputRef.current?.click();
    };

    const handleGalleryChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const base64 = await toBase64(file);
        await analyzeWithGroq(base64, file.type);
    };

    if (pageLoading) return (
        <div className="loader-container">
            <img src={smalll} alt="loading" className="loader-logo" />
        </div>
    );

    return (
        <div className="app-container">
            <Navbar />

            <input
                ref={galleryInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleGalleryChange}
            />

            <motion.div
                className='maindiv opadding gap26'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <SectionTitle title={isArabic ? "إضافة تذكير" : "Add Reminder"} />
                <FeatureCard
                    image={f1}
                    name={isArabic ? "مسح الوصفة الطبية" : "Scan Prescription"}
                    des={isArabic ? "تعبئة تلقائية باستخدام الذكاء الاصطناعي" : "Auto-fill form using AI scanner"}
                    onClick={() => setShowSheet(true)}
                />

                <div className='logincont hauto'>
                    <div className='forinputswtexts'>
                        <div className='for2inputs'>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "اسم الدواء" : "Medicine Name"}</p>
                                <input type="text" className='inputc' placeholder={isArabic ? "بانادول" : "Panadol"} />
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "إجمالي الحبوب المتاحة" : "Total Pills Available"}</p>
                                <div className='inputwtext'>
                                    <input type="number" className='inputsmallerwidth' />
                                    <p className='pills'>{isArabic ? "حبة" : "Pills"}</p>
                                </div>
                            </div>

                            <div className='titlewinputbutton'>
                                <p className='inputtile'>{isArabic ? "الحبوب لكل جرعة" : "Pills per intake"}</p>
                                <Counter />
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "الوقت" : "Time"}</p>
                                <input type="time" className='inputc' />
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "التكرار" : "Frequency"}</p>
                                <select className='inputc martop3 lw'>
                                    <option value="8">{isArabic ? "كل ٨ ساعات" : "Every 8 hours"}</option>
                                    <option value="12">{isArabic ? "كل ١٢ ساعة" : "Every 12 hours"}</option>
                                    <option value="1">{isArabic ? "كل يوم" : "Every day"}</option>
                                    <option value="2">{isArabic ? "كل يومين" : "Every 2 days"}</option>
                                    <option value="7">{isArabic ? "كل أسبوع" : "Every week"}</option>
                                </select>
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "المدة" : "Duration"}</p>
                                <select className='inputc martop3 lw'>
                                    <option value="7">{isArabic ? "أسبوع" : "1 week"}</option>
                                    <option value="30">{isArabic ? "شهر" : "1 month"}</option>
                                </select>
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "تاريخ البدء" : "Start Date"}</p>
                                <input type="date" className='inputc' />
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "لون الحبة (اختياري)" : "Pill Color (Optional)"}</p>
                                <select className='inputc martop3 lw'>
                                    <option>{isArabic ? "اختر" : "Select"}</option>
                                    <option>{isArabic ? "أحمر" : "Red"}</option>
                                    <option>{isArabic ? "أزرق" : "Blue"}</option>
                                </select>
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "صورة الدواء (اختياري)" : "Medicine Image (Optional)"}</p>
                                <input type="file" accept="image/*" className='inputc martop3 lw' />
                            </div>

                            <div className='titlewinput'>
                                <p className='inputtile'>{isArabic ? "ملاحظات (اختياري)" : "Notes (Optional)"}</p>
                                <textarea className='inputc martop3' placeholder={isArabic ? "تناوله بعد الطعام..." : "Take after food..."}></textarea>
                            </div>

                            <div className='togglecard'>
                                <div className='titlewtogbutton'>
                                    <p className='toggle-title'>{isArabic ? "تنبيه صوتي" : "Voice Alert"}</p>
                                    <Toggle />
                                </div>
                                <p className='toggle-desc'>{isArabic ? "تشغيل تذكير صوتي عند موعد الدواء." : "Play a voice reminder when it's time to take your medication."}</p>
                            </div>

                            <div className='togglecard'>
                                <div className='titlewtogbutton'>
                                    <p className='toggle-title'>{isArabic ? "مكالمة تذكير" : "Reminder call"}</p>
                                    <Toggle />
                                </div>
                                <p className='toggle-desc'>{isArabic ? "إذا فاتك الإشعار، سنقوم بالاتصال بك خلال 5 دقائق." : "If you miss a push notification, we'll call you within 5 minutes."}</p>

                                <div className='titlewinput'>
                                    <p className='inputtile f14'>{isArabic ? "تأخير المكالمة" : "Call Delay"}</p>
                                    <select className='inputc martop3 w295'>
                                        <option>{isArabic ? "٥ دقائق" : "5 minutes"}</option>
                                        <option>{isArabic ? "١٠ دقائق" : "10 minutes"}</option>
                                    </select>
                                </div>
                            </div>
                            <div className='togglecard'>
    <div className='titlewtogbutton'>
        <p className='toggle-title'>
            {isArabic ? "تنبيه مقدم الرعاية" : "Caregiver Reminder"}
        </p>

        <Toggle />
    </div>

    <p className='toggle-desc'>
        {isArabic
            ? "إرسال إشعار أو رسالة لمقدم الرعاية إذا فاتك موعد الدواء."
            : "Send a notification or message to a caregiver if you miss your medication reminder."}
    </p>

    <div className='titlewinput margintop12'>
        <p className='inputtile f14'>
            {isArabic ? "اسم مقدم الرعاية" : "Caregiver Name"}
        </p>

        <input
            type="text"
            className='inputc width293i'
            placeholder={
                isArabic
                    ? "أدخل الاسم"
                    : "Enter caregiver name"
            }
        />
    </div>

    <div className='titlewinput margintop12'>
        <p className='inputtile f14'>
            {isArabic ? "رقم الهاتف" : "Phone Number"}
        </p>

        <input
            type="tel"
            className='inputc width293i'
            placeholder={
                isArabic
                    ? "01XXXXXXXXX"
                    : "+20 1XXXXXXXXX"
            }
        />
    </div>

    <div className='titlewinput margintop12'>
        <p className='inputtile f14'>
            {isArabic ? "طريقة التنبيه" : "Alert Method"}
        </p>

        <select className='inputc martop3 w295'>
            <option>
                {isArabic ? "رسالة نصية" : "SMS"}
            </option>

            <option>
                {isArabic ? "إشعار داخل التطبيق" : "In-App Notification"}
            </option>

            <option>
                {isArabic ? "مكالمة هاتفية" : "Phone Call"}
            </option>
        </select>
    </div>

   
</div>

                            <Link to="/home" style={{ textDecoration: 'none' }}>
                                <Button text={isArabic ? "إضافة التذكير" : "Add Reminder"} width="335px" />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom sheet */}
            <AnimatePresence>
                {showSheet && (
                    <motion.div className='sheetoverlay' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowSheet(false)}>
                        <motion.div className='sheetcontainer' initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} onClick={(e) => e.stopPropagation()}>
                            <div className='sheetcard'>
                                <p className='sheettitle'>{isArabic ? "اختر الوصفة" : "Select Prescription"}</p>
                                <div className='sheetdivider' />
                                <button className='sheetbtn' onClick={handleCameraClick}>{isArabic ? "الكاميرا" : "Camera"}</button>
                                <div className='sheetdivider' />
                                <button className='sheetbtn' onClick={handleGalleryClick}>{isArabic ? "المعرض" : "Gallery"}</button>
                            </div>
                            <div className='sheetcancelcard'>
                                <button className='sheetcancelbtn' onClick={() => setShowSheet(false)}>{isArabic ? "إلغاء" : "Cancel"}</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Live camera viewfinder */}
            {cameraMode === 'viewfinder' && (
                <div className="camera-sim-overlay">
                    <div className="viewfinder">
                        <video ref={videoRef} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} playsInline muted />
                        <div className="scan-focus-box" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="corner tl"></div>
                            <div className="corner tr"></div>
                            <div className="corner bl"></div>
                            <div className="corner br"></div>
                        </div>
                        <p className="scan-text" style={{ position: 'relative', zIndex: 2 }}>
                            {isArabic ? "ضع الوصفة داخل الإطار" : "Align prescription within the frame"}
                        </p>
                        <div className="camera-controls" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="capture-btn-outer" onClick={capturePhoto}>
                                <div className="capture-btn-inner"></div>
                            </div>
                            <button className="close-cam" onClick={closeCamera}>{isArabic ? "إلغاء" : "Cancel"}</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Analyzing overlay */}
            {(cameraMode === 'captured' || analyzing) && (
                <div className="camera-sim-overlay captured-bg">
                    <div className="captured-content">
                        <motion.div
                            className="scanning-bar"
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <p className="processing-text">
                            {isArabic ? "جاري تحليل الوصفة..." : "Analyzing Prescription..."}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Reminder;


