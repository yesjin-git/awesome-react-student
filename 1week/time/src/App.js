import React, { Component } from 'react';
import './App.css';
import DateApp from './time.js';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      time : new Date().toLocaleTimeString()
    };
    this.intervalId = null;
  };
 
  timeGet = () => {
    this.setState({time: new Date().toLocaleTimeString()});
  }
  timePlay = () => {
    this.intervalId = setInterval(this.timeGet, 1000);
  }
  timeStop = () => {
    clearInterval(this.intervalId);
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <DateApp
           timeText = {this.state.time}
           timePlay = {this.timePlay}
           timeStop = {this.timeStop}
         />
        </header>
      </div>
    );
  }
}

export default App;
