import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import News from './news';
import { Switch, Route, Link } from "react-router-dom";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/news" component={News} />
      <Route exact path="/" component={Nav} />
    </Switch>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">index</Link> /
          <Link to="/news">news</Link>
        </nav>
        <p>allways</p>
        <Content />
      </header>
    </div>
  );
}

export default App;
