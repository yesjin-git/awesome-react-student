import React, { Component } from 'react';

export default class Timer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      intervalId: 0,
      nowTime: new Date().toLocaleTimeString()
    };
  }

  // 페이지 마운트 후 카운트를 시작한다.
  componentDidMount = () => {
    this.handleTimerStart();
  }

  // 페이지 언마운트 때 interval 해제
  componentWillUnmount = () => {
    this.handleTimerStop();
  }

  timer = () => {
    this.setState({
      nowTime: new Date().toLocaleTimeString()
    });
  }

  handleTimerStart = () => {
    // start를 여러 번 누를 경우 stop 이 제대로 작동하지 않아
    // 이를 고려하여 정지 처리를 한 번 해준다.
    this.handleTimerStop();
    
    this.setState({
      // intervalId를 state로 저장해야 나중에 이 id로 정지시킬 수 있음.
      intervalId: setInterval(this.timer, 1000)
    });
  }

  handleTimerStop = () => {
    clearInterval(this.state.intervalId);
  }

  render() {
    const {nowTime} = this.state;

    return (
      <div className="Timer">
        <header className="Timer-header">
            {nowTime}
        </header>
        <p>
          <button onClick={() => this.handleTimerStop()}>stop</button>&nbsp;
          <button onClick={() => this.handleTimerStart()}>start</button>
        </p>
      </div>
    )
  }
}
