import React, {Component} from 'react';

class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number : 0,
        }
    }
    handleIncrease = () => {
        this.setState({number : this.state.number + this.props.argNum});
    };
    handleDecrease = () => {
        this.setState({number : this.state.number - this.props.argNum});
    };
    handleReset = () => {
        this.setState({number : 0});
    };
   render(){
    const text = "Counter";
       return (
           <div>
               <h1>{text}</h1>
               <p>{this.props.text}</p>
               <p>값 : {this.state.number}</p>
               <button onClick={this.handleIncrease}>+</button>
               <button onClick={this.handleDecrease}>-</button>
               <button onClick={this.handleReset}>reset</button>
           </div>
       );
   }
}

export default Counter;
