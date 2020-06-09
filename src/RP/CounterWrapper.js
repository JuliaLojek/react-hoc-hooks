import { Component } from 'react';

class CounterWrapper extends Component {
  state = { counter: Number(localStorage.getItem("counter")) || 0 };

  componentDidUpdate() {
    localStorage.setItem("counter", this.state.counter);
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  resetCounter = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return this.props.render({
      counter: this.state.counter,
      incrementCounter: this.incrementCounter,
      decrementCounter: this.decrementCounter,
      resetCounter: this.resetCounter
    });
  }

}

export default CounterWrapper;