import '../css/App.css';
import React from 'react';
import Navigation from './nav/Navigation';
import Head from './Head';
import BuyTickets from './buyTickets/BuyTickets';
import SpeakerPreviews from './speakers/SpeakerPreviews';
import Video from './video/Video';
import Workshops from './workshops/Workshops';
import Sponsors from './sponsors/Sponsors';
import Schedule from './schedule/Schedule';
import Footer from './footer/Footer';
import Hero from './hero/Hero';

const App = () => (
  <div className="App">
    <Head />
    <Navigation />
    <Hero />
    <Video />
    <BuyTickets/>
    <SpeakerPreviews/>
    <Schedule />
    <Workshops/>
    <Sponsors/>
    <Footer />
  </div>
);

export default App;
