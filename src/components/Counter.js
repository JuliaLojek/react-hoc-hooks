import React from 'react';
import { withCounter } from '../hoc/withCounter';

function Counter(props) {
  return (
    <div>
      Counter: {props.counterValue}
      <button onClick={props.incrementCounter}>+</button>
    </div>
  )
}

export default withCounter(Counter);