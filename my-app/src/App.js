import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";

const Home = () => <div style={{backgroundColor:"white",width:"100%",height:"100vh",lineHeight:"100vh",color:"black"}}>Home</div>


const Search = () =>
  <div style={{backgroundColor:"blue"}}>Search</div>
  

const Profile = () => <div style={{backgroundColor:"red"}}>Profile </div>


const Main = () =>{
  return (  
    <>
    <Switch>  
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/profile" component={Profile} /> 
    </Switch>  
   

    </>
  )

}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Navi">
          <span> 
            <Link to="/">Home</Link> 
            <Link to="/search">Search</Link>
            <Link to="/profile">Profile</Link>
          </span>
        </div>
        <Main/>  
      </header>
    </div>
  );
}

export default App;
