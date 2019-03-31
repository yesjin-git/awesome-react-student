import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter argNum={1} />
          <Counter argNum={2} />
        </header>
      </div>
    );
  }
}

export default App;