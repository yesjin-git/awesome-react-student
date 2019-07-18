import React, { Component } from 'react';
import Counter from './Counter';
import Clock from './Clock';
import './App.css';

class App extends Component {
  state = {
    initNum : 0,
    countNum : 1,
    countNum2 : 2,
    date: new Date().toLocaleTimeString()
  }
  
  componentDidMount() {
    this.intervalID = setInterval(() => this.time(), 1000);
  }

  handleInc = (countNum) => {
    const { initNum } = this.state;

    this.setState({
      initNum : initNum + countNum
    });
  }

  handleDec = (countNum) => {
    const { initNum } = this.state;

    this.setState({
      initNum : initNum - countNum
    });
  }

  handleReset = () => {
    this.setState({
      initNum : 0
    });
  }
  
  time = () => {
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }

  startClock = () => {
    this.setState({
      date : setInterval(() => this.time(), 1000)
    });
  }

  stopClock = () => {
    clearInterval(this.intervalID);
  }
  
  render() {
    const { handleInc , handleDec, handleReset, startClock, stopClock } = this;
    const { initNum, date, countNum, countNum2 } = this.state;
    
    return (
      <div className="section_main">
        <h2>Counter 1씩 증감</h2>
        <Counter initNum={initNum} handleInc={handleInc} handleDec={handleDec} handleReset={handleReset} countNum={countNum} />
        
        <hr />
        <h2>Counter 2씩 증감</h2>
        <Counter initNum={initNum} handleInc={handleInc} handleDec={handleDec} handleReset={handleReset} countNum={countNum2} />
        
        <hr />
        <Clock date={date} startClock={startClock} stopClock={stopClock} />
      </div>
    );
  }
}

export default App;