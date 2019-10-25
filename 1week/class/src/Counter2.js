import React, { Component } from "react";
//react를 사용하기 위해서 react 라이브러리에서 React와 Component를 호출함

//Counter 컴포넌트를 생성 하고 Component를 상속
class Counter2 extends Component {
  //jsx를 화면에 그려주는 함수
  render() {
    return (
      //두개 이상의 엘리먼트를 return 할때는 반드시 div로 감싸야 한다.
      <div>
        <h1>Counter2</h1>
        <div>값: {this.props.number2}</div>
        <button onClick={this.props.handleIncrease2}>+</button>
        <button onClick={this.props.handleDecrease2}>-</button>
        <button onClick={this.props.clearFunc} >초기화</button>
      </div>
    );
  }
}

export default Counter2;
