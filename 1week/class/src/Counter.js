import React, { Component } from "react";

class Counter extends Component {
  state = {
    num: 0
  };

  //this, binding
  handleInc = () => {
    this.setState({
      num: this.state.num + 2
    });
  };
  handleDnc = () => {
    this.setState({
      num: this.state.num - 2
    });
  };
  handleReset = () => {
    this.setState({
      num: 0
    });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>값 : {this.props.number}</p>
        <p>
          <button onClick={this.props.pInc}>+</button>
          <button onClick={this.props.pDnc}>-</button>
          <button onClick={this.props.pReset}>Reset</button>
        </p>
        <h1>Counter</h1>
        <p>값 : {this.state.num}</p>
        <p>
          <button onClick={this.handleInc}>+</button>
          <button onClick={this.handleDnc}>-</button>
          <button onClick={this.handleReset}>Reset</button>
        </p>
      </div>
    );
  }
}

export default Counter;
