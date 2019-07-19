import React, { Component, Fragment } from 'react';
import './Counter.css';

class Counter extends Component {
  state = {
    initNum : 0
  }

  setNumber = (num)=>{
    this.setState({
      initNum : num
    });
  }
  
  render() {
    const { setNumber } = this;
    const { initNum } = this.state;
    const { interval } = this.props;
    
    return (
      <Fragment>
        <p className="txt_result">값: {initNum}</p>
        <button className="btn_comm" onClick={() => setNumber(interval + initNum)}>증감 +</button>
        <button className="btn_comm" onClick={() => setNumber(initNum - interval)}>감소 -</button>
        <button className="btn_comm" onClick={() => setNumber(0)}>초기화</button>
      </Fragment>
    );
  }
}

export default Counter;