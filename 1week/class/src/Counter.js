import React, { Component } from "react";
//react를 사용하기 위해서 react 라이브러리에서 React와 Component를 호출함

//Counter 컴포넌트를 생성 하고 Component를 상속
class Counter extends Component {
  /*
  //constructor는 컴포넌트가 마운트(생성)될때 데이터를 초기화 시켜 주고 싶을때 사용한다.
  //react에서는 state를 contructor에서 선언 해주어야 한다.
  constructor(props) {
    super(props);
    //상속을 받을때 this를 사용하기 위해서는 super를 선언해준다.
    //super를 사용하면 부모 클래스의 constructor를 호출해서 데이터를 초기화 해준다.

    //number의 값을 state로 선언한다.
    //state는 상태를 저장하는 변수로 현재 컴포넌트에서 데이터를 관리하거나 ui부분의 상태를 관리할때 사용
    this.state = {
      number: 0
    };
  }

  */

  state = {
    number: 0
  };

  //함수 실행시 number값이 1 증가
  handleIncrease = () => {
    /*
      //this.setState는 state의 값을 변경할때 사용 하는 함수
      //this.state.number 에 직접 데이터를 변경할 수 없다.
      this.setState({
        number: number + 1
      });
    */

    this.setState(({ number }) => ({
      number: number + this.props.countNum
    }));
  };

  //함수 실행시 number2값이 2 감소
  handleDecrease = () => {
    /*
    const { number2 } = this.state;

    this.setState({
      number2: number2 + 2
    });
    */

    this.setState(({ number }) => ({
      number: number - this.props.countNum
    }));
  };

  //함수 실행시 number값 0으로 리셋
  handleReset = () => {
    this.setState(({ number }) => ({
      number: 0
    }));
  };

  //jsx를 화면에 그려주는 함수
  render() {
    return (
      //두개 이상의 엘리먼트를 return 할때는 반드시 div로 감싸야 한다.
      <div>
        <h1>Counter!</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

export default Counter;
