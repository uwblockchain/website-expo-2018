import '../css/App.css';
import React from 'react';
import Navigation from './nav/Navigation';
import Head from './Head';
import Schedule from './Schedule';

const App = () => (
  <div className="App">
    <Head />
    <Navigation />
    <Schedule />
    <div id="content" />
  </div>
);

export default App;
