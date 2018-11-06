import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Navbar.js';
import MainView from './MainView.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainView />
      </div>
    );
  }
}

export default App;
