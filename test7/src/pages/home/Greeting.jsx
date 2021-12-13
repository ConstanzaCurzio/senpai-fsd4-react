// imports
import React from 'react';

import TreeImage from '../../assets/tree.jpeg';
import Footer from '../../common/Footer';
import './Greeting.css';

// component (function)
const Greeting = () => {
  const text = 'Hi';
  return (
    <>
      <span>{text}</span>
      <span>{text}</span>
      <img src={TreeImage} alt="tree" />
      <Footer />
    </>
  );
}

// export
export default Greeting;
