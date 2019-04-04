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
   

//     add = () => {
//         const {id} = this.props;
//         const {num} = this.state;

//         if(id === 1) this.setState(() => ({num: num + 1}));
//         else if(id === 2) this.setState(() => ({num : num + 2}));
//     }
// //change id
//     subtract = () => {
//         const {id} = this.props;
//         const {num} = this.state;

//         if(id === 1) {
//             if(num > 0) {
//                 this.setState(() => ({num : num - 1}));
//             }
           
//         } 
//         else if(id === 2) {
//             if(num > 0) {
//                 this.setState(() => ({num : num - 2}));
//             }

//         }
//     }
   

    reset = () => {

        this.setState(() => ({num: 0}));
    }

    //!! JSX 내부에서 활용하는 메소드에 매개변수를 전달하는 방법!!
    //onClick내부에서 화살표 함수 이용하여 해당 함수를 리턴하자
    //그러면 원하는 매개변수를 넣어서 활용할 수 있다.
    //그냥 this.setNumber(this.props.interval) 이렇게 JSX 상에서 함수를 호출하면 오류 발생.

    //코드 리뷰 받은대로 setNumber 함수 하나로 더하고 빼는 기능을 모두 구현하도록 했다.
    //그러나 데이터 논리구조가 render 함수 밖에서 정의되지 않고, html처럼 생긴 jsx 속에 들어가버리는 형태이기에 추후에 유지보수가 덜 용이해지는 측면이 있다.
    setNumber = (number) => {
        this.setState({num: this.state.num + number});
    }
    


    render() {
        return (
            <div>
                
                <h2>{this.state.num}</h2>
           
                <button className="ma2 br3 dim bg-light-pink b--dotted b--dark-pink helvetica b" onClick={() => this.setNumber(this.props.interval)}>add</button>
                <button className="ma2 br3 dim bg-light-blue b--dotted b--dark-blue helvetica b" onClick={() => this.setNumber(-this.props.interval)}>sub</button>
                <br></br>
                <button className="ma3 br3 helvetica b" onClick={this.reset}>RESET</button>
            </div>
        );
    }
}

export default Counter;