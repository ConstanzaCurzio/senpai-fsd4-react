import React from 'react';
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  return (
    <div className="task">
      Product {params.productId}
    </div>
  )
};

export default Product;
