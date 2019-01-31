import React, { Component } from 'react';
import './App.css';
import Counter from "./Counter.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        number: 0,
        number2: 0
    }
  }

  plus = () => {
    this.setState({
      number: this.state.number +1
    })
  }
  
  minus = () => {
    this.setState({
      number: this.state.number -1
    })
  }

  reset = () => {
    this.setState({
      number: this.state.number *0
    })
  }

  plus2 = () => {
    this.setState({
      number2: this.state.number2 +2
    })
  }
  
  minus2 = () => {
    this.setState({
      number2: this.state.number2 -2
    })
  }

  reset2 = () => {
    this.setState({
      number2: this.state.number2 *0
    })
  }
  
  render() {

    return (
      <div className="App">
        <Counter sub={this.minus} add={this.plus} set={this.reset} num={this.state.number}/>
        <Counter sub={this.minus2} add={this.plus2} set={this.reset2} num={this.state.number2}/>
      </div>
    );
  }
}

export default App;