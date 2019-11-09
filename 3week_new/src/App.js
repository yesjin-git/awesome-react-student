import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from "react-router-dom"; 



const Home = () => (
  <div style={{
    backgroundColor:"white", 
    width:"100%", 
    height:"50vh",
    color:"#000"
    }}>
    Home
  </div>
)

const Search = () => (
  <div style={{
    backgroundColor:"blue",
    width:"100%", 
    height:"50vh",
    color:"#000"
    }}>
    Search
  </div>
)

const Profile = () => (
  <div style={{
    backgroundColor:"red",
    width:"100%", 
    height:"50vh",
    color:"#000"
    }}>
    Profile
  </div>
)

// path = url
// exact를 설절 안해두면 계속 Home이 나온다 
const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/profile" component={Profile} />
    </Switch>
  )
}
//함수형 컴포넌트 권장
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Nav">
          <span>
            <Link to="/" style={{
              color:"#fff",textdecoration:"none"
            }}>Home</Link>
          </span>
          <span>
            <Link to="/search">Search</Link>
          </span>
          <span>
            <Link to="/profile">Profile</Link>
          </span>
        </div>
        <Main />
      </header>
    </div>
  );
}

export default App;
