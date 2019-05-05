import React, { Component } from 'react'; 

class Counter2 extends Component{
    state = {
        number:this.props.number
      };
      handleIncrease = () => {
		this.setState({number:this.state.number + 2});
	  }
	  handleDecrease = () => {
		this.setState({number:this.state.number - 2});
	  }
      resetBtn = () => {
        this.setState({number:this.props.number});
      }
    render(){
        return(
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleIncrease}>add1</button>
                <button onClick={this.handleDecrease}>sub</button>
                <button onClick={this.resetBtn}>reset</button>
            </div>
        );
    }
}

export default Counter2;

