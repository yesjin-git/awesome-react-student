import React, { Component } from 'react';

class Clock extends Component {

    state = {
        date: new Date()
    }

    handleTimeStart = () => {
        this.intervalId = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
        console.log('componentDidMount');
    }

    handleTimeStop = () => {
        this.setState({ date: new Date() });
        clearInterval(this.intervalId);
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        console.log('update');
    }

    render() {
        console.log('render');
        return (
            <>
                <div style={{ marginTop: "200px" }}>
                    <h4>Clock</h4>
                    {this.state.date.toLocaleTimeString()}
                    {/* toLocaleTimeString 크롬꺼를 읽어와서 자동으로 언어 설정됨*/}
                </div>
                <div style={{ marginTop: "30px" }}>
                    <button onClick={this.handleTimeStart}>start</button>
                    <button onClick={this.handleTimeStop}>stop</button>
                </div>
            </>
        );
    }
}

export default Clock;

//Mount : state => render => Mount =>
//update : 