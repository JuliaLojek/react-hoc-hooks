import { useState } from 'react';

function useCounter (init) {
  const [ counterValue, setCounterValue ] = useState(init);

  const increment = () => setCounterValue(counterValue + 1);
  const decrement = () => setCounterValue(counterValue - 1);
  const reset = () => setCounterValue(0);

  return [counterValue, increment, decrement, reset];
}

export default useCounter;