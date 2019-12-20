import React, {Component} from "react";

class Counter extends Component {
    state = {
        num : 0
        //num : this.props.number + 1      props로는 변경 불가능
    };
    // 람다식 : this, binding 에 관하여 공부하기
    handleInc = () => {
        this.setState ({
           num : this.state.num + this.props.number    // state로는 변경 가능
        });
    };

    handleDec = () => {
        this.setState ({
           num : this.state.num - this.props.number     // state로는 변경 가능
        });
    };

    handleZero = () => {
        this.setState ({
           num : 0     // state로는 변경 가능
        });
    };

    render() {
        return (
            <div>
                counter
                <p>{this.state.num}</p>
                <p>
                    <button onClick={this.handleInc}>+</button>
                    <button onClick={this.handleDec}>-</button>
                    <button onClick={this.handleZero}>reset</button>
                </p>
            </div>
        );     // 함수 실행이 아니라 그 결과값이 필요하기 때문에 handleInc() 에서 괄호를 뺀다
    }
}

export default Counter;