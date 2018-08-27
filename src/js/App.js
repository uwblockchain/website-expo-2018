import '../css/App.css';
import React from 'react';
import Navigation from './nav/Navigation';
import Head from './Head';
import BuyTickets from './buyTickets/BuyTickets';
import SpeakerPreviews from './speakers/SpeakerPreviews';

const App = () => (
  <div className="App">
    <Head />
    <Navigation />
    <BuyTickets/>
    <SpeakerPreviews/>
    <div id="content" />
  </div>
);

export default App;
