import React, {Component} from 'react';

class Clock extends Component {
    state={
        date:new Date()
    };
    //생명주기를 활용해서 작업하기
    componentDidMount(){
        // this.interValId = setInterval(()=>{
        //     this.setState({date:new Date()});
        // },1000);
        this.startFunc();
    }
    componentWillUnmount(){
        // clearInterval(this.interValId);
        this.stopFunc();
    }
    startFunc=()=>{
        this.interValId = setInterval(()=>{
            this.setState({date:new Date()});
        },1000);
    }
    stopFunc=()=>{
        clearInterval(this.interValId);
        // this.componentWillUnmount();
    }

    //반대로 작업했음
    //lifeCycle 내부에 직접 이벤트를 작성하면 안되는 건가?
    //직접 작성하면 매서드 여러개일때 관리 안되서 분리하는것 같네

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