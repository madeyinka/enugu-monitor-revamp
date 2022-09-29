import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/Provider';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/*" element={ <App />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  </React.Fragment>
);

reportWebVitals();
