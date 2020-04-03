import React from 'react';

function CounterFullRP(props) {
  return (
    <div>
      Counter: {props.counter}
      <button onClick={props.incrementCounter}>+</button>
    </div>
  )
}

export default CounterFullRP;