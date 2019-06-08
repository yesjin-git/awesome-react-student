import React from 'react';

class Counter extends React.Component {
  state = {
    num: 0
  };
  add = () => {
    this.setState({num:this.state.num + 1});
  }
  sub = () => {
    this.setState({num:this.state.num - 1});
  }
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <p>{this.state.num}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.sub}>sub</button>
      </div>
    );
  }
}

export default Counter;