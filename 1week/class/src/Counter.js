import React, { Component } from "react";
//react를 사용하기 위해서 react 라이브러리에서 React와 Component를 호출함

//Counter 컴포넌트를 생성 하고 Component를 상속
class Counter extends Component {
  //jsx를 화면에 그려주는 함수
  state = {
    number: 0
  };
  
  plusFunc = () => {
    this.setState({
      number : this.state.number + this.props.ss
    }); //이것의 상태를 바꾸겠다
  }

  maFunc = () => {
    this.setState({
      number : this.state.number - this.props.ss
    });
  }

  clearFunc = () => {
    this.setState({
      number : this.state.number = 0
    });
  }
  

  render() {
    return (
      //두개 이상의 엘리먼트를 return 할때는 반드시 div로 감싸야 한다.
      <div>
        <h1>Counter</h1>
        <div>값: {this.state.number} </div>
        <button onClick={this.plusFunc}>+</button>
        <button onClick={this.maFunc}>-</button>
        <button onClick={this.clearFunc} >초기화</button>
      </div>
    );
  }
}

export default Counter;
