import React, { Component } from 'react';
import Counter from "./counter";
import Clock from "./Clock";

import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    number: 0,
    double_number: 0
  }

  handleDoubleIncrease = () => {
    this.setState({
      double_number: this.state.double_number + 2
    });
  }

  handleDoubleDecrease = () => {
    this.setState({
      double_number: this.state.double_number - 2
    })
  }

  handleDoubleReset = () => {
    this.setState({
      double_number: 0
    })
  }

  handlIncrease = () => {
    this.setState({
      double_number: this.state.number + 2
    });
  }

  handleDecrease = () => {
    this.setState({
      double_number: this.state.number - 2
    })
  }

  handleReset = () => {
    this.setState({
      number: 0
    })
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter
          handleDoubleIncrease={this.handleDoubleIncrease}
          handleDoubleDecrease={this.handleDoubleDecrease}
          handleDoubleReset={this.handleDoubleReset}
          double_number={this.state.double_number}

          handlIncrease={this.handlIncrease}
          handleDecrease={this.handleDecrease}
          handleReset={this.handleReset}
          number={this.state.number}
        />
        <Clock />
      </div>
    );
  };
}

export default App