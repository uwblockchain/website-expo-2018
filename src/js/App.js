import '../css/App.css';
import React from 'react';
import Navigation from './nav/Navigation';
import Head from './Head';
import BuyTickets from './buyTickets/BuyTickets';
import Video from './video/Video';
import Workshops from './workshops/Workshops';
import Sponsors from './sponsors/Sponsors';
import Schedule from './schedule/Schedule';
import Footer from './footer/Footer';
import Hero from './hero/Hero';
import { Element } from 'react-scroll';
import loadicon from '../img/loadicon.gif';
import LoadingScreen from 'react-loading-screen';
import Speakers from './speakers/Speakers';
import Advisors from './Advisors';

export default class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 100);
  }

  render() {
    return (
      <LoadingScreen
        loading={this.state.loading}
        bgColor="black"
        textColor="white"
        logoSrc={loadicon}
        text="Loading..."
      >
        <div className="App">
          <Head />
          <Navigation />
          <Hero />
          <Video />
          <BuyTickets />
          <Speakers />
          <Element name="schedule">
            <Schedule />
          </Element>
          <Element name="workshops">
            <Workshops />
          </Element>
          <Element name="advisors">
            <Advisors />
          </Element>
          <Element name="sponsors">
            <Sponsors />
          </Element>
          <Footer />
        </div>
      </LoadingScreen>
    );
  }
}
