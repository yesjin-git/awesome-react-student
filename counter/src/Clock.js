import React, {Component} from "react";

class Clock extends Component {
    state = {
        date: new Date()
    };

    //CB 호출 순서를 파악하자.
    componentDidMount() {
        this.intervalId = setInterval(
            () => {
                this.setState({date: new Date()});
            }, 1000);
    }

    componentDidUpdate() {
        console.log("update");
    }

    render() {
        console.log("render");
        return (
        <div>
            Clock {this.state.date.toLocaleTimeString()}
        </div>);
    }
}

export default Clock;