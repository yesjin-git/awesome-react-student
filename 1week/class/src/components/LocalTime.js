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
        //아래에서처럼 this를 사용해 변수를 할당해야 하는 이유는 나중에 componentWillUnmount에서 claerInterval 해주기 위해서이다. 

        //아래의 this는 해당 클래스(LocalTime)를 가리킨다. 클래스 바디에서 클래스 멤버 변수를 생성하는 방식이 지원이 안 되기 때문이다. 그런데 클래스 메소드(프로퍼티) 내부에서는 가능하다. 아래의 멤버 변수는 생명주기 API 함수들만 접근할 수 있는데 아니라 클래스 내부 다른 메소드들에서도 접근 가능하다. 알고 보니 이미 stopTicking 메소드에서 접근하고 있었다.
        //P.S : 최신 문법에서는 클래스 내부에서 멤버 변수를 생성하는게 가능해졌다고 한다. 
        
       this.timerID = setInterval(() => this.tick(), 1000);
    }
    
    
    componentWillUnmount() {
        console.log(this.timerID);
        clearInterval(this.timerID);
    }

    //해당 클래스 메소드 함수가 render() 내부에 위치하여 렌더링에 포함되게 된다면
    //또 다른 실행 컨텍스트 상에 놓여지게 되는 것이다. 그래서 바인딩이 필요하다고 설명을 들었다.

    //좀 더 자세히 말하자면 onClick 이벤트로 함수가 실행될 때는 전역(Window) 객체의 컨텍스트에서 실행되는 것이다. 
    
    //"화살표 함수는 전역 컨텍스트에서 실행될 때 this를 새로 정의하지 않습니다. 대신 코드에서 바로 바깥의 함수(혹은 class)의 this값이 사용됩니다." from MDN

    //그런데 아래의 tick 메소드는 현재 코드 상으로 onClick 이벤트에 쓰이지는 않는다. 그래서 화살표 함수가 아닌 함수 선언식으로 작성되어도 문제 없이 동작한다.
    
    tick() {
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