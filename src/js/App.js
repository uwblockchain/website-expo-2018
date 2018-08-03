import React, { Component } from 'react';
import '../css/App.css';
import Speakers from './Speakers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Speakers />
      </div>
    );
  }
}

export default App;
