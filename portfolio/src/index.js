import React from 'react';
import ReactDOM from 'react-dom/client';
// hash rooter
import { HashRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Router>
);


reportWebVitals();