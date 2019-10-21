import React, { Component } from 'react';
import Weather from './Weather';

import '../styles/App.css';

const logo = require('../assets/logo.svg');

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='App-title'>Show Local Weather</h1>
        </header>

        <Weather />

      </div>
    );
  }
}

export default App;
