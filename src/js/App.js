import '../css/App.css';
import React from 'react';
import Navigation from './nav/Navigation';
import Head from './Head';
import Speakers from './speakers/Speakers';

const App = () => (
  <div className="App">
    <Head />
    <Navigation />
    <Speakers />
    <div id="content" />
  </div>
);

export default App;
