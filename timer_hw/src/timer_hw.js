import React, {Component} from 'react';

class Timer extends Component {
    render() {
        return (
        <div> 
            <h3> {this.props.time} </h3>
            <p> <button onClick={this.props.start}> start </button> </p>
            <p> <button onClick={this.props.stop}> stop </button> </p>
        </div>
        );
    }
}

export default Timer;