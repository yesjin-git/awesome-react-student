//import는 외부의 파일을 불러 오는 명령어
import React, { Component } from "react";
//react를 사용하기 위해서 react 라이브러리에서 React와 Component를 호출함
import logo from "./logo.svg";
import "./App.css";
//css를 불러옴 파일 이름은 달라도 된다.
import Counter from "./Counter";
import Clock from "./Clock";

//1week homework
//Component라는 react의 class를 상속 받음
class App extends Component {
  state = {
    pnum: 0
  };
  handlePInc = () => {
    this.setState({
      pnum: this.state.pnum + 1
    });
  };
  handlePDnc = () => {
    this.setState({
      pnum: this.state.pnum - 1
    });
  };
  handlePReset = () => {
    this.setState({
      pnum: 0
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Counter
            pInc={this.handlePInc}
            pDnc={this.handlePDnc}
            pReset={this.handlePReset}
            number={this.state.pnum}
          />
          <Clock />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
//외부에서 import로 불러오기 위해서는 export를 해줘야 한다.
//default는 하나의 모듈 혹은 class만 export할때 써준다.
//https://enyobook.wordpress.com/2016/08/17/export-default%EC%97%90-%EB%8C%80%ED%95%B4/
export default App;
