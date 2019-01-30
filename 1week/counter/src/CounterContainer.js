import React, {Component} from 'react';
import Counter from './Counter';


class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      interval: this.props.interval
    };

    this.handleIncrease = () => {
      this.setState({
        number : this.state.number + this.state.interval
      })
    };

    this.handleDecrease = () => {
      this.setState({
        number : this.state.number - this.state.interval
      })
    };

    this.handleReset = () => {
      this.setState({
        number: 0
      })
    };

  }


  render() {
    return (
      <Counter number={this.state.number} handleIncrease={this.handleIncrease} handleDecrease={this.handleDecrease} handleReset={this.handleReset} />
    );
  }
}

CounterContainer.defaultProps = {
  interval: 1
};

export default CounterContainer;
