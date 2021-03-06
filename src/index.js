import "babel-polyfill"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//E
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
//E

import App from './App';
//import * as serviceWorker from './serviceWorker';

import './index.css';
//import './index_Menu.css';


ReactDOM.render(
   <App />,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
