import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../common/Footer';
import routePaths from '../../routePaths';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [countSecond, setCountSecond] = useState(0);

  const increment = () => {
    const newIncrement = count + 1;
    setCount(newIncrement);
  }

  const incrementSecond = () => {
    const newIncrement = countSecond + 1;
    setCountSecond(newIncrement);
  }

  useEffect(() => {
    console.log('Effect that runs on mount');
  }, []);

  useEffect(() => {
    console.log('Effect that runs on mount and everytime count changes');
  }, [count]);

  useEffect(() => {
    console.log('Effect that runs on mount and everytime countSecond changes');
  }, [countSecond]);

  useEffect(() => {
    console.log('Effect that runs on mount and everytime count or countSecond changes');
  }, [count, countSecond]);

  return (
    <div className="counterContainer">
      <span className="counterText">Counter is now in: {count}</span>
      <button onClick={increment} className="counterButton">
        Increment Counter
      </button>
      <span className="counterText">Counter second is now in: {countSecond}</span>
      <button onClick={incrementSecond} className="counterButton">
        Increment Counter Second
      </button>
      <Link to={routePaths.index}>Go to index</Link>
      <Footer />
    </div>
  )
};

export default Counter;
