import React, {Component} from "react";

class Clock extends Component {
    state = {date: new Date()};
    handleRefresh = () => {
        this.setState({date: new Date()});
};
    timeStart = () => {
        this.intervalId = setInterval(() => {
            this.handleRefresh();
            }, 1000);

}

    timeStop = () => {
       clearInterval(this.intervalId );

}






    componentDidMount(){ //최초 실행시
        //console.log("mount");
       /* this.intervalId = setInterval(() => {
     this.handleRefresh();
     }, 1000);
     */
    this.timeStart();
};
    componentDidUpdate(){ //데이터 변경시
        console.log("update");
};
    render() {
        return <div>시계

            <button onClick={this.timeStart}>start</button>
            <button onClick={this.timeStop}>stop</button>
            <p>
        {this.props.props}
            </p>
        <p>
        {this.props.number}
    </p>
        <p>
        {this.state.date.toLocaleTimeString()}
    </p>

        </div>;
    }
}

export default Clock;




