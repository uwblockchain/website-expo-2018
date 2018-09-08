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
import loadicon from '../img/loadicon.gif';
import LoadingScreen from 'react-loading-screen';

export default class App extends React.Component { 

  // Decided to keep the delay but keep it
  // a small value, since the loading screen
  // will sometimes transition before all of
  // the components are rendered properly
  delay() {
    return new Promise(resolve => setTimeout(resolve, 75))
  }

  constructor() {
    super();
    this.state={ loading: true }
  } 

  componentDidMount() {
    this.delay().then(() => {
      this.setState({ loading: false })
    });
  }

  render() {
    return (
      <LoadingScreen
      loading={this.state.loading}
      bgColor='black'
      textColor='white'
      logoSrc={loadicon}
      text='Loading...'
      > 
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
      </LoadingScreen>
      );
    }
  }
