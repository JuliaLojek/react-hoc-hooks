import React from 'react';

function CounterFullRP(props) {
  return (
    <div>
      Counter: {props.counter}
      <button onClick={props.incrementCounter}>+</button>
      <button onClick={props.decrementCounter}>-</button>
      <button onClick={props.resetCounter}>reset</button>
    </div>
  )
}

export default CounterFullRP;