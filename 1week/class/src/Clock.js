import React, { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date()
  };

  //CB 호출 순서를 파악하자.
  handleIncrease() {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  handleDecrease() {
    this.intervalId = clearInterval(() => {
      this.setState({ date: Date() });
    });
  }

  componentDidUpdate() {
    console.log("update");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Clock</h1>
        <p>{this.state.date.toLocaleTimeString()}</p>
        <p>
          <button onClick={this.handleIncrease}>Start</button>
        </p>
        <p>
          <button onClick={this.handleDecrease}>Stop</button>
        </p>
      </div>
    );
  }
}

export default Clock;
