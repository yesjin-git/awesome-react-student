import React, { Component } from 'react';

class Counter extends Component {
    render(){
        return(
            <div>
            <p>
                {this.props.num}
                <button onClick={this.props.add}>+</button>
                <button onClick={this.props.sub}>-</button>
                <button onClick={this.props.reset}>reset</button>
            </p>
            <p>
                {this.props.num2}
                <button onClick={this.props.doubleadd}>+</button>
                <button onClick={this.props.doublesub}>-</button>
                <button onClick={this.props.doublereset}>reset</button>
            </p>
            </div>
        )
    }
}

export default Counter;