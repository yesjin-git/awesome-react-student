import React, {Component} from "react";

class Counter extends Component {
    state = {
        num: 0
    };

    /**
     * increase by props.step
     */
    handleInc = () => {
        this.setState({
            num: this.state.num + 1 * this.props.step
        });
    };

    /**
     * decrease by props.step
     */
    handleDec = () => {
        if(this.state.num > 0) {
            this.setState({
                num: this.state.num - 1 * this.props.step
            });
        }
    };

    /**
     * reset to zero
     */
    handleRst = () => {
        this.setState({
            num: 0
        });
    };

    render() {
        return <div>
                <h1 className="App-title">Counter</h1>
                    <p>값: {this.state.num}</p>
                    <p>
                        <button onClick={this.handleInc}>+</button>
                        <button onClick={this.handleDec}>-</button>
                        <button onClick={this.handleRst}>reset</button>
                    </p>
        </div>;
    }
}

export default Counter;