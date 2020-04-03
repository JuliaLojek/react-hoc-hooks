import React, { Component } from 'react';

export function withCounter(CounterComponent) {
  return class extends Component {
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
      const { counter } = this.state;
      return (
        <CounterComponent
          counterValue={counter}
          incrementCounter={this.incrementCounter}
          decrementCounter={this.decrementCounter}
          resetCounter={this.resetCounter}
        />
      );
    }
  }
}