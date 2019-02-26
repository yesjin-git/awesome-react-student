import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter valueNum = {1}/>
          <Counter valueNum = {2}/>
        </header>
      </div>
    );
  }
}

export default App;
