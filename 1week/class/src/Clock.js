import React, { Component } from "react";

class Clock extends Component
{
  state = {
    time: new Date().toLocaleTimeString(),
    intervalId: ''
  };

  // 현재 시간 set
  setTime = () => {
    this.setState(({ time }) => ({
      time: new Date().toLocaleTimeString()
    }));
  }

  // 시계 시작
  start = () => {
    if(this.state.intervalId=='')
    {
      this.setState(({ intervalId }) => ({
        intervalId: setInterval(this.setTime, 1000)
      }));
    }
  }

  // 시계 멈추기
  stop = () => {
    clearInterval(this.state.intervalId);

    this.setState(({ intervalId }) => ({
      intervalId: ''
    }));
  }

  // 시계 실행
  componentDidMount() {
    this.start();
  }

  // Render
  render() {
    return (
      <div>
        <div>{this.state.time}</div>
        <button onClick={this.stop}>stop</button><br />
        <button onClick={this.start}>start</button><br />
      </div>
    );
  }
}

class test {
  pt1 = () => {
    console.log(123);
  }
}

test = new test;
test.pt1();

export default Clock;
