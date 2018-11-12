import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>값: {this.props.number}</div>
        <button onClick={this.props.handleIncrease}>+</button>
        <button onClick={this.props.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;