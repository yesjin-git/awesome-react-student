import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AnsCounter extends Component {
    state={
        number:0
    };
    //함수형 setState 활용 답안
    //https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b
    //https://www.vobour.com/함수형-setstate가-리액트-react-의-미래이다-functiona
    handleIncrease=()=>{
        this.setState(({number})=>({
            // number:number+1
            number:number+this.props.interval
        }));
    }
    handleDecrease=()=>{
        if(this.state.number>0){
            this.setState(({number})=>({
                number:number-this.props.interval
            }));
        }
    }
    handleReset=()=>{
        this.setState({
            number:0
        });
    }


    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>값:{this.state.number}</p>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

//propTypes 숫자로 제한
AnsCounter.propTypes={
    interval:PropTypes.string.isRequired
}

export default AnsCounter;