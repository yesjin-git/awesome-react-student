import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number : 0,
      number2 : 0
    }
  }

  handleIncrease = () => {
    this.setState({number : this.state.number + 1});
  };
  handleDecrease = () => {
    this.setState({number : this.state.number - 1});
  };
  handleReset = () => {
    this.setState({number : 0});
  };
 
  handleIncrease2 = () => {
    this.setState({number2 : this.state.number2 + 2});
  };
  handleDecrease2 = () => {
    this.setState({number2 : this.state.number2 - 2});
  };
  handleReset2 = () => {
    this.setState({number2 : 0});
  };
 
  render() {
    const text = "Counter";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter
            add = {this.handleIncrease}
            sub = {this.handleDecrease}
            reset = {this.handleReset}
            text = {text}
            num = {this.state.number}
          />
          <Counter
            add = {this.handleIncrease2}
            sub = {this.handleDecrease2}
            reset = {this.handleReset2}
            text = {text}
            num = {this.state.number2}
          />
        </header>
      </div>
    );
  }
}

export default App;