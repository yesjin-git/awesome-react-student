import React, { Component } from "react";
//react를 사용하기 위해서 react 라이브러리에서 React와 Component를 호출함

//Counter 컴포넌트를 생성 하고 Component를 상속
class Hcount extends Component {
   

state = {
  number : 0 
}


countUp = () => {
  this.setState({ number : this.state.number + this.props.scale  }); 
}



countDown = () => {
  this.setState({ number : this.state.number - this.props.scale  });
} 
 


resetCount = () => {
  this.setState({ number : this.state.number = 0   });
}

 


//jsx를 화면에 그려주는 함수 
  render() {
    return (
      //두개 이상의 엘리먼트를 return 할때는 반드시 div로 감싸야 한다. 
     <>
      

      <div>
      
      <p>{this.state.number}</p>
        <button onClick={this.countUp}>+</button>
        <button onClick={this.countDown}>-</button> 
        <button onClick={this.resetCount}>초기화</button>
      </div>

     </>

    ); 
  }
}

export default Hcount;
