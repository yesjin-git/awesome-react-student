import React, {Component} from "react";

class Clock extends Component {
    state = {
        date: new Date(),
        intervalId: undefined
    };

    /**
     * start this clock
     */
    start = () => {
        this.state.intervalId = setInterval(
            () => {
                this.setState(
                    {
                        date: new Date()
                    });
            }, 1000);
    };

    /**
     * stop this clock
     */
    stop = () => {
        clearInterval(this.state.intervalId);
    };

    componentDidMount() {
        this.start()
    }

    componentWillUnmount() {
        this.stop()
    }

    render() {
        return (
            <div>
                <p>{this.state.date.toLocaleTimeString()}</p>
                <p><button onClick={this.stop}>stop</button></p>
                <p><button onClick={this.start}>start</button></p>
            </div>
        );
    }
}

export default Clock