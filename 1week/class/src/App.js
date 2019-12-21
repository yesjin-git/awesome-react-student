    //import는 외부의 파일을 불러 오는 명령어
    import React, { Component } from 'react'; 
    //react를 사용하기 위해서 react 라이브러리에서 React와 Component를 호출함 
    import logo from './logo.svg';
    import './App.css';
    //css를 불러옴 파일 이름은 달라도 된다.
    import Counter from "./Counter";
    import Clock from "./Clock";

    //Component라는 react의 class를 상속 받음
    class App extends Component {
      state = {
        pnum : 0
      };
      handlePInc = () => {      // 자식도 변경할 수 있게 허락해주기 위하여 함수 생성
        this.setState({
          pnum: this.state.pnum + 2
        });
      };
      handlePDec = () => {      // 자식도 변경할 수 있게 허락해주기 위하여 함수 생성
        this.setState({
          pnum: this.state.pnum - 2 
        });
      };
      handlePZero = () => {      // 자식도 변경할 수 있게 허락해주기 위하여 함수 생성
        this.setState({
          pnum: 0
        });
      };
      //jsx를 화면에 보여줄때 render함수를 호출해서 return을 해야 한다.
      //jsx는 js를 html처럼 사용할수 있게 해주는 문법이다. 아래와 같다
      render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
              <Counter number={1} />
              <Counter number={2} />
              <Clock />
            </header>
          </div>
        );
      }
    }
  //외부에서 import로 불러오기 위해서는 export를 해줘야 한다.
  //default는 하나의 모듈 혹은 class만 export할때 써준다.
  //https://enyobook.wordpress.com/2016/08/17/export-default%EC%97%90-%EB%8C%80%ED%95%B4/
    export default App;
