import React, {Component} from "react";

class Counter extends Component {
    state = {
        num: this.props.number
    };

    //setState를 해야만 화면이 갱신된다.
    //this, binding에 대하여 javascript스터디들 해보자. 이 이유 때문에 () => 를 사용한다.
    handleInc = () => {
        this.setState({
            num: this.state.num + 1
        });
    };

    render() {
        //this.props.number = 10; //props는 변경이 불가능하다.
        //this.handeInc()를 하면 첫 랜더링에서 함수가 자동으로 호출된다. 이후에 setState하면서 계속 화면 갱신.. 무한루프로 계속갱신 --> 에러
        return <div>
            counter
            <p>{this.props.number}</p>
            <p>{this.state.num}</p>
            <p>
                <button onClick={this.handleInc}>add</button>
                <button onClick={this.props.pInc}>padd</button>
            </p>
        </div>;
    }
}

export default Counter;