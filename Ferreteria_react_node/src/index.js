import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9dKNwtZYCeI_qDsCd_XEp6XusRj_cxDA",
  authDomain: "react-ferreteria-alejandra.firebaseapp.com",
  projectId: "react-ferreteria-alejandra",
  storageBucket: "react-ferreteria-alejandra.appspot.com",
  messagingSenderId: "529996040083",
  appId: "1:529996040083:web:5de8ffa09fcd4d2ec04a66"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
    <App />
//  </React.StrictMode>
);

