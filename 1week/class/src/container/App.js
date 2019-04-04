import React, { Component } from 'react';
import './App.css';
import Counter from '../components/Counter';
import LocalTime from '../components/LocalTime';
import 'tachyons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: 1
    }
  }

  chooseMenu = (event) => {
    if(event.target.textContent === "Counter") this.setState({menu: 1});
    else if(event.target.textContent === "Local Time") this.setState({menu: 2});
    
  }


  render() {

   
    if(this.state.menu === 1) {
      return (
        <div className="App">
            
            <div className="menu bb b--light-purple bw2">
              <div className="menuBtn tc"><button className="ma3 br-pill bw2 b--light-purple b" onClick={this.chooseMenu}>Counter</button></div>
              <div className="menuBtn tc"><button className="ma3 br-pill bw2 b--light-purple b" onClick={this.chooseMenu}>Local Time</button></div>
            </div>
            
          
          
          <div className="App-header1">
          
            <div className="counter1 tc fl w-50">
              <h2 className="f1 light-green">Counter1</h2>
              <Counter interval={1}/>   
            </div>

            

            <div className="counter2 tc fl w-50">
              <h2 className="f1 light-green">Counter2</h2>
              <Counter interval={2}/>   
            </div>
           
          </div>
        </div>
        );
    } else if(this.state.menu === 2) {
      return (
        <div className="App">

            <div className="menu bb b--light-purple bw2">
              <div className="menuBtn tc"><button className="ma3 br-pill bw2 b--light-purple b" onClick={this.chooseMenu}>Counter</button></div>
              <div className="menuBtn tc"><button className="ma3 br-pill bw2 b--light-purple b" onClick={this.chooseMenu}>Local Time</button></div>
            </div>
            
          
          
          <div className="App-header2">
          
            <LocalTime/>
           
          </div>
        </div>
        );
    }
    
        
      
     
    
     
    
  }
}

export default App;
