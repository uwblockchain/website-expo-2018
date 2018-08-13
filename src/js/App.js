import '../css/App.css';
import React, { Component } from 'react';
import Navigation from './Navigation';
import Head from './Head';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Navigation />
        <div id="content" />
      </div>
    );
  }
}
