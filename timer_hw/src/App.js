import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Timer from './timer_hw.js';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      cur_time: new Date().toLocaleTimeString(),
      isRunning: true
    };
  }

  updateTime = () => {
    this.setState({cur_time: new Date().toLocaleTimeString()})
  }

  componentDidMount() {
    console.log("mount");
    this.intervalId = setInterval(this.updateTime, 1000)
  }

  componentDidUpdate() {
    console.log("update");
  }

  shouldComponentUpdate(){
    if(this.state.isRunning === true) {
      return true
    }
    return false
  }

  handleStart = () => {
    this.setState({isRunning: true})
  }

  handleStop = () => {
    this.setState({isRunning: false})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Timer
            time = {this.state.cur_time}
            start = {this.handleStart}
            stop = {this.handleStop}
          />
        </header>
      </div>
    );
  }
}

export default App;
