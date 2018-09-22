import './css/index.css';
import React from 'react';
import { render } from 'react-dom';

import App from './js/App';
import registerServiceWorker from './js/registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
