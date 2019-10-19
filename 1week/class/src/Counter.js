import React, { Component } from "react";
//react를 사용하기 위해서 react 라이브러리에서 React와 Component를 호출함

//Counter 컴포넌트를 생성 하고 Component를 상속
class Counter extends Component {

state = {
  counterNum : 0
}

handleIncrease = () => {
    counterNum = counterNum + 1;
}

//jsx를 화면에 그려주는 함수
  render() {
    return (
      //두개 이상의 엘리먼트를 return 할때는 반드시 div로 감싸야 한다.
      <div>
        <h1>Counter</h1>
        <div>값: {this.props.number}</div>
        <button onClick={this.props.handleIncrease}>+</button>
        <button onClick={this.props.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
