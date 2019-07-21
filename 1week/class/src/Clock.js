import React, { Component, Fragment } from 'react';

class Clock extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.date === nextProps.date) return false;
    return true;
  }
  
  render() {
    const { date, stopClock, startClock } = this.props;
    
    return (
      <Fragment>
        <p className="txt_result">{date}</p>
        <button className="btn_comm" onClick={stopClock}>멈춤</button>
        <button className="btn_comm" onClick={startClock}>시작</button>
      </Fragment>
    );
  }
}

export default Clock;