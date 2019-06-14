import React, { Component } from "react";

class Counter extends Component {
  static defaultProps = {
    variation: 1
  }

  state = {
    num: 0
  };

  increment = () => {
    this.setState(({ num }) => ({
      num: num + this.props.variation
    }));
  }

  decrement = () => {
    this.setState(({ num }) => ({
      num: num - this.props.variation
    }));
  }

  reset = () => {
    this.setState(({ num }) => ({
      num: 0
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>값: {this.state.num}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Counter;
