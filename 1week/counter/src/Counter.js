import React, { Component } from 'react';

class Counter extends Component {
  render(){
    const style = {      
      backgroundColor: 'white',
      color: 'black',
      fontSize: '16px',
      border: 'none',
      outline: 'none',
      borderRadius: '5px',
      margin: '2px',
      minWidth: '24px'
    };

    return (
      <div>
        <h1>Counter</h1>
        <p style={{marginBottom: 0}}>값: {this.props.num}</p>
        <button style={style} onClick={this.props.add}>+</button>
        <button style={style} onClick={this.props.sub}>-</button>
        <button style={style} onClick={this.props.reset}>reset</button>
      </div>      
    )
  }
}

export default Counter;