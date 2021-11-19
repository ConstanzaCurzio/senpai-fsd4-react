// imports
import React from 'react';
import './Greeting.css';

// component (function)
const Greeting = () => {
  const text = 'Hi';
  return (
    <>
      <span>{text}</span>
      <span>{text}</span>
    </>
  );
}

// export
export default Greeting;
