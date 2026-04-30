// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import RoutingApp from './RoutingApp';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RoutingApp />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutingApp from './RoutingApp';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';

const startApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
           <LanguageProvider>

      <RoutingApp />
      </LanguageProvider>
    </React.StrictMode>
  );
};

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}
