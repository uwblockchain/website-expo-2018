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
import { Element } from 'react-scroll';

const App = () => (
  <div className="App">
    <Head />
    <Navigation />
    <Hero />
    <Video />
    <BuyTickets />
    <Element name="speaker-previews">
      <SpeakerPreviews />
    </Element>
    <Element name="schedule">
      <Schedule />
    </Element>
    <Element name="workshops">
      <Workshops />
    </Element>
    <Element name="sponsors">
      <Sponsors />
    </Element>
    <Footer />
  </div>
);

export default App;
