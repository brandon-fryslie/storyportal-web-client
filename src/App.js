import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wheel from './wheel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Story Portal</h1>
        </header>
        <p className="App-intro">
          Welcome to Story Portal
        </p>
        <Wheel />
      </div>
    );
  }
}

export default App;
