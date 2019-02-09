import React, { Component } from 'react';

//라우터 쓰는 라이브러리 가져옴.
import { Router, Switch, Link } from 'react-router-dom';
import Main from './Main.js'
import Search from './Search.js'
import SearchResult from './SearchResult.js'

const content = () => {
  return(
    <Switch> 
      <Router exact path="/" Component={Main} />
      <Router exact path="/search" Component={Search} />
      <Router exact path="/search/:id" Component={SearchResult} />
    </Switch>
  );
};

class App extends Component {
  render() { 
    return (
      <div className="App">
        <div>
          <span><Link to="/">main</Link></span>
          <br/>
          <span><Link to="/search">search</Link></span>
          <br/>
          <span><Link to="/search/13">search id</Link></span>
        </div>
        <content />

        {/* <Nav>
            <div>Nav text</div>
            
          </Nav>
          
          <FuncComp>
            <div>FuncComp text</div>  
          </FuncComp> */}
      </div>
    );
  }
}

export default App;
