// imports
import React from 'react';
import './Greeting.css';

// component (function)
const Greeting = () => {
  const text = 'Hi';
  return (
    <div className="container">
      <span>{text}</span>
      <span>{text}</span>
    </div>
  );
}

// export
export default Greeting;
