import React, { Component, Fragment } from 'react';

class Counter extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.initNum === nextProps.initNum) return false;
    return true;
  }
  
  render() {
    const { initNum, countNum, handleInc , handleDec, handleReset } = this.props;
    
    return (
      <Fragment>
        <p className="txt_result">값: {initNum}</p>
        <button className="btn_comm" onClick={() => handleInc(countNum)}>증감 +</button>
        <button className="btn_comm" onClick={() => handleDec(countNum)}>감소 -</button>
        <button className="btn_comm" onClick={handleReset}>초기화</button>
      </Fragment>
    );
  }
}

export default Counter;