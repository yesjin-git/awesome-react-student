import React, {Component} from 'react';

class Counter extends Component {
    // this.props.number=10;
    state={
        num:this.props.number
    }
    add=()=>{
        this.setState({
            num:this.state.num+1
        });
    };
    minus=()=>{
        if(this.state.num>0){
            this.setState({
                num:this.state.num-1
            });
        }
    }
    defaultReset=()=>{
        this.setState({
            num:this.props.number
        });
    }
    render() {
        return (
            <div>
                counter
                <p>값 : {this.state.num}</p>
                <p>
                    <button onClick={this.add}>+</button>
                    <button onClick={this.minus}>-</button>
                    <button onClick={this.defaultReset}>reset</button>
                </p>
            </div>
        );
    }
}

export default Counter;
