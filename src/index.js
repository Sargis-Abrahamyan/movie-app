import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "swiper/css/bundle";

import App from './App';
import { AppProvider } from './Components/context/AppContext';
import './index.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
);

