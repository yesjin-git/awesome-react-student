import React, { Component } from 'react'

export default class clock extends Component {
  state = {
      date : new Date()
  };
  
  startTime = () => {
      this.interval = setInterval(() => {
          this.setState({ date: new Date() });
      }, 1000);
  };

  // 시간 멈추는 방법 잘 모르겠습니다.ㅜㅜ
  stopTime = () => {
    
};

  componentDidMount() {
    //this.startTime();
  }
    render() {
    return (
      <div>
        <p>
        {this.state.date.toLocaleTimeString()}
        </p>
        <button onClick={this.startTime}>RUN</button>
        <button onClick={this.stopTime}>STOP</button>
      </div>
    )
  }
}
