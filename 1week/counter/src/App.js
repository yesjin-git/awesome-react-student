import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter.js";


//Component라는 react의 class를 상속 받음
class App extends Component {
  //상속
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      numbertwo: 0
    };
  }

  HandleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
  HandleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };
  Zero = () => {
    this.setState({
      number: this.state.number * 0
    });
  };

  HandleIncreasetwo = () => {
    this.setState({
      numbertwo: this.state.numbertwo + 2
    });
  };
  HandleDecreasetwo = () => {
    this.setState({
      numbertwo: this.state.numbertwo - 2
    });
  };
  Zerotwo = () => {
    this.setState({
      numbertwo: this.state.numbertwo * 0
    });
  };
  render() {
    // 꼭 필요한 함수
    return (
      // render 함수 안에서 꼭 return 해야함.
      <div className="App">
        <Counter
          num={this.state.number}
          add={this.HandleIncrease}
          minus={this.HandleDecrease}
          reset={this.Zero}
        />
        <Counter
          num={this.state.numbertwo}
          add={this.HandleIncreasetwo}
          minus={this.HandleDecreasetwo}
          reset={this.Zerotwo}
        />
      </div>
    );
  }
}

export default App; // 여러개 할 때는 {}
