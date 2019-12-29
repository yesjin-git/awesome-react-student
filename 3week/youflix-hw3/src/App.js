import React, {Component} from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./component/navbar/Navbar"
import MainView from "./container/MainView"
import Game from "./container/Game"
import Search from "./container/Search"
import ContentView from "./component/contentView/ContentView"


import {Switch, Route} from 'react-router-dom'

const Main = () => (
    <Switch>
          <Route exact path="/" component={MainView}/>
          <Route path="/view/:id" component={ContentView} />
          <Route path="/search" component={Search}/>
          <Route path="/game" component={Game}/>
    </Switch>
)

export default class App extends Component {
      render() {
            return (
                <div className="App">
                    <Navbar/>
                    <Main/>
                </div>
            )
      }
}





