import { createContext, useContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('en');
    const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
    const isArabic = lang === 'ar';

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, isArabic }}>
            <div dir={isArabic ? 'rtl' : 'ltr'} style={{ width: '415px' }}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);