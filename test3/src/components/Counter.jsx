import React, { useState } from 'react';

import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newIncrement = count + 1;
    setCount(newIncrement);
  }

  return (
    <div className="counterContainer">
      <span className="counterText">Counter is now in: {count}</span>
      <button onClick={increment} className="counterButton">
        Increment Counter
      </button>
    </div>
  )
};

export default Counter;
