import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap css를 사용하기 위해서 불러옵니다.
import Navbar from './component/navbar/Navbar.js';
import MainView from './container/MainView.js';
import Search from './container/Search.js';
import ContentView from './component/contentView/ContentView.js';
import {Switch, Route } from 'react-router-dom'//router를 사용하기 위해서 react router dom 불러옵니다.

//router를 감싸고 있는 함수형 컴포넌트
const Main =()=>(//라우팅할때 url이 중복되는것을 막기 위해서 switch 사용
		<Switch>      
			<Route exact path="/" component={MainView}></Route>     
			<Route path="/view/:id" component={ContentView}></Route>
      <Route path="/search" component={Search}></Route>
		</Switch>
	)

class App extends Component {
  render() { 
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
