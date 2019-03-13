import React, { Component } from 'react';

export default class Counter extends Component {
  constructor (props) {
    super(props);

    this.state = {
      number: 0
    };
  }

  // props로 App에서 증감값을 넘겨주면 그에 따른 연산 처리 (handle)를 해준다.
  handleChange = (value) => {
    this.setState({
        number: this.state.number + value
    });
  }

  reset = () => {
    this.setState({
      number: 0
    });
  }

  render() {
    return (
      <div className="Counter">
        <header className="Counter-header">
          값 : {this.state.number}
        </header>
        <p>
          <button onClick={() => this.handleChange(this.props.valueNum)}>+</button>&nbsp;
          <button onClick={() => this.handleChange(-this.props.valueNum)}>-</button>&nbsp;
          <button onClick={() => this.reset()}>초기화</button>
        </p>
      </div>
    )
  }
}