import './css/index.css';
import React from 'react';
import { hydrate, render } from 'react-dom';

import App from './js/App';
import registerServiceWorker from './js/registerServiceWorker';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
registerServiceWorker();
