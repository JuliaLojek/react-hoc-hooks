import React from 'react';
import { withCounter } from '../hoc/withCounter';

function CounterFull(props) {
  return (
    <div>
      Counter: {props.counterValue}
      <button onClick={props.incrementCounter}>+</button>
      <button onClick={props.decrementCounter}>-</button>
      <button onClick={props.resetCounter}>reset</button>
    </div>
  )
}

export default withCounter(CounterFull);