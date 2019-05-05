import React, { Component } from 'react'

export default class clock extends Component {
    state = {
        date:new Date()

    }
    startTime=() =>{
        this.interval = setInterval(() =>{
            this.setState({date:new Date()});
        },1000);
    }
	stopTime=() =>{
         this.setState({date:new Date()});
    }
    componentDidMount(){
        /*this.startTime();*/
    }
  render() {
    return (
      <div>
        <p>
            {this.state.date.toLocaleString()}
        </p>
		<button onClick={this.stopTime}>stop</button>
		<button onClick={this.startTime}>run</button>
      </div>
    )
  }
}
