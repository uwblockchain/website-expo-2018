import '../css/App.css';
import React from 'react';
import Navigation from './nav/Navigation';
import Head from './Head';
import BuyTickets from './buyTickets/BuyTickets';
import SpeakerPreviews from './speakers/SpeakerPreviews';
import Video from './video/Video';
import Schedule from './Schedule';

const App = () => (
  <div className="App">
    <Head />
    <Navigation />
    <Video />
    <BuyTickets/>
    <SpeakerPreviews/>
    <Schedule />
  </div>
);

export default App;
