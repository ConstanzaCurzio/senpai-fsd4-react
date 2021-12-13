import React from 'react';
import { Link } from 'react-router-dom';

import routePaths from '../../routePaths';
import './Unauthorized.css'

const Unauthorized = () => {
  return (
    <div className="notFound">
      <span className="notFoundText">Unauthorized</span>
      <Link to={routePaths.index} className="notFoundLink">
        Go back to home
      </Link>
    </div>
  )
};

export default Unauthorized;
