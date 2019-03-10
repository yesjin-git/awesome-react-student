import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter.js";
import Timer from "./Timer.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />  
          <div className = "Counter-container">
            <Counter valueNum={1}/>
            <Counter valueNum={2}/>
          </div>
          <br/>
          <div className="Timer-container">
            <Timer/>
          </div>
        </header>
      </div>
    );
  }
}