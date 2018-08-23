import '../css/App.css';
import React from 'react';
import Navigation from './nav/Navigation';
import Head from './Head';
import BuyTickets from './buyTickets/BuyTickets'

const App = () => (
  <div className="App">
    <Head />
    <Navigation />
    <BuyTickets/>
    <div id="content" />
  </div>
);

export default App;
