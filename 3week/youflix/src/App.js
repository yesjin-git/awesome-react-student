import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './component/navbar/Navbar.js';
import MainView from './container/MainView.js';
import Search from './container/Search.js';
import ContentView from './component/contentView/ContentView.js';
import { NavLink, Switch, Route } from 'react-router-dom'

const Main =()=>(
		<Switch>
			<Route exact path="/" component={MainView}></Route>
			<Route exact path="/search" component={Search}></Route>
			<Route excat path="/view/:id" component={ContentView}></Route>
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
