import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
} from 'react-router-dom';

import App from './App';
import { BASE_URL } from './components/constants';
import * as serviceWorker from './serviceWorker';

import './index.css';

const RouterApp = () => (
  <Router basename={BASE_URL}>
    <App />
  </Router>
)

ReactDOM.render(<RouterApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
