import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link} from 'react-router-dom';
import Main from './Main';
import Search from './Search';
import SearchResult from './SearchResult';

const Content = () => {
  return (    
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/search" component={Search}/>
      <Route path="/search/:id" component={SearchResult}/>
    </Switch>
  );

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <span>
            <Link to="/" >main</Link>
          </span>
          <span>
            <Link to="/search" >search</Link>
          </span>
          <span>
            <Link to="/search/2" >searchresult</Link>
          </span>
        </div>
        <Content />
      </div>
    );
  }
}

export default App;
