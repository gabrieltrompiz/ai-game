import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'popper.js';
import "../node_modules/jquery/dist/jquery.min.js";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
