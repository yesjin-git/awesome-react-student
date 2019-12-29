import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom'


function Home() {
  return (
      <div>
        Home
      </div>
  )
}

const Apple = () => (
  <div>
    Apple
  </div>
)


//Router는 화면을 새로 랜더링해주는 개념이다.
// 모든 경우를 포함하는 녀석에게는 exact 를 사용하면, 정확한 path에서 동작한다.

const Main = () => (
  <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/apple' component={Apple} />
  </Switch>
)

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Main/>
          -------------------------------------
          <div>
              <span>
                  <Link to='/'>
                      home
                  </Link>
              </span>
              <span>
                  <Link to='/apple'>
                      apple
                  </Link>
              </span>
          </div>

          <Main/>
        </header>
      </div>
  )
}

export default App;
