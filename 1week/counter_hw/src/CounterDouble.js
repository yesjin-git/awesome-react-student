import React, {Component} from 'react';

class CounterDouble extends Component {
    render() {
        return (
            <div>
                counter
                <p>값 : {this.props.number}</p>
                <p>
                    <button onClick={this.props.add}>+</button>
                    <button onClick={this.props.minus}>-</button>
                    <button onClick={this.props.reset}>reset</button>
                </p>
            </div>
        );
    }
}

export default CounterDouble;