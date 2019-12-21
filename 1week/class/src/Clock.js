import React, {Component} from "react"

class Clock extends Component {
    state = {
        date : new Date()
    };

    // 1초에 한 번씩 state 새롭게 그려라!
    componentDidMount() {
        this.intervalId = setInterval(() => {
                this.setState({ date: new Date() });
            }, 1000);
    }

    componentDidUpdate() {
        console.log("update");
    }

    startClock() {
        this.intervalId = setInterval(() => {
                this.setState({ date: new Date() });
            }, 1000);
    }

    stopClock() {
        this.intervalId = clearInterval(this.intervalId);
    }

    render() {
        return (
        <div>
            Clock
            <p>
            {this.state.date.toLocaleTimeString()}
            </p>
            <p>
            {/* 시계 멈추기, 다시 시작하기는 구현하지 못했습니다...
                <button onClick={this.stopClock}>stop</button>
                <button onClick={this.startClock}>start</button> */}
            </p>
        </div>
        );
    }
}

export default Clock;