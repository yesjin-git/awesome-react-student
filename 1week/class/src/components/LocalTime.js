import React, {Component} from 'react';
import 'tachyons';

class LocalTime extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    
    componentDidMount() {
        //아래에서처럼 this를 사용해 변수를 할당해야 하는 이유는 나중에 componentWillUnmount에서 claerInterval 해주기 위해서인가...변수에 할당해주지 않아도 잘 돌아간다.
       this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //그냥 tick() { } 이렇게 정의해도 되던데 물어보기
    tick = () => {
        this.setState({
            date: new Date()
        });
    }

    stopTicking = () => {
        clearInterval(this.timerID);
    }

    startTicking = () => {
        this.setState({
            date: new Date()
        });
        this.timerID = setInterval(() => this.tick(), 1000);

    }
 
    render() {
       
        const time = this.state.date.toLocaleTimeString();

        return (
            <div className="tc">
                <h2 className="gold helvetica f1">{time}</h2>
                <button className="ma3 br3 dim bg-light-pink b--dotted b--dark-pink helvetica b" onClick={this.stopTicking}>stop</button>
                <button className="ma3 br3 dim bg-light-blue b--dark-blue b--dotted helvetica b" onClick={this.startTicking}>start</button>
            </div>
           
        );
    }
}

export default LocalTime;