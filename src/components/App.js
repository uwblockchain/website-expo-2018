import React, { Component } from 'react';
import '../css/App.css';
import NavBar from './NavBar'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}