import React, {Component} from "react";

class Counter extends Component {
    render() {
        return (
            <div>
                <p> {this.props.a} </p>
                <button onClick={this.props.add}>add</button>
                <button onClick={this.props.sub}>sub</button>
                <button onClick={this.props.reset}>reset</button>
            </div>
        );
    }
}
export default Counter;