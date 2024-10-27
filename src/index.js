import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import global_en from "../src/translation/en/global.json"
import i18next from "i18next"
import { I18nextProvider } from 'react-i18next';

i18next.init({
    interpolation :{escapeValue:true},
    lng:"en",
    resources:{
        en:{
            global: global_en,
        },
    },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <App />

  </React.StrictMode>
);

