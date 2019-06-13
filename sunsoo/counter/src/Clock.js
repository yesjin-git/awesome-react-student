import React from 'react'

class Clock extends React.Component {
    state = {
        now: new Date(),
        startButtonDisable: false
    }
    componentDidMount() {
        this.clockStart();
    }
    handleInc = () => {
        this.setState({ now: new Date() });
    }
    componentDidUpdate() {
        console.log(this.state.now);
    }
    clockStop = () => {
        clearInterval(this.intervalId);

        this.startButtonDisable = false;
        this.setState({startButtonDisable:false})

    }
    clockStart = () => {
        if(!this.startButtonDisable){
            this.intervalId = setInterval(this.handleInc, 1000);
        }
        this.startButtonDisable = true;
    }
    render() {
        return (
            <div>
                <p>{this.state.now.toLocaleTimeString()}</p>
                <button onClick={this.clockStop}>stop</button>
                <button onClick={this.clockStart}>start</button>
            </div>
        );
    }
}

export default Clock;