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

  // Used to simulate how the loading screen will work
  // when connection speed is slow.
  // THIS SHOULD BE REMOVED BEFORE MERGE,
  // WE WANT THIS WEBSITE TO BE FAST
  delay() {
    return new Promise(resolve => setTimeout(resolve, 250))
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
      bgColor='linear-gradient(to top right, #18184B, #663399) no-repeat center center fixed'
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
