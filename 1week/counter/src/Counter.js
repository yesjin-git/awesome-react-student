import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        };
    }

    handleIncrease = (increaseNum) => {
        const { number } = this.state;

        this.setState({
            number : number + increaseNum
        });
    }

    handleDecrease = (decreaseNum) => {
        this.setState(
            ({ number }) => ({
                number: number - decreaseNum
            })
        );
    }

    reset = () => {
        this.setState({
            number: 0
        });
    }

    render() {
        return (
            <div className="Counter">
                <header className="Counter-header">
                    값 : {this.state.number}
                </header>
                <p>
                    <button variant="dark" onClick={() => this.handleIncrease(this.props.valueNum)}>+</button>&nbsp;
                    <button onClick={() => this.handleDecrease(this.props.valueNum)}>-</button>&nbsp;
                    <button onClick={() => this.reset()}>초기화</button>
                </p>                
            </div>
        )
    }
}

export default Counter;