import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/Provider';
import { HelmetProvider } from 'react-helmet-async';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <GlobalProvider>
        <HelmetProvider>
          <Routes>
            <Route path="/*" element={ <App />} />
          </Routes>
        </HelmetProvider>
      </GlobalProvider>
    </BrowserRouter>
  </React.Fragment>
);

reportWebVitals();
