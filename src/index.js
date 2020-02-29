import './css/index.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './js/App';
import * as serviceWorker from './js/serviceWorker';

render(<App />, document.getElementById('root'));

// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
