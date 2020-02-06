import React, { Component } from 'react'

export default class Clock extends Component {
    state = {
        timer_enabler: true,
        date: new Date()
    }
    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.setState({date:new Date()});
        },1000);
    }
    componentDidUpdate(prevProps, prevState){
        console.log("did updated")
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.date === nextState.date){
            return false;
        }
        return true;
    }
    handleStop= () =>{
        if (this.intervalId){
            clearInterval(this.intervalId);
            this.setState({timer_enabler:false})
        }
    }
    handleStart= () =>{
        if (this.state.timer_enabler === false){
            this.intervalId = setInterval(() => {
                this.setState({
                    date:new Date(),
                    timer_enabler:true
                });
            },1000);
        }
    }
    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
                <button onClick={this.handleStop}>stop</button>
                <button onClick={this.handleStart}>start</button>
            </div>
        )
    }
}
