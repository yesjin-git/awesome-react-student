import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from  "./counter_hw.js"

class App extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      number_one: 0,
      number_two: 0
    };
  }

  handleIncrease_upper = () => {this.setState({number_one: this.state.number_one + 1});}
  handleDecrease_upper = () => {this.setState({number_one: this.state.number_one - 1});}
  handleReset_upper = () => {this.setState({number_one: 0});}
  
  handleIncrease_lower = () => {this.setState({number_two: this.state.number_two + 2});}
  handleDecrease_lower = () => {this.setState({number_two: this.state.number_two - 2});}
  handleReset_lower = () => {this.setState({number_two: 0});}

  render() {
    const text = "Counter"
    const value = "값:"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          {/* First Counter */}
          <h2> {text} </h2>
          
          <Counter 
            add = {this.handleIncrease_upper}
            sub = {this.handleDecrease_upper}
            reset = {this.handleReset_upper}
            value = {value}
            num={this.state.number_one}
          />


          {/* Second Counter */}
          <h2> {text} </h2>

          <Counter 
            add = {this.handleIncrease_lower}
            sub = {this.handleDecrease_lower}
            reset = {this.handleReset_lower}
            value = {value}
            num={this.state.number_two}
          />

        </header>
      </div>
    );
  }
}

export default App;
