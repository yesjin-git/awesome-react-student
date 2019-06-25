import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap css를 사용하기 위해서 불러옵니다.
import Navbar from './component/navbar/Navbar.js';
import MainView from './container/MainView.js';
import ContentView from './component/contentView/ContentView.js';
import {Switch, Route } from 'react-router-dom'//router를 사용하기 위해서 react router dom 불러옵니다.
import Search from './container/Search';

//router를 감싸고 있는 함수형 컴포넌트
const Main =()=>(//라우팅할때 url이 중복되는것을 막기 위해서 switch 사용
		<Switch>
      {/* 
          "/" 을 가지는 /serach, /view/:id로 이동을 하면 "/"이 포함되어있기 때문에 MainView또한 렌더링이 됩니다.
          이것을 막기 위해서 exact속성을 추가 합니다.
      */}
			<Route exact path="/" component={MainView}></Route>
      {/*
          "/view/:id"에 url이 이동했을때 ContentView 컴포넌트를 렌더링합니다.
          여기에서 ":id" 이 부분은 url에 변화가 필요할때 사용하는 방식 입니다.
          ":이름"" 이렇게 설정하면 url을 /view/123, /view/555 라고 해도 ContetnView 컴포넌트를 렌더링하게됩니다.
      */}
			<Route  path="/view/:id" component={ContentView}></Route>

      <Route exact path="/search" component={Search}></Route>

		</Switch>
	)

class App extends Component {
  render() { 
    return (
      <div className="App">
        {/* 네이게이션바 컴포넌트*/}
        <Navbar />
        {/* 라우터를 가지고 있는 컴포넌트*/}
        <Main />
      </div>
    );
  }
}

export default App;
