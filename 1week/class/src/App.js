//import는 외부의 파일을 불러 오는 명령어
import React, { Component } from "react";
//react를 사용하기 위해서 react 라이브러리에서 React와 Component를 호출함
import logo from "./logo.svg";
import "./App.css";
//css를 불러옴 파일 이름은 달라도 된다.
import Counter from "./Counter.js"; // 카운터를 표시해줄 컴포넌트 호출
import Clock from "./Clock.js";

//Component라는 react의 class를 상속 받음
class App extends Component {
  //jsx를 화면에 보여줄때 render함수를 호출해서 return을 해야 한다.
  //jsx는 js를 html처럼 사용할수 있게 해주는 언어?이다.
  render() {
    return (
      //jsx를 return 할때 두개 이상의 엘리먼트가 있으면
      //항상 감싸주어야 한다. 아래에서는 div로 엘리먼트를 감싸줌.
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*
          위에서 import 한 Counter 컴포넌트를 선언 props를 이용해서 
          handleIncrease와 handleDecrease함수와 number의 값을 전달 한다.
          props는 상위컴포넌트에서 하위컴포넌트로 데이터와 함수를 전달할때 사용 하는 속성으로 
          props로 데이터를 받은 컴포넌트에서는 데이터 변경이 불가 하다.
        */}
          <Counter countNum={1} />

          <Counter countNum={2} />

          <Clock text={"Timer"} number={0} />
        </header>
      </div>
    );
  }
}

//외부에서 import로 불러오기 위해서는 export를 해줘야 한다.
//default는 하나의 모듈 혹은 class만 export할때 써준다.
//https://enyobook.wordpress.com/2016/08/17/export-default%EC%97%90-%EB%8C%80%ED%95%B4/
export default App;
