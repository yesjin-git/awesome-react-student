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
  // componentDidMount() {
  //   console.log("mounted");
  //   this.intervalid = setInterval(this.handleIncrease, 1000);
  // }

  // componentDidUpdate() {
  //   console.log("updated!");
  // }

  //0은 애초에 mount될 때 주어져있던 것이라서 nextState는 사실상 1부터 인식한다.
  //하위 컴포넌트 중에서 업데이트할 필요 없는 게 있다면 이 메소드 활용하여 최적화 가능.
  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextState.number % 5 === 0) {
  //     return false;
  //   }

  //   return true;
  // }



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
              <Counter id={1}/>   
            </div>

            

            <div className="counter2 tc fl w-50">
              <h2 className="f1 light-green">Counter2</h2>
              <Counter id={2}/>   
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
