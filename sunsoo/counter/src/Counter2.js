import React from 'react';

class Counter2 extends React.Component {
  state = {
    num: 0
  };
  add = () => {
    this.setState({num:this.state.num + 2});
  }
  sub = () => {
    this.setState({num:this.state.num - 2});
  }
  reset = () => {
    this.setState({num:0});
  }
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <p>{this.state.num}</p>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Counter2;