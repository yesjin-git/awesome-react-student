import React, { Component } from 'react';
import Counter from './Counter.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      one: 0,
      two: 0
    };
  }

  handleIncrease = (num, extra) => {
    this.setState({
      [num]: this.state[num] + extra
    });
  }

  handleDecrease = (num, extra) => {
    this.setState({
      [num]: this.state[num] - extra
    });
  }

  handleReset = (num) => {
    this.setState({
      [num]: 0
    });
  }

  render() {
    const { one, two } = this.state;
    const { handleIncrease, handleDecrease, handleReset } = this;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter num={one} add={() => handleIncrease('one', 1)} sub={() => handleDecrease('one', 1)} reset={() => handleReset('one')}/>
          <Counter num={two} add={() => handleIncrease('two', 2)} sub={() => handleDecrease('two', 2)} reset={() => handleReset('two')}/>
        </header>
      </div>
    );
  }
}

export default App;
