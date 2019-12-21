import React, {Component} from 'react';

class Clock extends Component {
    state={
        date:new Date()
    };
    //생명주기를 활용해서 작업하기
    componentDidMount(){
        this.interValId = setInterval(()=>{
            this.setState({date:new Date()});
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.interValId);
    }
    startFunc=()=>{
        this.componentDidMount();
    }
    stopFunc=()=>{
        // clearInterval(this.interValId);
        this.componentWillUnmount();
    }

    render(){
        return (
            <div>
               <h2>{this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.stopFunc}>stop</button><br/>
                <button onClick={this.startFunc}>start</button>
            </div>
        );
    }
}

export default Clock;