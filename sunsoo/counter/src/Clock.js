import React from 'react'

class Clock extends React.Component {
    state = {
        now: new Date()
    }
    componentDidMount() {
        this.intervalId = setInterval(this.handleInc, 1000);
    }
    handleInc = () => {
        this.setState({ now: new Date() });
    }
    componentDidUpdate() {
        console.log(this.state.now);
    }
    // shouldComponentUpdate() {
    //     return false;
    // }
    render() {
        return (
            <div>{this.state.now.toLocaleTimeString()}</div>
        );
    }
}

export default Clock;