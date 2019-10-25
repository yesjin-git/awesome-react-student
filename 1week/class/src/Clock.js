import React, { Component } from 'react';


class Clock extends Component {

    state = {
        date: new Date(),
        buttonState: true,
    }

    handleReferesh = () => {
        this.setState({
            date: new Date(),
        })
    }

    componentDidMount = () => {
        setInterval(this.handleReferesh, 1000);
    }

    shouldComponentUpdate(prevProps, prevState) {
        if (this.state.buttonState === false) {
            return false;
        } else {
            return true;
        }
    }


    stopButton = () => {
        this.setState({
            buttonState: false,
        })
    }
    startButton = () => {
        this.setState({
            buttonState: true,
        })
    }

    render() {
        return (
            <div style={{ padding: "30px" }}>
                시계
                <p>
                    {this.props.text}
                </p>
                <p>
                    {this.state.date.toLocaleTimeString()}
                </p>
                {this.state.buttonState}
                <button onClick={this.stopButton}>stop</button>
                <button onClick={this.startButton}>start</button>
            </div>
        );
    }
}

export default Clock;