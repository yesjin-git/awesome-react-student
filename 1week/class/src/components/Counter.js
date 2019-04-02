import React, {Component} from 'react';
import 'tachyons';
import './Counter.css';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            num: 0
        }

    }

    
    //counter1이 호출하는건지 counter2가 호출하는건지 구분해서 인식할 수 있어야
    add = () => {
        const {id} = this.props;
        const {num} = this.state;

        if(id === 1) this.setState({num: num + 1});
        else if(id === 2) this.setState({num : num + 2});
    }

    subtract = () => {
        const {id} = this.props;
        const {num} = this.state;

        if(id === 1) {
            if(num > 0) {
                this.setState({num : num - 1});
            }
           
        } 
        else if(id === 2) {
            if(num > 0) {
                this.setState({num : num - 2});
            }

        }
    }

    reset = () => {

        console.log("reset!");
        this.setState({num: 0}, () => {
            console.log(this.state.num)
        });
    }


    render() {
        return (
            <div>
                
                <h2>{this.state.num}</h2>

                <button className="ma2 br3 dim bg-light-pink b--dotted b--dark-pink helvetica b" onClick={this.add}>add</button>
                <button className="ma2 br3 dim bg-light-blue b--dotted b--dark-blue helvetica b" onClick={this.subtract}>sub</button>
                <br></br>
                <button className="ma3 br3 helvetica b" onClick={this.reset}>RESET</button>
            </div>
        );
    }
}

export default Counter;