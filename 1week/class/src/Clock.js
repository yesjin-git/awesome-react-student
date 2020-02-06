import React, { Component } from "react";

class Clock extends Component {
  state = {
      date: new Date()
  };

  handleRefresh = () => {
      this.setState({ date: new Date() });
  }

  handleTimer = () => {
    this.intervalId = setInterval(() => {
        this.handleRefresh()
    });
  }

  componentDidMount() {
    this.handleTimer();
  }

  handleStart = () => {
      this.handleTimer();
  }

  handleStop = () => {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      //두개 이상의 엘리먼트를 return 할때는 반드시 div로 감싸야 한다.
      <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
      </div>
    );
  }
}

export default Clock;