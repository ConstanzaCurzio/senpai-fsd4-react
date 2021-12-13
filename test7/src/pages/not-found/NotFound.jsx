import React from 'react';
import { Link } from 'react-router-dom';

import routePaths from '../../routePaths';
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="notFound">
      <span className="notFoundText">404 Not Found</span>
      <Link to={routePaths.index} className="notFoundLink">
        Go back to home
      </Link>
    </div>
  )
};

export default NotFound;
