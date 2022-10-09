import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseConfig } from './config/firebase';

import App from './App';
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

ReactDOM.render (
            <App/>,
    document.querySelector('#root')
);
