import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyBnjo7fnnVBlFZLCvnYEAx-Qiv2Bqx2Z54",
  authDomain: "instaphotos-d3c60.firebaseapp.com",
  databaseURL: "https://instaphotos-d3c60.firebaseio.com",
  projectId: "instaphotos-d3c60",
  storageBucket: "instaphotos-d3c60.appspot.com",
  messagingSenderId: "208983626684"
});

ReactDOM.render(
  <App />,
  document.getElementById('root'));
registerServiceWorker();
