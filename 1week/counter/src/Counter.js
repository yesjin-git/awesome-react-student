import React, {Component} from "react";

class Counter extends Component {
    render () { 
        return(
            <div>
                <p>
                {this.props.num}
                </p>
                <button onClick={this.props.add}>증가</button>
                <button onClick={this.props.sub}>감소</button>
                <button onClick={this.props.set}>리셋</button>
                
            </div>
        );
    }
}

export default Counter;
