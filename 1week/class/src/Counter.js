import React, { Component } from "react";
//react를 사용하기 위해서 react 라이브러리에서 React와 Component를 호출함

//Counter 컴포넌트를 생성 하고 Component를 상속
class Counter extends Component {
  //jsx를 화면에 그려주는 함수
  render() {
    const { mode } = this.props;
    return (
      //두개 이상의 엘리먼트를 return 할때는 반드시 div로 감싸야 한다.

      <>
        <div>
          <h1>Counter</h1>
          {
            this.props.mode === 1 && <div>값: {this.props.number}</div>
          }
          {
            this.props.mode === 2 && <div>값: {this.props.number2}</div>
          }
          <button onClick={e => this.props.handleIncrease(mode)}>+</button>
          <button onClick={e => this.props.handleDecrease(mode)}>-</button>
          <button onClick={e => this.props.resetCounter(mode)}>reset</button>
        </div>
      </>

    );
  }
}

export default Counter;
