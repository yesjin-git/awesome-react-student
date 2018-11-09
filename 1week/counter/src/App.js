import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      number: 0
    };
  }

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    );
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter handleIncrease={this.handleIncrease} handleDecrease={this.handleDecrease} number={this.state.number}/>
        </header>
      </div>
    );
  }
}

export default App;
