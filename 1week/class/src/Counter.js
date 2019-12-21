import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: this.props.number,
    };
  }

  handlIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  handleReset = () => {
    this.setState({
      number: 0
    })
  }

  h4Style = {
    color: '#666',
    marginTop: '50px',
    clear: 'both'
  }

  divStyle = {
    width: '50%',
    float: 'left'
  }
  render() {
    return (
      <>
        <div style={this.divStyle}>
          <h4 style={this.h4Style}>1 상승</h4>
          <h3>값: {this.state.number}</h3>
          <button onClick={this.handlIncrease}>+</button>
          <button onClick={this.handleDecrease}>-</button>
          <button onClick={this.handleReset}>reset</button>
        </div>
        <div style={this.divStyle}>
          <h4 style={this.h4Style}>2 상승</h4>
          <h3>값: {this.props.double_number}</h3>
          <button onClick={this.props.handleDoubleIncrease}>+</button>
          <button onClick={this.props.handleDoubleDecrease}>-</button>
          <button onClick={this.props.handleDoubleReset}>reset</button>
        </div >
      </>
    );
  };
}

export default Counter