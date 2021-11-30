// imports
import React from 'react';
import Footer from '../../common/Footer';
import './Greeting.css';

// component (function)
const Greeting = () => {
  const text = 'Hi';
  return (
    <>
      <span>{text}</span>
      <span>{text}</span>
      <Footer />
    </>
  );
}

// export
export default Greeting;
