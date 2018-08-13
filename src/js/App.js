import '../css/App.css';
import React from 'react';
import Navigation from './Navigation';
import Head from './Head';

const App = () => (
  <div className="App">
    <Head />
    <Navigation />
    <div id="content" />
  </div>
);

export default App;
