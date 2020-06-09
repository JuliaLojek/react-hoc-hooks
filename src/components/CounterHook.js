import React from 'react';
import useCounter from '../hooks/useCounter';

function CounterHook() {
  const [counterValue, increment, decrement, reset] = useCounter(4);

  return (
    <div>
      Counter: {counterValue}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterHook;