import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../common/Footer';
import routePaths from '../../routePaths';
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
      <Link to={routePaths.index}>Go to index</Link>
      <Footer />
    </div>
  )
};

export default Counter;
