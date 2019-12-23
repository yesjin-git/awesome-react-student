import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
import CounterDouble from "./CounterDouble.js";
import AnsCounter from "./AnsCounter.js";

class App extends Component {
    //CounterDouble 컴포넌트는 App.js에서 값을 전달해보기
    state={
        doubleNum:0
    };
    doubleAdd=()=>{
        this.setState({
            doubleNum:this.state.doubleNum+2
        });
    };
    doubleMinus=()=>{
        if(this.state.doubleNum>0){
            this.setState({
                doubleNum:this.state.doubleNum-2
            });
        }

    };

    defaultDoubleNum=()=>{
        this.setState({
            doubleNum:0
        })
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Counter number={0}/>
                    <CounterDouble number={this.state.doubleNum} add={this.doubleAdd} minus={this.doubleMinus} reset={this.defaultDoubleNum}/>
                    <h2>--------------------------</h2>
                    <AnsCounter interval={1}/>
                    <AnsCounter interval={2}/>
                </header>
            </div>
        );
    }

}

export default App;
