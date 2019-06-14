import React from 'react';

class Counter extends React.Component {
  state = {
    num: 0
  };
  add = () => {
    const { num } = this.state;
    const { interval } = this.props;

    this.setState({num:num + interval});
  }
  sub = () => {
    // this.setState({num:this.state.num - this.props.interval});

    const { num } = this.state;
    const { interval } = this.props;

    this.setState({num:num - interval});
  }
  reset = () => {
    this.setState({num:0});
  }
  render() {
    const { num } = this.state;
    const { number } = this.props;

    return (
      <div>
        <p>{number}</p>
        <p>{num}</p>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Counter;