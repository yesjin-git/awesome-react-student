import React, { Component } from 'react';
import './App.css';
import Counter from './Counter.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstnumber: 0,
      doublenumber: 0
    };
  }

  IncreaseHandle = () => {
    this.setState({ firstnumber: this.state.firstnumber + 1 })
  }

  DecreaseHandle = () => {
    this.setState({ firstnumber: this.state.firstnumber - 1 })
  }

  ResetHandle = () => {
    this.setState({ firstnumber: 0 })
  }

  DoubleIncreaseHandle = () => {
    this.setState({ doublenumber: this.state.doublenumber + 2 })
  }

  DoubleDecreaseHandle = () => {
    this.setState({ doublenumber: this.state.doublenumber - 2 })
  }

  DoubleResetHandle = () => {
    this.setState({ doublenumber: 0 })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <Counter num={this.state.firstnumber}
                    add={this.IncreaseHandle}
                    sub={this.DecreaseHandle}
                    reset={this.ResetHandle}
                    num2={this.state.doublenumber}
                    doubleadd={this.DoubleIncreaseHandle}
                    doublesub={this.DoubleDecreaseHandle}
                    doublereset={this.DoubleResetHandle}
            />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
