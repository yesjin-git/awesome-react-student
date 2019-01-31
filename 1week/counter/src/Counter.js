import React, { Component } from "react";

//Counter 컴포넌트를 생성 하고 Component를 상속
class Counter extends Component {

  //jsx를 화면에 그려주는 함수
  render() {
    return (
      //두개 이상의 엘리먼트를 return 할때는 반드시 div로 감싸야 한다.
      <div>
        <p>{this.props.num}</p>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>
        <button onClick={this.props.reset}>reset</button>
      </div>
    );
  }
}

export default Counter;
