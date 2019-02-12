import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainView from './container/MainView';
import ContentView from './component/contentView/ContentView';
import Navbar from './component/navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap css




const Main = () => (
  <Switch>
    <Route exact path="/" component={MainView}/>
    <Route path="/view/:id" component={ContentView}/>
  </Switch>
);

class App extends Component {  

  render() {
    return (
      <div className="">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
